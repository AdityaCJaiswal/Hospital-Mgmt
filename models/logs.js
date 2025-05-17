const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema({
  patient: {
    type: String,
    required: true,
  },
    patientId: {
        type: String,
        required: true,
    },
    doctor: {
        type: String,
        required: true,
    },
    allotedby: {
        type: String,
        required: true,
    },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  allotmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'allotment',
    required: true,
  },
});