"use client";
import React, { useEffect, useState, useRef } from "react";

const projects = [
  {
    id: 1, title: "HeartWatch", subtitle: "Early Detection of Heart Failure",
    org: "Illinois Institute of Technology", year: "2024",
    desc: "Boosted early-detection rate by 18% by engineering 20+ clinical features and training SVM, MLP, and CNN classifiers on 100K+ Medicare records. Achieved 0.87 AUC and 82% recall.",
    tags: ["Python", "scikit-learn", "Keras", "SQL", "AWS"], stat: "0.87 AUC",
    statLabel: "Best AUC Score", highlight: "100K+ Records Analyzed"
  },
  {
    id: 2, title: "PropMind", subtitle: "Intelligent Property Management",
    org: "Illinois Institute of Technology", year: "2024",
    desc: "Designed a normalized SQLite model across 8+ tables. Integrated LangChain and LlamaIndex for natural-language Q&A. Cut query latency by 50% and saved 10+ hrs/month.",
    tags: ["SQLite", "LangChain", "LlamaIndex", "Python"], stat: "50% FASTER",
    statLabel: "Query Latency Reduction", highlight: "10+ Hours Saved / Month"
  },
  {
    id: 3, title: "MaskScan", subtitle: "Temperature & Mask Entry System",
    org: "GITAM University", year: "2023",
    desc: "Trained a CNN in Keras/TensorFlow to 85% validation accuracy on mask detection from 1,000+ real-time Arduino sensor readings. Cut manual check time by 15 seconds per person.",
    tags: ["CNN", "TensorFlow", "Arduino", "Power BI"], stat: "85% ACCURACY",
    statLabel: "Real-time Detection", highlight: "-15s Per Person Check"
  },
  {
    id: 4, title: "SleepIQ", subtitle: "Sleep Quality Assessment via EMA",
    org: "GITAM University", year: "2022",
    desc: "Built a supervised classifier on 2,000+ EMA records predicting sleep quality at 84% accuracy. Feature engineering lifted F1-score by 12 points over baseline.",
    tags: ["Python", "scikit-learn", "pandas", "Tableau", "Excel"], stat: "+12 F1 PTS",
    statLabel: "F1-Score Lift", highlight: "2,000+ Records Predicted"
  }
];

const certifications = [
  { title: "Foundations of Prompt Engineering", issuer: "Amazon Web Services", date: "June 2026", color: "#00e5ff" },
  { title: "Claude 101", issuer: "Anthropic", date: "2026", color: "#b5179e" },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte", date: "June 2026", color: "#3a86ff" },
];

// SVGs updated for Vibrant Dark Theme
const HeartWatchMockup = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full max-w-md drop-shadow-[0_0_30px_rgba(0,229,255,0.2)] opacity-0 animate-slide-up-slow" style={{ animationFillMode: 'forwards', animationDelay: '0.5s' }}>
    <rect width="400" height="300" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="2" />
    <path d="M50 150 L100 150 L120 100 L150 220 L180 80 L200 150 L350 150" fill="none" stroke="#00e5ff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 8px rgba(0,229,255,0.6))' }} />
    <circle cx="180" cy="80" r="8" fill="#ffffff" />
  </svg>
);

const PropMindMockup = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full max-w-md drop-shadow-[0_0_30px_rgba(181,23,158,0.2)] opacity-0 animate-slide-up-slow" style={{ animationFillMode: 'forwards', animationDelay: '0.5s' }}>
    <rect width="400" height="300" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="2" />
    <rect x="40" y="40" width="200" height="44" rx="22" fill="#18181b" />
    <rect x="160" y="100" width="200" height="44" rx="22" fill="#b5179e" style={{ filter: 'drop-shadow(0 0 10px rgba(181,23,158,0.4))' }} />
    <rect x="40" y="160" width="250" height="44" rx="22" fill="#18181b" />
    <rect x="220" y="220" width="140" height="44" rx="22" fill="#00e5ff" style={{ filter: 'drop-shadow(0 0 10px rgba(0,229,255,0.4))' }} />
  </svg>
);

