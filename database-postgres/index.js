const { Pool } = require('pg');
const { user } = require('../config.js');

const pool = new Pool({
  user: user,
  port: 5432,
  database: 'petco_descriptions',
});

module.exports.db = pool.connect((err, client, release) => {
  if (err) {
    return console.error('connection failed', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log('connected to pg', result.rows);
  });
});

//getTitleAndBrand
const getTitleAndBrand = (itemId) => {
  return pool
    .query(
      `SELECT title, primarybrand FROM descriptions JOIN brands ON descriptions.brand_id=brands.brandId WHERE itemId=${itemId}`
    )
    .then((data) => {
      data.rows[0].primaryBrand = data.rows[0].primarybrand;
      delete data.rows[0].primarybrand;
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

const getTitlesAndBrands = (itemIds) => {
  let idList = '';
  itemIds.map((id) => (idList += id + ', '));
  idList = idList.slice(0, -2);
  return pool
    .query(
      `SELECT title, primarybrand FROM descriptions JOIN brands ON descriptions.brand_id=brands.brandId WHERE itemId IN (${idList})`
    )
    .then((data) => {
      data.rows.map((row) => {
        row.primaryBrand = row.primarybrand;
        delete row.primarybrand;
      });
      return data.rows;
    })
    .catch((err) => {
      console.log('failtown');
      throw err;
    });
};

//getDescriptionObject controllers
const getDescriptionObject = (itemId) => { 
  return pool
    .query(
      `SELECT itemId, title, description, sku, daysToShip, directions, material, length, width, additionalDetails, primaryBrand, primaryColor FROM descriptions JOIN colors ON descriptions.color_id=colors.colorId JOIN brands ON descriptions.brand_id=brands.brandId WHERE descriptions.itemId=${itemId}`
    )
    .then((data) => {
      data.rows[0].SKU = data.rows[0].sku;
      data.rows[0].daysToShip = data.rows[0].daystoship;
      data.rows[0].additionalDetails = data.rows[0].additionaldetails;
      data.rows[0].primaryColor = data.rows[0].primarycolor;
      data.rows[0].primaryBrand = data.rows[0].primarybrand;
      return data.rows;
    })
    .catch((err) => {
      throw err;
    });
};

module.exports.getDescriptionObject = getDescriptionObject;
module.exports.getTitleAndBrand = getTitleAndBrand;
module.exports.getTitlesAndBrands = getTitlesAndBrands;
