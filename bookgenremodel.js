const mongoose=require('mongoose')
const bookgenreSchema=mongoose.Schema({
    id:{type:Number},
    name:{type:String}

}, { collection: 'bookgenre' })

const bookgenreModal=mongoose.model('bookgenre',bookgenreSchema)
module.exports={bookgenreModal}