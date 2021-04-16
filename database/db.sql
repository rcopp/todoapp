CREATE DATABASE bdd_items;

USE bdd_items;

-- USERS TABLE
CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE users;

-- ITEMS TABLE
CREATE TABLE items (
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    done VARCHAR(3),
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE items
    ADD PRIMARY KEY (id);

ALTER TABLE items
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE items;