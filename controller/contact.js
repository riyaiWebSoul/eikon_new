const model = require('../Models/contact');
const Contact = model.contact;

exports.createContact = async (req, res) => {
  try {
    const existingContact = await Contact.findOne({ id: req.body });

    if (existingContact) {
      return res.status(409).json({ error: 'Contact with the same name already exists' });
    }

    const savedContact = await Contact.create(req.body);
    res.status(201).json(savedContact);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create Contact' });
  }
};

exports.getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

exports.getContact = async (req, res) => {
  const id = req.params.id;
  const contact = await Contact.findById(id);
  res.json(contact);
};

exports.replaceContact = async (req, res) => {
  const id = req.params.id;
  const doc = await Contact.findOneAndReplace({ _id: id }, req.body, { new: true });
  res.status(201).json(doc);
};

exports.updateContact = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Contact.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

exports.deleteContact = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Contact.findOneAndDelete({ _id: id }, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};
