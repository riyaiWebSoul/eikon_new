const mongoose = require('mongoose');
const { Schema } = mongoose;

const imagesUploadSchema = new Schema({
  name:String,
  image: String,  //update this
  description: String,
  keywords: String,
  origin: String,
  brew_time:String,
  temperature: String,
});

exports.imagesUpload = mongoose.model('imagesUpload', imagesUploadSchema);
