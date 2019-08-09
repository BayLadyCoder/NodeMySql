// const express = require('express');
const mysql = require("mysql");

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "test_user",
  password: "123456",
  database: "todo_app"
});

let sql = "SELECT CURTIME() as time, CURDATE() AS date, NOW() as now";
db.query(sql, (error, result, fields) => {
  if (error) throw error;
  console.log(result[0].time);
  console.log(result[0].date);
  console.log(result[0].now);
});

// Close Database
db.end();

// run: node app.js in Terminal to see result
