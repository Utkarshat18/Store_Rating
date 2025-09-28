const jwt = require('jsonwebtoken');
const UserModel = require('../Models/User');

const authenticateToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

        if (!token) {
            return res.status(401).json({ message: "Access token required", success: false });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded.id);
        
        if (!user) {
            return res.status(401).json({ message: "Invalid token", success: false });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid or expired token", success: false });
    }
};

module.exports = { authenticateToken };


