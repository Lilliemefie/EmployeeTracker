// import mysql2
const mysql = require('mysql');
// import inquirer 
const inquirer = require('inquirer');
// import console.table
require('console.table');
require('dotenv').config();


// connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: process.env.DB_USER,
  // Your password
  password: process.env.DB_PASSWORD,
  // 
  database: process.env.DB_NAME,
});

connection.connect(err => {
    if (err) throw err;
    //console.log('connected as id ' + connection.threadId);
    afterConnect();
  });
  
  // function after connection is established and welcome image shows 
  afterConnect = () => {
    console.log("***********************************")
    console.log("*                                 *")
    console.log("*        EMPLOYEE MANAGER         *")
    console.log("*                                 *")
    console.log("***********************************")
    startApp();
  };

  // inquirer prompt for first action
  //gives choices and then the answer gets passed into switch stament and handles which code block will be executed
const startApp = () => {
    inquirer
    .prompt({
        name: 'listoption',
        type: 'list',
        choices: [ 'Add department', 'Add role', 'Add employee', 'View Departments', 'View Roles', 'View Employees', 'Exit']
    })
    .then((answer) => {
        switch (answer.listoption){
            case 'Add department':
                return addDept();
            case 'Add role':
                return addRole();
            case 'Add employee':
                return addEmp();
            case 'View Departments':
                return viewDep();
            case 'View Roles':
                return viewRoles();
            case 'View Employees':
                return viewEmp();
            case 'Exit':
                return exit();
        }
    })
};

//adding dept will prompt question and then with the answer make a connection query and insert it into db
const addDept = () => {
    inquirer
    .prompt({
        name: 'newDept',
        type: 'input',
        message: 'Enter new department name',
    })
    .then((answer) => {
        connection.query(
            'INSERT INTO departments SET ?',
        {
            name: answer.newDept,
        },
        (err) => {
            if (err) throw err;
            console.log('Your department was created successfully!');
            startApp(); 
        }
        );
    })
};

//adding role will prompt questions and then then with the answers make a connection query and insert it into db
const addRole = () =>{
    inquirer
    .prompt([
        {
        name: 'newRole',
        type: 'input',
        message: 'Enter new role title',
        },
        {
        name: 'salary',
        type: 'input',
        message: 'Enter Salary',
        },
        {
        name: 'deptid',
        type: 'input',
        message: 'What department ID does this employee belong to? ',
        }
    ])
    .then((answer) => {
        connection.query(
            'INSERT INTO roles SET ?',
            {
            title: answer.newRole,
            salary: answer.salary,
            department_id: answer.deptid,
            },
            (err) => {
                if (err) throw err;
                console.log('Your role was created successfully!');
                startApp();
            }
            );
    }); 
};

//adding employee will prompt questions and then then with the answers make a connection query and insert it into db
const addEmp = () =>{
    inquirer
    .prompt([
        {
        name: 'firstname',
        type: 'input',
        message: 'Enter employee first name',
        },
        {
        name: 'lastname',
        type: 'input',
        message: 'Enter employee last name',
        },
        {
        name: 'role',
        type: 'input',
        message: 'What is the role id?',
        },
        {
        name: 'manid',
        type: 'input',
        message: ' What is the manager id',
        }
    ])
    .then((answer) => {
        connection.query(
            'INSERT INTO employees SET ?',
            {
            first_name: answer.firstname,
            last_name: answer.lastname,
            role_id: answer.role,
            manager_id: answer.manid
            },
            (err) => {
                if (err) throw err;
                console.log('Employee added successfully!');
                startApp();
            }
            );
    });
}

//viewing department will make a connection query and show results from db
const viewDep = () => {
    console.log('Pulling up department info...\n');
    connection.query('SELECT * FROM departments', (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
    });
};
//do the console table 

//viewing employees will make a connection query and show results from db
const viewEmp = () => {
    console.log('Pulling up employees...\n');
    connection.query('SELECT * FROM employees', (err, res) => {
        if (err) throw err;
        console.table(res);
        startApp();
    }) 
};

//viewing roles will make a connection query and show results from db
const viewRoles = () => {
    console.log('Pulling up roles...\n');
    connection.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
        console.table(res);
        startApp();
    })
};

const exit = () => {
    process.exit();
};

