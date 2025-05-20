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
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
const allotment = mongoose.model('allotment', allotmentSchema);
module.exports = allotment;