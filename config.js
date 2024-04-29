require("dotenv").config();
const config = {
    port: process.env.PORT,
    mongodbUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
};
console.log(process.env.MONGODB_URI);
module.exports = config;
