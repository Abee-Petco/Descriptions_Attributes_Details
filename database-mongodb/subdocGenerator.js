const faker = require('faker');
const fs = require('fs');
const jsonWrite = require('json-write');

const createDoc = (currentId) => {
  return {
    "itemId": currentId,
    "description": {
      "title": faker.commerce.productName(),
      "description": faker.lorem.sentences(),
      "SKU": Math.floor(Math.random() * 10000000).toString(),
      "primaryBrand": faker.company.companyName(),
      "daysToShip": `Ships In ${Math.floor(Math.random() * 10)} Business Days`
    },
    "directions": {
      "directions": faker.lorem.paragraph()
    },
    "attributes": {
      "primaryColor": faker.commerce.color(),
    "material": faker.commerce.productMaterial(),
    "length": `${Math.floor(Math.random() * 10)} IN`,
    "width": `${Math.floor(Math.random() * 10)} IN`
    },
    "details": {
      "additionalDetails": faker.lorem.paragraph()
    }
  };
};

const writer = jsonWrite();
const stream = fs.createWriteStream('SDC.json');

writer.pipe(stream);

const generator = async () => {
  console.time();
  var itemId = 100;
  var numberOfRecords = 1e7;
  let isWriting;

  for (var i = 0; i < numberOfRecords; i++) {
    let newDoc = createDoc(itemId);
    isWriting = writer.write(newDoc);

    if (i > 0 && !isWriting && i < numberOfRecords) {
      await new Promise((resolve) => writer.once('drain', resolve));
    }

    if (i % 1e6 === 0) console.log(`${i} documents created`);

    itemId++;
  }

  writer.end();
  console.timeEnd();
  console.log('JSON generator finished');
};

generator();
