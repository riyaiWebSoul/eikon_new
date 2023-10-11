const fs = require("fs");
const model= require('../Models/home')
const mongoose =require('mongoose')
const Home=model.home;

  exports.createHome = async (req, res) => {
    try {
      const existingHome = await Home.findOne({ id: req.body});
  
      if (existingHome) {
        return res.status(409).json({ error: 'Home with the same name already exists' });
      }
  
      const home = new Home(req.body);
      const savedHome = await home.save();
      res.status(201).json(savedHome);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to create Home' });
    }
  };

  exports.getAllHomes=async(req,res)=>{
    const homes= await Home.find();
    res.json(homes)
  }
  
  exports.getHome=async(req,res)=>{
    const id= req.params.id;
    const home= await Home.findById(id);
  res.json(home);
  }
  exports.replaceHome=async(req,res)=>{
    const id= req.params.id;
    const doc= await Home.findOneAndReplace({_id:id},req.body,{new:true});
    res.status(201).json(doc);
  }
  exports.updateHome=async(req,res)=>{
    const id=req.params.id;
try{
  const doc =await Home.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
}
catch(err){
  console.log(err)
  res.status(400).json(err)
}}

    exports.deleteHome=async(req,res)=>{
    const id=req.params.id;
    try{
      const doc =await Home.findOneAndDelete({_id:id},{new:true})
      res.status(201).json(doc);
    }
    catch(err){
      console.log(err)
      res.status(400).json(err)
    }
   }
  