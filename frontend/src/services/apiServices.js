// services/apiService.js

const API_BASE_URL = 'http://localhost:3001/api'; // Adjust this if needed

const apiService = {
  // Doctor APIs
  doctors: {
    getAll: () => fetch(`${API_BASE_URL}/doctors`).then(res => res.json()),
    getById: (id) => fetch(`${API_BASE_URL}/doctors/${id}`).then(res => res.json()),
    create: (data) =>
      fetch(`${API_BASE_URL}/doctors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(res => res.json()),
    update: (id, data) =>
      fetch(`${API_BASE_URL}/doctors/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(res => res.json()),
    delete: (id) => fetch(`${API_BASE_URL}/doctors/${id}`, { method: 'DELETE' }),
  },

  // Receptionist APIs
  receptionists: {
    getAll: () => fetch(`${API_BASE_URL}/receptionists`).then(res => res.json()),
    getById: (id) => fetch(`${API_BASE_URL}/receptionists/${id}`).then(res => res.json()),
    create: (data) =>
      fetch(`${API_BASE_URL}/receptionists`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(res => res.json()),
    update: (id, data) =>
      fetch(`${API_BASE_URL}/receptionists/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(res => res.json()),
    delete: (id) => fetch(`${API_BASE_URL}/receptionists/${id}`, { method: 'DELETE' }),
  },

  // Allotment APIs
  allotments: {
    getAll: () => fetch(`${API_BASE_URL}/allotments`).then(res => res.json()),
    getById: (id) => fetch(`${API_BASE_URL}/allotments/${id}`).then(res => res.json()),
    createByReceptionist: (data) =>
      fetch(`${API_BASE_URL}/allotments/receptionist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(res => res.json()),
    createByPatient: (data) =>
      fetch(`${API_BASE_URL}/allotments/patient`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(res => res.json()),
    update: (id, data) =>
      fetch(`${API_BASE_URL}/allotments/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(res => res.json()),
    delete: (id) => fetch(`${API_BASE_URL}/allotments/${id}`, { method: 'DELETE' }),
  },

  // Patient APIs
  patients: {
    getAll: () => fetch(`${API_BASE_URL}/patients`).then(res => res.json()),
    getById: (id) => fetch(`${API_BASE_URL}/patients/${id}`).then(res => res.json()),
    create: (data) =>
      fetch(`${API_BASE_URL}/patients`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(res => res.json()),
    update: (id, data) =>
      fetch(`${API_BASE_URL}/patients/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(res => res.json()),
    delete: (id) => fetch(`${API_BASE_URL}/patients/${id}`, { method: 'DELETE' }),
  },
};

export default apiService;
