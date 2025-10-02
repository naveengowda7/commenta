import React from "react";
import "./About.css";
 // Replace with your actual hero image

const About = () => {
  return (
    <div className="landing-page">
      {/* Header / Navbar */}
      <header className="navbar">
        <div className="logo">AudienceAI</div>
        <div className="nav-buttons">
          <a href="/login" className="btn-outline">Log In</a>
          <a href="/signup" className="btn-primary">Sign Up</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Know Your <span className="purple">Audience</span>{" "}
            <span className="green">Like Never Before.</span>
          </h1>
          <p>
            AudienceAI provides powerful AI-driven insights into your YouTube comments, helping
            creators understand sentiment, identify questions, and connect deeply with their community.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Your Free Analysis</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
       
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Unlock the Power of Your Comments</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Advanced Sentiment Analysis</h3>
            <p>Understand positive, neutral, and negative sentiment with precision.</p>
          </div>
          <div className="card">
            <h3>Top Comments & Topics</h3>
            <p>Identify the most engaging comments and trending topics.</p>
          </div>
          <div className="card">
            <h3>Viewer Questions Identified</h3>
            <p>Automatically extract common questions from comments.</p>
          </div>
          <div className="card">
            <h3>Smart Reply Suggestions</h3>
            <p>Receive AI-powered suggestions for engaging responses.</p>
          </div>
          <div className="card">
            <h3>Audience Engagement Insights</h3>
            <p>Deep dive into what drives interactions and loyalty.</p>
          </div>
          <div className="card">
            <h3>Competitor Analysis (Upcoming)</h3>
            <p>Benchmark your channel against competitors. Coming soon!</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How AudienceAI Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1</h3>
            <p>Connect Your Channel</p>
          </div>
          <div className="step">
            <h3>2</h3>
            <p>Analyze Any Video</p>
          </div>
          <div className="step">
            <h3>3</h3>
            <p>Gain Actionable Insights</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Creators Are Saying</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"AudienceAI transformed how I understand my viewers."</p>
            <h4>Creative Zoe</h4>
            <span>Gaming YouTuber</span>
          </div>
          <div className="testimonial">
            <p>"Finding viewer questions is now effortless!"</p>
            <h4>Tech Insights Pro</h4>
            <span>Tech Reviewer</span>
          </div>
          <div className="testimonial">
            <p>"AudienceAI helps me truly connect with my audience."</p>
            <h4>VlogMaster Mike</h4>
            <span>Daily Vlogger</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <h2>Simple, Transparent Pricing</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Free</h3>
            <p>$0/month</p>
            <ul>
              <li>5 video analyses/month</li>
              <li>Basic sentiment breakdown</li>
              <li>Top 10 comments</li>
              <li>Community support</li>
            </ul>
            <button className="btn-outline">Start Free</button>
          </div>
          <div className="pricing-card popular">
            <h3>Pro</h3>
            <p>$29/month</p>
            <ul>
              <li>Unlimited video analyses</li>
              <li>Advanced sentiment analysis</li>
              <li>Detailed viewer questions</li>
              <li>Priority email support</li>
              <li>Smart reply suggestions</li>
              <li>Exportable reports</li>
            </ul>
            <button className="btn-primary">Go Pro</button>
          </div>
          <div className="pricing-card">
            <h3>Business</h3>
            <p>$99/month</p>
            <ul>
              <li>All Pro features</li>
              <li>Team collaboration</li>
              <li>Dedicated account manager</li>
              <li>API access</li>
              <li>Custom integrations</li>
              <li>Early access to new features</li>
            </ul>
            <button className="btn-outline">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Understand Your Audience Better?</h2>
        <p>Join thousands of creators who are using AudienceAI to grow their channel.</p>
        <button className="btn-primary">Get Started Free</button>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 AudienceAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
