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
  colorList.map((color, index) => colorWriter.write({colorId: index, primaryColor: color}));

  colorWriter.end()
}

generateColors();


//Brand CSV Generator
const brandWriter = csvWriter();
const brandStream = fs.createWriteStream('Brand.csv');
brandWriter.pipe(brandStream);
let brandList = [];

const generateBrands = () => {
  let brandCache = {};
  for (let j = 0; j < numberOfRecords; j++) {
    let currentBrand = faker.company.companyName();
    brandCache[currentBrand] = true;
  }
  brandList = Object.keys(brandCache);
  brandList.map((brand, index) => brandWriter.write({brandId: index, primaryBrand: brand}));

  brandWriter.end();
}

generateBrands();


