const { StatusCodes } = require('http-status-codes');
const product = require('../models/Product');

const getAllProducts = async (req, res) => {
  res.status(StatusCodes.OK).send('getAllProducts');
};

const createProduct = async (req, res) => {
  res.status(StatusCodes.CREATED).send('createProduct');
};

module.exports = {
  getAllProducts,
  createProduct,
};
