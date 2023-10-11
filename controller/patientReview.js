const model = require('../Models/patientReview');
const PatientReview = model.patientReview;

exports.createPatientReview = async (req, res) => {
  try {
    const existingPatientReview = await PatientReview.findOne({ id: req.body });

    if (existingPatientReview) {
      return res.status(409).json({ error: 'PatientReview with the same name already exists' });
    }

    const savedPatientReview = await PatientReview.create(req.body);
    res.status(201).json(savedPatientReview);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create PatientReview' });
  }
};

exports.getAllPatientReviews = async (req, res) => {
  const patientReviews = await PatientReview.find();
  res.json(patientReviews);
};

exports.getPatientReview = async (req, res) => {
  const id = req.params.id;
  const patientReview = await PatientReview.findById(id);
  res.json(patientReview);
};

exports.replacePatientReview = async (req, res) => {
  const id = req.params.id;
  const doc = await PatientReview.findOneAndReplace({ _id: id }, req.body, { new: true });
  res.status(201).json(doc);
};

exports.updatePatientReview = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await PatientReview.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

exports.deletePatientReview = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await PatientReview.findOneAndDelete({ _id: id }, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};
