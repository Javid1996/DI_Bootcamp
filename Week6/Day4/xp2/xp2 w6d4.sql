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

UPDATE employees 
SET first_name = 'Javid1', 
	last_name = 'Aliyev'
	WHERE employee_id=100 ;
SELECT * FROM employees WHERE first_name ~ '\d' 
SELECT * FROM employees WHERE employee_id = 100
-- 1 Write a query to display the first_name, last_name and 
-- salary of all employees whose salary is between $10,000 and $15,000.

SELECT first_name, last_name, salary FROM employees 
WHERE salary BETWEEN 10000 AND 15000

--  2  Write a query to display the first_name, last_name and 
-- hire date of all employees who were hired in 1987.

SELECT first_name, last_name, hire_date FROM employees 
WHERE hire_date BETWEEN '1987-01-01' AND '1987-12-31'



--  3. Write a query to get the all employees whose 
-- first_name has both the letters ‘c’ and ‘e’.


SELECT * FROM employees 
WHERE first_name 
ILIKE '%c%' OR first_name 
ILIKE '%e%'

--  4. Write a query to display the last_name, job,
-- and salary of all the employees who don’t work as Programmers or
-- Shipping Clerks, and who don’t receive a salary equal to $4,500,
-- $10,000, or $15,000.
SELECT * FROM jobs

SELECT last_name,jobs.job_title, salary FROM employees
INNER JOIN jobs
ON jobs.job_id = employees.job_id 
WHERE jobs.job_title<>'Programmer' OR jobs.job_title<>'Shipping Clerk'
AND salary NOT IN (4500,10000,15000)


--  5   Write a query to display the last names of all employees
-- whose last name contains exactly six characters.

SELECT last_name FROM employees WHERE LENGTH(last_name)=6


--  6.  Write a query to display the last name of all employees
-- who have the letter ‘e’ as the third character in the name.

SELECT * FROM employees WHERE SUBSTRING(last_name, 3, 1)='e'

--  7.  Write a query to display the jobs title appearing in the employees table.

SELECT job_title  FROM employees 
INNER JOIN jobs
ON jobs.job_id = employees.job_id


--  8.  Write a query to select all information of employees 
-- whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’
-- or ‘KING’ or ‘FORD’.
SELECT * FROM employees WHERE UPPER(last_name) IN ('JONES','WEISS','SCOTT','KING','FORD')
SELECT * FROM employees 
