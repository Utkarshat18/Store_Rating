const UserModel=require('../Models/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const signup=async(req,res)=>{
    try{
        const {name,role,email,address,password}=req.body;
        const user=await UserModel.findOne({email});
        if(user){
            return res.status(409)
            .json({message:"message:User already exists",success: false});
        }
        const userModel=new UserModel({name,role,email,address,password});
        userModel.password=await bcrypt.hash(password,10);
        await userModel.save();
        res.status(201)
        .json({message:"User registered successfully",success:true});
    }catch(err){
        res.status(500)
        .json({message:"Internal Server Error",err,success:false});
    }
}

const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await UserModel.findOne({email});
        if(!user){
            return res.status(409)
            .json({message:"Check your details ",success: false});
        }
        const ispasswordcheck=await bcrypt.compare(password,user.password);
        if(!ispasswordcheck){
            return res.status(403)
            .json({message:"Incorrect details ",success: false});
        }
        const token=jwt.sign({
            email:user.email,id:user._id},
            process.env.JWT_SECRET,{expiresIn:"2h"});

        
        res.status(200)
        .json({message:"Login successful",success:true,token,email,name:user.name,role:user.role});

    }catch(err){
        res.status(500)
        .json({message:"Internal Server Error",err,success:false});
    }
}

module.exports={signup,login};