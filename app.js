// const express = require('express');
const mysql = require('mysql');


// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'test_user',
    password: '123456',
    database: 'todo_app'
});


let sql = 'SELECT CURDATE() AS date';
db.query(sql, (error, result, fields) => {
    if (error) throw error;
    console.log(result);

});

// Close Database
db.end();


// app.listen('3000', () => {
//     console.log('Server started on port 3000');
// });