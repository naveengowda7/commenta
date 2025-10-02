import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ROUTES } from './routes';
import Header from './Header';
import './Dashboard.css';

// Dashboard components
const Videos = React.lazy(() => import('@/pages/videos/Videos'));
const VideoDetail = React.lazy(() => import('@/pages/videos/VideoDetail'));
const VideoComments = React.lazy(() => import('@/pages/videos/VideoComments'));

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="dashboard-layout">
      <Header />
      
      <div className="dashboard-container">
        {/* Sidebar Navigation */}
        <aside className="dashboard-sidebar">
          <nav className="sidebar-nav">
            <h3 className="sidebar-title">Dashboard</h3>
            <ul className="sidebar-menu">
              <li className="menu-item">
                <a 
                  href="/dashboard/videos" 
                  className={`menu-link ${location.pathname === '/dashboard/videos' ? 'active' : ''}`}
                >
                  📊 Videos
                </a>
              </li>
              <li className="menu-item">
                <a 
                  href="/dashboard/analytics" 
                  className={`menu-link ${location.pathname === '/dashboard/analytics' ? 'active' : ''}`}
                >
                  📈 Analytics
                </a>
              </li>
              <li className="menu-item">
                <a 
                  href="/dashboard/comments" 
                  className={`menu-link ${location.pathname === '/dashboard/comments' ? 'active' : ''}`}
                >
                  💬 Comments
                </a>
              </li>
              <li className="menu-item">
                <a 
                  href="/account" 
                  className={`menu-link ${location.pathname.includes('/account') ? 'active' : ''}`}
                >
                  ⚙️ Account
                </a>
              </li>
            </ul>
            
            <div className="sidebar-footer">
              <a href="/analyzer" className="analyze-new-btn">
                🎬 Analyze New Video
              </a>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="dashboard-main">
          <div className="dashboard-content">
            <React.Suspense fallback={
              <div className="loading-spinner">
                <div className="spinner"></div>
              </div>
            }>
              <Routes>
                <Route index element={<Navigate to="videos" replace />} />
                <Route path="videos" element={<Videos />} />
                <Route path="videos/:id" element={<VideoDetail />} />
                <Route path="videos/:id/comments" element={<VideoComments />} />
                
                {/* You can add more dashboard routes here */}
                <Route path="analytics" element={
                  <div className="dashboard-page">
                    <h1>Analytics</h1>
                    <p>Your channel analytics will appear here.</p>
                  </div>
                } />
                
                <Route path="comments" element={
                  <div className="dashboard-page">
                    <h1>Comments</h1>
                    <p>Manage and analyze your video comments.</p>
                  </div>
                } />
              </Routes>
            </React.Suspense>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;