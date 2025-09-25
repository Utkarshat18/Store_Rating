const express= require('express');
const app=express();
const bodyParser=require('body-parser');//Middleware to parse incoming request bodies
const cors=require('cors');//CORS = Cross-Origin Resource Sharing Prevents browsers from blocking requests from different origins
const AuthRouter=require('./Routes/AuthRouter');
const ProductRouter=require('./Routes/ProductRouter');
require('dotenv').config();
require('./Models/db');

const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>{
    console.log("API is running");
    res.send("API is running on PORT "+PORT);
})

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter);
app.use('/products',ProductRouter);

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
}
)

