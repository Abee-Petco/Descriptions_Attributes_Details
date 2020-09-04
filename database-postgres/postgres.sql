CREATE TABLE descriptions (
  itemId INT PRIMARY KEY,
  title VARCHAR(50),
  description VARCHAR(500),
  sku INT,
  brand_id INT,
  daysToShip VARCHAR(50),
  directions VARCHAR(500),
  color_id INT,
  material VARCHAR(25),
  length VARCHAR(10),
  width VARCHAR(10),
  additionalDetails VARCHAR(500)
);

CREATE TABLE colors (
  colorId INT PRIMARY KEY,
  primaryColor VARCHAR(25)
);

CREATE TABLE brands (
  brandId INT PRIMARY KEY,
  primaryBrand VARCHAR(50)
);