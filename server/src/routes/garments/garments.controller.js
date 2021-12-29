const garments = require('../../model/garment.schema')

async function getSearched(req, res){
    try {
        const product = await garments.find({})
        return res.status(200).json(product)


    }catch(error){
        console.error(error)
        res.status(500).json({message:"Server error"})
    }

}

module.exports = {
    getSearched
}