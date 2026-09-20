import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import {
  Building2, Server, Code2, ShieldCheck, RefreshCw,
  ShoppingBag, ShoppingCart, Users, CreditCard, Calculator,
  Briefcase, Scale, Building, Layers, ArrowRight, CheckCircle2,
  Sparkles, Zap, Award, Clock, Headphones, Check, ExternalLink,
  ChevronRight, ArrowUpRight, Cpu, Globe, Lock, Activity
} from 'lucide-react';

const serviceCategories = [
  'All Capabilities',
  'Digital & Cloud Transformation',
  'Integrations & Middleware',
  'Financial & Corporate Advisory',
  'Vertical Industry ERPs'
];

const allServices = [
  // 1. Digital & Cloud Transformation
  {
    id: 'enterprise-solutions',
    title: 'Enterprise Solutions',
    category: 'Digital & Cloud Transformation',
    tag: 'ERP & CLOUD',
    icon: Building2,
    href: '/enterprise-solutions',
    desc: 'Scalable Odoo ERP, SAP & Oracle enterprise implementations with unified multi-company architectures, custom business logic, and automated operational workflows.',
    features: [
      'Full ERP Lifecycle Implementation',
      'Multi-Company Ledger Consolidation',
      'Custom Workflow & Process Automation',
      'Legacy System & Data Migration'
    ],
    highlight: 'Odoo V14-V17 & SAP'
  },
  {
    id: 'technology-management',
    title: 'Technology Management Services',
    category: 'Digital & Cloud Transformation',
    tag: 'INFRASTRUCTURE',
    icon: Server,
    href: '/technology-management',
    desc: 'Enterprise cloud hosting, DevOps automation, 24/7 dedicated DBA administration, high-availability database replication, and proactive cybersecurity auditing.',
    features: [
      'Cloud Architecture & AWS/Azure Setup',
      '24/7 Database & Infrastructure Monitoring',
      'Disaster Recovery & Zero-Data-Loss Backups',
      'SOCPA & ISO Security Compliance Audits'
    ],
    highlight: '24/7 Active SLA'
  },
  {
    id: 'custom-app-development',
    title: 'Custom Application Development',
    category: 'Digital & Cloud Transformation',
    tag: 'SOFTWARE ENG',
    icon: Code2,
    href: '/custom-app-development',
    desc: 'High-performance web applications, mobile platforms, B2B client portals, and bespoke SaaS systems built with modern scalable tech stacks and secure APIs.',
    features: [
      'Next.js, React & Node.js Architectures',
      'Native & Cross-Platform Mobile Apps',
      'Custom B2B Enterprise Client Portals',
      'Microservices & RESTful API Engineering'
    ],
    highlight: 'Tailored SaaS'
  },

  // 2. Integrations & Middleware
  {
    id: 'zatca-integration',
    title: 'ZATCA Phase 2 E-Invoicing',
    category: 'Integrations & Middleware',
    tag: 'GOV CLEARANCE',
    icon: ShieldCheck,
    href: '/zatca-integration',
    desc: 'Certified cryptographic onboarding (CSID), XML UBL 2.1 formatting, real-time B2B clearance and B2C reporting APIs fully compliant with Saudi FATOORA mandates.',
    features: [
      '100% Clearance Success Rate SLA',
      'Production CSID Key Issuance & Management',
      'Cryptographic Stamp & QR Code Generation',
      'Pre-Built Connectors for Odoo, SAP & Oracle'
    ],
    highlight: 'Phase 2 Certified'
  },
  {
    id: 'odoo-to-odoo',
    title: 'Odoo-to-Odoo Data Integration',
    category: 'Integrations & Middleware',
    tag: 'SYNC ENGINE',
    icon: RefreshCw,
    href: '/odoo-to-odoo-data-integration',
    desc: 'High-throughput bi-directional data pipelines, multi-company ledger bridges, and real-time inventory allocation networks connecting multiple Odoo databases with zero data loss.',
    features: [
      'Bi-Directional Real-Time Data Pipelines',
      'Automated Conflict Reconciliation Engine',
      'PostgreSQL Master-to-Replica Sync',
      'Sub-Second Transaction Dispatch SLA'
    ],
    highlight: 'Sub-Second Sync'
  },
  {
    id: 'salla-integration',
    title: 'Salla E-Commerce Integration',
    category: 'Integrations & Middleware',
    tag: 'E-COMMERCE',
    icon: ShoppingBag,
    href: '/salla-integration',
    desc: 'Automated real-time synchronization of Salla orders, multi-branch stock levels, customer data, and accounting entries directly with your central enterprise ERP.',
    features: [
      'Sub-Second Webhook Event Listeners',
      'Automated Tax Invoice & Receipt Sync',
      'Multi-Branch Inventory Allocation',
      'ZATCA Phase 2 Compliant E-Commerce Flow'
    ],
    highlight: 'Real-Time Sync'
  },
  {
    id: 'shopify-integration',
    title: 'Shopify ERP Integration',
    category: 'Integrations & Middleware',
    tag: 'OMNICHANNEL',
    icon: ShoppingCart,
    href: '/shopify-integration',
    desc: 'Omnichannel Shopify-to-ERP bridge automating product catalogs, multi-store order fulfillment, returns, refunds, and financial ledger reconciliations.',
    features: [
      'Multi-Store & Global Currency Support',
      'Automated COGS & Journal Entry Postings',
      'Real-Time Omnichannel Stock Buffer Sync',
      'Automated Fulfillment & Courier Tracking'
    ],
    highlight: 'Multi-Store Ready'
  },
  {
    id: 'hr-muqeem',
    title: 'HR Muqeem Government Integration',
    category: 'Integrations & Middleware',
    tag: 'GOV PORTAL',
    icon: Users,
    href: '/hr-muqeem',
    desc: 'Direct middleware connecting enterprise HR & payroll modules with the Saudi Muqeem portal for automated residency renewals, exit-re-entry visas, and labor records.',
    features: [
      'Iqama Issuance & Automated Renewal',
      'Exit / Re-Entry Visa Processing',
      'GOSI & Labor Ministry Data Sync',
      'Automated Expiry Alerts & Document Archive'
    ],
    highlight: 'Saudi Labor Compliant'
  },
  {
    id: 'mada-jedia-jisr',
    title: 'Mada, Jedia & Jisr Integration',
    category: 'Integrations & Middleware',
    tag: 'FINTECH / HR',
    icon: CreditCard,
    href: '/mada-jedia-hr-jisr-integration',
    desc: 'Seamless fintech POS reconciliation with Mada/Jedia payment terminals and automated HR payroll synchronization with Saudi Arabia’s leading HR platform, Jisr.',
    features: [
      'POS Payment Terminal Reconciliation',
      'Automated Bank Settlement Matching',
      'Jisr Payroll to ERP Ledger Dispatch',
      'End-of-Service & Vacation Accrual Sync'
    ],
    highlight: 'POS & Payroll Sync'
  },

  // 3. Financial & Corporate Advisory
  {
    id: 'accounting-financial-advisory',
    title: 'Accounting & Financial Advisory',
    category: 'Financial & Corporate Advisory',
    tag: 'SOCPA & IFRS',
    icon: Calculator,
    href: '/accounting-financial-advisory',
    desc: 'SOCPA-compliant bookkeeping, IFRS financial statement preparation, internal audit support, financial modeling, and strategic CFO-level advisory for scaling businesses.',
    features: [
      'SOCPA & IFRS Accounting Standards',
      'Comprehensive Audit Trail Preparation',
      'Financial Modeling & Cash Flow Projections',
      'Consolidated Balance Sheets & P&L'
    ],
    highlight: 'SOCPA Accredited'
  },
  {
    id: 'corporate-advisory',
    title: 'Corporate Advisory Services',
    category: 'Financial & Corporate Advisory',
    tag: 'MISA & GOVERNANCE',
    icon: Briefcase,
    href: '/corporate-advisory',
    desc: 'End-to-end foreign investment licensing (MISA), commercial registration (CR), corporate restructuring, board governance charters, and multi-agency regulatory alignment.',
    features: [
      'MISA Foreign Investment Licensing',
      'Company Formation & Articles of Association',
      'Corporate Governance Charters & Bylaws',
      'Mergers, Acquisitions & Restructuring'
    ],
    highlight: 'MISA & MOC Aligned'
  },
  {
    id: 'taxation-zakat-advisory',
    title: 'Taxation & ZAKAT Advisory',
    category: 'Financial & Corporate Advisory',
    tag: 'TAX COMPLIANCE',
    icon: Scale,
    href: '/taxation-zakat-advisory',
    desc: 'Certified Zakat base computation, 20% Corporate Income Tax returns, 15% VAT reconciliations, Withholding Tax, and Transfer Pricing documentation for Saudi entities.',
    features: [
      'Certified Zakat Declarations & Filing',
      'Corporate Income Tax (CIT) Optimization',
      'Quarterly VAT Reconciliations & Filing',
      'Transfer Pricing Local & Master Files'
    ],
    highlight: 'Zero-Penalty Track Record'
  },
  {
    id: 'outsourcing-business-services',
    title: 'Outsourcing & Business Services',
    category: 'Financial & Corporate Advisory',
    tag: 'BPO & PAYROLL',
    icon: Building,
    href: '/outsourcing-business-services',
    desc: 'Full-scale outsourced bookkeeping, monthly payroll administration, vendor ledger reconciliations, and on-demand finance teams operating seamlessly with your ERP.',
    features: [
      'Full Bookkeeping & Accounting Outsourcing',
      'WPS-Compliant Monthly Payroll Processing',
      'Accounts Payable & Receivable Management',
      'Dedicated On-Demand Finance Department'
    ],
    highlight: 'Dedicated Team'
  },

  // 4. Vertical Industry ERPs
  {
    id: 'vertical-industry-solutions',
    title: 'Vertical Industry Solutions',
    category: 'Vertical Industry ERPs',
    tag: 'INDUSTRY ERP',
    icon: Layers,
    href: '/products',
    desc: 'Turnkey enterprise software solutions engineered specifically for Rental, Shipping/Freight, Hotel PMS, Hospital EMR, School Management, and Construction.',
    features: [
      'Fleet & Heavy Machinery Rental Lifecycle',
      'Freight Forwarding & Dispatch Tracking',
      'Hospital EMR, Clinic & Pharmacy Management',
      'Hotel PMS & Direct Booking Engine'
    ],
    highlight: '6 Turnkey Verticals'
  }
];

