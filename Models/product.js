const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});

exports.Product = mongoose.model('Product', productSchema);
