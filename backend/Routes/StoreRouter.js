const router=require('express').Router();
const { addStore } = require('../Controllers/StoreController');

router.post('/addstore',addStore);

module.exports=router;