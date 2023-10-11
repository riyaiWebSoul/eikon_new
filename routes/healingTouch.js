const express =require('express');
var cors = require('cors')
const router=express.Router();
const HealingTouchController=require('../controller/healingTouch');


router
.get('/',cors(),HealingTouchController.getAllHealingTouchs)
.get('/:id',cors(),HealingTouchController.getHealingTouch)
.post('/',cors(),HealingTouchController.createHealingTouch)
.put('/:id',cors(),HealingTouchController.replaceHealingTouch)
.delete('/:id',cors(),HealingTouchController.deleteHealingTouch)
.patch('/:id',cors(),HealingTouchController.updateHealingTouch)




exports.router=router