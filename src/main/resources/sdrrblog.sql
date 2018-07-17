CREATE DATABASE sdrrblog;
USE sdrrblog;

CREATE TABLE IF NOT EXISTS category (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    description TEXT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE (name, slug)
);
INSERT INTO category VALUES(1, 'Uncategorized', 'uncategorized', '', NOW());