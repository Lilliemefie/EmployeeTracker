const mysql = require('mysql');
const inquirer = require('inquirer');
const console = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,
  // Your username
  user: 'root',
  // Your password
  password: 'Ucla2021$',
  database: 'company_DB',
});

connection.connect((err) => {
    if (err) throw err;
    runSearch();
  });

  const runSearch = () => {
      inquirer
      .prompt({
          type: 'list',
          message: 'What would you like to do?',
          name: 'action',
          choices: [
              'View all employee',
              'View all departments',
              'View all roles',
              'Add employee',
              'Add departments',
              'Add roles',
              'Update employee role',
              'Update employee managers',
              'View employee by manager'
          ]
      })
      .then((answer) => {
          switch (answer.choice){
            case 'View all employee':
                viewAllEmployee();
          }
      })
  }
  