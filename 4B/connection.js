const mysql = require("mysql");

let mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "perpustakaan",
  multipleStatementsL: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("connect");
  } else {
    console.log("Failed");
  }
});

module.exports = mysqlConnection;
