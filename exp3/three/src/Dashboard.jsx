import React from 'react';
import './Dashboard.css';

function Dashboard() {
  // Skills data
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS/HTML', level: 88 },
    { name: 'TypeScript', level: 75 },
    { name: 'MongoDB', level: 70 }
  ];

  // Progress data for the chart
  const progressData = [
    { month: 'Jan', value: 20 },
    { month: 'Feb', value: 35 },
    { month: 'Mar', value: 45 },
    { month: 'Apr', value: 60 },
    { month: 'May', value: 75 },
    { month: 'Jun', value: 85 }
  ];

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Projects Completed</h3>
          <div className="stat-value">24</div>
        </div>
        <div className="stat-card">
          <h3>Hours Coded</h3>
          <div className="stat-value">1,250</div>
        </div>
        <div className="stat-card">
          <h3>Skills Mastered</h3>
          <div className="stat-value">12</div>
        </div>
        <div className="stat-card">
          <h3>Current Streak</h3>
          <div className="stat-value">45 days</div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="section">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Chart */}
      <div className="section">
        <h2>Learning Progress</h2>
        <div className="chart-container">
          <div className="chart">
            {progressData.map((data, index) => (
              <div key={index} className="chart-bar-wrapper">
                <div className="chart-bar-container">
                  <div 
                    className="chart-bar" 
                    style={{ height: `${data.value}%` }}
                  >
                    <span className="chart-value">{data.value}</span>
                  </div>
                </div>
                <div className="chart-label">{data.month}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="section">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">✓</div>
            <div className="activity-content">
              <h4>Completed React Router Project</h4>
              <p>Built a multi-page SPA with client-side routing</p>
              <span className="activity-time">2 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">📚</div>
            <div className="activity-content">
              <h4>Studied TypeScript Advanced Types</h4>
              <p>Learned about generics and utility types</p>
              <span className="activity-time">1 day ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">🎯</div>
            <div className="activity-content">
              <h4>Achieved 45-Day Streak</h4>
              <p>Consistent coding for 45 consecutive days</p>
              <span className="activity-time">Today</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
