const StoreModel = require('../Models/store');

const addStore=async(req , res)=>{
    try{
        const {name,location,description,category,storeowner}=req.body;
        const store=await StoreModel.findOne({storeowner});
        console.log(store);
        if(store)
        {
            return res.status(409)
            .json({message:"Store already exists",success:false});
        }
        const storeModel=new StoreModel({name,location,description,category,storeowner});
        await storeModel.save();
        res.status(201)
        .json({message:"Store added successfully",success:true});

    }catch(err){
        res.status(500)
        .json({message:"Internal Server Error",err,success:false});
    }
}

const getallstores=async(req,res)=>{
    try{
        console.log("Get all stores called");
        const stores=await StoreModel.find().populate("rating.user", "name email");
        console.log(stores);
        if(!stores)
        {
            res.json({message:"NO rating found"});
        }
        res.json({message:"All stores fetched successfully",stores,success:true});

    }catch(err){
        res.status(500)
        .json({message:"Internal server error",err,success:false});
    }
}

module.exports={addStore,getallstores};