DROP DATABASE IF EXISTS secretsanta_db;
CREATE DATABASE secretsanta_db;
USE secretsanta_db;

CREATE TABLE createdUser
(
	id INT NOT NULL AUTO_INCREMENT,
	username VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);