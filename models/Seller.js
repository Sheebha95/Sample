const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const sellerSchema = new mongoose.Schema({
    sellerName: String,
    phone: Number,
    gstNumber: String,
    businessType: String,
    city: String
});

module.exports = mongoose.model("SellerDetalis", sellerSchema);