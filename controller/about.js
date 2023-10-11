const model = require('../Models/about');
const About = model.about;

exports.createAbout = async (req, res) => {
  try {
    const existingAbout = await About.findOne({ id: req.body });

    if (existingAbout) {
      return res.status(409).json({ error: 'About with the same name already exists' });
    }

    const savedAbout = await About.create(req.body);
    res.status(201).json(savedAbout);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create About' });
  }
};

exports.getAllAbouts = async (req, res) => {
  const abouts = await About.find();
  res.json(abouts);
};

exports.getAbout = async (req, res) => {
  const id = req.params.id;
  const about = await About.findById(id);
  res.json(about);
};

exports.replaceAbout = async (req, res) => {
  const id = req.params.id;
  const doc = await About.findOneAndReplace({ _id: id }, req.body, { new: true });
  res.status(201).json(doc);
};

exports.updateAbout = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await About.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAbout = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await About.findOneAndDelete({ _id: id }, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};
