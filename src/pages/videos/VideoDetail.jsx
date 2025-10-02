import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './VideoDetail.css';

const VideoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch video analysis data
    const fetchVideoData = async () => {
      setLoading(true);
      
      try {
        // Try to get from localStorage first (from analyzer)
        const storedData = localStorage.getItem(`video_${id}`);
        
        if (storedData) {
          setVideoData(JSON.parse(storedData));
        } else {
          // If not in localStorage, fetch from API
          // This would be your actual API call
          const response = await mockApiCall(id);
          setVideoData(response);
        }
      } catch (error) {
        console.error('Error fetching video data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, [id]);

  // Mock API call (replace with actual API)
  const mockApiCall = async (videoId) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          videoId: videoId,
          title: "Sample YouTube Video Analysis",
          url: `https://www.youtube.com/watch?v=${videoId}`,
          stats: {
            likes: "15K",
            comments: "2.3K",
            views: "150K",
            sentiment: {
              positive: 65,
              neutral: 25,
              negative: 10
            }
          },
          topComments: [
            { author: "User1", text: "Great video! Very informative.", likes: "1.2K", timestamp: "2 days ago" },
            { author: "User2", text: "Thanks for sharing this content.", likes: "890", timestamp: "3 days ago" },
            { author: "User3", text: "Could you make more on this topic?", likes: "756", timestamp: "4 days ago" }
          ],
          suggestions: [
            { emoji: "💡", text: "Consider adding timestamps for better navigation" },
            { emoji: "🎬", text: "Try shorter intro to retain viewer attention" },
            { emoji: "💬", text: "Ask more questions to encourage comments" }
          ],
          analyzedAt: new Date().toISOString()
        });
      }, 1000);
    });
  };

  if (loading) {
    return (
      <div className="video-detail-loading">
        <div className="loading-spinner"></div>
        <p>Loading video analysis...</p>
      </div>
    );
  }

  if (!videoData) {
    return (
      <div className="video-detail-error">
        <h2>Video not found</h2>
        <p>The video analysis you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/dashboard/videos')}>
          Back to Videos
        </button>
      </div>
    );
  }

  return (
    <div className="video-detail">
      <div className="video-detail-header">
        <button 
          className="back-button"
          onClick={() => navigate('/dashboard/videos')}
        >
          ← Back to Videos
        </button>
        <h1>Video Analysis</h1>
      </div>

      <div className="video-info-card">
        <div className="video-preview">
          <div className="video-thumbnail">
            <img 
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} 
              alt="Video thumbnail" 
            />
            <div className="video-overlay">
              <a 
                href={videoData.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="watch-button"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="video-meta">
          <h2>{videoData.title}</h2>
          <div className="video-stats">
            <div className="stat">
              <span className="stat-icon">👁️</span>
              <span className="stat-value">{videoData.stats.views} views</span>
            </div>
            <div className="stat">
              <span className="stat-icon">👍</span>
              <span className="stat-value">{videoData.stats.likes} likes</span>
            </div>
            <div className="stat">
              <span className="stat-icon">💬</span>
              <span className="stat-value">{videoData.stats.comments} comments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Results Grid */}
      <div className="analysis-grid">
        {/* Sentiment Analysis */}
        <div className="analysis-card">
          <h3>Sentiment Analysis</h3>
          <div className="sentiment-breakdown">
            <div className="sentiment-item positive">
              <span>Positive</span>
              <span>{videoData.stats.sentiment.positive}%</span>
            </div>
            <div className="sentiment-item neutral">
              <span>Neutral</span>
              <span>{videoData.stats.sentiment.neutral}%</span>
            </div>
            <div className="sentiment-item negative">
              <span>Negative</span>
              <span>{videoData.stats.sentiment.negative}%</span>
            </div>
          </div>
          <div className="sentiment-chart">
            <div 
              className="chart-bar positive" 
              style={{ width: `${videoData.stats.sentiment.positive}%` }}
            ></div>
            <div 
              className="chart-bar neutral" 
              style={{ width: `${videoData.stats.sentiment.neutral}%` }}
            ></div>
            <div 
              className="chart-bar negative" 
              style={{ width: `${videoData.stats.sentiment.negative}%` }}
            ></div>
          </div>
        </div>

        {/* Top Comments */}
        <div className="analysis-card">
          <h3>Top Comments</h3>
          <div className="comments-list">
            {videoData.topComments.map((comment, index) => (
              <div key={index} className="comment">
                <div className="comment-header">
                  <span className="comment-author">{comment.author}</span>
                  <span className="comment-timestamp">{comment.timestamp}</span>
                </div>
                <p className="comment-text">{comment.text}</p>
                <div className="comment-likes">
                  <span>👍 {comment.likes}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-comments">
            <button onClick={() => navigate(`/dashboard/videos/${id}/comments`)}>
              View All Comments →
            </button>
          </div>
        </div>

        {/* Suggestions */}
        <div className="analysis-card">
          <h3>Improvement Suggestions</h3>
          <div className="suggestions-list">
            {videoData.suggestions.map((suggestion, index) => (
              <div key={index} className="suggestion">
                <span className="suggestion-emoji">{suggestion.emoji}</span>
                <span className="suggestion-text">{suggestion.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="analysis-actions">
        <button 
          className="analyze-again-btn"
          onClick={() => navigate('/analyzer')}
        >
          🎬 Analyze Another Video
        </button>
      </div>
    </div>
  );
};

export default VideoDetail;