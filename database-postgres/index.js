const { Pool } = require('pg');

const pool = new Pool({
  user: "samjohnson",
  password: "localhost",
  port: 5432,
  database: "petco_descriptions"
});

module.exports.db = pool.connect((err, client, release) => {
  if (err) {
    return console.error('connection failed', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log('connected to pg', result.rows);
  })
});