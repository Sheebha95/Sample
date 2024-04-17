const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    modelName: String,
    brand: String,
    screenSize: String,
    dispaly: String,
    resolution: String
});

module.exports = mongoose.model("Product", productSchema);