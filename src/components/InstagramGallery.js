import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InstagramGallery = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const username = 'ejamespt'; // Earl's Instagram username
  
  useEffect(() => {
    // Using a public Instagram scraper API service
    const fetchInstagramPosts = async () => {
      try {
        // Replace with your preferred Instagram scraper service
        const response = await axios.get(`https://instagram-scraper-api.example.com/feed/${username}`);
        
        if (response.data && response.data.posts) {
          // Take only first 6 posts
          setPosts(response.data.posts.slice(0, 6));
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Failed to load Instagram posts');
        setLoading(false);
      }
    };
    
    fetchInstagramPosts();
  }, [username]);
  
  // Filter posts with #workout if needed
  const filteredPosts = posts.filter(post => 
    post.caption && post.caption.toLowerCase().includes('#workout')
  );
  
  // Use filtered posts if any match the hashtag, otherwise use all posts
  const displayPosts = filteredPosts.length > 0 ? filteredPosts : posts;
  
  return (
    <div className="instagram-section">
      <div className="app-content">
        <h2>Training Gallery</h2>
        <p className="instagram-info">
          Follow <a href={`https://www.instagram.com/${username}`} target="_blank" rel="noopener noreferrer">@{username}</a> on Instagram and tag #workout to be featured
        </p>
        
        <div className="gallery-grid">
          {loading ? (
            // Loading placeholders
            [...Array(6)].map((_, index) => (
              <div key={index} className="gallery-item skeleton">
                <div className="placeholder"></div>
              </div>
            ))
          ) : error ? (
            // Error state
            <div className="error-message">{error}</div>
          ) : (
            // Display Instagram posts
            displayPosts.map((post, index) => (
              <div key={index} className="gallery-item">
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={post.imageUrl} 
                    alt={post.caption ? post.caption.substring(0, 100) : "Instagram post by Earl James PT"} 
                  />
                  <div className="post-overlay">
                    <div className="post-likes">❤️ {post.likes}</div>
                  </div>
                </a>
              </div>
            ))
          )}
          
          {/* Fallback if no posts are loaded */}
          {!loading && !error && displayPosts.length === 0 && (
            [...Array(6)].map((_, index) => (
              <div key={index} className="gallery-item">
                <img src={`https://placekitten.com/${203 + index}/203`} alt="Workout with Earl James Personal Training Coventry" />
              </div>
            ))
          )}
        </div>
        
        <a href={`https://www.instagram.com/${username}`} target="_blank" rel="noopener noreferrer" className="instagram-link">
          <span>Follow on Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default InstagramGallery;