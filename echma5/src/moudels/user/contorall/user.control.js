const connection=require("../../../DB/connection.js")
//get all user
const getAllUser=(req,res,next)=>{
    const db=connection()
    const query =`SELECT * FROM users`
 db.execute(query,(error,result,fields)=>{
        if(error){
            return res.json({message:"error happen",error})
        }
        return res.json({message:"done",result})
    })
}
//get all user with all products
const getAllUserAndProduct=(req,res,next)=>{
    const db=connection()
    const query =`SELECT u.id as userId,u.name,u.age,u.email,u.password,p.pName,p.pDescription,p.price,p.id FROM users as u
     INNER JOIN products as p  `
 db.execute(query,(error,result,fields)=>{
        if(error){
            return res.json({message:"error happen",error})
        }
        return res.json({message:"done",result})
    })
}
// search by id 
const searchId=(req,res,next)=>{
    const db=connection()
    const{id}=req.params
    const query =`SELECT u.id,u.name,u.email,u.password,p.id as productId,p.pName ,p.pDescription, p.price FROM users as u 
    INNER JOIN products as p ON p.userId=u.id WHERE u.id=${id}`
    db.execute(query,(error,result,fields)=>{
        if(error){
            return res.json({message:"error happen",error})
        }
        return res.json({message:"done",result})
    })
}
// add user
const addUser=(req,res,next)=>{
    const db=connection()
    const{email,name,password,age}=req.body
    const query =`INSERT INTO users(email,name,password,age) VALUES("${email}","${name}","${password}",${age})`
    db.execute(query,(error,result,fields)=>{
        if(error){
            if (error.errno == 1062) {
                return res.json({message:"email already exixt"})
            }
            return res.json({message:"error happen",error})
        }
        return res.json({message:"done",result})
    })
}
//update user
const updateUser=(req,res,next)=>{
    const db=connection()
        const{id}=req.params
        const{name,age}=req.body
        const query =`UPDATE users SET name="${name}" , age=${age} WHERE id=${id}`
        db.execute(query,(error,result,fields)=>{
            if(error){
                return res.json({message:"error happen",error})
            }
            return result.affectedRows? res.json({message:"done",result}):res.json({message:"invalid id"})
        })
    }
// delete user
const deleteUser= (req, res, next) => {
    const db=connection()
    const { id } = req.params;
    const query = `DELETE FROM users WHERE id =${id}`;
    db.execute(query, (error, result, fields) => {
      if (error) {
        return res.json({ message: "error happened", error });
      }
      return result.affectedRows ? res.json({ message: "done", result }) : res.json({ message: "invalid id" });
    });
  }   
//  search user where his name start with 
const searchNameAndAge= (req, res, next) => {
    const db=connection()
    const query = `SELECT * FROM users WHERE name LIKE 'a%' AND age < 30`;
    db.execute(query, (error, result, fields) => {
      if (error) {
        return res.json({ message: "An error occurred", error });
      }
      return res.json({ message: "Query executed successfully", result });
    });
  }
module.exports={
    getAllUser,
    getAllUserAndProduct,
    searchId,
    addUser,
    updateUser,
    deleteUser,
    searchNameAndAge

}