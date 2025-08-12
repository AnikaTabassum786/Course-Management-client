


import React from 'react';
import img from '../../assets/error.jpg';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <img
        src={img}
        alt="Page not found"
        className="w-1/3 max-w-xs mb-8 rounded-md shadow-lg animate-fadeIn"
      />
      <p className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
        Oops! Page Not Found
      </p>
      <button
        onClick={handleChange}
        className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-lg transition-transform transform hover:scale-95 focus:outline-none"
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default ErrorPage;
