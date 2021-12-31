const mongoose = require('mongoose');

const garmentSchema = new mongoose.Schema({
    product_description : {
        type: String,
        required: true,
    },
    product_title:{
        type: String,
        required: true,

    },
    price:{
        type:Number,
        required: true,
    },
    image_urls:[ String ],

    url: {
        type: String,
        required: true,
    },

});
garmentSchema.index({ product_title: 'text' });
const productSchema = mongoose.model('Garment', garmentSchema )
module.exports = productSchema