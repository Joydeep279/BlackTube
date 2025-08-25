import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! Page not found</p>
      <p className="text-lg mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
