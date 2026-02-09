import React, { useEffect, useRef, useState } from 'react';
import './App.css';

// Enhanced Course Data with Modern Images
const courses = [
  { id: 1, title: "Full Stack Development", students: "12k+", rating: "4.8", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800", category: "Development" },
  { id: 2, title: "Data Science with AI", students: "8.5k+", rating: "4.9", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", category: "AI/ML" },
  { id: 3, title: "Cloud Computing AWS", students: "5k+", rating: "4.7", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", category: "Cloud" },
  { id: 4, title: "Cyber Security Elite", students: "3k+", rating: "4.9", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", category: "Security" },
  { id: 5, title: "UI/UX Mastery", students: "15k+", rating: "4.6", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800", category: "Design" },
  { id: 6, title: "Python for Everyone", students: "20k+", rating: "4.9", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800", category: "Programming" },
];

const testimonials = [
  { name: "Priya Sharma", role: "Software Engineer @ Google", quote: "The GUVI x Kongu program transformed my career trajectory completely.", avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Rahul Kumar", role: "Data Scientist @ Amazon", quote: "Learning in my native language made complex concepts so much easier to grasp.", avatar: "https://i.pravatar.cc/150?img=13" },
  { name: "Ananya Reddy", role: "Full Stack Developer @ Microsoft", quote: "The placement support was incredible. Got placed within 2 months!", avatar: "https://i.pravatar.cc/150?img=5" },
];

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const infiniteCourses = [...courses, ...courses];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      
      {/* --- Modern Navigation with Glass Effect --- */}
      <nav className={`navbar ${scrollY > 50 ? 'navbar-scrolled' : ''}`}>
        <div className="nav-brand">
          <div className="logo-container">
            <span className="logo-text">KONGU</span>
            <div className="brand-divider"></div>
            <span className="logo-text logo-accent">GUVI</span>
          </div>
        </div>
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#courses" className="nav-link">Courses</a></li>
          <li><a href="#placement" className="nav-link">Placements</a></li>
          <li><a href="#community" className="nav-link">Community</a></li>
        </ul>
        <button className="btn-primary btn-nav">
          <span>Get Started</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </nav>

      {/* --- Hero Section with Particle Background --- */}
      <section className="hero" id="home">
        <div className="hero-bg-animation">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        
        <div className="hero-content">
          <div className="badge" data-aos="fade-down">
            <span className="badge-icon">🤝</span>
            <span>Strategic Educational Partnership</span>
          </div>
          
          <h1 className="hero-title" data-aos="fade-up">
            Excellence in Every Aspect,
            <span className="gradient-text"> Learning Beyond Limits</span>
          </h1>
          
          <p className="hero-description" data-aos="fade-up" data-aos-delay="100">
            Bridging the gap between academic rigor and industry demands. 
            Kongu Engineering College joins forces with GUVI to empower the next generation of tech leaders.
          </p>
          
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="200">
            <button className="btn-primary btn-large">
              <span>Start Learning Now</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary btn-large">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 7L13 10L8 13V7Z" fill="currentColor"/>
              </svg>
              <span>View Demo</span>
            </button>
          </div>
          
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="300">
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Placement Support</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏢</div>
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Industry Partners</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👨‍🎓</div>
              <h3 className="stat-number">10k+</h3>
              <p className="stat-label">Students Impacted</p>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll to explore</p>
        </div>
      </section>

      {/* --- Infinite Scroll Courses --- */}
      <section className="infinite-scroll-section" id="courses">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">TRENDING PROGRAMS</span>
          <h2 className="section-title">Master In-Demand Tech Skills</h2>
          <p className="section-description">
            Learn from industry experts with hands-on projects and native language support
          </p>
        </div>

        <div className="scroller">
          <div className="scroller-inner">
            {infiniteCourses.map((course, index) => (
              <div className="course-card" key={index}>
                <div className="card-img">
                  <img src={course.img} alt={course.title} loading="lazy" />
                  <div className="card-overlay">
                    <button className="btn-card">Explore Course</button>
                  </div>
                  <span className="card-badge">{course.category}</span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{course.title}</h3>
                  <p className="card-description">
                    Industry-ready curriculum with real-world projects
                  </p>
                  <div className="card-meta">
                    <div className="meta-item">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M14 14C14 11.7909 11.3137 10 8 10C4.68629 10 2 11.7909 2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span>{course.students}</span>
                    </div>
                    <div className="meta-item rating">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 1L10.163 5.38L15 6.12L11.5 9.545L12.326 14.36L8 12.1L3.674 14.36L4.5 9.545L1 6.12L5.837 5.38L8 1Z"/>
                      </svg>
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Features Grid with Modern Cards --- */}
      <section className="features">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag light">WHY CHOOSE US</span>
          <h2 className="section-title" style={{color: 'white'}}>A Collaboration That Delivers</h2>
        </div>
        
        <div className="feature-grid">
          <div className="feature-card" data-aos="fade-up" data-aos-delay="0">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">🚀</div>
            </div>
            <h3 className="feature-title">CodeKata Gamification</h3>
            <p className="feature-description">
              Practice coding with GUVI's award-winning gamified platform directly integrated into the curriculum.
            </p>
            <div className="feature-link">
              <span>Learn more</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">🌐</div>
            </div>
            <h3 className="feature-title">Vernacular Learning</h3>
            <p className="feature-description">
              Break language barriers. Learn complex engineering concepts in Tamil, Hindi, Telugu, and more.
            </p>
            <div className="feature-link">
              <span>Learn more</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">💼</div>
            </div>
            <h3 className="feature-title">Placement Drives</h3>
            <p className="feature-description">
              Exclusive access to recruitment drives from top product-based companies specifically for Kongu students.
            </p>
            <div className="feature-link">
              <span>Learn more</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* --- Testimonials Carousel --- */}
      <section className="testimonials-section">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">SUCCESS STORIES</span>
          <h2 className="section-title">What Our Students Say</h2>
        </div>

        <div className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card ${index === activeTestimonial ? 'active' : ''}`}
            >
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                <div>
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeTestimonial ? 'active' : ''}`}
              onClick={() => setActiveTestimonial(index)}
            />
          ))}
        </div>
      </section>

      {/* --- CTA Section with Modern Design --- */}
      <section className="cta-section">
        <div className="cta-bg-pattern"></div>
        <div className="cta-content" data-aos="zoom-in">
          <h2 className="cta-title">Ready to Transform Your Career?</h2>
          <p className="cta-description">
            Join thousands of successful graduates who have upskilled through the Kongu x GUVI initiative.
          </p>
          <div className="cta-buttons">
            <button className="btn-cta">
              <span>Apply for Scholarship</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="cta-stats">
            <div className="cta-stat">
              <strong>₹2Cr+</strong>
              <span>Scholarships Given</span>
            </div>
            <div className="cta-stat">
              <strong>500+</strong>
              <span>Companies Hiring</span>
            </div>
            <div className="cta-stat">
              <strong>95%</strong>
              <span>Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Modern Footer --- */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="logo-container">
                <span className="logo-text">KONGU</span>
                <div className="brand-divider"></div>
                <span className="logo-text logo-accent">GUVI</span>
              </div>
              <p className="footer-tagline">Empowering the next generation of tech leaders</p>
              <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            
            <div className="footer-links-group">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#courses">Courses</a></li>
                  <li><a href="#placement">Placements</a></li>
                  <li><a href="#community">Community</a></li>
                  <li><a href="#about">About Us</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Documentation</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                  <li><a href="#">Disclaimer</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2026 Kongu Engineering College x GUVI. All Rights Reserved.</p>
            <p>Made with ❤️ for students</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;