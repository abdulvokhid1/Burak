import Erros, {HttpCode,Message} from "../libs/Errors";
import ProductModel from "../scheme/Product.model";
import { ProductInput, Product, ProductUpdateInput } from "../libs/types/product";
import { shapeIntoMongooseObjectId } from "../libs/config";

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

    };

    public async updateChosenProduct(id:string, input: ProductUpdateInput): Promise<Product>{
        id = shapeIntoMongooseObjectId(id);
        const result = await this.productModel.findOneAndUpdate( { _id: id}, input, {new: true} ).exec();
        if(!result) throw new Erros(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

         return result;

    }


}
 export default ProductService;