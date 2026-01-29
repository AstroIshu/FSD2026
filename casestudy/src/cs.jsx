import React, { useState, useEffect } from 'react';

/**
 * OLIVE SPACE DESIGN TOKENS
 * - Theme: Deep Space Research (Olive/Herbal Palette)
 * - Primary Olive: #556B2F
 * - Credits: Ishant Singh
 */

const MISSIONS_DATA = [
  {
    id: 1,
    title: "Deep Field Galaxy Mapping",
    chiefScientist: "Dr. Aris Thorne",
    duration: "48 Observation Hours",
    level: "Tier 1 Access",
    rating: 4.9,
    participants: 450,
    category: "Astrophotography",
    price: "$299.00",
    description: "Utilize the Lumina-A1 array to map high-redshift galaxies in the Boötes constellation."
  },
  {
    id: 2,
    title: "Exoplanet Atmosphere Analysis",
    chiefScientist: "Sarah Kepler",
    duration: "12 Weeks Mission",
    level: "Advanced",
    rating: 4.8,
    participants: 120,
    category: "Spectroscopy",
    price: "$450.00",
    description: "Identify chemical signatures in the atmospheres of TRAPPIST-1 system planets."
  },
  {
    id: 3,
    title: "Solar Flare Monitoring",
    chiefScientist: "James Helios",
    duration: "Continuous Access",
    level: "Public Tier",
    rating: 4.7,
    participants: 3100,
    category: "Heliophysics",
    price: "$49.99",
    description: "Real-time monitoring of solar activity and its effects on the Earth's magnetosphere."
  },
  {
    id: 4,
    title: "Nebula Hydrogen Imaging",
    chiefScientist: "Emily Orion",
    duration: "24 Observation Hours",
    level: "Tier 2 Access",
    rating: 4.9,
    participants: 890,
    category: "Astrophotography",
    price: "$199.00",
    description: "Capture high-resolution narrowband data of the Eagle Nebula’s star-forming regions."
  },
  {
    id: 5,
    title: "Lunar Surface Reconnaissance",
    chiefScientist: "Michael Selene",
    duration: "8 Weeks Mission",
    level: "Beginner",
    rating: 4.6,
    participants: 2100,
    category: "Planetary Science",
    price: "$75.00",
    description: "High-resolution mapping of the lunar South Pole for future habitat site selection."
  }
];

