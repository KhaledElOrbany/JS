const express = require('express');
const app = express();

const productRouts = require('./api/routes/products');
const ordersRouts = require('./api/routes/orders');

app.use('/products', productRouts);
app.use('/orders', ordersRouts);

module.exports = app;