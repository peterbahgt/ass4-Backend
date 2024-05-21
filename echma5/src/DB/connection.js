const mysql = require("mysql2");

function createConnection() {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "assignment4",
  });
  return connection;
}
module.exports = createConnection;
