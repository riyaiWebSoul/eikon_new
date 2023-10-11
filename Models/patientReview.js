const mongoose = require('mongoose');
const { Schema } = mongoose;

const patientReviewSchema = new Schema({
   
        testimonial:{
                title:String,
                description:String
        },
        userReview:[{
                Name:String,
                Patient:String,
                description:String,
                image:String
              }]
        

});

exports.patientReview = mongoose.model('patientReview', patientReviewSchema);
