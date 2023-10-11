const express =require('express');
var cors = require('cors')
const router=express.Router();
const DrListController=require('../controller/drList');


router
.get('/',cors(),DrListController.getAllDrLists)
.get('/:id',cors(),DrListController.getDrList)
.post('/',cors(),DrListController.createDrList)
.put('/:id',cors(),DrListController.replaceDrList)
.delete('/:id',cors(),DrListController.deleteDrList)
.patch('/:id',cors(),DrListController.updateDrList)




exports.router=router