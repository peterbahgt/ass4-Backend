
import mysql from "mysql2"
function createConnection() {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "assignment4",
  });
  return connection;
}
export default createConnection