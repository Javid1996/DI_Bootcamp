-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

-- CREATE DATABASE "Hollywood"
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

-- 1. Count how many actors are in the table.
-- SELECT * FROM actors;
-- SELECT actor_id FROM actors ;
-- SELECT actor_id FROM actors ORDER BY actor_id DESC limit 1;

-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
-- INSERT INTO actors(first_name,last_name,age,number_oscars)
-- VALUES ('Javid','Aliyev','12/19/1996/', )

-- INSERT INTO actors(first_name,last_name,age,number_oscars)
-- VALUES ('Javid','Aliyev','',2 )

-- INSERT INTO actors(first_name,last_name,age,number_oscars)
-- VALUES ('Javid', ,'12/19/1996/',2 )

-- INSERT INTO actors(first_name,last_name,age,number_oscars)
-- VALUES ('Javid',' ','12/19/1996/',2 )

-- INSERT INTO actors(first_name,age,number_oscars)
-- VALUES ('Javid','12/19/1996/',2 )


