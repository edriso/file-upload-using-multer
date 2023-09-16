const { StatusCodes } = require('http-status-codes');
const Product = require('../models/product');

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

module.exports = {
  getAllProducts,
  createProduct,
};
