const jwt=require('jsonwebtoken');

const ensurevalidation=(req,res,next)=>{
    const auth=req.headers['authorization'];
    if(!auth){
        return res.status(403)
        .json({message:"Unauthorized access",success:false});
    }
    try{
        const decode=jwt.verify(auth,process.env.JWT_SECRET);
        req.user=decode;
        next();
    }catch(err){
        return res.status(500)
        .json({message:"Internal Server Error",err,success:false});
    }
}

module.exports=ensurevalidation;