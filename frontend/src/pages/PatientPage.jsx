import React, { useState, useEffect } from 'react';
import apiService from '../services/apiServices';
import CrudComponent from '../components/common/CrudComponent';

const PatientPage = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  const fields = [
    { key: 'name', label: 'Name', required: true },
    { key: 'age', label: 'Age', type: 'number', required: true },
    { key: 'phone', label: 'Phone', required: true },
    { key: 'email', label: 'Email', type: 'email', required: true },
    { key: 'address', label: 'Address', required: true }
  ];

  // ✅ Load patients from backend
  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      try {
        const data = await apiService.patients.getAll();
        setPatients(data);
      } catch (error) {
        console.error('Failed to fetch patients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const handleAdd = async (data) => {
    try {
      const newPatient = await apiService.patients.create(data);
      setPatients(prev => [...prev, newPatient]);
    } catch (error) {
      console.error('Failed to add patient:', error);
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      const updatedPatient = await apiService.patients.update(id, data);
      setPatients(prev =>
        prev.map(patient =>
          patient._id === id || patient.id === id ? updatedPatient : patient
        )
      );
    } catch (error) {
      console.error('Failed to update patient:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiService.patients.delete(id);
      setPatients(prev =>
        prev.filter(patient => patient._id !== id && patient.id !== id)
      );
    } catch (error) {
      console.error('Failed to delete patient:', error);
    }
  };

  return (
    <CrudComponent
      title="Patients"
      fields={fields}
      data={patients}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      loading={loading}
    />
  );
};

export default PatientPage;
