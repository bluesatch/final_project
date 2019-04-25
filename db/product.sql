CREATE TABLE product (
    product_id INT NOT NULL,
    artist TEXT(30),
    album TEXT(20),
    label TEXT (20),
    price TEXT (5, 2),
    CONSTRAINT pk_product PRIMARY KEY (product_id)
);