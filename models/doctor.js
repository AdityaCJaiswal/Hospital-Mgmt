const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
    specialization: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    availability: {
        type: String,
        required: true,
    },
    uniqueId: {
        type: String,
        required: true,
    },
    patientsAlloted: {
        type: Number,
        default: 0,
    },
});
const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;