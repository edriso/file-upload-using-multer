const { StatusCodes } = require('http-status-codes');

const uploadProductProduct = async (req, res) => {
  res.status(StatusCodes.CREATED).send('uploadProductProduct');
};

module.exports = {
  uploadProductProduct,
};
