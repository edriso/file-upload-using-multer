const express = require('express');
const {
  getAllProducts,
  createProduct,
} = require('../controllers/productController');
const { uploadProduct } = require('../controllers/uploadsController');
const { saveImage } = require('../middleware/saveImage');
const router = express.Router();

router.route('/').get(getAllProducts).post(createProduct);
router.route('/uploads').post(saveImage, uploadProduct);

module.exports = router;
