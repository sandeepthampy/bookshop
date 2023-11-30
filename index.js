const express=require('express')
const mongoose=require('mongoose')
const cors = require('cors');
const app = express()
const {bookshopRoute}=require('./bookshoproute')
const {bookgenreRoute}=require('./bookgenreroute')
const {signupRoute}= require('./signuproute')
const {purchaseRoute}=require('./purchaseroute')

app.use(express.json())
app.use(cors());
 
 app.get ('/', (req, res) => {
    res.status(200).json({data: "Working"})
 })

app.use('/mybookshop',bookshopRoute)
app.use('/mybookshop/genre',bookgenreRoute)
app.use('/mybookshop/signup',signupRoute)
app.use('/mybookshop/login',signupRoute)
app.use('/mybookshop/purchase',purchaseRoute)

const connectDb = async ()  =>{
    try{
        // await mongoose.connect("mongodb://127.0.0.1:27017/bookshop")
        await mongoose.connect("mongodb+srv://sandeepthampy:sandeepthampy@cluster0.ps8lq8x.mongodb.net/")
        console.log('Db Connected')
    }
    catch(err){
        console.log(err)
    }
    
}

connectDb().then(()=>{
    app.listen(5002,()=>{
        console.log('Server is running')
    })
})