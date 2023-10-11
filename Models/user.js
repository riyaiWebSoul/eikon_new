const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    section: {
        imageSrc: String,
        title:String,
        heading: String,
        description:String
      }
});

exports.user = mongoose.model('user', userSchema);
