const model = require('../Models/appointment');
const Appointment = model.appointment;

const handleResponse = (res, data, errorMessage) => {
  try {
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ error: errorMessage });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: errorMessage });
  }
};

exports.createAppointment = async (req, res) => {
  try {
    const newAppointment = await Appointment.create(req.body);
    res.json({ success: true, message: 'Appointment created successfully' });
  } catch (error) {
    handleResponse(res, null, 'Failed to create appointment');
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    handleResponse(res, null, 'Failed to fetch appointments');
  }
};

exports.getAppointment = async (req, res) => {
  const id = req.params.id;
  try {
    const appointment = await Appointment.findById(id);
    handleResponse(res, appointment, 'Appointment not found');
  } catch (err) {
    handleResponse(res, null, 'Failed to fetch appointment');
  }
};

exports.replaceAppointment = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Appointment.findOneAndReplace({ _id: id }, req.body, { new: true });
    handleResponse(res, doc, 'Appointment not found');
  } catch (err) {
    handleResponse(res, null, 'Failed to replace appointment');
  }
};

exports.updateAppointment = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Appointment.findOneAndUpdate({ _id: id }, req.body, { new: true });
    handleResponse(res, doc, 'Appointment not found');
  } catch (err) {
    handleResponse(res, null, 'Failed to update appointment');
  }
};

exports.deleteAppointment = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Appointment.findOneAndDelete({ _id: id });
    if (doc) {
      res.status(204).send(); // No content in response for successful deletion
    } else {
      res.status(404).json({ error: 'Appointment not found' });
    }
  } catch (err) {
    handleResponse(res, null, 'Failed to delete appointment');
  }
};
