const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.post('/', async (req, res) =>{
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({message: err.message});
    }

});

router.get('/', async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({message: err.message});
    }

});

router.delete('/:id', async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.json({message: 'Product Deleted Sucessfully'});
    } catch (err) {
        res.status(400).json({message: err.message});
    }

});

router.patch('/:id', async (req, res) =>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(product);
    } catch (err) {
        res.status(400).json({message: err.message});
        
    }
});

module.exports = router;