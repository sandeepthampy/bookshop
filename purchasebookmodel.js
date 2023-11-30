const mongoose=require('mongoose')
const purchaseSchema=mongoose.Schema({
    bookId:{type:mongoose.Schema.Types.ObjectId,ref:"book shop"}
    ,
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"signup"}

    
})
const purchaseModel=mongoose.model("purchasedBook",purchaseSchema)

const purchaseWishSchema=mongoose.Schema({
    bookId:{type:mongoose.Schema.Types.ObjectId,ref:"book shop"}
    ,
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"signup"}

    
})
const purchaseWishModel=mongoose.model("purchasewishBook",purchaseWishSchema)

// module.exports={purchaseModel,purchaseWishModel}
module.exports={purchaseModel,purchaseWishModel}