const express =require('express');
var cors = require('cors')
const router=express.Router();
const FooterController=require('../controller/footer');


router
.get('/',cors(),FooterController.getAllFooters)
.get('/:id',cors(),FooterController.getfooter)
.post('/',cors(),FooterController.createFooter)
.put('/:id',cors(),FooterController.replacefooter)
.delete('/:id',cors(),FooterController.deletefooter)
.patch('/:id',cors(),FooterController.updatefooter)




exports.router=router