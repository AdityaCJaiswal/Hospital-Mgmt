import React, { useState, useEffect } from 'react';
import apiService from '../services/apiServices';
import CrudComponent from '../components/common/CrudComponent';

const DoctorPage = () => { 
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  const fields = [
    { key: 'name', label: 'Name', required: true },
    { key: 'specialization', label: 'Specialization', required: true },
    { key: 'phone', label: 'Phone', required: true },
    { key: 'email', label: 'Email', type: 'email', required: true }
  ];

  // ✅ Fetch all doctors on component mount
  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      try {
        const data = await apiService.doctors.getAll();
        setDoctors(data);
      } catch (error) {
        console.error('Failed to fetch doctors:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const handleAdd = async (data) => {
    try {
      const newDoctor = await apiService.doctors.create(data);
      setDoctors(prev => [...prev, newDoctor]);
    } catch (error) {
      console.error('Failed to add doctor:', error);
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      const updatedDoctor = await apiService.doctors.update(id, data);
      setDoctors(prev =>
        prev.map(doc => (doc._id === id || doc.id === id ? updatedDoctor : doc))
      );
    } catch (error) {
      console.error('Failed to update doctor:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiService.doctors.delete(id);
      setDoctors(prev => prev.filter(doc => doc._id !== id && doc.id !== id));
    } catch (error) {
      console.error('Failed to delete doctor:', error);
    }
  };

  return (
    <CrudComponent
      title="Doctors"
      fields={fields}
      data={doctors}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      loading={loading}
    />
  );
};

export default DoctorPage;
