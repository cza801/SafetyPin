-- Drops the buyairb1_safetypin if it exists currently --
DROP DATABASE IF EXISTS buyairb1_safetypin;
-- Creates the "buyairb1_safetypin" database --
CREATE DATABASE buyairb1_safetypin;

USE buyairb1_safetypin;

CREATE TABLE parents (
	id INT NOT NULL auto_increment,
    parent_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    PRIMARY KEY (id)
);





