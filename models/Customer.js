const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const customerSchema = new mongoose.Schema({
    customerName: String,
    phone: Number,
    address: String,
    emailID: String,
    gender: String,
    age: Number
});

module.exports = mongoose.model("CustomerDetails", customerSchema);