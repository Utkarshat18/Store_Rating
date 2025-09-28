const router=require('express').Router();
const { addStore,getallstores } = require('../Controllers/StoreController');

router.post('/addstore',addStore);
router.get('/getallstore',getallstores);

module.exports=router;