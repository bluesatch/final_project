CREATE TABLE members
    (user_id INT NOT NULL,
    fname VARCHAR(20) NULL,
    lname VARCHAR(20) NULL,
    street VARCHAR(40) NOT NULL,
    city VARCHAR(40) NOT NULL,
    state VARCHAR(20) NULL,
    country VARCHAR(20) NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    email VARCHAR(40) NOT NULL,
    card VARCHAR(16),
    exp_date DATE,
    cvv VARCHAR(4),
    CONSTRAINT pk_members PRIMARY KEY (user_id)
    );