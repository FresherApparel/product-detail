/* eslint-disable no-console */
const express = require('express');
const db = require('./db/query.js');

const app = express();
const PORT = 3001;

app.use(express.static('../client/dist'));
app.use(express.json());

// GET /products/list/
app.get('/products/lists/', (req, res) => {
  res.status(200)
    .send('Getting product list');
});
// GET /products/:product_id
app.get('/products/:product_id', (req, res) => {
  const id = req.params.product_id;

  let product = {
    id: id,
    name: '',
    slogan: '',
    description: '',
    category: '',
    default_price: '',
    features: [],
  };

  db.getProductById(id, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      product.name = data.rows[0].name;
      product.slogan = data.rows[0].slogan;
      product.description = data.rows[0].description;
      product.category = data.rows[0].category;
      product.default_price = data.rows[0].default_price;
      db.getFeaturesById(id, (error, data) => {
        if (error) {
          res.send(error);
        } else {
          const feats = data.rows;
          for (let i = 0; i < feats.length; i++) {
            const pair = {
              feature: feats[i].feature,
              value: feats[i].value,
            };
            product.features.push(pair);
          }
          res.send(product);
        }
      });
    }
  });
});
// GET /products/:product_id/styles
app.get('/products/:product_id/styles', (req, res) => {
  const id = req.params.product_id;
  let styles = {
    product_id: id,
    results: [],
  };

  db.getStylesById(id, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      const rows = data.rows;
      for (let i = 0; i < rows.length; i++) {
        let style = {
          style_id: rows[i].id,
          name: rows[i].name,
          original_price: rows[i].original_price,
          sale_price: rows[i].sale_price,
          'defalut?': rows[i]['default?'],
          photos: [],
        };
        styles.results.push(style);
      }
      res.send(styles);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running and listening on port: ${PORT}`);
});
