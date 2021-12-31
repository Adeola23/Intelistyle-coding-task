const express = require('express');
const {getSearched} = require("./garments.controller.js");


const garmentRouter = express.Router();

garmentRouter.get('/find/:query', getSearched)

module.exports = garmentRouter