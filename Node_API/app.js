const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRouts = require('./api/routes/products');
const ordersRouts = require('./api/routes/orders');

mongoose.connect('mongodb+srv://el3orb:' + process.env.MONGO_PW + '@cluster0.ava9t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useMongoClient: true
})

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, resp, next) => {
    resp.header('Access-Control-Allow-Origin', '*');
    resp.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        resp.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return req.status(200).json({});
    }
    next();
});

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