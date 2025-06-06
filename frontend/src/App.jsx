import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import HomePage from './pages/HomePage';
import DoctorPage from './pages/DoctorPage';
import PatientPage from './pages/PatientPage';
import ReceptionistPage from './pages/ReceptionistPage';
import AppointmentPage from './pages/AppointmentPage';

const HospitalManagementSystem = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [loading, setLoading] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />
      <main className="container mx-auto px-4 py-8">
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'doctor' && <DoctorPage />}
        {currentPage === 'patient' && <PatientPage />}
        {currentPage === 'receptionist' && <ReceptionistPage />}
        {currentPage === 'appointment' && <AppointmentPage />}
      </main>
    </div>
  );
};

export default HospitalManagementSystem;
// ye galat lag raha muje 