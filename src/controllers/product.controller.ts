import { Request, Response} from "express";
import Erros, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";
import { ProductInput } from "../libs/types/product";

const productService = new ProductService;
const productController: T = {};

productController.getAllProducts = async (req:Request, res:Response)=>{
    try{
        console.log("getAllProducts");
        res.render("products")
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
        if(!req.files.length) throw new Erros(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

        const data: ProductInput = req.body;
        data.productImages = req.files?.map(ele =>{
            return ele.path.replace(/\\/g,"/");
        });
        await productService.createNewProduct(data);


        res.send(
            `<script> alert("Successfull creation"); window.location.replace('admin/signup') </script>`
          );
    } catch(err){
        console.log("ERROR, createNewProduct", err);
        const message = err instanceof Erros ? err.message : Message.SOMETHING_WENT_WRONG;
        
        res.send( 
            `<script> alert("${message}"); window.location.replace('admin/signup') </script>`
          );
    }  
};

productController.updateChosenProduct = async (req:Request, res:Response)=>{
    try{

        console.log("updateChosenProduct")
    } catch(err){
        console.log("ERROR, updateChosenProduct", err);
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
        // res.json({}) 
    }   
};


export default productController