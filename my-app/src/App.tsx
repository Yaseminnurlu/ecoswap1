import React from "react";
import {Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import HomePage from './pages/Home.tsx'; // Import Home Component
import Login from './pages/Login'; // Import Login Component
import Register from './pages/Register'; // Import Register Component
import NewAdPage from './pages/NewAdPage'; // Import your new page


function MainContent() {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check if user is logged in

  return (
    <div>
      {/* Conditionally render the navigation bar only when the user is authenticated */}
      {isAuthenticated && (
        <div style={{ display: 'flex', gap: '10px', padding: '10px', background: '#f5f5f5' }}>
          <button
            onClick={() => (window.location.href = '/home')}
            style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white' }}
          >
            Home
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('authToken'); // Clear authentication token
              window.location.href = '/login'; // Redirect to login page
            }}
            style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#dc3545', color: 'white' }}
          >
            Logout
          </button>
        </div>
      )}

      {/* Define the routes for the application */}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-post" element={<NewAdPage />} /> {/* New route */}
        <Route path="*" element={<Register />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

export default App;

