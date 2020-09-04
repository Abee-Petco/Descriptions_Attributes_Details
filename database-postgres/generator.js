const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const { writer } = require('repl');
const numberOfRecords = 1e7;

//Color CSV Generator
const colorWriter = csvWriter();
const colorStream = fs.createWriteStream('Color.csv');
colorWriter.pipe(colorStream);
let colorList = [];

const generateColors = () => {
  let colorCache = {};
  for (let i = 0; i < numberOfRecords; i++) {
    let currentColor = faker.commerce.color();
    colorCache[currentColor] = true;
  }
  colorList = Object.keys(colorCache);
  colorList.map((color, index) => colorWriter.write({ colorId: index, primaryColor: color }));

  colorWriter.end();
};

console.time();
generateColors();
console.timeEnd();
console.log('Color.csv complete')

//Brand CSV Generator
const brandWriter = csvWriter();
const brandStream = fs.createWriteStream('Brand.csv');
brandWriter.pipe(brandStream);
let brandList = [];

const generateBrands = () => {
  let brandCache = {};
  let isWriting;
  for (let j = 0; j < numberOfRecords; j++) {
    let currentBrand = faker.company.companyName();
    brandCache[currentBrand] = true;
  }
  brandList = Object.keys(brandCache);
  brandList.map(async (brand, index) => {

    isWriting = brandWriter.write({ brandId: index, primaryBrand: brand })

    if (index > 0 && !isWriting && index < brandList.length) {
      await new Promise(resolve => brandWriter.once('drain', resolve));
    }
    return;
  });

  brandWriter.end();
};

console.time()
generateBrands();
console.timeEnd();
console.log('Brand.csv complete')

//Item CSV Generator
const itemWriter = csvWriter();
const itemStream = fs.createWriteStream('Item.csv');
itemWriter.pipe(itemStream);

const generateItems = async () => {
  let itemId = 100;
  let isWriting;

  for (let k = 0; k < numberOfRecords; k++) {
    let newItem = {
      itemId: itemId,
      title: faker.commerce.productName(),
      description: faker.lorem.sentences(),
      SKU: Math.floor(Math.random() * 10000000).toString(),
      brand_id: Math.floor(Math.random() * brandList.length).toString(),
      daysToShip: `Ships In ${Math.floor(Math.random() * 10)} Business Days`,
      directions: faker.lorem.paragraph(),
      color_id: Math.floor(Math.random() * colorList.length).toString(),
      material: faker.commerce.productMaterial(),
      length: `${Math.floor(Math.random() * 10)} IN`,
      width: `${Math.floor(Math.random() * 10)} IN`,
      additionalDetails: faker.lorem.paragraph(),
    };

    isWriting = itemWriter.write(newItem);

    if (k > 0 && !isWriting && k < numberOfRecords) {
      await new Promise(resolve => itemWriter.once('drain', resolve));
    }

    itemId++;
  }
};

console.time();
generateItems();
console.timeEnd();
console.log('Item.csv complete')