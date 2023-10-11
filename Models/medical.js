const mongoose = require('mongoose');
const { Schema } = mongoose;

const medicalSchema = new Schema({
        MedicalPage: {
                title: String,
                description:String,
                section1: {
                  title:String
                },
                section2: {
                description: String,
                  subDescription:String 
                }
              }
});

exports.Medical = mongoose.model('medical', medicalSchema);
