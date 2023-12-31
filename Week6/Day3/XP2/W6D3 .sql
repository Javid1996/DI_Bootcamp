-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
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

-- Get a list of all the languages, from the language table.
SELECT * FROM language;
-- Get a list of all films joined with their languages – select the following details : 
-- film title, description, and language name.
SELECT * FROM film;

SELECT film.title, film.description, language.name
FROM film
LEFT OUTER JOIN language
ON film.language_id = language.language_id


-- Get all languages, even if there are no films in those languages – select the following details : 
-- film title, description, and language name.

SELECT  language.name ,film.title, film.description
FROM language
LEFT OUTER JOIN film
ON film.language_id = language.language_id

-- Create a new table called new_film with the following columns : 
-- id, name. Add some new films to the table.

CREATE TABLE new_film(
 id SERIAL PRIMARY KEY,
 name VARCHAR (50) );
 
 INSERT INTO new_film (name)
VALUES
    ('Avatar 2'),
    ('Barbie') ,
	('Avengers'),
	('Star Wars'),
	('Oppenheimer');

SELECT * FROM new_film
SELECT * FROM language



-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.


CREATE TABLE customer_review(
 review_id SERIAL NOT NULL  ,
 film_id INTEGER REFERENCES new_film (id) ON DELETE CASCADE, 
 language_id INTEGER REFERENCES language (language_id) ,
 title VARCHAR(50),
 score INTEGER,
 review_text TEXT,
 last_update DATE,
 PRIMARY KEY (review_id),
 FOREIGN KEY(film_id,language_id));
 
 INSERT INTO customer_review (film_id,language_id,title,score,review_text,last_update)
VALUES
    (1,
   	 1 ,
	('Avatar 2 GOOD'),
	(81),
	('It’s the world of Pandora married to the groundbreaking technology used to bring it to life that makes "Avatar" impressive, but it otherwise comes across as hollow, spectacle for the sake of it with little else to offer.'),
	('04/01/2023')),
	
	 (2,
	  2,
	 ('Nice movie'),
	 (72),
	 ('t’s the world of Pandora married to the groundbreaking technology used to bring it to life that makes "Avatar" impressive'),
	 ('08/15/2023'));
	
 select * from customer_review
 
 
--  Delete a film that has a review from the new_film table, what happens to the customer_review table?

DELETE FROM customer_review WHERE film_id = '2'
 
 
 
 




-- EX2

-- Use UPDATE to change the language of some films. Make sure that you use valid languages.

SELECT * FROM film

UPDATE film
SET language_id = 3 
WHERE
    film_id = 5;
	
	
-- 	We created a new table called customer_review.
-- 	Drop this table. Is this an easy step, or does it need extra checking?

DROP TABLE IF EXISTS customer_review;


-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

 SELECT COUNT(*) FROM rental WHERE return_date IS NULL;
 
--  Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
	select *from rental

SELECT * FROM film ORDER BY rental_rate  DESC LIMIT 30;

SELECT * 
FROM film 
INNER JOIN inventory
ON inventory.film_id = film.film_id


SELECT *
FROM inventory
INNER JOIN rental
ON inventory.inventory_id=rental.inventory_id


SELECT * FROM (inventory
INNER JOIN rental
ON inventory.inventory_id=rental.inventory_id)
INNER JOIN film
ON inventory.film_id = film.film_id
WHERE return_date IS NULL
ORDER BY rental_rate  DESC LIMIT 30;



-- 6.1 The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.


-- SELECT *FROM  actor
-- INNER JOIN film_actor

(select actor_id from actor WHERE first_name ='Penelope'and last_name = 'Monroe')
select film_id from film Where description ILIKE '%umo wrestle%' 
SELECT *FROM film_actor WHERE actor_id=120

SELECT film.film_id,title FROM film_actor 
INNER JOIN film 
ON film.film_id = film_actor.film_id 
WHERE actor_id=(select actor_id from actor WHERE first_name ='Penelope'and last_name = 'Monroe')
AND  description ILIKE '%umo wrestle%'  

-- 6.2 The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT film.film_id,title FROM film
INNER JOIN film_category 
ON film.film_id = film_category.film_id 
INNER JOIN category 
ON film_category.category_id = category.category_id
WHERE film.length<60
AND  rating = 'R'  
AND  category.name = 'Documentary'












