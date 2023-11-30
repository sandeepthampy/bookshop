const express = require("express");
const purchaseRoute = express.Router();
const {purchaseModel} = require('./purchasebookmodel')
const {purchaseWishModel}=require('./purchasebookmodel')

purchaseRoute.post("/add", async (req, res) => {
  const { bookId, userId } = req.body;
  console.log(req.body)
//   console.log(bookId,'bookid')
//   console.log(userId,'userid')

  if (!bookId || !userId) {
    return res.status(400).json({ message: "All field are required" });
  }

  const newpurchase = new purchaseModel({
    bookId,
    userId
  });
  await newpurchase.save();
  return res.status(201).json({ message: "Saved", newpurchase });
});

purchaseRoute.post("/wishadd", async (req, res) => {
  const { bookId, userId } = req.body;
  console.log(req.body)


  if (!bookId || !userId) {
    return res.status(400).json({ message: "All field are required" });
  }

  const newwishadd = new purchaseWishModel({
    bookId,
    userId
  });
  await newwishadd.save();
  // return res.status(201).json({ message: "Saved", newwishadd });
  return res.status(201).json({ bookId:newwishadd.bookId,userId:newwishadd.userId });
});

purchaseRoute.get('/getpurchasedbooksbyall',async(req,res)=>{
   
    const books=await purchaseModel.find().populate('bookId').populate('userId')
    return  res.status(200).json(books)
})

purchaseRoute.get('/getpurchasedbooksbyuser/:userid',async(req,res)=>{
    const userId = req.params.userid
    const books=await purchaseModel.find({ userId: userId }).populate('bookId').populate('userId')
    return  res.status(200).json(books)
})

purchaseRoute.get('/getwishlist/:userid',async(req,res)=>{
  const userId = req.params.userid
  const books=await purchaseWishModel.find({ userId: userId }).populate('bookId')
  return  res.status(200).json(books)
})

purchaseRoute.get('/getwishlistchk/:userid',async(req,res)=>{
  const userId = req.params.userid
  const books=await purchaseWishModel.find({ userId: userId })
  return  res.status(200).json(books)
})

purchaseRoute.delete('/deletewish/:wishid',async(req,res)=>{
  const wishid=req.params.wishid
  const wishs=await purchaseWishModel.findByIdAndDelete(wishid)
  if(!wishs){
      return res.status(401).json({message:'Wish not found'})
      
  }
  else
  {
      return  res.status(200).json(wishs)
  }
})

module.exports = { purchaseRoute };
