const express = require('express');
const {
  getAllProducts,
  createProduct,
} = require('../controllers/productController');
const { uploadProductProduct } = require('../controllers/uploadsController');
const router = express.Router();

router.route('/').get(getAllProducts).post(createProduct);
router.route('/uploads').post(uploadProductProduct);

module.exports = router;
