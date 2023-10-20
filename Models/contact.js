const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
   
        title: String,
        description: String,
        SubTile:String,
       

});

exports.contact = mongoose.model('contact', contactSchema);
