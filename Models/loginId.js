const mongoose = require('mongoose');
const { Schema } = mongoose;

const loginIdSchema = new Schema({
 email:String,
 password:String
});

exports.loginId = mongoose.model('loginId', loginIdSchema);
