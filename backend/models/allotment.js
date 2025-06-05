const mongoose = require('mongoose');

const allotmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'patient',
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'doctor',
  },
  allotedby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'receptionist',
  },
  tokenNumber: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
const Allotment = mongoose.model('Allotment', allotmentSchema);
module.exports = Allotment;