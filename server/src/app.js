const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const garmentRouter = require('./routes/garments/garments.router.js')

const app = express();
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors({
    origin: 'https://intelistyle-coding-challenge.netlify.app'

}));
//added for test
app.get('/find/shoe', (req, res)=>{
    //res.sendStatus(200)
    res.send({})
})
app.use(bodyParser.json()) // since we be using json data to our react client
// app.use(function(req,res,next){
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// })
app.use(garmentRouter)

module.exports = app;