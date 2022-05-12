const pool = require('../database/connection');

exports.getProducts = (req, res, next)=>{
    res.json({"message":"GET all products"});
};

exports.getProductById = (req, res, next)=>{
    res.json({"message":"Get Product By ID"});
};

exports.createProduct = (req, res, next)=>{
    res.json({"message":"Create product"});
};

exports.updateProduct = (req, res, next)=>{
    res.json({"message":"Update Product"});
};

exports.deleteProduct = (req, res, next)=>{
    res.json({"message":"Delete product"});
};