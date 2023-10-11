const express =require('express');
var cors = require('cors')
const router=express.Router();
const AppointmentController=require('../controller/appointment');


router
.get('/',cors(),AppointmentController.getAllAppointments)
.get('/:id',cors(),AppointmentController.getAppointment)
.post('/',cors(),AppointmentController.createAppointment)
.put('/:id',cors(),AppointmentController.replaceAppointment)
.delete('/:id',cors(),AppointmentController.deleteAppointment)
.patch('/:id',cors(),AppointmentController.updateAppointment)




exports.router=router