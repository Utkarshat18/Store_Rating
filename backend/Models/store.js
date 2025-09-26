
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ratingSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  rating: { 
    type: Number, 
    min: 1, 
    max: 5, 
    required: true 
  }
});

const StoreSchema=new Schema({
    name:{
        type:String,   
        required:true
    },
    location:{
        type:String,
        required:true 
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    storeowner:{
        type:String,
        required:true
    },
    rating:[ratingSchema],

    averageRating: { 
        type: Number,
        default: 0 
    }
});

const StoreModel=mongoose.model('stores',StoreSchema);
module.exports=StoreModel;
