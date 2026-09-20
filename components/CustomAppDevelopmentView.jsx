import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

const layers = [
  {
    id: "frontend",
    icon: "🖥️",
    name: "Frontend",
    label: "User Interface Layer",
    color: "#6366f1",
    description:
      "Modern, performant user interfaces built with cutting-edge frameworks. We deliver pixel-perfect, accessible, and blazing-fast frontends that work seamlessly across all devices.",
    techs: [
      {
        name: "React",
        icon: "⚛️",
        desc: "Component-driven UI library",
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: "▲",
        desc: "Full-stack React framework",
        color: "#ffffff",
      },
      {
        name: "TypeScript",
        icon: "TS",
        desc: "Type-safe JavaScript",
        color: "#3178C6",
      },
      {
        name: "Tailwind",
        icon: "🎨",
        desc: "Utility-first CSS framework",
        color: "#38BDF8",
      },
    ],
  },
  {
    id: "api",
    icon: "🔗",
    name: "API Gateway",
    label: "Service Interface Layer",
    color: "#f59e0b",
    description:
      "Robust API layers that connect your systems efficiently. We design RESTful and GraphQL APIs with proper authentication, rate limiting, and documentation for seamless integrations.",
    techs: [
      {
        name: "GraphQL",
        icon: "◈",
        desc: "Flexible query language",
        color: "#E10098",
      },
      {
        name: "REST API",
        icon: "🌐",
        desc: "Standard HTTP endpoints",
        color: "#4CAF50",
      },
      {
        name: "Kong",
        icon: "🦍",
        desc: "API gateway platform",
        color: "#00B4D8",
      },
      {
        name: "Nginx",
        icon: "⚡",
        desc: "High-performance proxy",
        color: "#009900",
      },
    ],
  },
  {
    id: "backend",
    icon: "⚙️",
    name: "Backend",
    label: "Application Logic Layer",
    color: "#10b981",
    description:
      "Scalable server-side architecture handling your core business logic. Our backend solutions are designed for performance, security, and maintainability as your application grows.",
    techs: [
      {
        name: "Node.js",
        icon: "🟢",
        desc: "JavaScript runtime engine",
        color: "#339933",
      },
      {
        name: "Python",
        icon: "🐍",
        desc: "Versatile backend language",
        color: "#3776AB",
      },
      {
        name: "Java",
        icon: "☕",
        desc: "Enterprise-grade platform",
        color: "#E76F00",
      },
      {
        name: "Go",
        icon: "🐹",
        desc: "Fast concurrent language",
        color: "#00ADD8",
      },
    ],
  },
  {
    id: "database",
    icon: "🗄️",
    name: "Database",
    label: "Data Storage Layer",
    color: "#ef4444",
    description:
      "Intelligent data management solutions tailored to your needs. We architect both relational and NoSQL databases with proper indexing, caching, and backup strategies.",
    techs: [
      {
        name: "PostgreSQL",
        icon: "🐘",
        desc: "Advanced relational DB",
        color: "#336791",
      },
      {
        name: "MongoDB",
        icon: "🍃",
        desc: "Flexible document store",
        color: "#47A248",
      },
      {
        name: "Redis",
        icon: "🔴",
        desc: "In-memory data cache",
        color: "#DC382D",
      },
      {
        name: "MySQL",
        icon: "🐬",
        desc: "Popular open-source DB",
        color: "#4479A1",
      },
    ],
  },
  {
    id: "infra",
    icon: "☁️",
    name: "Infrastructure",
    label: "Cloud & DevOps Layer",
    color: "#8b5cf6",
    description:
      "Cloud-native infrastructure ensuring high availability, auto-scaling, and zero-downtime deployments. We implement CI/CD pipelines, monitoring, and disaster recovery from day one.",
    techs: [
      {
        name: "AWS",
        icon: "☁️",
        desc: "Leading cloud platform",
        color: "#FF9900",
      },
      {
        name: "Docker",
        icon: "🐋",
        desc: "Container platform",
        color: "#2496ED",
      },
      {
        name: "Kubernetes",
        icon: "⎈",
        desc: "Container orchestration",
        color: "#326CE5",
      },
      {
        name: "Terraform",
        icon: "🏗️",
        desc: "Infrastructure as code",
        color: "#7B42BC",
      },
    ],
  },
];

