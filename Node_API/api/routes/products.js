const express = require('express');
const router = express.Router();

router.get('/', (req, resp, next) => {
    resp.status(200).json({
        msg: 'Handling GET requests to /products'
    });
});

router.get('/:productId', (req, resp, next) => {
    resp.status(200).json({
        msg: 'You have discovered the special ID.',
        id : req.params.productId
    });
});

router.post('/', (req, resp, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    resp.status(201).json({
        msg: 'Handling POST requests to /products',
        product: product
    });
});

router.patch('/:productId', (req, resp, next) => {
    resp.status(200).json({
        msg: 'Updated product!',
        id : req.params.productId
    });
});

router.delete('/:productId', (req, resp, next) => {
    resp.status(200).json({
        msg: 'Deleted product.',
        id : req.params.productId
    });
});

module.exports = router;