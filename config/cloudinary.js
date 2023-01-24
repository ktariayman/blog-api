const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["png", "jpg"],
  params: {
    folder: "Blog",
    tranformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

module.exports = storage;
