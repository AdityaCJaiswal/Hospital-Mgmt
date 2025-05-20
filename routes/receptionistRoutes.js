const express = require('express');
const router = express.Router();
const receptionistController = require('../controllers/receptionistController');

// Route to get all receptionists
router.get('/', receptionistController.getAllReceptionists);
// Route to get receptionist by ID
router.get('/:id', receptionistController.getReceptionistById);
// Route to create a new receptionist
router.post('/', receptionistController.createReceptionist);
// Route to update a receptionist by ID
router.put('/:id', receptionistController.updateReceptionist);
// Route to delete a receptionist by ID
router.delete('/:id', receptionistController.deleteReceptionist);


module.exports = router;