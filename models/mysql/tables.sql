USE CodoACodo;

DROP TABLE IF EXISTS product;

CREATE TABLE IF NOT EXISTS product (
  id INT PRIMARY KEY AUTO_INCREMENT,
  licence_name VARCHAR(50) NOT NULL,
  category_name VARCHAR(50) NOT NULL,
  product_name VARCHAR(50) UNIQUE NOT NULL,
  product_description VARCHAR(200) NOT NULL,
  product_price FLOAT NOT NULL,
  dues INT,
  product_sku VARCHAR(9) UNIQUE,
  img_front VARCHAR(200),
  img_back VARCHAR(200),
  discount FLOAT,
  stock INT NOT NULL
);

SELECT
  *
FROM
  product;

-- DROP TABLE IF EXISTS cart;
-- 
-- CREATE TABLE IF NOT EXISTS cart (
-- id INT PRIMARY KEY AUTO_INCREMENT,
-- customer_id INT NOT NULL, -- ??
-- product_id INT,
-- product_quantity INT,
-- FOREIGN KEY(product_id) REFERENCES product(id),
-- );