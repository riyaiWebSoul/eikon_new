const express =require('express');
var cors = require('cors')
const router=express.Router();
const ContactController=require('../controller/contact');


router
.get('/',cors(),ContactController.getAllContacts)
.get('/:id',cors(),ContactController.getContact)
.post('/',cors(),ContactController.createContact)
.put('/:id',cors(),ContactController.replaceContact)
.delete('/:id',cors(),ContactController.deleteContact)
.patch('/:id',cors(),ContactController.updateContact)




exports.router=router