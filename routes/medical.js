const express =require('express');
var cors = require('cors')
const router=express.Router();
const MedicalController=require('../controller/medical');


router
.get('/',cors(),MedicalController.getAllMedicals)
.get('/:id',cors(),MedicalController.getMedical)
.post('/',cors(),MedicalController.createMedical)
.put('/:id',cors(),MedicalController.replaceMedical)
.delete('/:id',cors(),MedicalController.deleteMedical)
.patch('/:id',cors(),MedicalController.updateMedical)




exports.router=router