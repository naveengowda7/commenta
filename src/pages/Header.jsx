import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isDashboard = location.pathname.includes('/dashboard');

  return (
    <header className="app-header">
      <div className="header-content">
        {/* Left side - Brand and Navigation */}
        <div className="header-left">
          <Link to="/" className="brand">
            MyApp
          </Link>
          {isDashboard && (
            <nav className="header-nav">
              <span className="nav-link active">Dashboard Home</span>
            </nav>
          )}
        </div>

        {/* Right side - Auth Links */}
        <div className="header-right">
          {!isDashboard && (
            <Link 
              to="/analyzer" 
              className={`analyze-link ${location.pathname === '/analyzer' ? 'active' : ''}`}
            >
              Analyze Video
            </Link>
          )}
          <Link to="/account" className="auth-link">
            My Account
          </Link>
          <button className="auth-link logout">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;