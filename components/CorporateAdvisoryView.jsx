import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import {
  ShieldCheck,
  Building2,
  Scale,
  FileText,
  Layers,
  Globe,
  Building,
  Users,
  Handshake,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Award,
  Clock,
  Sparkles,
  Lock,
  FileCheck,
  Send,
  HelpCircle,
  Briefcase
} from 'lucide-react';

export default function CorporateAdvisoryView() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // State
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('governance');

  const coreServices = [
    {
      id: 'formation',
      title: 'Company Formation & Licensing',
      tag: 'MARKET ENTRY & LICENSING',
      icon: Building2,
      desc: 'Complete legal establishment across Saudi Arabia, from legal form selection and constitutional drafting to Ministry of Investment (MISA) licensing and commercial registration.',
      points: [
        'LLC, Branch & Regional Headquarters (RHQ) Setup',
        'MISA Foreign Investment License Processing',
        'Articles of Association (AoA) Drafting & Notarization',
        'Commercial Registration (CR) & Municipality Approvals'
      ],
      deliverable: 'Fully compliant Commercial Registration, Chamber membership, and operational licenses.'
    },
    {
      id: 'governance',
      title: 'Corporate Governance & Board Advisory',
      tag: 'STRATEGIC OVERSIGHT',
      icon: ShieldCheck,
      desc: 'Designing robust board structures, committee mandates, delegation of authority (DoA) matrices, and internal controls for corporate enterprises, listed firms, and family holdings.',
      points: [
        'Board of Directors & Specialized Committee Charters',
        'Delegation of Authority (DoA) Operational Limits Matrix',
        'Conflict-of-Interest & Related-Party Protocols',
        'Management Accountability & Shareholder Protection Rules'
      ],
      deliverable: 'Audit-ready Corporate Governance Manual tailored to Saudi Ministry of Commerce guidelines.'
    },
    {
      id: 'compliance',
      title: 'Regulatory & Statutory Compliance',
      tag: 'STATUTORY OVERSIGHT',
      icon: Scale,
      desc: 'Systematic statutory oversight ensuring your Saudi business remains continuously aligned with Ministry of Commerce, ZATCA, CMA, GOSI, and Qiwa mandates.',
      points: [
        'Consolidated Annual Compliance Calendar Management',
        'Commercial & Municipal License Renewals Monitoring',
        'Corporate Disclosure & Statutory Filing Coordination',
        'Regulatory Risk Audit & Non-Compliance Mitigation'
      ],
      deliverable: 'Ongoing compliance calendar with proactive renewal alerts and statutory review logs.'
    },
    {
      id: 'secretarial',
      title: 'Corporate Secretarial & Administration',
      tag: 'CORPORATE RECORDS',
      icon: FileText,
      desc: 'Professional management of statutory registers, board packs, meeting minutes, shareholder resolutions, and regulatory documentation retention.',
      points: [
        'Board & General Assembly Meeting Coordination',
        'Legal Resolution & Minute Drafting (Bilingual Ar/En)',
        'Statutory Share Register & Director Records Custody',
        'Official Government Portal Administrative Updates'
      ],
      deliverable: 'Legally binding minute books, signed resolutions, and official statutory register archives.'
    },
    {
      id: 'restructuring',
      title: 'Business Structuring & Restructuring',
      tag: 'CORPORATE REORGANIZATION',
      icon: Layers,
      desc: 'Strategic advisory on organizational realignments, holding company creation, ownership restructuring, and conversion of foreign branches into domestic limited liability companies.',
      points: [
        'Holding Group & Subsidiary Architecture Structuring',
        'Branch-to-LLC Entity Conversions in Saudi Arabia',
        'Capital Increases, Reductions & Shareholder Transfers',
        'Cross-Border Joint Venture Structuring & M&A Support'
      ],
      deliverable: 'Comprehensive restructuring roadmap with executed regulatory amendments.'
    }
  ];

  const clientProfiles = [
    {
      title: 'Foreign Companies',
      tag: 'MARKET ENTRY',
      icon: Globe,
      desc: 'Foreign investors navigating 100% foreign ownership, MISA licensing requirements, and initial local compliance.'
    },
    {
      title: 'Saudi SMEs',
      tag: 'SCALING ENTERPRISES',
      icon: Building,
      desc: 'Growing local enterprises establishing organized governance, formal board practices, and statutory records.'
    },
    {
      title: 'Family Businesses',
      tag: 'LEGACY & SUCCESSION',
      icon: Users,
      desc: 'Family enterprises instituting family governance charters, succession protocols, and conflict-of-interest controls.'
    },
    {
      title: 'Joint Ventures',
      tag: 'PARTNERSHIP GOVERNANCE',
      icon: Handshake,
      desc: 'Domestic and international JVs needing clear shareholder rights, voting thresholds, and dispute resolution mechanisms.'
    },
    {
      title: 'Corporate Groups',
      tag: 'MULTI-ENTITY',
      icon: TrendingUp,
      desc: 'Diversified corporate groups streamlining subsidiary governance, shared services, and unified delegation matrices.'
    }
  ];

  const authorities = [
    {
      name: 'Ministry of Commerce (MOC)',
      role: 'Corporate Registrations & Charters',
      desc: 'Constitutional documents, CR issuances, director appointments, general assembly approvals, and statutory filings.'
    },
    {
      name: 'Ministry of Investment (MISA)',
      role: 'Foreign Investment Licensing',
      desc: 'Investor licenses, regional headquarters incentives, activity expansions, and foreign ownership compliance.'
    },
    {
      name: 'Capital Market Authority (CMA)',
      role: 'Capital Markets & Governance',
      desc: 'Disclosure rules, corporate governance regulations, and compliance mandates for regulated entities.'
    },
    {
      name: 'ZATCA',
      role: 'Tax, Zakat & Invoicing Liaison',
      desc: 'Corporate information coordination relevant to Zakat declarations, VAT registration, and FATOORA e-invoicing.'
    },
    {
      name: 'Saudi Business Center (SBC)',
      role: 'Unified Government Clearance',
      desc: 'Unified administrative approvals, notarizations, and commercial licensing across multiple ministries.'
    },
    {
      name: 'GOSI & Qiwa',
      role: 'Workforce & Labor Compliance',
      desc: 'Statutory employment governance, Saudization quotas, labor compliance audits, and social insurance oversight.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Initial Consultation',
      badge: 'SCOPING',
      desc: 'We conduct a structured discovery session to assess your corporate profile, shareholding arrangement, business activities, and immediate regulatory objectives.',
      deliverable: 'Engagement terms, objectives map, and initial document checklist.'
    },
    {
      num: '02',
      title: 'Corporate Assessment',
      badge: 'DIAGNOSTIC',
      desc: 'Detailed examination of your existing or proposed entity structure, Articles of Association, licenses, board practices, and statutory registers.',
      deliverable: 'Diagnostic audit report highlighting regulatory exposures and structural gaps.'
    },
    {
      num: '03',
      title: 'Gap Analysis & Action Plan',
      badge: 'ROADMAP',
      desc: 'We define the step-by-step remediation path, outlining required resolutions, missing filings, policy documentation, and milestone deadlines.',
      deliverable: 'Actionable governance roadmap with defined ownership and authority timelines.'
    },
    {
      num: '04',
      title: 'Documentation & Execution',
      badge: 'IMPLEMENTATION',
      desc: 'Our senior corporate advisors draft and formalize board charters, delegation matrices, statutory registers, and file applications through government platforms.',
      deliverable: 'Executed legal documentation, official approvals, and registered governance instruments.'
    },
    {
      num: '05',
      title: 'Ongoing Advisory Support',
      badge: 'MONITORING',
      desc: 'Continuous statutory calendar management, corporate secretarial custody, meeting resolution drafting, and periodic regulatory health checks.',
      deliverable: 'Annual compliance calendar management and dedicated on-demand corporate secretarial support.'
    }
  ];

  const governanceChecklist = [
    { title: 'Board & Committee Structure', desc: 'Defined composition, roles, reporting lines, and independent mandates.', icon: Users },
    { title: 'Board Charter', desc: 'Documented director authority, oversight responsibilities, and meeting cadence.', icon: FileText },
    { title: 'Delegation of Authority (DoA)', desc: 'Clear financial and operational signing limits across board and executive tiers.', icon: Scale },
    { title: 'Conflict-of-Interest Policy', desc: 'Procedures for formal disclosure, evaluation, and documentation of related-party matters.', icon: Lock },
    { title: 'Shareholder Rights & Notices', desc: 'Compliant protocols for general assemblies, voting thresholds, and meeting minutes.', icon: Handshake },
    { title: 'Statutory Registers & Archives', desc: 'Organized and up-to-date corporate share, director, and mortgage registers.', icon: FileCheck },
    { title: 'Meeting Minutes & Resolutions', desc: 'Consistent drafting, signing, and secure retention of board decisions.', icon: Award },
    { title: 'Annual Compliance Calendar', desc: 'Consolidated schedule of recurring license renewals, filing deadlines, and reviews.', icon: Calendar }
  ];

  const whyChooseUs = [
    {
      title: '13+ Years Saudi Heritage',
      desc: 'Practical advisory shaped by over a decade of hands-on corporate structuring and regulatory liaison across the Kingdom.',
      icon: Award
    },
    {
      title: 'Riyadh & Al Khobar Presence',
      desc: 'Direct on-the-ground advisory teams in Saudi Arabia’s primary commercial hubs, facilitating rapid government interactions.',
      icon: MapPin
    },
    {
      title: 'End-to-End Delivery',
      desc: 'A unified advisory lifecycle from initial feasibility and documentation through execution and ongoing corporate secretarial support.',
      icon: CheckCircle2
    },
    {
      title: 'Bilingual Ar/En Excellence',
      desc: 'Flawless Arabic legal documentation aligned with Saudi court standards, paired with executive English reporting for international boards.',
      icon: Globe
    }
  ];

  const faqs = [
    {
      q: 'What do corporate advisory services include?',
      a: 'Our corporate advisory services encompass company formation and MISA investment licensing, entity structuring and restructuring, corporate governance framework design, board and committee charters, statutory registers maintenance, regulatory filings across Saudi ministries, and ongoing corporate secretarial support.'
    },
    {
      q: 'Which companies need corporate governance services in Saudi Arabia?',
      a: 'Corporate governance is vital for foreign-owned entities, Saudi joint-stock companies (both listed and closed), family-owned businesses preparing for succession, high-growth SMEs seeking investor capital, and joint ventures requiring clear decision rights and minority protections.'
    },
    {
      q: 'How long does company formation take in Saudi Arabia?',
      a: 'Timelines depend on ownership structure and licensing requirements. With the unified Saudi Business Center and MISA portals, a standard LLC or branch setup typically takes 2 to 4 weeks once all notarized constitutional documents, power of attorneys, and attested commercial registries are assembled.'
    },
    {
      q: 'What is the difference between governance and compliance?',
      a: 'Governance defines how a company is directed, controlled, and held accountable—focusing on board charters, delegation of authority, and strategic decision rights. Compliance ensures the organization strictly abides by statutory laws, licensing conditions, and periodic reporting mandates imposed by authorities like MOC, MISA, and ZATCA.'
    },
    {
      q: 'Do you provide ongoing corporate secretarial services?',
      a: 'Yes. Altapete acts as an outsourced corporate secretarial partner. We manage annual compliance calendars, coordinate board and shareholder meetings, draft bilingual minutes and resolutions, maintain statutory share and director registers, and coordinate recurring filings with the Ministry of Commerce.'
    },
    {
      q: 'Can you review an existing governance framework?',
      a: 'Absolutely. We conduct diagnostic reviews of existing charters, policies, committee mandates, delegation matrices, and statutory registers. We identify control weaknesses, legal non-conformities, and operational bottlenecks, providing a prioritized remediation roadmap.'
    },
    {
      q: 'What documents are required for a corporate advisory engagement?',
      a: 'Typically, we review your Commercial Registration (CR), Articles of Association, MISA investment license (if foreign), existing board resolutions, organizational chart, and current statutory registers. For group restructurings, we also assess ownership ledgers and financial statements.'
    },
    {
      q: 'Do you support both foreign investors and Saudi-owned businesses?',
      a: 'Yes. We cater to global multinationals establishing a footprint in the Kingdom under MISA regulations, as well as prominent Saudi-owned conglomerates, family enterprises, and institutional joint ventures seeking world-class governance standards.'
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className={`corp-adv-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
      
      {/* ────────────────── 1. HERO SECTION ────────────────── */}
      <section className="corp-hero-section">
        <div className="container position-relative">
          <div className="row align-items-center g-4 g-lg-5">
            
            {/* Left Copy */}
            <div className="col-lg-6">
              <div className="corp-eyebrow-pill">
                <span className="corp-pulse-dot" />
                <span>STRATEGIC GOVERNANCE &amp; CORPORATE ADVISORY</span>
              </div>

              <h1 className="corp-hero-title">
                Corporate Advisory, Governance &amp;{' '}
                <span className="corp-gradient-text">Compliance Services</span>
              </h1>

              <p className="corp-hero-desc">
                From <strong>company formation and MISA investment licensing</strong> to board governance charters, statutory records, and multi-agency regulatory alignment, Altapete provides end-to-end corporate advisory tailored to Saudi Arabia&apos;s evolving legal and commercial framework.
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                <a href="#consultation-booking" className="btn btn-linear hover-up corp-hero-btn">
                  Book Advisory Consultation <ArrowRight size={17} />
                </a>
                <a href="#governance-framework" className="btn btn-outline-brand corp-hero-secondary-btn">
                  Explore Governance Framework
                </a>
              </div>

              {/* Key Trust Signals */}
              <div className="corp-trust-row">
                <div className="corp-trust-item">
                  <CheckCircle2 size={16} className="corp-accent-icon" />
                  <span>MISA &amp; MOC Aligned</span>
                </div>
                <div className="corp-trust-item">
                  <CheckCircle2 size={16} className="corp-accent-icon" />
                  <span>SOCPA / ICAP Advisory Standards</span>
                </div>
                <div className="corp-trust-item">
                  <CheckCircle2 size={16} className="corp-accent-icon" />
                  <span>Riyadh &amp; Al Khobar Teams</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: Interactive Governance Command Orb */}
            <div className="col-lg-6 text-center">
              <div className="corp-hero-visual position-relative">
                
                {/* Central Command Orb */}
                <div className="corp-central-hub">
                  <div className="corp-hub-glow" />
                  <div className="corp-hub-icon">
                    <Scale size={42} color="#00AEEF" />
                  </div>
                  <span className="corp-hub-text">GOVERNANCE CORE</span>
                </div>

                {/* Concentric Rotating Rings */}
                <div className="corp-ring corp-ring-inner" />
                <div className="corp-ring corp-ring-outer" />

                {/* 4 Regulatory Satellite Cards */}
                <div className="corp-satellite corp-sat-1">
                  <Building2 size={18} color="#00AEEF" />
                  <span>MISA Licensing</span>
                </div>
                <div className="corp-satellite corp-sat-2">
                  <ShieldCheck size={18} color="#00C6FF" />
                  <span>Board Charters</span>
                </div>
                <div className="corp-satellite corp-sat-3">
                  <Scale size={18} color="#00E5FF" />
                  <span>DoA Matrices</span>
                </div>
                <div className="corp-satellite corp-sat-4">
                  <FileText size={18} color="#38BDF8" />
                  <span>Statutory Books</span>
                </div>

                {/* Floating Metric Badge */}
                <div className="corp-floating-metric">
                  <div className="corp-metric-val">100%</div>
                  <div className="corp-metric-label">Audit-Ready Framework</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────── 2. CORE ADVISORY SERVICES TABS ────────────────── */}
      <section className="corp-services-section" id="core-services">
        <div className="container">
          
          <div className="text-center mb-40">
            <div className="corp-eyebrow-pill mb-2">
              <Briefcase size={13} />
              <span>WHAT WE OFFER</span>
            </div>
            <h2 className="corp-section-title">
              Comprehensive <span className="corp-gradient-text">Corporate &amp; Governance</span> Capabilities
            </h2>
            <p className="corp-section-subtitle">
              Structured advisory solutions designed to give shareholders, directors, and executives clarity, control, and statutory peace of mind.
            </p>
          </div>

          {/* Interactive Pillar Selector Tabs */}
          <div className="corp-tabs-wrapper mb-4">
            {coreServices.map((srv, idx) => {
              const Icon = srv.icon;
              const isActive = activeServiceTab === idx;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveServiceTab(idx)}
                  className={`corp-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <Icon size={18} />
                  <span>{srv.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase Card */}
          <div className="corp-service-showcase-card">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <div className="corp-service-tag">{coreServices[activeServiceTab].tag}</div>
                <h3 className="corp-service-display-title">
                  {coreServices[activeServiceTab].title}
                </h3>
                <p className="corp-service-display-desc">
                  {coreServices[activeServiceTab].desc}
                </p>

                <div className="corp-service-points-grid">
                  {coreServices[activeServiceTab].points.map((pt, pIdx) => (
                    <div key={pIdx} className="corp-point-item">
                      <CheckCircle2 size={16} color="#00AEEF" className="flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-5">
                <div className="corp-deliverable-card">
                  <div className="corp-deliverable-header">
                    <Award size={20} color="#00AEEF" />
                    <h4>Key Deliverable</h4>
                  </div>
                  <p className="corp-deliverable-text">
                    {coreServices[activeServiceTab].deliverable}
                  </p>
                  <div className="corp-deliverable-footer">
                    <a href="#consultation-booking" className="corp-consult-link">
                      Request Consultation on this Service <ChevronRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ────────────────── 3. WHO WE SERVE ────────────────── */}
      <section className="corp-clients-who-section">
        <div className="container">
          
          <div className="text-center mb-40">
            <div className="corp-eyebrow-pill mb-2">
              <Users size={13} />
              <span>MARKET SEGMENTS</span>
            </div>
            <h2 className="corp-section-title">
              Corporate Advisory for <span className="corp-gradient-text">Businesses in Saudi Arabia</span>
            </h2>
            <p className="corp-section-subtitle">
              Tailored governance, structuring, and compliance services shaped around your organization&apos;s ownership model and strategic trajectory.
            </p>
          </div>

          <div className="row g-4">
            {clientProfiles.map((prof, idx) => {
              const Icon = prof.icon;
              return (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="corp-profile-card">
                    <div className="corp-profile-icon-wrap">
                      <Icon size={24} color="#00AEEF" />
                    </div>
                    <div className="corp-profile-tag">{prof.tag}</div>
                    <h3 className="corp-profile-title">{prof.title}</h3>
                    <p className="corp-profile-desc">{prof.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ────────────────── 4. SAUDI REGULATORY AUTHORITIES WE SUPPORT ────────────────── */}
      <section className="corp-authorities-section">
        <div className="container">
          
          <div className="text-center mb-40">
            <div className="corp-eyebrow-pill mb-2">
              <Scale size={13} />
              <span>REGULATORY ECOSYSTEM</span>
            </div>
            <h2 className="corp-section-title">
              Saudi Regulatory Authorities <span className="corp-gradient-text">We Support</span>
            </h2>
            <p className="corp-section-subtitle">
              Navigating statutory compliance, liaison requirements, and official portals across key government bodies.
            </p>
          </div>

          <div className="row g-4">
            {authorities.map((auth, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="corp-authority-card">
                  <div className="corp-auth-header">
                    <div className="corp-auth-dot" />
                    <h3 className="corp-auth-name">{auth.name}</h3>
                  </div>
                  <div className="corp-auth-role">{auth.role}</div>
                  <p className="corp-auth-desc">{auth.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ────────────────── 5. OUR 5-STEP PROCESS ────────────────── */}
      <section className="corp-process-section" id="governance-framework">
        <div className="container">
          
          <div className="text-center mb-40">
            <div className="corp-eyebrow-pill mb-2">
              <Clock size={13} />
              <span>METHODOLOGY</span>
            </div>
            <h2 className="corp-section-title">
              Our Corporate <span className="corp-gradient-text">Advisory Process</span>
            </h2>
            <p className="corp-section-subtitle">
              A disciplined, phased methodology moving from initial diagnostic assessment to documentation, regulatory filing, and recurring advisory.
            </p>
          </div>

          {/* Stepper Navigation */}
          <div className="corp-stepper-nav mb-4">
            {processSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProcessStep(idx)}
                className={`corp-step-nav-btn ${activeProcessStep === idx ? 'active' : ''}`}
              >
                <span className="corp-step-num">{step.num}</span>
                <span className="corp-step-title">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Step Detail Card */}
          <div className="corp-process-detail-card">
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
              <div className="corp-step-badge">{processSteps[activeProcessStep].badge}</div>
              <div className="corp-step-counter">Step {activeProcessStep + 1} of 5</div>
            </div>
            
            <h3 className="corp-step-display-title">
              {processSteps[activeProcessStep].num}. {processSteps[activeProcessStep].title}
            </h3>
            
            <p className="corp-step-display-desc">
              {processSteps[activeProcessStep].desc}
            </p>

            <div className="corp-step-deliverable-wrap">
              <span className="corp-step-deliv-label">Direct Deliverable:</span>
              <span className="corp-step-deliv-text">{processSteps[activeProcessStep].deliverable}</span>
            </div>
          </div>

        </div>
      </section>

      {/* ────────────────── 6. AUDIT-READY GOVERNANCE FRAMEWORK ────────────────── */}
      <section className="corp-checklist-section">
        <div className="container">
          
          <div className="text-center mb-40">
            <div className="corp-eyebrow-pill mb-2">
              <FileCheck size={13} />
              <span>COMPLIANCE FRAMEWORK</span>
            </div>
            <h2 className="corp-section-title">
              Build an <span className="corp-gradient-text">Audit-Ready</span> Governance Framework
            </h2>
            <p className="corp-section-subtitle">
              A reliable governance infrastructure gives directors and shareholders a transparent, defensible record of all decisions made and monitored.
            </p>
          </div>

          <div className="row g-3 g-lg-4">
            {governanceChecklist.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div className="col-lg-3 col-md-6" key={idx}>
                  <div className="corp-checklist-card">
                    <div className="corp-check-icon-wrap">
                      <Icon size={20} color="#00AEEF" />
                    </div>
                    <h3 className="corp-check-title">{item.title}</h3>
                    <p className="corp-check-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ────────────────── 7. WHY ALTAPETE SOLUTIONS ────────────────── */}
      <section className="corp-why-section">
        <div className="container">
          
          <div className="text-center mb-40">
            <div className="corp-eyebrow-pill mb-2">
              <Sparkles size={13} />
              <span>WHY ALTAPETE</span>
            </div>
            <h2 className="corp-section-title">
              Local Insight. <span className="corp-gradient-text">Structured Advisory.</span> Lasting Results.
            </h2>
            <p className="corp-section-subtitle">
              We combine in-depth Saudi regulatory understanding with seasoned board advisory and disciplined execution.
            </p>
          </div>

          <div className="row g-4">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div className="col-lg-3 col-md-6" key={idx}>
                  <div className="corp-why-card">
                    <div className="corp-why-icon-wrap">
                      <Icon size={26} color="#00AEEF" />
                    </div>
                    <h3 className="corp-why-title">{item.title}</h3>
                    <p className="corp-why-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ────────────────── 8. CLIENT LOGOS MARQUEE ────────────────── */}
      <section className="corp-marquee-section">
        <div className="container text-center mb-35">
          <div className="corp-eyebrow-pill mb-2">
            <Award size={13} />
            <span>ENTERPRISE TRUST</span>
          </div>
          <h2 className="corp-section-title">
            Trusted by Leading <span className="corp-gradient-text">Businesses Across the Kingdom</span>
          </h2>
          <p className="corp-section-subtitle">
            Delivering strategic advisory, governance frameworks, and corporate compliance for prominent regional enterprises.
          </p>
        </div>

        <div className="marquee-wrapper">
          <div className="slider-viewport">
            <div className="slider-track">
              {[...clientLogos, ...clientLogos].map((logo, idx) => (
                <div key={idx} className="client-card-wrapper">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="client-logo-img"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── 9. FREQUENTLY ASKED QUESTIONS ────────────────── */}
      <section className="corp-faq-section" id="faq">
        <div className="container">
          
          <div className="text-center mb-40">
            <div className="corp-eyebrow-pill mb-2">
              <HelpCircle size={13} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="corp-section-title">
              Corporate Advisory &amp; <span className="corp-gradient-text">Governance FAQs</span>
            </h2>
            <p className="corp-section-subtitle">
              Answers to common inquiries regarding company formation, MISA licensing, board charters, and ongoing secretarial mandates in Saudi Arabia.
            </p>
          </div>

          <div className="corp-faq-accordion-wrap">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`corp-faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="corp-faq-header-btn"
                    onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="corp-faq-question">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`corp-faq-chevron ${isOpen ? 'rotated' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="corp-faq-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ────────────────── 10. REDESIGNED PROFESSIONAL CTA SECTION ────────────────── */}
      {/* Replaced distorted legacy image with an executive consultation hub */}
      <section className="corp-cta-section" id="consultation-booking">
        <div className="container">
          
          <div className="corp-cta-card">
            <div className="row g-4 g-lg-5 align-items-center">
              
              {/* Left Column: Direct Action & Contact Channels */}
              <div className="col-lg-7">
                <div className="corp-eyebrow-pill mb-3">
                  <Sparkles size={13} />
                  <span>START YOUR ADVISORY ENGAGEMENT</span>
                </div>

                <h2 className="corp-cta-title">
                  Strengthen Your <span className="corp-gradient-text">Corporate Framework</span> Today
                </h2>

                <p className="corp-cta-desc">
                  Whether establishing a new corporate entity in Saudi Arabia, drafting audit-ready board charters, organizing statutory records, or planning a group restructuring, discuss your objectives directly with our seasoned corporate advisors.
                </p>

                {/* Direct Contact Options */}
                <div className="corp-cta-channels-grid">
                  <a href="tel:+966551013823" className="corp-cta-channel-item">
                    <div className="corp-channel-icon">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="corp-channel-title">+966-551-013823</div>
                      <div className="corp-channel-sub">Saudi Arabia Direct</div>
                    </div>
                  </a>

                  <a href="mailto:info@altapetesolutions.com" className="corp-cta-channel-item">
                    <div className="corp-channel-icon">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="corp-channel-title">info@altapetesolutions.com</div>
                      <div className="corp-channel-sub">Confidential Inquiries</div>
                    </div>
                  </a>

                  <a href="https://wa.me/966551076961" target="_blank" rel="noopener noreferrer" className="corp-cta-channel-item">
                    <div className="corp-channel-icon">
                      <Send size={18} />
                    </div>
                    <div>
                      <div className="corp-channel-title">+966 55 107 6961</div>
                      <div className="corp-channel-sub">WhatsApp Advisory</div>
                    </div>
                  </a>

                  <div className="corp-cta-channel-item">
                    <div className="corp-channel-icon">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="corp-channel-title">Riyadh &amp; Al Khobar</div>
                      <div className="corp-channel-sub">Kingdom of Saudi Arabia</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Quick Interactive Consultation Request */}
              <div className="col-lg-5">
                <div className="corp-form-card">
                  <div className="corp-form-header">
                    <Award size={20} color="#00AEEF" />
                    <h3 className="corp-form-title">Schedule Advisory Call</h3>
                  </div>

                  {formSubmitted ? (
                    <div className="corp-form-success">
                      <CheckCircle2 size={40} color="#00AEEF" className="mb-3" />
                      <h4>Consultation Requested!</h4>
                      <p>Our senior corporate advisory team will contact you within 24 business hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="corp-booking-form">
                      <div className="mb-3">
                        <label className="corp-form-label">Advisory Focus Area</label>
                        <select
                          className="form-select corp-form-input"
                          value={selectedTopic}
                          onChange={(e) => setSelectedTopic(e.target.value)}
                        >
                          <option value="governance">Corporate Governance &amp; Board Charters</option>
                          <option value="formation">Company Formation &amp; MISA Licensing</option>
                          <option value="secretarial">Corporate Secretarial &amp; Registers</option>
                          <option value="restructuring">Business Restructuring &amp; JVs</option>
                          <option value="compliance">Statutory Compliance Diagnostic</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="corp-form-label">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Tariq Al-Mansoor"
                          className="form-control corp-form-input"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="corp-form-label">Corporate Email</label>
                        <input
                          type="email"
                          required
                          placeholder="tariq@company.com"
                          className="form-control corp-form-input"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="corp-form-label">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          required
                          placeholder="+966 5X XXX XXXX"
                          className="form-control corp-form-input"
                        />
                      </div>

                      <button type="submit" className="btn btn-linear w-100 corp-form-submit-btn">
                        Request Advisory Discussion <ArrowRight size={16} />
                      </button>

                      <div className="corp-form-footer-note">
                        <Lock size={12} /> Strictly confidential. SOCPA &amp; ICAP standards.
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* COMPONENT STYLING */}
      <style jsx>{`
        .corp-adv-wrapper {
          width: 100%;
          position: relative;
          overflow: visible;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* ── THEME COLORS ── */
        .corp-adv-wrapper.dark-theme {
          color: #cbd5e1;
        }
        .corp-adv-wrapper.light-theme {
          color: #334155;
        }

        /* ── TYPOGRAPHY & PILLS ── */
        .corp-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 11.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 16px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.3);
          color: #00AEEF;
        }
        .corp-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #00AEEF;
          box-shadow: 0 0 10px #00AEEF;
          animation: corpPulse 2s infinite;
        }
        @keyframes corpPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
        }

        .corp-hero-title {
          font-size: clamp(2.3rem, 4.2vw, 3.4rem);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }
        .dark-theme .corp-hero-title { color: #ffffff; }
        .light-theme .corp-hero-title { color: #0f172a; }

        .corp-gradient-text {
          background: linear-gradient(135deg, #00AEEF 0%, #0077cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .corp-hero-desc {
          font-size: clamp(1.02rem, 1.3vw, 1.15rem);
          line-height: 1.75;
          max-width: 580px;
          margin-bottom: 30px;
        }
        .dark-theme .corp-hero-desc { color: #94a3b8; }
        .light-theme .corp-hero-desc { color: #475569; }

        .corp-hero-btn {
          padding: 14px 30px;
          font-size: 14.5px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border-radius: 12px;
        }
        .corp-hero-secondary-btn {
          padding: 13px 26px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .corp-trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 13px;
          font-weight: 600;
        }
        .dark-theme .corp-trust-row { color: #cbd5e1; }
        .light-theme .corp-trust-row { color: #334155; }
        .corp-trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        /* ── HERO VISUAL ORB ── */
        .corp-hero-visual {
          width: 100%;
          max-width: 480px;
          height: 440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .corp-central-hub {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(13, 21, 39, 0.95), rgba(8, 14, 28, 0.98));
          border: 2px solid rgba(0, 174, 239, 0.5);
          box-shadow: 0 0 50px rgba(0, 174, 239, 0.35);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 10;
        }
        .light-theme .corp-central-hub {
          background: #ffffff;
          border-color: #00AEEF;
          box-shadow: 0 10px 40px rgba(0, 174, 239, 0.2);
        }
        .corp-hub-text {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #00AEEF;
          margin-top: 6px;
        }
        .corp-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(0, 174, 239, 0.25);
          pointer-events: none;
        }
        .corp-ring-inner {
          width: 270px;
          height: 270px;
          animation: corpSpin 45s linear infinite;
        }
        .corp-ring-outer {
          width: 380px;
          height: 380px;
          animation: corpSpin 60s linear infinite reverse;
        }
        @keyframes corpSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .corp-satellite {
          position: absolute;
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 11.5px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
        .dark-theme .corp-satellite {
          background: rgba(13, 21, 39, 0.85);
          border: 1px solid rgba(0, 174, 239, 0.3);
          color: #ffffff;
        }
        .light-theme .corp-satellite {
          background: #ffffff;
          border: 1px solid rgba(0, 174, 239, 0.35);
          color: #0f172a;
        }
        .corp-sat-1 { top: 12%; left: 8%; animation: corpFloat 5s ease-in-out infinite; }
        .corp-sat-2 { top: 12%; right: 6%; animation: corpFloat 6s ease-in-out infinite 1s; }
        .corp-sat-3 { bottom: 16%; right: 8%; animation: corpFloat 5.5s ease-in-out infinite 0.5s; }
        .corp-sat-4 { bottom: 16%; left: 8%; animation: corpFloat 6.5s ease-in-out infinite 1.5s; }

        @keyframes corpFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .corp-floating-metric {
          position: absolute;
          bottom: 2%;
          left: 50%;
          transform: translateX(-50%);
          padding: 8px 20px;
          border-radius: 30px;
          text-align: center;
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          z-index: 12;
        }
        .dark-theme .corp-floating-metric {
          background: rgba(10, 18, 35, 0.9);
          border: 1px solid rgba(0, 174, 239, 0.35);
        }
        .light-theme .corp-floating-metric {
          background: #ffffff;
          border: 1px solid rgba(0, 174, 239, 0.35);
        }
        .corp-metric-val {
          font-size: 15px;
          font-weight: 800;
          color: #00AEEF;
        }
        .corp-metric-label {
          font-size: 11px;
          font-weight: 600;
          opacity: 0.85;
        }

        /* ── SECTION HEADINGS ── */
        .corp-section-title {
          font-size: clamp(1.9rem, 3.2vw, 2.6rem);
          font-weight: 700;
          letter-spacing: -0.01em;
          margin-bottom: 12px;
        }
        .dark-theme .corp-section-title { color: #ffffff; }
        .light-theme .corp-section-title { color: #0f172a; }

        .corp-section-subtitle {
          font-size: 15px;
          line-height: 1.65;
          max-width: 680px;
          margin: 0 auto;
        }
        .dark-theme .corp-section-subtitle { color: #94a3b8; }
        .light-theme .corp-section-subtitle { color: #475569; }

        /* ── CORE SERVICES TABS ── */
        .corp-tabs-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        .corp-tab-btn {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px 20px;
          border-radius: 30px;
          font-size: 13.5px;
          font-weight: 600;
          border: 1px solid transparent;
          background: transparent;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .dark-theme .corp-tab-btn {
          color: #94a3b8;
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.08);
        }
        .light-theme .corp-tab-btn {
          color: #475569;
          background: #f1f5f9;
          border-color: #e2e8f0;
        }
        .dark-theme .corp-tab-btn:hover,
        .dark-theme .corp-tab-btn.active {
          color: #00AEEF;
          background: rgba(0, 174, 239, 0.12);
          border-color: rgba(0, 174, 239, 0.4);
        }
        .light-theme .corp-tab-btn:hover,
        .light-theme .corp-tab-btn.active {
          color: #0077cc;
          background: #e0f2fe;
          border-color: #38bdf8;
        }

        .corp-service-showcase-card {
          border-radius: 24px;
          padding: 38px 40px;
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }
        .dark-theme .corp-service-showcase-card {
          background: rgba(13, 21, 39, 0.65);
          border: 1px solid rgba(44, 115, 217, 0.25);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
        }
        .light-theme .corp-service-showcase-card {
          background: #ffffff;
          border: 1px solid rgba(203, 213, 225, 0.9);
          box-shadow: 0 12px 35px rgba(40, 36, 96, 0.06);
        }

        .corp-service-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #00AEEF;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .corp-service-display-title {
          font-size: clamp(1.45rem, 2.3vw, 1.85rem);
          font-weight: 700;
          margin-bottom: 14px;
        }
        .dark-theme .corp-service-display-title { color: #ffffff; }
        .light-theme .corp-service-display-title { color: #0f172a; }

        .corp-service-display-desc {
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 22px;
        }
        .dark-theme .corp-service-display-desc { color: #94a3b8; }
        .light-theme .corp-service-display-desc { color: #475569; }

        .corp-service-points-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 12px;
        }
        .corp-point-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          line-height: 1.5;
        }
        .dark-theme .corp-point-item { color: #e2e8f0; }
        .light-theme .corp-point-item { color: #1e293b; }

        .corp-deliverable-card {
          border-radius: 18px;
          padding: 26px;
        }
        .dark-theme .corp-deliverable-card {
          background: rgba(8, 14, 28, 0.85);
          border: 1px solid rgba(0, 174, 239, 0.25);
        }
        .light-theme .corp-deliverable-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }
        .corp-deliverable-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .corp-deliverable-header h4 {
          font-size: 15px;
          font-weight: 700;
          margin: 0;
        }
        .dark-theme .corp-deliverable-header h4 { color: #ffffff; }
        .light-theme .corp-deliverable-header h4 { color: #0f172a; }

        .corp-deliverable-text {
          font-size: 13.5px;
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .dark-theme .corp-deliverable-text { color: #94a3b8; }
        .light-theme .corp-deliverable-text { color: #475569; }

        .corp-consult-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 700;
          color: #00AEEF;
          text-decoration: none;
          transition: gap 0.2s ease;
        }
        .corp-consult-link:hover {
          gap: 10px;
          color: #38bdf8;
        }

        /* ── WHO WE SERVE CARDS ── */
        .corp-profile-card {
          border-radius: 20px;
          padding: 28px 24px;
          height: 100%;
          transition: all 0.3s ease;
        }
        .dark-theme .corp-profile-card {
          background: rgba(13, 21, 39, 0.55);
          border: 1px solid rgba(44, 115, 217, 0.18);
        }
        .light-theme .corp-profile-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
        }
        .corp-profile-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 174, 239, 0.45);
          box-shadow: 0 16px 40px rgba(0, 174, 239, 0.12);
        }
        .corp-profile-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(0, 174, 239, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .corp-profile-tag {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 1.2px;
          color: #00AEEF;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .corp-profile-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .dark-theme .corp-profile-title { color: #ffffff; }
        .light-theme .corp-profile-title { color: #0f172a; }

        .corp-profile-desc {
          font-size: 13.5px;
          line-height: 1.6;
          margin: 0;
        }
        .dark-theme .corp-profile-desc { color: #94a3b8; }
        .light-theme .corp-profile-desc { color: #475569; }

        /* ── REGULATORY AUTHORITIES ── */
        .corp-authority-card {
          border-radius: 18px;
          padding: 24px;
          height: 100%;
          transition: all 0.3s ease;
        }
        .dark-theme .corp-authority-card {
          background: rgba(13, 21, 39, 0.6);
          border: 1px solid rgba(44, 115, 217, 0.2);
        }
        .light-theme .corp-authority-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
        }
        .corp-authority-card:hover {
          border-color: rgba(0, 174, 239, 0.45);
          transform: translateY(-4px);
        }
        .corp-auth-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        .corp-auth-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00AEEF;
        }
        .corp-auth-name {
          font-size: 16px;
          font-weight: 700;
          margin: 0;
        }
        .dark-theme .corp-auth-name { color: #ffffff; }
        .light-theme .corp-auth-name { color: #0f172a; }

        .corp-auth-role {
          font-size: 11.5px;
          font-weight: 700;
          color: #00AEEF;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 10px;
        }
        .corp-auth-desc {
          font-size: 13.5px;
          line-height: 1.6;
          margin: 0;
        }
        .dark-theme .corp-auth-desc { color: #94a3b8; }
        .light-theme .corp-auth-desc { color: #475569; }

        /* ── STEPPER METHODOLOGY ── */
        .corp-stepper-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        .corp-step-nav-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border-radius: 30px;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          border: 1px solid transparent;
        }
        .dark-theme .corp-step-nav-btn {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.08);
          color: #94a3b8;
        }
        .light-theme .corp-step-nav-btn {
          background: #f1f5f9;
          border-color: #e2e8f0;
          color: #475569;
        }
        .corp-step-num {
          font-size: 12px;
          font-weight: 800;
          color: #00AEEF;
        }
        .dark-theme .corp-step-nav-btn.active,
        .dark-theme .corp-step-nav-btn:hover {
          background: rgba(0, 174, 239, 0.12);
          border-color: rgba(0, 174, 239, 0.4);
          color: #ffffff;
        }
        .light-theme .corp-step-nav-btn.active,
        .light-theme .corp-step-nav-btn:hover {
          background: #e0f2fe;
          border-color: #38bdf8;
          color: #0f172a;
        }

        .corp-process-detail-card {
          border-radius: 22px;
          padding: 34px 38px;
          max-width: 900px;
          margin: 0 auto;
        }
        .dark-theme .corp-process-detail-card {
          background: rgba(13, 21, 39, 0.7);
          border: 1px solid rgba(44, 115, 217, 0.25);
        }
        .light-theme .corp-process-detail-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }
        .corp-step-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          color: #00AEEF;
          background: rgba(0, 174, 239, 0.12);
          letter-spacing: 1px;
        }
        .corp-step-counter {
          font-size: 13px;
          font-weight: 600;
          opacity: 0.7;
        }
        .corp-step-display-title {
          font-size: clamp(1.4rem, 2.2vw, 1.75rem);
          font-weight: 700;
          margin-bottom: 14px;
        }
        .dark-theme .corp-step-display-title { color: #ffffff; }
        .light-theme .corp-step-display-title { color: #0f172a; }

        .corp-step-display-desc {
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .dark-theme .corp-step-display-desc { color: #94a3b8; }
        .light-theme .corp-step-display-desc { color: #475569; }

        .corp-step-deliverable-wrap {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          border-radius: 12px;
          font-size: 13.5px;
        }
        .dark-theme .corp-step-deliverable-wrap {
          background: rgba(0, 174, 239, 0.08);
          border: 1px solid rgba(0, 174, 239, 0.2);
        }
        .light-theme .corp-step-deliverable-wrap {
          background: #e0f2fe;
          border: 1px solid #bae6fd;
        }
        .corp-step-deliv-label {
          font-weight: 700;
          color: #00AEEF;
        }
        .dark-theme .corp-step-deliv-text { color: #e2e8f0; }
        .light-theme .corp-step-deliv-text { color: #0f172a; }

        /* ── CHECKLIST GRID ── */
        .corp-checklist-card {
          border-radius: 16px;
          padding: 22px 20px;
          height: 100%;
          transition: all 0.3s ease;
        }
        .dark-theme .corp-checklist-card {
          background: rgba(13, 21, 39, 0.55);
          border: 1px solid rgba(44, 115, 217, 0.18);
        }
        .light-theme .corp-checklist-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        }
        .corp-checklist-card:hover {
          border-color: rgba(0, 174, 239, 0.4);
          transform: translateY(-4px);
        }
        .corp-check-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(0, 174, 239, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }
        .corp-check-title {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .dark-theme .corp-check-title { color: #ffffff; }
        .light-theme .corp-check-title { color: #0f172a; }

        .corp-check-desc {
          font-size: 12.5px;
          line-height: 1.55;
          margin: 0;
        }
        .dark-theme .corp-check-desc { color: #94a3b8; }
        .light-theme .corp-check-desc { color: #475569; }

        /* ── WHY ALTAPETE ── */
        .corp-why-card {
          border-radius: 18px;
          padding: 26px 22px;
          height: 100%;
          text-align: center;
          transition: all 0.3s ease;
        }
        .dark-theme .corp-why-card {
          background: rgba(13, 21, 39, 0.6);
          border: 1px solid rgba(44, 115, 217, 0.2);
        }
        .light-theme .corp-why-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
        }
        .corp-why-icon-wrap {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: rgba(0, 174, 239, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
        }
        .corp-why-title {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .dark-theme .corp-why-title { color: #ffffff; }
        .light-theme .corp-why-title { color: #0f172a; }

        .corp-why-desc {
          font-size: 13.5px;
          line-height: 1.6;
          margin: 0;
        }
        .dark-theme .corp-why-desc { color: #94a3b8; }
        .light-theme .corp-why-desc { color: #475569; }

        /* ── FAQ ACCORDION ── */
        .corp-faq-accordion-wrap {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .corp-faq-item {
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .dark-theme .corp-faq-item {
          background: rgba(13, 21, 39, 0.6);
          border: 1px solid rgba(44, 115, 217, 0.2);
        }
        .light-theme .corp-faq-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
        }
        .corp-faq-item.open {
          border-color: rgba(0, 174, 239, 0.45);
        }
        .corp-faq-header-btn {
          width: 100%;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .corp-faq-question {
          font-size: 15.5px;
          font-weight: 600;
          padding-right: 15px;
        }
        .dark-theme .corp-faq-question { color: #ffffff; }
        .light-theme .corp-faq-question { color: #0f172a; }

        .corp-faq-chevron {
          transition: transform 0.3s ease;
          color: #00AEEF;
          flex-shrink: 0;
        }
        .corp-faq-chevron.rotated {
          transform: rotate(180deg);
        }
        .corp-faq-body {
          padding: 0 24px 20px 24px;
          font-size: 14.5px;
          line-height: 1.7;
        }
        .dark-theme .corp-faq-body p { color: #94a3b8; margin: 0; }
        .light-theme .corp-faq-body p { color: #475569; margin: 0; }

        /* ── REDESIGNED EXECUTIVE CTA SECTION ── */
        .corp-cta-card {
          border-radius: 28px;
          padding: 44px 46px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(16px);
        }
        .dark-theme .corp-cta-card {
          background: linear-gradient(135deg, rgba(13, 21, 39, 0.92) 0%, rgba(8, 14, 28, 0.96) 100%);
          border: 1px solid rgba(0, 174, 239, 0.35);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }
        .light-theme .corp-cta-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid rgba(203, 213, 225, 0.9);
          box-shadow: 0 15px 45px rgba(40, 36, 96, 0.08);
        }

        .corp-cta-title {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 800;
          line-height: 1.22;
          margin-bottom: 16px;
        }
        .dark-theme .corp-cta-title { color: #ffffff; }
        .light-theme .corp-cta-title { color: #0f172a; }

        .corp-cta-desc {
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .dark-theme .corp-cta-desc { color: #94a3b8; }
        .light-theme .corp-cta-desc { color: #475569; }

        .corp-cta-channels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
        }
        .corp-cta-channel-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .dark-theme .corp-cta-channel-item {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #e2e8f0;
        }
        .light-theme .corp-cta-channel-item {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #0f172a;
        }
        .dark-theme .corp-cta-channel-item:hover {
          background: rgba(0, 174, 239, 0.12);
          border-color: rgba(0, 174, 239, 0.35);
        }
        .light-theme .corp-cta-channel-item:hover {
          background: #e0f2fe;
          border-color: #38bdf8;
        }
        .corp-channel-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(0, 174, 239, 0.15);
          color: #00AEEF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .corp-channel-title {
          font-size: 13.5px;
          font-weight: 700;
        }
        .corp-channel-sub {
          font-size: 11px;
          opacity: 0.7;
        }

        /* ── FORM CARD ── */
        .corp-form-card {
          border-radius: 22px;
          padding: 28px 26px;
        }
        .dark-theme .corp-form-card {
          background: rgba(7, 12, 24, 0.9);
          border: 1px solid rgba(44, 115, 217, 0.3);
        }
        .light-theme .corp-form-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }
        .corp-form-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .light-theme .corp-form-header {
          border-bottom-color: #f1f5f9;
        }
        .corp-form-title {
          font-size: 17px;
          font-weight: 700;
          margin: 0;
        }
        .dark-theme .corp-form-title { color: #ffffff; }
        .light-theme .corp-form-title { color: #0f172a; }

        .corp-form-label {
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .dark-theme .corp-form-label { color: #94a3b8; }
        .light-theme .corp-form-label { color: #475569; }

        .corp-form-input {
          border-radius: 10px;
          font-size: 13.5px;
          padding: 10px 14px;
        }
        .dark-theme .corp-form-input {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.12);
          color: #ffffff;
        }
        .dark-theme .corp-form-input:focus {
          background: rgba(255, 255, 255, 0.07);
          border-color: #00AEEF;
          color: #ffffff;
        }
        .light-theme .corp-form-input {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #0f172a;
        }

        .corp-form-submit-btn {
          padding: 12px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
        }
        .corp-form-footer-note {
          font-size: 11px;
          text-align: center;
          margin-top: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          opacity: 0.7;
        }
        .corp-form-success {
          text-align: center;
          padding: 40px 10px;
        }
        .corp-form-success h4 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .corp-form-success p {
          font-size: 13.5px;
          opacity: 0.8;
          margin: 0;
        }

        /* ── RESPONSIVE STYLES ── */
        @media (max-width: 991px) {
          .corp-hero-visual {
            height: 380px;
            margin-top: 20px;
          }
          .corp-service-showcase-card {
            padding: 28px 24px;
          }
          .corp-cta-card {
            padding: 32px 24px;
          }
        }
        @media (max-width: 768px) {
          .corp-hero-visual {
            height: 320px;
          }
          .corp-ring-inner { width: 220px; height: 220px; }
          .corp-ring-outer { width: 300px; height: 300px; }
          .corp-central-hub { width: 110px; height: 110px; }
          .corp-satellite { font-size: 10px; padding: 6px 10px; }
        }
      `}</style>
    </div>
  );
}
