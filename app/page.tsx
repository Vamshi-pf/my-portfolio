"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "HeartWatch",
    subtitle: "Early Detection of Heart Failure",
    org: "Illinois Institute of Technology",
    desc: "Boosted early-detection rate by 18% by engineering 20+ clinical features and training SVM, MLP, and CNN classifiers on 100K+ Medicare records. Achieved 0.87 AUC and 82% recall.",
    tags: ["Python", "scikit-learn", "Keras", "SQL", "AWS", "Power BI"],
    color: "#00ff9f",
    stat: "0.87 AUC",
  },
  {
    id: 2,
    title: "PropMind",
    subtitle: "Intelligent Property Management",
    org: "Illinois Institute of Technology",
    desc: "Designed a normalized SQLite model across 8+ tables. Integrated LangChain & LlamaIndex for natural-language Q&A. Cut query latency by ~50% and saved 10+ hrs/month.",
    tags: ["SQLite", "LangChain", "LlamaIndex", "Python", "GitHub"],
    color: "#bf00ff",
    stat: "50% faster",
  },
  {
    id: 3,
    title: "MaskScan",
    subtitle: "Temperature & Mask Entry System",
    org: "GITAM University",
    desc: "Trained a CNN in Keras/TensorFlow to 85% validation accuracy on mask detection from 1,000+ real-time Arduino sensor readings. Cut manual check time by ~15 seconds per person.",
    tags: ["CNN", "TensorFlow", "Keras", "Arduino", "Power BI"],
    color: "#00cfff",
    stat: "85% accuracy",
  },
  {
    id: 4,
    title: "SleepIQ",
    subtitle: "Sleep Quality Assessment via EMA",
    org: "GITAM University",
    desc: "Built a supervised classifier on 2,000+ EMA records predicting sleep quality at 84% accuracy. Feature engineering lifted F1-score by 12 points over baseline.",
    tags: ["Python", "scikit-learn", "pandas", "Tableau", "Excel"],
    color: "#ff6b35",
    stat: "+12 F1 pts",
  },
];

