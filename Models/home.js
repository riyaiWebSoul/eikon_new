const mongoose = require('mongoose');
const { Schema } = mongoose;

const homeSchema = new Schema({
    section: {
        imageSrc: [String],
        title:String,
        heading: String,
        description:String
      }
});

exports.home = mongoose.model('home', homeSchema);
