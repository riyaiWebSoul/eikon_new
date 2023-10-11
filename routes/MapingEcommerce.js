const express =require('express');
var cors = require('cors')
const router=express.Router();
const MapingEcommerceController=require('../controller/mapingEcommerce');


router
.get('/',cors(),MapingEcommerceController.getAllMapingEcommerces)
.get('/:id',cors(),MapingEcommerceController.getMapingEcommerce)
.post('/',cors(),MapingEcommerceController.createMapingEcommerce)
.put('/:id',cors(),MapingEcommerceController.replaceMapingEcommerce)
.delete('/:id',cors(),MapingEcommerceController.deleteMapingEcommerce)
.patch('/:id',cors(),MapingEcommerceController.updateMapingEcommerce)




exports.router=router