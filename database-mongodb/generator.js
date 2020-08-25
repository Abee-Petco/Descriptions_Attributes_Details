const db = require('./index.js');
const mongoose = require('mongoose');
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

const generator = () => {
  var itemId = 100;
  var numberOfRecords = 1000000;

  const stream = fs.createWriteStream('SDC.csv');
  writer.pipe(stream);

  for (var i = 0; i < numberOfRecords; i++) {
    var newDoc;

    newDoc = {
      itemId: itemId,
      title: faker.commerce.productName(),
      description: faker.lorem.sentences(),
      SKU: Math.floor(Math.random() * 10000000).toString(),
      primaryBrand: faker.company.companyName(),
      daysToShip: `Ships In ${Math.floor(Math.random() * 10)} Business Days`,
      directions: faker.lorem.paragraph(),
      primaryColor: faker.commerce.color(),
      material: faker.commerce.productMaterial(),
      length: `${Math.floor(Math.random() * 10)} IN`,
      width: `${Math.floor(Math.random() * 10)} IN`,
      additionalDetails: faker.lorem.paragraph(),
    };

    writer.write(newDoc);
    itemId++;
  }

  writer.end();
  console.log('CSV generator finished');
};

generator();
