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

SELECT * FROM students;

-- Fetch the first four students. You have to order the four students alphabetically by last_name.

SELECT first_name,last_name,birth_date FROM students ORDER BY first_name ASC LIMIT 4;
SELECT first_name,last_name,birth_date FROM students ORDER BY last_name ASC LIMIT 4;

-- Fetch the details of the youngest student.
SELECT * FROM students  ORDER BY birth_date DESC LIMIT 1;

-- Fetch three students skipping the first two students.

SELECT * FROM students LIMIT 3 OFFSET 2;
