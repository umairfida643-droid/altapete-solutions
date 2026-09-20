import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import {
  Layers, Code2, Database, ShieldCheck, Zap,
  TrendingUp, Users, CheckCircle2, ArrowRight,
  Sparkles, Compass, Target, Handshake,
  Award, Cpu, Server, FileCheck, Phone,
  Mail, MapPin, ExternalLink, ChevronRight, Globe
} from 'lucide-react';

// Central Orb Floating Capabilities
const orbitNodes = [
  { id: 'erp', title: 'ERP & Odoo', icon: Database, x: 78, y: 22, desc: 'Certified Odoo & Enterprise Workflows' },
  { id: 'cloud', title: 'Cloud Apps', icon: Code2, x: 86, y: 64, desc: 'Next.js, React & Microservices' },
  { id: 'zatca', title: 'ZATCA Phase 2', icon: FileCheck, x: 50, y: 90, desc: '100% Compliant E-Invoicing' },
  { id: 'devops', title: 'Cloud & DevOps', icon: Server, x: 14, y: 64, desc: 'AWS, Docker, K8s Architecture' },
  { id: 'advisory', title: 'IT Advisory', icon: TrendingUp, x: 22, y: 22, desc: 'Fractional CTO & Strategic Governance' },
  { id: 'fintech', title: 'Fintech & HR', icon: Cpu, x: 50, y: 8, desc: 'Muqeem, MADA & Gateway Connectors' },
];

const capabilities = [
  {
    id: 'erp',
    badge: 'Flagship Core',
    icon: Database,
    title: 'Enterprise ERP & Odoo Engineering',
    tagline: 'End-to-end ERP implementation, localized Saudi compliance & multi-company architectures.',
    description: 'We design, deploy, and customize high-performance ERP systems powered by Odoo, Oracle, and enterprise architectures. From financial ledgers to complex supply chains, we ensure your operations run seamlessly with zero downtime.',
    features: [
      'Odoo V16 & V17 Certified Deployment',
      'Multi-Company & Cross-Border Accounting',
      'Custom ERP Module Development & API Bridges',
      'Seamless Data Migration from Legacy Systems'
    ],
    metrics: { stat: '99.9%', label: 'Uptime & Data Integrity' },
    link: '/odoo-to-odoo-data-integration',
    ctaText: 'Explore ERP Solutions'
  },
  {
    id: 'custom-apps',
    badge: 'Engineering',
    icon: Code2,
    title: 'Custom Application & Cloud Engineering',
    tagline: 'Bespoke web and mobile platforms built with high-velocity modern tech stacks.',
    description: 'When off-the-shelf software falls short, we engineer tailored enterprise software solutions. We leverage Next.js, React, Node.js, Python, PostgreSQL, and scalable microservices to deliver secure, lightning-fast digital products.',
    features: [
      'Full-Stack Web & Mobile Architecture',
      'High-Throughput RESTful & GraphQL APIs',
      'Cloud-Native Microservices & Serverless',
      'Enterprise Role-Based Access & Security Auditing'
    ],
    metrics: { stat: '10x', label: 'Faster Time-to-Market' },
    link: '/custom-app-development',
    ctaText: 'Explore Custom Dev'
  },
  {
    id: 'compliance',
    badge: 'Regulatory Excellence',
    icon: ShieldCheck,
    title: 'ZATCA & Government Gateway Integrations',
    tagline: 'Certified Phase 2 e-invoicing clearance, reporting & Saudi portal integrations.',
    description: 'Our proprietary compliance bridges integrate directly with ZATCA (FATOORA), Muqeem, Qiwa, MADA, and local banking networks. Guarantee 100% legal compliance with cryptographic tamper-proofing and real-time validation.',
    features: [
      'ZATCA Phase 2 Clearance & Reporting API',
      'Cryptographic XML Signing & QR Hash Generation',
      'Muqeem & Qiwa HR Automated Sync',
      'MADA, Visa & Corporate Banking Connectors'
    ],
    metrics: { stat: '100%', label: 'ZATCA Compliance Rate' },
    link: '/zatca-integration',
    ctaText: 'Explore ZATCA Integration'
  },
  {
    id: 'advisory',
    badge: 'Strategic Advisory',
    icon: TrendingUp,
    title: 'Technology Management & Corporate Advisory',
    tagline: 'Senior IT leadership, fractional CTO, and SOCPA-certified financial advisory.',
    description: 'Bridge the gap between business strategy and technological execution. Our seasoned advisory board guides C-suite leaders through digital transformation roadmaps, cloud cost optimization, and SOCPA/ICAP corporate governance.',
    features: [
      'Fractional CTO & IT Governance Advisory',
      'SOCPA & ICAP Financial Advisory',
      'Cloud Infrastructure & Security Audits',
      '24/7 Managed DBA & Enterprise SLAs'
    ],
    metrics: { stat: '13+', label: 'Years Advisory Heritage' },
    link: '/technology-management',
    ctaText: 'Explore Advisory'
  }
];

const methodologySteps = [
  {
    num: '01',
    title: 'Strategic Architecture & Discovery',
    desc: 'We perform in-depth analysis of your operational workflows, data pipelines, and compliance mandates to formulate a rock-solid technical blueprint.'
  },
  {
    num: '02',
    title: 'Agile Engineering & Prototyping',
    desc: 'Our senior engineers develop in rapid iterative sprints with bi-weekly demonstrations, continuous code reviews, and stringent security benchmarks.'
  },
  {
    num: '03',
    title: 'Rigorous Sandbox & QA Validation',
    desc: 'End-to-end automated testing, load stress simulations, and certified sandbox validations (including official ZATCA compliance checks) prior to launch.'
  },
  {
    num: '04',
    title: 'Zero-Downtime Launch & 24/7 SLA',
    desc: 'Precision deployment orchestration, comprehensive team training, and proactive 24/7 technical monitoring with dedicated SLA support.'
  }
];

