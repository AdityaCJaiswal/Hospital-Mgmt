import React, { useState, useEffect } from 'react';
import apiService from '../services/apiServices';
import CrudComponent from '../components/common/CrudComponent';

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fields = [
    { key: 'patient', label: 'Patient Name', required: true },
    { key: 'doctor', label: 'Doctor', required: true },
    { key: 'date', label: 'Date', type: 'date', required: true },
    { key: 'time', label: 'Time', type: 'time', required: true },
    { key: 'status', label: 'Status', required: true }
  ];

  // Fetch appointments on mount
  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const data = await apiService.getAppointments();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Add new appointment
  const handleAdd = async (data) => {
    setLoading(true);
    try {
      const newAppointment = await apiService.createAppointment(data);
      setAppointments((prev) => [...prev, newAppointment]);
    } catch (error) {
      console.error('Error adding appointment:', error);
    } finally {
      setLoading(false);
    }
  };

  // Update appointment by id
  const handleUpdate = async (id, data) => {
    setLoading(true);
    try {
      const updatedAppointment = await apiService.updateAppointment(id, data);
      setAppointments((prev) =>
        prev.map((app) => (app.id === id ? updatedAppointment : app))
      );
    } catch (error) {
      console.error('Error updating appointment:', error);
    } finally {
      setLoading(false);
    }
  };

  // Delete appointment by id
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await apiService.deleteAppointment(id);
      setAppointments((prev) => prev.filter((app) => app.id !== id));
    } catch (error) {
      console.error('Error deleting appointment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CrudComponent
      title="Appointments"
      fields={fields}
      data={appointments}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      loading={loading}
    />
  );
};

export default AppointmentPage;
