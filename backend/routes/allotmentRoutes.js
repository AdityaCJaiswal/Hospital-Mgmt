const express = require('express');
const router = express.Router();
const allotmentController = require('../controllers/allotmentController');

// Get all allotments
router.get('/', allotmentController.getAllotments);

// Get allotment by ID
router.get('/:id', allotmentController.getAllotmentById);

// Receptionist creates allotment (optional specific doctor)
router.post('/receptionist', allotmentController.createAllotmentByReceptionist);

// Patient books appointment (random available doctor)
router.post('/patient', allotmentController.createAllotmentByPatient);

// Update allotment
router.put('/:id', allotmentController.updateAllotment);

// Delete allotment
router.delete('/:id', allotmentController.deleteAllotment);

module.exports = router;
