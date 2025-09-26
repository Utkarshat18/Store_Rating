const router=require('express').Router();
const { addStore } = require('../Controllers/StoreController');

router.post('/add',addStore);

module.exports=router;