const floatingWords = [
  "MACHINE LEARNING", "DATA SCIENCE", "PYTHON", "SQL", "NEURAL NETWORKS",
  "POWER BI", "TABLEAU", "AWS", "TENSORFLOW", "KERAS", "PANDAS", "NUMPY",
  "ETL", "LANGCHAIN", "DOCKER", "SCRUM", "A/B TESTING", "CNN", "SVM", "MLP",
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<null | typeof projects[0]>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [faceExpression, setFaceExpression] = useState("idle");
  const [glitchActive, setGlitchActive] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursor2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
      if (cursor2Ref.current) {
        setTimeout(() => {
          if (cursor2Ref.current) {
            cursor2Ref.current.style.left = e.clientX + "px";
            cursor2Ref.current.style.top = e.clientY + "px";
          }
        }, 80);
      }
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = window.scrollY / h;
      if (pct < 0.2) setFaceExpression("idle");
      else if (pct < 0.4) setFaceExpression("curious");
      else if (pct < 0.6) setFaceExpression("excited");
      else if (pct < 0.8) setFaceExpression("focused");
      else setFaceExpression("wink");
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4000);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(glitchInterval);
    };
  }, []);

  const eyeX = Math.min(Math.max((mousePos.x / window.innerWidth - 0.5) * 6, -6), 6);
  const eyeY = Math.min(Math.max((mousePos.y / window.innerHeight - 0.5) * 4, -4), 4);

  return (
    <div style={{ background: "#050508", minHeight: "100vh", overflowX: "hidden", cursor: "none", fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050508; }
        ::-webkit-scrollbar-thumb { background: #00ff9f; border-radius: 2px; }
        @keyframes float1 { 0%,100%{transform:translateY(0) translateX(0) rotate(0deg);} 33%{transform:translateY(-30px) translateX(20px) rotate(5deg);} 66%{transform:translateY(15px) translateX(-10px) rotate(-3deg);} }
        @keyframes float2 { 0%,100%{transform:translateY(0) translateX(0) rotate(0deg);} 33%{transform:translateY(20px) translateX(-30px) rotate(-5deg);} 66%{transform:translateY(-25px) translateX(15px) rotate(3deg);} }
        @keyframes float3 { 0%,100%{transform:translateY(0) rotate(0deg);} 50%{transform:translateY(-40px) rotate(8deg);} }
        @keyframes scanline { 0%{top:-10%;} 100%{top:110%;} }
        @keyframes glitch1 { 0%,100%{clip-path:inset(0 0 95% 0);transform:translate(-3px,0);} 20%{clip-path:inset(30% 0 50% 0);transform:translate(3px,0);} 40%{clip-path:inset(70% 0 10% 0);transform:translate(-2px,0);} }
        @keyframes glitch2 { 0%,100%{clip-path:inset(50% 0 30% 0);transform:translate(3px,0);} 30%{clip-path:inset(10% 0 80% 0);transform:translate(-3px,0);} 60%{clip-path:inset(80% 0 5% 0);transform:translate(2px,0);} }
        @keyframes pulse-glow { 0%,100%{box-shadow:0 0 20px currentColor;} 50%{box-shadow:0 0 60px currentColor, 0 0 100px currentColor;} }
        @keyframes spin-slow { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
        @keyframes marquee { from{transform:translateX(0);} to{transform:translateX(-50%);} }
        @keyframes blink { 0%,90%,100%{transform:scaleY(1);} 95%{transform:scaleY(0.05);} }
        .face-eye { animation: blink 3s ease-in-out infinite; transform-origin: center; }
        .modal-overlay { animation: fadeIn 0.2s ease; }
        @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
        .modal-card { animation: popIn 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        @keyframes popIn { from{transform:scale(0.5) rotate(-5deg);opacity:0;} to{transform:scale(1) rotate(0deg);opacity:1;} }
        .project-card:hover { transform: translateY(-8px) rotate(1deg) !important; }
        .skill-tag:hover { transform: scale(1.1) rotate(-2deg); }
        @keyframes rgb-shift { 0%{filter:hue-rotate(0deg);} 100%{filter:hue-rotate(360deg);} }
        .rgb-border { animation: rgb-shift 4s linear infinite; }
      `}</style>

      {/* Custom Cursor */}
      <div ref={cursorRef} style={{ position: "fixed", width: 12, height: 12, background: "#00ff9f", borderRadius: "50%", pointerEvents: "none", zIndex: 9999, transform: "translate(-50%,-50%)", transition: "width 0.2s, height 0.2s", mixBlendMode: "difference" }} />
      <div ref={cursor2Ref} style={{ position: "fixed", width: 36, height: 36, border: "1.5px solid #00ff9f", borderRadius: "50%", pointerEvents: "none", zIndex: 9998, transform: "translate(-50%,-50%)", transition: "left 0.08s, top 0.08s", opacity: 0.5 }} />

      {/* Floating Background Words */}
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        {floatingWords.map((word, i) => (
          <div key={word} style={{
            position: "absolute",
            left: `${(i * 37 + 5) % 90}%`,
            top: `${(i * 23 + 10) % 90}%`,
            fontSize: i % 3 === 0 ? "11px" : "9px",
            color: i % 4 === 0 ? "#00ff9f22" : i % 4 === 1 ? "#bf00ff22" : i % 4 === 2 ? "#00cfff22" : "#ff6b3522",
            fontWeight: 700,
            letterSpacing: "0.2em",
            animation: `${["float1","float2","float3"][i%3]} ${6+i%4}s ease-in-out infinite`,
            animationDelay: `${i*0.4}s`,
            whiteSpace: "nowrap",
          }}>{word}</div>
        ))}
      </div>

      {/* Scanline effect */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1, background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)" }} />

      {/* Animated Face - Fixed */}
      <div style={{ position: "fixed", right: 32, bottom: 32, zIndex: 100, width: 120, height: 120 }}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <div className="rgb-border" style={{ position: "absolute", inset: -3, borderRadius: "50%", background: "conic-gradient(#00ff9f, #bf00ff, #00cfff, #ff6b35, #00ff9f)", padding: 3 }}>
            <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#050508" }} />
          </div>
          <svg viewBox="0 0 120 120" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            {/* Face base */}
            <circle cx="60" cy="60" r="50" fill="#0d0d1a" stroke="#00ff9f" strokeWidth="1.5" />
            {/* Grid lines on face */}
            <line x1="60" y1="10" x2="60" y2="110" stroke="#00ff9f" strokeWidth="0.3" opacity="0.3" />
            <line x1="10" y1="60" x2="110" y2="60" stroke="#00ff9f" strokeWidth="0.3" opacity="0.3" />
            <ellipse cx="60" cy="60" rx="25" ry="50" fill="none" stroke="#00ff9f" strokeWidth="0.3" opacity="0.2" />

            {/* Left eye group */}
            <g transform={`translate(${eyeX}, ${eyeY})`} className="face-eye">
              <ellipse cx="42" cy={faceExpression === "wink" ? 52 : 52} rx="8" ry={faceExpression === "excited" ? 9 : faceExpression === "wink" ? 2 : 7} fill="#00ff9f" opacity="0.9" />
              <ellipse cx="42" cy="52" rx="3" ry={faceExpression === "wink" ? 1 : 3} fill="#050508" />
              <ellipse cx="43" cy="50" rx="1.5" ry="1.5" fill="white" opacity="0.8" />
              {/* Eye scan line */}
              <line x1="34" y1="52" x2="50" y2="52" stroke="#00ff9f" strokeWidth="0.5" opacity="0.4" />
            </g>

            {/* Right eye group */}
            <g transform={`translate(${eyeX}, ${eyeY})`} className="face-eye">
              <ellipse cx="78" cy="52" rx="8" ry={faceExpression === "excited" ? 9 : faceExpression === "focused" ? 5 : 7} fill="#00ff9f" opacity="0.9" />
              <ellipse cx="78" cy="52" rx="3" ry="3" fill="#050508" />
              <ellipse cx="79" cy="50" rx="1.5" ry="1.5" fill="white" opacity="0.8" />
              <line x1="70" y1="52" x2="86" y2="52" stroke="#00ff9f" strokeWidth="0.5" opacity="0.4" />
            </g>

            {/* Eyebrows */}
            <path d={faceExpression === "focused" || faceExpression === "curious" ? "M35 42 Q42 38 49 42" : "M35 44 Q42 41 49 44"} stroke="#00ff9f" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d={faceExpression === "focused" ? "M71 42 Q78 38 85 42" : faceExpression === "curious" ? "M71 40 Q78 37 85 40" : "M71 44 Q78 41 85 44"} stroke="#00ff9f" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Mouth */}
            {faceExpression === "excited" && <path d="M45 75 Q60 88 75 75" stroke="#00ff9f" strokeWidth="2.5" fill="none" strokeLinecap="round" />}
            {faceExpression === "idle" && <path d="M47 76 Q60 82 73 76" stroke="#00ff9f" strokeWidth="2" fill="none" strokeLinecap="round" />}
            {faceExpression === "curious" && <path d="M47 76 Q60 80 73 74" stroke="#00ff9f" strokeWidth="2" fill="none" strokeLinecap="round" />}
            {faceExpression === "focused" && <line x1="48" y1="76" x2="72" y2="76" stroke="#00ff9f" strokeWidth="2" strokeLinecap="round" />}
            {faceExpression === "wink" && <path d="M45 74 Q60 86 75 74" stroke="#00ff9f" strokeWidth="2.5" fill="none" strokeLinecap="round" />}

            {/* Tech details */}
            <circle cx="60" cy="60" r="48" fill="none" stroke="#00ff9f" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.3" />
            <text x="60" y="97" textAnchor="middle" fill="#00ff9f" fontSize="6" opacity="0.6" fontFamily="monospace">
              {faceExpression === "idle" ? "STANDBY" : faceExpression === "curious" ? "SCANNING..." : faceExpression === "excited" ? "PROJECTS!" : faceExpression === "focused" ? "ANALYZING" : "WINK ;)"}
            </text>
          </svg>
        </div>
      </div>

      {/* NAVBAR */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2.5rem", backdropFilter: "blur(20px)", background: "rgba(5,5,8,0.8)", borderBottom: "1px solid #00ff9f22" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00ff9f", boxShadow: "0 0 12px #00ff9f" }} />
          <span style={{ color: "#00ff9f", fontWeight: 700, letterSpacing: "0.1em", fontSize: 14 }}>VRE.DEV</span>
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          {["About", "Skills", "Projects", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: "#888", fontSize: 13, textDecoration: "none", letterSpacing: "0.1em", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#00ff9f")}
              onMouseLeave={e => (e.currentTarget.style.color = "#888")}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "8rem 2.5rem 4rem", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 900 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ height: 1, width: 40, background: "#00ff9f" }} />
            <span style={{ color: "#00ff9f", fontSize: 11, letterSpacing: "0.3em", fontWeight: 600 }}>AVAILABLE FOR WORK · HYDERABAD</span>
          </div>

          <div style={{ position: "relative", marginBottom: 16 }}>
            <h1 className={glitchActive ? "glitch" : ""} style={{ fontSize: "clamp(48px, 8vw, 100px)", fontWeight: 700, lineHeight: 1, color: "white", letterSpacing: "-0.02em", position: "relative" }}>
              VAMSHIDHAR
            </h1>
            {glitchActive && <>
              <h1 style={{ position: "absolute", top: 0, left: 0, fontSize: "clamp(48px, 8vw, 100px)", fontWeight: 700, lineHeight: 1, color: "#00ff9f", letterSpacing: "-0.02em", animation: "glitch1 0.2s steps(1) forwards", opacity: 0.8 }}>VAMSHIDHAR</h1>
              <h1 style={{ position: "absolute", top: 0, left: 0, fontSize: "clamp(48px, 8vw, 100px)", fontWeight: 700, lineHeight: 1, color: "#bf00ff", letterSpacing: "-0.02em", animation: "glitch2 0.2s steps(1) forwards", opacity: 0.8 }}>VAMSHIDHAR</h1>
            </>}
            <h1 style={{ fontSize: "clamp(48px, 8vw, 100px)", fontWeight: 700, lineHeight: 1, background: "linear-gradient(90deg, #00ff9f, #bf00ff, #00cfff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.02em" }}>
              REDDY EREDDY
            </h1>
          </div>

          <p style={{ color: "#666", fontSize: 16, maxWidth: 500, lineHeight: 1.7, marginBottom: 40 }}>
            Data Scientist & ML Engineer. I turn chaotic data into elegant decisions. M.S. CS @ Illinois Institute of Technology.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#projects" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#00ff9f", color: "#050508", padding: "12px 28px", borderRadius: 2, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = "4px 4px 0 #bf00ff"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              VIEW PROJECTS →
            </a>
            <a href="mailto:ereddyvamshidharreddy@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #333", color: "white", padding: "12px 28px", borderRadius: 2, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#00ff9f"; e.currentTarget.style.color = "#00ff9f"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#333"; e.currentTarget.style.color = "white"; }}>
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* Marquee */}
        <div style={{ position: "absolute", bottom: 40, left: 0, right: 0, overflow: "hidden", borderTop: "1px solid #111", borderBottom: "1px solid #111", padding: "10px 0" }}>
          <div style={{ display: "flex", animation: "marquee 20s linear infinite", width: "max-content" }}>
            {[...floatingWords, ...floatingWords].map((w, i) => (
              <span key={i} style={{ color: "#222", fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", marginRight: 40, whiteSpace: "nowrap" }}>{w}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "6rem 2.5rem", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
            <span style={{ color: "#00ff9f", fontSize: 11, letterSpacing: "0.3em", fontWeight: 600 }}>01 / ABOUT</span>
            <div style={{ height: 1, flex: 1, background: "linear-gradient(90deg, #00ff9f33, transparent)" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <h2 style={{ fontSize: 40, fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
                I make data<br /><span style={{ color: "#00ff9f" }}>do things.</span>
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, fontSize: 15 }}>
                CS graduate with deep expertise in end-to-end data pipelines, predictive modeling, and dashboard development. From 100K+ Medicare records to real-time IoT streams — I've built systems that actually matter.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { n: "4+", l: "ML Projects" },
                { n: "100K+", l: "Records analyzed" },
                { n: "0.87", l: "Best AUC score" },
                { n: "84%", l: "Sleep model accuracy" },
              ].map(s => (
                <div key={s.l} style={{ border: "1px solid #00ff9f22", padding: "20px 16px", position: "relative", overflow: "hidden" }}
                  onMouseEnter={e => { (e.currentTarget.style.borderColor = "#00ff9f"); (e.currentTarget.style.background = "#00ff9f08"); }}
                  onMouseLeave={e => { (e.currentTarget.style.borderColor = "#00ff9f22"); (e.currentTarget.style.background = "transparent"); }}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: "#00ff9f", marginBottom: 4 }}>{s.n}</div>
                  <div style={{ fontSize: 11, color: "#666", letterSpacing: "0.1em" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "6rem 2.5rem", position: "relative", zIndex: 10, borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
            <span style={{ color: "#bf00ff", fontSize: 11, letterSpacing: "0.3em", fontWeight: 600 }}>02 / SKILLS</span>
            <div style={{ height: 1, flex: 1, background: "linear-gradient(90deg, #bf00ff33, transparent)" }} />
          </div>
          {[
            { label: "Analysis & Visualization", skills: ["SQL", "Python", "pandas", "NumPy", "Power BI", "Tableau", "Excel"], color: "#00ff9f" },
            { label: "ML & Statistics", skills: ["scikit-learn", "Keras", "TensorFlow", "SVM", "CNN", "MLP", "A/B Testing"], color: "#bf00ff" },
            { label: "Data Engineering", skills: ["ETL Pipelines", "AWS", "LangChain", "LlamaIndex", "Prompt Engineering"], color: "#00cfff" },
            { label: "Tools", skills: ["GitHub", "Docker", "Kubernetes", "VS Code", "Jupyter", "Scrum/Agile"], color: "#ff6b35" },
          ].map(group => (
            <div key={group.label} style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 11, color: group.color, letterSpacing: "0.2em", fontWeight: 600, marginBottom: 12 }}>{group.label}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.skills.map(s => (
                  <span key={s} className="skill-tag" style={{ border: `1px solid ${group.color}44`, color: group.color, padding: "6px 14px", fontSize: 12, letterSpacing: "0.05em", cursor: "default", transition: "all 0.2s", display: "inline-block" }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${group.color}22`; e.currentTarget.style.boxShadow = `0 0 20px ${group.color}44`; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.boxShadow = "none"; }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "6rem 2.5rem", position: "relative", zIndex: 10, borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
            <span style={{ color: "#00cfff", fontSize: 11, letterSpacing: "0.3em", fontWeight: 600 }}>03 / PROJECTS</span>
            <div style={{ height: 1, flex: 1, background: "linear-gradient(90deg, #00cfff33, transparent)" }} />
          </div>
          <p style={{ color: "#555", fontSize: 13, letterSpacing: "0.1em", marginBottom: 32 }}>CLICK ANY PROJECT TO EXPAND →</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {projects.map((p, i) => (
              <div key={p.id} className="project-card" onClick={() => setActiveProject(p)}
                style={{ border: `1px solid ${p.color}33`, padding: "28px 24px", cursor: "pointer", position: "relative", overflow: "hidden", transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.background = `${p.color}08`; e.currentTarget.style.boxShadow = `0 0 40px ${p.color}22`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${p.color}33`; e.currentTarget.style.background = "transparent"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ position: "absolute", top: 16, right: 16, fontSize: 20, fontWeight: 700, color: `${p.color}22`, fontFamily: "monospace" }}>0{i+1}</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: p.color, marginBottom: 4 }}>{p.stat}</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "white", marginBottom: 8 }}>{p.title}</div>
                <div style={{ fontSize: 12, color: "#555", marginBottom: 16 }}>{p.subtitle}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tags.slice(0, 3).map(t => (
                    <span key={t} style={{ fontSize: 10, color: p.color, border: `1px solid ${p.color}44`, padding: "2px 8px", letterSpacing: "0.05em" }}>{t}</span>
                  ))}
                  {p.tags.length > 3 && <span style={{ fontSize: 10, color: "#555" }}>+{p.tags.length - 3}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ padding: "6rem 2.5rem", position: "relative", zIndex: 10, borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
            <span style={{ color: "#ff6b35", fontSize: 11, letterSpacing: "0.3em", fontWeight: 600 }}>04 / EDUCATION</span>
            <div style={{ height: 1, flex: 1, background: "linear-gradient(90deg, #ff6b3533, transparent)" }} />
          </div>
          {[
            { deg: "M.S. Computer Science", school: "Illinois Institute of Technology, Chicago", year: "2023–2025" },
            { deg: "B.Tech CS & Engineering", school: "GITAM University, Hyderabad", year: "2019–2023" },
          ].map(e => (
            <div key={e.deg} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", borderBottom: "1px solid #111" }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600, color: "white", marginBottom: 4 }}>{e.deg}</div>
                <div style={{ fontSize: 13, color: "#555" }}>{e.school}</div>
              </div>
              <div style={{ fontSize: 12, color: "#ff6b35", fontWeight: 600, letterSpacing: "0.1em", whiteSpace: "nowrap" }}>{e.year}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "6rem 2.5rem", position: "relative", zIndex: 10, borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#00ff9f", letterSpacing: "0.3em", fontWeight: 600, marginBottom: 24 }}>05 / CONTACT</div>
          <h2 style={{ fontSize: "clamp(36px,6vw,72px)", fontWeight: 700, color: "white", lineHeight: 1.1, marginBottom: 16 }}>
            LET'S BUILD<br /><span style={{ color: "#00ff9f" }}>SOMETHING.</span>
          </h2>
          <p style={{ color: "#555", marginBottom: 48, fontSize: 15 }}>Open to data science, ML engineering & analytics roles worldwide.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:ereddyvamshidharreddy@gmail.com" style={{ background: "#00ff9f", color: "#050508", padding: "14px 32px", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = "4px 4px 0 #bf00ff"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              EMAIL ME →
            </a>
            <a href="https://www.linkedin.com/in/ereddyvamshidharreddy" target="_blank" style={{ border: "1px solid #333", color: "white", padding: "14px 32px", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#00cfff"; e.currentTarget.style.color = "#00cfff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#333"; e.currentTarget.style.color = "white"; }}>
              LINKEDIN ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #111", padding: "2rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 10 }}>
        <span style={{ color: "#333", fontSize: 12, letterSpacing: "0.1em" }}>© 2026 VAMSHIDHAR REDDY EREDDY</span>
        <span style={{ color: "#333", fontSize: 12, letterSpacing: "0.1em" }}>BUILT WITH NEXT.JS + TAILWIND</span>
      </footer>

      {/* PROJECT MODAL */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, backdropFilter: "blur(10px)" }}>
          <div className="modal-card" onClick={e => e.stopPropagation()}
            style={{ background: "#0a0a12", border: `1px solid ${activeProject.color}`, maxWidth: 600, width: "100%", padding: 40, position: "relative", boxShadow: `0 0 80px ${activeProject.color}44` }}>
            <button onClick={() => setActiveProject(null)}
              style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", color: "#555", fontSize: 20, cursor: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = activeProject.color)}
              onMouseLeave={e => (e.currentTarget.style.color = "#555")}>✕</button>
            <div style={{ fontSize: 32, fontWeight: 700, color: activeProject.color, marginBottom: 4 }}>{activeProject.stat}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "white", marginBottom: 4 }}>{activeProject.title}</div>
            <div style={{ fontSize: 13, color: "#555", marginBottom: 8 }}>{activeProject.subtitle}</div>
            <div style={{ fontSize: 11, color: activeProject.color, letterSpacing: "0.2em", marginBottom: 24 }}>{activeProject.org.toUpperCase()}</div>
            <p style={{ color: "#888", lineHeight: 1.8, fontSize: 14, marginBottom: 28 }}>{activeProject.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {activeProject.tags.map(t => (
                <span key={t} style={{ border: `1px solid ${activeProject.color}66`, color: activeProject.color, padding: "6px 14px", fontSize: 11, letterSpacing: "0.1em" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}