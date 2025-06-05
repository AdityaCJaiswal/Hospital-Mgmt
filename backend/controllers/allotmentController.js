const Allotment = require('../models/allotment');
const Doctor = require('../models/doctor');
const Patient = require('../models/patient');
const Receptionist = require('../models/receptionist');

exports.getAllotments = async (req, res) => {
    try {
        const allotments = await Allotment.find();
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
        const allotmentData = await Allotment.findById(allotmentId);
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


exports.updateAllotment = async (req, res) => {
    try {
        const allotmentId = req.params.id;
        const updatedAllotment = await Allotment.findByIdAndUpdate(allotmentId, req.body, { new: true });
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
        const deletedAllotment = await Allotment.findByIdAndDelete(allotmentId);
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

// HELPER FUNCTION to get available doctor
const getAvailableDoctor = async () => {
  return await Doctor.findOne({ availability: true }).sort('patientsAlloted');
};

exports.createAllotmentByPatient = async (req, res) => {
  try {
    const { patientName } = req.body;

    const doctorData = await getAvailableDoctor();
    if (!doctorData) return res.status(404).json({ status: 'fail', message: 'No doctor available' });

    const patientData = await Patient.findOne({ name: patientName });
    if (!patientData) return res.status(404).json({ status: 'fail', message: 'Patient not found' });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tokenCount = await Allotment.countDocuments({
      doctor: doctorData._id,
      timestamp: { $gte: today }
    });

    const newAllotment = await Allotment.create({
      patient: patientData._id,
      doctor: doctorData._id,
      tokenNumber: tokenCount + 1
    });

    doctorData.patientsAlloted += 1;
    await doctorData.save();

    res.status(201).json({
      status: 'success',
      data: {
        token: newAllotment.tokenNumber,
        doctor: doctorData.name,
        patient: patientData.name,
      },
    });

  } catch (error) {
    res.status(500).json({ status: 'fail', message: error.message });
  }
};

exports.createAllotmentByReceptionist = async (req, res) => {
  try {
    const { patientName, receptionistName, doctorName } = req.body;

    const patientData = await Patient.findOne({ name: patientName });
    const receptionistData = await Receptionist.findOne({ name: receptionistName });

    if (!patientData || !receptionistData) {
      return res.status(404).json({ status: 'fail', message: 'Patient or Receptionist not found' });
    }

    let doctorData = doctorName
      ? await Doctor.findOne({ name: doctorName })
      : await getAvailableDoctor();

    if (!doctorData) return res.status(404).json({ status: 'fail', message: 'No doctor available' });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tokenCount = await Allotment.countDocuments({
      doctor: doctorData._id,
      timestamp: { $gte: today }
    });

    const newAllotment = await Allotment.create({
      patient: patientData._id,
      doctor: doctorData._id,
      allotedby: receptionistData._id,
      tokenNumber: tokenCount + 1
    });

    doctorData.patientsAlloted += 1;
    await doctorData.save();

    res.status(201).json({
      status: 'success',
      data: {
        token: newAllotment.tokenNumber,
        doctor: doctorData.name,
        patient: patientData.name,
        allotedBy: receptionistData.name
      },
    });

  } catch (error) {
    res.status(500).json({ status: 'fail', message: error.message });
  }
};
