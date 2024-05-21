const router= require("express").Router()
const {getAllPro,addProduct,updateProduct,delPro,searchProduct} = require("./control/product.controller")
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
module.exports=router