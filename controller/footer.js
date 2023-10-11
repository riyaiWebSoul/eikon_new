const fs = require("fs");
const model= require('../Models/footer')
const mongoose =require('mongoose')
const Footer=model.footer;

  exports.createFooter = async (req, res) => {
    try {
      const existingFooter = await Footer.findOne({ id: req.body});
  
      if (existingFooter) {
        return res.status(409).json({ error: 'footer with the same name already exists' });
      }
  
      const footer = new Footer(req.body);
      const savedFooter = await footer.save();
      res.status(201).json(savedFooter);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to create footer' });
    }
  };

  exports.getAllFooters=async(req,res)=>{
    const footers= await Footer.find();
    res.json(footers)
  }
  
  exports.getfooter=async(req,res)=>{
    const id= req.params.id;
    const footer= await Footer.findById(id);
  res.json(footer);
  }
  exports.replacefooter=async(req,res)=>{
    const id= req.params.id;
    const doc= await Footer.findOneAndReplace({_id:id},req.body,{new:true});
    res.status(201).json(doc);
  }
  exports.updatefooter=async(req,res)=>{
    const id=req.params.id;
try{
  const doc =await Footer.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
}
catch(err){
  console.log(err)
  res.status(400).json(err)
}}

    exports.deletefooter=async(req,res)=>{
    const id=req.params.id;
    try{
      const doc =await Footer.findOneAndDelete({_id:id},{new:true})
      res.status(201).json(doc);
    }
    catch(err){
      console.log(err)
      res.status(400).json(err)
    }
   }
  