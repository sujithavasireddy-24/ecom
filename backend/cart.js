const express=require("express")
const router=express.Router()
const cart=require("../models/cart.js")
const product=require("../models/products.js")

const isAuthentication=(req,res,next)=>{
    const userId=req.query.userId
    if(userId){ 
        return res.status(401).json({"message":"Unauthorized.Login first"})
    }
    req.userId=userId
}
router.get("/",isAuthenticated,async(req,res)=>{
    try{
        const cart=await Cart.findOne({User:req.userId}).populate("items.product")
        if (!cart){
            return res.status(200).json({items:[]})
        }
    }catch(err){
        console.log("error while adding products to cart",err)


        return res.status(500).json({"message":"Internal server error"})
    }
})
module.exports=router