import Erros, {HttpCode,Message} from "../libs/Errors";
import ProductModel from "../scheme/Product.model";
import { ProductInput, Product } from "../libs/types/product";

class ProductService {
private readonly productModel;
    constructor(){
        this.productModel = ProductModel;
    }
    /** SPA */
 


    /** SSR */
    public async createNewProduct(input: ProductInput): Promise<Product>{
        try{
            return await this.productModel.create(input);
        } catch(err){
         console.error("Error, model:createNewProduct", err);
         throw new Erros(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
        }

    }


}
 export default ProductService;