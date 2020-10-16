/* eslint-disable no-console */
const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.static('../client/dist'));
app.use(express.json());

// GET /products/list/
app.get('/products/lists/', (req, res) => {
  res.staus(200)
    .send('Getting product list');
});
// GET /products/:product_id
app.get('/products/:product_id', (req, res) => {
  const id = req.params.product_id;
  res.status(200)
    .send(`Getting product by id:${id}`);
});
// GET /products/:product_id/styles
app.get('/products/:product_id/styles', (req, res) => {
  const id = req.params.product_id;
  res.status(200)
    .send(`Getting product styles by id:${id}`);
});
// GET /reviews/:product_id/meta
app.get('/reviews/:product_id/meta', (req, res) => {
  const id = req.params.product_id;
  res.status(200)
    .send(`Getting review meta data by id:${id}`);
});
// GET /cart/:session_id
app.get('/cart/:session_id', (req, res) => {
  const sid = req.params.session_id;
  res.status(200)
    .send(`Getting cart data by session id:${sid}`);
});
// POST /cart/
app.post('/cart/', (req, res) => {
  res.status(200)
    .send('Adding item to cart');
});

app.listen(PORT, () => {
  console.log(`Server running and listening on port: ${PORT}`);
});
