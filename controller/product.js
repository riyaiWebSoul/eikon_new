const fs = require("fs");
const model= require('../Models/product')
const mongoose =require('mongoose')
const Product=model.Product;
// const index=fs.readFileSync('index.js' ,'utf-8');
// const data=JSON.parse(fs.readFileSync('dataone.json'));
// const products=data.products;

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` 


  exports.createProduct = async (req, res) => {
    try {
      // Check if the product with the same name already exists
      const existingProduct = await Product.findOne({ id: req.body});
  
      if (existingProduct) {
        return res.status(409).json({ error: 'Product with the same name already exists' });
      }
  
      const product = new Product(req.body);
      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to create product' });
    }
  };

  exports.getAllProducts=async(req,res)=>{
    const products= await Product.find();
    res.json(products)
  }
  
  exports.getProduct=async(req,res)=>{
    const id= req.params.id;
    const product= await Product.findById(id);
  res.json(product);
  }
  exports.replaceProduct=async(req,res)=>{
    const id= req.params.id;
    const doc= await Product.findOneAndReplace({_id:id},req.body,{new:true});
    res.status(201).json(doc);
  }
  exports.updateProduct=async(req,res)=>{
    const id=req.params.id;
try{
  const doc =await Product.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
}
catch(err){
  console.log(err)
  res.status(400).json(err)
}}

    exports.deleteProduct=async(req,res)=>{
    const id=req.params.id;
    try{
      const doc =await Product.findOneAndDelete({_id:id},{new:true})
      res.status(201).json(doc);
    }
    catch(err){
      console.log(err)
      res.status(400).json(err)
    }
   }
  