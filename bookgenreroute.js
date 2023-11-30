const express=require('express')
const bookgenreRoute = express.Router()
const {bookgenreModal}=require('./bookgenremodel')

bookgenreRoute.get('/getallgenre',async(req,res)=>{
    const genre=await bookgenreModal.find()
    if(genre){
        
        return  res.status(200).json(genre)
    }
    else
    {
        return res.status(401).json('data Not found')
    }
})
module.exports={bookgenreRoute}