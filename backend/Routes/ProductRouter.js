const ensurevalidation=require('../Middlewares/AuthCheck');
const router=require('express').Router();

router.get('/',ensurevalidation,(req,res)=>{
    console.log("Products API is called",req.user);
    res.status(200)
    .json([{name:"Product 1",price:100,description:"This is product 1"},
    {name:"Product 2",price:200,description:"This is product 2"},
    ]);
})

module.exports=router;
