const express = require('express');
const router = express.Router();
const allotmentController = require('../controllers/allotmentController');
const { allotDoctor } = require('../controllers/allotmentController');

// Route to get all allotments
router.get('/', allotmentController.getAllotments);
// Route to get allotment by ID
router.get('/:id', allotmentController.getAllotmentById);
// Route to create a new allotment
router.post('/', allotmentController.createAllotment);
// Route to update an allotment by ID
router.put('/:id', allotmentController.updateAllotment);
// Route to delete an allotment by ID
router.delete('/:id', allotmentController.deleteAllotment);

module.exports = router;