const userRouter = require("./moudels/user/user.router.js");
const proRouter = require("./moudels/product/product.router.js");
const connection=require("./DB/connection.js")
function bootStrap(app) {
    app.use(userRouter);
    app.use(proRouter);
    connection()
}
module.exports= bootStrap