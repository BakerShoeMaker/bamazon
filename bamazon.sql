-- Create and use the database
CREATE DATABASE bamazon_db;
USE bamazon_db;

-- Create the table products.
CREATE TABLE products(
item_id INTEGER(5) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price DECIMAL(7,2) NOT NULL,
stock_quantity INTEGER(5) NOT NULL,
PRIMARY KEY(item_id)
);

-- Add products to the table.
-- clothig department.
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, 'Green Jacket', 'Clothing Department', 59.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, 'Blue Jacket', 'Clothing Department', 79.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, 'Orange Jacket', 'Clothing Department', 159.99, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, 'Black Jacket', 'Clothing Department', 99.99, 75);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, 'Desktop', 'Computer Department', 375.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, 'Ipad', 'Computer Department', 799.99, 200);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, 'Monitor', 'Computer Department', 200.99, 80);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, 'Mouse', 'Computer Department', 99.99, 200);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, 'Basketball', 'Sports Department', 109.99, 150);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, 'Football', 'Sports Department', 85.95, 150);
