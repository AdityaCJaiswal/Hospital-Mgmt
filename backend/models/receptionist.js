const mongoose = require('mongoose');

const receptionistSchema = new mongoose.Schema({
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
});

const Receptionist = mongoose.model('Receptionist', receptionistSchema);
module.exports = Receptionist;