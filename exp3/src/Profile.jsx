import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar">
            <span className="avatar-text">GP</span>
          </div>
          <h2>GitHub Copilot User</h2>
          <p className="title">Full Stack Developer</p>
        </div>
        
        <div className="profile-details">
          <div className="detail-section">
            <h3>About Me</h3>
            <p>
              Passionate developer with expertise in modern web technologies. 
              I love building scalable applications and learning new frameworks.
            </p>
          </div>
          
          <div className="detail-section">
            <h3>Contact Information</h3>
            <div className="info-item">
              <strong>Email:</strong> developer@example.com
            </div>
            <div className="info-item">
              <strong>Location:</strong> Remote
            </div>
            <div className="info-item">
              <strong>GitHub:</strong> @developer
            </div>
          </div>
          
          <div className="detail-section">
            <h3>Interests</h3>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Web Design</span>
              <span className="tag">AI/ML</span>
            </div>
          </div>
          
          <div className="detail-section">
            <h3>Experience</h3>
            <div className="experience-item">
              <h4>Full Stack Developer</h4>
              <p className="date">2023 - Present</p>
              <p>Building modern web applications using React, Node.js, and cloud technologies.</p>
            </div>
            <div className="experience-item">
              <h4>Frontend Developer</h4>
              <p className="date">2021 - 2023</p>
              <p>Developed responsive user interfaces and improved web performance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
