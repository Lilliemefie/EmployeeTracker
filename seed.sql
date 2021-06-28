DROP DATABASE IF EXISTS company_DB;
CREATE database company_DB;

USE company_DB;

CREATE TABLE employee (
id INT AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT FOREIGN KEY,
manager_id INT FOREIGN KEY NULL
PRIMARY KEY (id)
);
