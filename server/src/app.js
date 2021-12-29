const express = require('express');
const cors = require('cors');

const garmentRouter = require('./routes/garments/garments.router.js')

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'

}));
app.use(express.json()) // since we be using json data to our react client
app.use(garmentRouter)

module.exports = app;