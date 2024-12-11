import mongo from "mongose";

const productSchema = new mongo.Schema({
    nombre: String,
    precio: Number,
    descripcion: String,
})

const Product = mongo.model("Product", productSchema);

export default Product;