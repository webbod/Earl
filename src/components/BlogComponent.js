import React, { useState } from 'react';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';

const BlogComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Sample blog posts with SEO-friendly content for Coventry personal training
  const blogPosts = [
    {
      id: 1,
      title: "5 Military-Inspired Workouts to Transform Your Fitness in Coventry",
      excerpt: "Discover how Royal Marine training techniques can elevate your fitness journey. These battle-tested exercises will push your limits and deliver exceptional results.",
      category: "workouts",
      author: "Earl James",
      date: "March 2, 2025",
      readTime: "5 min read",
      image: "https://picsum.photos/id/476/600/400",
      tags: ["military fitness", "circuit training", "coventry gym", "hiit workouts"]
    },
    {
      id: 2,
      title: "Nutrition Strategies for Sustainable Weight Loss in Coventry",
      excerpt: "Forget crash diets and quick fixes. Learn the science-backed nutrition principles that create lasting results without sacrificing the foods you love.",
      category: "nutrition",
      author: "Earl James",
      date: "February 24, 2025",
      readTime: "7 min read",
      image: "https://picsum.photos/id/301/601/400",
      tags: ["nutrition coach", "weight loss", "diet tips", "coventry nutritionist"]
    },
    {
      id: 3,
      title: "From Injury to Excellence: Rehabilitation Success Stories",
      excerpt: "Real stories from Coventry clients who overcame serious injuries through targeted rehabilitation training and proper recovery techniques.",
      category: "rehab",
      author: "Earl James",
      date: "February 15, 2025",
      readTime: "6 min read",
      image: "https://picsum.photos/id/508/602/400",
      tags: ["injury recovery", "sports rehab", "coventry physiotherapy", "back pain"]
    },
    {
      id: 4,
      title: "Building Mental Resilience Through Physical Training",
      excerpt: "How the discipline of military-style training builds not just physical strength but mental fortitude that transfers to all areas of life.",
      category: "mindset",
      author: "Earl James",
      date: "February 8, 2025",
      readTime: "4 min read",
      image: "https://picsum.photos/id/164/603/400",
      tags: ["mental strength", "discipline", "coventry coaching", "fitness motivation"]
    },
    {
      id: 5,
      title: "The Ultimate Guide to Fitness in Coventry: Best Gyms and Trainers",
      excerpt: "Navigate Coventry's fitness scene with insider knowledge on the top training facilities, outdoor workout spots, and professional trainers.",
      category: "local",
      author: "Earl James",
      date: "January 30, 2025",
      readTime: "8 min read",
      image: "https://picsum.photos/id/222/604/400",
      tags: ["coventry gyms", "personal trainers", "fitness centers", "local training"]
    },
    {
      id: 6,
      title: "Kettlebell Mastery: Transform Your Body With One Simple Tool",
      excerpt: "The kettlebell is a versatile training tool that can deliver full-body workouts anywhere. Learn proper technique and effective routines.",
      category: "workouts",
      author: "Earl James",
      date: "January 22, 2025",
      readTime: "5 min read",
      image: "https://picsum.photos/id/312/605/400",
      tags: ["kettlebell training", "home workouts", "coventry fitness", "strength training"]
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'workouts', name: 'Workouts' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'rehab', name: 'Rehabilitation' },
    { id: 'mindset', name: 'Mindset' },
    { id: 'local', name: 'Coventry Fitness' }
  ];
  
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  return (
    <div className="blog-component">
      <div className="blog-header">
        <h2>Fitness Insights<br/>& Training Tips</h2>
        <p className="blog-description">
          Expert advice from Earl James, Coventry's premier personal trainer with Royal Marine experience.
          Stay updated with the latest in fitness, nutrition, and health.
        </p>
        
        <div className="blog-categories">
          {categories.map(category => (
            <button 
              key={category.id}
              className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="blog-grid">
        {filteredPosts.map(post => (
          <div className="blog-card" key={post.id}>
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <div className="blog-category-tag">{categories.find(cat => cat.id === post.category).name}</div>
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-meta">
                <div className="meta-item">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="blog-tags">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="blog-tag">{tag}</span>
                ))}
              </div>
              <a href={`#blog/${post.id}`} className="read-more">
                Read Article <ChevronRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="blog-cta">
        <h3>Want personalized fitness advice?</h3>
        <p>Book a free consultation with Earl to discuss your specific goals and challenges.</p>
        <a href="#contact" className="cta-button primary">Book Free Consultation</a>
      </div>
    </div>
  );
};

export default BlogComponent;