import React, { useState, useEffect } from 'react';
import './App.css';
import './components/FitnessAssessmentWidget.css';
import './components/BlogComponent.css';
import './components/TrainingSchedule.css';
import './components/InstagramGallery.css';

import FitnessAssessmentWidget from './components/FitnessAssessmentWidget';
import BlogComponent from './components/BlogComponent';
import TrainingSchedule from './components/TrainingSchedule';
import SEOSchema from './components/SEOSchema';
import InstagramGallery from './components/InstagramGallery';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Preserving the original slogan and video functionality
const slogans = [
  ["Push", "Past", "Limits"],
  ["Feel", "the", "Burn"],
  ["Conquer", "Every", "Obstacle"],
  ["Strive", "Sweat", "Succeed"],
  ["Strength", "Through", "Struggle"],
  ["Earn", "Your", "Strength"],
  ["Rise", "Grind", "Repeat"],
  ["Dare", "to", "Endure"],
  ["Train", "Transform", "Triumph"],
  ["Beyond", "Every", "Boundary"],
];

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

// Maintaining the original character animation function
const wrapCharactersInSpan = (text, quote, start) => {
  return (
    <p>
      {quote === '&ldquo;' ? <span style={{'--index' : 0}}>"</span> : ''}
      {text.split('').map((char, index) => <span key={index} style={{ '--index': start + index + 1 }}>{char}</span>)}
      {quote === '&rdquo;' ? <span style={{ '--index': start + text.length + 2 }}>"</span> : ''}
    </p>
  );
};

const sloganRenderer = () => {
  let slogan = slogans[Math.floor(Math.random() * slogans.length)];
  return [
    wrapCharactersInSpan(slogan[0], '&ldquo;', 0),
    wrapCharactersInSpan(slogan[1], '', slogan[0].length),
    wrapCharactersInSpan(slogan[2], '&rdquo;', slogan[0].length + slogan[1].length)
  ];
}

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeSection, setActiveSection] = useState('top');
  let video = videos[Math.floor(Math.random() * videos.length)];
  
  const handleScroll = () => {
    const sections = ['fitness', 'nutrition', 'coaching', 'rehab'];
    const scrollPosition = window.scrollY;
    
    // Find which section is currently in view
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const topPosition = element.offsetTop - 100;
        const bottomPosition = topPosition + element.offsetHeight;
        
        if (scrollPosition >= topPosition && scrollPosition < bottomPosition) {
          setActiveSection(section);
          break;
        } else if (scrollPosition < topPosition) {
          setActiveSection('top');
        }
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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

      {/* Header/Navigation */}
      <div className="app-content">
        <ul className="header">
          <li><a href="#top"><img src="logo.png" className="logo" alt="Earl James Personal Training Coventry"/></a></li>
          <li className={activeSection === 'fitness' ? 'active' : ''}><a href="#fitness">Fitness</a></li>
          <li className={activeSection === 'nutrition' ? 'active' : ''}><a href="#nutrition">Nutrition</a></li>
          <li className={activeSection === 'coaching' ? 'active' : ''}><a href="#coaching">Coaching</a></li>
          <li className={activeSection === 'rehab' ? 'active' : ''}><a href="#rehab">Rehab</a></li>
        </ul>
        
        {/* Hero Section */}
        <div className="spacer"></div>  
        <div className="spacer"></div>         
        <div className="content">
          <div className="slogan">
            {sloganRenderer()}
          </div>
          <div className="nameplate">
            <p>Earl James</p>
            <p>&nbsp;- Elite Personal Trainer in Coventry</p>
          </div>
          <div className="spacer"></div>
          <div className="cta">
            <a href="#assessment" className="cta-button primary">Free Assessment</a>
            <a href="#contact" className="cta-button secondary">Book Now</a>
          </div>        
        </div>
      </div>

      {/* Fitness Section */}
      <a id="fitness" href="#fitness">.</a>
      <div className="section fitness">
        <div className="app-content">
          <h2>Fitness</h2>
          <TrainingSchedule />
        </div>
      </div>

      {/* Nutrition Section */}
      <a id="nutrition" href="#nutrition">.</a>
      <div className="section nutrition">
        <div className="app-content">
          <h2>Nutrition</h2>
          <div className="section-content">
            <div className="content-columns">
              <div className="content-column">
                <h3>Sustainable Nutrition Coaching</h3>
                <p>Earl's approach to nutrition focuses on long-term habits rather than quick fixes. Drawing from his military background and nutrition qualifications, Earl develops practical eating plans that complement your training regimen.</p>
                <p>As a Body Type Nutrition Coach, Earl understands that every body responds differently. His personalized nutrition strategies are designed for your specific metabolism, activity level, and goals.</p>
                <p><strong>Services include:</strong></p>
                <ul className="nutrition-list">
                  <li>Body composition analysis</li>
                  <li>Personalized meal planning</li>
                  <li>Nutrition for performance optimization</li>
                  <li>Sustainable habit formation</li>
                  <li>Online and in-person coaching options</li>
                </ul>
                <a href="#assessment" className="section-button">Get Started</a>
              </div>
              <div className="content-column">
                <img src="https://picsum.photos/id/225/500/700" alt="Nutrition Coaching with Earl James in Coventry" className="full-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coaching Section */}
      <a id="coaching" href="#coaching">.</a>
      <div className="section coaching">
        <div className="app-content">
          <h2>Coaching</h2>
          <div className="section-content">
            <div className="coach-intro">
              <div className="coach-image">
                <img src="https://picsum.photos/id/433/400/400" alt="Earl James Personal Trainer Coventry" />
              </div>
              <div className="coach-bio">
                <h3>Meet Your Coach: Earl James</h3>
                <p>Earl brings a decade of Royal Marine experience to every training session. His journey from the frontlines of Afghanistan to becoming Coventry's premier fitness coach has equipped him with unique insights into human potential.</p>
                <p>After overcoming a serious back injury sustained during military service, Earl transformed his rehabilitation experience into expertise that helps clients push past their own limitations.</p>
                <div className="cert-container">
                  <div className="cert">Level 4 Personal Trainer</div>
                  <div className="cert">NLP Practitioner</div>
                  <div className="cert">Life Coach</div>
                  <div className="cert">GP Medical Referral Specialist</div>
                  <div className="cert">Master Kettlebell Instructor</div>
                  <div className="cert">Sports Massage Therapist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rehab Section */}
      <a id="rehab" href="#rehab">.</a>
      <div className="section rehab">
        <div className="app-content"> 
          <h2>Rehab</h2>
          <div className="section-content">
            <div className="content-grid">
              <div className="content-item">
                <div className="content-text">
                  <h3>Injury Rehabilitation</h3>
                  <p>Earl's personal experience with rehabilitation after a prolapsed disc in Afghanistan gives him unique insight into recovery journeys. As a Postural Assessment & Corrective Exercise Instructor, he specializes in helping clients overcome injuries and build resilience.</p>
                  <p>His GP Medical Referral Specialist qualification ensures safe, effective rehabilitation programs tailored to your specific condition.</p>
                  <a href="#contact" className="section-button">Schedule Consultation</a>
                </div>
              </div>
              <div className="content-item">
                <div className="content-image">
                  <img src="https://picsum.photos/id/473/500/340" alt="Rehabilitation Training with Earl James in Coventry" />
                </div>
              </div>
            </div>
          </div>
        </div>
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
      <div className="blog-section">
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

      {/* Instagram Gallery */}
      <InstagramGallery username="ejamespt" />

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
      <div className="spacer"></div>
      <div className="quote">
        <p>&ldquo;Strength grows in the moments when you think you can't go on.&rdquo;</p>
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <div className="app-content">
          <div className="footer-content">
            <div className="footer-info">
              <img src="logo.png" className="logo" alt="Earl James Personal Training Coventry" />
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
          <div className="icons">
            <a href="https://www.facebook.com/earl.james.5473" target="_blank" rel="noopener noreferrer">
              <img src="facebook.png" className="social" alt="Facebook"/>
            </a>
            <img src="logo.jpg" className="logo" alt="Earl James Personal Training Coventry"/>
            <a href="https://www.instagram.com/ejamespt" target="_blank" rel="noopener noreferrer">
              <img src="instagram.png" className="social" alt="Instagram"/>
            </a>
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