const values = [
  {
    icon: Handshake,
    title: 'Integrity First',
    desc: 'Uncompromising transparency and ethical principles guiding every architectural recommendation and business relationship.'
  },
  {
    icon: Zap,
    title: 'Engineering Rigor',
    desc: 'Zero shortcuts in code quality, security architecture, and system scalability to build software that lasts for decades.'
  },
  {
    icon: Target,
    title: 'Client Ownership',
    desc: 'We treat your mission-critical challenges as our own, taking end-to-end accountability for every project outcome.'
  },
  {
    icon: Award,
    title: 'Measured Impact',
    desc: 'Every technical solution is engineered to generate tangible, measurable ROI, operational speed, and cost efficiency.'
  }
];

const stats = [
  { number: '150+', label: 'Enterprise Projects Delivered' },
  { number: '100+', label: 'Satisfied Corporate Clients' },
  { number: '13+', label: 'Years Innovation Heritage' },
  { number: '50+', label: 'Senior Technical Specialists' }
];

const teamMembers = [
  {
    name: 'Ahad Maaz',
    role: 'Head of Business Solutions',
    position: 'Executive Leadership',
    bio: 'Odoo Certified V16/V17 Expert | DevOps, SaaS & Cloud Architect | Oracle eAM Certified & SCM Consultant.',
    image: '/assets/imgs/team/ahad-maaz.jpg',
    linkedin: 'https://www.linkedin.com/in/ahad-maaz-a8578533/'
  },
  {
    name: 'Shahzad Qamar',
    role: 'Director Middle East',
    position: 'Regional Strategy',
    bio: 'Associate Member of SOCPA, FCA (ICAP), FPFA (PIPFA) | 20+ Years in Corporate Financial Governance.',
    image: '/assets/imgs/team/shahzad-qamar.jpg',
    linkedin: 'https://www.linkedin.com/in/shahzad-qamar-8a647379/'
  },
  {
    name: 'Muhammad Kamal',
    role: 'Chief Technology Officer',
    position: 'CTO & Tech Lead',
    bio: 'Enterprise ERP Specialist | ZATCA Integration Pioneer | Cloud Native & Oracle/Odoo Architecture.',
    image: '/assets/imgs/team/muhammad-kamal.jpg',
    linkedin: 'https://www.linkedin.com/in/muhammad-kamal-990525190/'
  },
  {
    name: 'Hasnat Shahid Bukhari',
    role: 'Chief Operating Officer',
    position: 'COO & Operations',
    bio: 'Senior Business Analyst | Odoo Functional Lead | CA Finalist | MBA & MS Accounting & Finance.',
    image: '/assets/imgs/team/hasnat-shahid-bukhari.jpg',
    linkedin: 'https://www.linkedin.com/in/hasnat-shahid-bukhari-%F0%9F%87%B5%F0%9F%87%B0-bb9b1b251/'
  },
  {
    name: 'Waqar Afridi',
    role: 'Senior Database Administrator',
    position: 'DBA & Infrastructure',
    bio: 'Mission-Critical Database Architect | IT Security Administrator | High-Availability Replication Expert.',
    image: '/assets/imgs/team/waqar-afridi.jpg',
    linkedin: 'https://www.linkedin.com/in/waqar-afridi-49409815/'
  }
];

const clientLogos = [
  { src: '/assets/imgs/clients-clean/ensco.png', alt: 'ENSCO' },
  { src: '/assets/imgs/clients-clean/ijarah.png', alt: 'Ijarah' },
  { src: '/assets/imgs/clients-clean/msaarabia.png', alt: 'MSA Arabia' },
  { src: '/assets/imgs/clients-clean/oca-global.png', alt: 'OCA Global' },
  { src: '/assets/imgs/clients-clean/almutlaq.png', alt: 'Al Mutlaq Group' },
  { src: '/assets/imgs/clients-clean/rubber-future.png', alt: 'Rubber Future' },
  { src: '/assets/imgs/clients-clean/shahina.png', alt: 'Shahina' },
  { src: '/assets/imgs/clients-clean/sirc.png', alt: 'SIRC' },
  { src: '/assets/imgs/clients-clean/tajmie.png', alt: 'Tajmie' },
  { src: '/assets/imgs/clients-clean/yugen.png', alt: 'Yugen' },
  { src: '/assets/imgs/clients-clean/zamil.png', alt: 'Zamil' }
];

const offices = [
  { city: 'Al Khobar', country: 'Saudi Arabia', address: '7982 King Fahd Road, Al Khobar' },
  { city: 'Riyadh', country: 'Saudi Arabia', address: 'Riyadh Business Center' },
  { city: 'Lahore', country: 'Pakistan', address: '28-A Sector XX, Phase 3 DHA, Lahore' }
];

