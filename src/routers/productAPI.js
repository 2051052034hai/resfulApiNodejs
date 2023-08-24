import express from "express";
import productController from "../controllers/productController.js";
const productAPI = express.Router();

productAPI.post("/product", productController.postCreateProduct);
productAPI.get("/product", productController.getAllProducts);

export default productAPI;
