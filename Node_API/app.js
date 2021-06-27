const express = require('express');
const app = express();
const morgan = require('morgan');

const productRouts = require('./api/routes/products');
const ordersRouts = require('./api/routes/orders');

app.use(morgan('dev'));

app.use('/products', productRouts);
app.use('/orders', ordersRouts);

//#region error_handling
app.use((req, resp, next) => {
    const error = new Error('Not Found!');
    error.status = 404;
    next(error);
});
app.use((error, req, resp, next) => {
    resp.status(error.status || 500);
    resp.json({
        err: {
            msg: error.message
        }
    });
});
//#endregion



module.exports = app;