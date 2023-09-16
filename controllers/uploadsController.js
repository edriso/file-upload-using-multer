const fs = require('fs');
const path = require('path');
const { StatusCodes } = require('http-status-codes');
const cloudinary = require('cloudinary').v2;
const CustomError = require('../errors');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadProduct = async (req, res) => {
  // check if user uploaded a file
  if (!req.file) {
    throw new CustomError.BadRequestError('No File Uploaded');
  }
  // check format
  if (!req.file.mimetype.startsWith('image')) {
    throw new CustomError.BadRequestError('Please Upload an Image');
  }

  const imagePath = path.join(
    __dirname,
    `../public/uploads/${req.file.filename}`,
  );

  const uploadResponse = await cloudinary.uploader.upload(imagePath, {
    use_filename: true,
    folder: 'hello-file-upload-2',
  });

  fs.rm(imagePath, (err) => {
    if (err) console.log(err);
  });

  res
    .status(StatusCodes.OK)
    .json({ image: { src: uploadResponse.secure_url } });
  // .json({ image: { src: `/uploads/${req.file.originalname}` } });
};

module.exports = {
  uploadProduct,
};
