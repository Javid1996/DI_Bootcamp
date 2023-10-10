-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
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

-- Use SQL to get the following from the database:
-- All items, ordered by price (lowest to highest).
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
-- All last names (no other columns!), in reverse alphabetical order (Z-A)

SELECT DISTINCT * FROM items ORDER BY item_price ASC;

SELECT * FROM items WHERE item_price>=80 ORDER BY item_price DESC; 

SELECT first_name,last_name FROM customers ORDER BY first_name ASC;

SELECT last_name FROM customers ORDER BY last_name DESC;

