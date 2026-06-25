"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">

      {/* Animated gradient background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-teal-500 opacity-10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600 opacity-10 rounded-full blur-[120px] animate-pulse" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-5 backdrop-blur-md bg-[#0a0a0f]/70 border-b border-white/10">
        <span className="text-lg font-bold tracking-tight">
          <span className="text-teal-400">V</span>amshidhar
        </span>
        <div className="flex gap-8 text-sm text-gray-400">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="hover:text-teal-400 transition-colors duration-200">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 pt-20">
        <div className="inline-block bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
          Open to opportunities
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Vamshidhar<br />
          <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
            Reddy Ereddy
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mb-4 leading-relaxed">
          Data Scientist & ML Engineer — turning raw data into real decisions.
        </p>
        <p className="text-gray-500 text-sm mb-10">
          M.S. Computer Science · Illinois Institute of Technology, Chicago
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects"
            className="bg-teal-500 hover:bg-teal-400 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105">
            View my projects
          </a>
          <a href="mailto:ereddyvamshidharreddy@gmail.com"
            className="border border-white/20 hover:border-teal-400 hover:text-teal-400 text-white px-8 py-3 rounded-full transition-all duration-200 hover:scale-105">
            Get in touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-600 text-xs">scroll down</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 max-w-4xl mx-auto px-6 py-28">
        <Tag>About me</Tag>
        <h2 className="text-4xl font-bold mt-4 mb-8">Who I am</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <p className="text-gray-400 text-lg leading-relaxed">
            Computer Science graduate with hands-on experience in data analytics, business intelligence,
            and machine learning. I build end-to-end data pipelines, predictive models, and dashboards
            that turn messy data into clear decisions.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            From 100K+ record Medicare datasets to real-time IoT sensor streams — I've worked across
            industries and scales. Currently based in Hyderabad, open to global opportunities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          {[
            { num: "4+", label: "ML Projects" },
            { num: "100K+", label: "Records analyzed" },
            { num: "0.87", label: "Best AUC score" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-teal-500/40 transition-colors">
              <div className="text-3xl font-bold text-teal-400 mb-1">{stat.num}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 max-w-4xl mx-auto px-6 py-20 border-t border-white/10">
        <Tag>Technical skills</Tag>
        <h2 className="text-4xl font-bold mt-4 mb-10">What I work with</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              category: "Analysis & Visualization",
              color: "teal",
              skills: ["SQL", "Python", "pandas", "NumPy", "Power BI", "Tableau", "Excel"],
            },
            {
              category: "ML & Statistics",
              color: "purple",
              skills: ["scikit-learn", "Keras", "TensorFlow", "SVM", "CNN", "MLP", "A/B Testing"],
            },
            {
              category: "Data Engineering",
              color: "blue",
              skills: ["ETL Pipelines", "AWS", "LangChain", "LlamaIndex", "Prompt Engineering"],
            },
            {
              category: "Tools & Platforms",
              color: "pink",
              skills: ["GitHub", "Docker", "Kubernetes", "VS Code", "Jupyter", "Scrum/Agile"],
            },
          ].map((group) => (
            <div key={group.category} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <h3 className={`text-sm font-semibold mb-4 ${
                group.color === "teal" ? "text-teal-400" :
                group.color === "purple" ? "text-purple-400" :
                group.color === "blue" ? "text-blue-400" : "text-pink-400"
              }`}>{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span key={s} className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 max-w-4xl mx-auto px-6 py-20 border-t border-white/10">
        <Tag>Projects</Tag>
        <h2 className="text-4xl font-bold mt-4 mb-10">What I've built</h2>
        <div className="flex flex-col gap-6">
          {[
            {
              title: "HeartWatch — Early Detection of Heart Failure",
              org: "Illinois Institute of Technology",
              desc: "Boosted early-detection rate by 18% by engineering 20+ clinical features and training SVM, MLP, and CNN classifiers on 100K+ Medicare records. Achieved 0.87 AUC and 82% recall.",
              tags: ["Python", "scikit-learn", "Keras", "SQL", "AWS", "Power BI"],
              color: "teal",
            },
            {
              title: "Intelligent Property Management Platform",
              org: "Illinois Institute of Technology",
              desc: "Designed a normalized SQLite model across 8+ tables. Integrated LangChain & LlamaIndex for natural-language Q&A. Cut query latency by ~50% and saved 10+ hrs/month of manual work.",
              tags: ["SQLite", "LangChain", "LlamaIndex", "Python", "GitHub"],
              color: "purple",
            },
            {
              title: "Temperature & Mask Scan Entry System",
              org: "GITAM University",
              desc: "Trained a CNN in Keras/TensorFlow to 85% validation accuracy on mask detection from 1,000+ real-time Arduino sensor readings. Cut manual check time by ~15 seconds per person.",
              tags: ["CNN", "TensorFlow", "Keras", "Arduino", "Power BI"],
              color: "blue",
            },
            {
              title: "Sleep Quality Assessment Using EMA",
              org: "GITAM University",
              desc: "Built a supervised classifier on 2,000+ EMA records predicting sleep quality at 84% accuracy. Feature engineering lifted F1-score by 12 points over baseline.",
              tags: ["Python", "scikit-learn", "pandas", "Tableau", "Excel"],
              color: "pink",
            },
          ].map((project) => (
            <div key={project.title}
              className="group bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-teal-500/30 hover:bg-white/[0.07] transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold group-hover:text-teal-400 transition-colors">{project.title}</h3>
                <span className="text-gray-600 text-xs shrink-0 mt-1">{project.org}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className={`text-xs px-3 py-1 rounded-full ${
                    project.color === "teal" ? "bg-teal-500/10 text-teal-400" :
                    project.color === "purple" ? "bg-purple-500/10 text-purple-400" :
                    project.color === "blue" ? "bg-blue-500/10 text-blue-400" :
                    "bg-pink-500/10 text-pink-400"
                  }`}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-20 border-t border-white/10">
        <Tag>Education</Tag>
        <h2 className="text-4xl font-bold mt-4 mb-10">Where I studied</h2>
        <div className="flex flex-col gap-4">
          {[
            { degree: "M.S. Computer Science", school: "Illinois Institute of Technology, Chicago, USA", year: "2023 – 2025" },
            { degree: "B.Tech Computer Science & Engineering", school: "GITAM University, Hyderabad, India", year: "2019 – 2023" },
          ].map((edu) => (
            <div key={edu.degree} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-7 py-5 hover:border-white/20 transition-colors">
              <div>
                <div className="font-semibold text-white">{edu.degree}</div>
                <div className="text-gray-400 text-sm mt-1">{edu.school}</div>
              </div>
              <div className="text-teal-400 text-sm font-medium shrink-0">{edu.year}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 max-w-4xl mx-auto px-6 py-20 border-t border-white/10">
        <Tag>Contact</Tag>
        <h2 className="text-4xl font-bold mt-4 mb-4">Let's work together</h2>
        <p className="text-gray-400 mb-10 text-lg">Open to data science, ML engineering, and analytics roles worldwide.</p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:ereddyvamshidharreddy@gmail.com"
            className="bg-teal-500 hover:bg-teal-400 text-black font-semibold px-8 py-3 rounded-full transition-all hover:scale-105">
            ereddyvamshidharreddy@gmail.com
          </a>
          <a href="tel:+916302907845"
            className="border border-white/20 hover:border-teal-400 hover:text-teal-400 px-8 py-3 rounded-full transition-all hover:scale-105">
            +91 63029 07845
          </a>
          <a href="https://www.linkedin.com/in/ereddyvamshidharreddy" target="_blank"
            className="border border-white/20 hover:border-blue-400 hover:text-blue-400 px-8 py-3 rounded-full transition-all hover:scale-105">
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center text-gray-600 text-sm py-10 border-t border-white/10">
        © 2026 Vamshidhar Reddy Ereddy · Built with Next.js & Tailwind CSS
      </footer>

    </main>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full">
      {children}
    </span>
  );
}