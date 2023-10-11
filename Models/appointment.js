const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  comments: String,
  time: String,
  date: String,
  gender:String
});

exports.appointment = mongoose.model('appointment', appointmentSchema);
