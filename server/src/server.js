const http = require('http');
const app = require('./app.js')
const mongoose = require('mongoose')
const path = require('path');
const express = require('express')
require("dotenv").config()

const MONGO_URL = 'mongodb+srv://garment-api:Vt9rnusrsEZOtmBk@intelistyle-cluster.utxct.mongodb.net/garment-item?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8000;
const server = http.createServer(app)



async function startServer() {
    try{
        /* Here you need to add the  parameters to the
    connect function, if we do not specify this option we get some deprecation in our console */
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true, // This determines how mongoose parses the connection string
            useUnifiedTopology: true// mongoose will use the updated way of talking to clusters of data bases
        })
        server.listen(process.env.PORT || 8000 , ()=>{
            console.log('listening on port')
        })
    }catch(error){
        console.log(error)
    }
}
startServer()

/* how to check if connection is working*/
mongoose.connection.on('open', () => {
    console.log('MongoDB connection ready')
})
mongoose.connection.on('error',(err)=>{
    console.log(err)
})


//Serve static assets if in production
// if (process.env.NODE_ENV === 'production'){
//     // Set static folder
//     app.use(express.static(path.join(__dirname,'..', 'public')))
//
//     app.get('*',  (req, res)=>{
//         res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
//     })
// }




module.exports = startServer
console.log(PORT)