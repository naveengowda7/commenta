import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './YouTubeAnalyzer.css';

// Auth hook
const useAuth = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  return { isAuthenticated, user };
};

const YouTubeAnalyzer = () => {
  const [view, setView] = useState('initial');
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login?redirect=/analyzer');
    }
  }, [isAuthenticated, navigate]);

  // If not authenticated, show nothing (will redirect)
  if (!isAuthenticated) {
    return (
      <div className="analyzer-wrapper">
        <Header />
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Redirecting to login...</p>
        </div>
      </div>
    );
  }

  // Function to extract video ID from YouTube URL
  const extractVideoId = (url) => {
    if (!url) return null;
    const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleAnalyze = async (e) => {
    e.preventDefault();
    
    if (!videoUrl) return;
    
    setIsLoading(true);
    
    try {
      const videoId = extractVideoId(videoUrl);
      
      if (!videoId) {
        alert('Please enter a valid YouTube URL');
        setIsLoading(false);
        return;
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const analysisData = {
        videoId: videoId,
        title: "Sample Video Analysis",
        url: videoUrl,
        stats: {
          likes: "15K",
          comments: "2.3K",
          sentiment: {
            positive: 65,
            neutral: 25,
            negative: 10
          }
        }
      };
      
      localStorage.setItem(`video_${videoId}`, JSON.stringify(analysisData));
      navigate(`/dashboard/videos/${videoId}`);
      
    } catch (error) {
      console.error('Analysis failed:', error);
      alert('Analysis failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetAnalyzer = () => {
    setView('initial');
    setVideoUrl('');
  };

  return (
    <div className="analyzer-wrapper">
      <Header />
      
      <div className={`analyzer-container ${view}`}>
        {/* Initial View */}
        {view === 'initial' && (
          <div className="home-initial">
            <div className="initial-card">
              <div className="card-icon">🎬</div>
              <h1>Analyze a YouTube Video</h1>
              <p>Get detailed insights about your YouTube video including sentiment analysis, top comments, and viewer engagement metrics.</p>
              <button 
                className="analyze-btn"
                onClick={() => setView('input')}
                type="button"
              >
                Analyze Video
              </button>
              <div className="example-url">
                Example: https://www.youtube.com/watch?v=eQw4v8WgXc0
              </div>
            </div>
          </div>
        )}

        {/* Input View */}
        {view === 'input' && (
          <div className="home-input">
            <div className="input-card">
              <h1>Enter YouTube Video URL</h1>
              <p>Paste the link to the YouTube video you want to analyze</p>
              
              <form onSubmit={handleAnalyze} className="url-form">
                <div className="input-group">
                  <input
                    type="url"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="url-input"
                    required
                    disabled={isLoading}
                  />
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Analyzing...' : 'Analyze'}
                  </button>
                </div>
                <div className="input-hint">
                  Example: https://www.youtube.com/watch?v=eQw4v8WgXc0
                </div>
              </form>

              <button 
                className="back-btn"
                onClick={resetAnalyzer}
                disabled={isLoading}
                type="button"
              >
                ← Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubeAnalyzer;