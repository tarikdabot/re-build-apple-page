const express = require("express");
const mysql = require("mysql2");
const app = express();
app.use(express.json()); // To parse JSON bodies

// Set up the MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "tarik",
  password: "tarik",
  database: "appl-product",
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

// Define the POST route for adding products
app.post("/products", (req, res) => {
  const { name, description, price, quantity } = req.body;

  // SQL query to insert data
  const insertQuery = `
    INSERT INTO product (name, description, price, quantity)
    VALUES (?, ?, ?, ?);
  `;

  // Execute the insert query
  connection.query(
    insertQuery,
    [name, description, price, quantity],
    (err, results) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({ error: "Error inserting data" });
      }
      res.status(201).json({ message: "Product added successfully" });
    }
  );
});

// Start the server
app.listen(2111, () => {
  console.log("Server is running on port 2121");
});
