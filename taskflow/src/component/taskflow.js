import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./taskflow.css";



function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="app">
      {/* Top Section */}
      <section className="hero" data-aos="fade-up">
        <h1>TaskFlow</h1>
        <p>Organize your life, one task at a time.</p>
        <button>Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features" data-aos="fade-up">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <i className="fas fa-list-check"></i>
            <h3>Easy Task Management</h3>
            <p>Create, organize, and prioritize tasks effortlessly.</p>
          </div>
          <div className="feature">
            <i className="fas fa-bell"></i>
            <h3>Reminders</h3>
            <p>Never miss a deadline with timely notifications.</p>
          </div>
          <div className="feature">
            <i className="fas fa-chart-line"></i>
            <h3>Progress Tracking</h3>
            <p>Track your progress and stay motivated.</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews" data-aos="fade-up">
        <h2>What Our Users Say</h2>
        <div className="review-list">
          <blockquote>
            "TaskFlow changed my life! I’m finally organized." — Sarah K.
          </blockquote>
          <blockquote>
            "The reminders keep me on track every day." — James L.
          </blockquote>
          <blockquote>
            "Perfect for my team’s workflow!" — Maria P.
          </blockquote>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" data-aos="fade-up">
        <h2>Pricing</h2>
        <div className="pricing-list">
          <div className="price-card">
            <h3>Free</h3>
            <p>$0/month</p>
            <ul>
              <li>Basic Task Management</li>
              <li>5 Projects</li>
            </ul>
            <button>Choose Free</button>
          </div>
          <div className="price-card">
            <h3>Pro</h3>
            <p>$9/month</p>
            <ul>
              <li>Unlimited Tasks</li>
              <li>Priority Support</li>
            </ul>
            <button>Choose Pro</button>
          </div>
          <div className="price-card">
            <h3>Team</h3>
            <p>$29/month</p>
            <ul>
              <li>Everything in Pro</li>
              <li>Team Collaboration</li>
            </ul>
            <button>Choose Team</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" data-aos="fade-up">
        <p>Contact: support@taskflow.com</p>
        <div className="socials">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
