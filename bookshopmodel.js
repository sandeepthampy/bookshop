const mongoose=require('mongoose')
const bookshopSchema = mongoose.Schema({
    bookname:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    genre:{
        type:String,
        default:"General"
    },
    
},{timestamps:true})

const bookshopModel = mongoose.model("book shop",bookshopSchema)
module.exports= {bookshopModel}