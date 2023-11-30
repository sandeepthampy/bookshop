const express = require('express')
const bookshopRoute = express.Router()
const {bookshopModel}=require('./bookshopmodel')

bookshopRoute.post('/add',async(req,res)=>{
    const {bookname,author,price,genre}=req.body
    console.log(req.body)
    if(!bookname || !author || !price || !genre){
        return res.status(400).json({message:"All field are required"})
    }

    const newbook = new bookshopModel({bookname,author,price,genre})
    await newbook.save()
    return res.status(201).json({ message: "Saved", newbook });

})

bookshopRoute.get('/viewallbooks',async(req,res)=>{
    try {
        const books=await bookshopModel.find()
        if(books.length > 0){
            return  res.status(200).json({data: books})
        }
        else
        {
            return res.status(401).json('data Not found')
        }
        
    } catch (error) {
        res.status(500).json({error: error})
    }
})

bookshopRoute.patch('/editbook/:bookid',async(req,res)=>{
    const bookid = req.params.bookid
    const books=await bookshopModel.findByIdAndUpdate(bookid,req.body,{new:true})
    if(!books){
        return res.status(401).json('book data Not found')
    }
    else
    {
        return res.status(201).json(books)
    }
    
})

bookshopRoute.put('/editbookall/:bookid',async(req,res)=>{
    const bookid = req.params.bookid
    const books=await bookshopModel.findByIdAndUpdate(bookid,req.body,{new:true})
    if(!books){
        return res.status(401).json('book data Not found')
    }
    else
    {
        return res.status(201).json(books)
    }
    
})

bookshopRoute.get('/viewbook/:bookid',async(req,res)=>{
    const bookid=req.params.bookid
    const books=await bookshopModel.findById(bookid)
    if(books){
        return  res.status(200).json(books)
    }
    else
    {
        return res.status(401).json({message:'Book not found'})
    }
})

bookshopRoute.delete('/deletebook/:bookid',async(req,res)=>{
    const bookid=req.params.bookid
    const books=await bookshopModel.findByIdAndDelete(bookid)
    if(!books){
        return res.status(401).json({message:'Book not found'})
        
    }
    else
    {
        return  res.status(200).json(books)
    }
})
module.exports={bookshopRoute}