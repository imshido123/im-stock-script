const WebSocket = require('ws');
const config = require('./config');
const webSocketUrl = `wss://ws.finnhub.io?token=${config.apiKey}`;

const ws = new WebSocket(webSocketUrl, {
    origin: 'https://finnhub.io/'
});

ws.on('open', function open() {
    console.log('Connection successful!');
    ws.send(
        JSON.stringify({
            'type':'subscribe',
            'symbol': 'NXPI'
        })
    );
});

ws.on('message', function incoming(event) {
    console.log(`Data updated: ${event}`);
});

ws.on('close', function close() {
    console.log('disconnected');
});