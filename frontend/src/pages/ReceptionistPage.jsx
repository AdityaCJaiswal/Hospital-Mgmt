import React, { useState, useEffect } from 'react';
import apiService from '../services/apiServices';
import CrudComponent from '../components/common/CrudComponent';

const ReceptionistPage = () => {
  const [receptionists, setReceptionists] = useState([]);
  const [loading, setLoading] = useState(false);

  const fields = [
    { key: 'name', label: 'Name', required: true },
    { key: 'phone', label: 'Phone', required: true },
    { key: 'email', label: 'Email', type: 'email', required: true },
    { key: 'shift', label: 'Shift', required: true }
  ];

  // Fetch receptionists from API
  useEffect(() => {
    const fetchReceptionists = async () => {
      setLoading(true);
      try {
        const data = await apiService.receptionists.getAll();
        const normalized = data.map(r => ({ ...r, id: r._id || r.id }));
        setReceptionists(normalized);
      } catch (error) {
        console.error('Error fetching receptionists:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReceptionists();
  }, []);

  // Create receptionist
  const handleAdd = async (data) => {
    try {
      const created = await apiService.receptionists.create(data);
      setReceptionists([...receptionists, { ...created, id: created._id || created.id }]);
    } catch (error) {
      console.error('Error adding receptionist:', error);
    }
  };

  // Update receptionist
  const handleUpdate = async (id, data) => {
    try {
      const updated = await apiService.receptionists.update(id, data);
      setReceptionists(receptionists.map(r => r.id === id ? { ...updated, id: updated._id || updated.id } : r));
    } catch (error) {
      console.error('Error updating receptionist:', error);
    }
  };

  // Delete receptionist
  const handleDelete = async (id) => {
    try {
      await apiService.receptionists.delete(id);
      setReceptionists(receptionists.filter(r => r.id !== id));
    } catch (error) {
      console.error('Error deleting receptionist:', error);
    }
  };

  return (
    <CrudComponent
      title="Staff"
      fields={fields}
      data={receptionists}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      loading={loading}
    />
  );
};

export default ReceptionistPage;
