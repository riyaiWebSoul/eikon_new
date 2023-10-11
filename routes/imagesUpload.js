const express =require('express');
var cors = require('cors')
const router=express.Router();
const ImagesUploadController=require('../controller/imagesUpload');


router
.get('/',cors(),ImagesUploadController.getAllImagesUploads)
.get('/:id',cors(),ImagesUploadController.getImagesUpload)
.post('/',cors(),ImagesUploadController.createImagesUpload)
.put('/:id',cors(),ImagesUploadController.replaceImagesUpload)
.delete('/:id',cors(),ImagesUploadController.deleteImagesUpload)
.patch('/:id',cors(),ImagesUploadController.updateImagesUpload)




exports.router=router