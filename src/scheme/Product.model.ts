import mongoose, {Schema} from "mongoose";
import { ProductCollection,ProductSize, ProductStatus,ProductVolume} from "../libs/enums/product.enum";

const productSchema = new Schema (

    {
        productStatus: {
            type: String,
            enum: ProductStatus,
            default: ProductStatus.PAUSE
        },
        productCollection: {
            type: String,
            enum: ProductCollection,
            required: true,
        },

        productName: {
            type: String,
            required: true,
        },
        productPrice: {
            type: Number,
            required: true,
        },
        producLeftCount: {
            type: Number,
            required: true,
        },

        ProductSize: {
            type: String,
            enum: ProductSize,
            default: ProductSize.NORMAL
        },

        productVolume: {
            type: String,
            enum: ProductVolume,
            default:ProductVolume.ONE,
        },

        productDesk: {
            type: String,
            required: true,
        },
        
        productImages: {
            type: [String],
            default: [],
        },

        productViews: {
            type: Number,
            default: 0,
        },
    },
    {timestamps:true} // updateAt, createAt

);

productSchema.index(
    {productName:1, productSzie:1, productVolume:1},
    {unique:true}
);

export default mongoose.model("Product",productSchema)
