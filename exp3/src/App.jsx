import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Profile from './Profile';
import Dashboard from './Dashboard';

function Home() {
  return (
    <div style={{ 
      padding: '8rem 3rem',
      textAlign: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h2 style={{ 
        fontSize: '4.5rem',
        color: '#fff',
        marginBottom: '2rem',
        fontWeight: '700',
        letterSpacing: '-2px',
        lineHeight: '1.1'
      }}>
        Welcome to My Portfolio
      </h2>
      <p style={{ 
        fontSize: '1.5rem',
        color: 'rgba(255, 255, 255, 0.7)',
        maxWidth: '700px',
        margin: '0 auto 3rem',
        lineHeight: '1.6'
      }}>
        Navigate through the menu to explore my profile and dashboard. Built with modern web technologies and designed for the future.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/profile" style={{
          padding: '1rem 2.5rem',
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
          color: 'white',
          borderRadius: '12px',
          fontSize: '1.1rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          display: 'inline-block',
          boxShadow: '0 8px 30px rgba(99, 102, 241, 0.3)'
        }}>
          View Profile
        </Link>
        <Link to="/dashboard" style={{
          padding: '1rem 2.5rem',
          background: 'rgba(255, 255, 255, 0.08)',
          color: 'white',
          borderRadius: '12px',
          fontSize: '1.1rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          display: 'inline-block',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          See Dashboard
        </Link>
      </div>
    </div>
  );
}

function About() {
  return (
    <div style={{ 
      padding: '5rem 3rem',
      maxWidth: '1000px',
      margin: '0 auto',
      minHeight: 'calc(100vh - 80px)'
    }}>
      <h2 style={{ 
        fontSize: '3.5rem',
        color: '#fff',
        marginBottom: '2rem',
        fontWeight: '600',
        letterSpacing: '-1px'
      }}>
        About This App
      </h2>
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '3rem',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(10px)'
      }}>
        <p style={{ 
          fontSize: '1.25rem',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.8',
          marginBottom: '2rem'
        }}>
          This is a multi-page Single Page Application (SPA) built with React and React Router, 
          designed with a modern Stripe-inspired aesthetic.
        </p>
        <h3 style={{ 
          color: '#fff',
          fontSize: '1.5rem',
          marginBottom: '1.5rem',
          fontWeight: '600'
        }}>
          Features
        </h3>
        <ul style={{ 
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '1.1rem',
          lineHeight: '2',
          listStyle: 'none',
          padding: 0
        }}>
          <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0 }}>✓</span>
            Client-side routing with React Router
          </li>
          <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0 }}>✓</span>
            Professional profile page
          </li>
          <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0 }}>✓</span>
            Interactive dashboard with skills visualization
          </li>
          <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0 }}>✓</span>
            Stripe-inspired design system
          </li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-brand">My Portfolio</h1>
            <ul className="nav-menu">
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/profile" className="nav-link">Profile</Link>
              </li>
              <li>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
