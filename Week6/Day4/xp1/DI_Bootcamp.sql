-- Database: hr.backup

-- DROP DATABASE IF EXISTS "hr.backup";

-- CREATE DATABASE "hr.backup"
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

-- -- 1
SELECT first_name AS First , last_name AS Last FROM employees;

-- -- 2
SELECT DISTINCT department_id FROM employees ORDER BY department_id ASC

-- 3 Write a query to get the details of all employees from
-- the employee table, do so in descending order by first name.
SELECT * FROM employees ORDER BY first_name DESC


-- 4 Write a query to get the names (first_name, last_name), 
-- salary and 15% of salary as PF (ie. alias) for all the employees.

SELECT first_name, last_name, salary, salary*0.15 AS PF FROM employees;


-- 5 Write a query to get the employee IDs, names (first_name, last_name) 
-- and salary in ascending order according to their salary.
SELECT first_name, last_name, salary FROM employees ORDER BY salary ASC

-- 6 Write a query to get the total sum of all salaries paid to the employees.

SELECT sum(salary) AS total FROM employees

-- 7 Write a query to get the maximum and 
-- minimum salaries paid to the employees.

SELECT max(salary) AS max ,min(salary) AS min FROM employees

-- 8 Write a query to get the average salary paid to the employees.
--9 Write a query to get the number of employees working in the company.

SELECT avg(salary) AS avg ,count(salary) AS quantity FROM employees

-- 10Write a query to get all the first names from the employees table in upper case.

SELECT UPPER(first_name) FROM employees;   

-- 11 Write a query to get the first three characters of each first name 
-- of all the employees in the employees table.

SELECT SUBSTRING (first_name,1,3) FROM employees

-- 12 Write a query to get the full names of all the employees 
-- in the employees table. 
-- You have to include the first name and last name.

SELECT CONCAT(first_name,'  ',last_name) AS fullname FROM employees


-- 13 Write a query to get the first name, last name and the length of the
-- full name of all the employees from the employees table.
SELECT first_name,last_name, LENGTH(CONCAT(first_name,' ',last_name)) AS fullname_len FROM employees

-- 14 Write a query to check whether the first_name column
-- of the employees table contains any numbers.
SELECT * FROM employees WHERE first_name LIKE '%[0-9]%'

UPDATE employees 
SET first_name = 'Javid1', 
	last_name = 'Aliyev';

-- 15
SELECT employee_id, first_name , last_name
    FROM employees  LIMIT 10;

SELECT * FROM employees;

