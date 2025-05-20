const allotment= require('../models/allotment');

exports.getAllotments = async (req, res) => {
    try {
        const allotments = await allotment.find();
        res.status(200).json({
            status: 'success',
            data: {
                allotments,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}
exports.getAllotmentById = async (req, res) => {
    try {
        const allotmentId = req.params.id;
        const allotmentData = await allotment.findById(allotmentId);
        if (!allotmentData) {
            return res.status(404).json({
                status: 'fail',
                message: 'Allotment not found',
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                allotment: allotmentData,
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
exports.createAllotment = async (req, res) => {
    try {
        const newAllotment = await allotment.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                allotment: newAllotment,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}
exports.updateAllotment = async (req, res) => {
    try {
        const allotmentId = req.params.id;
        const updatedAllotment = await allotment.findByIdAndUpdate(allotmentId, req.body, { new: true });
        if (!updatedAllotment) {
            return res.status(404).json({
                status: 'fail',
                message: 'Allotment not found',
            });
        }   
        res.status(200).json({
            status: 'success',
            data: {
                allotment: updatedAllotment,
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
exports.deleteAllotment = async (req, res) => {
    try {
        const allotmentId = req.params.id;
        const deletedAllotment = await allotment.findByIdAndDelete(allotmentId);
        if (!deletedAllotment) {
            return res.status(404).json({
                status: 'fail',
                message: 'Allotment not found',
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
// Compare this snippet from models/allotment.js: