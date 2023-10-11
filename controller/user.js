const fs = require("fs");
const model= require('../Models/user')
const mongoose =require('mongoose')
const User=model.user;

  exports.createUser = async (req, res) => {
    try {
      const existingUser = await User.findOne({ id: req.body});
  
      if (existingUser) {
        return res.status(409).json({ error: 'user with the same name already exists' });
      }
  
      const user = new user(req.body);
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to create user' });
    }
  };

  exports.getAllUsers=async(req,res)=>{
    const users= await User.find();
    res.json(users)
  }
  
  exports.getuser=async(req,res)=>{
    const id= req.params.id;
    const user= await User.findById(id);
  res.json(user);
  }
  exports.replaceuser=async(req,res)=>{
    const id= req.params.id;
    const doc= await User.findOneAndReplace({_id:id},req.body,{new:true});
    res.status(201).json(doc);
  }
  exports.updateuser=async(req,res)=>{
    const id=req.params.id;
try{
  const doc =await User.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
}
catch(err){
  console.log(err)
  res.status(400).json(err)
}}

    exports.deleteuser=async(req,res)=>{
    const id=req.params.id;
    try{
      const doc =await User.findOneAndDelete({_id:id},{new:true})
      res.status(201).json(doc);
    }
    catch(err){
      console.log(err)
      res.status(400).json(err)
    }
   }
  