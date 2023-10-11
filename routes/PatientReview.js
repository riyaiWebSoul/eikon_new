const express =require('express');
var cors = require('cors')
const router=express.Router();
const PatientReviewController=require('../controller/patientReview');


router
.get('/',cors(),PatientReviewController.getAllPatientReviews)
.get('/:id',cors(),PatientReviewController.getPatientReview)
.post('/',cors(),PatientReviewController.createPatientReview)
.put('/:id',cors(),PatientReviewController.replacePatientReview)
.delete('/:id',cors(),PatientReviewController.deletePatientReview)
.patch('/:id',cors(),PatientReviewController.updatePatientReview)




exports.router=router