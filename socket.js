/*Dependencies*/
const { wMessage } = require('./services/index');
const WebSocket = require('ws');
const config = require('./config');
const webSocketUrl = `wss://ws.finnhub.io?token=${config.apiKey}`;

const ws = new WebSocket(webSocketUrl, {
    origin: 'https://finnhub.io/'
});
const whatsAppService = new wMessage();

const threshold = 120.0;

ws.on('open', function open() {
    console.log('Connection successful!');
    ws.send(
        JSON.stringify({
            'type':'subscribe',
            'symbol': 'NXPI'
        })
    );
});

ws.on('message', incoming = async response => {
    let pResponse = JSON.parse(response);

    if(pResponse.data && pResponse.type === 'trade') {
        console.log(`Symbol:${pResponse.data[0].s} => Current Price: ${pResponse.data[0].p}\n`);

        if(parseFloat(pResponse.data[0].p) >= threshold) {
            let message = `Price Range Reached:\nSymbol:${pResponse.data[0].s} => Current Price: ${pResponse.data[0].p}\n`;
            console.log(`Condition met:\n${message}`);
            await whatsAppService.sendStockInfo(message);
        }
    }
    else if(pResponse.type === 'ping') {
        console.log(`Ping received`);
    }
    else {
        console.log(`Something else received`, typeof pResponse.data);
    }
});

ws.on('close', function close() {
    console.log('disconnected');
});