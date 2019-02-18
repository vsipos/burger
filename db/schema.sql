CREATE DATABASE burgers_db;
USE burgers_db;

-- Create a burgers table with the following fields --
CREATE TABLE burgers(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(50),
devoured BOOLEAN,
date TIMESTAMP);