"use client";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1, title: "HeartWatch", subtitle: "Early Detection of Heart Failure",
    org: "Illinois Institute of Technology", year: "2024",
    desc: "Boosted early-detection rate by 18% by engineering 20+ clinical features and training SVM, MLP, and CNN classifiers on 100K+ Medicare records. Achieved 0.87 AUC and 82% recall.",
    tags: ["Python", "scikit-learn", "Keras", "SQL", "AWS", "Power BI"], stat: "0.87 AUC",
  },
  {
    id: 2, title: "PropMind", subtitle: "Intelligent Property Management",
    org: "Illinois Institute of Technology", year: "2024",
    desc: "Designed a normalized SQLite model across 8+ tables. Integrated LangChain and LlamaIndex for natural-language Q&A. Cut query latency by 50% and saved 10+ hrs/month.",
    tags: ["SQLite", "LangChain", "LlamaIndex", "Python", "GitHub"], stat: "50% faster",
  },
  {
    id: 3, title: "MaskScan", subtitle: "Temperature & Mask Entry System",
    org: "GITAM University", year: "2023",
    desc: "Trained a CNN in Keras/TensorFlow to 85% validation accuracy on mask detection from 1,000+ real-time Arduino sensor readings. Cut manual check time by 15 seconds per person.",
    tags: ["CNN", "TensorFlow", "Keras", "Arduino", "Power BI"], stat: "85% accuracy",
  },
  {
    id: 4, title: "SleepIQ", subtitle: "Sleep Quality Assessment via EMA",
    org: "GITAM University", year: "2022",
    desc: "Built a supervised classifier on 2,000+ EMA records predicting sleep quality at 84% accuracy. Feature engineering lifted F1-score by 12 points over baseline.",
    tags: ["Python", "scikit-learn", "pandas", "Tableau", "Excel"], stat: "+12 F1 pts",
  },
];

