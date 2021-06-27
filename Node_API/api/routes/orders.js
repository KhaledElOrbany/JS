const express = require('express');
const router = express.Router();

router.get('/', (req, resp, next) =>{
    resp.status(200).json({
        msg: 'Orders were fetched.'
    });    
});

router.get('/:orderId', (req, resp, next) =>{
    resp.status(200).json({
        msg: 'Order details.',
        id: req.params.orderId
    });    
});

router.post('/', (req, resp, next) =>{
    resp.status(201).json({
        msg: 'Order was created.'
    });    
});

router.delete('/:orderId', (req, resp, next) =>{
    resp.status(200).json({
        msg: 'Order deleted.',
        id: req.params.orderId
    });    
});

module.exports = router;