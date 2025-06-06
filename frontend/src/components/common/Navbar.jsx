// src/components/common/Navbar.jsx
import React from 'react';
import { useRouter } from 'next/router';
import { Stethoscope } from 'lucide-react';

const Navbar = () => {
  const router = useRouter();
  const currentPage = router.pathname.replace('/', '') || 'home';

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'doctor', label: 'Doctors', path: '/doctor' },
    { id: 'patient', label: 'Patients', path: '/patient' },
    { id: 'receptionist', label: 'Staff', path: '/receptionist' },
    { id: 'appointment', label: 'Appointments', path: '/appointment' },
  ];

  return (
    <nav className="bg-white shadow-lg border-b-4 border-blue-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">MedCare</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => router.push(item.path)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
