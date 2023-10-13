-- Database: HomeTasks

-- DROP DATABASE IF EXISTS "HomeTasks";

-- CREATE DATABASE "HomeTasks"
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
CREATE TABLE product_orders (
 order_id SERIAL PRIMARY KEY,
 item_id INTEGER  NOT NULL,
 customer_id INTEGER  NOT NULL,
 order_date DATE NOT NULL,
 order_price INTEGER);
	
	CREATE TABLE items (
 item_id SERIAL PRIMARY KEY,
 order_id INTEGER  NOT NULL,
 item_name VARCHAR(50) NOT NULL,
amount INTEGER ,
 price INTEGER NOT NULL,
FOREIGN KEY (order_id) REFERENCES product_orders(order_id)
		);
		
CREATE FUNCTION get_order_price ( itnm VARCHAR(50)) 
RETURNS RECORD AS $$
declare
    item_price integer;
    total_price integer;
    product_orders.order_price := total_price; 
	total_price RECORD;
BEGIN
   (SELECT amount,price FROM items
				 INNER JOIN product_orders
				  ON items.order_id = product_orders.order_id
				 WHERE item_name VARCHAR(50)=itnm);
	item_price :=items.amount*items.price;
-- 	total_price :=item_price ;
  
   SELECT item_price INTO total_price;
   RETURN total_price;
END;
$$ LANGUAGE plpgsql;
		

	   
-- !!! solution
    CREATE or REPLACE FUNCTION user_orders (ord INT, usr varchar(50)) 
    -- iki parametr qebul edir birinci order id / ikinci userin last name i
    RETURNS INT AS $totalprice$ 
    -- total price integer return edecek
    BEGIN 
    -- func baslama bloku
       RETURN(
        --  secilmis user ve orderin price i return edir
           SELECT price FROM orders 
           INNER JOIN users ON users.user_id = orders.user_id
           INNER JOIN items ON items.item_id = orders.item_id 
           WHERE orders.order_id = ord AND users.last_name = usr
       );
    END;
    -- func bitme bloku
    $totalprice$ LANGUAGE plpgsql;
    -- standart prosedur kod bloku postgresql ve func haqqinda melumat

    SELECT * FROM user_orders(5050, 'Clooney');
    
    -- !!! 		
		
		
		
		
		
		
	
	
	
	