-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_US.UTF-8'
--     LC_CTYPE = 'en_US.UTF-8'
--     ICU_LOCALE = 'en-US'
--     LOCALE_PROVIDER = 'icu'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


--  CREATE TABLE students(
--  item_id SERIAL PRIMARY KEY,
--  last_name VARCHAR (50) NOT NULL,
--  first_name VARCHAR (50) NOT NULL,
--  birth_date DATE NOT NULL
-- )


	
INSERT INTO students (last_name , first_name , birth_date)
VALUES
    ('Arrc','Aenichou','02/11/1998');
--     ('Yoan','Cohen','03/12/2010'),
-- 	('Lea','Benichou','27/07/1987'),
-- 	('Amelia','Dux','07/04/1996'),
-- 	('David','Grez','14/06/2003'),
-- 	('Omer','Simpson','03/10/1980');
	
	SELECT * FROM students;
	SELECT first_name , last_name FROM students;
	SELECT first_name , last_name FROM students  WHERE item_id>2;
	SELECT first_name , last_name FROM students  WHERE first_name ='Benichou' AND last_name='Marc';
	SELECT first_name , last_name FROM students  WHERE first_name ='Benichou' OR last_name='Marc';
	SELECT first_name , last_name FROM students  WHERE last_name ILIKE '%a%';
	SELECT first_name , last_name FROM students WHERE last_name LIKE 'A%';
	SELECT first_name , last_name FROM students WHERE last_name LIKE '%a';
	SELECT first_name , last_name FROM students  WHERE last_name LIKE '%a%';
	SELECT first_name , last_name FROM students WHERE item_id =1 OR item_id=3;
	SELECT * FROM students WHERE birth_date >= '01/01/2000';
	
	
	
	
	
	
	
	