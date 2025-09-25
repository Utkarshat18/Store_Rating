const express= require('express');
const app=express();
require('dotenv').config();
require('./Models/db');

const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>{
    console.log("API is running");
    res.send("API is running on PORT "+PORT);
})

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
}
)

