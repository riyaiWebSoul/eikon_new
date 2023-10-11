const model = require('../Models/imagesUpload');
const ImagesUpload = model.imagesUpload;
const multer = require('multer');
const path = require('path'); // Add path module for file extension
const fs = require('fs'); // Add fs module for file handling

const storage = multer.diskStorage({
  destination: '../uploads/',
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + extname);
  },
});

const upload = multer({ storage });

const handleResponse = (res, data, errorMessage) => {
  try {
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ error: errorMessage });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: errorMessage });
  }
};

exports.createImagesUpload = upload.single('image'); // Use multer to handle image upload

exports.uploadImage = async (req, res) => {
  try {
    const newImagesUpload = new ImagesUpload({
      imageName: req.file.filename,
       // Save the uploaded image's filename
      // Add other properties as needed
    });
    await newImagesUpload.save();
    res.json({ success: true, message: 'Image uploaded and record created successfully' });
  } catch (error) {
    handleResponse(res, null, 'Failed to create imagesUpload');
  }
};

exports.getAllImagesUploads = async (req, res) => {
  try {
    const imagesUploads = await ImagesUpload.find();
    res.json(imagesUploads);
  } catch (err) {
    handleResponse(res, null, 'Failed to fetch imagesUploads');
  }
};

exports.getImagesUpload = async (req, res) => {
  const id = req.params.id;
  try {
    const imagesUpload = await ImagesUpload.findById(id);
    handleResponse(res, imagesUpload, 'ImagesUpload not found');
  } catch (err) {
    handleResponse(res, null, 'Failed to fetch imagesUpload');
  }
};

exports.replaceImagesUpload = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await ImagesUpload.findOneAndReplace({ _id: id }, req.body, { new: true });
    handleResponse(res, doc, 'ImagesUpload not found');
  } catch (err) {
    handleResponse(res, null, 'Failed to replace imagesUpload');
  }
};

exports.updateImagesUpload = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await ImagesUpload.findOneAndUpdate({ _id: id }, req.body, { new: true });
    handleResponse(res, doc, 'ImagesUpload not found');
  } catch (err) {
    handleResponse(res, null, 'Failed to update imagesUpload');
  }
};

exports.deleteImagesUpload = async (req, res) => {
  const id = req.params.id;
  try {
    const imageUpload = await ImagesUpload.findOne({ _id: id });
    if (!imageUpload) {
      return res.status(404).json({ error: 'ImagesUpload not found' });
    }
    
    // Remove the associated image file from the uploads directory
    const imagePath = path.join(__dirname, '..', 'uploads', imageUpload.imageName);
    fs.unlinkSync(imagePath); // Delete the file

    const doc = await ImagesUpload.findOneAndDelete({ _id: id });
    if (doc) {
      res.status(204).send(); // No content in response for successful deletion
    } else {
      res.status(404).json({ error: 'ImagesUpload not found' });
    }
  } catch (err) {
    handleResponse(res, null, 'Failed to delete imagesUpload');
  }
};
