import { Request, Response} from "express";
import Erros, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { AdminRequest, ExtendedRequest } from "../libs/types/member";
import { ProductInput, ProductInquiry } from "../libs/types/product";
import { ProductCollection } from "../libs/enums/product.enum";

const productService = new ProductService;
const productController: T = {};

/** SPA **/

 productController.getProducts = async (req: Request, res:Response) => {
    try{
        console.log("getProducts");       
        const {page, limit, order, productCollection, search} = req.query;
        const inquiry: ProductInquiry = {
            order: String(order),
            page: Number(page),
            limit: Number(limit),
        };
        if(productCollection) inquiry.productCollection = productCollection as ProductCollection;

        if(search) inquiry.search = String(search);

        const result = await productService.getProducts(inquiry)

        res.status(HttpCode.OK).json(result)
    } catch(err){
        console.log("ERROR, getProducts", err);
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
        // res.json({})
    }
 }

 productController.getProduct = async (req: ExtendedRequest, res:Response) => {
    try{
        console.log("getProduct");       
        const {id} = req.params;
        console.log(req.member)
        const memberId = req.member?._id ?? null;
        const result = await productService.getProduct(memberId, id)

        res.status(HttpCode.OK).json(result)
    } catch(err){
        console.log("ERROR, getProduct", err);
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
    }
 }





/** SSR**/

productController.getAllProducts = async (req:Request, res:Response)=>{
    try{
        console.log("getAllProducts");
        const data = await productService.getAllProducts();
        res.render("products", {products: data})
    } catch(err){
        console.log("ERROR, getAllProducts", err);
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
        // res.json({})
        
    }
    
};
productController.createNewProduct = async (req:AdminRequest, res:Response)=>{
    try{
        console.log("createNewProduct");
        if(!req.files?.length) throw new Erros(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

        const data: ProductInput = req.body;
        data.productImages = req.files?.map(ele =>{
            return ele.path.replace(/\\/g,"/");
        });
        await productService.createNewProduct(data);


        res.send(
            `<script> alert("Successfull creation"); window.location.replace('/admin/product/all') </script>`
          );
    } catch(err){
        console.log("ERROR, createNewProduct", err);
        const message = err instanceof Erros ? err.message : Message.SOMETHING_WENT_WRONG;
        
        res.send( 
            `<script> alert("${message}"); window.location.replace('/admin/signup') </script>`
          );
    }  
};

productController.updateChosenProduct = async (req:Request, res:Response)=>{
    try{

        console.log("updateChosenProduct");
        const id  = req.params.id;
        const result  = await productService.updateChosenProduct(id, req.body)


        res.status(HttpCode.OK).json({ data: result })
    } catch(err){
        console.log("ERROR, updateChosenProduct", err);
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
        // res.json({}) 
    }   
};


export default productController