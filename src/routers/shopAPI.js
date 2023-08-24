import express from "express";
import ShopController from "../controllers/shopController.js";
const shopAPI = express.Router();

shopAPI.post("/shop", ShopController.createShop);

export default shopAPI;
