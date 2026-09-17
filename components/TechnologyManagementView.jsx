import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const TECH_CARDS = [
  {
    id: 'infrastructure',
    title: 'Infrastructure Management',
    tag: 'COMPLETE IT INFRASTRUCTURE',
    accentColor: '#00AEEF',
    desc: 'End-to-end management of your IT infrastructure with 24/7 monitoring and proactive maintenance.',
    stats: [
      { value: '99.9%', label: 'Uptime' },
      { value: '98%', label: 'Satisfaction' }
    ],
    metrics: [
      { label: 'Uptime', value: '99.9%', pct: 99.9 },
      { label: 'Response Time', value: '< 2min', pct: 95 },
      { label: 'Customer Satisfaction', value: '98%', pct: 98 }
    ],
    features: ['Server Management', 'Network Optimization', 'Hardware Lifecycle', 'Performance Tuning'],
    story: { client: 'Enterprise Corp', boost: '40% faster response', save: '$200K annually' },
    renderIcon: (color) => (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    id: 'cloud',
    title: 'Cloud Operations',
    tag: 'MULTI-CLOUD PLATFORM',
    accentColor: '#00C6FF',
    desc: 'Seamless cloud migration, optimization, and governance across AWS, Azure, and Google Cloud platforms.',
    stats: [
      { value: '99.95%', label: 'Uptime' },
      { value: '96%', label: 'Satisfaction' }
    ],
    metrics: [
      { label: 'Uptime', value: '99.95%', pct: 99.95 },
      { label: 'Response Time', value: '< 1min', pct: 95 },
      { label: 'Customer Satisfaction', value: '96%', pct: 96 }
    ],
    features: ['Cloud Migration', 'Cost Optimization', 'Multi-Cloud Strategy', 'Disaster Recovery'],
    story: { client: 'TechStart Inc', boost: '60% cost reduction', save: '$150K annually' },
    renderIcon: (color) => (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    )
  },
  {
    id: 'devops',
    title: 'DevOps Services',
    tag: 'CI/CD & AUTOMATION',
    accentColor: '#00E5FF',
    desc: 'Streamlined development operations with automated CI/CD pipelines and deployment management.',
    stats: [
      { value: '99.8%', label: 'Uptime' },
      { value: '97%', label: 'Satisfaction' }
    ],
    metrics: [
      { label: 'Uptime', value: '99.8%', pct: 99.8 },
      { label: 'Response Time', value: 'Instant', pct: 95 },
      { label: 'Customer Satisfaction', value: '97%', pct: 97 }
    ],
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Release Management'],
    story: { client: 'DevTeam Pro', boost: '75% faster deployments', save: '$120K annually' },
    renderIcon: (color) => (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
        <path d="M14.7 10.7 20 16l-4 4-5.3-5.3" />
        <path d="M2.5 14.5A7 7 0 0 1 12 5l-2 2 3 3-2 2-3-3-2 2a7 7 0 0 1-3.5 2.5z" />
      </svg>
    )
  },
  {
    id: 'monitoring',
    title: 'Performance Monitoring',
    tag: 'REAL-TIME ANALYTICS',
    accentColor: '#38BDF8',
    desc: 'Comprehensive monitoring and analytics with AI-powered insights for optimal performance.',
    stats: [
      { value: '100%', label: 'Uptime' },
      { value: '99%', label: 'Satisfaction' }
    ],
    metrics: [
      { label: 'Uptime', value: '100%', pct: 100 },
      { label: 'Response Time', value: 'Real-time', pct: 95 },
      { label: 'Customer Satisfaction', value: '99%', pct: 99 }
    ],
    features: ['Real-time Monitoring', 'Predictive Analytics', 'Custom Dashboards', 'Alert Management'],
    story: { client: 'Analytics Hub', boost: '90% issue prevention', save: '$300K annually' },
    renderIcon: (color) => (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    )
  },
  {
    id: 'security',
    title: 'Security Management',
    tag: 'CYBER PROTECTION',
    accentColor: '#00B8D9',
    desc: 'Advanced cybersecurity solutions with threat detection, incident response, and compliance management.',
    stats: [
      { value: '99.99%', label: 'Uptime' },
      { value: '100%', label: 'Satisfaction' }
    ],
    metrics: [
      { label: 'Uptime', value: '99.99%', pct: 99.99 },
      { label: 'Response Time', value: '< 30sec', pct: 95 },
      { label: 'Customer Satisfaction', value: '100%', pct: 100 }
    ],
    features: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Security Audits'],
    story: { client: 'SecureBank', boost: '100% threat blocked', save: '$500K annually' },
    renderIcon: (color) => (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  },
  {
    id: 'operations',
    title: 'IT Operations',
    tag: 'OPERATIONAL EXCELLENCE',
    accentColor: '#00AEEF',
    desc: 'ITIL-based service management ensuring business continuity and operational efficiency.',
    stats: [
      { value: '99.9%', label: 'Uptime' },
      { value: '95%', label: 'Satisfaction' }
    ],
    metrics: [
      { label: 'Uptime', value: '99.9%', pct: 99.9 },
      { label: 'Response Time', value: '< 5min', pct: 95 },
      { label: 'Customer Satisfaction', value: '95%', pct: 95 }
    ],
    features: ['Service Desk', 'Change Management', 'Asset Management', 'Process Optimization'],
    story: { client: 'Global Corp', boost: '50% ticket reduction', save: '$180K annually' },
    renderIcon: (color) => (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    )
  }
];

const ORBIT_NODES = [
  { id: 'devops', label: 'DevOps', x: 0, y: -155, color: '#00AEEF' },
  { id: 'public', label: 'Public Cloud', x: 140, y: -75, color: '#00C6FF' },
  { id: 'private', label: 'Private Cloud', x: 140, y: 75, color: '#00E5FF' },
  { id: 'baremetal', label: 'Bare-metal', x: 0, y: 155, color: '#40C4FF' },
  { id: 'noc-soc', label: 'NOC-SOC', x: -140, y: 75, color: '#00B8D9' },
  { id: 'technical', label: 'Technical', x: -140, y: -75, color: '#00AEEF' }
];

export default function TechnologyManagementView() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [flippedCards, setFlippedCards] = useState({});
  const [activeNode, setActiveNode] = useState(null);

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={`tech-view-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
      {/* 1. HERO SECTION */}
      <section className="tech-hero-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="eyebrow-badge">
                <span>Advanced Technology Solutions</span>
                <div className="eyebrow-line"></div>
              </div>

              <h1 className="hero-title">
                Professional IT <span className="highlight-text">Services</span>
              </h1>

              <p className="hero-description">
                Accelerate your business with our comprehensive{' '}
                <strong className="accent-strong">DevOps, Cloud, and Infrastructure solutions</strong>.
                From bare-metal server setup to 24/7 NOC-SOC monitoring, we deliver enterprise-grade technology services tailored to your needs.
              </p>

              <div className="service-pills-row">
                <span className="pill-badge">DevOps Automation</span>
                <span className="pill-badge">Public &amp; Private Cloud</span>
                <span className="pill-badge">Bare-metal Server Setup</span>
                <span className="pill-badge">NOC-SOC Monitoring</span>
              </div>
            </div>

            {/* Right Visual Orbit Hub */}
            <div className="col-lg-6 text-center">
              <div className="orbit-stage-container">
                {/* Central Hub */}
                <div className="orbit-central-hub">
                  <div className="central-hub-inner">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto' }}>
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span className="hub-label">Core IT</span>
                  </div>
                </div>

                {/* Orbit Rings */}
                <div className="orbit-ring orbit-ring-inner"></div>
                <div className="orbit-ring orbit-ring-outer"></div>

                {/* Connecting Lines SVG */}
                <svg className="orbit-lines-svg" viewBox="0 0 440 440">
                  <defs>
                    <linearGradient id="orbitLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  {ORBIT_NODES.map((node) => (
                    <line
                      key={`line-${node.id}`}
                      x1="220"
                      y1="220"
                      x2={220 + node.x}
                      y2={220 + node.y}
                      stroke="url(#orbitLineGrad)"
                      strokeWidth={activeNode === node.id ? "2.5" : "1.2"}
                      strokeDasharray={activeNode === node.id ? "none" : "3,3"}
                      className="orbit-beam"
                    />
                  ))}
                </svg>

                {/* Satellite Nodes */}
                {ORBIT_NODES.map((node) => {
                  const isActive = activeNode === node.id;
                  return (
                    <div
                      key={node.id}
                      className={`orbit-node-item ${isActive ? 'active-node' : ''}`}
                      style={{
                        transform: `translate(calc(-50% + ${node.x}px), calc(-50% + ${node.y}px))`
                      }}
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                    >
                      <div className="node-icon-dot" style={{ background: node.color }}></div>
                      <span className="node-text">{node.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PORTFOLIO CARDS SECTION */}
      <section className="tech-portfolio-section">
        <div className="container">
          <div className="portfolio-header text-center">
            <h5 className="section-eyebrow">TECHNOLOGY SERVICES PORTFOLIO</h5>
            <h2 className="section-title">
              Comprehensive IT Solutions <span className="highlight-text">&amp; Services</span>
            </h2>
            <p className="section-subtitle">
              Explore our full range of technology management services designed to optimize your IT infrastructure and drive business growth.
            </p>
          </div>

          <div className="row">
            {TECH_CARDS.map((card) => {
              const isFlipped = !!flippedCards[card.id];

              return (
                <div key={card.id} className="col-lg-4 col-md-6 mb-4">
                  <div className={`tech-card-scene ${isFlipped ? 'is-flipped' : ''}`}>
                    <div className="tech-card-flipper">
                      {/* FRONT OF CARD */}
                      <div className="tech-card-face tech-card-front">
                        {/* EXACT CENTER-ALIGNED ICON CONTAINER */}
                        <div className="tech-icon-box" style={{ color: card.accentColor }}>
                          {card.renderIcon(card.accentColor)}
                        </div>

                        {/* Title & Tag */}
                        <h3 className="card-headline">{card.title}</h3>
                        <div className="card-tag-badge">{card.tag}</div>

                        {/* Description */}
                        <p className="card-body-desc">{card.desc}</p>

                        {/* Stats Grid */}
                        <div className="card-stats-grid">
                          {card.stats.map((stat, sIdx) => (
                            <div key={sIdx} className="stat-block">
                              <div className="stat-number" style={{ color: card.accentColor }}>{stat.value}</div>
                              <div className="stat-name">{stat.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Flip Button */}
                        <button
                          type="button"
                          className="card-flip-btn"
                          style={{ color: card.accentColor }}
                          onClick={() => toggleFlip(card.id)}
                          aria-label={`View details for ${card.title}`}
                        >
                          <span>View Details</span>
                          <span className="flip-icon">↻</span>
                        </button>
                      </div>

                      {/* BACK OF CARD */}
                      <div className="tech-card-face tech-card-back">
                        {/* Back Header */}
                        <div className="back-header">
                          <h4 className="back-headline">Service Details</h4>
                          <button
                            type="button"
                            className="back-return-btn"
                            style={{ color: card.accentColor }}
                            onClick={() => toggleFlip(card.id)}
                          >
                            ← Back
                          </button>
                        </div>

                        {/* Performance Metrics */}
                        <div className="metrics-group">
                          <h5 className="group-title">Performance Metrics</h5>
                          {card.metrics.map((m, mIdx) => (
                            <div key={mIdx} className="metric-row">
                              <div className="metric-labels">
                                <span className="metric-name">{m.label}</span>
                                <span className="metric-val" style={{ color: card.accentColor }}>{m.value}</span>
                              </div>
                              <div className="metric-progress-track">
                                <div
                                  className="metric-progress-bar"
                                  style={{
                                    width: `${m.pct}%`,
                                    background: `linear-gradient(90deg, ${card.accentColor}, ${card.accentColor}cc)`
                                  }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Key Features */}
                        <div className="features-group">
                          <h5 className="group-title">Key Features</h5>
                          <div className="features-grid">
                            {card.features.map((feat, fIdx) => (
                              <div key={fIdx} className="feature-item">
                                <span className="feature-bullet" style={{ background: card.accentColor }}></span>
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Success Story */}
                        <div className="story-badge">
                          <div className="story-title" style={{ color: card.accentColor }}>
                            Success Story: {card.story.client}
                          </div>
                          <div className="story-metrics">
                            <div>
                              <div className="story-val">{card.story.boost}</div>
                              <div className="story-lbl">Performance Boost</div>
                            </div>
                            <div className="text-right">
                              <div className="story-val" style={{ color: card.accentColor }}>{card.story.save}</div>
                              <div className="story-lbl">Cost Savings</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION SECTION */}
      <section className="tech-cta-section">
        <div className="container">
          <div className="cta-glass-box text-center">
            <h3 className="cta-title">Ready to Transform Your Technology?</h3>
            <p className="cta-desc">
              Let&apos;s discuss how our comprehensive IT services can optimize your infrastructure and accelerate your business growth.
            </p>
            <div className="cta-btn-wrapper">
              <Link 
                href="/contact-us" 
                className="cta-primary-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  borderRadius: '50px',
                  padding: '16px 44px',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#ffffff',
                  textDecoration: 'none',
                  background: isDark 
                    ? 'linear-gradient(135deg, #00AEEF 0%, #0088C7 100%)' 
                    : 'linear-gradient(135deg, #2c73d9 0%, #1d4ed8 100%)',
                  boxShadow: isDark 
                    ? '0 12px 32px rgba(0, 174, 239, 0.4)' 
                    : '0 12px 28px rgba(44, 115, 217, 0.35)',
                  transition: 'all 0.3s ease'
                }}
              >
                <span>Schedule Free Consultation</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENT SCOPED CSS */}
      <style jsx>{`
        .tech-view-wrapper {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding-top: 20px;
          padding-bottom: 60px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* --- THEME COLORS --- */
        .tech-view-wrapper.dark-theme {
          color: #E2E8F0;
        }
        .tech-view-wrapper.light-theme {
          color: #1E293B;
        }

        /* --- HERO SECTION --- */
        .tech-hero-section {
          padding: 40px 0 60px 0;
          position: relative;
        }

        .eyebrow-badge {
          display: inline-flex;
          flex-direction: column;
          margin-bottom: 16px;
        }

        .eyebrow-badge span {
          color: #00AEEF;
          font-size: 15px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .eyebrow-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #00AEEF, #0088C7);
          border-radius: 1px;
        }

        .hero-title {
          font-size: 46px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .dark-theme .hero-title {
          color: #FFFFFF;
        }
        .light-theme .hero-title {
          color: #0F172A;
        }

        .highlight-text {
          color: #00AEEF;
        }

        .hero-description {
          font-size: 17px;
          line-height: 1.7;
          margin-bottom: 30px;
          max-width: 540px;
        }

        .dark-theme .hero-description {
          color: #B0C4D8;
        }
        .light-theme .hero-description {
          color: #475569;
        }

        .accent-strong {
          color: #00AEEF;
          font-weight: 600;
        }

        .service-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pill-badge {
          border-radius: 25px;
          padding: 8px 18px;
          font-size: 13.5px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .dark-theme .pill-badge {
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.3);
          color: #00AEEF;
        }
        .light-theme .pill-badge {
          background: rgba(0, 174, 239, 0.08);
          border: 1px solid rgba(0, 174, 239, 0.25);
          color: #0284C7;
        }

        .pill-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 174, 239, 0.2);
        }

        /* --- ORBIT HUB VISUAL --- */
        .orbit-stage-container {
          position: relative;
          width: 440px;
          height: 440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbit-central-hub {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: all 0.3s ease;
        }

        .dark-theme .orbit-central-hub {
          background: linear-gradient(135deg, #0d1a2a, #102030);
          border: 2.5px solid #00AEEF;
          box-shadow: 0 0 35px rgba(0, 174, 239, 0.5);
        }
        .light-theme .orbit-central-hub {
          background: #FFFFFF;
          border: 2.5px solid #00AEEF;
          box-shadow: 0 10px 30px rgba(0, 174, 239, 0.25);
        }

        .central-hub-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .hub-label {
          font-size: 11px;
          font-weight: 700;
          color: #00AEEF;
          margin-top: 4px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .orbit-ring-inner {
          width: 250px;
          height: 250px;
          border: 1px dashed rgba(0, 174, 239, 0.25);
        }

        .orbit-ring-outer {
          width: 380px;
          height: 380px;
          border: 1px solid rgba(0, 174, 239, 0.15);
        }

        .orbit-lines-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .orbit-node-item {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 14px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          z-index: 6;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
        }

        .dark-theme .orbit-node-item {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(0, 174, 239, 0.3);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }
        .light-theme .orbit-node-item {
          background: #FFFFFF;
          border: 1.5px solid rgba(0, 174, 239, 0.3);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .orbit-node-item:hover,
        .orbit-node-item.active-node {
          transform: translate(calc(-50% + 0px), calc(-50% + 0px)) scale(1.1);
          border-color: #00AEEF;
          box-shadow: 0 0 20px rgba(0, 174, 239, 0.4);
        }

        .node-icon-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .node-text {
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }

        .dark-theme .node-text {
          color: #FFFFFF;
        }
        .light-theme .node-text {
          color: #0F172A;
        }

        /* --- PORTFOLIO SECTION --- */
        .tech-portfolio-section {
          padding: 60px 0;
          position: relative;
        }

        .portfolio-header {
          margin-bottom: 48px;
        }

        .section-eyebrow {
          color: #00AEEF;
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 14px;
        }

        .section-title {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.25;
          margin-bottom: 16px;
        }

        .dark-theme .section-title {
          color: #FFFFFF;
        }
        .light-theme .section-title {
          color: #0F172A;
        }

        .section-subtitle {
          font-size: 17px;
          line-height: 1.6;
          max-width: 680px;
          margin: 0 auto;
        }

        .dark-theme .section-subtitle {
          color: #94A3B8;
        }
        .light-theme .section-subtitle {
          color: #64748B;
        }

        /* --- 3D FLIP CARD SCENE --- */
        .tech-card-scene {
          perspective: 1000px;
          width: 100%;
          min-height: 520px;
          height: 520px;
        }

        .tech-card-flipper {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .tech-card-scene.is-flipped .tech-card-flipper {
          transform: rotateY(180deg);
        }

        .tech-card-face {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 24px;
          padding: 34px 28px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        /* Dark Theme Card Face */
        .dark-theme .tech-card-face {
          background: rgba(13, 22, 38, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(0, 174, 239, 0.2);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
        }

        .dark-theme .tech-card-face:hover {
          border-color: rgba(0, 174, 239, 0.45);
          box-shadow: 0 20px 45px rgba(0, 174, 239, 0.15);
        }

        /* Light Theme Card Face */
        .light-theme .tech-card-face {
          background: #FFFFFF;
          border: 1.5px solid rgba(0, 174, 239, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
        }

        .light-theme .tech-card-face:hover {
          border-color: #00AEEF;
          box-shadow: 0 16px 40px rgba(0, 174, 239, 0.18);
        }

        /* --- CARD FRONT CONTENT --- */
        .tech-card-front {
          align-items: center;
          text-align: center;
        }

        /* EXACT CENTER-ALIGNED ICON CONTAINER */
        .tech-icon-box {
          width: 76px;
          height: 76px;
          margin: 0 auto 20px auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          flex-shrink: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .dark-theme .tech-icon-box {
          background: rgba(0, 174, 239, 0.12);
          border: 1.5px solid rgba(0, 174, 239, 0.35);
          box-shadow: 0 8px 24px rgba(0, 174, 239, 0.18);
        }

        .light-theme .tech-icon-box {
          background: rgba(0, 174, 239, 0.08);
          border: 1.5px solid rgba(0, 174, 239, 0.25);
          box-shadow: 0 4px 16px rgba(0, 174, 239, 0.1);
        }

        .tech-card-face:hover .tech-icon-box {
          transform: translateY(-4px);
        }

        .card-headline {
          font-size: 21px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 8px;
        }

        .dark-theme .card-headline {
          color: #FFFFFF;
        }
        .light-theme .card-headline {
          color: #0F172A;
        }

        .card-tag-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #00AEEF;
          margin-bottom: 14px;
        }

        .card-body-desc {
          font-size: 14.5px;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .dark-theme .card-body-desc {
          color: #94A3B8;
        }
        .light-theme .card-body-desc {
          color: #475569;
        }

        .card-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          width: 100%;
          margin-bottom: 20px;
        }

        .stat-block {
          border-radius: 12px;
          padding: 10px 8px;
          text-align: center;
        }

        .dark-theme .stat-block {
          background: rgba(0, 174, 239, 0.08);
          border: 1px solid rgba(0, 174, 239, 0.22);
        }
        .light-theme .stat-block {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
        }

        .stat-number {
          font-size: 18px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 3px;
        }

        .stat-name {
          font-size: 11.5px;
          font-weight: 500;
        }

        .dark-theme .stat-name {
          color: #94A3B8;
        }
        .light-theme .stat-name {
          color: #64748B;
        }

        .card-flip-btn {
          background: transparent;
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          padding: 6px 14px;
          border-radius: 20px;
          transition: all 0.25s ease;
          margin: 0 auto;
        }

        .card-flip-btn:hover {
          background: rgba(0, 174, 239, 0.12);
          transform: translateY(-1px);
        }

        .flip-icon {
          font-size: 16px;
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .card-flip-btn:hover .flip-icon {
          transform: rotate(180deg);
        }

        /* --- CARD BACK CONTENT --- */
        .tech-card-back {
          transform: rotateY(180deg);
          justify-content: space-between;
        }

        .back-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(0, 174, 239, 0.18);
        }

        .back-headline {
          font-size: 18px;
          font-weight: 700;
          margin: 0;
        }

        .dark-theme .back-headline {
          color: #FFFFFF;
        }
        .light-theme .back-headline {
          color: #0F172A;
        }

        .back-return-btn {
          background: transparent;
          border: none;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          padding: 4px 10px;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .back-return-btn:hover {
          background: rgba(0, 174, 239, 0.1);
        }

        .group-title {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 12px;
        }

        .dark-theme .group-title {
          color: #CBD5E1;
        }
        .light-theme .group-title {
          color: #334155;
        }

        .metrics-group {
          margin-bottom: 18px;
        }

        .metric-row {
          margin-bottom: 10px;
        }

        .metric-labels {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          margin-bottom: 4px;
        }

        .dark-theme .metric-name {
          color: #94A3B8;
        }
        .light-theme .metric-name {
          color: #64748B;
        }

        .metric-val {
          font-weight: 700;
        }

        .metric-progress-track {
          width: 100%;
          height: 5px;
          border-radius: 3px;
          overflow: hidden;
        }

        .dark-theme .metric-progress-track {
          background: rgba(255, 255, 255, 0.08);
        }
        .light-theme .metric-progress-track {
          background: #E2E8F0;
        }

        .metric-progress-bar {
          height: 100%;
          border-radius: 3px;
          transition: width 1s ease-out;
        }

        .features-group {
          margin-bottom: 18px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
        }

        .dark-theme .feature-item {
          color: #B0C4D8;
        }
        .light-theme .feature-item {
          color: #475569;
        }

        .feature-bullet {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .story-badge {
          border-radius: 14px;
          padding: 12px 14px;
        }

        .dark-theme .story-badge {
          background: rgba(0, 174, 239, 0.07);
          border: 1px solid rgba(0, 174, 239, 0.22);
        }
        .light-theme .story-badge {
          background: #F0F9FF;
          border: 1px solid rgba(0, 174, 239, 0.25);
        }

        .story-title {
          font-size: 12.5px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .story-metrics {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .story-val {
          font-size: 12px;
          font-weight: 700;
        }

        .dark-theme .story-val {
          color: #FFFFFF;
        }
        .light-theme .story-val {
          color: #0F172A;
        }

        .story-lbl {
          font-size: 10px;
        }

        .dark-theme .story-lbl {
          color: #94A3B8;
        }
        .light-theme .story-lbl {
          color: #64748B;
        }

        /* --- CTA SECTION --- */
        .tech-cta-section {
          padding: 40px 0 20px 0;
        }

        .cta-glass-box {
          border-radius: 28px;
          padding: 50px 30px;
          max-width: 960px;
          margin: 0 auto;
        }

        .dark-theme .cta-glass-box {
          background: rgba(0, 174, 239, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 174, 239, 0.25);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .light-theme .cta-glass-box {
          background: #FFFFFF;
          border: 1.5px solid rgba(0, 174, 239, 0.25);
          box-shadow: 0 15px 40px rgba(0, 174, 239, 0.1);
        }

        .cta-title {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .dark-theme .cta-title {
          color: #FFFFFF;
        }
        .light-theme .cta-title {
          color: #0F172A;
        }

        .cta-desc {
          font-size: 16.5px;
          max-width: 620px;
          margin: 0 auto 30px auto;
          line-height: 1.6;
        }

        .dark-theme .cta-desc {
          color: #B0C4D8;
        }
        .light-theme .cta-desc {
          color: #475569;
        }

        .cta-btn-wrapper {
          display: flex;
          justify-content: center;
        }

        :global(.cta-primary-btn) {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 10px !important;
          border-radius: 50px !important;
          padding: 16px 44px !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          color: #ffffff !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          cursor: pointer !important;
        }

        :global(.dark-theme .cta-primary-btn) {
          background: linear-gradient(135deg, #00AEEF 0%, #0088C7 100%) !important;
          color: #ffffff !important;
          box-shadow: 0 12px 32px rgba(0, 174, 239, 0.4) !important;
        }

        :global(.dark-theme .cta-primary-btn:hover) {
          transform: translateY(-2px) !important;
          box-shadow: 0 16px 42px rgba(0, 174, 239, 0.6) !important;
          color: #ffffff !important;
        }

        :global(.light-theme .cta-primary-btn) {
          background: linear-gradient(135deg, #2c73d9 0%, #1d4ed8 100%) !important;
          color: #ffffff !important;
          box-shadow: 0 12px 28px rgba(44, 115, 217, 0.35) !important;
        }

        :global(.light-theme .cta-primary-btn:hover) {
          transform: translateY(-2px) !important;
          box-shadow: 0 16px 36px rgba(44, 115, 217, 0.5) !important;
          color: #ffffff !important;
        }

        /* --- RESPONSIVE BREAKPOINTS --- */
        @media (max-width: 991px) {
          .hero-title {
            font-size: 38px;
          }
          .orbit-stage-container {
            width: 360px;
            height: 360px;
            margin-top: 30px;
          }
          .orbit-ring-outer {
            width: 320px;
            height: 320px;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 30px;
          }
          .section-title {
            font-size: 28px;
          }
          .orbit-stage-container {
            width: 300px;
            height: 300px;
          }
          .orbit-ring-outer {
            width: 270px;
            height: 270px;
          }
          .orbit-ring-inner {
            width: 180px;
            height: 180px;
          }
          .cta-title {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}
