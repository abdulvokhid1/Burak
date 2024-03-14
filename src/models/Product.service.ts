import ProductModel from "../scheme/Product.model";

class ProductService {
private readonly productModel;
    constructor(){
        this.productModel = ProductModel;
    }

}
 export default ProductService;