# Server to send automatic Whatsapp messages for a given Stock
Simple express server to send information over Whatsapp, given a specific stock symbol.

## To install
_______
Follow these steps to have the server up and running.

* Install all dependencies
    > npm install
* Start the server
    > node index.js
* Setup an _.env_ file in your local, containing the following environmental variables:
    * STOCK_API_KEY=
    * WHATSAPP_BOT_KEY=
    * PHONE_NUMBER=+

Please consider you will need to generate these APIs from [Finnhub](https://finnhub.io/) and [CallMeBot](https://www.callmebot.com/blog/free-api-whatsapp-messages/) to setup the end-points correctly.

## Features (current)
_______
**Stock API end-point**

Open your browser or any API development platform and access the following endpoint.

> \<HOST\>:\<PORT\>/stock/\<**symbol**>

Provide a **symbol** at the end of the URL to get the current price in the PHONE_NUMBER you previously defined.

**To include (_work in progress_)**
* Automatic updates based on a predefined threshold
* Additional services stock-related
    * Multiple-symbol end-point
    * Multiple PHONE_NUMBER & WHATSAPP_BOT_KEY functionality
    * _Others..._
