const path = require('path');
const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '../public/uploads/'));
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

const upload = multer({
  //   storage,
  dest: path.join(__dirname, '../public/uploads/'),
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

const saveImage = upload.single('image');

module.exports = {
  saveImage,
};
