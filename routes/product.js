const express =require('express');
const router=express.Router();
const productController=require('../controller/product');


router
.get('/',productController.getAllProducts)
.get('/:id',productController.getProduct)
.post('/',productController.createProduct)
.put('/:id',productController.replaceProduct)
.delete('/:id',productController.deleteProduct)
.patch('/:id',productController.updateProduct)




exports.router=router