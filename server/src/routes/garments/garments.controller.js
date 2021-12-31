const garments = require('../../model/garment.schema')

// async function getSearched(req, res){
//     try {
//
//         const product = await garments.find({
//             $text:{
//                 $search: req.params.query}
//         }, (error, result)=>{
//             if(error){
//                 console.log(error);
//                 return res.sendStatus(500);
//                 return ;
//
//             }else{
//                return res.status(200).json(result)
//             }
//
//         })
//
//
//     }catch(error){
//         console.error(error)
//         res.status(500).json({message:"Server error"})
//     }
//
// }
async function getSearched(req, res){

    const searchTerm = req.params.query
    const searchTerms = searchTerm.split(" ")
    const allQueries = []

    searchTerms.forEach(element => {
        allQueries.push({
            product_title: {$regex: String(element), $options: '$i'}
        })
    })

    try {
        await garments.find({$and: allQueries
        }, (error, product) => {
            if (error) {
                console.log(error)
            } else {
                return res.status(200).json(product)
            }
        })


    } catch (error) {
        console.error(error)

    }



}

// async function getSearched(req, res){
//     garments.find({'product_title': req.params.query}, (error, data)=>{
//         if (error){
//             console.log(error)
//         }console.log(data)
//     })
// }




module.exports = {
    getSearched
}