export default function App() {
  const [view, setView] = useState('landing'); 
  const [user, setUser] = useState(null);
  const [activeMissions, setActiveMissions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const THEME = {
    primary: '#556B2F',
    primaryHover: '#3D4D21',
    light: '#F4F5F0',
    accent: '#808000',
    dark: '#283618'
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ name: "Cmdr. Jane Doe", email: "jane@observatory.org", avatar: "JD" });
    setView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setView('landing');
  };

  const reserveMission = (mission) => {
    if (!activeMissions.find(m => m.id === mission.id)) {
      setActiveMissions([...activeMissions, mission]);
    }
    setView('my-missions');
  };

  const filteredMissions = MISSIONS_DATA.filter(mission => 
    mission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mission.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Navigation = () => (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('landing')}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: THEME.primary }}>
              <span className="text-white text-lg font-bold">🛰️</span>
            </div>
            <span className="text-xl font-bold tracking-tight uppercase" style={{ color: THEME.dark }}>Lumina Space</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {user ? (
              <>
                <button onClick={() => setView('dashboard')} className={`text-sm font-medium transition-colors ${view === 'dashboard' ? '' : 'text-stone-600 hover:text-stone-900'}`} style={view === 'dashboard' ? { color: THEME.primary } : {}}>Catalog</button>
                <button onClick={() => setView('my-missions')} className={`text-sm font-medium transition-colors ${view === 'my-missions' ? '' : 'text-stone-600 hover:text-stone-900'}`} style={view === 'my-missions' ? { color: THEME.primary } : {}}>My Missions</button>
                <button onClick={() => setView('feedback')} className={`text-sm font-medium transition-colors ${view === 'feedback' ? '' : 'text-stone-600 hover:text-stone-900'}`} style={view === 'feedback' ? { color: THEME.primary } : {}}>Mission Debrief</button>
                <div className="h-4 w-px bg-stone-200"></div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">
                    {user.avatar}
                  </div>
                  <button onClick={handleLogout} className="text-stone-400 hover:text-red-600 transition-colors text-sm font-medium">
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <button onClick={() => setView('login')} className="text-sm font-medium text-stone-600 hover:text-stone-900">Operator Login</button>
                <button 
                  onClick={() => setView('login')} 
                  className="text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-sm active:scale-95"
                  style={{ backgroundColor: THEME.primary }}
                >
                  Join Research
                </button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-stone-600 font-bold">
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 p-4 space-y-4 animate-in slide-in-from-top duration-200">
           {user ? (
              <>
                <button onClick={() => {setView('dashboard'); setIsMobileMenuOpen(false)}} className="block w-full text-left font-medium p-2 rounded-lg hover:bg-stone-50">Observation Catalog</button>
                <button onClick={() => {setView('my-missions'); setIsMobileMenuOpen(false)}} className="block w-full text-left font-medium p-2 rounded-lg hover:bg-stone-50">Active Missions</button>
                <button onClick={handleLogout} className="block w-full text-left font-medium text-red-600 p-2">Abort Session</button>
              </>
           ) : (
              <button 
                onClick={() => {setView('login'); setIsMobileMenuOpen(false)}} 
                className="block w-full text-white p-3 rounded-lg text-center font-bold"
                style={{ backgroundColor: THEME.primary }}
              >
                Log In
              </button>
           )}
        </div>
      )}
    </nav>
  );

  const LandingPage = () => (
    <div className="min-h-screen">
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-800 text-xs font-bold mb-6 border border-green-100">
            <span className="animate-pulse">🔴</span>
            LIVE FEED: SUPERNOVA DETECTED IN M101
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight" style={{ color: THEME.dark }}>
            Observe the Unseen <br/><span style={{ color: THEME.primary }}>Lumina Deep Space</span>
          </h1>
          <p className="text-xl text-stone-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Pioneering research missions by Ishant Singh for the global scientific community. Access Earth-based and Orbital arrays to map the universe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setView('login')}
              className="px-8 py-4 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: THEME.primary }}
            >
              Start Your Mission →
            </button>
            <button className="px-8 py-4 bg-white text-stone-600 border border-stone-200 rounded-xl font-bold hover:border-stone-400 transition-all">
              Telescope Specs
            </button>
          </div>
        </div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
           <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-green-200 blur-[120px] rounded-full"></div>
           <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-yellow-100 blur-[120px] rounded-full"></div>
        </div>
      </section>

      <section className="bg-stone-50 py-12 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale contrast-125">
          <span className="text-2xl font-black italic">ISHANT SPACE</span>
          <span className="text-2xl font-bold flex items-center gap-2">🌍 NASA</span>
          <span className="text-2xl font-bold flex items-center gap-2">🛰️ ESA</span>
          <span className="text-2xl font-bold">SPACEX</span>
          <span className="text-2xl font-bold">SETI</span>
        </div>
      </section>
    </div>
  );

  const LoginPage = () => (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#F9FAF7] p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-stone-100">
        <div className="text-center mb-10">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl" style={{ backgroundColor: THEME.primary }}>
            🔭
          </div>
          <h2 className="text-3xl font-bold" style={{ color: THEME.dark }}>Mission Control</h2>
          <p className="text-stone-500 mt-2 font-medium">Authentication required for telescope access.</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1.5 ml-1">Callsign / Email</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 outline-none transition-all"
              style={{ '--tw-ring-color': THEME.primary }}
              placeholder="ishant@observatory.org"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1.5 ml-1">Secure Key</label>
            <input 
              type="password" 
              required
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 outline-none transition-all"
              style={{ '--tw-ring-color': THEME.primary }}
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-4 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 mt-4"
            style={{ backgroundColor: THEME.primary }}
          >
            Authenticate Session
          </button>
        </form>
      </div>
    </div>
  );

  const MissionCard = ({ mission, isEnrolled }) => (
    <div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
      <div className="h-44 bg-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: `linear-gradient(135deg, ${THEME.primary} 0%, ${THEME.accent} 100%)` }}></div>
        <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-40">
           🚀
        </div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm" style={{ color: THEME.primary }}>
          {mission.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1 text-amber-500 mb-2">
          <span>⭐</span>
          <span className="text-xs font-bold text-stone-700">{mission.rating}</span>
          <span className="text-stone-400 font-normal ml-1">({mission.participants} observers)</span>
        </div>
        <h3 className="font-bold text-stone-900 mb-1 group-hover:text-green-800 transition-colors line-clamp-1 text-lg">{mission.title}</h3>
        <p className="text-sm text-stone-500 mb-4 font-medium">Chief Scientist: {mission.chiefScientist}</p>
        <p className="text-sm text-stone-600 line-clamp-2 mb-6 h-10 leading-relaxed italic">
          "{mission.description}"
        </p>
        
        <div className="flex items-center justify-between pt-5 border-t border-stone-100">
          <span className="font-bold text-stone-900 text-lg">{mission.price}</span>
          {isEnrolled ? (
            <div className="flex items-center gap-1.5 text-emerald-700 text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full">
              ✓ Reserved
            </div>
          ) : (
            <button 
              onClick={() => reserveMission(mission)}
              className="text-sm font-bold flex items-center gap-1 transition-all group-hover:gap-2"
              style={{ color: THEME.primary }}
            >
              Begin Research ›
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl font-black mb-3" style={{ color: THEME.dark }}>Observation Catalog</h2>
          <p className="text-stone-500 text-lg">Select a celestial mission to begin your research.</p>
        </div>
        <div className="relative w-full md:w-[400px]">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">🔍</span>
          <input 
            type="text" 
            placeholder="Search planets, stars, arrays..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-5 py-4 bg-white border border-stone-200 rounded-2xl focus:ring-2 outline-none shadow-sm transition-all"
            style={{ '--tw-ring-color': THEME.primary }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredMissions.map(mission => (
          <MissionCard 
            key={mission.id} 
            mission={mission} 
            isEnrolled={activeMissions.some(m => m.id === mission.id)} 
          />
        ))}
      </div>
    </div>
  );

  const MyMissions = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-black mb-3" style={{ color: THEME.dark }}>Active Research Log</h2>
        <p className="text-stone-500 text-lg">Current data streams and ongoing celestial observations.</p>
      </div>

      {activeMissions.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activeMissions.map(mission => (
            <div key={mission.id} className="bg-white p-8 rounded-3xl border border-stone-200 flex flex-col md:flex-row gap-8 items-center hover:border-stone-300 transition-all shadow-sm">
              <div className="w-28 h-28 rounded-2xl flex items-center justify-center shrink-0 shadow-inner text-4xl" style={{ backgroundColor: THEME.light }}>
                 ⚡
              </div>
              <div className="flex-1 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest text-white" style={{ backgroundColor: THEME.accent }}>Data Syncing</span>
                </div>
                <h3 className="font-bold text-stone-900 text-xl mb-2">{mission.title}</h3>
                <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden mb-5">
                  <div className="h-full transition-all duration-1000" style={{ width: '68%', backgroundColor: THEME.primary }}></div>
                </div>
                <div className="flex items-center justify-between">
                   <span className="text-sm text-stone-500 font-bold">Signal: 68% Clear</span>
                   <button className="text-sm font-bold transition-all hover:scale-105" style={{ color: THEME.primary }}>Open Lens View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-stone-200">
           <div className="text-6xl opacity-20 mb-6">🔭</div>
           <h3 className="text-2xl font-bold text-stone-900 mb-3">No active observations</h3>
           <p className="text-stone-500 mb-10 max-w-sm mx-auto">The sky is clear, but your sensors are idle. Select a mission to start collecting cosmic data.</p>
           <button 
             onClick={() => setView('dashboard')}
             className="text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-stone-100 active:scale-95"
             style={{ backgroundColor: THEME.primary }}
           >
             Open Catalog
           </button>
        </div>
      )}
    </div>
  );

  const FeedbackView = () => (
    <div className="max-w-2xl mx-auto px-4 py-16">
      {!feedbackSubmitted ? (
        <div className="bg-white p-12 rounded-3xl shadow-2xl border border-stone-100 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 opacity-5 rounded-full" style={{ backgroundColor: THEME.primary }}></div>
          
          <div className="text-center mb-10 relative">
            <div className="text-5xl mb-4" style={{ color: THEME.primary }}>💬</div>
            <h2 className="text-3xl font-black" style={{ color: THEME.dark }}>Observation Debrief</h2>
            <p className="text-stone-500 mt-2 font-medium">Report anomalies or provide feedback to Ishant Singh's team.</p>
          </div>
          <form onSubmit={(e) => {e.preventDefault(); setFeedbackSubmitted(true)}} className="space-y-6">
            <div className="flex flex-col items-center gap-3">
              <label className="text-sm font-bold text-stone-700">Data Quality Rating</label>
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button type="button" key={star} className="text-2xl text-stone-200 hover:text-amber-400 transition-colors transform hover:scale-110">
                    ⭐
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2 ml-1">Mission Identifier</label>
              <select className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:ring-2 transition-all" style={{ '--tw-ring-color': THEME.primary }}>
                <option>System Infrastructure</option>
                {activeMissions.map(m => <option key={m.id}>{m.title}</option>)}
                <option>Telescope Array Maintenance</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2 ml-1">Research Findings / Notes</label>
              <textarea 
                rows="5"
                className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:ring-2 transition-all"
                style={{ '--tw-ring-color': THEME.primary }}
                placeholder="Describe your research findings or platform experience..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-5 text-white rounded-2xl font-bold transition-all shadow-xl active:scale-95"
              style={{ backgroundColor: THEME.primary }}
            >
              Transmit Report
            </button>
          </form>
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-3xl shadow-xl border border-stone-100 animate-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-50 text-green-700 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl">
            ✓
          </div>
          <h2 className="text-3xl font-black mb-3" style={{ color: THEME.dark }}>Transmission Success</h2>
          <p className="text-stone-500 mb-10 max-w-sm mx-auto text-lg">Your mission report has been securely uplinked to the Lumina Database.</p>
          <button 
            onClick={() => {setFeedbackSubmitted(false); setView('dashboard')}}
            className="font-bold hover:underline transition-all"
            style={{ color: THEME.primary }}
          >
            Return to Mission Control
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen font-sans selection:bg-green-100 text-stone-900" style={{ backgroundColor: THEME.light + '40' }}>
      <Navigation />
      
      <main className="pb-20">
        {view === 'landing' && <LandingPage />}
        {view === 'login' && <LoginPage />}
        {view === 'dashboard' && <Dashboard />}
        {view === 'my-missions' && <MyMissions />}
        {view === 'feedback' && <FeedbackView />}
      </main>

      <footer className="border-t border-stone-200 bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: THEME.primary }}>
                  <span className="text-white">🛰️</span>
                </div>
                <span className="text-lg font-black tracking-tight uppercase" style={{ color: THEME.primary }}>Lumina Observatory</span>
              </div>
              <p className="text-stone-400 text-sm max-w-xs">An advanced research ecosystem for professional and amateur astronomers alike.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-400">❤️</span>
                <span className="text-stone-600 font-bold">Created by Ishant Singh</span>
              </div>
              <p className="text-stone-400 text-xs tracking-widest uppercase">Lead Systems Architect</p>
            </div>

            <div className="flex gap-8 text-sm font-bold text-stone-500">
              <a href="#" className="hover:text-green-800 transition-colors">Satellite Tracking</a>
              <a href="#" className="hover:text-green-800 transition-colors">Data API</a>
              <a href="#" className="hover:text-green-800 transition-colors">Uplink Contact</a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-stone-100 text-center">
             <p className="text-xs text-stone-400 font-medium">© 2024 Lumina Space Exploration Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}