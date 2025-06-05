const express = require('express');
const router = express.Router();
const doctor=  require('../models/doctor');


const doctorController = require('../controllers/doctorController');
const { allotDoctor } = require('../controllers/allotmentController');  

// Route to get all doctors
    router.get('/', doctorController.getAllDoctors);
    // Route to get doctor by ID
    router.get('/:id', doctorController.getDoctorById);
    // Route to create a new doctor
    router.post('/', doctorController.createDoctor);
    // Route to update a doctor by ID
    router.put('/:id', doctorController.updateDoctor);
    // Route to delete a doctor by ID
    router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;