const mysql = require("mysql");

// Connection Pool
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// View Books
exports.view = (req, res) => {
  // Books the connection
  connection.query("SELECT * FROM books", (err, rows) => {
    // When done with the connection, release it
    if (!err) {
      let removedBooks = req.query.removed;
      res.render("home", { rows, removedBooks });
    } else {
      console.log(err);
    }
    console.log("The data from books table: \n", rows);
  });
};

// Find Books by Search
exports.find = (req, res) => {
  let searchTerm = req.body.search;
  // Books the connection
  connection.query(
    "SELECT * FROM books WHERE name LIKE ?",
    ["%" + searchTerm + "%", "%" + searchTerm + "%"],
    (err, rows) => {
      if (!err) {
        res.render("home", { rows });
      } else {
        console.log(err);
      }
      console.log("The data from books table: \n", rows);
    }
  );
};

exports.form = (req, res) => {
  res.render("add-books");
  res.render("add-categories");
};

// Add new books
exports.create = (req, res) => {
  const { name, stok, image, deskripsi, category_id } = req.body;
  let searchTerm = req.body.sear;

  // Books the connection
  connection.query(
    "INSERT INTO books SET name = ?, stok = ?, image = ?, deskripsi = ?,  category_id = ?",
    [name, stok, image, deskripsi, category_id],
    (err, rows) => {
      if (!err) {
        res.render("add-books", { alert: "Books added successfully." });
      } else {
        console.log(err);
      }
      console.log("The data from books table: \n", rows);
    }
  );
};

// Edit Books
exports.edit = (req, res) => {
  // Books the connection
  connection.query(
    "SELECT * FROM books WHERE id = ?",
    [req.params.id],
    (err, rows) => {
      if (!err) {
        res.render("edit-books", { rows });
      } else {
        console.log(err);
      }
      console.log("The data from books table: \n", rows);
    }
  );
};

// Update Books
exports.update = (req, res) => {
  const { name, stok, image, deskripsi, category_id } = req.body;
  // Books the connection
  connection.query(
    "UPDATE books SET  name = ?, stok = ?, image = ?, deskripsi = ?,  category_id = ? WHERE id = ?",
    [name, stok, image, deskripsi, category_id, req.params.id],
    (err, rows) => {
      if (!err) {
        // Books the connection
        connection.query(
          "SELECT * FROM books WHERE id = ?",
          [req.params.id],
          (err, rows) => {
            // When done with the connection, release it

            if (!err) {
              res.render("edit-books", {
                rows,
                alert: `${name} has been updated.`,
              });
            } else {
              console.log(err);
            }
            console.log("The data from books table: \n", rows);
          }
        );
      } else {
        console.log(err);
      }
      console.log("The data from books table: \n", rows);
    }
  );
};

// Delete books
exports.delete = (req, res) => {
  // Delete a record

  // User the connection
  connection.query(
    "DELETE FROM books WHERE id = ?",
    [req.params.id],
    (err, rows) => {
      if (!err) {
        res.redirect("/");
      } else {
        console.log(err);
      }
      console.log("The data from books table: \n", rows);
    }
  );

  // Hide a record

  //   connection.query(
  //     "UPDATE books SET id = ? WHERE id = ?",
  //     ["removed", req.params.id],
  //     (err, rows) => {
  //       if (!err) {
  //         let removedBooks = encodeURIComponent("Books successeflly removed.");
  //         res.redirect("/?removed=" + removedBooks);
  //       } else {
  //         console.log(err);
  //       }
  //       console.log("The data from beer table are: \n", rows);
  //     }
  //   );
};

// View Books
exports.viewall = (req, res) => {
  // Book the connection
  connection.query(
    "SELECT * FROM books WHERE id = ?",
    [req.params.id],
    (err, rows) => {
      if (!err) {
        res.render("view-books", { rows });
      } else {
        console.log(err);
      }
      console.log("The data from books table: \n", rows);
    }
  );
};

// categories

// Add new categories
exports.create = (req, res) => {
  const { name } = req.body;
  let searchTerm = req.body.sear;

  // Books the connection
  connection.query(
    "INSERT INTO categories SET name = ?",
    [name],
    (err, rows) => {
      if (!err) {
        res.render("add-categories", {
          alert: "Categories successfully.",
        });
      } else {
        console.log(err);
      }
      console.log("The data from categories table: \n", rows);
    }
  );
};

// // Update Books
// exports.update = (req, res) => {
//   const { name } = req.body;
//   // Books the connection
//   connection.query("UPDATE categories SET  name = ?", [name], (err, rows) => {
//     if (!err) {
//       // Books the connection
//       connection.query(
//         "SELECT * FROM categories WHERE id = ?",
//         [req.params.id],
//         (err, rows) => {
//           // When done with the connection, release it

//           if (!err) {
//             res.render("edit-categories", {
//               rows,
//               alert: `${name} has been updated.`,
//             });
//           } else {
//             console.log(err);
//           }
//           console.log("The data from categories table: \n", rows);
//         }
//       );
//     } else {
//       console.log(err);
//     }
//     console.log("The data from categories table: \n", rows);
//   });
// };
