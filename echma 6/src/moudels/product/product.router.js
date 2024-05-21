
import express from "express";
const router = express.Router();
import {getAllPro,addProduct,updateProduct,delPro,searchProduct} from"./control/product.controller.js"
//get all product
router.get("/product",getAllPro)
//add product 
router.post("/product",addProduct)
// update product
router.put("/product/:id",updateProduct)
// delete product
router.delete("/product/:id",delPro)
//search by price
router.get("/productSearch",searchProduct)
export default router