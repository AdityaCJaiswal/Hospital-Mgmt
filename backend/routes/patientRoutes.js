const express = require('express');
const router = express.Router();
const patient = require('../models/patient');
const patientController = require('../controllers/patientController');

// Route to get all allotments
router.get('/', patientController.getAllPatients);

// Route to get allotment by ID
router.get('/:id', patientController.getPatientById);
// Route to create a new allotment
router.post('/', patientController.createPatient);
// Route to update an allotment by ID
router.put('/:id', patientController.updatePatient);
// Route to delete an allotment by ID
router.delete('/:id', patientController.deletePatient);

module.exports = router;