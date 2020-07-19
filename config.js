require('dotenv').config();

const config = {
    apiKey: process.env.STOCK_API_KEY,
    whatsappBotKey: process.env.WHATSAPP_BOT_KEY,
    phoneNumberEnabled: process.env.PHONE_NUMBER
};

module.exports = config;