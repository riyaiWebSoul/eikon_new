const mongoose = require('mongoose');
const { Schema } = mongoose;

const enquirySchema = new Schema({
  title:String,
  name: String,
  email: String,
  phone: String,
  message: String,
  subject:String
});

exports.enquiry = mongoose.model('enquiry', enquirySchema);
