const router= require("express").Router()
const {getAllUser,
    getAllUserAndProduct,
    searchId,
    addUser,
    updateUser,
    deleteUser,
    searchNameAndAge
} = require("./contorall/user.control.js")
//get all user
router.get("/user",getAllUser)
//get all user and products
router.get("/userAndPro",getAllUserAndProduct)
//search id 
router.get("/user/:id",searchId)
//add user
router.post("/user",addUser)
//update user
router.patch("/user/:id",updateUser)
//delete user
router.delete("/user/:id",deleteUser)
//search name and age 
router.get("/userSearch",searchNameAndAge)

module.exports=router