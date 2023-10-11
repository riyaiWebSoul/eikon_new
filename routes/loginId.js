const express =require('express');
var cors = require('cors')
const router=express.Router();
const loginIdController=require('../controller/loginId');


router
.get('/',cors(),loginIdController.getAllloginIds)
.get('/:id',cors(),loginIdController.getloginId)
.post('/',cors(),loginIdController.createloginId)
.put('/:id',cors(),loginIdController.replaceloginId)
.delete('/:id',cors(),loginIdController.deleteloginId)
.patch('/:id',cors(),loginIdController.updateloginId)




exports.router=router