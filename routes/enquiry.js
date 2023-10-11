const express =require('express');
var cors = require('cors')
const router=express.Router();
const EnquiryController=require('../controller/enquiry');


router
.get('/',cors(),EnquiryController.getAllEnquirys)
.get('/:id',cors(),EnquiryController.getEnquiry)
.post('/',cors(),EnquiryController.createEnquiry)
.put('/:id',cors(),EnquiryController.replaceEnquiry)
.delete('/:id',cors(),EnquiryController.deleteEnquiry)
.patch('/:id',cors(),EnquiryController.updateEnquiry)




exports.router=router