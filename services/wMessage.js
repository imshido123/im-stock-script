const axios = require('axios');
const { phoneNumberEnabled, whatsappBotKey } = require('../config');
const apiBaseUrl = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumberEnabled}&apikey=${whatsappBotKey}`;

class WhatsAppMessage {
    constructor() {}

    async sendStockInfo(message) {
        /*Send Message*/
        await axios(`${apiBaseUrl}&text=${message}`)
            .then((response) => {
                console.log('Message sent');
            })
            .catch((error) => {
                console.error('sendStockInfo method failed:', error); // Should be communicated to user - sending to internal log
            })
            .then(function () {
                // Something
            });
    }

    /*Next Feature!*/
    // async automaticUpdates() {}
};

module.exports = WhatsAppMessage;