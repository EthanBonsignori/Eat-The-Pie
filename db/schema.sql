DROP DATABASE IF EXISTS pies_db;
CREATE DATABASE pies_db;
USE pies_db;

CREATE TABLE pies (
	  id INT NOT NULL AUTO_INCREMENT,
    pie_name VARCHAR(255) NULL,
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
);