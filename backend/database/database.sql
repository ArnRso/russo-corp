CREATE TABLE IF NOT EXISTS `hello_world` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `message` TEXT NOT NULL
 );


INSERT INTO `hello_world` (`message`)
VALUES ('Hello, World!'),
       ('Bonjour, le monde!'),
       ('Hallo, Welt!'),
       ('Hola, Mundo!'),
       ('Ciao, Mondo!');