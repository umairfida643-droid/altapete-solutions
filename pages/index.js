import React, { useState } from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Layout from '@/components/Layout';
import HeroEnterpriseCockpit from '@/components/HeroEnterpriseCockpit';
import TechStackDraggableMarquee from '@/components/TechStackDraggableMarquee';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Users, 
  Building2, 
  Handshake, 
  Server, 
  Code2, 
  Calculator, 
  Briefcase, 
  Scale, 
  Award, 
  Headphones, 
  MapPin, 
  Mail, 
  Phone,
  Send,
  ExternalLink,
  Database,
  Terminal,
  ChevronRight,
  Zap
} from 'lucide-react';

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);


  const techPartners = [
    { name: "Odoo", tag: "ERP", desc: "ERP Solutions", logo: "/assets/imgs/tech/odoo.svg", icon: Layers },
    { name: "Oracle", tag: "Database", desc: "Business Solutions", logo: "/assets/imgs/tech/oracle.svg", icon: Database },
    { name: "ZATCA", tag: "Compliance", desc: "Phase 2 E-Invoicing", logo: "/assets/imgs/tech/zatca.svg", icon: ShieldCheck },
    { name: "SAP", tag: "Enterprise", desc: "Global ERP Platforms", logo: "/assets/imgs/tech/sap.svg", icon: Building2 },
    { name: "Django", tag: "Framework", desc: "Enterprise Backends", logo: "/assets/imgs/tech/django.svg", icon: Code2 },
    { name: "Python", tag: "Language", desc: "Core Engineering", logo: "/assets/imgs/tech/python.svg", icon: Terminal },
    { name: "PostgreSQL", tag: "Database", desc: "Relational Engine", logo: "/assets/imgs/tech/postgresql.svg", icon: Server }
  ];

  const coreServices = [
    {
      title: "Enterprise Solutions",
      category: "Digital Transformation",
      desc: "Comprehensive ERP implementations, SAP migrations, and business process automation customized for your scale.",
      icon: Building2,
      href: "/enterprise-solutions",
      points: ["Full ERP Life Cycle", "Custom Workflow Automation", "Legacy Migration"]
    },
    {
      title: "Technology Management",
      category: "Cloud & Infrastructure",
      desc: "End-to-end IT strategy, cloud hosting management, database optimization, and high-availability architecture.",
      icon: Server,
      href: "/technology-management",
      points: ["Cloud Infrastructure", "24/7 Monitoring", "Security Auditing"]
    },
    {
      title: "Custom Application Development",
      category: "Software Engineering",
      desc: "Tailored enterprise web applications, mobile platforms, and customer portals built with modern frameworks.",
      icon: Code2,
      href: "/custom-app-development",
      points: ["Scalable Architectures", "Modern UI/UX", "API Integrations"]
    },
    {
      title: "Accounting & Financial Advisory",
      category: "Advisory Services",
      desc: "Strategic bookkeeping, IFRS advisory, financial modeling, and CFO-level decision support for sustained growth.",
      icon: Calculator,
      href: "/accounting-financial-advisory",
      points: ["IFRS Compliance", "Financial Modeling", "Corporate Bookkeeping"]
    },
    {
      title: "Corporate Advisory",
      category: "Advisory Services",
      desc: "Corporate restructuring, transactional support, valuation, and feasibility analyses for scaling ventures.",
      icon: Briefcase,
      href: "/corporate-advisory",
      points: ["Mergers & Acquisitions", "Business Valuations", "Feasibility Studies"]
    },
    {
      title: "Taxation & ZAKAT Advisory",
      category: "Tax & Compliance",
      desc: "Direct & indirect tax management, ZAKAT calculations, VAT filings, and representation before authorities in KSA.",
      icon: Scale,
      href: "/taxation-zakat-advisory",
      points: ["KSA ZAKAT Support", "VAT Advisory", "Audit Representation"]
    }
  ];

  const clientRow1 = [
    { name: "Ensco", logo: "/assets/imgs/updated-clients/ensco.png" },
    { name: "Ijarah Finance", logo: "/assets/imgs/updated-clients/ijarah.png" },
    { name: "MSA Arabia", logo: "/assets/imgs/updated-clients/msaarabia.png" },
    { name: "OCA Global", logo: "/assets/imgs/updated-clients/oca-global.png" },
    { name: "Almutlaq Group", logo: "/assets/imgs/updated-clients/rubber-future.png" },
    { name: "Al Haytham Mining (AGC)", logo: "/assets/imgs/updated-clients/picture11.png" },
    { name: "Amer El-Hoshan & Partners", logo: "/assets/imgs/updated-clients/picture12.png" },
    { name: "Ammco Mining", logo: "/assets/imgs/updated-clients/picture13.png" },
    { name: "AALICO", logo: "/assets/imgs/updated-clients/picture14.png" },
    { name: "Madarat First Industrial Co.", logo: "/assets/imgs/updated-clients/picture15.png" },
    { name: "Union Constructions", logo: "/assets/imgs/updated-clients/picture16.png" },
    { name: "Khereiji", logo: "/assets/imgs/updated-clients/picture17.png" },
    { name: "Carboline RPM", logo: "/assets/imgs/updated-clients/picture18.png" },
    { name: "ISLC", logo: "/assets/imgs/updated-clients/picture19.png" },
    { name: "Arabian Geophysical (AG)", logo: "/assets/imgs/updated-clients/picture20.png" },
    { name: "Badael", logo: "/assets/imgs/updated-clients/download-24.png" }
  ];

  const clientRow2 = [
    { name: "SIRC", logo: "/assets/imgs/updated-clients/sirc.png" },
    { name: "Zamil Group", logo: "/assets/imgs/updated-clients/zamil-grop.png" },
    { name: "Shahina", logo: "/assets/imgs/updated-clients/shahina.png" },
    { name: "Tajmie", logo: "/assets/imgs/updated-clients/tajmie.png" },
    { name: "Yugen", logo: "/assets/imgs/updated-clients/yugen.png" },
    { name: "Mohammad Dossary Hospital (MDH)", logo: "/assets/imgs/updated-clients/picture3.png" },
    { name: "iPlast", logo: "/assets/imgs/updated-clients/picture9.png" },
    { name: "Rubber Future", logo: "/assets/imgs/updated-clients/picture10.png" },
    { name: "IFE", logo: "/assets/imgs/updated-clients/picture21.png" },
    { name: "Aanakaboot", logo: "/assets/imgs/updated-clients/picture22.png" },
    { name: "Madar", logo: "/assets/imgs/updated-clients/picture23.png" },
    { name: "Takyeef", logo: "/assets/imgs/updated-clients/picture24.png" },
    { name: "Quill", logo: "/assets/imgs/updated-clients/picture25.png" },
    { name: "Amber", logo: "/assets/imgs/updated-clients/picture26.png" },
    { name: "Mawared Baladi", logo: "/assets/imgs/updated-clients/picture27.png" },
    { name: "Obika Trattoria", logo: "/assets/imgs/updated-clients/picture28.png" }
  ];

  const pillars = [
    {
      title: "23+ Years Legacy",
      desc: "Spanning over two decades of delivering modernization, resilience, and agility to top organizations.",
      icon: Award
    },
    {
      title: "Certified ERP & SAP Experts",
      desc: "Accredited functional and technical consultants experienced across regional enterprise deployments.",
      icon: ShieldCheck
    },
    {
      title: "End-to-End Implementation",
      desc: "From initial process mapping and custom development to change management and post-launch support.",
      icon: CheckCircle2
    },
    {
      title: "Guaranteed SLA & Compliance",
      desc: "Complete alignment with local regulations including ZATCA Phase 2, IFRS, and 24/7 ongoing support.",
      icon: Headphones
    }
  ];

  return (
    <Layout
      title="ERP, SAP & Custom Software Solutions | Altapete Solutions"
      description="Altapete provides ERP, SAP, Oracle, custom application development, accounting, and industry-specific software solutions for growing businesses."
    >
      {/* ────────────────── 1. HERO SECTION ────────────────── */}
      <section 
        className="hero-section position-relative"
        style={{
          padding: '110px 0 90px',
          overflow: 'visible'
        }}
      >
        {/* Ambient background glows safely clipped inside background layer */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div className="hero-ambient-glow-1" />
          <div className="hero-ambient-glow-2" />
        </div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">
            {/* Left Copy */}
            <div className="col-lg-6">
              {/* Futuristic Eyebrow Badge */}
              <div className="brand-badge mb-25 d-inline-flex align-items-center gap-2" style={{ backdropFilter: 'blur(10px)' }}>
                <span className="pulse-dot-brand"></span>
                <span style={{ letterSpacing: '0.6px', fontWeight: 700 }}>Next-Gen Enterprise Ecosystem</span>
                <span style={{ opacity: 0.35 }}>•</span>
                <span style={{ color: 'var(--brand-accent)', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase' }}>Cloud & AI Ready</span>
              </div>

              {/* Headline with Live Typewriter */}
              <h1 
                className="font-heading mb-20 hero-headline"
                style={{
                  fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.5px'
                }}
              >
                Delivering{' '}
                <span style={{ display: 'inline-block' }}>
                  <Typewriter
                    options={{
                      wrapperClassName: "color-linear font-heading",
                      strings: [
                        "Business Consultancy",
                        "Custom App Development",
                        "ERP Implementations",
                        "ZATCA E-Invoicing",
                        "Financial Advisory",
                        "Odoo & SAP Systems",
                        "Cloud Transformation"
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30
                    }}
                  />
                </span>{' '}
                Solutions
              </h1>

              {/* Subtitle */}
              <p 
                className="hero-subtitle mb-35"
                style={{
                  fontSize: 'clamp(1.02rem, 1.3vw, 1.15rem)',
                  lineHeight: 1.75,
                  maxWidth: '560px'
                }}
              >
                <strong className="brand-highlight">Altapete</strong> delivers expert ERP, SAP, Oracle, and bookkeeping solutions to streamline operations, reduce operational costs, and accelerate enterprise growth.
              </p>

              {/* CTAs */}
              <div className="d-flex flex-wrap align-items-center gap-3">
                <Link 
                  href="/contact-us"
                  className="btn btn-linear hover-up"
                  style={{ padding: '15px 34px', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                >
                  GET STARTED <ArrowRight size={18} />
                </Link>
                <Link 
                  href="/what-we-do"
                  className="btn-outline-brand hover-up"
                  style={{ padding: '14px 28px', fontSize: '15px' }}
                >
                  <Layers size={18} color="#2c73d9" /> Explore Capabilities
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-40 pt-25 border-top d-flex align-items-center gap-4 flex-wrap hero-trust-bar" style={{ borderColor: 'var(--border-color)' }}>
                <div className="d-flex align-items-center gap-2">
                  <ShieldCheck size={20} color="#2c73d9" />
                  <span className="hero-trust-text" style={{ fontSize: '13.5px', fontWeight: 600 }}>ZATCA Phase 2 Certified</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Award size={20} color="#2c73d9" />
                  <span className="hero-trust-text" style={{ fontSize: '13.5px', fontWeight: 600 }}>23+ Years Track Record</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Futuristic Animated Enterprise Cockpit */}
            <div className="col-lg-6 position-relative text-center">
              <HeroEnterpriseCockpit />
            </div>
          </div>
        </div>
      </section>


      {/* ────────────────── 3. TECHNOLOGY PARTNERS MARQUEE ────────────────── */}
      <section 
        className="partners-section py-5 position-relative"
      >
        <div className="container text-center mb-40">
          <div className="brand-badge mb-15">
            <Cpu size={13} /> Technology Stack
          </div>
          <h3 className="font-heading mb-15" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', color: 'var(--text-primary)' }}>
            Driven by a <span className="color-linear">Powerful</span> Technology Ecosystem
          </h3>
          <p className="mx-auto" style={{ maxWidth: '650px', fontSize: '15px', color: 'var(--text-secondary)' }}>
            We leverage industry-leading technologies and tier-1 partnerships to deliver robust, scalable, and innovative enterprise solutions.
          </p>
        </div>

        {/* Continuous 2-Row Dual-Direction Draggable Marquee Showcase */}
        <TechStackDraggableMarquee />
      </section>

      {/* ────────────────── 4. COMPREHENSIVE BUSINESS SOLUTIONS ────────────────── */}
      <section 
        className="services-section py-5"
        style={{
          background: 'linear-gradient(180deg, #0b0a17 0%, #100e26 100%)',
          borderTop: '1px solid rgba(44, 115, 217, 0.15)'
        }}
      >
        <div className="container">
          <div className="text-center mb-50">
            <div className="brand-badge mb-15">
              <Layers size={13} /> Full Capability Spectrum
            </div>
            <h2 className="color-white font-heading mb-15" style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)' }}>
              Comprehensive <span className="color-linear">Business & Technology</span> Solutions
            </h2>
            <p className="color-gray-400 mx-auto" style={{ maxWidth: '680px', fontSize: '15.5px' }}>
              From end-to-end ERP implementations to corporate financial advisory, our integrated capabilities accelerate your digital roadmap.
            </p>
          </div>

          <div className="row g-4">
            {coreServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div 
                    className="glass-card p-4 h-100 d-flex flex-column justify-content-between position-relative"
                    style={{
                      border: '1px solid rgba(44, 115, 217, 0.22)',
                      borderRadius: '18px'
                    }}
                  >
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-20">
                        <div 
                          style={{
                            padding: '12px',
                            borderRadius: '14px',
                            background: 'rgba(44, 115, 217, 0.15)',
                            border: '1px solid rgba(44, 115, 217, 0.3)',
                            color: '#2c73d9'
                          }}
                        >
                          <Icon size={24} />
                        </div>
                        <span className="service-category-pill">
                          {srv.category}
                        </span>
                      </div>

                      <h3 className="service-card-title" style={{ fontSize: '19px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
                        {srv.title}
                      </h3>

                      <p className="service-card-desc" style={{ fontSize: '14px', lineHeight: 1.65, marginBottom: '20px', color: 'var(--text-secondary)' }}>
                        {srv.desc}
                      </p>

                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 25px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {srv.points.map((pt, pIdx) => (
                          <li key={pIdx} className="service-bullet-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                            <CheckCircle2 size={14} color="#00AEEF" /> <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <Link 
                        href={srv.href}
                        className="btn btn-outline-brand service-card-btn w-100 text-center justify-content-center"
                        style={{ padding: '10px 16px', fontSize: '13.5px' }}
                      >
                        Explore Solution <ChevronRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────── 5. CLIENT LOGOS SLIDER ────────────────── */}
      <section 
        className="clients-section py-5 position-relative"
      >
        <div className="container text-center mb-40">
          <div className="brand-badge mb-15">
            <Award size={13} /> Enterprise Trust
          </div>
          <h3 className="font-heading mb-15" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', color: 'var(--text-primary)' }}>
            Trusted By <span className="color-linear">Leading Companies</span>
          </h3>
          <p className="mx-auto" style={{ maxWidth: '600px', fontSize: '15px', color: 'var(--text-secondary)' }}>
            Delivering mission-critical ERP, software, and financial advisory services for prominent regional enterprises.
          </p>
        </div>

        <div className="marquee-wrapper">
          {/* Row 1: Left to Right Loop */}
          <div className="slider-viewport mb-3">
            <div className="slider-track-ltr">
              {[...clientRow1, ...clientRow1].map((cl, idx) => (
                <div 
                  className="client-card-wrapper"
                  key={`r1-${idx}`}
                >
                  <img 
                    src={cl.logo} 
                    alt={cl.name} 
                    className="client-logo-img"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right Loop */}
          <div className="slider-viewport">
            <div className="slider-track-ltr">
              {[...clientRow2, ...clientRow2].map((cl, idx) => (
                <div 
                  className="client-card-wrapper"
                  key={`r2-${idx}`}
                >
                  <img 
                    src={cl.logo} 
                    alt={cl.name} 
                    className="client-logo-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── 6. WHY CHOOSE ALTAPETE ────────────────── */}
      <section 
        className="pillars-section py-5"
        style={{
          background: 'linear-gradient(180deg, #0d0c1d 0%, #12102a 100%)',
          borderTop: '1px solid rgba(44, 115, 217, 0.15)'
        }}
      >
        <div className="container">
          <div className="text-center mb-50">
            <div className="brand-badge mb-15">
              <Sparkles size={13} /> Strategic Advantage
            </div>
            <h2 className="color-white font-heading mb-15" style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)' }}>
              Why Organizations Choose <span className="color-linear">Altapete Solutions</span>
            </h2>
            <p className="color-gray-400 mx-auto" style={{ maxWidth: '650px', fontSize: '15.5px' }}>
              We combine deep vertical technical mastery with rigorous advisory excellence to ensure long-term client success.
            </p>
          </div>

          <div className="row g-4">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div className="col-lg-3 col-md-6" key={idx}>
                  <div 
                    className="glass-card p-4 h-100 text-center"
                    style={{
                      borderRadius: '18px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <div 
                      style={{
                        padding: '16px',
                        borderRadius: '16px',
                        background: 'rgba(44, 115, 217, 0.15)',
                        border: '1px solid rgba(44, 115, 217, 0.3)',
                        color: '#2c73d9',
                        marginBottom: '20px'
                      }}
                    >
                      <Icon size={30} />
                    </div>
                    <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>
                      {pil.title}
                    </h4>
                    <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                      {pil.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────── 7. UNIFIED CONSULTATION & CONTACT SECTION ────────────────── */}
      <section 
        id="consultation"
        className="consultation-section py-5 position-relative"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(44, 115, 217, 0.15), transparent 70%), #0b0a17',
          borderTop: '1px solid rgba(44, 115, 217, 0.2)'
        }}
      >
        <div className="container">
          <div 
            className="glass-card p-4 p-md-5"
            style={{
              borderRadius: '24px',
              border: '1px solid rgba(44, 115, 217, 0.3)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)'
            }}
          >
            <div className="row g-5 align-items-center">
              {/* Left Column: Strategic Partnership & Consultation Highlights */}
              <div className="col-lg-5">
                <div className="brand-badge mb-15">
                  <Sparkles size={13} /> Get In Touch
                </div>
                <h2 className="color-white font-heading mb-20" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', lineHeight: 1.25 }}>
                  Let’s Build the <span className="color-linear">Right Solution</span> Together
                </h2>
                <p className="color-gray-400 mb-30" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                  Whether it’s an ERP rollout, SAP migration, ZATCA e-invoicing integration, or financial advisory — our certified consultants will respond within 24 hours.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', borderRadius: '14px', background: 'rgba(44, 115, 217, 0.08)', border: '1px solid rgba(44, 115, 217, 0.18)' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(44, 115, 217, 0.18)', color: '#2c73d9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Zap size={19} />
                    </div>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '14.5px' }} className="consultation-highlight-title">24-Hour Response Guarantee</div>
                      <div style={{ color: '#94a3b8', fontSize: '12.5px' }}>Direct connection with certified senior enterprise consultants</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', borderRadius: '14px', background: 'rgba(44, 115, 217, 0.08)', border: '1px solid rgba(44, 115, 217, 0.18)' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(44, 115, 217, 0.18)', color: '#2c73d9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <ShieldCheck size={19} />
                    </div>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '14.5px' }} className="consultation-highlight-title">Confidential Architecture Review</div>
                      <div style={{ color: '#94a3b8', fontSize: '12.5px' }}>NDA-backed assessment for your technology and compliance needs</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', borderRadius: '14px', background: 'rgba(44, 115, 217, 0.08)', border: '1px solid rgba(44, 115, 217, 0.18)' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(44, 115, 217, 0.18)', color: '#2c73d9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle2 size={19} />
                    </div>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '14.5px' }} className="consultation-highlight-title">Tailored Implementation Blueprint</div>
                      <div style={{ color: '#94a3b8', fontSize: '12.5px' }}>Milestone-driven roadmap with transparent scope and ROI</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Glass Form */}
              <div className="col-lg-7">
                <div 
                  className="consultation-form-card"
                  style={{
                    borderRadius: '18px',
                    padding: '30px'
                  }}
                >
                  {formSubmitted ? (
                    <div className="text-center py-4">
                      <div style={{ padding: '16px', borderRadius: '50%', background: 'rgba(44, 115, 217, 0.2)', color: '#2c73d9', display: 'inline-flex', marginBottom: '16px' }}>
                        <CheckCircle2 size={36} />
                      </div>
                      <h3 style={{ marginBottom: '10px' }}>Inquiry Received!</h3>
                      <p style={{ maxWidth: '400px', margin: '0 auto' }}>
                        Thank you for contacting Altapete Solutions. A senior solution consultant will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                      <h4 className="consultation-form-title" style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', color: 'var(--text-primary)' }}>
                        Request a Strategy Consultation
                      </h4>

                      <div className="row g-3 mb-3">
                        <div className="col-md-6">
                          <input 
                            type="text" 
                            className="consultation-input"
                            placeholder="Full Name *" 
                            required 
                            style={{
                              width: '100%',
                              borderRadius: '10px',
                              padding: '12px 16px',
                              fontSize: '14px',
                              outline: 'none'
                            }}
                          />
                        </div>
                        <div className="col-md-6">
                          <input 
                            type="email" 
                            className="consultation-input"
                            placeholder="Business Email *" 
                            required 
                            style={{
                              width: '100%',
                              borderRadius: '10px',
                              padding: '12px 16px',
                              fontSize: '14px',
                              outline: 'none'
                            }}
                          />
                        </div>
                      </div>

                      <div className="row g-3 mb-3">
                        <div className="col-md-6">
                          <input 
                            type="tel" 
                            className="consultation-input"
                            placeholder="Phone Number *" 
                            required 
                            style={{
                              width: '100%',
                              borderRadius: '10px',
                              padding: '12px 16px',
                              fontSize: '14px',
                              outline: 'none'
                            }}
                          />
                        </div>
                        <div className="col-md-6">
                          <input 
                            type="text" 
                            className="consultation-input"
                            placeholder="Subject / Service Area *" 
                            required 
                            style={{
                              width: '100%',
                              borderRadius: '10px',
                              padding: '12px 16px',
                              fontSize: '14px',
                              outline: 'none'
                            }}
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <textarea 
                          className="consultation-input"
                          placeholder="Tell us about your project or business needs *" 
                          rows={4} 
                          required 
                          style={{
                            width: '100%',
                            borderRadius: '10px',
                            padding: '12px 16px',
                            fontSize: '14px',
                            outline: 'none',
                            resize: 'vertical'
                          }}
                        />
                      </div>

                      <button 
                        type="submit" 
                        className="btn btn-linear w-100 py-3"
                        style={{ fontSize: '15px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                      >
                        Submit Consultation Request <Send size={16} />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
