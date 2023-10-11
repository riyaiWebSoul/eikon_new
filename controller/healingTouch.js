const fs = require("fs");
const model= require('../Models/healingTouch')
const mongoose =require('mongoose')
const HealingTouch=model.healingTouch;
// const index=fs.readFileSync('index.js' ,'utf-8');
// const data=JSON.parse(fs.readFileSync('dataone.json'));
// const HealingTouchs=data.HealingTouchs;

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` 


  exports.createHealingTouch = async (req, res) => {
    try {
      // Check if the HealingTouch with the same name already exists
      const existingHealingTouch = await HealingTouch.findOne({ id: req.body});
  
      if (existingHealingTouch) {
        return res.status(409).json({ error: 'HealingTouch with the same name already exists' });
      }
  
      const healingTouch = new HealingTouch(req.body);
      const savedHealingTouch = await healingTouch.save();
      res.status(201).json(savedHealingTouch);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to create HealingTouch' });
    }
  };

  exports.getAllHealingTouchs=async(req,res)=>{
    const healingTouchs= await HealingTouch.find();
    res.json(healingTouchs)
  }
  
  exports.getHealingTouch=async(req,res)=>{
    const id= req.params.id;
    const healingTouch= await HealingTouch.findById(id);
  res.json(healingTouch);
  }
  exports.replaceHealingTouch=async(req,res)=>{
    const id= req.params.id;
    const doc= await HealingTouch.findOneAndReplace({_id:id},req.body,{new:true});
    res.status(201).json(doc);
  }
  exports.updateHealingTouch=async(req,res)=>{
    const id=req.params.id;
try{
  const doc =await HealingTouch.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
}
catch(err){
  console.log(err)
  res.status(400).json(err)
}}

    exports.deleteHealingTouch=async(req,res)=>{
    const id=req.params.id;
    try{
      const doc =await HealingTouch.findOneAndDelete({_id:id},{new:true})
      res.status(201).json(doc);
    }
    catch(err){
      console.log(err)
      res.status(400).json(err)
    }
   }
  