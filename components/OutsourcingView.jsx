import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import {
  Briefcase,
  Settings2,
  Calculator,
  Users,
  ShieldCheck,
  FileCheck2,
  TrendingUp,
  Building2,
  Receipt,
  Layers,
  Building,
  Truck,
  Hotel,
  HeartPulse,
  GraduationCap,
  HardHat,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Send,
  Check,
  Clock,
  Sparkles,
  BarChart3,
  Scale,
  Zap,
  ChevronRight
} from 'lucide-react';

export default function OutsourcingView() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Interactive states
  const [activeTab, setActiveTab] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [activeOrbitNode, setActiveOrbitNode] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'bpo',
    teamSize: '1-10',
    notes: ''
  });

  // 1. Core BPO Pillars
  const coreDeliverables = [
    {
      id: 'bpo',
      number: '01',
      badge: 'BPO OPERATIONS',
      title: 'Business Process Outsourcing',
      subtitle: 'End-to-End Workflow Execution',
      desc: 'Streamline routine operations through dedicated execution pods, standardized operating procedures (SOPs), and real-time SLA dashboards.',
      icon: Settings2,
      metrics: [
        { value: 'Up to 40%', label: 'Cost Reduction' },
        { value: '99.4%', label: 'SLA Adherence' }
      ],
      points: [
        'Structured Process Design & SOP Mapping',
        'Real-Time KPI Dashboards & Performance Tracking',
        'Dedicated Front & Back-Office Execution Pods',
        'Continuous Kaizen Improvement & Automation'
      ],
      deliverables: ['Process Playbooks', 'Monthly SLA Reports', 'Quality Control Matrix', 'Workflow Telemetry']
    },
    {
      id: 'fao',
      number: '02',
      badge: 'FINANCIAL CONTROL',
      title: 'Finance & Accounting Outsourcing',
      subtitle: 'Full-Cycle Accounting & IFRS Books',
      desc: 'Outsource complete financial and bookkeeping cycles to qualified SOCPA/ICAP specialists—ensuring audit-ready ledgers and timely tax filings.',
      icon: Calculator,
      metrics: [
        { value: '100%', label: 'Audit Readiness' },
        { value: '60%', label: 'Time Saved' }
      ],
      points: [
        'Daily Bookkeeping & Bank Account Reconciliations',
        'Monthly Financial Closing & IFRS Balance Sheets',
        'Accounts Payable (AP) & Accounts Receivable (AR)',
        'Cash Flow Modeling & Working Capital Tracking'
      ],
      deliverables: ['Monthly P&L & Balance Sheet', 'Tax/Zakat Audit File', 'Cash Flow Forecasts', 'Fixed Asset Registers']
    },
    {
      id: 'payroll',
      number: '03',
      badge: 'WORKFORCE OPS',
      title: 'Payroll & HR Process Outsourcing',
      subtitle: '100% Wage Protection (WPS) Compliant',
      desc: 'Flawless payroll management, employee onboarding, labor contract administration, and full coordination with Saudi portals (GOSI, Qiwa, Muqeem).',
      icon: Users,
      metrics: [
        { value: '100%', label: 'WPS Compliance' },
        { value: '0 Error', label: 'Payroll Record' }
      ],
      points: [
        'Monthly Payroll Computation & WPS Bank Files',
        'GOSI Registrations & Social Insurance Remittance',
        'Leave Tracking, Overtime & End-of-Service (EOS)',
        'Qiwa Digital Contracts & Saudization Quotas'
      ],
      deliverables: ['Mudad/WPS Compliant Files', 'GOSI Contribution Proofs', 'EOS Calculations', 'HR Compliance Dossier']
    },
    {
      id: 'compliance',
      number: '04',
      badge: 'STATUTORY GOVERNANCE',
      title: 'Compliance & Regulatory Outsourcing',
      subtitle: 'Multi-Ministry Administrative Custody',
      desc: 'Eliminate compliance penalties by delegating commercial registrations, municipal licenses, and authority filings to experienced corporate advisors.',
      icon: ShieldCheck,
      metrics: [
        { value: '100%', label: 'License Validity' },
        { value: '30 Days', label: 'Renewal Lead Time' }
      ],
      points: [
        'Ministry of Commerce (MOC) CR & Charter Renewals',
        'Saudi Business Center (SBC) Unified Approvals',
        'Balady Municipality License Renewals',
        'ZATCA & Chamber of Commerce Filings'
      ],
      deliverables: ['Statutory Filing Calendar', 'Active Operating Licenses', 'Corporate Secretarial Binder', 'Regulatory Audit Logs']
    }
  ];

  // 2. Connected Advisory & Technology Pillars
  const connectedServices = [
    {
      title: 'Accounting & Financial Advisory',
      desc: 'Strategic financial management, IFRS standards adoption, financial modeling, and fractional CFO advisory.',
      icon: TrendingUp,
      tags: ['IFRS Adoption', 'Cash Flow', 'Audit Support', 'Fractional CFO'],
      link: '/accounting-financial-advisory'
    },
    {
      title: 'Corporate Advisory',
      desc: 'Company formation, MISA investment licensing, board charters, statutory records, and corporate restructuring.',
      icon: Building2,
      tags: ['MISA Licensing', 'Governance', 'Board Charters', 'Structuring'],
      link: '/corporate-advisory'
    },
    {
      title: 'Taxation & ZATCA Advisory',
      desc: 'Comprehensive Zakat calculations, Corporate Income Tax (CIT), 15% VAT returns, and FATOORA Phase 2 e-invoicing.',
      icon: Receipt,
      tags: ['Zakat Base', '20% CIT', '15% VAT', 'FATOORA Phase 2'],
      link: '/taxation-zakat-advisory'
    },
    {
      title: 'ERP & Business Integrations',
      desc: 'Custom Odoo enterprise deployments, ZATCA Phase 2 middleware, Shopify, Salla, and HR Muqeem data connectors.',
      icon: Layers,
      tags: ['Odoo ERP', 'ZATCA API', 'E-Commerce', 'Muqeem Sync'],
      link: '/enterprise-solutions'
    }
  ];

  // 3. Process Steps
  const processSteps = [
    {
      num: '01',
      title: 'Discovery & Scoping',
      duration: 'Week 1',
      desc: 'We analyze your current operational workflows, transaction volume baselines, software tools, and immediate pain points.',
      points: ['Workload & staffing analysis', 'Tool & software audit', 'SLA & compliance requirement mapping']
    },
    {
      num: '02',
      title: 'Process Mapping & SOPs',
      duration: 'Week 2',
      desc: 'Our senior specialists document and refine bilingual Standard Operating Procedures, approval chains, and escalation matrix.',
      points: ['Bilingual SOP creation', 'Delegation of Authority (DoA)', 'KPI benchmark definitions']
    },
    {
      num: '03',
      title: 'Transition & Parallel Run',
      duration: 'Weeks 3-4',
      desc: 'Secure handover of systems, credential setups, shadow processing, and parallel validation against legacy records.',
      points: ['System & API access config', 'Shadow trial processing', 'Variance analysis & reconciliation']
    },
    {
      num: '04',
      title: 'Live Operational Cutover',
      duration: 'Week 5',
      desc: 'Full operational handoff to Altapete’s dedicated execution pods with active telemetry and daily management standups.',
      points: ['Full volume migration', 'Daily standup reviews', 'Real-time SLA monitoring']
    },
    {
      num: '05',
      title: 'Optimization & Kaizen',
      duration: 'Ongoing',
      desc: 'Continuous performance optimization, monthly executive scorecards, workflow automation, and periodic cost reviews.',
      points: ['Monthly SLA scorecards', 'Workflow automation sprints', 'Executive business reviews']
    }
  ];

  // 4. Industry Verticals
  const industries = [
    {
      icon: Building,
      title: 'Rental & Property',
      desc: 'Tenant contracts, automated rental billing, service charges, and asset lifecycle tracking.',
      link: '/rental-solutions'
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      desc: 'Fleet operations, dispatch tracking, shipment manifests, and inventory reconciliations.',
      link: '/shipping-solutions'
    },
    {
      icon: Hotel,
      title: 'Hotels & Hospitality',
      desc: 'Multi-channel room reservations, POS dining audits, and supplier payables management.',
      link: '/hotel-management-solutions'
    },
    {
      icon: HeartPulse,
      title: 'Hospitals & Healthcare',
      desc: 'Patient intake workflows, insurance approvals, medical billing, and practitioner records.',
      link: '/hospital-management-solutions'
    },
    {
      icon: GraduationCap,
      title: 'Schools & Education',
      desc: 'Admissions management, tuition fee collections, student attendance, and teacher payroll.',
      link: '/school-management-solutions'
    },
    {
      icon: HardHat,
      title: 'Construction & Projects',
      desc: 'Subcontractor progress claims, project cost accounting, and site equipment logs.',
      link: '/construction-management-solutions'
    }
  ];

  // 5. Client Marquee Logos
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className={`outsourcing-view-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
      
      {/* ────────────────── 1. HERO SECTION ────────────────── */}
      <section className="out-hero-section">
        <div className="container position-relative">
          <div className="row align-items-center g-4 g-lg-5">
            
            {/* Left Hero Copy */}
            <div className="col-lg-6">
              <div className="out-eyebrow-pill">
                <span className="out-pulse-dot" />
                <span>BUSINESS PROCESS EXCELLENCE &amp; SCALABLE BPO</span>
              </div>

              <h1 className="out-hero-title">
                Outsourcing &amp; Business{' '}
                <span className="out-gradient-text">Process Services</span>
              </h1>

              <p className="out-hero-desc">
                Streamline operations, eliminate administrative bottlenecks, and guarantee complete Saudi statutory compliance. Altapete delivers scalable <strong>BPO, full-cycle Accounting (FAO), WPS Payroll, and regulatory oversight</strong> under one agile team.
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                <a href="#process-review" className="btn btn-linear hover-up out-hero-btn">
                  Request Process Review <ArrowRight size={17} />
                </a>
                <a href="#core-capabilities" className="btn btn-outline-brand out-hero-secondary-btn">
                  Explore Capabilities
                </a>
              </div>

              {/* Key Trust Signals */}
              <div className="out-trust-row">
                <div className="out-trust-item">
                  <CheckCircle2 size={16} className="out-accent-icon" />
                  <span>Up to 40% Cost Savings</span>
                </div>
                <div className="out-trust-item">
                  <CheckCircle2 size={16} className="out-accent-icon" />
                  <span>99.4% SLA Delivery</span>
                </div>
                <div className="out-trust-item">
                  <CheckCircle2 size={16} className="out-accent-icon" />
                  <span>Saudi WPS &amp; Qiwa Aligned</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: Interactive BPO Orbital Engine */}
            <div className="col-lg-6 text-center">
              <div className="out-hero-visual position-relative">
                
                {/* Central BPO Hub */}
                <div className="out-central-hub">
                  <div className="out-hub-glow" />
                  <div className="out-hub-icon">
                    <Briefcase size={40} color="#00AEEF" />
                  </div>
                  <span className="out-hub-text">BPO CORE</span>
                </div>

                {/* Concentric Rotating Rings */}
                <div className="out-ring out-ring-inner" />
                <div className="out-ring out-ring-outer" />

                {/* 4 Orbiting Satellite Cards */}
                <div 
                  className={`out-satellite out-sat-1 ${activeOrbitNode === 0 ? 'active' : ''}`}
                  onClick={() => setActiveOrbitNode(0)}
                >
                  <Settings2 size={18} color="#00AEEF" />
                  <span>BPO</span>
                </div>

                <div 
                  className={`out-satellite out-sat-2 ${activeOrbitNode === 1 ? 'active' : ''}`}
                  onClick={() => setActiveOrbitNode(1)}
                >
                  <Calculator size={18} color="#00AEEF" />
                  <span>FAO</span>
                </div>

                <div 
                  className={`out-satellite out-sat-3 ${activeOrbitNode === 2 ? 'active' : ''}`}
                  onClick={() => setActiveOrbitNode(2)}
                >
                  <Users size={18} color="#00AEEF" />
                  <span>Payroll</span>
                </div>

                <div 
                  className={`out-satellite out-sat-4 ${activeOrbitNode === 3 ? 'active' : ''}`}
                  onClick={() => setActiveOrbitNode(3)}
                >
                  <ShieldCheck size={18} color="#00AEEF" />
                  <span>Compliance</span>
                </div>

                {/* Satellite Detail Highlight Card */}
                <div className="out-orbit-highlight">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <span className="out-highlight-title">
                      {activeOrbitNode === 0 && 'Business Process Outsourcing'}
                      {activeOrbitNode === 1 && 'Finance & Accounting (FAO)'}
                      {activeOrbitNode === 2 && 'Payroll & HR Administration'}
                      {activeOrbitNode === 3 && 'Regulatory & Statutory Filing'}
                    </span>
                    <span className="out-highlight-badge">MANAGED PODS</span>
                  </div>
                  <p className="out-highlight-desc mb-0">
                    {activeOrbitNode === 0 && 'End-to-end operational execution with defined KPIs and continuous Kaizen optimization.'}
                    {activeOrbitNode === 1 && 'Daily reconciliations, monthly closing, and SOCPA/IFRS compliant financial statements.'}
                    {activeOrbitNode === 2 && '100% Wage Protection (WPS) files, GOSI contributions, and Qiwa digital contract management.'}
                    {activeOrbitNode === 3 && 'Proactive renewals for Commercial Registration (MOC), Balady permits, and SBC clearances.'}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────── 2. CORE DELIVERABLES SECTION ────────────────── */}
      <section id="core-capabilities" className="out-capabilities-section">
        <div className="container">
          
          <div className="text-center mb-5">
            <div className="out-eyebrow-pill mx-auto mb-2">
              <Sparkles size={14} className="out-accent-icon" />
              <span>WHAT WE DELIVER</span>
            </div>
            <h2 className="out-section-title">
              Outsourcing &amp; <span className="out-gradient-text">Business Process Services</span>
            </h2>
            <p className="out-section-subtitle">
              Scalable, cost-effective outsourcing solutions that allow your executive leadership to focus on core market expansion while our certified specialists manage day-to-day operations.
            </p>
          </div>

          <div className="row g-4">
            {coreDeliverables.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={item.id} className="col-lg-6">
                  <div className="out-capability-card h-100">
                    
                    {/* Top Row: Icon, Number, Badge */}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center gap-3">
                        <div className="out-capability-icon-box">
                          <IconComp size={24} color="#00AEEF" />
                        </div>
                        <div>
                          <span className="out-capability-badge">{item.badge}</span>
                          <h3 className="out-capability-title mb-0">{item.title}</h3>
                        </div>
                      </div>
                      <span className="out-capability-num">{item.number}</span>
                    </div>

                    <p className="out-capability-subtitle mb-2">{item.subtitle}</p>
                    <p className="out-capability-desc mb-4">{item.desc}</p>

                    {/* Metric Badges */}
                    <div className="out-metrics-row mb-4">
                      {item.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="out-metric-box">
                          <div className="out-metric-val">{m.value}</div>
                          <div className="out-metric-lbl">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Checklist Points */}
                    <div className="out-points-list mb-4">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="out-point-item">
                          <CheckCircle2 size={16} className="out-check-icon flex-shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Deliverable Tags Footer */}
                    <div className="out-tags-wrap pt-3 border-top border-secondary-subtle">
                      <span className="out-tags-label">Deliverables:</span>
                      <div className="d-flex flex-wrap gap-2 mt-2">
                        {item.deliverables.map((del, dIdx) => (
                          <span key={dIdx} className="out-deliverable-pill">{del}</span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ────────────────── 3. MORE THAN OUTSOURCING — INTEGRATED EXPERTISE ────────────────── */}
      <section className="out-integrated-section">
        <div className="container">
          
          <div className="text-center mb-5">
            <div className="out-eyebrow-pill mx-auto mb-2">
              <Zap size={14} className="out-accent-icon" />
              <span>CONNECTED BUSINESS SUPPORT</span>
            </div>
            <h2 className="out-section-title">
              More Than Outsourcing — <span className="out-gradient-text">Integrated Expertise</span>
            </h2>
            <p className="out-section-subtitle">
              Connect outsourced operations with advisory, compliance, and enterprise engineering services under one coordinated team.
            </p>
          </div>

          <div className="row g-4">
            {connectedServices.map((svc, idx) => {
              const SvcIcon = svc.icon;
              return (
                <div key={idx} className="col-md-6 col-lg-6">
                  <div className="out-integrated-card h-100">
                    
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div className="out-integrated-icon-box flex-shrink-0">
                        <SvcIcon size={24} color="#00AEEF" />
                      </div>
                      <div className="flex-grow-1">
                        <h3 className="out-integrated-title mb-1">{svc.title}</h3>
                        <p className="out-integrated-desc mb-3">{svc.desc}</p>
                      </div>
                    </div>

                    {/* Tag Pills */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {svc.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="out-tag-pill">{tag}</span>
                      ))}
                    </div>

                    {/* Action Link */}
                    <div className="mt-auto pt-3 border-top border-secondary-subtle">
                      <Link href={svc.link} className="out-explore-link d-inline-flex align-items-center gap-2">
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

      {/* ────────────────── 4. HOW OUR OUTSOURCING PROCESS WORKS ────────────────── */}
      <section className="out-process-section">
        <div className="container">
          
          <div className="text-center mb-5">
            <div className="out-eyebrow-pill mx-auto mb-2">
              <Clock size={14} className="out-accent-icon" />
              <span>A STRUCTURED TRANSITION</span>
            </div>
            <h2 className="out-section-title">
              How Our Outsourcing <span className="out-gradient-text">Process Works</span>
            </h2>
            <p className="out-section-subtitle">
              A phased, zero-disruption transition methodology ensuring seamless operational migration, clean data custody, and measurable SLAs.
            </p>
          </div>

          {/* Interactive Stepper Navigation */}
          <div className="out-stepper-track-wrap mb-5">
            <div className="out-stepper-track">
              {processSteps.map((step, sIdx) => (
                <div 
                  key={sIdx}
                  className={`out-stepper-item ${activeProcessStep === sIdx ? 'active' : ''}`}
                  onClick={() => setActiveProcessStep(sIdx)}
                >
                  <div className="out-step-circle">
                    <span>{step.num}</span>
                  </div>
                  <span className="out-step-nav-title">{step.title}</span>
                  <span className="out-step-duration">{step.duration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Detailed Showcase */}
          <div className="out-active-step-card">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <span className="out-step-number-tag">PHASE {processSteps[activeProcessStep].num}</span>
                  <span className="out-step-time-badge">{processSteps[activeProcessStep].duration}</span>
                </div>
                <h3 className="out-step-card-title mb-3">{processSteps[activeProcessStep].title}</h3>
                <p className="out-step-card-desc mb-4">{processSteps[activeProcessStep].desc}</p>
                <div className="out-step-points-grid">
                  {processSteps[activeProcessStep].points.map((pt, pIdx) => (
                    <div key={pIdx} className="out-step-point">
                      <CheckCircle2 size={16} className="out-check-icon flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-5 text-center">
                <div className="out-step-cta-panel">
                  <div className="out-step-cta-icon mb-3">
                    <ShieldCheck size={38} color="#00AEEF" />
                  </div>
                  <h4 className="text-white mb-2">Ready for Phase {processSteps[activeProcessStep].num}?</h4>
                  <p className="text-muted small mb-4">Our advisory and operational teams execute each stage with full SLA transparency.</p>
                  <a href="#process-review" className="btn btn-linear hover-up w-100">
                    Schedule Phase Scoping <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ────────────────── 5. INDUSTRIES WE SUPPORT ────────────────── */}
      <section className="out-industries-section">
        <div className="container">
          
          <div className="text-center mb-5">
            <div className="out-eyebrow-pill mx-auto mb-2">
              <Building size={14} className="out-accent-icon" />
              <span>SOLUTIONS FOR EVERY SECTOR</span>
            </div>
            <h2 className="out-section-title">
              Industries <span className="out-gradient-text">We Support</span>
            </h2>
            <p className="out-section-subtitle">
              Specialized operational frameworks tailored to the commercial realities, regulatory mandates, and market dynamics of key Saudi sectors.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {industries.map((ind, idx) => {
              const IndIcon = ind.icon;
              return (
                <div key={idx} className="col-md-6 col-lg-4">
                  <Link href={ind.link} className="out-industry-card-link text-decoration-none">
                    <div className="out-industry-card h-100">
                      <div className="out-industry-icon-box mb-3">
                        <IndIcon size={26} color="#00AEEF" />
                      </div>
                      <h3 className="out-industry-title mb-2">{ind.title}</h3>
                      <p className="out-industry-desc mb-3">{ind.desc}</p>
                      <div className="out-industry-arrow d-inline-flex align-items-center gap-1">
                        <span>Explore Solutions</span>
                        <ChevronRight size={15} />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ────────────────── 6. CLIENTS MARQUEE ────────────────── */}
      <section className="out-marquee-section">
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="out-marquee-heading mb-2">Trusted by Leading Saudi &amp; Regional Enterprises</h3>
            <p className="out-marquee-sub mb-0">Delivering reliable operational execution across industries in Riyadh, Jeddah, and the Eastern Province.</p>
          </div>
        </div>
        <div className="out-marquee-track-container">
          <div className="out-marquee-track">
            {[...clientLogos, ...clientLogos].map((client, idx) => (
              <div key={idx} className="client-card-wrapper out-logo-card">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="client-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── 7. EXECUTIVE CTA: READY TO STREAMLINE ────────────────── */}
      <section id="process-review" className="out-cta-section">
        <div className="container">
          <div className="out-cta-card">
            <div className="row align-items-center g-4 g-lg-5">
              
              {/* Left Column: Direct Consultation Info */}
              <div className="col-lg-6">
                <div className="out-eyebrow-pill mb-3">
                  <span className="out-pulse-dot" />
                  <span>OPERATIONAL REVIEW &amp; CONSULTATION</span>
                </div>

                <h2 className="out-cta-heading mb-3">
                  Ready to Streamline Your{' '}
                  <span className="out-gradient-text">Business Operations?</span>
                </h2>

                <p className="out-cta-desc mb-4">
                  Let Altapete manage the processes behind your growth with scalable outsourcing, advisory, and technology support. Book a confidential discovery session with our operations team.
                </p>

                {/* Direct Helplines */}
                <div className="out-helpline-grid mb-4">
                  <a href="tel:+966551013823" className="out-helpline-item">
                    <div className="out-helpline-icon">
                      <Phone size={18} color="#00AEEF" />
                    </div>
                    <div>
                      <div className="out-helpline-label">Saudi Helpline</div>
                      <div className="out-helpline-val">+966-551-013823</div>
                    </div>
                  </a>

                  <a href="mailto:info@altapetesolutions.com" className="out-helpline-item">
                    <div className="out-helpline-icon">
                      <Mail size={18} color="#00AEEF" />
                    </div>
                    <div>
                      <div className="out-helpline-label">General Enquiries</div>
                      <div className="out-helpline-val">info@altapetesolutions.com</div>
                    </div>
                  </a>
                </div>

                <div className="d-flex align-items-center gap-2 text-muted small">
                  <Check size={16} color="#00AEEF" />
                  <span>Strict NDA &amp; Client Data Privacy Protection</span>
                </div>
              </div>

              {/* Right Column: Process Review Request Form */}
              <div className="col-lg-6">
                <div className="out-form-card">
                  <h3 className="out-form-title mb-1">Request a Process Review</h3>
                  <p className="out-form-subtitle mb-3">Receive a customized operational scoping &amp; cost analysis roadmap.</p>

                  {formSubmitted ? (
                    <div className="out-form-success">
                      <CheckCircle2 size={36} color="#00ff80" className="mb-2" />
                      <h4 className="text-white mb-1">Review Request Received</h4>
                      <p className="text-muted small mb-0">Our BPO operations team will contact you within 1 business day.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit}>
                      <div className="mb-3">
                        <label className="out-form-label">Full Name</label>
                        <input 
                          type="text" 
                          className="form-control out-form-input" 
                          placeholder="e.g. Tariq Al-Otaibi" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>

                      <div className="row g-2 mb-3">
                        <div className="col-sm-6">
                          <label className="out-form-label">Corporate Email</label>
                          <input 
                            type="email" 
                            className="form-control out-form-input" 
                            placeholder="tariq@company.com" 
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                        <div className="col-sm-6">
                          <label className="out-form-label">Mobile Number</label>
                          <input 
                            type="tel" 
                            className="form-control out-form-input" 
                            placeholder="+966 5X XXX XXXX" 
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="row g-2 mb-3">
                        <div className="col-sm-6">
                          <label className="out-form-label">Primary Outsourcing Need</label>
                          <select 
                            className="form-select out-form-input"
                            value={formData.service}
                            onChange={(e) => setFormData({...formData, service: e.target.value})}
                          >
                            <option value="bpo">Full Business Process (BPO)</option>
                            <option value="fao">Finance &amp; Accounting (FAO)</option>
                            <option value="payroll">Payroll &amp; WPS Administration</option>
                            <option value="compliance">Statutory &amp; License Compliance</option>
                            <option value="all">Complete Operational Suite</option>
                          </select>
                        </div>
                        <div className="col-sm-6">
                          <label className="out-form-label">Company Size</label>
                          <select 
                            className="form-select out-form-input"
                            value={formData.teamSize}
                            onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                          >
                            <option value="1-10">1 - 10 Employees</option>
                            <option value="11-50">11 - 50 Employees</option>
                            <option value="51-200">51 - 200 Employees</option>
                            <option value="201+">201+ Employees</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="out-form-label">Operational Notes / Objectives (Optional)</label>
                        <textarea 
                          rows={2} 
                          className="form-control out-form-input"
                          placeholder="Briefly describe your current operational bottleneck or timeline..."
                          value={formData.notes}
                          onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        />
                      </div>

                      <button type="submit" className="btn btn-linear hover-up w-100 out-submit-btn">
                        <span>Submit Process Review Request</span>
                        <Send size={15} />
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── 8. COMPONENT SPECIFIC SCOPED STYLING ────────────────── */}
      <style jsx global>{`
        /* Wrapper baseline */
        .outsourcing-view-wrapper {
          width: 100%;
          min-height: 100vh;
        }

        /* 1. Theme Color Variables */
        .outsourcing-view-wrapper.dark-theme {
          --out-bg: #070d17;
          --out-card-bg: rgba(13, 24, 44, 0.7);
          --out-card-border: rgba(0, 174, 239, 0.22);
          --out-card-hover: rgba(0, 174, 239, 0.4);
          --out-text-main: #f8fafc;
          --out-text-muted: #94a3b8;
          --out-pill-bg: rgba(0, 174, 239, 0.12);
          --out-pill-border: rgba(0, 174, 239, 0.3);
          --out-pill-text: #00AEEF;
          --out-input-bg: rgba(10, 20, 36, 0.85);
          --out-input-border: rgba(255, 255, 255, 0.12);
        }

        .outsourcing-view-wrapper.light-theme {
          --out-bg: #f8fafc;
          --out-card-bg: #ffffff;
          --out-card-border: rgba(0, 174, 239, 0.25);
          --out-card-hover: rgba(0, 174, 239, 0.55);
          --out-text-main: #0f172a;
          --out-text-muted: #64748b;
          --out-pill-bg: rgba(0, 174, 239, 0.08);
          --out-pill-border: rgba(0, 174, 239, 0.25);
          --out-pill-text: #0088c7;
          --out-input-bg: #f1f5f9;
          --out-input-border: #cbd5e1;
        }

        /* Hero Typography */
        .out-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 50px;
          background: var(--out-pill-bg);
          border: 1px solid var(--out-pill-border);
          color: var(--out-pill-text);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .out-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00AEEF;
          box-shadow: 0 0 10px #00AEEF;
          animation: outPulse 2s infinite ease-in-out;
        }

        @keyframes outPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
        }

        .out-hero-title {
          font-size: clamp(2.3rem, 4.2vw, 3.5rem);
          font-weight: 800;
          line-height: 1.2;
          color: var(--out-text-main);
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .out-gradient-text {
          background: linear-gradient(135deg, #00AEEF 0%, #0066cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .out-hero-desc {
          font-size: clamp(1rem, 1.8vw, 1.125rem);
          line-height: 1.7;
          color: var(--out-text-muted);
          margin-bottom: 28px;
          max-width: 620px;
        }

        .out-hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          font-weight: 600;
          border-radius: 12px;
        }

        .out-hero-secondary-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          font-weight: 600;
          border-radius: 12px;
          border: 1px solid var(--out-card-border);
          color: var(--out-text-main);
          background: transparent;
          transition: all 0.3s ease;
        }

        .out-hero-secondary-btn:hover {
          border-color: #00AEEF;
          color: #00AEEF;
        }

        .out-trust-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 18px;
        }

        .out-trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--out-text-muted);
        }

        .out-accent-icon {
          color: #00AEEF;
        }

        /* Hero Orbital Visual */
        .out-hero-visual {
          width: 100%;
          max-width: 480px;
          height: 480px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .out-central-hub {
          position: absolute;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: var(--out-card-bg);
          border: 2px solid #00AEEF;
          box-shadow: 0 0 35px rgba(0, 174, 239, 0.45);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .out-hub-text {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #00AEEF;
          margin-top: 4px;
        }

        .out-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(0, 174, 239, 0.3);
          pointer-events: none;
        }

        .out-ring-inner {
          width: 250px;
          height: 250px;
          animation: outRotateClockwise 40s linear infinite;
        }

        .out-ring-outer {
          width: 380px;
          height: 380px;
          border-color: rgba(0, 174, 239, 0.18);
          animation: outRotateCounter 60s linear infinite;
        }

        @keyframes outRotateClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes outRotateCounter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .out-satellite {
          position: absolute;
          width: 74px;
          height: 74px;
          border-radius: 16px;
          background: var(--out-card-bg);
          backdrop-filter: blur(10px);
          border: 1.5px solid var(--out-card-border);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--out-text-main);
          cursor: pointer;
          transition: all 0.35s ease;
          z-index: 12;
        }

        .out-satellite:hover,
        .out-satellite.active {
          border-color: #00AEEF;
          box-shadow: 0 0 25px rgba(0, 174, 239, 0.45);
          transform: scale(1.08);
          color: #00AEEF;
        }

        /* Exact Cartesian placements */
        .out-sat-1 { top: 38px; left: 50%; transform: translateX(-50%); }
        .out-sat-2 { right: 38px; top: 50%; transform: translateY(-50%); }
        .out-sat-3 { bottom: 38px; left: 50%; transform: translateX(-50%); }
        .out-sat-4 { left: 38px; top: 50%; transform: translateY(-50%); }

        .out-orbit-highlight {
          position: absolute;
          bottom: -15px;
          left: 5%;
          right: 5%;
          background: var(--out-card-bg);
          backdrop-filter: blur(14px);
          border: 1px solid var(--out-card-border);
          border-radius: 14px;
          padding: 12px 16px;
          text-align: left;
          z-index: 15;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .out-highlight-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #00AEEF;
        }

        .out-highlight-badge {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 1px;
          background: var(--out-pill-bg);
          color: #00AEEF;
          padding: 2px 8px;
          border-radius: 20px;
        }

        .out-highlight-desc {
          font-size: 0.78rem;
          color: var(--out-text-muted);
          line-height: 1.4;
        }

        /* Section Headings */
        .out-section-title {
          font-size: clamp(2rem, 3.4vw, 2.75rem);
          font-weight: 800;
          line-height: 1.25;
          color: var(--out-text-main);
          letter-spacing: -0.015em;
          margin-bottom: 12px;
        }

        .out-section-subtitle {
          font-size: clamp(0.98rem, 1.8vw, 1.1rem);
          line-height: 1.65;
          color: var(--out-text-muted);
          max-width: 720px;
          margin: 0 auto;
        }

        /* 2. Core Deliverables Cards */
        .out-capability-card {
          background: var(--out-card-bg);
          backdrop-filter: blur(12px);
          border: 1.5px solid var(--out-card-border);
          border-radius: 20px;
          padding: 32px 28px;
          transition: all 0.35s ease;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          position: relative;
        }

        .out-capability-card:hover {
          border-color: var(--out-card-hover);
          box-shadow: 0 16px 45px rgba(0, 174, 239, 0.16);
          transform: translateY(-4px);
        }

        .out-capability-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: var(--out-pill-bg);
          border: 1px solid var(--out-pill-border);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .out-capability-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #00AEEF;
          display: block;
          margin-bottom: 3px;
        }

        .out-capability-title {
          font-size: 1.28rem;
          font-weight: 700;
          color: var(--out-text-main);
        }

        .out-capability-num {
          font-size: 1.4rem;
          font-weight: 900;
          color: var(--out-pill-border);
          font-family: monospace;
        }

        .out-capability-subtitle {
          font-size: 0.95rem;
          font-weight: 600;
          color: #00AEEF;
        }

        .out-capability-desc {
          font-size: 0.92rem;
          line-height: 1.65;
          color: var(--out-text-muted);
        }

        .out-metrics-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .out-metric-box {
          background: rgba(0, 174, 239, 0.06);
          border: 1px solid var(--out-card-border);
          border-radius: 12px;
          padding: 12px;
          text-align: center;
        }

        .out-metric-val {
          font-size: 1.45rem;
          font-weight: 800;
          color: #00AEEF;
          line-height: 1.1;
        }

        .out-metric-lbl {
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--out-text-muted);
          text-transform: uppercase;
          margin-top: 4px;
        }

        .out-points-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .out-point-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--out-text-main);
        }

        .out-check-icon {
          color: #00AEEF;
        }

        .out-tags-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--out-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .out-deliverable-pill {
          background: var(--out-pill-bg);
          border: 1px solid var(--out-pill-border);
          color: var(--out-pill-text);
          font-size: 0.76rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 50px;
        }

        /* 3. Integrated Expertise Section */
        .out-integrated-card {
          background: var(--out-card-bg);
          backdrop-filter: blur(12px);
          border: 1.5px solid var(--out-card-border);
          border-radius: 20px;
          padding: 30px 26px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .out-integrated-card:hover {
          border-color: var(--out-card-hover);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 174, 239, 0.15);
        }

        .out-integrated-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--out-pill-bg);
          border: 1px solid var(--out-pill-border);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .out-integrated-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--out-text-main);
          line-height: 1.35;
        }

        .out-integrated-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--out-text-muted);
        }

        .out-tag-pill {
          background: var(--out-pill-bg);
          border: 1px solid var(--out-pill-border);
          color: var(--out-pill-text);
          font-size: 0.76rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 20px;
        }

        .out-explore-link {
          color: #00AEEF;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.25s ease, color 0.25s ease;
        }

        .out-explore-link:hover {
          transform: translateX(4px);
          color: #0088c7;
        }

        /* 4. Process Stepper */
        .out-stepper-track-wrap {
          overflow-x: auto;
          padding-bottom: 10px;
        }

        .out-stepper-track {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-width: 680px;
          position: relative;
        }

        .out-stepper-track::before {
          content: '';
          position: absolute;
          top: 24px;
          left: 40px;
          right: 40px;
          height: 2px;
          background: var(--out-card-border);
          z-index: 1;
        }

        .out-stepper-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          position: relative;
          z-index: 2;
          transition: transform 0.25s ease;
        }

        .out-stepper-item:hover {
          transform: translateY(-2px);
        }

        .out-step-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--out-card-bg);
          border: 2px solid var(--out-card-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 800;
          color: var(--out-text-muted);
          transition: all 0.3s ease;
          margin-bottom: 8px;
        }

        .out-stepper-item.active .out-step-circle {
          background: #00AEEF;
          border-color: #00AEEF;
          color: #ffffff;
          box-shadow: 0 0 20px rgba(0, 174, 239, 0.6);
        }

        .out-step-nav-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--out-text-main);
          margin-bottom: 2px;
        }

        .out-stepper-item.active .out-step-nav-title {
          color: #00AEEF;
        }

        .out-step-duration {
          font-size: 0.75rem;
          color: var(--out-text-muted);
          font-weight: 500;
        }

        .out-active-step-card {
          background: var(--out-card-bg);
          backdrop-filter: blur(14px);
          border: 1.5px solid var(--out-card-border);
          border-radius: 24px;
          padding: 36px 32px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
        }

        .out-step-number-tag {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1px;
          background: #00AEEF;
          color: #fff;
          padding: 3px 10px;
          border-radius: 20px;
        }

        .out-step-time-badge {
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--out-text-muted);
        }

        .out-step-card-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--out-text-main);
        }

        .out-step-card-desc {
          font-size: 0.96rem;
          line-height: 1.65;
          color: var(--out-text-muted);
        }

        .out-step-points-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .out-step-point {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--out-text-main);
          font-weight: 500;
        }

        .out-step-cta-panel {
          background: rgba(0, 174, 239, 0.06);
          border: 1px solid var(--out-card-border);
          border-radius: 20px;
          padding: 28px 24px;
        }

        .out-step-cta-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--out-pill-bg);
          border: 1px solid var(--out-pill-border);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        /* 5. Industries Verticals */
        .out-industry-card {
          background: var(--out-card-bg);
          backdrop-filter: blur(12px);
          border: 1.5px solid var(--out-card-border);
          border-radius: 20px;
          padding: 28px 24px;
          transition: all 0.35s ease;
          display: flex;
          flex-direction: column;
        }

        .out-industry-card:hover {
          border-color: var(--out-card-hover);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 174, 239, 0.16);
        }

        .out-industry-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: var(--out-pill-bg);
          border: 1px solid var(--out-pill-border);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .out-industry-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--out-text-main);
          line-height: 1.35;
        }

        .out-industry-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--out-text-muted);
        }

        .out-industry-arrow {
          font-size: 0.88rem;
          font-weight: 700;
          color: #00AEEF;
          margin-top: auto;
          transition: transform 0.25s ease;
        }

        .out-industry-card:hover .out-industry-arrow {
          transform: translateX(4px);
        }

        /* 6. Marquee Section */
        .out-marquee-heading {
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--out-text-main);
        }

        .out-marquee-sub {
          font-size: 0.92rem;
          color: var(--out-text-muted);
        }

        .out-marquee-track-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 15px 0;
          mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
        }

        .out-marquee-track {
          display: flex;
          align-items: center;
          gap: 22px;
          width: max-content;
          animation: outMarquee 35s linear infinite;
        }

        @keyframes outMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .out-marquee-track:hover {
          animation-play-state: paused;
        }

        /* 7. Executive CTA Section */
        .out-cta-card {
          background: var(--out-card-bg);
          backdrop-filter: blur(16px);
          border: 1.5px solid var(--out-card-border);
          border-radius: 28px;
          padding: 44px 38px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }

        .out-cta-heading {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 800;
          line-height: 1.25;
          color: var(--out-text-main);
          letter-spacing: -0.015em;
        }

        .out-cta-desc {
          font-size: 1.02rem;
          line-height: 1.7;
          color: var(--out-text-muted);
        }

        .out-helpline-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .out-helpline-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(0, 174, 239, 0.06);
          border: 1px solid var(--out-card-border);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .out-helpline-item:hover {
          border-color: #00AEEF;
          transform: translateY(-2px);
        }

        .out-helpline-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--out-pill-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .out-helpline-label {
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--out-text-muted);
          text-transform: uppercase;
        }

        .out-helpline-val {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--out-text-main);
        }

        /* CTA Form */
        .out-form-card {
          background: var(--out-input-bg);
          border: 1px solid var(--out-card-border);
          border-radius: 22px;
          padding: 30px 26px;
        }

        .out-form-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--out-text-main);
        }

        .out-form-subtitle {
          font-size: 0.86rem;
          color: var(--out-text-muted);
        }

        .out-form-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--out-text-main);
          margin-bottom: 5px;
        }

        .out-form-input {
          background: var(--out-input-bg) !important;
          border: 1px solid var(--out-input-border) !important;
          color: var(--out-text-main) !important;
          border-radius: 10px !important;
          font-size: 0.88rem !important;
          padding: 9px 13px !important;
        }

        .out-form-input:focus {
          border-color: #00AEEF !important;
          box-shadow: 0 0 0 3px rgba(0, 174, 239, 0.25) !important;
        }

        .out-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          margin-top: 10px;
        }

        .out-form-success {
          background: rgba(0, 255, 128, 0.08);
          border: 1px solid rgba(0, 255, 128, 0.3);
          border-radius: 16px;
          padding: 30px 20px;
          text-align: center;
        }

        /* Mobile Adjustments */
        @media (max-width: 991px) {
          .out-helpline-grid {
            grid-template-columns: 1fr;
          }
          .out-hero-visual {
            max-width: 360px;
            height: 360px;
          }
          .out-ring-inner { width: 190px; height: 190px; }
          .out-ring-outer { width: 280px; height: 280px; }
          .out-satellite { width: 62px; height: 62px; font-size: 0.65rem; }
          .out-sat-1 { top: 20px; }
          .out-sat-2 { right: 20px; }
          .out-sat-3 { bottom: 20px; }
          .out-sat-4 { left: 20px; }
        }

        @media (max-width: 768px) {
          .out-cta-card { padding: 28px 20px; }
          .out-capability-card { padding: 24px 20px; }
          .out-integrated-card { padding: 24px 20px; }
          .out-active-step-card { padding: 24px 18px; }
          .out-metrics-row { grid-template-columns: 1fr; }
        }
      `}</style>

    </div>
  );
}
