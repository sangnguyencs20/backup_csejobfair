-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema cse job fair registration
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cse job fair registration
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cse job fair registration` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `cse job fair registration` ;

-- -----------------------------------------------------
-- Table `cse job fair registration`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`admin` (
  `idadmin` INT NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) CHARACTER SET 'utf8' NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`booth`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`booth` (
  `idbooth` INT NOT NULL,
  `size` VARCHAR(20) NOT NULL,
  `price` DECIMAL(10,0) NOT NULL,
  PRIMARY KEY (`idbooth`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`business`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`business` (
  `idbusiness` INT NOT NULL,
  `name` VARCHAR(100) CHARACTER SET 'utf8' NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `representation_name` VARCHAR(100) CHARACTER SET 'utf8' NOT NULL,
  PRIMARY KEY (`idbusiness`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`register`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`register` (
  `idregister` INT NOT NULL,
  `time_register` DATETIME NOT NULL,
  `business_idbusiness` INT NOT NULL,
  `booth_idbooth` INT NOT NULL,
  PRIMARY KEY (`idregister`),
  INDEX `fk_register_business1_idx` (`business_idbusiness` ASC) VISIBLE,
  INDEX `fk_register_booth1_idx` (`booth_idbooth` ASC) VISIBLE,
  CONSTRAINT `fk_register_booth1`
    FOREIGN KEY (`booth_idbooth`)
    REFERENCES `cse job fair registration`.`booth` (`idbooth`),
  CONSTRAINT `fk_register_business1`
    FOREIGN KEY (`business_idbusiness`)
    REFERENCES `cse job fair registration`.`business` (`idbusiness`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`approve`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`approve` (
  `time_approve` INT NULL DEFAULT NULL,
  `approve` TINYINT NULL DEFAULT NULL,
  `register_idregister` INT NOT NULL,
  `admin_idadmin` INT NOT NULL,
  PRIMARY KEY (`register_idregister`),
  INDEX `fk_approve_admin1_idx` (`admin_idadmin` ASC) VISIBLE,
  CONSTRAINT `fk_approve_admin1`
    FOREIGN KEY (`admin_idadmin`)
    REFERENCES `cse job fair registration`.`admin` (`idadmin`),
  CONSTRAINT `fk_approve_register`
    FOREIGN KEY (`register_idregister`)
    REFERENCES `cse job fair registration`.`register` (`idregister`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
