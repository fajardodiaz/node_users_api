const express = require('express');
const { getProducts, getProductById, createProduct, deleteProduct, updateProduct } = require('../controllers/products');
let router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.post('/:id', updateProduct);
router.post('/:id', deleteProduct);


module.exports = router;