// import mysql2
const mysql = require('mysql');
// import inquirer 
const inquirer = require('inquirer');
// import console.table
const console = require('console.table');
require('dotenv').config();


// connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  // Your port; if not 3306
  port: 3001,
  // Your username
  user: process.env.DB_USER,
  // Your password
  password: process.env.DB_PASSWORD,
  // 
  database: process.env.DB_NAME,
});

  