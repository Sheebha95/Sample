const jwt = require("jsonwebtoken");
const User = require ("../models/user");

const requireAuth = async (req, res, next) => {
    try{
        console.log("header", req.headers);
        const token = req.headers.authorization;
        console.log("token", token);
        if(!token){
            return res.status(401).json({error: "Unauthorization"});
        }

        const decodeToken = await jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded", decodeToken);

        const user = await User.findById(decodeToken.userId);
        console.log("User", user);
        if(!user){
            return res.status(401).json({error: "Unauthorized"});
        }
        req.user = user;
        next();
    } catch(error){
        console.error(error);
        return res.status(401).json({error: "Unauthorized"});
    }

};

module.exports = {requireAuth};
