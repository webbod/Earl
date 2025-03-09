import React, { useState, useEffect } from 'react';
import './App.css';
import './components/FitnessAssessmentWidget.css';
import './components/BlogComponent.css';
import './components/TrainingSchedule.css';
import './components/InstagramGallery.css';

import FitnessAssessmentWidget from './components/FitnessAssessmentWidget';
import BlogComponent from './components/BlogComponent';
import SEOSchema from './components/SEOSchema';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const videos = [
 "stretches.mp4", "shoulder taps.mp4", "planks.mp4", "clean to press.mp4", "boxer.mp4", 
 "lunges.mp4", "squat.mp4", "kettlebells.mp4", "ohp.mp4", "situps.mp4", "bench press.mp4", 
 "circuit.mp4", "legpress.mp4", "pushup.mp4", "running.mp4"
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "Earl's military approach to fitness completely transformed my outlook. I've lost 14kg and gained so much confidence. His nutrition advice was the game-changer I needed.",
    rating: 5,
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Nolan"
  },
  {
    name: "James T.",
    text: "After my injury, I thought intense fitness was behind me. Earl's rehabilitation knowledge and personalized program got me back to peak performance. Worth every penny.",
    rating: 5,
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Christopher"
  },
  {
    name: "Michelle K.",
    text: "The circuit training sessions are incredible! Earl pushes you just enough - tough but achievable. I've never been fitter and his nutrition plans are sustainable and effective.",
    rating: 5,
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Katherine"
  }
];

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  let video = videos[Math.floor(Math.random() * videos.length)];
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      {/* SEO Schema Markup */}
      <div dangerouslySetInnerHTML={{ __html: SEOSchema }} />
      
      <a id="top" href="#top">.</a>
      <div className="video">
        <video autoPlay muted loop id="backgroundVideo">
          <source src={video} type="video/mp4"/>
        </video>
        <div className="overlay"></div>
      </div>

      {/* Assessment Widget Section */}
      <a id="assessment" href="#assessment">.</a>
      <div className="section assessment-section">
        <div className="app-content">
          <h2>Free Fitness Assessment</h2>
          <FitnessAssessmentWidget />
        </div>
      </div>

      {/* Blog Section */}
      <a id="blog" href="#blog">.</a>
      <div className="blog-section section">
        <div className="app-content">
          <BlogComponent />
        </div>
      </div>


      {/* Testimonials Carousel */}
      <div className="testimonials-section">
        <div className="app-content">
          <h2>Success Stories</h2>
          <div className="testimonial-carousel">
            <button onClick={prevTestimonial} className="carousel-btn prev">
              <ChevronLeft size={24} />
            </button>
            
            <div className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonials[currentTestimonial].image} alt={`${testimonials[currentTestimonial].name} testimonial`} />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={24} fill="#FFD700" color="#FFD700" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
                <p className="testimonial-name">- {testimonials[currentTestimonial].name}</p>
              </div>
            </div>
            
            <button onClick={nextTestimonial} className="carousel-btn next">
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <a id="contact" href="#contact">.</a>
      <div className="contact-section">
        <div className="app-content">
          <h2>Book Your Session</h2>
          <div className="contact-columns">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <div className="contact-methods">
                <div className="contact-method">
                  <p>07792 351116</p>
                </div>
                <div className="contact-method">
                  <p>earl_james@hotmail.co.uk</p>
                </div>
                <div className="contact-method">
                  <p>@ejamespt</p>
                </div>
              </div>
              <h3>Location</h3>
              <p>Xcel Leisure Centre, Coventry</p>
              <div className="map-placeholder">
                <img src="https://placekitten.com/600/300" alt="Map to Xcel Leisure Centre, Coventry" />
              </div>
            </div>
            <div className="contact-form">
              <h3>Book a Session</h3>
              <div className="form-placeholder">
                <p>Booking form will appear here</p>
                <button className="cta-button primary">Send Request</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="quote section">
        <h2>&ldquo;Strength grows in the moments when you think you can't go on.&rdquo;</h2>
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <div className="app-content">
          <div className="footer-content">
            <div className="footer-info">
            <div className="icons">
            <a href="https://www.facebook.com/earl.james.5473" target="_blank" rel="noopener noreferrer">
              <img src="facebook.png" className="social" alt="Facebook"/>
            </a>
            <img src="logo.jpg" className="logo" alt="Earl James Personal Training Coventry"/>
            <a href="https://www.instagram.com/ejamespt" target="_blank" rel="noopener noreferrer">
              <img src="instagram.png" className="social" alt="Instagram"/>
            </a>
          </div>
              <p>Royal Marine discipline. Proven results.</p>
              <p>Coventry's premier personal trainer.</p>
            </div>
            <div className="footer-nav">
              <div className="footer-nav-column">
                <h4>Services</h4>
                <a href="#fitness">Circuit Training</a>
                <a href="#fitness">Personal Training</a>
                <a href="#nutrition">Nutrition Coaching</a>
                <a href="#rehab">Rehabilitation</a>
              </div>
              <div className="footer-nav-column">
                <h4>Connect</h4>
                <a href="#contact">Contact</a>
                <a href="#assessment">Free Assessment</a>
                <a href="https://www.instagram.com/ejamespt">Instagram</a>
                <a href="https://www.facebook.com/earl.james.5473">Facebook</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Earl James Personal Training. All rights reserved.</p>
          </div>
        </div>
      </footer>      
    </div>
  );
}

export default App;