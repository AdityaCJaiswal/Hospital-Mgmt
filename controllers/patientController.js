const patient = require('../models/patient');

exports.getAllPatients = async (req, res) => {
    try {
        const patients = await patient.find();
        res.status(200).json({
            status: 'success',
            data: {
                patients,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}
exports.getPatientById = async (req, res) => {
    try {
        const patientId = req.params.id;
        const patientData = await patient
            .findById(patientId)
            .populate('doctorId', 'name email phoneNumber address dateOfBirth specialization experience availability uniqueId patientsAlloted');
        if (!patientData) {
            return res.status(404).json({
                status: 'fail',
                message: 'Patient not found',
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                patient: patientData,
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
exports.createPatient = async (req, res) => {
    try {
        const newPatient = await patient.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                patient: newPatient,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}
exports.updatePatient = async (req, res) => {
    try {
        const patientId = req.params.id;
        const updatedPatient = await patient
            .findByIdAndUpdate(patientId, req.body
                , { new: true, runValidators: true })
            .populate('doctorId', 'name email phoneNumber address dateOfBirth specialization experience availability uniqueId patientsAlloted');
        if (!updatedPatient) {
            return res.status(404).json({
                status: 'fail',
                message: 'Patient not found',
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                patient: updatedPatient,
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
exports.deletePatient = async (req, res) => {
    try {
        const patientId = req.params.id;
        const deletedPatient = await patient.findByIdAndDelete(patientId);
        if (!deletedPatient) {
            return res.status(404).json({
                status: 'fail',
                message: 'Patient not found',
            });
        }
        res.status(204).json({
            status: 'success',
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}