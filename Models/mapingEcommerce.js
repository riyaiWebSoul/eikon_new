const mongoose = require('mongoose');
const { Schema } = mongoose;

const mapingEcommerceSchema = new Schema({
    MapingEcommerce: {
        title: String,
    description: String,
        section1: {
          title: String
        },
        section2: {
          description1:String,
          description2:String
        }
      }
});

exports.MapingEcommerce = mongoose.model('mapingEcommerce', mapingEcommerceSchema);
