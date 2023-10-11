const fs = require("fs");
const model= require('../Models/mapingEcommerce')
const mongoose =require('mongoose')
const MapingEcommerce=model.MapingEcommerce;
// const index=fs.readFileSync('index.js' ,'utf-8');
// const data=JSON.parse(fs.readFileSync('dataone.json'));
// const MapingEcommerces=data.MapingEcommerces;

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` 


  exports.createMapingEcommerce = async (req, res) => {
    try {
      // Check if the MapingEcommerce with the same name already exists
      const existingMapingEcommerce = await MapingEcommerce.findOne({ id: req.body});
  
      if (existingMapingEcommerce) {
        return res.status(409).json({ error: 'MapingEcommerce with the same name already exists' });
      }
  
      const mapingEcommerce = new MapingEcommerce(req.body);
      const savedMapingEcommerce = await mapingEcommerce.save();
      res.status(201).json(savedMapingEcommerce);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to create MapingEcommerce' });
    }
  };

  exports.getAllMapingEcommerces=async(req,res)=>{
    const mapingEcommerces= await MapingEcommerce.find();
    res.json(mapingEcommerces)
  }
  
  exports.getMapingEcommerce=async(req,res)=>{
    const id= req.params.id;
    const mapingEcommerce= await MapingEcommerce.findById(id);
  res.json(mapingEcommerce);
  }
  exports.replaceMapingEcommerce=async(req,res)=>{
    const id= req.params.id;
    const doc= await MapingEcommerce.findOneAndReplace({_id:id},req.body,{new:true});
    res.status(201).json(doc);
  }
  exports.updateMapingEcommerce=async(req,res)=>{
    const id=req.params.id;
try{
  const doc =await MapingEcommerce.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
}
catch(err){
  console.log(err)
  res.status(400).json(err)
}}

    exports.deleteMapingEcommerce=async(req,res)=>{
    const id=req.params.id;
    try{
      const doc =await MapingEcommerce.findOneAndDelete({_id:id},{new:true})
      res.status(201).json(doc);
    }
    catch(err){
      console.log(err)
      res.status(400).json(err)
    }
   }
  