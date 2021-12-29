const data = require('./src/Data/garment.product')
const startServer = require('./src/server')
const productSchema = require('./src/model/garment.schema.js')



async function importData() {
    try{
        startServer()
        await productSchema.deleteMany({})
        await productSchema.insertMany(data)
        console.log("Data import complete")
        process.exit(0)

    }catch (error) {
        console.error("Error with data import")
        process.exit(1)

    }

    
}

importData()