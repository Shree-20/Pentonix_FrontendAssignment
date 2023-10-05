import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">

      {isAuthenticated ? <Dashboard /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default App;
