// CREATE SCHEMA `book_store_chemas` ; 

// CREATE TABLE `book_store_chemas`.`tbl_user` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `email` VARCHAR(45) NULL,
//     `password` VARCHAR(100) NULL,
//     `usename` VARCHAR(45) NULL,
//     `id_cart` INT NULL,
//     `role` SET("user", "admin") NULL,
//     `address` LONGTEXT NULL,
//     `phone` INT NULL,
//     PRIMARY KEY (`id`));


// CREATE TABLE `book_store_chemas`.`tbl_category` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `name` VARCHAR(95) NULL,
//     PRIMARY KEY (`id`));
  
  
// CREATE TABLE `book_store_chemas`.`tbl_product` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `name_product` VARCHAR(95) NULL,
//     `category_id` INT NULL,
//     `number_stock` INT NULL,
//     `price` INT NULL,
//     `year` INT NULL,
//     `rating` INT NULL,
//     `description` LONGTEXT NULL,
//     `image` LONGTEXT NULL,
//     `author` VARCHAR(45) NULL,
//     PRIMARY KEY (`id`));


// CREATE TABLE `book_store_chemas`.`tbl_order` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `user_id` INT NULL,
//     PRIMARY KEY (`id`),
//     INDEX `contraint_user_idx` (`user_id` ASC) VISIBLE,
//     CONSTRAINT `contraint_user`
//       FOREIGN KEY (`user_id`)
//       REFERENCES `book_store_chemas`.`tbl_user` (`id`)
//       ON DELETE CASCADE
//       ON UPDATE CASCADE);

// CREATE TABLE `book_store_chemas`.`tbl_order_product` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `product_id` INT NULL,
//     `order_id` INT NULL,
//     `number` INT NULL,
//     PRIMARY KEY (`id`),
//     INDEX `product contraint_idx` (`product_id` ASC) VISIBLE,
//     INDEX `order contraint_idx` (`order_id` ASC) VISIBLE,
//     CONSTRAINT `product contraint`
//       FOREIGN KEY (`product_id`)
//       REFERENCES `book_store_chemas`.`tbl_product` (`id`)
//       ON DELETE CASCADE
//       ON UPDATE CASCADE,
//     CONSTRAINT `order contraint`
//       FOREIGN KEY (`order_id`)
//       REFERENCES `book_store_chemas`.`tbl_order` (`id`)
//       ON DELETE CASCADE
//       ON UPDATE CASCADE);
  
  
// CREATE TABLE `book_store_chemas`.`tbl_review` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `product_id` INT NULL,
//     `user_id` INT NULL,
//     `content` LONGTEXT NULL,
//     `rate` INT NULL,
//     PRIMARY KEY (`id`),
//     INDEX `product rivew contraint_idx` (`product_id` ASC) VISIBLE,
//     INDEX `review user contraint_idx` (`user_id` ASC) VISIBLE,
//     CONSTRAINT `product rivew contraint`
//       FOREIGN KEY (`product_id`)
//       REFERENCES `book_store_chemas`.`tbl_product` (`id`)
//       ON DELETE CASCADE
//       ON UPDATE CASCADE,
//     CONSTRAINT `review user contraint`
//       FOREIGN KEY (`user_id`)
//       REFERENCES `book_store_chemas`.`tbl_user` (`id`)
//       ON DELETE CASCADE
//       ON UPDATE CASCADE);

//ALTER TABLE `book_store_chemas`.`tbl_product` 
// ADD INDEX `category_product_idx` (`category_id` ASC) VISIBLE;
// ;
// ALTER TABLE `book_store_chemas`.`tbl_product` 
// ADD CONSTRAINT `category_product`
//   FOREIGN KEY (`category_id`)
//   REFERENCES `book_store_chemas`.`tbl_category` (`id`)
//   ON DELETE CASCADE
//   ON UPDATE CASCADE;

// ALTER TABLE `book_store_chemas`.`tbl_cart` 
// ADD INDEX `cart - user_idx` (`user_id` ASC) VISIBLE;
// ;
// ALTER TABLE `book_store_chemas`.`tbl_cart` 
// ADD CONSTRAINT `cart - user`
//   FOREIGN KEY (`user_id`)
//   REFERENCES `book_store_chemas`.`tbl_user` (`id`)
//   ON DELETE CASCADE
//   ON UPDATE CASCADE;

// ALTER TABLE `book_store_chemas`.`tbl_add_to_cart` 
// ADD INDEX `cart - add to cart_idx` (`cart_id` ASC) VISIBLE,
// ADD INDEX `add to cart - product_idx` (`product_id` ASC) VISIBLE;
// ;
// ALTER TABLE `book_store_chemas`.`tbl_add_to_cart` 
// ADD CONSTRAINT `cart - add to cart`
//   FOREIGN KEY (`cart_id`)
//   REFERENCES `book_store_chemas`.`tbl_cart` (`cart_id`)
//   ON DELETE CASCADE
//   ON UPDATE CASCADE,
// ADD CONSTRAINT `add to cart - product`
//   FOREIGN KEY (`product_id`)
//   REFERENCES `book_store_chemas`.`tbl_order_product` (`id`)
//   ON DELETE CASCADE
//   ON UPDATE CASCADE;

