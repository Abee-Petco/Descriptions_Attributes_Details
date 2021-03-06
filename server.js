// const newrelic = require('newrelic');
const morgan = require('morgan');
const express = require('express');
const path = require('path');
// const redis = require('redis');
import DescriptionService from './client/src/index.jsx';
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const fs = require('fs');
const db = require('./database-mongodb/index.js');
const axios = require('axios');
// let client;

const app = express();

app.use(express.json());
// app.use(morgan('dev'));

//crossorigin permission for 3000, 3004, 3005 and 3006
app.use((req, res, next) => {
  //local address
  // const address = 'http://localhost';
  // const address2 = 'http://localhost';
  // const address3 = 'http://localhost';

  //deployed address
  // var address = 'http://ec2-3-132-55-48.us-east-2.compute.amazonaws.com'; //me
  // var address2 = 'http://54.183.137.155'; // nick
  var address3 = 'http://ec2-3-132-55-48.us-east-2.compute.amazonaws.com'; // kate

  const { referer } = req.headers;
  // if (referer) {
  //   if (req.headers.referer.includes(`${address2}:3004`)) {
  //     res.header('Access-Control-Allow-Origin', `${address2}:3004`); //recommended
  //   } else if (req.headers.referer.includes('3005')) {
  //     res.header('Access-Control-Allow-Origin', `${address}:3005`); //title/price
  //   } else if (req.headers.referer.includes(`${address3}:3006`)) {
  //     res.header('Access-Control-Allow-Origin', `${address3}:3006`); //deliver
  //   } else if (req.headers.referer.includes(`${address}:3000`)) {
  //     res.header('Access-Control-Allow-Origin', `${address}:3000`); //my proxy
  //   } else if (req.headers.referer.includes(`${address2}:3000`)) {
  //     res.header('Access-Control-Allow-Origin', `${address2}:3000`); //nick's proxy
  //   } else if (req.headers.referer.includes(`${address3}`)) {
  //     res.header('Access-Control-Allow-Origin', `${address3}`); //kate's proxy
  //   }
  // }
  // res.header('Access-Control-Allow-Origin', `${address3}`);
  res.header('Access-Control-Allow-Origin', `*`);
  next();
});

//redis caching middleware
// if (process.env.node_env === 'production') {
//   client = redis.createClient({ host: 'redis' });
// } else {
//   client = redis.createClient();
// }

// const redisMiddleware = (req, res, next) => {
//   let key = '__expIress' + req.originalUrl || req.url;
//   client.get(key, function (err, reply) {
//     if (reply) {
//       res.send(reply);
//     } else {
//       res.sendResponse = res.send;
//       res.send = (body) => {
//         typeof body === 'string' ? client.setex(key, 180, body) : client.setex(key, 180, JSON.stringify(body));
//         res.sendResponse(body);
//       };
//       next();
//     }
//   });
// };

//gzip
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set({
    'Content-Encoding': 'gzip',
    'Content-Type': 'application/javascript',
  });
  next();
});

//SSR
app.get('/', (req, res) => {
  let itemId = req.originalUrl.slice(3);
  db.getDescriptionObject(itemId)
    .then((itemInfo) => {
      !itemInfo[0] ? res.sendStatus(404) : itemInfo;
      var bullets = itemInfo[0].description.description.split('. ');
      itemInfo[0].description.description = bullets;
      const serviceApp = ReactDOMServer.renderToString(
        <DescriptionService initData={itemInfo[0]} />
      );
      return res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>PetCo</title>
          <script>window.__initData__ = ${JSON.stringify(itemInfo[0])}</script>
          <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
          <!-- <link href='style.css' rel='stylesheet' type='text/css'> -->
        </head>
        <body>
          <div id="description">${serviceApp}</div>
          <script src="bundle.js"></script>
        </body>
      </html>
    `);
    })
    .catch((err) => {
      res.statusCode !== 404 ? res.sendStatus(500) : null;
    });
});

//Proxy rendering SSR
app.get('/component', (req, res) => {
  let { itemId } = req.query;
  db.getDescriptionObject(itemId)
    .then((itemInfo) => {
      !itemInfo[0] ? res.sendStatus(404) : itemInfo;
      var bullets = itemInfo[0].description.description.split('. ');
      itemInfo[0].description.description = bullets;
      const serviceApp = ReactDOMServer.renderToString(
        <DescriptionService initData={itemInfo[0]} />
      );
      res.send({ windowData: JSON.stringify(itemInfo[0]), serviceApp: serviceApp });
    })
    .catch((err) => {
      res.statusCode !== 404 ? res.sendStatus(500) : null;
    });
});

app.use(express.static('client/public'));

//get title and brand name for an item
app.get('/itemInformation/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  if (itemId.includes('array')) {
    const itemsInArray = itemId.substring(5);
    const itemIds = itemsInArray.split(',').map((id) => parseInt(id));
    const invalidId = false;

    for (var i = 0; i < itemIds.length; i++) {
      if (itemIds[i] < 100 || itemIds[i] > 1e7 + 100) {
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
  } else if (itemId < 100 || itemId > 1e7 + 100) {
    res.status(404).send('Invalid itemId');
  } else {
    db.getTitleAndBrand(parseInt(itemId))
      .then((data) => {
        res.send(data[0]);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
});

//get full description object for an item
app.get('/descriptionObject/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  db.getDescriptionObject(itemId)
    .then((data) => {
      !data[0] ? res.sendStatus(404) : res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post('/descriptionObject', (req, res) => {
  const descObj = req.body;

  db.postDescriptionObject(descObj)
    .then((data) => {
      data ? res.sendStatus(201) : null;
    })
    .catch((err) => {
      err.code === 11000 ? res.sendStatus(409) : res.sendStatus(500);
    });
});

//update description object for an item
app.put('/descriptionObject/:itemId', (req, res) => {
  const descObj = req.body;
  const itemId = req.params.itemId;

  db.putDescriptionObject(itemId, descObj)
    .then((data) => {
      !data ? res.sendStatus(201) : res.sendStatus(200);
      client.flushdb();
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

app.delete('/descriptionObject/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  db.deleteDescriptionObject(itemId)
    .then((data) => {
      !data ? res.sendStatus(404) : res.sendStatus(200);
      client.flushdb();
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

app.listen(3002, () => {
  console.log('server is listening on port 3002');
});

// module.exports = app;
