const StoreModel = require("../Models/store");

const addRating=async(req ,res)=>{
    try{
        const {rating}=req.body;
        
        // Convert rating to number and validate
        const ratingNum = parseInt(rating);
        if(!rating || isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5){
            return res.status(400).json({message:"Rating must be between 1 and 5",success:false});
        }
        
        const store = await StoreModel.findById(req.params.id);
        console.log(store);
        if(!store){
            return res.status(404)
            .json({message:"Store not found",success:false});
        }
        
        // Check if user already rated this store
        const existingRating = store.rating.find(r => r.user.toString() === req.user._id.toString());
        if(existingRating){
            return res.status(400).json({message:"You have already rated this store",success:false});
        }
        
        store.rating.push({ user: req.user._id, rating: ratingNum });
        
        // Calculate average rating
        const totalRating = store.rating.reduce((sum, r) => sum + r.rating, 0);
        store.averageRating = totalRating / store.rating.length;
        
        await store.save();
        res.json({ success: true, message: "Rating added", store });
    }catch(err){
         res.status(500).json({ success: false, message: err.message });
    }
}

module.exports={addRating};