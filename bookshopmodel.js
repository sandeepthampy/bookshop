const mongoose=require('mongoose')
const bookshopSchema = mongoose.Schema({
    bookname:{
        type:String,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
    genre:{
        type:String,
        default:"General"
    },
    
},{timestamps:true})

const bookshopModel = mongoose.model("book shop",bookshopSchema)
module.exports= {bookshopModel}