const certifications = [
  { title: "Foundations of Prompt Engineering", issuer: "Amazon Web Services", date: "June 2026", color: "#c4793a" },
  { title: "Claude 101", issuer: "Anthropic", date: "2026", color: "#6b7b5e" },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte", date: "June 2026", color: "#2c3e6b" },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<null | (typeof projects)[0]>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "#f5f0e8", minHeight: "100vh", fontFamily: "Georgia, serif", color: "#2c2416", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Inter:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 2px; }
        ::-webkit-scrollbar-thumb { background: #a0845c; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
        @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
        @keyframes modalIn { from{opacity:0;transform:translateY(24px) scale(0.98);} to{opacity:1;transform:translateY(0) scale(1);} }
        .fade1 { opacity:0; animation: fadeUp 0.9s 0.1s ease forwards; }
        .fade2 { opacity:0; animation: fadeUp 0.9s 0.3s ease forwards; }
        .fade3 { opacity:0; animation: fadeUp 0.9s 0.5s ease forwards; }
        .fade4 { opacity:0; animation: fadeUp 0.9s 0.7s ease forwards; }
        .nav-link { font-family:'Inter',sans-serif; font-size:11px; letter-spacing:0.2em; color:#6b5c45; text-decoration:none; text-transform:uppercase; transition:color 0.2s; }
        .nav-link:hover { color:#a0845c; }
        .btn-dark { display:inline-block; background:#2c2416; color:#f5f0e8; padding:14px 40px; font-family:'Inter',sans-serif; font-size:11px; letter-spacing:0.25em; text-decoration:none; text-transform:uppercase; transition:all 0.3s; }
        .btn-dark:hover { background:#a0845c; transform:translateY(-1px); }
        .btn-light { display:inline-block; border:1px solid #a0845c; color:#a0845c; padding:14px 40px; font-family:'Inter',sans-serif; font-size:11px; letter-spacing:0.25em; text-decoration:none; text-transform:uppercase; transition:all 0.3s; }
        .btn-light:hover { background:#a0845c; color:#f5f0e8; transform:translateY(-1px); }
        .project-row { display:grid; grid-template-columns:60px 1fr 110px 90px; gap:20px; align-items:center; padding:24px 0; border-bottom:1px solid #ddd4c0; cursor:pointer; transition:all 0.3s; }
        .project-row:hover { padding-left:10px; border-bottom-color:#a0845c; background:#faf7f2; }
        .skill-tag { display:inline-block; border:1px solid #c8bfad; color:#6b5c45; padding:5px 14px; font-family:'Inter',sans-serif; font-size:11px; letter-spacing:0.08em; margin:3px; transition:all 0.2s; }
        .skill-tag:hover { border-color:#a0845c; color:#a0845c; background:#fdf9f3; }
        .cert-card { border:1px solid #ddd4c0; padding:28px 24px; background:#faf7f2; transition:all 0.3s; position:relative; overflow:hidden; }
        .cert-card:hover { border-color:#a0845c; transform:translateY(-2px); box-shadow:0 8px 32px rgba(160,132,92,0.12); }
        .stat-card { background:#2c2416; padding:28px 20px; text-align:center; transition:all 0.3s; }
        .stat-card:hover { background:#3d3220; transform:translateY(-2px); }
        .section-label { font-family:'Inter',sans-serif; font-size:10px; letter-spacing:0.4em; color:#a0845c; text-transform:uppercase; margin-bottom:12px; }
        .modal-backdrop { position:fixed; inset:0; background:rgba(44,36,22,0.7); z-index:500; display:flex; align-items:center; justify-content:center; padding:24px; animation:fadeIn 0.2s ease; backdrop-filter:blur(6px); }
        .modal-box { background:#faf7f2; border:1px solid #ddd4c0; max-width:580px; width:100%; padding:48px; position:relative; animation:modalIn 0.3s cubic-bezier(0.16,1,0.3,1); }
        .close-btn { position:absolute; top:18px; right:18px; background:none; border:none; color:#b0a090; font-size:18px; cursor:pointer; transition:color 0.2s; }
        .close-btn:hover { color:#2c2416; }
        .thin-line { height:1px; background:linear-gradient(90deg,#a0845c,#ddd4c0); margin:16px 0 24px; width:48px; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.4rem 3rem",
        background: scrolled ? "rgba(245,240,232,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid #ddd4c0" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.4s",
      }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, letterSpacing: "0.2em", color: "#2c2416" }}>
          VRE
        </div>
        <div style={{ display: "flex", gap: 36 }}>
          {["About", "Skills", "Projects", "Certifications", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "10rem 3rem 6rem", maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", width: "100%" }}>
          <div>
            <div className="fade1 section-label">Data Scientist · ML Engineer · Hyderabad</div>
            <h1 className="fade2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(52px,6vw,88px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.01em", color: "#2c2416", marginBottom: 8 }}>
              Vamshidhar<br /><em style={{ color: "#a0845c", fontStyle: "italic" }}>Reddy Ereddy</em>
            </h1>
            <div className="fade3" style={{ display: "flex", alignItems: "center", gap: 16, margin: "28px 0 36px" }}>
              <div style={{ width: 40, height: 1, background: "#a0845c" }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#6b5c45", fontWeight: 300, lineHeight: 1.7 }}>
                Turning complex data into clear,<br />elegant decisions.
              </p>
            </div>
            <div className="fade4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#projects" className="btn-dark">View Work</a>
              <a href="mailto:ereddyvamshidharreddy@gmail.com" className="btn-light">Get in Touch</a>
            </div>
          </div>

          {/* Right side — decorative card */}
          <div className="fade2" style={{ background: "#2c2416", padding: "48px 40px", position: "relative" }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: "0.3em", color: "#a0845c", textTransform: "uppercase", marginBottom: 32 }}>At a Glance</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#3d3220" }}>
              {[
                { n: "4+", l: "ML Projects" },
                { n: "100K+", l: "Records Analyzed" },
                { n: "0.87", l: "Best AUC Score" },
                { n: "3", l: "Certifications" },
              ].map(s => (
                <div key={s.l} className="stat-card">
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 300, color: "#f5f0e8", lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "#a0845c", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 8 }}>{s.l}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, borderTop: "1px solid #3d3220", paddingTop: 24 }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "#6b5c45", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>Currently</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "#f5f0e8", fontStyle: "italic" }}>Open to opportunities worldwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "8rem 3rem", background: "#eee8dc", borderTop: "1px solid #ddd4c0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "280px 1fr", gap: 80 }}>
          <div>
            <div className="section-label">01 — About</div>
            <div style={{ width: 32, height: 1, background: "#a0845c", marginTop: 8 }} />
          </div>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 300, color: "#2c2416", lineHeight: 1.2, marginBottom: 24 }}>
              I make data<br /><em style={{ color: "#a0845c" }}>speak clearly.</em>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#6b5c45", lineHeight: 1.9, fontWeight: 300, maxWidth: 580 }}>
              Computer Science graduate with hands-on expertise in data analytics, business intelligence, and machine learning. From 100K+ Medicare records to real-time IoT sensor streams — I build end-to-end systems that transform raw noise into strategic clarity.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 40, maxWidth: 480 }}>
              {[
                { label: "Education", value: "M.S. CS · IIT Chicago" },
                { label: "Based in", value: "Hyderabad, India" },
                { label: "Available", value: "Globally · Remote / On-site" },
                { label: "Focus", value: "ML · Data Science · Analytics" },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: "0.25em", color: "#a0845c", textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: "#2c2416" }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "8rem 3rem", borderTop: "1px solid #ddd4c0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "280px 1fr", gap: 80 }}>
          <div>
            <div className="section-label">02 — Skills</div>
            <div style={{ width: 32, height: 1, background: "#a0845c", marginTop: 8 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              { label: "Analysis & Visualization", skills: ["SQL", "Python", "pandas", "NumPy", "Power BI", "Tableau", "Excel"] },
              { label: "Machine Learning", skills: ["scikit-learn", "Keras", "TensorFlow", "SVM", "CNN", "MLP", "A/B Testing"] },
              { label: "Data Engineering", skills: ["ETL Pipelines", "AWS", "LangChain", "LlamaIndex", "Prompt Engineering"] },
              { label: "Tools & Platforms", skills: ["GitHub", "Docker", "Kubernetes", "VS Code", "Jupyter", "Scrum/Agile"] },
            ].map(group => (
              <div key={group.label}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: "0.3em", color: "#6b5c45", textTransform: "uppercase", marginBottom: 14 }}>{group.label}</div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {group.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "8rem 3rem", background: "#eee8dc", borderTop: "1px solid #ddd4c0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "280px 1fr", gap: 80 }}>
          <div>
            <div className="section-label">03 — Projects</div>
            <div style={{ width: 32, height: 1, background: "#a0845c", marginTop: 8 }} />
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#a0845c", marginTop: 24, lineHeight: 1.6 }}>Click any project<br />to view details</p>
          </div>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 110px 90px", gap: 20, padding: "0 0 16px", borderBottom: "1px solid #a0845c" }}>
              {["Year", "Project", "Result", "Domain"].map(h => (
                <div key={h} style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: "0.25em", color: "#a0845c", textTransform: "uppercase" }}>{h}</div>
              ))}
            </div>
            {projects.map(p => (
              <div key={p.id} className="project-row" onClick={() => setActiveProject(p)}
                onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#a0845c" }}>{p.year}</div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: hovered === p.id ? "#a0845c" : "#2c2416", transition: "color 0.3s" }}>{p.title}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#9a8870", marginTop: 2 }}>{p.subtitle}</div>
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "#a0845c", fontStyle: "italic" }}>{p.stat}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "#9a8870", letterSpacing: "0.08em" }}>ML · Data</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" style={{ padding: "8rem 3rem", borderTop: "1px solid #ddd4c0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "280px 1fr", gap: 80 }}>
          <div>
            <div className="section-label">04 — Certifications</div>
            <div style={{ width: 32, height: 1, background: "#a0845c", marginTop: 8 }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {certifications.map(cert => (
              <div key={cert.title} className="cert-card">
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: cert.color, marginBottom: 20, opacity: 0.9 }} />
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: "0.2em", color: "#a0845c", textTransform: "uppercase", marginBottom: 10 }}>{cert.issuer}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, color: "#2c2416", lineHeight: 1.3, marginBottom: 12 }}>{cert.title}</div>
                <div style={{ width: 24, height: 1, background: "#ddd4c0", marginBottom: 12 }} />
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#9a8870" }}>Completed · {cert.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ padding: "8rem 3rem", background: "#eee8dc", borderTop: "1px solid #ddd4c0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "280px 1fr", gap: 80 }}>
          <div>
            <div className="section-label">05 — Education</div>
            <div style={{ width: 32, height: 1, background: "#a0845c", marginTop: 8 }} />
          </div>
          <div>
            {[
              { deg: "Master of Science, Computer Science", school: "Illinois Institute of Technology", loc: "Chicago, USA", year: "2023 – 2025" },
              { deg: "B.Tech, Computer Science & Engineering", school: "GITAM University", loc: "Hyderabad, India", year: "2019 – 2023" },
            ].map((e, i) => (
              <div key={e.deg} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "32px 0", borderBottom: i === 0 ? "1px solid #ddd4c0" : "none" }}>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 400, color: "#2c2416", marginBottom: 6 }}>{e.deg}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9a8870", fontWeight: 300 }}>{e.school} · {e.loc}</div>
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#a0845c", letterSpacing: "0.1em", whiteSpace: "nowrap", marginLeft: 32, marginTop: 4 }}>{e.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "10rem 3rem", borderTop: "1px solid #ddd4c0" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div className="section-label" style={{ display: "block", textAlign: "center", marginBottom: 24 }}>06 — Contact</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px,6vw,76px)", fontWeight: 300, color: "#2c2416", lineHeight: 1.1, marginBottom: 8 }}>
            {"Let's build"}<br /><em style={{ color: "#a0845c" }}>something together.</em>
          </h2>
          <div style={{ width: 48, height: 1, background: "linear-gradient(90deg, transparent, #a0845c, transparent)", margin: "32px auto 40px" }} />
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#6b5c45", fontWeight: 300, lineHeight: 1.8, marginBottom: 48 }}>
            Open to data science, ML engineering, and analytics roles worldwide.<br />Based in Hyderabad — available globally.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:ereddyvamshidharreddy@gmail.com" className="btn-dark">Send an Email</a>
            <a href="https://www.linkedin.com/in/ereddyvamshidharreddy" target="_blank" className="btn-light">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#2c2416", padding: "2.5rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "#a0845c", fontStyle: "italic" }}>Vamshidhar Reddy Ereddy</span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "#6b5c45", letterSpacing: "0.2em", textTransform: "uppercase" }}>© 2026 · Built with Next.js</span>
      </footer>

      {/* PROJECT MODAL */}
      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveProject(null)}>✕</button>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: "0.3em", color: "#a0845c", textTransform: "uppercase", marginBottom: 8 }}>{activeProject.org} · {activeProject.year}</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, color: "#2c2416", marginBottom: 4 }}>{activeProject.title}</h3>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9a8870", marginBottom: 16 }}>{activeProject.subtitle}</div>
            <div className="thin-line" />
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: "#a0845c", fontStyle: "italic", marginBottom: 20 }}>{activeProject.stat}</div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#6b5c45", lineHeight: 1.9, fontWeight: 300, marginBottom: 32 }}>{activeProject.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {activeProject.tags.map(t => (
                <span key={t} style={{ border: "1px solid #ddd4c0", color: "#6b5c45", padding: "5px 14px", fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.08em" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
