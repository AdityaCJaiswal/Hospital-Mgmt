// src/pages/HomePage.jsx or src/components/pages/HomePage.jsx
import React from 'react';
import { useRouter } from 'next/router';
import { Users, UserCheck, Calendar, Stethoscope } from 'lucide-react';

const HomePage = () => {
  const router = useRouter();

  const menuItems = [
    {
      id: 'doctor',
      title: 'Doctor Management',
      description: 'Manage doctor profiles, specializations, and schedules',
      icon: Stethoscope,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      id: 'patient',
      title: 'Patient Management',
      description: 'Handle patient records, medical history, and information',
      icon: Users,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      id: 'receptionist',
      title: 'Staff Management',
      description: 'Manage receptionist and administrative staff',
      icon: UserCheck,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700'
    },
    {
      id: 'appointment',
      title: 'Book Appointment',
      description: 'Schedule and manage patient appointments',
      icon: Calendar,
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">MedCare</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive hospital management system for efficient healthcare administration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => router.push(`/${item.id}`)}
              className={`bg-gradient-to-r ${item.color} ${item.hoverColor} p-8 rounded-2xl shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-white text-opacity-90 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
