// const express = require('express');
const mysql = require("mysql");

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "test_user",
  password: "123456",
  database: "todo_app"
});

// selecting everything from the todos table
let sql = "SELECT * FROM todos";

// db.query(sql, (error, result, fields) => {
//   if (error) throw error;
//   console.log(result);
//   console.log("------------------");
//   console.log(result[0]);
//   console.log("------------------");
//   console.log(result[1].task);
//   console.log("------------------");
// });

// counting how many rows in the database
let total = "SELECT COUNT(*) AS total FROM todos";

// db.query(total, (error, result, fields) => {
//   if (error) throw error;
//   console.log(result);
// });

// INSERTING DATA  -- DATE format (year-mm-dd)
let newTask =
  "INSERT INTO todos (task, setDate) VALUES ('learn SQL', '2019-08-20')";

db.query(newTask, (error, result, fields) => {
  if (error) throw error;
  console.log(result);
});

// Close Database
db.end();

// run: node app.js in Terminal to see result
