const mongoose = require('mongoose');
const { Schema } = mongoose;

const footerSchema = new Schema({
  rightSection:{
    title:String
  },
  section: {
    title: String,
    email: String,
    phone:String,
    Address:String
  },
  MidSection: {
    title: String,
    details:[
     String 
    ]
  }
});

exports.footer = mongoose.model('footer', footerSchema);
