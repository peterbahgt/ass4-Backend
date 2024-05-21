
import userRouter from "./moudels/user/user.router.js"
import proRouter from "./moudels/product/product.router.js"
import connection from"./DB/connection.js"
function bootStrap(app) {
    app.use(userRouter);
    app.use(proRouter);
    connection()
}
export default bootStrap