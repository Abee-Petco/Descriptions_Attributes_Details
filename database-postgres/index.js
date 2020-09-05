const { Pool } = require('pg');

const pool = new Pool({
  user: 'samjohnson',
  password: 'localhost',
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
    .then(data => {
      console.log(data);
      data.rows[0].primaryBrand = data.rows[0].primarybrand;
      delete data.rows[0].primarybrand;
      return data;
    })
    .catch(err => {
      throw err;
    })
}

//getDescriptionObject controllers
const getDescriptionObject = (itemId) => {
  return pool
    .query(
      `SELECT * FROM descriptions JOIN colors ON descriptions.color_id=colors.colorId JOIN brands ON descriptions.brand_id=brands.brandId WHERE descriptions.itemId=${itemId}`
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