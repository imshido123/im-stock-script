const config = require('./config');
const finnhub = require('finnhub');
 
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = config.apiKey;
const finnhubClient = new finnhub.DefaultApi();

/*Stock*/
//Quote
finnhubClient.quote(config.stockSymbol, (error, data, response) => {
    console.log(data);
});