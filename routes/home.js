const express =require('express');
var cors = require('cors')
const router=express.Router();
const HomeController=require('../controller/home');


router
.get('/',cors(),HomeController.getAllHomes)
.get('/:id',cors(),HomeController.getHome)
.post('/',cors(),HomeController.createHome)
.put('/:id',cors(),HomeController.replaceHome)
.delete('/:id',cors(),HomeController.deleteHome)
.patch('/:id',cors(),HomeController.updateHome)




exports.router=router