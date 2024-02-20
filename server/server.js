require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = process.env.PORT || 3306;

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to MySQL RDS successfully");
});

app.get("/shows", (req, res) => {
  const sql = "SELECT * FROM shows";
  db.query(sql, (error, results) => {
    if (error) throw error;
    return res.json(results);
  });
});

app.post("/shows", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const query = "INSERT INTO shows (title) VALUES (?)";

  db.query(query, [title], (error, results) => {
    if (error) {
      console.error("Error inserting show:", error);
      return res.status(500).json({ message: "Error adding show" });
    }

    console.log("Show added with ID:", results.insertId);
    res.status(201).json({ id: results.insertId, title });
  });
});

app.delete("/shows/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM shows WHERE id = ?", [id], (error, results) => {
    if (error) throw error;
    res.send(`Show deleted with ID: ${id}`);
  });
});

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
