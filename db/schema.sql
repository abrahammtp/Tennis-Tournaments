CREATE DATABASE tournaments_db;
USE tournaments_db;

CREATE TABLE tourneys
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	attended BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