const benefits = [
  { icon: "🚀", title: "Fast Delivery", desc: "Agile sprints, weekly releases" },
  { icon: "🔒", title: "Secure by Design", desc: "OWASP best practices built-in" },
  { icon: "📈", title: "Scalable", desc: "Grows with your business seamlessly" },
  { icon: "🤝", title: "Full Support", desc: "Dedicated team post-launch" },
];

export default function CustomAppDevelopmentView() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selected, setSelected] = useState(0);

  const selectedLayer = layers[selected];

  return (
    <div className={isDark ? "dark-theme" : "light-theme"}>
      {/* ── HERO ── */}
      <section className="cad-hero">
        <div className="container">
          <div className="cad-hero-badge">Custom App Development</div>
          <h1 className="cad-hero-title">
            Build Apps That <span className="cad-gradient">Scale</span> With Your Business
          </h1>
          <p className="cad-hero-sub">
            From MVP to enterprise platform — we architect, design, and develop custom software
            solutions using battle-tested modern technology stacks.
          </p>
          <div className="cad-hero-actions">
            <Link href="/contact-us" className="btn btn-linear hover-up">
              Start Your Project
            </Link>
            <Link href="/services" className="btn btn-outline-brand hover-up cad-btn-outline">
              View Services
            </Link>
          </div>
          {/* Stats */}
          <div className="cad-stats">
            {[
              { val: "200+", label: "Apps Delivered" },
              { val: "98%", label: "Client Satisfaction" },
              { val: "5×", label: "Faster Time-to-Market" },
              { val: "24/7", label: "Dedicated Support" },
            ].map((s, i) => (
              <div className="cad-stat-item" key={i}>
                <div className="cad-stat-val">{s.val}</div>
                <div className="cad-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STACK VISUALIZATION ── */}
      <section className="cad-stack-section">
        <div className="container">
          <div className="cad-section-header">
            <span className="cad-section-badge">Technology Stack</span>
            <h2 className="cad-section-title">Our Full-Stack Architecture</h2>
            <p className="cad-section-sub">
              Click any layer to explore the technologies we use and why we chose them.
            </p>
          </div>

          <div className="cad-stack-wrapper">
            {/* Left: Layer list */}
            <div className="cad-layers-list">
              {layers.map((layer, idx) => (
                <button
                  key={layer.id}
                  onClick={() => setSelected(idx)}
                  className={`cad-layer-row${selected === idx ? " cad-layer-row--active" : ""}`}
                  style={{ "--layer-color": layer.color }}
                >
                  <div className="cad-layer-left">
                    <span className="cad-layer-num">{String(idx + 1).padStart(2, "0")}</span>
                    <div className="cad-layer-icon-wrap" style={{ background: layer.color + "22", border: `1.5px solid ${layer.color}55` }}>
                      <span style={{ fontSize: "20px" }}>{layer.icon}</span>
                    </div>
                    <div className="cad-layer-text">
                      <span className="cad-layer-name">{layer.name}</span>
                      <span className="cad-layer-label">{layer.label}</span>
                    </div>
                  </div>
                  <div className="cad-layer-techs-mini">
                    {layer.techs.map((t) => (
                      <span key={t.name} className="cad-tech-mini" title={t.name}>
                        {t.icon.length <= 2 ? t.icon : t.name.slice(0, 2)}
                      </span>
                    ))}
                  </div>
                  <span className="cad-layer-arrow">›</span>
                </button>
              ))}
            </div>

            {/* Right: Detail panel */}
            <div className="cad-detail-panel" style={{ "--panel-color": selectedLayer.color }}>
              <div className="cad-panel-header" style={{ borderColor: selectedLayer.color + "55" }}>
                <div
                  className="cad-panel-icon-big"
                  style={{ background: selectedLayer.color + "22", border: `2px solid ${selectedLayer.color}66` }}
                >
                  <span style={{ fontSize: "32px" }}>{selectedLayer.icon}</span>
                </div>
                <div>
                  <div className="cad-panel-badge" style={{ background: selectedLayer.color + "22", color: selectedLayer.color }}>
                    {selectedLayer.label}
                  </div>
                  <h3 className="cad-panel-name">{selectedLayer.name} Layer</h3>
                </div>
              </div>
              <p className="cad-panel-desc">{selectedLayer.description}</p>
              <div className="cad-panel-techs-heading">Technologies in this Layer</div>
              <div className="cad-panel-tech-grid">
                {selectedLayer.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="cad-panel-tech-card"
                    style={{ "--tech-color": tech.color }}
                  >
                    <div
                      className="cad-panel-tech-icon"
                      style={{ background: tech.color + "22", color: tech.color, border: `1.5px solid ${tech.color}44` }}
                    >
                      {tech.icon.length <= 2 ? tech.icon : tech.name.slice(0, 2)}
                    </div>
                    <div className="cad-panel-tech-info">
                      <span className="cad-panel-tech-name">{tech.name}</span>
                      <span className="cad-panel-tech-desc">{tech.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Indicator dots */}
              <div className="cad-panel-dots">
                {layers.map((l, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    className={`cad-dot${selected === i ? " cad-dot--active" : ""}`}
                    style={selected === i ? { background: selectedLayer.color } : {}}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="cad-benefits-section">
        <div className="container">
          <div className="cad-section-header">
            <span className="cad-section-badge">Why Altapete</span>
            <h2 className="cad-section-title">Built for Performance &amp; Scale</h2>
          </div>
          <div className="cad-benefits-grid">
            {benefits.map((b, i) => (
              <div className="cad-benefit-card" key={i}>
                <div className="cad-benefit-icon">{b.icon}</div>
                <h4 className="cad-benefit-title">{b.title}</h4>
                <p className="cad-benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cad-cta-section">
        <div className="container">
          <div className="cad-cta-box">
            <h2 className="cad-cta-title">Ready to Build Something Exceptional?</h2>
            <p className="cad-cta-sub">
              Let's talk about your project. Our architects will help you choose the right stack and
              plan a scalable solution from day one.
            </p>
            <Link href="/contact-us" className="btn btn-linear hover-up">
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ── BASE ── */
        .cad-hero { padding: 80px 0 60px; }
        .dark-theme .cad-hero { background: linear-gradient(135deg, #0a0a1a 0%, #111827 100%); }
        .light-theme .cad-hero { background: linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%); }

        .cad-hero-badge {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .dark-theme .cad-hero-badge { background: rgba(99,102,241,.15); color: #818cf8; border: 1px solid rgba(99,102,241,.3); }
        .light-theme .cad-hero-badge { background: rgba(99,102,241,.1); color: #4f46e5; border: 1px solid rgba(99,102,241,.25); }

        .cad-hero-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .dark-theme .cad-hero-title { color: #f1f5f9; }
        .light-theme .cad-hero-title { color: #0f172a; }

        .cad-gradient {
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cad-hero-sub {
          font-size: 17px;
          line-height: 1.75;
          max-width: 620px;
          margin-bottom: 32px;
        }
        .dark-theme .cad-hero-sub { color: #94a3b8; }
        .light-theme .cad-hero-sub { color: #475569; }

        .cad-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 48px; }

        .cad-btn-outline {
          display: inline-flex;
          align-items: center;
          padding: 12px 28px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.25s;
        }
        .dark-theme .cad-btn-outline { border: 1.5px solid rgba(255,255,255,.2); color: #e2e8f0; }
        .dark-theme .cad-btn-outline:hover { border-color: #6366f1; color: #818cf8; }
        .light-theme .cad-btn-outline { border: 1.5px solid rgba(0,0,0,.15); color: #334155; }
        .light-theme .cad-btn-outline:hover { border-color: #6366f1; color: #4f46e5; }

        .cad-stats { display: flex; gap: 40px; flex-wrap: wrap; }
        .cad-stat-item { text-align: center; }
        .cad-stat-val { font-size: 28px; font-weight: 800; background: linear-gradient(90deg, #6366f1, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .cad-stat-lbl { font-size: 13px; margin-top: 4px; }
        .dark-theme .cad-stat-lbl { color: #64748b; }
        .light-theme .cad-stat-lbl { color: #64748b; }

        /* ── STACK SECTION ── */
        .cad-stack-section { padding: 80px 0; }
        .dark-theme .cad-stack-section { background: #0d1117; }
        .light-theme .cad-stack-section { background: #f8fafc; }

        .cad-section-header { text-align: center; margin-bottom: 48px; }
        .cad-section-badge {
          display: inline-block;
          padding: 5px 14px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .dark-theme .cad-section-badge { background: rgba(99,102,241,.12); color: #818cf8; border: 1px solid rgba(99,102,241,.25); }
        .light-theme .cad-section-badge { background: rgba(99,102,241,.08); color: #4f46e5; border: 1px solid rgba(99,102,241,.2); }

        .cad-section-title { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800; margin-bottom: 12px; }
        .dark-theme .cad-section-title { color: #f1f5f9; }
        .light-theme .cad-section-title { color: #0f172a; }

        .cad-section-sub { font-size: 16px; max-width: 500px; margin: 0 auto; }
        .dark-theme .cad-section-sub { color: #64748b; }
        .light-theme .cad-section-sub { color: #64748b; }

        /* Stack wrapper */
        .cad-stack-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .cad-stack-wrapper { grid-template-columns: 1fr; }
        }

        /* Layer rows */
        .cad-layers-list { display: flex; flex-direction: column; gap: 10px; }

        .cad-layer-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          border-radius: 14px;
          cursor: pointer;
          border: 1.5px solid transparent;
          text-align: left;
          transition: all 0.22s ease;
          width: 100%;
          background: none;
          position: relative;
          overflow: hidden;
        }
        .dark-theme .cad-layer-row {
          background: rgba(255,255,255,.03);
          border-color: rgba(255,255,255,.06);
        }
        .light-theme .cad-layer-row {
          background: #fff;
          border-color: rgba(0,0,0,.07);
          box-shadow: 0 1px 4px rgba(0,0,0,.04);
        }
        .dark-theme .cad-layer-row:hover {
          background: rgba(255,255,255,.06);
          border-color: var(--layer-color, #6366f1);
          transform: translateX(4px);
        }
        .light-theme .cad-layer-row:hover {
          border-color: var(--layer-color, #6366f1);
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(0,0,0,.08);
        }
        .cad-layer-row--active.dark-theme .cad-layer-row,
        .dark-theme .cad-layer-row--active {
          border-color: var(--layer-color, #6366f1) !important;
          background: rgba(99,102,241,.08) !important;
          transform: translateX(4px);
          box-shadow: 0 0 0 1px var(--layer-color, #6366f1)33, 4px 0 0 0 var(--layer-color, #6366f1) inset;
        }
        .light-theme .cad-layer-row--active {
          border-color: var(--layer-color, #4f46e5) !important;
          background: rgba(99,102,241,.05) !important;
          transform: translateX(4px);
          box-shadow: 4px 0 0 0 var(--layer-color, #4f46e5) inset, 0 4px 16px rgba(99,102,241,.12);
        }

        .cad-layer-left { display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0; }
        .cad-layer-num { font-size: 11px; font-weight: 700; min-width: 22px; }
        .dark-theme .cad-layer-num { color: #475569; }
        .light-theme .cad-layer-num { color: #94a3b8; }

        .cad-layer-icon-wrap {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .cad-layer-text { display: flex; flex-direction: column; min-width: 0; }
        .cad-layer-name { font-size: 15px; font-weight: 700; }
        .dark-theme .cad-layer-name { color: #e2e8f0; }
        .light-theme .cad-layer-name { color: #1e293b; }
        .cad-layer-label { font-size: 12px; margin-top: 2px; }
        .dark-theme .cad-layer-label { color: #64748b; }
        .light-theme .cad-layer-label { color: #64748b; }

        .cad-layer-techs-mini { display: flex; gap: 4px; flex-shrink: 0; }
        .cad-tech-mini {
          width: 28px; height: 28px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 700;
          display: flex; align-items: center; justify-content: center;
        }
        .dark-theme .cad-tech-mini { background: rgba(255,255,255,.07); color: #94a3b8; }
        .light-theme .cad-tech-mini { background: rgba(0,0,0,.05); color: #475569; }

        .cad-layer-arrow { font-size: 20px; flex-shrink: 0; transition: transform 0.2s; }
        .dark-theme .cad-layer-arrow { color: #334155; }
        .light-theme .cad-layer-arrow { color: #cbd5e1; }
        .cad-layer-row--active .cad-layer-arrow { transform: rotate(90deg); color: var(--layer-color, #6366f1); }

        /* Detail panel */
        .cad-detail-panel {
          border-radius: 20px;
          padding: 28px;
          position: sticky;
          top: 90px;
          border: 1.5px solid var(--panel-color, #6366f1)33;
          transition: all 0.3s ease;
        }
        .dark-theme .cad-detail-panel { background: rgba(255,255,255,.03); }
        .light-theme .cad-detail-panel { background: #fff; box-shadow: 0 4px 24px rgba(0,0,0,.07); }

        .cad-panel-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: 1.5px solid;
        }

        .cad-panel-icon-big {
          width: 64px; height: 64px;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .cad-panel-badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }

        .cad-panel-name { font-size: 22px; font-weight: 800; margin: 0; }
        .dark-theme .cad-panel-name { color: #f1f5f9; }
        .light-theme .cad-panel-name { color: #0f172a; }

        .cad-panel-desc { font-size: 14.5px; line-height: 1.75; margin-bottom: 24px; }
        .dark-theme .cad-panel-desc { color: #94a3b8; }
        .light-theme .cad-panel-desc { color: #475569; }

        .cad-panel-techs-heading {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .dark-theme .cad-panel-techs-heading { color: #475569; }
        .light-theme .cad-panel-techs-heading { color: #94a3b8; }

        .cad-panel-tech-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 24px;
        }

        .cad-panel-tech-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          border-radius: 12px;
          transition: all 0.2s;
        }
        .dark-theme .cad-panel-tech-card { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.06); }
        .light-theme .cad-panel-tech-card { background: #f8fafc; border: 1px solid rgba(0,0,0,.06); }
        .dark-theme .cad-panel-tech-card:hover { background: rgba(255,255,255,.07); border-color: var(--tech-color)55; }
        .light-theme .cad-panel-tech-card:hover { background: #f0f4ff; border-color: var(--tech-color)55; }

        .cad-panel-tech-icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .cad-panel-tech-info { display: flex; flex-direction: column; min-width: 0; }
        .cad-panel-tech-name { font-size: 13px; font-weight: 700; }
        .dark-theme .cad-panel-tech-name { color: #e2e8f0; }
        .light-theme .cad-panel-tech-name { color: #1e293b; }
        .cad-panel-tech-desc { font-size: 11px; margin-top: 2px; }
        .dark-theme .cad-panel-tech-desc { color: #64748b; }
        .light-theme .cad-panel-tech-desc { color: #94a3b8; }

        .cad-panel-dots { display: flex; gap: 6px; justify-content: center; }
        .cad-dot {
          width: 8px; height: 8px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          padding: 0;
        }
        .dark-theme .cad-dot { background: rgba(255,255,255,.12); }
        .light-theme .cad-dot { background: rgba(0,0,0,.12); }
        .cad-dot--active { width: 24px; }

        /* ── BENEFITS ── */
        .cad-benefits-section { padding: 80px 0; }
        .dark-theme .cad-benefits-section { background: #0a0a1a; }
        .light-theme .cad-benefits-section { background: #fff; }

        .cad-benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }

        .cad-benefit-card {
          padding: 28px 24px;
          border-radius: 16px;
          text-align: center;
          transition: all 0.2s;
        }
        .dark-theme .cad-benefit-card { background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.06); }
        .light-theme .cad-benefit-card { background: #f8fafc; border: 1px solid rgba(0,0,0,.06); }
        .dark-theme .cad-benefit-card:hover { background: rgba(255,255,255,.06); transform: translateY(-4px); }
        .light-theme .cad-benefit-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,.08); transform: translateY(-4px); }

        .cad-benefit-icon { font-size: 36px; margin-bottom: 14px; }
        .cad-benefit-title { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
        .dark-theme .cad-benefit-title { color: #e2e8f0; }
        .light-theme .cad-benefit-title { color: #1e293b; }
        .cad-benefit-desc { font-size: 13.5px; line-height: 1.6; }
        .dark-theme .cad-benefit-desc { color: #64748b; }
        .light-theme .cad-benefit-desc { color: #64748b; }

        /* ── CTA ── */
        .cad-cta-section { padding: 80px 0; }
        .dark-theme .cad-cta-section { background: #0d1117; }
        .light-theme .cad-cta-section { background: #f0f4ff; }

        .cad-cta-box {
          text-align: center;
          padding: 60px 40px;
          border-radius: 24px;
          max-width: 700px;
          margin: 0 auto;
        }
        .dark-theme .cad-cta-box { background: rgba(99,102,241,.08); border: 1.5px solid rgba(99,102,241,.2); }
        .light-theme .cad-cta-box { background: #fff; border: 1.5px solid rgba(99,102,241,.15); box-shadow: 0 8px 32px rgba(99,102,241,.1); }

        .cad-cta-title { font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; margin-bottom: 16px; }
        .dark-theme .cad-cta-title { color: #f1f5f9; }
        .light-theme .cad-cta-title { color: #0f172a; }

        .cad-cta-sub { font-size: 16px; line-height: 1.75; margin-bottom: 32px; }
        .dark-theme .cad-cta-sub { color: #94a3b8; }
        .light-theme .cad-cta-sub { color: #475569; }
      `}</style>
    </div>
  );
}
