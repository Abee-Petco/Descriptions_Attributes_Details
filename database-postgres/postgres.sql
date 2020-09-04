CREATE TABLE descriptions (
  itemId INT PRIMARY KEY,
  title VARCHAR(50),
  description VARCHAR(500),
  sku INT,
  primaryBrand VARCHAR(50),
  daysToShip VARCHAR(50),
  directions VARCHAR(500),
  primaryColor VARCHAR(25),
  material VARCHAR(25),
  length VARCHAR(10),
  width VARCHAR(10),
  additionalDetails VARCHAR(500)
);