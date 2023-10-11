const model = require('../Models/drList');
const DrList = model.drList;

exports.createDrList = async (req, res) => {
  try {
    const existingDrList = await DrList.findOne({ id: req.body });

    if (existingDrList) {
      return res.status(409).json({ error: 'DrList with the same name already exists' });
    }

    const savedDrList = await DrList.create(req.body);
    res.status(201).json(savedDrList);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create DrList' });
  }
};

exports.getAllDrLists = async (req, res) => {
  const drLists = await DrList.find();
  res.json(drLists);
};

exports.getDrList = async (req, res) => {
  const id = req.params.id;
  const drList = await DrList.findById(id);
  res.json(drList);
};

exports.replaceDrList = async (req, res) => {
  const id = req.params.id;
  const doc = await DrList.findOneAndReplace({ _id: id }, req.body, { new: true });
  res.status(201).json(doc);
};

exports.updateDrList = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await DrList.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

exports.deleteDrList = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await DrList.findOneAndDelete({ _id: id }, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};
