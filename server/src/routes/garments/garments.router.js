const express = require('express');
const {getSearched} = require("./garments.controller.js");


const garmentRouter = express.Router();

garmentRouter.get('/garments', getSearched)

module.exports = garmentRouter