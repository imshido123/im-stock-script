const axios = require('axios');
const config = require('../config');
const apiBaseUrl = `https://finnhub.io/api/v1/quote?token=${config.apiKey}`;

class stockService {
    constructor() {}

    async getStock(stockSymbol) {
        // Setting up response object
        let stockInfo = {
            status: 200,
            message: 'Test'
        };

        console.log(`${apiBaseUrl}&symbol=${stockSymbol}`);

        /*Latest Stock Info*/
        await axios.get(`${apiBaseUrl}&symbol=${stockSymbol}`)
            .then((response) => {
                let date = new Date();
                let stringDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} @${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} (CST)`;

                stockInfo.status = 200;
                stockInfo.message = response.data && response.data.c ? `${stringDate} => ${stockSymbol} current price: $${response.data.c}` : 'Unable to retrieve'; // Retrieving current value
            })
            .catch((error) => {
                // console.log(error)
                stockInfo.status = 400;
                stockInfo.message = 'Bad Request'; // Change to api response
            })
            .then(function () {
                
            });
        
        return stockInfo;
    }

    socketStock() {
        // Code goes here
    }
};

module.exports = stockService;