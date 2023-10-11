const mongoose = require('mongoose');
const { Schema } = mongoose;

const healingTouchSchema = new Schema({
              title:String,
              card:[{title:String,count:String}]

});

exports.healingTouch = mongoose.model('healingTouch', healingTouchSchema);
