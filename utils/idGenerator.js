const fs = require('fs');
const jsonWrite = require('json-write');

const writer = jsonWrite();
const stream = fs.createWriteStream('utils/IDs.json');

writer.pipe(stream);

const generator = async () => {
  var numberOfIDs = 1e6;
  let IDs = [];

  for (var i = 0; i < numberOfIDs; i++) {
    let id = {"itemId": Math.floor(Math.random() * 10000100)};
    IDs.push(id);

    if (i % 1e5 === 0) console.log(`${i} ids created`);
  }

  writer.write(JSON.stringify(IDs));
  writer.end();
  console.log('IDs generator finished');
};

generator();
