const fs = require("fs");
const model = require('../Models/enquiry');
const mongoose = require('mongoose');
const Enquiry = model.enquiry;

exports.createEnquiry =  async (req, res) => {
  try {
    
    const enquiryData = req.body;
    const newEnquiry = new Enquiry(enquiryData);
    await newEnquiry.save();
    res.json({ success: true, message: 'Enquiry created successfully' });
  } catch (error) {
    console.error('Error creating enquiry:', error);
    res.status(500).json({ success: false, error: 'Failed to create enquiry' });
  }
};


exports.getAllEnquirys = async (req, res) => {
  try {
    const enquirys = await Enquiry.find();
    res.json(enquirys);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch enquirys' });
  }
};

exports.getEnquiry = async (req, res) => {
  const id = req.params.id;
  try {
    const enquiry = await Enquiry.findById(id);
    if (!enquiry) {
      return res.status(404).json({ error: 'Enquiry not found' });
    }
    res.json(enquiry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch enquiry' });
  }
};

exports.replaceEnquiry = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Enquiry.findOneAndReplace({ _id: id }, req.body, { new: true });
    if (!doc) {
      return res.status(404).json({ error: 'Enquiry not found' });
    }
    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to replace enquiry' });
  }
};

exports.updateEnquiry = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Enquiry.findOneAndUpdate({ _id: id }, req.body, { new: true });
    if (!doc) {
      return res.status(404).json({ error: 'Enquiry not found' });
    }
    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update enquiry' });
  }
};

exports.deleteEnquiry = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Enquiry.findOneAndDelete({ _id: id });
    if (!doc) {
      return res.status(404).json({ error: 'Enquiry not found' });
    }
    res.status(204).send(); // No content in response for successful deletion
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete enquiry' });
  }
};
