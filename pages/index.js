import React, { useState } from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Layout from '@/components/Layout';
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

  const clients = [
    { name: "Ensco", logo: "/assets/imgs/clients-clean/ensco.png" },
    { name: "Ijarah", logo: "/assets/imgs/clients-clean/ijarah.png" },
    { name: "MSA Arabia", logo: "/assets/imgs/clients-clean/msaarabia.png" },
    { name: "OCA Global", logo: "/assets/imgs/clients-clean/oca-global.png" },
    { name: "Almutlaq Group", logo: "/assets/imgs/clients-clean/almutlaq.png" },
    { name: "Rubber Future", logo: "/assets/imgs/clients-clean/rubber-future.png" },
    { name: "Shahina", logo: "/assets/imgs/clients-clean/shahina.png" },
    { name: "SIRC", logo: "/assets/imgs/clients-clean/sirc.png" },
    { name: "Tajmie", logo: "/assets/imgs/clients-clean/tajmie.png" },
    { name: "Yugen", logo: "/assets/imgs/clients-clean/yugen.png" },
    { name: "Zamil Group", logo: "/assets/imgs/clients-clean/zamil.png" }
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
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(44, 115, 217, 0.22), transparent 70%), linear-gradient(180deg, #0b0a17 0%, #0d0c1d 100%)',
          overflow: 'hidden'
        }}
      >
        {/* Ambient background glows */}
        <div style={{ position: 'absolute', top: '15%', left: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(40, 36, 96, 0.5) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '30%', right: '5%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(44, 115, 217, 0.25) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />

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

            {/* Right Visual: Futuristic Enterprise Ecosystem Showcase */}
            <div className="col-lg-6 position-relative text-center">
              <div 
                className="hero-visual-wrapper position-relative"
                style={{
                  maxWidth: '560px',
                  margin: '0 auto'
                }}
              >
                {/* Cyber ambient glow backdrop */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: '-5%',
                    background: 'radial-gradient(circle at 50% 50%, rgba(44, 115, 217, 0.3) 0%, rgba(40, 36, 96, 0.25) 50%, transparent 75%)',
                    filter: 'blur(50px)',
                    zIndex: 0
                  }} 
                />

                {/* Main Visual */}
                <img 
                  src="/assets/imgs/page/homepage1/banner.png" 
                  alt="Altapete Solutions Platform"
                  className="img-fluid position-relative"
                  style={{
                    zIndex: 1,
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.55))',
                    maxHeight: '440px'
                  }}
                />

                {/* Floating KPI Badge 1 (Top Left): Real-time Core */}
                <div
                  className="glass-card float-anim"
                  style={{
                    position: 'absolute',
                    top: '6%',
                    left: '-20px',
                    padding: '11px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '11px',
                    zIndex: 3,
                    borderRadius: '14px',
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(44, 115, 217, 0.2)', color: '#2c73d9' }}>
                    <Cpu size={20} />
                  </div>
                  <div className="text-start">
                    <div className="badge-kpi-title" style={{ fontSize: '12.5px', fontWeight: 700 }}>Real-time Core</div>
                    <div style={{ color: '#2c73d9', fontSize: '11px', fontWeight: 600 }}>99.99% Cloud Uptime</div>
                  </div>
                </div>

                {/* Floating KPI Badge 2 (Top Right): Multi-Cloud ERP */}
                <div
                  className="glass-card float-anim"
                  style={{
                    position: 'absolute',
                    top: '12%',
                    right: '-20px',
                    padding: '11px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '11px',
                    zIndex: 3,
                    borderRadius: '14px',
                    animationDelay: '1.2s',
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(44, 115, 217, 0.2)', color: '#2c73d9' }}>
                    <Server size={20} />
                  </div>
                  <div className="text-start">
                    <div className="badge-kpi-title" style={{ fontSize: '12.5px', fontWeight: 700 }}>Cloud ERP Engine</div>
                    <div style={{ color: '#2c73d9', fontSize: '11px', fontWeight: 600 }}>Odoo 18 & SAP</div>
                  </div>
                </div>

                {/* Floating KPI Badge 3 (Bottom Left): Ultra-Fast Sync */}
                <div
                  className="glass-card float-anim"
                  style={{
                    position: 'absolute',
                    bottom: '12%',
                    left: '-20px',
                    padding: '11px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '11px',
                    zIndex: 3,
                    borderRadius: '14px',
                    animationDelay: '1.8s',
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(44, 115, 217, 0.2)', color: '#2c73d9' }}>
                    <Zap size={20} />
                  </div>
                  <div className="text-start">
                    <div className="badge-kpi-title" style={{ fontSize: '12.5px', fontWeight: 700 }}>Sub-Second Sync</div>
                    <div style={{ color: '#2c73d9', fontSize: '11px', fontWeight: 600 }}>&lt;15ms Latency</div>
                  </div>
                </div>

                {/* Floating KPI Badge 4 (Bottom Right): ZATCA Phase 2 */}
                <div
                  className="glass-card float-anim"
                  style={{
                    position: 'absolute',
                    bottom: '6%',
                    right: '-20px',
                    padding: '11px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '11px',
                    zIndex: 3,
                    borderRadius: '14px',
                    animationDelay: '2.5s',
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(44, 115, 217, 0.2)', color: '#2c73d9' }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div className="text-start">
                    <div className="badge-kpi-title" style={{ fontSize: '12.5px', fontWeight: 700 }}>ZATCA Compliant</div>
                    <div style={{ color: '#2c73d9', fontSize: '11px', fontWeight: 600 }}>Phase 2 Certified</div>
                  </div>
                </div>
              </div>
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

        {/* Continuous Marquee Slider */}
        <div className="marquee-wrapper">
          <div className="marquee-viewport">
            <div className="marquee-track">
              {[...techPartners, ...techPartners].map((tp, idx) => (
                <div 
                  className="tech-card-wrapper glass-card"
                  key={idx}
                  style={{
                    width: '260px',
                    padding: '24px 20px',
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: '16px'
                  }}
                >
                  <div 
                    className="tech-logo-box"
                    style={{
                      width: '100%',
                      height: '76px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '10px 16px',
                      marginBottom: '16px',
                      borderRadius: '12px',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <img 
                      src={tp.logo} 
                      alt={tp.name} 
                      className="tech-logo-img"
                      style={{ maxHeight: '46px', maxWidth: '85%', objectFit: 'contain' }} 
                    />
                  </div>
                  <span 
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "rgba(44, 115, 217, 0.12)",
                      color: "var(--brand-accent)",
                      border: "1px solid rgba(44, 115, 217, 0.25)",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      marginBottom: "10px"
                    }}
                  >
                    <tp.icon size={12} strokeWidth={2} />
                    {tp.tag}
                  </span>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '17px', fontWeight: 700, margin: '0 0 4px' }}>
                    {tp.name}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '13px', margin: 0 }}>
                    {tp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
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
                        <span 
                          style={{
                            color: '#2c73d9',
                            fontSize: '11.5px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.8px',
                            background: 'rgba(40, 36, 96, 0.6)',
                            padding: '4px 10px',
                            borderRadius: '20px',
                            border: '1px solid rgba(44, 115, 217, 0.2)'
                          }}
                        >
                          {srv.category}
                        </span>
                      </div>

                      <h3 style={{ color: '#ffffff', fontSize: '19px', fontWeight: 700, marginBottom: '12px' }}>
                        {srv.title}
                      </h3>

                      <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.65, marginBottom: '20px' }}>
                        {srv.desc}
                      </p>

                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 25px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {srv.points.map((pt, pIdx) => (
                          <li key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '13px' }}>
                            <CheckCircle2 size={14} color="#2c73d9" /> {pt}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <Link 
                        href={srv.href}
                        className="btn btn-outline-brand w-100 text-center justify-content-center"
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
          <div className="slider-viewport">
            <div className="slider-track">
              {[...clients, ...clients].map((cl, idx) => (
                <div 
                  className="client-card-wrapper"
                  key={idx}
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
              {/* Left Column: Office Hubs */}
              <div className="col-lg-5">
                <div className="brand-badge mb-15">
                  <MapPin size={13} /> Get In Touch
                </div>
                <h2 className="color-white font-heading mb-20" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', lineHeight: 1.25 }}>
                  Let’s Build the <span className="color-linear">Right Solution</span> Together
                </h2>
                <p className="color-gray-400 mb-30" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                  Whether it’s an ERP rollout, SAP migration, ZATCA e-invoicing integration, or financial advisory — our certified consultants will respond within 24 hours.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(44, 115, 217, 0.15)', color: '#2c73d9' }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '15px' }}>Al Khobar, Saudi Arabia</div>
                      <div style={{ color: '#94a3b8', fontSize: '13.5px' }}>Office# 09, 4th Floor, King Khalid Street Cross 15</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(44, 115, 217, 0.15)', color: '#2c73d9' }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '15px' }}>Lahore, Pakistan</div>
                      <div style={{ color: '#94a3b8', fontSize: '13.5px' }}>159-D Nawab Town, Raiwind Road</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(44, 115, 217, 0.15)', color: '#2c73d9' }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '15px' }}>Riyadh, Saudi Arabia</div>
                      <div style={{ color: '#94a3b8', fontSize: '13.5px' }}>Building #44, Ibn Katheer Street, King Abdulaziz District</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Glass Form */}
              <div className="col-lg-7">
                <div 
                  style={{
                    background: 'rgba(19, 17, 42, 0.8)',
                    border: '1px solid rgba(44, 115, 217, 0.25)',
                    borderRadius: '18px',
                    padding: '30px'
                  }}
                >
                  {formSubmitted ? (
                    <div className="text-center py-4">
                      <div style={{ padding: '16px', borderRadius: '50%', background: 'rgba(44, 115, 217, 0.2)', color: '#2c73d9', display: 'inline-flex', marginBottom: '16px' }}>
                        <CheckCircle2 size={36} />
                      </div>
                      <h3 style={{ color: '#ffffff', marginBottom: '10px' }}>Inquiry Received!</h3>
                      <p style={{ color: '#94a3b8', maxWidth: '400px', margin: '0 auto' }}>
                        Thank you for contacting Altapete Solutions. A senior solution consultant will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                      <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>
                        Request a Strategy Consultation
                      </h4>

                      <div className="row g-3 mb-3">
                        <div className="col-md-6">
                          <input 
                            type="text" 
                            placeholder="Full Name *" 
                            required 
                            style={{
                              width: '100%',
                              background: 'rgba(40, 36, 96, 0.4)',
                              border: '1px solid rgba(44, 115, 217, 0.3)',
                              borderRadius: '10px',
                              padding: '12px 16px',
                              color: '#ffffff',
                              fontSize: '14px',
                              outline: 'none'
                            }}
                          />
                        </div>
                        <div className="col-md-6">
                          <input 
                            type="email" 
                            placeholder="Business Email *" 
                            required 
                            style={{
                              width: '100%',
                              background: 'rgba(40, 36, 96, 0.4)',
                              border: '1px solid rgba(44, 115, 217, 0.3)',
                              borderRadius: '10px',
                              padding: '12px 16px',
                              color: '#ffffff',
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
                            placeholder="Phone Number *" 
                            required 
                            style={{
                              width: '100%',
                              background: 'rgba(40, 36, 96, 0.4)',
                              border: '1px solid rgba(44, 115, 217, 0.3)',
                              borderRadius: '10px',
                              padding: '12px 16px',
                              color: '#ffffff',
                              fontSize: '14px',
                              outline: 'none'
                            }}
                          />
                        </div>
                        <div className="col-md-6">
                          <input 
                            type="text" 
                            placeholder="Subject / Service Area *" 
                            required 
                            style={{
                              width: '100%',
                              background: 'rgba(40, 36, 96, 0.4)',
                              border: '1px solid rgba(44, 115, 217, 0.3)',
                              borderRadius: '10px',
                              padding: '12px 16px',
                              color: '#ffffff',
                              fontSize: '14px',
                              outline: 'none'
                            }}
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <textarea 
                          placeholder="Tell us about your project or business needs *" 
                          rows={4} 
                          required 
                          style={{
                            width: '100%',
                            background: 'rgba(40, 36, 96, 0.4)',
                            border: '1px solid rgba(44, 115, 217, 0.3)',
                            borderRadius: '10px',
                            padding: '12px 16px',
                            color: '#ffffff',
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
