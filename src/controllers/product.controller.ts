import { Request, Response} from "express";
import Erros from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";

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
productController.createNewProduct = async (req:Request, res:Response)=>{
    try{
        console.log("createNewProduct");
        res.send("Done")
    } catch(err){
        console.log("ERROR, createNewProduct", err);
        if( err instanceof Erros) res.status(err.code).json(err);
        else res.status(Erros.standard.code).json(Erros.standard )
        // res.json({})   
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