const deliveryProcess = [
  {
    step: '01',
    title: 'Discovery & Architecture Blueprint',
    desc: 'We conduct in-depth operational audits, map data flows, and design a tailored architecture blueprint aligned with statutory Saudi regulations and enterprise scale.',
    badge: 'ANALYSIS & SCOPE'
  },
  {
    step: '02',
    title: 'Engineering & Custom Middleware',
    desc: 'Our certified engineers configure core modules, construct resilient API bridges, and build bespoke microservices with zero-compromise code quality.',
    badge: 'AGILE BUILD'
  },
  {
    step: '03',
    title: 'Rigorous Testing & Sandbox Clearance',
    desc: 'Parallel ledger runs, automated data validation, security penetration testing, and ZATCA sandbox clearance guarantee flawless cutover with zero downtime.',
    badge: 'QUALITY ASSURANCE'
  },
  {
    step: '04',
    title: '24/7 SLA & Proactive Support',
    desc: 'Post-launch, our regional team provides continuous monitoring, regular regulatory updates, automated backups, and guaranteed SLA response times.',
    badge: 'LIFECYCLE PARTNER'
  }
];

// Exact Client Logos matching Homepage (2 Rows, LTR)
const clientRow1 = [
  { name: "Ensco", logo: "/assets/imgs/updated-clients/ensco.png" },
  { name: "Ijarah Finance", logo: "/assets/imgs/updated-clients/ijarah.png" },
  { name: "MSA Arabia", logo: "/assets/imgs/updated-clients/msaarabia.png" },
  { name: "OCA Global", logo: "/assets/imgs/updated-clients/oca-global.png" },
  { name: "Almutlaq Group", logo: "/assets/imgs/updated-clients/almutlaq.png" },
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
  { name: "Rubber Future", logo: "/assets/imgs/updated-clients/rubber-future.png" },
  { name: "IFE", logo: "/assets/imgs/updated-clients/picture21.png" },
  { name: "Aanakaboot", logo: "/assets/imgs/updated-clients/picture22.png" },
  { name: "Madar", logo: "/assets/imgs/updated-clients/picture23.png" },
  { name: "Takyeef", logo: "/assets/imgs/updated-clients/picture24.png" },
  { name: "Quill", logo: "/assets/imgs/updated-clients/picture25.png" },
  { name: "Amber", logo: "/assets/imgs/updated-clients/picture26.png" },
  { name: "Mawared Baladi", logo: "/assets/imgs/updated-clients/picture27.png" },
  { name: "Obika Trattoria", logo: "/assets/imgs/updated-clients/picture28.png" }
];

