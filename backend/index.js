const express= require('express');
const mongoose= require('mongoose');
const app= express();
const port= 3000;
const allotmentRouter= require('./routes/allotmentRoutes');
const doctorRouter= require('./routes/doctorRoutes');
const patientRouter= require('./routes/patientRoutes');
const receptionistRouter= require('./routes/receptionistRoutes');
const connectDB= require('./db');
const {connect }=require('mongoose');

app.use(express.json());
connectDB();
//app.use('/middleware/logger',logger);

app.use('/allotment', allotmentRouter);
app.use('/doctor', doctorRouter);
app.use('/patient', patientRouter);
app.use('/receptionist', receptionistRouter);
app.get('/', (req, res) => {
    res.send('Welcome to Hospital Management System!');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

