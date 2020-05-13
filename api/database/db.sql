SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`movies` (
  `_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `nameRu` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `rentalStart` DATE NOT NULL,
  `rentalEnd` DATE NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE INDEX `_id_UNIQUE` (`_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`halls`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`halls` (
  `_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `rows` INT NOT NULL,
  `seats` INT NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE INDEX `_id_UNIQUE` (`_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`screenings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`screenings` (
  `_id` INT NOT NULL AUTO_INCREMENT,
  `hall` INT NOT NULL,
  `date` DATE NOT NULL,
  `time` VARCHAR(45) NOT NULL,
  `movie` INT NOT NULL,
  `status` INT NULL,
  `price` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE INDEX `_id_UNIQUE` (`_id` ASC) VISIBLE,
  INDEX `fk_screenings_movies_idx` (`movie` ASC) VISIBLE,
  INDEX `fk_screenings_hals_idx` (`hall` ASC) VISIBLE,
  CONSTRAINT `fk_screenings_movies`
    FOREIGN KEY (`movie`)
    REFERENCES `mydb`.`movies` (`_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_screenings_halls`
    FOREIGN KEY (`hall`)
    REFERENCES `mydb`.`halls` (`_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`seat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`seat` (
  `_id` INT NOT NULL AUTO_INCREMENT,
  `hall` INT NOT NULL,
  `row` INT NOT NULL,
  `seat-num` INT NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE INDEX `_id_UNIQUE` (`_id` ASC) VISIBLE,
  INDEX `fk_seat_hall_idx` (`hall` ASC) VISIBLE,
  CONSTRAINT `fk_seat_hall`
    FOREIGN KEY (`hall`)
    REFERENCES `mydb`.`halls` (`_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tickets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tickets` (
  `_id` INT NOT NULL AUTO_INCREMENT,
  `seat` INT NOT NULL,
  `screening` INT NOT NULL,
  `status` INT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE INDEX `_id_UNIQUE` (`_id` ASC) VISIBLE,
  INDEX `fk_tickets_seat_idx` (`seat` ASC) VISIBLE,
  INDEX `fk_tickets_screening_idx` (`screening` ASC) VISIBLE,
  CONSTRAINT `fk_tickets_seat`
    FOREIGN KEY (`seat`)
    REFERENCES `mydb`.`seat` (`_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tickets_screening`
    FOREIGN KEY (`screening`)
    REFERENCES `mydb`.`screenings` (`_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `token` VARCHAR(255) NOT NULL,
  `role` INT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE INDEX `_id_UNIQUE` (`_id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`bookings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`bookings` (
  `_id` INT NOT NULL AUTO_INCREMENT,
  `user` INT NOT NULL,
  `ticket` INT NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE INDEX `_id_UNIQUE` (`_id` ASC) VISIBLE,
  INDEX `fk_bookings_user_idx` (`user` ASC) VISIBLE,
  INDEX `fk_booking_ticket_idx` (`ticket` ASC) VISIBLE,
  CONSTRAINT `fk_bookings_user`
    FOREIGN KEY (`user`)
    REFERENCES `mydb`.`users` (`_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_booking_ticket`
    FOREIGN KEY (`ticket`)
    REFERENCES `mydb`.`tickets` (`_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`images` (
  `_id` INT NOT NULL AUTO_INCREMENT,
  `movie` INT NOT NULL,
  `data` BLOB NULL,
  PRIMARY KEY (`_id`),
  UNIQUE INDEX `_id_UNIQUE` (`_id` ASC) VISIBLE,
  INDEX `fk_images_movie_idx` (`movie` ASC) VISIBLE,
  CONSTRAINT `fk_images_movie`
    FOREIGN KEY (`movie`)
    REFERENCES `mydb`.`movies` (`_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
