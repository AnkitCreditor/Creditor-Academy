import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('session_token');
    if (!token) {
      navigate('/'); // Redirect if not authenticated
    } else {
      setIsAuth(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('session_token');
    navigate('/');
  };

  if (isAuth === null) {
    // Optionally show a loading spinner here
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fbfc]">
      <div className="bg-white px-8 py-12 rounded-2xl shadow-lg">
        <h1 className="text-4xl text-[#0D88C2] text-center font-bold mb-2">Welcome to the Creditor Academy</h1>
        <p className="text-lg text-gray-800 text-center mb-6">
          We’re glad to have you on board!<br/>
        </p>
        <button
          onClick={handleLogout}
          className="mt-8 px-8 py-3 text-base bg-[#0D88C2] text-white rounded-lg cursor-pointer block mx-auto hover:bg-[#0b7ab0] transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
} 