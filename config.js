require('dotenv').config();

const config = {
    apiKey: process.env.API_KEY,
    stockSymbol: process.env.STOCK_SYMBOL
};

module.exports = config;