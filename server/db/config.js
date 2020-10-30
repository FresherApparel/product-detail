const { Client } = require('pg');

const connection = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'password',
  database: 'fresher',
  port: 5432,
});

module.exports = { connection };
