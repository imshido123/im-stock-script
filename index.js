/*Dependencies*/
const express = require('express');
const { stock } = require('./routes/index');

/*Initializing services*/
const app = express();
const PORT = 8000;

/*Middlewares*/
// app.use(express.json()); // Enabling JSON in routes operations

/*End Points*/
app.use('/stock/', stock);

/*Instantiating the server*/
const server = app.listen(PORT, () => {
    console.log(`Listening http://localhost:${server.address().port}`);
});