const { Client } = require('pg');

const connection = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'password',
  database: 'fresher',
  port: 5432,
});

connection.connect();

const getProductById = (id, callback) => {
  connection.query(`SELECT * FROM "Products" WHERE id = ${id}`, (error, data, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};

const getFeaturesById = (id, callback) => {
  connection.query(`SELECT * FROM "Features" WHERE prod_id = ${id}`, (error, data, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};

const getStylesById = (id, callback) => {
  connection.query(`SELECT * FROM "Styles" WHERE prod_id = ${id}`, (error, data, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};

const getPhotosById = (id, callback) => {
  connection.query(`SELECT * FROM "Photos" WHERE style_id = ${id}`, (error, data, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  getProductById,
  getFeaturesById,
  getStylesById,
  getPhotosById,
};
