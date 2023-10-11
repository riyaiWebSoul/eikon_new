const fs = require("fs");
const model= require('../Models/medical')
const mongoose =require('mongoose')
const Medical=model.Medical;
// const index=fs.readFileSync('index.js' ,'utf-8');
// const data=JSON.parse(fs.readFileSync('dataone.json'));
// const Medicals=data.Medicals;

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` 


  exports.createMedical = async (req, res) => {
    try {
      // Check if the Medical with the same name already exists
      const existingMedical = await Medical.findOne({ id: req.body});
  
      if (existingMedical) {
        return res.status(409).json({ error: 'Medical with the same name already exists' });
      }
  
      const medical = new Medical(req.body);
      const savedMedical = await medical.save();
      res.status(201).json(savedMedical);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to create Medical' });
    }
  };

  exports.getAllMedicals=async(req,res)=>{
    const medicals= await Medical.find();
    res.json(medicals)
  }
  
  exports.getMedical=async(req,res)=>{
    const id= req.params.id;
    const medical= await Medical.findById(id);
  res.json(medical);
  }
  exports.replaceMedical=async(req,res)=>{
    const id= req.params.id;
    const doc= await Medical.findOneAndReplace({_id:id},req.body,{new:true});
    res.status(201).json(doc);
  }
  exports.updateMedical=async(req,res)=>{
    const id=req.params.id;
try{
  const doc =await Medical.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
}
catch(err){
  console.log(err)
  res.status(400).json(err)
}}

    exports.deleteMedical=async(req,res)=>{
    const id=req.params.id;
    try{
      const doc =await Medical.findOneAndDelete({_id:id},{new:true})
      res.status(201).json(doc);
    }
    catch(err){
      console.log(err)
      res.status(400).json(err)
    }
   }
  