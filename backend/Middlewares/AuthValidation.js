const joi=require('joi');

const signupValidation=(req,res,next)=>{
    const schema=joi.object({
    name:joi.string().min(3).max(30).required(),
    email:joi.string().email().required(),
    address:joi.string().min(10).max(100).required(),
    password:joi.string().min(8).required()
});
const {error}=schema.validate(req.body);
if(error){
    return res.status(400)
    .json({message:"Bad Request",err});
}
next();

}

const loginValidation=(req,res,next)=>{
    const schema=joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(8).required()
});
const {error}=schema.validate(req.body);
if(error){
    return res.status(400)
    .json({message:"Bad Request",err});
}
next();

}

module.exports={signupValidation,loginValidation};