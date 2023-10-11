const express =require('express');
var cors = require('cors')
const router=express.Router();
const AboutController=require('../controller/about');


router
.get('/',cors(),AboutController.getAllAbouts)
.get('/:id',cors(),AboutController.getAbout)
.post('/',cors(),AboutController.createAbout)
.put('/:id',cors(),AboutController.replaceAbout)
.delete('/:id',cors(),AboutController.deleteAbout)
.patch('/:id',cors(),AboutController.updateAbout)




exports.router=router