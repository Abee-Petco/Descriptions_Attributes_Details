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
  console.timeEnd();
  console.log('Color.csv complete')
};

console.time();
generateColors();

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
  let brandLength = brandList.length;

  brandList.map(async (brand, index) => {

    isWriting = brandWriter.write({ brandId: index, primaryBrand: brand })

    if (index > 0 && !isWriting && index < brandLength) {
      await new Promise(resolve => brandWriter.once('drain', resolve));
    }

    return;
  });

  brandWriter.end();
  console.timeEnd();
  console.log('Brand.csv complete')
};

console.time()
generateBrands();

//Item CSV Generator
const itemWriter = csvWriter();
const itemStream = fs.createWriteStream('Item.csv');
itemWriter.pipe(itemStream);
console.time();

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

    if (k % 1e6 === 0) console.log(k, 'items generated');
    
    itemId++;
  }

  itemWriter.end();
  console.log('Item.csv complete')
  console.timeEnd();
};

generateItems();