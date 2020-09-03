const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const createDoc = (currentId) => {
  return {
    itemId: currentId,
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
};

const writer = csvWriter();
const stream = fs.createWriteStream('SDC.csv');

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

    itemId++;
  }

  writer.end();
  console.timeEnd();
  console.log('CSV generator finished');
};

generator();
