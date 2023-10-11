const express =require('express');
var cors = require('cors')
const router=express.Router();
const UserController=require('../controller/user');


router
.get('/',cors(),UserController.getAllUsers)
.get('/:id',cors(),UserController.getuser)
.post('/',cors(),UserController.createUser)
.put('/:id',cors(),UserController.replaceuser)
.delete('/:id',cors(),UserController.deleteuser)
.patch('/:id',cors(),UserController.updateuser)




exports.router=router