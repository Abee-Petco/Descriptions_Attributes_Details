const fs = require('fs');
const jsonWrite = require('json-write');

const createDoc = () => {
  return {"itemId": Math.floor(Math.random() * 10000100)};
};

const writer = jsonWrite();
const stream = fs.createWriteStream('SDC.json');

writer.pipe(stream);

const generator = async () => {
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