const strategicPillars = [
  {
    title: "13+ Years Regional Experience",
    desc: "Over a decade of successful ERP deployments and financial advisory across Saudi Arabia, UAE, and GCC markets.",
    icon: Award
  },
  {
    title: "ZATCA & SOCPA Accredited",
    desc: "Direct certified alignment with ZATCA Phase 2 FATOORA mandates, MISA investment rules, and SOCPA/IFRS standards.",
    icon: ShieldCheck
  },
  {
    title: "End-to-End Delivery Model",
    desc: "From system architecture and bespoke code to statutory tax filings and 24/7 SLA, one accountable partner.",
    icon: Zap
  },
  {
    title: "Guaranteed SLA & Compliance",
    desc: "Zero data loss protocols, sub-second API pipelines, and dedicated on-the-ground support teams in Riyadh and Al Khobar.",
    icon: Headphones
  }
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Capabilities');

  const filteredServices = selectedCategory === 'All Capabilities'
    ? allServices
    : allServices.filter(s => s.category === selectedCategory);

  return (
    <Layout
      title="Enterprise Services & Business Solutions | Altapete Solutions"
      description="Explore Altapete Solutions' full capability spectrum: ERP & SAP implementations, ZATCA Phase 2 integration, custom software development, accounting, taxation, and corporate advisory."
    >
      <div className="services-page-wrapper">

        {/* ────────────────── 1. HERO SECTION ────────────────── */}
        <section className="services-hero-section">
          <div className="container position-relative">
            <div className="row align-items-center g-4 g-lg-5">
              
              {/* Left Column: Headline & Action Buttons */}
              <div className="col-lg-7">
                <div className="services-eyebrow-pill">
                  <span className="services-pulse-dot" />
                  <span>ENTERPRISE SERVICES & STRATEGIC ADVISORY</span>
                </div>

                <h1 className="services-hero-title">
                  Comprehensive Solutions Tailored for <span className="services-gradient-text">Enterprise Growth</span>
                </h1>

                <p className="services-hero-desc">
                  Altapete Solutions delivers integrated enterprise technology, custom software engineering, statutory financial advisory, and regulatory compliance architectures for forward-thinking organizations across Saudi Arabia and the Middle East.
                </p>

                {/* Exact same CTA buttons as Taxation & ZATCA Advisory */}
                <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                  <a 
                    href="#services-matrix" 
                    className="btn btn-linear hover-up services-hero-btn"
                  >
                    Explore All Services <ArrowRight size={17} />
                  </a>
                  <Link 
                    href="/contact-us" 
                    className="btn btn-outline-brand services-hero-secondary-btn"
                  >
                    Book Strategy Consultation
                  </Link>
                </div>

                {/* Key Trust Signals */}
                <div className="services-trust-row">
                  <div className="services-trust-item">
                    <CheckCircle2 size={16} className="services-accent-icon" />
                    <span>13+ Years Regional Experience</span>
                  </div>
                  <div className="services-trust-item">
                    <CheckCircle2 size={16} className="services-accent-icon" />
                    <span>100% ZATCA Phase 2 Ready</span>
                  </div>
                  <div className="services-trust-item">
                    <CheckCircle2 size={16} className="services-accent-icon" />
                    <span>SOCPA & IFRS Aligned</span>
                  </div>
                  <div className="services-trust-item">
                    <CheckCircle2 size={16} className="services-accent-icon" />
                    <span>Sub-Second Sync SLA</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Ecosystem Orb */}
              <div className="col-lg-5 text-center">
                <div className="services-hero-visual">
                  <div className="services-central-hub">
                    <Layers size={36} color="#ffffff" />
                    <span className="services-hub-text">ALTAPETE CORE</span>
                  </div>

                  {/* Concentric Rotating Orbit Rings */}
                  <div className="services-ring services-ring-inner" />
                  <div className="services-ring services-ring-outer" />

                  {/* Satellite Badges */}
                  <div className="services-satellite sat-1">
                    <Building2 size={14} color="#00AEEF" />
                    <span>ERP & SAP</span>
                  </div>
                  <div className="services-satellite sat-2">
                    <ShieldCheck size={14} color="#00E5FF" />
                    <span>ZATCA Phase 2</span>
                  </div>
                  <div className="services-satellite sat-3">
                    <Scale size={14} color="#2c73d9" />
                    <span>Tax & Zakat</span>
                  </div>
                  <div className="services-satellite sat-4">
                    <Code2 size={14} color="#00AEEF" />
                    <span>Custom SaaS</span>
                  </div>
                  <div className="services-satellite sat-5">
                    <RefreshCw size={14} color="#00E5FF" />
                    <span>Data Sync</span>
                  </div>
                  <div className="services-satellite sat-6">
                    <Calculator size={14} color="#2c73d9" />
                    <span>SOCPA Audit</span>
                  </div>

                  {/* Floating Bottom Metric */}
                  <div className="services-floating-metric">
                    <span className="services-metric-val">150+ Projects</span>
                    <span className="services-metric-label">Delivered with Zero Downtime</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ────────────────── 2. FILTERABLE SERVICES MATRIX ────────────────── */}
        <section id="services-matrix" className="services-matrix-section">
          <div className="container">
            <div className="text-center mb-4 pb-2">
              <div className="services-section-tag">FULL CAPABILITY SPECTRUM</div>
              <h2 className="services-section-title">
                Explore Our <span className="services-gradient-text">Enterprise Capabilities</span>
              </h2>
              <p className="services-section-desc">
                Select a domain to discover how our certified consultants, software engineers, and tax specialists solve complex business challenges.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="services-tabs-wrapper mb-5">
              {serviceCategories.map((cat, idx) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`services-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>

            {/* Service Cards Grid */}
            <div className="row g-4">
              {filteredServices.map((srv) => {
                const Icon = srv.icon;
                return (
                  <div className="col-lg-4 col-md-6" key={srv.id}>
                    <div className="service-feature-card">
                      <div>
                        <div className="card-top-row">
                          <div className="service-icon-box">
                            <Icon size={24} />
                          </div>
                          <span className="service-tag-pill">{srv.tag}</span>
                        </div>

                        <h3 className="service-title">{srv.title}</h3>
                        <p className="service-desc">{srv.desc}</p>

                        <div className="service-checklist">
                          {srv.features.map((feat, fIdx) => (
                            <div className="service-check-item" key={fIdx}>
                              <CheckCircle2 size={15} className="check-bullet" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="card-bottom-action">
                        <Link href={srv.href} className="btn btn-outline-brand service-explore-btn">
                          <span>Explore Service</span>
                          <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ────────────────── 3. STRATEGIC DELIVERY METHODOLOGY ────────────────── */}
        <section className="services-methodology-section">
          <div className="container">
            <div className="text-center mb-5">
              <div className="services-section-tag">ENGINEERED FOR SUCCESS</div>
              <h2 className="services-section-title">
                Our 4-Stage <span className="services-gradient-text">Delivery Lifecycle</span>
              </h2>
              <p className="services-section-desc">
                Every enterprise engagement adheres to a rigorous, milestone-driven delivery process engineered for zero data loss, airtight security, and transparent accountability.
              </p>
            </div>

            <div className="row g-4">
              {deliveryProcess.map((step, idx) => (
                <div className="col-lg-3 col-md-6" key={idx}>
                  <div className="methodology-card">
                    <div className="methodology-step-num">{step.step}</div>
                    <span className="methodology-badge">{step.badge}</span>
                    <h4 className="methodology-title">{step.title}</h4>
                    <p className="methodology-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────── 4. OUR VALUED CLIENTS (HOMEPAGE-IDENTICAL 2-ROW MARQUEE) ────────────────── */}
        <section className="partners-section py-5 position-relative">
          <div className="container text-center mb-40">
            <div className="services-section-tag mb-15">PROVEN REGIONAL EXCELLENCE</div>
            <h3 className="font-heading mb-15" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)' }}>
              Trusted By <span className="color-linear">Leading Companies</span>
            </h3>
            <p className="mx-auto" style={{ maxWidth: '650px', fontSize: '15px' }}>
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

        {/* ────────────────── 5. WHY CHOOSE ALTAPETE ────────────────── */}
        <section className="services-pillars-section">
          <div className="container">
            <div className="text-center mb-5">
              <div className="services-section-tag">STRATEGIC ADVANTAGE</div>
              <h2 className="services-section-title">
                Why Organizations Choose <span className="services-gradient-text">Altapete Solutions</span>
              </h2>
              <p className="services-section-desc">
                We bridge deep vertical software engineering with accredited financial advisory, ensuring seamless execution across every layer of your business.
              </p>
            </div>

            <div className="row g-4">
              {strategicPillars.map((pil, idx) => {
                const Icon = pil.icon;
                return (
                  <div className="col-lg-3 col-md-6" key={idx}>
                    <div className="pillar-card">
                      <div className="pillar-icon-box">
                        <Icon size={28} />
                      </div>
                      <h4 className="pillar-title">{pil.title}</h4>
                      <p className="pillar-desc">{pil.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ────────────────── 6. EXECUTIVE CTA SECTION ────────────────── */}
        <section className="services-cta-section">
          <div className="container">
            <div className="services-cta-card">
              <div className="row align-items-center g-4">
                <div className="col-lg-8">
                  <div className="services-section-tag mb-3">GET STARTED TODAY</div>
                  <h2 className="cta-heading">Ready to Modernize Your Enterprise Operations?</h2>
                  <p className="cta-subheading">
                    Speak directly with our senior ERP architects and certified financial advisors to design a tailored transformation roadmap for your business.
                  </p>
                  <div className="cta-contact-links">
                    <a href="https://wa.me/966551076961" target="_blank" rel="noopener noreferrer" className="cta-link-pill">
                      <Zap size={15} color="#25D366" />
                      <span>WhatsApp: +966 55 107 6961</span>
                    </a>
                    <a href="tel:+966551013823" className="cta-link-pill">
                      <Headphones size={15} color="#00AEEF" />
                      <span>Direct: +966-551-013823</span>
                    </a>
                    <a href="mailto:info@altapete.com" className="cta-link-pill">
                      <Globe size={15} color="#2c73d9" />
                      <span>info@altapete.com</span>
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 text-lg-end text-center">
                  <Link href="/contact-us" className="btn btn-linear hover-up cta-action-btn">
                    <span>Request Proposal</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ────────────────── STYLED JSX ────────────────── */}
      <style jsx>{`
        .services-page-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        /* Hero Section */
        .services-hero-section {
          padding: 100px 0 70px;
          position: relative;
        }

        .services-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 18px;
          border-radius: 50px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.3);
          color: #00AEEF;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.8px;
          margin-bottom: 22px;
        }

        .services-pulse-dot {
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

        .services-hero-title {
          font-size: clamp(2.3rem, 4vw, 3.4rem);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.8px;
          margin-bottom: 20px;
        }

        .services-gradient-text {
          background: linear-gradient(135deg, #00AEEF 0%, #00E5FF 50%, #2c73d9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .services-hero-desc {
          font-size: 15.5px;
          line-height: 1.7;
          margin-bottom: 30px;
          max-width: 600px;
        }

        .services-hero-btn {
          padding: 14px 30px;
          font-size: 14.5px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border-radius: 12px;
        }

        .services-hero-secondary-btn {
          padding: 13px 26px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .services-trust-row {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          padding-top: 20px;
          border-top: 1px solid rgba(148, 163, 184, 0.18);
        }

        .services-trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          font-weight: 600;
        }

        .services-accent-icon {
          color: #00AEEF;
        }

        /* Hero Orbit Visual */
        .services-hero-visual {
          width: 100%;
          max-width: 460px;
          height: 420px;
          margin: 0 auto;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .services-central-hub {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00AEEF, #2c73d9);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 50px rgba(0, 174, 239, 0.5);
          position: relative;
          z-index: 10;
        }

        .services-hub-text {
          font-size: 9px;
          font-weight: 800;
          color: #ffffff;
          margin-top: 6px;
          letter-spacing: 1px;
        }

        .services-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(0, 174, 239, 0.3);
          pointer-events: none;
        }

        .services-ring-inner {
          width: 260px;
          height: 260px;
          animation: spinCounter 40s linear infinite;
        }

        .services-ring-outer {
          width: 370px;
          height: 370px;
          animation: spinCounter 60s linear infinite reverse;
        }

        @keyframes spinCounter {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .services-satellite {
          position: absolute;
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 7px;
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          z-index: 11;
        }

        .sat-1 { top: 6%; left: 16%; animation: satFloat 5s ease-in-out infinite; }
        .sat-2 { top: 6%; right: 16%; animation: satFloat 6s ease-in-out infinite 1s; }
        .sat-3 { top: 48%; right: 2%; animation: satFloat 5.5s ease-in-out infinite 0.5s; }
        .sat-4 { bottom: 12%; right: 16%; animation: satFloat 6.5s ease-in-out infinite 1.5s; }
        .sat-5 { bottom: 12%; left: 16%; animation: satFloat 5.8s ease-in-out infinite 0.8s; }
        .sat-6 { top: 48%; left: 2%; animation: satFloat 6.2s ease-in-out infinite 1.2s; }

        @keyframes satFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }

        .services-floating-metric {
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          padding: 8px 22px;
          border-radius: 30px;
          text-align: center;
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          z-index: 12;
          white-space: nowrap;
        }

        .services-metric-val {
          display: block;
          font-size: 15px;
          font-weight: 800;
          color: #00E5FF;
        }

        .services-metric-label {
          display: block;
          font-size: 10.5px;
          font-weight: 600;
          opacity: 0.85;
        }

        /* Section Headings */
        .services-section-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #00AEEF;
          padding: 5px 14px;
          border-radius: 50px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.25);
          margin-bottom: 12px;
        }

        .services-section-title {
          font-size: clamp(2rem, 3.2vw, 2.7rem);
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 14px;
        }

        .services-section-desc {
          font-size: 15px;
          line-height: 1.65;
          max-width: 650px;
          margin: 0 auto;
        }

        /* Tabs Filter */
        .services-matrix-section {
          padding: 60px 0 70px;
        }

        .services-tabs-wrapper {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .services-tab-btn {
          padding: 10px 22px;
          border-radius: 50px;
          border: 1px solid transparent;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          background: transparent;
        }

        .services-tab-btn.active {
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          color: #ffffff !important;
          border-color: rgba(0, 174, 239, 0.5);
          box-shadow: 0 4px 18px rgba(0, 174, 239, 0.35);
        }

        /* Feature Cards */
        .service-feature-card {
          padding: 30px 26px;
          border-radius: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
          position: relative;
        }

        .service-feature-card:hover {
          transform: translateY(-5px);
          border-color: #00AEEF !important;
          box-shadow: 0 16px 40px rgba(0, 174, 239, 0.2);
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .service-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 174, 239, 0.12);
          color: #00AEEF;
          border: 1px solid rgba(0, 174, 239, 0.3);
        }

        .service-tag-pill {
          font-size: 10px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .service-title {
          font-size: 18.5px;
          font-weight: 800;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .service-desc {
          font-size: 13.5px;
          line-height: 1.65;
          margin-bottom: 20px;
        }

        .service-checklist {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-bottom: 26px;
        }

        .service-check-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 12.5px;
          line-height: 1.45;
        }

        .check-bullet {
          color: #00E5FF;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .card-bottom-action {
          border-top: 1px solid rgba(148, 163, 184, 0.15);
          padding-top: 18px;
        }

        .service-explore-btn {
          width: 100%;
          justify-content: center;
          padding: 10px 18px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }

        /* Methodology */
        .services-methodology-section {
          padding: 70px 0;
        }

        .methodology-card {
          padding: 30px 24px;
          border-radius: 20px;
          height: 100%;
          position: relative;
          transition: all 0.3s ease;
        }

        .methodology-card:hover {
          transform: translateY(-4px);
        }

        .methodology-step-num {
          font-size: 32px;
          font-weight: 900;
          color: #00AEEF;
          opacity: 0.35;
          line-height: 1;
          margin-bottom: 12px;
        }

        .methodology-badge {
          display: inline-block;
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #00E5FF;
          margin-bottom: 10px;
        }

        .methodology-title {
          font-size: 17px;
          font-weight: 800;
          margin-bottom: 12px;
          line-height: 1.35;
        }

        .methodology-desc {
          font-size: 13px;
          line-height: 1.65;
          margin: 0;
        }

        /* Pillars */
        .services-pillars-section {
          padding: 70px 0;
        }

        .pillar-card {
          padding: 30px 24px;
          border-radius: 20px;
          height: 100%;
          text-align: center;
          transition: all 0.3s ease;
        }

        .pillar-card:hover {
          transform: translateY(-4px);
        }

        .pillar-icon-box {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          background: rgba(0, 174, 239, 0.12);
          color: #00AEEF;
          border: 1px solid rgba(0, 174, 239, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
        }

        .pillar-title {
          font-size: 17px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .pillar-desc {
          font-size: 13px;
          line-height: 1.6;
          margin: 0;
        }

        /* CTA Section */
        .services-cta-section {
          padding: 40px 0 80px;
        }

        .services-cta-card {
          padding: 50px 45px;
          border-radius: 26px;
          position: relative;
          overflow: hidden;
        }

        .cta-heading {
          font-size: clamp(1.8rem, 2.8vw, 2.4rem);
          font-weight: 800;
          margin-bottom: 14px;
          line-height: 1.25;
        }

        .cta-subheading {
          font-size: 15px;
          line-height: 1.65;
          margin-bottom: 24px;
          max-width: 620px;
        }

        .cta-contact-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .cta-link-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          padding: 7px 14px;
          border-radius: 20px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .cta-action-btn {
          padding: 16px 36px;
          font-size: 15px;
          font-weight: 700;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        @media (max-width: 991px) {
          .services-hero-visual {
            margin-top: 30px;
            height: 360px;
          }
          .services-cta-card {
            padding: 36px 26px;
          }
        }
      `}</style>

      {/* ────────────────── GLOBAL DUAL-THEME OVERRIDES ────────────────── */}
      <style jsx global>{`
        /* ---------------- DARK THEME ---------------- */
        [data-theme="dark"] .services-page-wrapper {
          background-color: #060c18;
          color: #e2e8f0;
        }

        [data-theme="dark"] .services-hero-title,
        [data-theme="dark"] .services-section-title,
        [data-theme="dark"] .service-title,
        [data-theme="dark"] .methodology-title,
        [data-theme="dark"] .pillar-title,
        [data-theme="dark"] .cta-heading {
          color: #ffffff !important;
        }

        [data-theme="dark"] .services-hero-desc,
        [data-theme="dark"] .services-section-desc,
        [data-theme="dark"] .service-desc,
        [data-theme="dark"] .methodology-desc,
        [data-theme="dark"] .pillar-desc,
        [data-theme="dark"] .cta-subheading,
        [data-theme="dark"] .services-metric-label {
          color: #94a3b8 !important;
        }

        [data-theme="dark"] .services-trust-item,
        [data-theme="dark"] .service-check-item span {
          color: #cbd5e1 !important;
        }

        [data-theme="dark"] .services-tab-btn {
          background: rgba(13, 24, 48, 0.7);
          border-color: rgba(0, 174, 239, 0.25);
          color: #94a3b8;
        }
        [data-theme="dark"] .services-tab-btn:hover {
          color: #ffffff;
          border-color: #00AEEF;
        }

        [data-theme="dark"] .service-feature-card,
        [data-theme="dark"] .methodology-card,
        [data-theme="dark"] .pillar-card {
          background: rgba(13, 24, 48, 0.65);
          border: 1.5px solid rgba(0, 174, 239, 0.2);
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }

        [data-theme="dark"] .service-tag-pill {
          background: rgba(0, 174, 239, 0.15);
          color: #00E5FF;
          border: 1px solid rgba(0, 174, 239, 0.3);
        }

        [data-theme="dark"] .services-satellite {
          background: rgba(13, 24, 48, 0.85);
          border: 1px solid rgba(0, 174, 239, 0.3);
          color: #ffffff;
        }

        [data-theme="dark"] .services-floating-metric {
          background: rgba(10, 20, 42, 0.92);
          border: 1px solid rgba(0, 174, 239, 0.35);
        }

        [data-theme="dark"] .services-cta-card {
          background: linear-gradient(135deg, rgba(13, 24, 48, 0.95) 0%, rgba(8, 16, 32, 0.98) 100%);
          border: 1.5px solid rgba(0, 174, 239, 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        [data-theme="dark"] .cta-link-pill {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
        }
        [data-theme="dark"] .cta-link-pill:hover {
          background: rgba(0, 174, 239, 0.15);
          border-color: rgba(0, 174, 239, 0.4);
          color: #ffffff;
        }

        /* ---------------- LIGHT THEME ---------------- */
        [data-theme="light"] .services-page-wrapper,
        :root:not([data-theme="dark"]) .services-page-wrapper {
          background-color: #f8fafc;
          color: #334155;
        }

        [data-theme="light"] .services-hero-title,
        :root:not([data-theme="dark"]) .services-hero-title,
        [data-theme="light"] .services-section-title,
        :root:not([data-theme="dark"]) .services-section-title,
        [data-theme="light"] .service-title,
        :root:not([data-theme="dark"]) .service-title,
        [data-theme="light"] .methodology-title,
        :root:not([data-theme="dark"]) .methodology-title,
        [data-theme="light"] .pillar-title,
        :root:not([data-theme="dark"]) .pillar-title,
        [data-theme="light"] .cta-heading,
        :root:not([data-theme="dark"]) .cta-heading {
          color: #0f172a !important;
        }

        [data-theme="light"] .services-hero-desc,
        :root:not([data-theme="dark"]) .services-hero-desc,
        [data-theme="light"] .services-section-desc,
        :root:not([data-theme="dark"]) .services-section-desc,
        [data-theme="light"] .service-desc,
        :root:not([data-theme="dark"]) .service-desc,
        [data-theme="light"] .methodology-desc,
        :root:not([data-theme="dark"]) .methodology-desc,
        [data-theme="light"] .pillar-desc,
        :root:not([data-theme="dark"]) .pillar-desc,
        [data-theme="light"] .cta-subheading,
        :root:not([data-theme="dark"]) .cta-subheading,
        [data-theme="light"] .services-metric-label,
        :root:not([data-theme="dark"]) .services-metric-label {
          color: #475569 !important;
        }

        [data-theme="light"] .services-trust-item,
        :root:not([data-theme="dark"]) .services-trust-item,
        [data-theme="light"] .service-check-item span,
        :root:not([data-theme="dark"]) .service-check-item span {
          color: #1e293b !important;
        }

        [data-theme="light"] .services-tab-btn,
        :root:not([data-theme="dark"]) .services-tab-btn {
          background: #ffffff;
          border-color: #cbd5e1;
          color: #475569;
        }
        [data-theme="light"] .services-tab-btn:hover,
        :root:not([data-theme="dark"]) .services-tab-btn:hover {
          color: #0f172a;
          border-color: #94a3b8;
        }

        [data-theme="light"] .service-feature-card,
        :root:not([data-theme="dark"]) .service-feature-card,
        [data-theme="light"] .methodology-card,
        :root:not([data-theme="dark"]) .methodology-card,
        [data-theme="light"] .pillar-card,
        :root:not([data-theme="dark"]) .pillar-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        [data-theme="light"] .service-tag-pill,
        :root:not([data-theme="dark"]) .service-tag-pill {
          background: #e0f2fe;
          color: #0284c7;
          border: 1px solid #bae6fd;
        }

        [data-theme="light"] .services-satellite,
        :root:not([data-theme="dark"]) .services-satellite {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #0f172a;
        }

        [data-theme="light"] .services-floating-metric,
        :root:not([data-theme="dark"]) .services-floating-metric {
          background: #ffffff;
          border: 1px solid #cbd5e1;
        }

        [data-theme="light"] .services-cta-card,
        :root:not([data-theme="dark"]) .services-cta-card {
          background: linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%);
          border: 1.5px solid #cbd5e1;
          box-shadow: 0 20px 50px rgba(0, 70, 150, 0.08);
        }

        [data-theme="light"] .cta-link-pill,
        :root:not([data-theme="dark"]) .cta-link-pill {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #1e293b;
        }
        [data-theme="light"] .cta-link-pill:hover,
        :root:not([data-theme="dark"]) .cta-link-pill:hover {
          background: #e0f2fe;
          border-color: #00AEEF;
          color: #0284c7;
        }
      `}</style>
    </Layout>
  );
}
