/*Dependencies*/
const express = require('express');
const router = express.Router();
const { stock, wMessage } = require('../services/index');

/*Instantiating services to use*/
const stockService = new stock();
const wMessageService = new wMessage();

router.get('/:stockSymbol', async (req, res, next) => {
    let { stockSymbol } = req.params;
    console.log(stockSymbol);
    stockSymbol = stockSymbol.trim().toUpperCase(); // Transforming to align to API format

    try {
        /*Validations to be included in here!*/
        const stockInfo = await stockService.getStock(stockSymbol); // Get Stock Data
        const wMessageInfo = await wMessageService.sendStockInfo(stockInfo.message); // Send Stock Data

        res.sendStatus(stockInfo.status); // Retrieve status from NXP call
    }
    catch(err) {
        console.error(err);
    }
});

module.exports = router;