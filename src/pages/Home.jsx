import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const useAuth = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  return { isAuthenticated, user };
};

const Home = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    window.location.reload();
  };

  // Check authentication before navigating to analyzer
  const handleAnalyzeClick = () => {
    if (!isAuthenticated) {
      // Redirect to login with return URL
      navigate('/login?redirect=/analyzer');
    } else {
      navigate('/analyzer');
    }
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <div className="header-content">
          <div className="logo">
            <Link to="/">AudienceAI</Link>
          </div>
          <nav className="header-nav">
            {isAuthenticated ? (
              <>
                <span className="welcome-text">Welcome, {user?.name || 'User'}!</span>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <button onClick={() => handleAnalyzeClick()} className="nav-link">
                  Analyze Video
                </button>
                <button onClick={handleLogout} className="nav-link logout-btn">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="nav-link signup-btn">Sign Up</Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      {isAuthenticated ? (
        // Logged-in Home Page
        <section className="dashboard-home">
          <div className="container">
            <div className="welcome-section">
              <h1>Welcome back, {user?.name || 'Creator'}! 👋</h1>
              <p>Ready to analyze your YouTube content and grow your channel?</p>
              
              <div className="quick-actions">
                <div className="action-card" onClick={handleAnalyzeClick}>
                  <div className="action-icon">🎬</div>
                  <h3>Analyze New Video</h3>
                  <p>Get insights for a new YouTube video</p>
                </div>
                
                <div className="action-card" onClick={() => navigate('/dashboard/videos')}>
                  <div className="action-icon">📊</div>
                  <h3>View My Analyses</h3>
                  <p>See your previous video analyses</p>
                </div>
                
                <div className="action-card" onClick={() => navigate('/dashboard/analytics')}>
                  <div className="action-icon">📈</div>
                  <h3>Channel Analytics</h3>
                  <p>Track your channel performance</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Logged-out Landing Page
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Analyze YouTube Videos
              <span className="gradient-text"> Like Never Before</span>
            </h1>
            <p className="hero-description">
              Get deep insights into your YouTube content with advanced sentiment analysis, 
              comment analytics, and engagement metrics to grow your channel.
            </p>
            <div className="hero-actions">
              <button onClick={handleAnalyzeClick} className="cta-primary">
                Start Analyzing
              </button>
              <Link to="/about" className="cta-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="demo-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="card-content">
                <div className="analytics-preview">
                  <div className="metric">
                    <span className="metric-value">85%</span>
                    <span className="metric-label">Positive Sentiment</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">2.3K</span>
                    <span className="metric-label">Comments Analyzed</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">94%</span>
                    <span className="metric-label">Engagement Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section - Show only for logged-out users */}
      {!isAuthenticated && (
        <section className="features-section">
          <div className="container">
            <h2 className="section-title">Powerful Features for Content Creators</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Sentiment Analysis</h3>
                <p>Understand how viewers feel about your content with advanced AI-powered sentiment analysis.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💬</div>
                <h3>Comment Insights</h3>
                <p>Discover the most engaging conversations and identify trending topics in your comments.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>Growth Analytics</h3>
                <p>Get actionable tips and insights to improve engagement and grow your audience.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <p>&copy; 2024 MyApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;