const MaskScanMockup = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full max-w-md drop-shadow-[0_0_30px_rgba(58,134,255,0.2)] opacity-0 animate-slide-up-slow" style={{ animationFillMode: 'forwards', animationDelay: '0.5s' }}>
    <rect width="400" height="300" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="2" />
    <rect x="100" y="50" width="200" height="200" fill="none" stroke="#3a86ff" strokeWidth="4" strokeDasharray="10 10" style={{ filter: 'drop-shadow(0 0 8px rgba(58,134,255,0.5))' }} />
    <circle cx="160" cy="120" r="10" fill="#00e5ff" />
    <circle cx="240" cy="120" r="10" fill="#00e5ff" />
    <path d="M160 180 Q200 220 240 180" fill="none" stroke="#ffffff" strokeWidth="4" />
    <rect x="100" y="220" width="200" height="30" fill="#3a86ff" opacity="0.3" />
  </svg>
);

export default function App() {
  const [viewState, setViewState] = useState<'landing' | 'reel' | 'portfolio'>('landing');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Inter:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }
        body { background-color: #050505; color: #f8fafc; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #27272a; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #00e5ff; }
        
        .font-display { font-family: 'Outfit', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        
        @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
        @keyframes slideUp { from{opacity:0;transform:translateY(40px);} to{opacity:1;transform:translateY(0);} }
        @keyframes scaleIn { from{opacity:0;transform:scale(0.9);} to{opacity:1;transform:scale(1);} }
        @keyframes progress { from{width:0%;} to{width:100%;} }
        @keyframes pulseGlow { 0%{opacity:0.5;} 50%{opacity:0.8;} 100%{opacity:0.5;} }
        
        .animate-fade-in { animation: fadeIn 1s ease forwards; }
        .animate-slide-up { animation: slideUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .animate-slide-up-slow { animation: slideUp 1.2s cubic-bezier(0.16,1,0.3,1) forwards; }
        .animate-scale-in { animation: scaleIn 1.5s cubic-bezier(0.16,1,0.3,1) forwards; }
        
        /* Vibrant Dark Mode Buttons & Links */
        .nav-link { font-size:12px; letter-spacing:0.15em; color:#a1a1aa; text-decoration:none; text-transform:uppercase; transition:all 0.3s; }
        .nav-link:hover { color:#00e5ff; text-shadow: 0 0 10px rgba(0,229,255,0.4); }
        
        .btn-solid { display:inline-block; background:linear-gradient(135deg, #00e5ff, #3a86ff); color:#000; padding:14px 40px; font-size:12px; font-weight:600; letter-spacing:0.15em; text-decoration:none; text-transform:uppercase; transition:all 0.3s; border-radius:4px; border:none; cursor:pointer; }
        .btn-solid:hover { transform:translateY(-2px); box-shadow: 0 10px 20px -10px rgba(0,229,255,0.6); }
        
        .btn-outline { display:inline-block; border:1px solid #27272a; color:#f8fafc; padding:14px 40px; font-size:12px; letter-spacing:0.15em; text-decoration:none; text-transform:uppercase; transition:all 0.3s; background:transparent; border-radius:4px; cursor:pointer; }
        .btn-outline:hover { border-color:#00e5ff; color:#00e5ff; transform:translateY(-2px); box-shadow: 0 0 15px rgba(0,229,255,0.2); }
        
        .text-glow { text-shadow: 0 0 20px rgba(0, 229, 255, 0.4); }
        .text-glow-purple { text-shadow: 0 0 20px rgba(181, 23, 158, 0.4); }
      `}</style>

      {viewState === 'landing' && <LandingScreen onStartReel={() => setViewState('reel')} onSkip={() => setViewState('portfolio')} />}
      {viewState === 'reel' && <CinematicReel onComplete={() => setViewState('portfolio')} onSkip={() => setViewState('portfolio')} />}
      {viewState === 'portfolio' && <PortfolioSite />}
    </>
  );
}

function LandingScreen({ onStartReel, onSkip }: { onStartReel: () => void, onSkip: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-[#f8fafc] font-sans relative overflow-hidden">
      {/* Neon glowing orbs in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00e5ff] rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b5179e] rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-screen" />
      
      <div className="text-center z-10 animate-slide-up">
        <h1 className="font-display text-5xl md:text-8xl font-bold mb-4 tracking-tight">
          Vamshidhar <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#3a86ff]">Ereddy</span>
        </h1>
        <p className="text-[#a1a1aa] tracking-[0.3em] uppercase text-sm mb-12 font-medium">Data Scientist · ML Engineer</p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button onClick={onStartReel} className="btn-solid flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Play Cinematic Tour (60s)
          </button>
          <button onClick={onSkip} className="text-[#71717a] hover:text-[#00e5ff] transition-all text-xs tracking-widest uppercase pb-1 border-b border-transparent hover:border-[#00e5ff]">
            Skip to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

function CinematicReel({ onComplete, onSkip }: { onComplete: () => void, onSkip: () => void }) {
  const [slide, setSlide] = useState(0);
  
  const timings = [8000, 14000, 15000, 13000, 10000]; // Total 60s

  useEffect(() => {
    if (slide >= timings.length) {
      onComplete();
      return;
    }
    const timer = setTimeout(() => {
      setSlide(prev => prev + 1);
    }, timings[slide]);
    
    return () => clearTimeout(timer);
  }, [slide, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#050505] overflow-hidden flex flex-col font-sans select-none">
      {/* Top Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#18181b] z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#00e5ff] to-[#b5179e]"
          style={{ 
            animation: `progress ${timings[slide]}ms linear forwards`,
            key: slide
          }} 
        />
      </div>

      <button onClick={onSkip} className="absolute top-8 right-8 z-50 text-[#71717a] text-[10px] tracking-widest uppercase opacity-80 hover:text-[#00e5ff] hover:opacity-100 transition-colors">
        Skip Tour
      </button>

      <div className="flex-1 relative w-full h-full flex items-center justify-center">
        {slide === 0 && <SlideIntro />}
        {slide === 1 && <SlideProject project={projects[0]} Mockup={HeartWatchMockup} align="left" glow="#00e5ff" />}
        {slide === 2 && <SlideProject project={projects[1]} Mockup={PropMindMockup} align="right" glow="#b5179e" />}
        {slide === 3 && <SlideProject project={projects[2]} Mockup={MaskScanMockup} align="left" glow="#3a86ff" />}
        {slide === 4 && <SlideOutro onComplete={onComplete} />}
      </div>
    </div>
  );
}

function SlideIntro() {
  return (
    <div className="text-center w-full max-w-5xl px-8 flex flex-col items-center justify-center h-full text-[#f8fafc] relative">
      <div className="font-display text-4xl font-bold tracking-[0.2em] mb-12 opacity-0 animate-scale-in text-[#27272a]" style={{ animationDelay: '0.2s' }}>
        VRE
      </div>
      <div className="overflow-hidden">
        <h1 className="font-display text-6xl md:text-8xl font-bold leading-tight opacity-0" style={{ animation: 'slideUp 1s 0.8s forwards' }}>
          Vamshidhar Reddy
        </h1>
      </div>
      <div className="overflow-hidden mt-6">
        <h2 className="text-sm md:text-lg tracking-[0.4em] uppercase text-[#00e5ff] opacity-0 text-glow" style={{ animation: 'slideUp 1s 1.2s forwards' }}>
          Data Scientist · ML Engineer
        </h2>
      </div>
      <div className="absolute bottom-20 opacity-0" style={{ animation: 'fadeIn 2s 2s forwards' }}>
        <p className="font-display text-2xl text-[#a1a1aa]">"Raw data is just noise... until you make it <span className="text-[#f8fafc]">speak clearly</span>."</p>
      </div>
    </div>
  );
}

function SlideProject({ project, Mockup, align, glow }: any) {
  const isLeft = align === 'left';
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center p-12 gap-12 md:gap-24 relative overflow-hidden bg-[#050505]">
      {/* Background radial glow */}
      <div className={`absolute w-full h-full opacity-10 pointer-events-none mix-blend-screen`} style={{ background: `radial-gradient(circle at ${isLeft ? '20%' : '80%'} 50%, ${glow} 0%, transparent 50%)` }} />
      
      <div className={`w-full md:w-1/2 flex justify-center z-10 ${isLeft ? 'order-1' : 'order-2'}`}>
         <Mockup />
      </div>

      <div className={`w-full md:w-1/2 flex flex-col justify-center z-10 ${isLeft ? 'order-2' : 'order-1'} text-left`}>
        <div className="opacity-0 animate-slide-up text-[#a1a1aa] text-xs tracking-[0.3em] uppercase mb-4 font-semibold" style={{ animationDelay: '0.3s' }}>
          {project.title}
        </div>
        <h2 className="opacity-0 animate-slide-up font-display text-6xl md:text-8xl font-bold leading-none mb-4" style={{ color: glow, animationDelay: '0.6s' }}>
          {project.stat}
        </h2>
        <div className="opacity-0 animate-slide-up text-sm tracking-widest uppercase mb-10 text-[#f8fafc]" style={{ animationDelay: '0.9s' }}>
          {project.statLabel}
        </div>
        
        <div className="opacity-0 animate-slide-up pl-6 border-l-2 mb-10" style={{ borderColor: glow, animationDelay: '1.2s' }}>
          <p className="font-display text-3xl mb-3 font-semibold text-[#f8fafc]">{project.highlight}</p>
          <p className="text-base text-[#a1a1aa] max-w-md leading-relaxed">{project.desc.split('.')[0]}.</p>
        </div>

        <div className="flex flex-wrap gap-3 opacity-0 animate-slide-up" style={{ animationDelay: '1.5s' }}>
          {project.tags.slice(0,4).map((t: string) => (
            <span key={t} className="bg-[#18181b] border border-[#27272a] text-xs font-medium uppercase tracking-wider px-4 py-2 rounded text-[#a1a1aa]">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideOutro({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="text-center w-full max-w-2xl px-8 flex flex-col items-center justify-center h-full text-[#f8fafc]">
      <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }} />
      <h2 className="font-display text-5xl md:text-7xl font-bold mb-10 opacity-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
        Let's build <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#b5179e]">something together.</span>
      </h2>
      <div className="space-y-4 mb-12 opacity-0 animate-slide-up text-sm tracking-widest text-[#a1a1aa] font-medium" style={{ animationDelay: '1s' }}>
        <p>EREDDYVAMSHIDHARREDDY@GMAIL.COM</p>
        <p>HYDERABAD · AVAILABLE GLOBALLY</p>
      </div>
      <button 
        onClick={onComplete}
        className="opacity-0 animate-slide-up btn-solid" 
        style={{ animationDelay: '1.5s' }}
      >
        Enter Full Portfolio
      </button>
    </div>
  );
}

function PortfolioSite() {
  const [activeProject, setActiveProject] = useState<null | (typeof projects)[0]>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans text-[#f8fafc] bg-[#050505] min-h-screen overflow-x-hidden animate-fade-in selection:bg-[#00e5ff] selection:text-black">
      
      {/* Background ambient light */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,_rgba(0,229,255,0.05),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(181,23,158,0.05),_transparent_40%)]" />

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.5rem 4rem",
        background: scrolled ? "rgba(5, 5, 5, 0.8)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(39, 39, 42, 0.5)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "all 0.4s",
      }}>
        <div className="font-display text-2xl font-bold tracking-[0.2em] text-[#f8fafc]">VRE<span className="text-[#00e5ff]">.</span></div>
        <div className="hidden md:flex gap-10">
          {["About", "Skills", "Projects", "Certifications", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 md:px-16 max-w-[1400px] mx-auto pt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
          <div>
            <div className="inline-block bg-[#18181b] border border-[#27272a] text-[#00e5ff] px-4 py-2 rounded-full text-[10px] tracking-[0.3em] uppercase mb-8 opacity-0 animate-slide-up" style={{animationDelay: '0.1s'}}>
              Data Scientist · ML Engineer
            </div>
            <h1 className="font-display text-6xl md:text-[90px] font-bold leading-[1.05] mb-6 opacity-0 animate-slide-up tracking-tight" style={{animationDelay: '0.2s'}}>
              Vamshidhar<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#3a86ff]">Reddy Ereddy</span>
            </h1>
            <div className="flex items-center gap-6 my-10 opacity-0 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#00e5ff] to-transparent" />
              <p className="text-lg text-[#a1a1aa] font-light leading-relaxed max-w-md">
                Turning complex data into clear,<br />high-impact decisions.
              </p>
            </div>
            <div className="flex gap-5 flex-wrap opacity-0 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <a href="#projects" className="btn-solid">View Work</a>
              <a href="#contact" className="btn-outline">Get in Touch</a>
            </div>
          </div>

          {/* Right side stats card */}
          <div className="bg-[#09090b] border border-[#27272a] p-10 md:p-14 relative opacity-0 animate-slide-up rounded-2xl shadow-2xl" style={{animationDelay: '0.5s'}}>
            <div className="text-[10px] tracking-[0.3em] text-[#a1a1aa] uppercase mb-8 font-semibold">At a Glance</div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "4+", l: "ML Projects", color: "#00e5ff" },
                { n: "100K+", l: "Records Analyzed", color: "#b5179e" },
                { n: "0.87", l: "Best AUC Score", color: "#3a86ff" },
                { n: "3", l: "Certifications", color: "#00e5ff" },
              ].map(s => (
                <div key={s.l} className="bg-[#18181b] border border-[#27272a] p-8 text-center transition-all hover:border-gray-500 hover:-translate-y-1 rounded-xl">
                  <div className="font-display text-4xl font-bold leading-none mb-3" style={{ color: s.color }}>{s.n}</div>
                  <div className="text-[10px] text-[#a1a1aa] tracking-[0.1em] uppercase font-medium">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 border-t border-[#27272a] pt-8">
              <div className="text-[10px] text-[#71717a] tracking-[0.2em] uppercase mb-3 font-semibold">Currently</div>
              <div className="font-display text-xl text-[#f8fafc] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse"></span>
                Open to opportunities worldwide
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      {/* ABOUT */}
      <section id="about" className="py-32 px-6 md:px-16 bg-[#09090b] border-t border-[#18181b] relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24">
          <div>
            <div className="text-[11px] font-bold tracking-[0.4em] text-[#00e5ff] uppercase">01 — About</div>
            <div className="w-12 h-1 bg-gradient-to-r from-[#00e5ff] to-transparent mt-4" />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
              I make data <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#3a86ff]">speak clearly.</span>
            </h2>
            <p className="text-lg text-[#a1a1aa] leading-[1.9] font-light max-w-3xl">
              Computer Science graduate with hands-on expertise in data analytics, business intelligence, and machine learning. From 100K+ Medicare records to real-time IoT sensor streams — I build end-to-end systems that transform raw noise into strategic clarity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16 max-w-3xl">
              {[
                { label: "Education", value: "M.S. CS · IIT Chicago" },
                { label: "Based in", value: "Hyderabad, India" },
                { label: "Available", value: "Globally · Remote / On-site" },
                { label: "Focus", value: "ML · Data Science · Analytics" },
              ].map(item => (
                <div key={item.label} className="bg-[#18181b] p-6 border border-[#27272a] rounded-lg">
                  <div className="text-[10px] font-semibold tracking-[0.25em] text-[#71717a] uppercase mb-2">{item.label}</div>
                  <div className="font-display text-xl text-[#f8fafc] font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32 px-6 md:px-16 border-t border-[#18181b] relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24">
          <div>
            <div className="text-[11px] font-bold tracking-[0.4em] text-[#b5179e] uppercase">02 — Skills</div>
            <div className="w-12 h-1 bg-gradient-to-r from-[#b5179e] to-transparent mt-4" />
          </div>
          <div className="flex flex-col gap-14">
            {[
              { label: "Analysis & Visualization", skills: ["SQL", "Python", "pandas", "NumPy", "Power BI", "Tableau", "Excel"], glow: "hover:border-[#00e5ff] hover:text-[#00e5ff]" },
              { label: "Machine Learning", skills: ["scikit-learn", "Keras", "TensorFlow", "SVM", "CNN", "MLP", "A/B Testing"], glow: "hover:border-[#b5179e] hover:text-[#b5179e]" },
              { label: "Data Engineering", skills: ["ETL Pipelines", "AWS", "LangChain", "LlamaIndex", "Prompt Engineering"], glow: "hover:border-[#3a86ff] hover:text-[#3a86ff]" },
              { label: "Tools & Platforms", skills: ["GitHub", "Docker", "Kubernetes", "VS Code", "Jupyter", "Scrum/Agile"], glow: "hover:border-[#f8fafc] hover:text-[#f8fafc]" },
            ].map(group => (
              <div key={group.label}>
                <div className="text-[11px] font-semibold tracking-[0.2em] text-[#a1a1aa] uppercase mb-5">{group.label}</div>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map(s => (
                    <span key={s} className={`bg-[#09090b] border border-[#27272a] text-[#d4d4d8] px-5 py-2.5 rounded-md text-sm font-medium tracking-wide transition-all duration-300 cursor-default ${group.glow} hover:-translate-y-1 hover:bg-[#18181b]`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      {/* PROJECTS */}
      <section id="projects" className="py-32 px-6 md:px-16 bg-[#09090b] border-t border-[#18181b] relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24">
          <div>
            <div className="text-[11px] font-bold tracking-[0.4em] text-[#00e5ff] uppercase">03 — Projects</div>
            <div className="w-12 h-1 bg-gradient-to-r from-[#00e5ff] to-transparent mt-4" />
            <p className="text-[12px] text-[#a1a1aa] mt-8 leading-relaxed font-medium bg-[#18181b] inline-block p-4 rounded-lg border border-[#27272a]">
              Click any project<br />to view details
            </p>
          </div>
          <div>
            <div className="hidden md:grid grid-cols-[80px_1fr_140px_120px] gap-6 pb-6 border-b border-[#27272a] text-[10px] font-bold tracking-[0.25em] text-[#71717a] uppercase">
              <div>Year</div><div>Project</div><div>Result</div><div>Domain</div>
            </div>
            {projects.map(p => (
              <div key={p.id} onClick={() => setActiveProject(p as any)} onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)}
                className="grid grid-cols-1 md:grid-cols-[80px_1fr_140px_120px] gap-3 md:gap-6 items-center py-10 border-b border-[#18181b] cursor-pointer transition-all duration-300 hover:px-6 hover:bg-[#18181b] hover:border-[#27272a] rounded-lg">
                <div className="text-sm font-medium text-[#71717a]">{p.year}</div>
                <div>
                  <div className={`font-display text-3xl font-bold transition-colors duration-300 ${hovered === p.id ? "text-[#00e5ff]" : "text-[#f8fafc]"}`}>{p.title}</div>
                  <div className="text-sm text-[#a1a1aa] mt-2 font-light">{p.subtitle}</div>
                </div>
                <div className="font-display text-xl font-bold text-[#b5179e]">{p.stat}</div>
                <div className="hidden md:block text-xs font-medium text-[#71717a] tracking-wider uppercase border border-[#27272a] px-3 py-1 rounded-full text-center">ML · Data</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-32 px-6 md:px-16 border-t border-[#18181b] relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24">
          <div>
            <div className="text-[11px] font-bold tracking-[0.4em] text-[#3a86ff] uppercase">04 — Certs</div>
            <div className="w-12 h-1 bg-gradient-to-r from-[#3a86ff] to-transparent mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map(cert => (
              <div key={cert.title} className="bg-[#09090b] border border-[#27272a] p-8 rounded-xl transition-all duration-300 hover:border-gray-500 hover:-translate-y-2 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity blur-2xl" style={{ backgroundColor: cert.color }} />
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-8 bg-[#18181b] border border-[#27272a]">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: cert.color, boxShadow: `0 0 10px ${cert.color}` }} />
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#a1a1aa] uppercase mb-3">{cert.issuer}</div>
                <div className="font-display text-2xl font-bold text-[#f8fafc] leading-tight mb-8">{cert.title}</div>
                <div className="h-[1px] w-full bg-[#27272a] mb-6" />
                <div className="text-xs font-medium text-[#71717a] uppercase tracking-wider">Completed · {cert.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-32 px-6 md:px-16 bg-[#09090b] border-t border-[#18181b] relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24">
          <div>
            <div className="text-[11px] font-bold tracking-[0.4em] text-[#b5179e] uppercase">05 — Education</div>
            <div className="w-12 h-1 bg-gradient-to-r from-[#b5179e] to-transparent mt-4" />
          </div>
          <div className="flex flex-col gap-10">
            {[
              { deg: "Master of Science, Computer Science", school: "Illinois Institute of Technology", loc: "Chicago, USA", year: "2023 – 2025", color: "#00e5ff" },
              { deg: "B.Tech, Computer Science & Engineering", school: "GITAM University", loc: "Hyderabad, India", year: "2019 – 2023", color: "#b5179e" },
            ].map((e, i) => (
              <div key={e.deg} className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 bg-[#18181b] border border-[#27272a] rounded-xl hover:border-gray-600 transition-colors">
                <div>
                  <div className="font-display text-2xl font-bold text-[#f8fafc] mb-2">{e.deg}</div>
                  <div className="text-sm text-[#a1a1aa] font-medium">{e.school} <span className="mx-2 text-[#27272a]">|</span> {e.loc}</div>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 bg-[#09090b] border border-[#27272a] rounded-md text-xs font-bold tracking-widest uppercase" style={{ color: e.color }}>
                  {e.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      {/* CONTACT */}
      <section id="contact" className="py-40 px-6 md:px-16 border-t border-[#18181b] relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#18181b] border border-[#27272a] rounded-full text-[10px] font-bold tracking-[0.3em] text-[#00e5ff] uppercase mb-10">
            06 — Contact
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8">
            Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#b5179e]">something together.</span>
          </h2>
          <p className="text-lg text-[#a1a1aa] font-light leading-relaxed mb-12">
            Open to data science, ML engineering, and analytics roles worldwide.<br />Based in Hyderabad — available globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:ereddyvamshidharreddy@gmail.com" className="btn-solid">Send an Email</a>
            <a href="https://www.linkedin.com/in/ereddyvamshidharreddy" target="_blank" className="btn-outline">LinkedIn Profile</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-[#18181b] py-8 px-6 md:px-16 flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10">
        <span className="font-display text-xl font-bold text-[#f8fafc]">Vamshidhar Reddy Ereddy</span>
        <span className="text-[10px] font-semibold text-[#71717a] tracking-[0.2em] uppercase">© 2026 · Interactive Reel Portfolio</span>
      </footer>

      {/* PROJECT MODAL */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/80 z-[500] flex items-center justify-center p-6 backdrop-blur-md animate-fade-in" onClick={() => setActiveProject(null)}>
          <div className="bg-[#09090b] border border-[#27272a] max-w-2xl w-full p-10 md:p-14 relative animate-scale-in rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]" onClick={e => e.stopPropagation()}>
            <button className="absolute top-6 right-6 w-10 h-10 bg-[#18181b] border border-[#27272a] rounded-full flex items-center justify-center text-[#a1a1aa] hover:text-[#00e5ff] hover:border-[#00e5ff] transition-all" onClick={() => setActiveProject(null)}>✕</button>
            
            <div className="text-[10px] font-bold tracking-[0.3em] text-[#b5179e] uppercase mb-4">{activeProject.org} · {activeProject.year}</div>
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-3 text-[#f8fafc]">{activeProject.title}</h3>
            <div className="text-sm font-medium text-[#a1a1aa] mb-8">{activeProject.subtitle}</div>
            
            <div className="h-px w-full bg-gradient-to-r from-[#00e5ff] via-[#b5179e] to-transparent mb-8" />
            
            <div className="font-display text-3xl font-bold text-[#00e5ff] mb-6">{activeProject.stat}</div>
            <p className="text-base text-[#d4d4d8] leading-[1.8] font-light mb-10">{activeProject.desc}</p>
            
            <div className="flex flex-wrap gap-3">
              {activeProject.tags.map(t => (
                <span key={t} className="bg-[#18181b] border border-[#27272a] text-[#a1a1aa] px-4 py-2 rounded text-xs font-semibold tracking-wider uppercase">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}