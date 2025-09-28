const { addRating } = require('../Controllers/RatingController');
const { authenticateToken } = require('../Middlewares/AuthMiddleware');

const router=require('express').Router();

router.post('/:id/rate', authenticateToken, addRating);

module.exports=router;