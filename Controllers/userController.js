const User=require('../models/userModel.js');

exports.home=(req,res)=>{
    res.send("Hello World !");
}

exports.createUser=async(req,res)=>{
    // extract info
    try {
        const{name,email}=req.body;
        const user=await User.create({
            name,
            email
        })
        res.status(201).json({
            success:true,
            message:"User Created Successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success:false,
            message:error.message,
        })
    }
}