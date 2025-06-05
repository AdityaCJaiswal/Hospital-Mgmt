const doctor = require('../models/doctor');

exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await doctor.find();
        res.status(200).json({
            status: 'success',
            data: {
                doctors,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
};

exports.getDoctorById = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const doctorData = await doctor.findById(doctorId);
        if (!doctorData) {
            return res.status(404).json({
                status: 'fail',
                message: 'Doctor not found',
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                doctor: doctorData,
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
exports.createDoctor = async (req, res) => {
    try {
        const newDoctor = await doctor.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                doctor: newDoctor,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}
exports.updateDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const updatedDoctor = await doctor.findByIdAndUpdate(doctorId, req.body, { new: true });
        if (!updatedDoctor) {
            return res.status(404).json({
                status: 'fail',
                message: 'Doctor not found',
            });
        }   
        res.status(200).json({
            status: 'success',
            data: {
                doctor: updatedDoctor,
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
exports.deleteDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const deletedDoctor = await doctor.findByIdAndDelete(doctorId);
        if (!deletedDoctor) {
            return res.status(404).json({
                status: 'fail',
                message: 'Doctor not found',
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
