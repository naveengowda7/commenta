import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Get redirect path from URL query parameters
  const getRedirectPath = () => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get('redirect') || '/';
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock validation
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }

      if (!email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      // Mock successful login
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ 
        name: email.split('@')[0], 
        email: email 
      }));

      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }

      // Redirect to the intended page or home
      navigate(getRedirectPath());
      
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Welcome Back</h2>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={isLoading}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
              disabled={isLoading}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            disabled={isLoading}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <div className="forgot-password">
          <a href="/forgot-password">Forgot your password?</a>
        </div>
        
        <button type="submit" disabled={isLoading}>
          {isLoading ? (
            <span className="loading-dots">Logging in</span>
          ) : (
            'Login'
          )}
        </button>
        
        <p>
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>

        {/* Optional: Social Login */}
        <div className="social-login">
          <div className="social-divider">
            <span>Or continue with</span>
          </div>
          <div className="social-buttons">
            <button type="button" className="social-btn google" disabled={isLoading}>
              Google
            </button>
            <button type="button" className="social-btn github" disabled={isLoading}>
              GitHub
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;