export default function WhatWeDoPage() {
  const [activeTab, setActiveTab] = useState('erp');
  const [hoveredNode, setHoveredNode] = useState(null);

  const selectedCapability = capabilities.find(c => c.id === activeTab) || capabilities[0];

  return (
    <Layout
      title="What We Do | Enterprise Digital Solutions & Capabilities | Alta Pete"
      description="Discover Alta Pete Solutions: Certified Odoo implementations, custom cloud software engineering, ZATCA Phase 2 integrations, and executive corporate advisory."
    >
      <div className="wwd-page-wrapper">

        {/* =========================================================
            1. HERO SECTION: WELL-ALIGNED HIGH-TECH HUB
           ========================================================= */}
        <section className="wwd-hero-section">
          <div className="container position-relative">
            <div className="row align-items-center g-4 g-lg-5">
              
              {/* Left Column: Hero Text */}
              <div className="col-lg-6">
                <div className="wwd-hero-content">
                  <div className="wwd-badge-pill">
                    <span className="wwd-pulse-dot" />
                    <span>ENGINEERING ENTERPRISE EXCELLENCE</span>
                  </div>

                  <h1 className="wwd-hero-title">
                    Transforming Operations Through <span className="wwd-gradient-text">Intelligent Technology</span>
                  </h1>

                  <p className="wwd-hero-subtitle">
                    With a <strong>13-year proven heritage</strong> across Saudi Arabia and the GCC, <strong>Alta Pete Solutions</strong> empowers enterprises with certified ERP ecosystems, custom cloud platforms, and mission-critical regulatory integrations.
                  </p>

                  <div className="wwd-hero-actions d-flex flex-wrap align-items-center gap-3">
                    <a href="#capabilities" className="btn btn-linear hover-up wwd-primary-btn">
                      <span>Explore Capabilities</span>
                      <ArrowRight size={18} />
                    </a>
                    <Link href="/contact-us" className="btn btn-outline-brand hover-up wwd-secondary-btn">
                      <span>Schedule Consultation</span>
                    </Link>
                  </div>

                  {/* Trust Highlights */}
                  <div className="wwd-trust-row">
                    <div className="wwd-trust-item">
                      <CheckCircle2 size={17} className="wwd-trust-icon" />
                      <span>Odoo Certified Partner</span>
                    </div>
                    <div className="wwd-trust-item">
                      <CheckCircle2 size={17} className="wwd-trust-icon" />
                      <span>ZATCA Phase 2 Certified</span>
                    </div>
                    <div className="wwd-trust-item">
                      <CheckCircle2 size={17} className="wwd-trust-icon" />
                      <span>SOCPA & ICAP Qualified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Mathematical Radial Orbit Hub */}
              <div className="col-lg-6">
                <div className="wwd-orbit-container">
                  {/* Concentric Background Grid Rings */}
                  <div className="wwd-orbit-ring ring-outer" />
                  <div className="wwd-orbit-ring ring-middle" />
                  <div className="wwd-orbit-ring ring-inner" />

                  {/* SVG Geometric Conduits Connecting to Center */}
                  <svg className="wwd-orbit-lines" viewBox="0 0 500 500">
                    <defs>
                      <linearGradient id="orbitLineGrad" x1="50%" y1="50%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#2c73d9" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    {/* Laser conduits to 6 exact coordinates */}
                    <line x1="250" y1="250" x2="390" y2="110" stroke="url(#orbitLineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="250" y1="250" x2="430" y2="320" stroke="url(#orbitLineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="250" y1="250" x2="250" y2="450" stroke="url(#orbitLineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="250" y1="250" x2="70" y2="320" stroke="url(#orbitLineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="250" y1="250" x2="110" y2="110" stroke="url(#orbitLineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="250" y1="250" x2="250" y2="40" stroke="url(#orbitLineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
                  </svg>

                  {/* Central Enterprise Core Orb */}
                  <div className="wwd-central-orb">
                    <div className="orb-inner-glow" />
                    <div className="orb-content">
                      <Sparkles size={32} color="#ffffff" />
                      <span className="orb-title">ALTAPETE</span>
                      <span className="orb-sub">CORE HUB</span>
                    </div>
                  </div>

                  {/* 6 Geometrically Anchored Satellite Nodes */}
                  {orbitNodes.map((node) => {
                    const Icon = node.icon;
                    const isHovered = hoveredNode === node.id;
                    return (
                      <div
                        key={node.id}
                        className={`wwd-satellite-node node-${node.id} ${isHovered ? 'active' : ''}`}
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        <div className="node-icon-box">
                          <Icon size={18} className="node-icon" />
                        </div>
                        <div className="node-label-box">
                          <div className="node-label-title">{node.title}</div>
                          <div className="node-label-desc">{node.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            2. QUANTIFIED IMPACT / TRACK RECORD COUNTERS
           ========================================================= */}
        <section className="wwd-stats-section">
          <div className="container">
            <div className="row g-3 g-lg-4 justify-content-center">
              {stats.map((item, idx) => (
                <div key={idx} className="col-lg-3 col-sm-6">
                  <div className="wwd-stat-card">
                    <div className="wwd-stat-number">{item.number}</div>
                    <div className="wwd-stat-label">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            3. CAPABILITIES MATRIX: WHAT WE ACTUALLY DO
           ========================================================= */}
        <section id="capabilities" className="wwd-capabilities-section">
          <div className="container">
            <div className="text-center mb-4 pb-2">
              <div className="wwd-section-tag">COMPREHENSIVE EXPERTISE</div>
              <h2 className="wwd-section-title">
                What We Do: <span className="wwd-gradient-text">Enterprise Capabilities</span>
              </h2>
              <p className="wwd-section-desc">
                From scalable cloud architecture to mission-critical Saudi compliance, our integrated service pillars solve complex enterprise challenges with engineering precision.
              </p>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="wwd-tab-container">
              <div className="wwd-tabs-nav">
                {capabilities.map((cap) => {
                  const Icon = cap.icon;
                  const isActive = activeTab === cap.id;
                  return (
                    <button
                      key={cap.id}
                      type="button"
                      className={`wwd-tab-btn ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveTab(cap.id)}
                    >
                      <Icon size={18} className="tab-icon" />
                      <span className="tab-text">{cap.title.split('&')[0].trim()}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Capability Showcase Card */}
            <div className="wwd-capability-card">
              <div className="row align-items-center g-4 g-lg-5">
                <div className="col-lg-7">
                  <div className="cap-badge">{selectedCapability.badge}</div>
                  <h3 className="cap-title">{selectedCapability.title}</h3>
                  <p className="cap-tagline">{selectedCapability.tagline}</p>
                  <p className="cap-description">{selectedCapability.description}</p>

                  <div className="cap-features-grid">
                    {selectedCapability.features.map((feat, i) => (
                      <div key={i} className="cap-feature-item">
                        <CheckCircle2 size={16} className="feat-icon" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="cap-cta-row">
                    <Link href={selectedCapability.link} className="cap-cta-btn">
                      <span>{selectedCapability.ctaText}</span>
                      <ChevronRight size={17} />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="cap-metric-box">
                    <div className="metric-glow" />
                    <div className="metric-stat">{selectedCapability.metrics.stat}</div>
                    <div className="metric-label">{selectedCapability.metrics.label}</div>
                    <div className="metric-divider" />
                    <div className="metric-trust-note">
                      Enterprise-Grade SLA Backed by Certified Architects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. HOW WE WORK: 4-STAGE METHODOLOGY
           ========================================================= */}
        <section className="wwd-methodology-section">
          <div className="container">
            <div className="text-center mb-4 pb-2">
              <div className="wwd-section-tag">EXECUTION ROADMAP</div>
              <h2 className="wwd-section-title">
                How We Deliver <span className="wwd-gradient-text">Predictable Success</span>
              </h2>
              <p className="wwd-section-desc">
                Our battle-tested 4-stage delivery methodology guarantees strict adherence to timelines, budgets, and enterprise security standards.
              </p>
            </div>

            <div className="row g-4">
              {methodologySteps.map((step, idx) => (
                <div key={idx} className="col-lg-3 col-md-6">
                  <div className="wwd-step-card">
                    <div className="step-number">{step.num}</div>
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            5. VISION, MISSION & VALUES
           ========================================================= */}
        <section className="wwd-values-section">
          <div className="container">
            <div className="row g-4 mb-5">
              {/* Vision Card */}
              <div className="col-lg-6">
                <div className="wwd-vm-card">
                  <div className="vm-icon-box">
                    <Compass size={26} color="#00AEEF" />
                  </div>
                  <h3 className="vm-title">Our Vision</h3>
                  <p className="vm-text">
                    To be the foremost strategic digital transformation partner across Saudi Arabia and the GCC, recognized for engineering world-class enterprise software, agile ERP solutions, and uncompromised regulatory reliability.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="col-lg-6">
                <div className="wwd-vm-card">
                  <div className="vm-icon-box">
                    <Target size={26} color="#2c73d9" />
                  </div>
                  <h3 className="vm-title">Our Mission</h3>
                  <p className="vm-text">
                    To empower forward-thinking organizations by delivering tailored digital architectures, transparent collaboration, and high-impact technology solutions that simplify enterprise complexity and accelerate long-term growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values 4-Column Grid */}
            <div className="text-center mb-4 pb-2">
              <div className="wwd-section-tag">OUR CORE PRINCIPLES</div>
              <h3 className="wwd-section-title">Values That Drive Every Line of Code</h3>
            </div>

            <div className="row g-4">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="col-lg-3 col-md-6">
                    <div className="wwd-value-card">
                      <div className="val-icon-box">
                        <Icon size={22} className="val-icon" />
                      </div>
                      <h4 className="val-title">{val.title}</h4>
                      <p className="val-desc">{val.desc}</p>
                      <span className="val-idx">0{idx + 1}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            6. EXECUTIVE LEADERSHIP & TEAM
           ========================================================= */}
        <section className="wwd-team-section">
          <div className="container">
            <div className="text-center mb-4 pb-2">
              <div className="wwd-section-tag">LEADERSHIP & EXPERTS</div>
              <h2 className="wwd-section-title">
                Meet the <span className="wwd-gradient-text">Minds Behind Altapete</span>
              </h2>
              <p className="wwd-section-desc">
                Decades of combined technical and advisory experience across enterprise ERP, accounting compliance, cloud architecture, and database operations.
              </p>
            </div>

            {/* Centered 5-Member Balanced Grid */}
            <div className="wwd-team-grid">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="wwd-team-card">
                  <div className="team-img-wrapper">
                    <img src={member.image} alt={member.name} className="team-img" />
                    <div className="team-img-overlay" />
                    <div className="team-badge">{member.position}</div>
                  </div>
                  <div className="team-details">
                    <div className="team-role-tag">{member.role}</div>
                    <h3 className="team-name">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        {member.name}
                        <ExternalLink size={13} className="ms-1" />
                      </a>
                    </h3>
                    <p className="team-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            7. TRUSTED CLIENTS MARQUEE
           ========================================================= */}
        <section className="wwd-clients-section">
          <div className="container text-center mb-4">
            <div className="wwd-section-tag">GLOBAL CREDIBILITY</div>
            <h3 className="wwd-section-title">Trusted by Leading Organizations</h3>
            <p className="wwd-section-desc">
              Proud partners to forward-thinking enterprises across energy, finance, and industrial sectors.
            </p>
          </div>

          <div className="wwd-marquee-wrapper">
            <div className="wwd-marquee-track">
              {[...clientLogos, ...clientLogos].map((client, idx) => (
                <div key={idx} className="client-card-wrapper">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="client-logo-img"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            8. GLOBAL FOOTPRINT & OFFICES
           ========================================================= */}
        <section className="wwd-contact-section">
          <div className="container">
            <div className="row g-4 g-lg-5">
              
              {/* Left Column: Direct Inquiries */}
              <div className="col-lg-7">
                <div className="wwd-inquiry-box">
                  <div className="wwd-section-tag">LET&apos;S COLLABORATE</div>
                  <h2 className="wwd-inquiry-title">Ready to Transform Your Enterprise?</h2>
                  <p className="wwd-inquiry-desc">
                    Connect directly with our senior technology team to evaluate your ERP roadmap, discuss custom software engineering, or review ZATCA Phase 2 compliance requirements.
                  </p>

                  <div className="row g-3 g-sm-4 mt-2">
                    <div className="col-sm-6">
                      <div className="contact-touch-card">
                        <Phone size={20} className="touch-icon" />
                        <div>
                          <div className="touch-label">Call Our Advisors</div>
                          <a href="tel:+966551013823" className="touch-value">+966 55 101 3823 (KSA)</a>
                          <a href="tel:+923703536327" className="touch-value">+92 370 3536327 (PK)</a>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="contact-touch-card">
                        <Mail size={20} className="touch-icon" />
                        <div>
                          <div className="touch-label">Direct Correspondence</div>
                          <a href="mailto:info@altapetesolutions.com" className="touch-value">info@altapetesolutions.com</a>
                          <a href="https://wa.me/966568029153" target="_blank" rel="noopener noreferrer" className="touch-value">WhatsApp Support</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <Link href="/contact-us" className="btn btn-linear hover-up wwd-primary-btn">
                      <span>Schedule an Executive Briefing</span>
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Global Office Locations */}
              <div className="col-lg-5">
                <div className="wwd-offices-box">
                  <div className="d-flex align-items-center gap-2 mb-4">
                    <Globe size={20} color="#00AEEF" />
                    <h3 className="offices-title">Global Presence</h3>
                  </div>

                  <div className="offices-list">
                    {offices.map((office, idx) => (
                      <div key={idx} className="office-item">
                        <div className="office-pin-dot" />
                        <div>
                          <div className="office-city">
                            {office.city}, <span className="office-country">{office.country}</span>
                          </div>
                          <div className="office-address">{office.address}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* =========================================================
          COMPONENT-SCOPED & DUAL-THEME GLOBAL STYLES
         ========================================================= */}
      <style jsx>{`
        .wwd-page-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        /* ---------------- Section Typography & Tags ---------------- */
        .wwd-section-tag {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #00AEEF;
          padding: 5px 14px;
          border-radius: 50px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.25);
          margin-bottom: 12px;
        }

        .wwd-section-title {
          font-size: clamp(1.85rem, 3vw, 2.5rem);
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 14px;
          line-height: 1.22;
        }

        .wwd-section-desc {
          font-size: 15px;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .wwd-gradient-text {
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ---------------- 1. Hero Section ---------------- */
        .wwd-hero-section {
          padding: 70px 0 60px;
          position: relative;
        }

        .wwd-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 16px;
          border-radius: 50px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.3);
          color: #00AEEF;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          margin-bottom: 20px;
        }

        .wwd-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00AEEF;
          box-shadow: 0 0 10px #00AEEF;
          animation: pulseAnim 2s infinite;
        }

        @keyframes pulseAnim {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }

        .wwd-hero-title {
          font-size: clamp(2.2rem, 3.8vw, 3.1rem);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.8px;
          margin-bottom: 18px;
        }

        .wwd-hero-subtitle {
          font-size: 15.5px;
          line-height: 1.65;
          margin-bottom: 28px;
          max-width: 540px;
        }

        .wwd-hero-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .wwd-primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 28px;
          border-radius: 50px;
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          color: #ffffff !important;
          font-weight: 700;
          font-size: 14.5px;
          text-decoration: none;
          box-shadow: 0 10px 24px rgba(0, 174, 239, 0.35);
          transition: all 0.3s ease;
        }

        .wwd-primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(0, 174, 239, 0.5);
          color: #ffffff !important;
        }

        .wwd-secondary-btn {
          display: inline-flex;
          align-items: center;
          padding: 13px 26px;
          border-radius: 50px;
          border: 1.5px solid rgba(0, 174, 239, 0.4);
          font-weight: 600;
          font-size: 14.5px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .wwd-secondary-btn:hover {
          background: rgba(0, 174, 239, 0.1);
          transform: translateY(-2px);
        }

        .wwd-trust-row {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          padding-top: 18px;
          border-top: 1px solid rgba(148, 163, 184, 0.18);
        }

        .wwd-trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          font-weight: 600;
        }

        .wwd-trust-icon {
          color: #00AEEF;
        }

        /* ---------------- Hero Mathematical Radial Orbit ---------------- */
        .wwd-orbit-container {
          position: relative;
          width: 100%;
          max-width: 480px;
          height: 440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wwd-orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(0, 174, 239, 0.2);
          pointer-events: none;
        }

        .ring-outer {
          width: 400px;
          height: 400px;
          animation: spinClockwise 60s linear infinite;
        }

        .ring-middle {
          width: 280px;
          height: 280px;
          animation: spinCounter 45s linear infinite;
        }

        .ring-inner {
          width: 160px;
          height: 160px;
          border: 1px solid rgba(0, 174, 239, 0.25);
        }

        @keyframes spinClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinCounter {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .wwd-orbit-lines {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }

        /* Central Orb */
        .wwd-central-orb {
          position: relative;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 45px rgba(0, 174, 239, 0.45);
          z-index: 5;
          text-align: center;
        }

        .orb-inner-glow {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00AEEF, transparent, #2c73d9);
          filter: blur(8px);
          opacity: 0.6;
        }

        .orb-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .orb-title {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #ffffff;
          margin-top: 3px;
        }

        .orb-sub {
          font-size: 8.5px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          letter-spacing: 0.5px;
        }

        /* Orbit Satellite Nodes */
        .wwd-satellite-node {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 7px 13px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 6;
          white-space: nowrap;
        }

        .wwd-satellite-node:hover,
        .wwd-satellite-node.active {
          transform: translate(-50%, -50%) scale(1.08);
          box-shadow: 0 8px 24px rgba(0, 174, 239, 0.3);
        }

        .node-icon-box {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(0, 174, 239, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00AEEF;
        }

        .node-label-title {
          font-size: 12px;
          font-weight: 700;
          line-height: 1.2;
        }

        .node-label-desc {
          font-size: 9.5px;
          line-height: 1;
        }

        /* ---------------- 2. Stats Section ---------------- */
        .wwd-stats-section {
          padding: 10px 0 50px;
        }

        .wwd-stat-card {
          padding: 26px 18px;
          border-radius: 18px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .wwd-stat-card:hover {
          transform: translateY(-4px);
        }

        .wwd-stat-number {
          font-size: clamp(2.2rem, 3.2vw, 2.9rem);
          font-weight: 800;
          line-height: 1;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .wwd-stat-label {
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* ---------------- 3. Capabilities Section ---------------- */
        .wwd-capabilities-section {
          padding: 50px 0;
        }

        .wwd-tab-container {
          display: flex;
          justify-content: center;
          margin-bottom: 32px;
        }

        .wwd-tabs-nav {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          padding: 5px;
          border-radius: 50px;
        }

        .wwd-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 22px;
          border-radius: 50px;
          border: none;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          background: transparent;
        }

        .wwd-tab-btn.active {
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          color: #ffffff !important;
          box-shadow: 0 8px 20px rgba(0, 174, 239, 0.35);
        }

        .wwd-capability-card {
          padding: 40px 36px;
          border-radius: 22px;
          transition: all 0.3s ease;
        }

        .cap-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #00AEEF;
          padding: 4px 12px;
          border-radius: 50px;
          background: rgba(0, 174, 239, 0.1);
          margin-bottom: 14px;
        }

        .cap-title {
          font-size: clamp(1.6rem, 2.3vw, 2rem);
          font-weight: 800;
          margin-bottom: 10px;
          line-height: 1.25;
        }

        .cap-tagline {
          font-size: 14.5px;
          font-weight: 600;
          color: #00AEEF;
          margin-bottom: 14px;
        }

        .cap-description {
          font-size: 14.5px;
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .cap-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 28px;
        }

        .cap-feature-item {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13.5px;
          font-weight: 500;
        }

        .feat-icon {
          color: #00AEEF;
          flex-shrink: 0;
        }

        .cap-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 24px;
          border-radius: 50px;
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          color: #ffffff !important;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(0, 174, 239, 0.3);
        }

        .cap-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(0, 174, 239, 0.45);
        }

        .cap-metric-box {
          position: relative;
          padding: 36px 26px;
          border-radius: 18px;
          text-align: center;
          overflow: hidden;
        }

        .metric-stat {
          font-size: clamp(2.8rem, 3.8vw, 4rem);
          font-weight: 900;
          line-height: 1;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .metric-label {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 18px;
        }

        .metric-divider {
          height: 1px;
          width: 70px;
          margin: 0 auto 14px;
          background: rgba(0, 174, 239, 0.3);
        }

        .metric-trust-note {
          font-size: 12px;
          line-height: 1.5;
        }

        /* ---------------- 4. Methodology Section ---------------- */
        .wwd-methodology-section {
          padding: 50px 0;
        }

        .wwd-step-card {
          padding: 30px 22px;
          border-radius: 18px;
          height: 100%;
          position: relative;
          transition: all 0.3s ease;
        }

        .wwd-step-card:hover {
          transform: translateY(-5px);
        }

        .step-number {
          font-size: 2rem;
          font-weight: 900;
          color: #00AEEF;
          opacity: 0.6;
          margin-bottom: 14px;
          line-height: 1;
        }

        .step-title {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .step-desc {
          font-size: 13.5px;
          line-height: 1.6;
          margin-bottom: 0;
        }

        /* ---------------- 5. Vision, Mission & Values ---------------- */
        .wwd-values-section {
          padding: 50px 0;
        }

        .wwd-vm-card {
          padding: 34px 28px;
          border-radius: 18px;
          height: 100%;
          transition: all 0.3s ease;
        }

        .vm-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 13px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .vm-title {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .vm-text {
          font-size: 14.5px;
          line-height: 1.68;
          margin-bottom: 0;
        }

        .wwd-value-card {
          padding: 26px 20px;
          border-radius: 18px;
          height: 100%;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .wwd-value-card:hover {
          transform: translateY(-4px);
        }

        .val-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 11px;
          background: rgba(0, 174, 239, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00AEEF;
          margin-bottom: 16px;
        }

        .val-title {
          font-size: 15.5px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .val-desc {
          font-size: 13px;
          line-height: 1.55;
          margin-bottom: 0;
        }

        .val-idx {
          position: absolute;
          top: 18px;
          right: 18px;
          font-size: 15px;
          font-weight: 800;
          opacity: 0.25;
        }

        /* ---------------- 6. Executive Team Section ---------------- */
        .wwd-team-section {
          padding: 50px 0;
        }

        .wwd-team-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 18px;
        }

        .wwd-team-card {
          flex: 0 1 220px;
          max-width: 240px;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .wwd-team-card:hover {
          transform: translateY(-6px);
        }

        .team-img-wrapper {
          position: relative;
          width: 100%;
          height: 230px;
          overflow: hidden;
        }

        .team-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .wwd-team-card:hover .team-img {
          transform: scale(1.06);
        }

        .team-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 60%);
        }

        .team-badge {
          position: absolute;
          bottom: 10px;
          left: 12px;
          padding: 4px 9px;
          border-radius: 50px;
          background: rgba(0, 174, 239, 0.9);
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .team-details {
          padding: 16px 14px;
        }

        .team-role-tag {
          font-size: 10.5px;
          font-weight: 700;
          color: #00AEEF;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .team-name {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .team-name a {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }

        .team-bio {
          font-size: 11.5px;
          line-height: 1.5;
          margin-bottom: 0;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* ---------------- 7. Clients Marquee ---------------- */
        .wwd-clients-section {
          padding: 40px 0;
          overflow: hidden;
        }

        .wwd-marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
        }

        .wwd-marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .wwd-marquee-wrapper:hover .wwd-marquee-track {
          animation-play-state: paused;
        }

        /* ---------------- 8. Contact & Global Offices ---------------- */
        .wwd-contact-section {
          padding: 50px 0 30px;
        }

        .wwd-inquiry-box {
          padding: 38px 30px;
          border-radius: 22px;
        }

        .wwd-inquiry-title {
          font-size: clamp(1.7rem, 2.5vw, 2.2rem);
          font-weight: 800;
          margin-bottom: 12px;
          line-height: 1.25;
        }

        .wwd-inquiry-desc {
          font-size: 14.5px;
          line-height: 1.65;
          margin-bottom: 20px;
        }

        .contact-touch-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px;
          border-radius: 14px;
        }

        .touch-icon {
          color: #00AEEF;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .touch-label {
          font-size: 11.5px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .touch-value {
          display: block;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          margin-bottom: 2px;
        }

        .touch-value:hover {
          color: #00AEEF;
        }

        .wwd-offices-box {
          padding: 36px 28px;
          border-radius: 22px;
          height: 100%;
        }

        .offices-title {
          font-size: 19px;
          font-weight: 800;
          margin-bottom: 0;
        }

        .offices-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .office-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(148, 163, 184, 0.15);
        }

        .office-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .office-pin-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #00AEEF;
          margin-top: 6px;
          flex-shrink: 0;
          box-shadow: 0 0 10px #00AEEF;
        }

        .office-city {
          font-size: 14.5px;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .office-country {
          font-weight: 500;
        }

        .office-address {
          font-size: 12.5px;
          line-height: 1.45;
        }

        /* ---------------- Responsive Tweaks ---------------- */
        @media (max-width: 991px) {
          .wwd-orbit-container {
            max-width: 100%;
            height: 400px;
          }
          .cap-features-grid {
            grid-template-columns: 1fr;
          }
          .wwd-team-card {
            flex: 0 1 calc(33.333% - 14px);
          }
        }

        @media (max-width: 767px) {
          .wwd-orbit-container {
            height: 360px;
          }
          .ring-outer { width: 320px; height: 320px; }
          .ring-middle { width: 230px; height: 230px; }
          .ring-inner { width: 140px; height: 140px; }
          .node-label-desc { display: none; }
          .wwd-team-card {
            flex: 0 1 calc(50% - 10px);
          }
          .wwd-capability-card {
            padding: 26px 18px;
          }
        }

        @media (max-width: 480px) {
          .wwd-team-card {
            flex: 0 1 100%;
            max-width: 300px;
          }
        }
      `}</style>

      {/* =========================================================
          GLOBAL DUAL-THEME CONTRAST RULES
         ========================================================= */}
      <style jsx global>{`
        /* ---------------- DARK THEME RULES ---------------- */
        [data-theme="dark"] .wwd-page-wrapper {
          background-color: #060c18;
          color: #e2e8f0;
        }

        [data-theme="dark"] .wwd-hero-title,
        [data-theme="dark"] .wwd-section-title,
        [data-theme="dark"] .cap-title,
        [data-theme="dark"] .step-title,
        [data-theme="dark"] .vm-title,
        [data-theme="dark"] .val-title,
        [data-theme="dark"] .team-name a,
        [data-theme="dark"] .wwd-inquiry-title,
        [data-theme="dark"] .offices-title,
        [data-theme="dark"] .office-city {
          color: #ffffff !important;
        }

        [data-theme="dark"] .wwd-hero-subtitle,
        [data-theme="dark"] .wwd-section-desc,
        [data-theme="dark"] .cap-description,
        [data-theme="dark"] .step-desc,
        [data-theme="dark"] .vm-text,
        [data-theme="dark"] .val-desc,
        [data-theme="dark"] .team-bio,
        [data-theme="dark"] .wwd-inquiry-desc,
        [data-theme="dark"] .office-address {
          color: #94a3b8 !important;
        }

        [data-theme="dark"] .wwd-trust-item,
        [data-theme="dark"] .cap-feature-item,
        [data-theme="dark"] .touch-value {
          color: #cbd5e1 !important;
        }


        [data-theme="dark"] .wwd-satellite-node {
          background: rgba(13, 24, 48, 0.85);
          border: 1px solid rgba(0, 174, 239, 0.35);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }
        [data-theme="dark"] .node-label-title {
          color: #ffffff;
        }
        [data-theme="dark"] .node-label-desc {
          color: #94a3b8;
        }

        [data-theme="dark"] .wwd-stat-card,
        [data-theme="dark"] .wwd-capability-card,
        [data-theme="dark"] .wwd-step-card,
        [data-theme="dark"] .wwd-vm-card,
        [data-theme="dark"] .wwd-value-card,
        [data-theme="dark"] .wwd-team-card,
        [data-theme="dark"] .wwd-inquiry-box,
        [data-theme="dark"] .wwd-offices-box,
        [data-theme="dark"] .contact-touch-card {
          background: rgba(13, 24, 48, 0.65);
          border: 1px solid rgba(0, 174, 239, 0.2);
          backdrop-filter: blur(12px);
        }

        [data-theme="dark"] .cap-metric-box {
          background: rgba(0, 174, 239, 0.08);
          border: 1px solid rgba(0, 174, 239, 0.25);
        }

        [data-theme="dark"] .wwd-stat-label,
        [data-theme="dark"] .metric-label {
          color: #94a3b8;
        }

        [data-theme="dark"] .metric-trust-note {
          color: #cbd5e1;
        }

        [data-theme="dark"] .wwd-tabs-nav {
          background: rgba(13, 24, 48, 0.8);
          border: 1px solid rgba(0, 174, 239, 0.25);
        }

        [data-theme="dark"] .wwd-tab-btn {
          color: #94a3b8;
        }
        [data-theme="dark"] .wwd-tab-btn:hover {
          color: #ffffff;
        }

        [data-theme="dark"] .touch-label,
        [data-theme="dark"] .office-country {
          color: #00AEEF;
        }

        /* ---------------- LIGHT THEME RULES ---------------- */
        [data-theme="light"] .wwd-page-wrapper,
        :root:not([data-theme="dark"]) .wwd-page-wrapper {
          background-color: #f8fafc;
          color: #334155;
        }

        [data-theme="light"] .wwd-hero-title,
        :root:not([data-theme="dark"]) .wwd-hero-title,
        [data-theme="light"] .wwd-section-title,
        :root:not([data-theme="dark"]) .wwd-section-title,
        [data-theme="light"] .cap-title,
        :root:not([data-theme="dark"]) .cap-title,
        [data-theme="light"] .step-title,
        :root:not([data-theme="dark"]) .step-title,
        [data-theme="light"] .vm-title,
        :root:not([data-theme="dark"]) .vm-title,
        [data-theme="light"] .val-title,
        :root:not([data-theme="dark"]) .val-title,
        [data-theme="light"] .team-name a,
        :root:not([data-theme="dark"]) .team-name a,
        [data-theme="light"] .wwd-inquiry-title,
        :root:not([data-theme="dark"]) .wwd-inquiry-title,
        [data-theme="light"] .offices-title,
        :root:not([data-theme="dark"]) .offices-title,
        [data-theme="light"] .office-city,
        :root:not([data-theme="dark"]) .office-city {
          color: #0f172a !important;
        }

        [data-theme="light"] .wwd-hero-subtitle,
        :root:not([data-theme="dark"]) .wwd-hero-subtitle,
        [data-theme="light"] .wwd-section-desc,
        :root:not([data-theme="dark"]) .wwd-section-desc,
        [data-theme="light"] .cap-description,
        :root:not([data-theme="dark"]) .cap-description,
        [data-theme="light"] .step-desc,
        :root:not([data-theme="dark"]) .step-desc,
        [data-theme="light"] .vm-text,
        :root:not([data-theme="dark"]) .vm-text,
        [data-theme="light"] .val-desc,
        :root:not([data-theme="dark"]) .val-desc,
        [data-theme="light"] .team-bio,
        :root:not([data-theme="dark"]) .team-bio,
        [data-theme="light"] .wwd-inquiry-desc,
        :root:not([data-theme="dark"]) .wwd-inquiry-desc,
        [data-theme="light"] .office-address,
        :root:not([data-theme="dark"]) .office-address {
          color: #475569 !important;
        }

        [data-theme="light"] .wwd-trust-item,
        :root:not([data-theme="dark"]) .wwd-trust-item,
        [data-theme="light"] .cap-feature-item,
        :root:not([data-theme="dark"]) .cap-feature-item,
        [data-theme="light"] .touch-value,
        :root:not([data-theme="dark"]) .touch-value {
          color: #1e293b !important;
        }


        [data-theme="light"] .wwd-satellite-node,
        :root:not([data-theme="dark"]) .wwd-satellite-node {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        [data-theme="light"] .node-label-title,
        :root:not([data-theme="dark"]) .node-label-title {
          color: #0f172a;
        }
        [data-theme="light"] .node-label-desc,
        :root:not([data-theme="dark"]) .node-label-desc {
          color: #64748b;
        }

        [data-theme="light"] .wwd-stat-card,
        :root:not([data-theme="dark"]) .wwd-stat-card,
        [data-theme="light"] .wwd-capability-card,
        :root:not([data-theme="dark"]) .wwd-capability-card,
        [data-theme="light"] .wwd-step-card,
        :root:not([data-theme="dark"]) .wwd-step-card,
        [data-theme="light"] .wwd-vm-card,
        :root:not([data-theme="dark"]) .wwd-vm-card,
        [data-theme="light"] .wwd-value-card,
        :root:not([data-theme="dark"]) .wwd-value-card,
        [data-theme="light"] .wwd-team-card,
        :root:not([data-theme="dark"]) .wwd-team-card,
        [data-theme="light"] .wwd-inquiry-box,
        :root:not([data-theme="dark"]) .wwd-inquiry-box,
        [data-theme="light"] .wwd-offices-box,
        :root:not([data-theme="dark"]) .wwd-offices-box,
        [data-theme="light"] .contact-touch-card,
        :root:not([data-theme="dark"]) .contact-touch-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        [data-theme="light"] .cap-metric-box,
        :root:not([data-theme="dark"]) .cap-metric-box {
          background: #f0f9ff;
          border: 1.5px solid #bae6fd;
        }

        [data-theme="light"] .wwd-stat-label,
        :root:not([data-theme="dark"]) .wwd-stat-label,
        [data-theme="light"] .metric-label,
        :root:not([data-theme="dark"]) .metric-label {
          color: #64748b;
        }

        [data-theme="light"] .metric-trust-note,
        :root:not([data-theme="dark"]) .metric-trust-note {
          color: #334155;
        }

        [data-theme="light"] .wwd-tabs-nav,
        :root:not([data-theme="dark"]) .wwd-tabs-nav {
          background: #e2e8f0;
          border: 1px solid #cbd5e1;
        }

        [data-theme="light"] .wwd-tab-btn,
        :root:not([data-theme="dark"]) .wwd-tab-btn {
          color: #475569;
        }
        [data-theme="light"] .wwd-tab-btn:hover,
        :root:not([data-theme="dark"]) .wwd-tab-btn:hover {
          color: #0f172a;
        }

        [data-theme="light"] .touch-label,
        :root:not([data-theme="dark"]) .touch-label,
        [data-theme="light"] .office-country,
        :root:not([data-theme="dark"]) .office-country {
          color: #0284c7;
        }
      `}</style>
    </Layout>
  );
}
