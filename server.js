const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
let db;

if (process.env.node_env === 'postgres') {
  db = require('./database-postgres/index.js')
} else {
  db = require('./database-mongodb/index.js');
}

const app = express();

app.use(express.json());

//crossorigin permission for 3000, 3004, 3005 and 3006
app.use((req, res, next) => {
  //local address
  const address = 'http://127.0.0.1';
  const address2 = 'http://127.0.0.1';
  const address3 = 'http://127.0.0.1';

  //deployed address
  // var address = 'http://52.14.208.55'; //me
  // var address2 = 'http://54.183.137.155'; // nick
  // var address3 = 'http://18.224.229.28'; // kate

  const { referer } = req.headers;
  if (referer) {
    if (req.headers.referer.includes(`${address2}:3004`)) {
      res.header('Access-Control-Allow-Origin', `${address2}:3004`); //recommended
    } else if (req.headers.referer.includes('3005')) {
      res.header('Access-Control-Allow-Origin', `${address}:3005`); //title/price
    } else if (req.headers.referer.includes(`${address3}:3006`)) {
      res.header('Access-Control-Allow-Origin', `${address3}:3006`); //deliver
    } else if (req.headers.referer.includes(`${address}:3000`)) {
      res.header('Access-Control-Allow-Origin', `${address}:3000`); //my proxy
    } else if (req.headers.referer.includes(`${address2}:3000`)) {
      res.header('Access-Control-Allow-Origin', `${address2}:3000`); //nick's proxy
    } else if (req.headers.referer.includes(`${address3}:3000`)) {
      res.header('Access-Control-Allow-Origin', `${address3}:3000`); //kate's proxy
    }
  }
  next();
});

//gzip
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set({
    'Content-Encoding': 'gzip',
    'Content-Type': 'application/javascript',
  });
  next();
});

app.use(express.static(path.join(__dirname, 'client/public')));

//get title and brand name for an item
app.get('/itemInformation/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  if (itemId.includes('array')) {
    const itemsInArray = itemId.substring(5);
    const itemIds = itemsInArray.split(',').map(id => parseInt(id));
    const invalidId = false;

    for (var i = 0; i < itemIds.length; i++) {
      if (itemIds[i] < 100 || itemIds[i] > (1e7 + 100)) {
        res.status(404).send('Invalid itemId');
        invalidId = true;
        break;
      }
    }

    if (!invalidId) {
      db.getTitlesAndBrands(itemIds)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(404);
        });
    }
  } else if (itemId < 100 || itemId > (1e7 + 100)) {
    console.log(itemId);
    res.status(404).send('Invalid itemId');
  } else {
    db.getTitleAndBrand(parseInt(itemId))
      .then((data) => {
        console.log('success getting title and brand', data);
        res.send(data[0]);
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log('error in getTitleAndBrand: ', err);
      });
  }
});

//get full description object for an item
app.get('/descriptionObject/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  db.getDescriptionObject(itemId)
    .then((data) => {
      console.log('success getting descriptionObj', data);
      !data[0] ? res.sendStatus(404) : res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log('error in getDescriptionObject: ', err);
    });
});

//post description object for a new item
app.post('/descriptionObject', (req, res) => {
  const descObj = req.body;

  db.getDescriptionObject(descObj.itemId)
    .then((result) => {
      if (result[0]) {
        res.sendStatus(409);
      } else {
        return db.postDescriptionObject(descObj.itemId, descObj)
      }
    })
    .then((data) => {
      console.log('successful post of data:', !!data);
      data ? res.sendStatus(201) : null;
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

//update description object for an item
app.put('/descriptionObject/:itemId', (req, res) => {
  const descObj = req.body;
  const itemId = req.params.itemId;

  db.putDescriptionObject(itemId, descObj)
    .then((data) => {
      console.log('successful description update', data);
      !data ? res.sendStatus(201) : res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

app.delete('/descriptionObject/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  db.deleteDescriptionObject(itemId)
    .then((data) => {
      console.log('successfully deleted description', data);
      !data ? res.sendStatus(404) : res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = app;
