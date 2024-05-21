const connection=require("../../../DB/connection.js")
//GET ALL PRODUCT
const getAllPro=(req,res,next)=>{
    const db=connection()
    const query =`SELECT p.id,p.pName,p.pDescription,p.price,u.id as userId,u.name 
    as userName ,u.email FROM products as p INNER JOIN users as u ON p.userId=u.id`
    db.execute(query,(error,result,fields)=>{
        if(error){
            return res.json({message:"error happen",error})
        }
        return res.json({message:"done",result})
    })
}
//add product
const addProduct=(req,res,next)=>{
    const db=connection()
    const{pName,pDescription,price,userId}=req.body
    const query =`INSERT INTO products(pName,pDescription,price,userId) VALUES("${pName}","${pDescription}","${price}",${userId})`
    db.execute(query,(error,result,fields)=>{
        if(error){
            if (error.errno == 1452) {
                return res.json({message:"invalid user id "})
            }
            return res.json({message:"error happen",error})
        }
        return res.json({message:"done",result})
    })
}
//update product
const updateProduct=(req,res,next)=>{
    const db=connection()
        const{id}=req.params
        const{pName,pDescription,price,userId}=req.body
        const query =`UPDATE products SET pName="${pName}" ,pDescription="${pDescription}",price=${price}  WHERE id=${id}
        AND userId=${userId}`
        db.execute(query,(error,result,fields)=>{
            if(error){
                return res.json({message:"error happen",error})
            }
            return result.affectedRows? res.json({message:"done",result}):res.json({message:"invalid user id or product id"})
        })
    }
//delete product
const delPro= (req, res, next) => {
    const db=connection()
    const { id } = req.params;
    const{userId}=req.body;
    const query = `DELETE FROM products WHERE id =${id} AND userId=${userId}`;
    db.execute(query, (error, result, fields) => {
      if (error) {
        return res.json({ message: "error happened", error });
      }
      return result.affectedRows ? res.json({ message: "done", result }) : res.json({ message: "invalid id" });
    });
  }   
// search by price
const searchProduct=(req, res, next) => {
    const db=connection()
    const query = `SELECT p.id, p.pName AS productName, p.pDescription, p.price, u.id AS userId, u.name AS userName, u.email
                   FROM products AS p
                   INNER JOIN users AS u ON p.userId = u.id
                   WHERE p.price > 3000`;
    db.execute(query, (error, result, fields) => {
      if (error) {
        return res.json({ message: "An error occurred", error });
      }
      return res.json({ message: "Query executed successfully", result });
    });
  }
module.exports={
    getAllPro,
    updateProduct,
    delPro,
    addProduct,
    searchProduct

}
