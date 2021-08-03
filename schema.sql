----Create Database----
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db; 

---Create Department Table----

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30)
);

----Create Role Table----

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT
);

----Create Employee Table----

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30),
lastname VARCHAR(30),
role_id INT,
manager_id INT
);

----Employee Seeding----
INSERT INTO employee (firstname, lastname, role_id, manager_id)
VALUES 
("Alice", "Park", 5, 5),
("Lillie", "Jira", 3, 4),
("Yimmy", "Kong", 4, 3),
("Jayda", "Muller", 2, 2),
("Jesse", "Wells", 1, 1),

----Employee Role Seeding----
INSERT INTO roles (title, salary, department_id)
VALUES 
("Engineer", 150000, 1);
('Software Engineer', 120000, 1),
('Accountant', 75000, 2), 
('Marketing Coordindator', 82000, 3), 
('Operations Manager', 90000, 4);

---- Department Seeding----
INSERT INTO department (names)
VALUES 
("Engineering & IT"),
("Finance & Accounting"),
("Sales & Marketing"),
("Operations"),



