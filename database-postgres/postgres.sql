CREATE TABLE descriptions (
  id int NOT NULL,
  title VARCHAR(50),
  description VARCHAR(400),
  sku int NOT NULL,
  primaryBrand VARCHAR(50),
  daysToShip VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE directions (
  id int NOT NULL,
  directions VARCHAR(150),
  description_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (description_id)
    REFERENCES descriptions (id)
    ON DELETE CASCADE
);

CREATE TABLE attributes (
  id int NOT NULL,
  primaryColor VARCHAR(25),
  material VARCHAR(25),
  length VARCHAR(10),
  width VARCHAR(10),
  description_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (description_id)
    REFERENCES descriptions (id)
    ON DELETE CASCADE
);

CREATE TABLE details (
  id int NOT NULL,
  additionalDetails VARCHAR(400),
  description_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (description_id)
    REFERENCES descriptions (id)
    ON DELETE CASCADE
);