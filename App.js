// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Services from './Services';
import Scheme from './Scheme';
import LoginPage from './LoginPage';

function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginPage = () => {
    setShowLoginPage(!showLoginPage);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginPage(false);
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Government Scheme Web App</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/scheme">Scheme</Link></li>
              <li className={`login-btn ${isLoggedIn ? 'logged-in' : ''}`}>
                {isLoggedIn ? (
                  <span>Welcome, User!</span>
                ) : (
                  <a href="#" onClick={toggleLoginPage}>Login</a>
                )}
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/scheme" element={<Scheme />} />
          </Routes>
        </main>

        {showLoginPage && <LoginPage onLogin={handleLogin} onClose={toggleLoginPage} />}
      </div>
    </Router>
  );
}

export default App;
