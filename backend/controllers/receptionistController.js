const receptionist= require('../models/receptionist');

exports.getAllReceptionists = async (req, res) => {
    try {
        const receptionists = await receptionist.find();
        res.status(200).json({
            status: 'success',
            data: {
                receptionists,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}
exports.getReceptionistById = async (req, res) => {
    try {
        const receptionistId = req.params.id;
        const receptionistData = await receptionist.findById(receptionistId);
        if (!receptionistData) {
            return res.status(404).json({
                status: 'fail',
                message: 'Receptionist not found',
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                receptionist: receptionistData,
            },
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}
exports.createReceptionist = async (req, res) => {
    try {
        const newReceptionist = await receptionist.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                receptionist: newReceptionist,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}
exports.updateReceptionist = async (req, res) => {
    try {
        const receptionistId = req.params.id;
        const updatedReceptionist = await receptionist.findByIdAndUpdate(receptionistId, req.body, { new: true });
        if (!updatedReceptionist) {
            return res.status(404).json({
                status: 'fail',
                message: 'Receptionist not found',
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                receptionist: updatedReceptionist,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}
exports.deleteReceptionist = async (req, res) => {
    try {
        const receptionistId = req.params.id;
        const deletedReceptionist = await receptionist.findByIdAndDelete(receptionistId);
        if (!deletedReceptionist) {
            return res.status(404).json({
                status: 'fail',
                message: 'Receptionist not found',
            });
        }
        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}
