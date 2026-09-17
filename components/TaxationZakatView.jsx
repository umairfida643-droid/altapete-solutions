import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import {
  Calculator,
  Percent,
  Receipt,
  FileCheck,
  Network,
  ShieldCheck,
  Building,
  Globe,
  Scale,
  Briefcase,
  TrendingUp,
  Share2,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Lock,
  Send,
  HelpCircle,
  Award,
  FileSpreadsheet,
  AlertCircle
} from 'lucide-react';

export default function TaxationZakatView() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // State
  const [activeObligationTab, setActiveObligationTab] = useState(0);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedFocus, setSelectedFocus] = useState('zakat');

  const taxObligations = [
    {
      id: 'zakat',
      title: 'Zakat Advisory & Declarations',
      tag: 'SAUDI & GCC ENTITIES',
      icon: Calculator,
      who: 'Saudi & GCC-Owned Businesses',
      desc: 'Accredited Zakat base computation, balance sheet asset exclusions, statutory deductible reviews, and complete preparation of annual declarations for ZATCA submission.',
      points: [
        'Zakat Base Assessment & Equity Add-Back Review',
        'Long-term Asset Exclusions & Statutory Deductions',
        'ZATCA ERAD Portal Filing & Supporting Schedules',
        'Assessment Objection Preparation & Representation'
      ],
      deliverable: 'Certified Zakat computation pack, ZATCA declaration schedules, and official filing submission receipt.'
    },
    {
      id: 'cit',
      title: 'Corporate Income Tax (CIT)',
      tag: 'FOREIGN & MIXED CAPITAL',
      icon: Receipt,
      who: 'Foreign-Owned & Mixed-Capital Entities',
      desc: 'Expert computation of the 20% Saudi Corporate Income Tax on foreign shareholders, adjusted net profit determination, deductible expenditure audits, and annual CIT returns.',
      points: [
        'Adjusted Taxable Net Profit Calculations',
        'Depreciation Schedule & Non-Deductible Expense Audits',
        'Cross-Border Withholding Tax Offset Review',
        'Corporate Income Tax Return Filing & Health Checks'
      ],
      deliverable: 'Comprehensive CIT tax calculation ledger, adjustments report, and formal tax return filing.'
    },
    {
      id: 'vat',
      title: 'VAT Advisory & Reconciliations',
      tag: '15% SAUDI VAT REGIME',
      icon: Percent,
      who: 'VAT-Registered Commercial Entities',
      desc: 'Ongoing 15% Value Added Tax compliance, reverse charge mechanism (RCM) management, input tax credit verification, and ERP-to-return ledger reconciliations.',
      points: [
        'Monthly & Quarterly VAT Return Preparation & Filing',
        'ERP Sales & Purchase Register Reconciliations',
        'Input Tax Credit Audits & Proportional Reductions',
        'ZATCA Field Audit Preparation & Query Assistance'
      ],
      deliverable: 'Quarterly VAT filing file, reconciliations bridge, and verified input tax credit archive.'
    },
    {
      id: 'wht',
      title: 'Withholding Tax (WHT)',
      tag: 'CROSS-BORDER PAYMENTS',
      icon: FileCheck,
      who: 'Entities Contracting Non-Resident Vendors',
      desc: 'Correct rate classification (5%, 15%, 20%) on payments made to non-resident entities, application of Double Taxation Avoidance Agreements (DTAA), and monthly WHT returns.',
      points: [
        'Management, Royalty, Technical & Interest Fee Classification',
        'Double Taxation Avoidance Agreement (DTAA) Relief',
        'Monthly Form WHT Returns Submission within 10 Days',
        'Annual Withholding Tax Reconciliation & Audit Trail'
      ],
      deliverable: 'Monthly WHT filing confirmation, payment vouchers, and tax treaty exemption dossiers.'
    },
    {
      id: 'tp',
      title: 'Transfer Pricing & Documentation',
      tag: 'RELATED-PARTY COMPLIANCE',
      icon: Network,
      who: 'Multinational Groups & Related Parties',
      desc: 'Arm’s length principle verification, controlled transaction disclosure forms (CTDF), Local File, Master File preparation, and global database benchmarking.',
      points: [
        'Controlled Transaction Disclosure Form (CTDF) Submission',
        'Local File & Master File Documentation Development',
        'Benchmarking Studies & Profitability Margin Analysis',
        'Intercompany Agreement Review & Pricing Policies'
      ],
      deliverable: 'Audit-ready Local File, Master File, and benchmark studies compliant with ZATCA TP Bylaws.'
    },
    {
      id: 'fatoora',
      title: 'ZATCA E-Invoicing (FATOORA Phase 2)',
      tag: 'INTEGRATION & CLEARANCE',
      icon: ShieldCheck,
      who: 'All Mandated Corporate Waves',
      desc: 'Full technical readiness for Phase 2 Integration: cryptographic stamp identifiers (CSID), cryptographic signing, XML UBL 2.1 compliance, and real-time API clearance middleware.',
      points: [
        'ERP API Middleware Architecture (Odoo, Oracle, SAP)',
        'Cryptographic Onboarding (Production CSID Issuance)',
        'B2B Clearance & B2C Reporting Validation',
        'Phase 2 QR Code & XML UBL 2.1 Strict Syntax Checks'
      ],
      deliverable: 'Fully certified production CSID keys, active API middleware, and 100% cleared invoice pipeline.'
    }
  ];

  const clientProfiles = [
    {
      title: 'Saudi & GCC-Owned Businesses',
      tag: 'ZAKAT FILERS',
      icon: Building,
      desc: 'Complete Zakat base computation, gazt schedules, asset exclusions, and annual declaration filings.'
    },
    {
      title: 'Foreign-Owned Companies',
      tag: 'CORPORATE INCOME TAX',
      icon: Globe,
      desc: '20% corporate income tax calculations, withholding tax classifications, and cross-border profit remittances.'
    },
    {
      title: 'Mixed-Ownership Entities',
      tag: 'DUAL ZAKAT & CIT',
      icon: Scale,
      desc: 'Coordinated apportionment of capital and earnings between Saudi/GCC and foreign ownership profiles.'
    },
    {
      title: 'Saudi SMEs',
      tag: 'GROWTH BUSINESSES',
      icon: Briefcase,
      desc: 'Cost-effective VAT returns, bookkeeping reconciliations, and routine ZATCA compliance management.'
    },
    {
      title: 'Multinational Groups',
      tag: 'CROSS-BORDER',
      icon: TrendingUp,
      desc: 'Transfer pricing Master Files, management fee deductibility, and consolidated regional group tax planning.'
    },
    {
      title: 'Related-Party Entities',
      tag: 'TRANSFER PRICING',
      icon: Share2,
      desc: 'Controlled transaction disclosures, functional analyses, and local arm’s length pricing benchmarks.'
    }
  ];

  const workflowSteps = [
    {
      num: '01',
      title: 'Assess',
      badge: 'DIAGNOSTIC',
      desc: 'We examine your entity ownership structure, commercial activities, cross-border payments, ERP registers, and historical ZATCA filings to establish your baseline compliance profile.',
      deliverable: 'Diagnostic tax assessment report and missing schedule checklist.'
    },
    {
      num: '02',
      title: 'Identify',
      badge: 'GAP ANALYSIS',
      desc: 'We identify potential tax exposure areas, uncaptured VAT input credits, transfer pricing disclosure thresholds, and upcoming statutory filing deadlines.',
      deliverable: 'Risk matrix and priority remediation action roadmap.'
    },
    {
      num: '03',
      title: 'Prepare',
      badge: 'COMPUTATION',
      desc: 'Our certified tax advisors prepare detailed Zakat and CIT calculations, trial balance reconciliations, transfer pricing documentation, and return schedules.',
      deliverable: 'Draft return pack with supporting ledgers and reconciliations.'
    },
    {
      num: '04',
      title: 'Submit',
      badge: 'FILING & LIAISON',
      desc: 'We support the formal submission of returns via the ZATCA ERAD portal, archive all filing receipts, and respond to queries raised by tax authorities.',
      deliverable: 'Official ZATCA submission acknowledgments and certificate issuance.'
    },
    {
      num: '05',
      title: 'Monitor',
      badge: 'CONTINUOUS OVERSIGHT',
      desc: 'We continuously track recurring monthly, quarterly, and annual deadlines, keeping management informed of legislative circulars, e-invoicing waves, and rate revisions.',
      deliverable: 'Annual tax compliance calendar and periodic quarterly health checks.'
    }
  ];

  const documentChecklist = [
    { title: 'Commercial Registration & MISA Licenses', desc: 'Active commercial register, investment licenses, and municipal authorizations.', icon: Building },
    { title: 'Constitutional Documents', desc: 'Articles of Association, shareholder agreements, and shareholding records.', icon: FileSpreadsheet },
    { title: 'Audited Financial Statements', desc: 'SOCPA-compliant audited financial statements for the tax years under review.', icon: Award },
    { title: 'Trial Balance & Detailed GL', desc: 'Transaction-level trial balance, ledger accounts, and revenue breakdowns.', icon: Calculator },
    { title: 'VAT Returns & Reconciliations', desc: 'Historical submitted VAT returns and output/input sales ledger reconciliations.', icon: Percent },
    { title: 'Sales & Purchase Registers', desc: 'Detailed invoice ledgers including tax identification numbers (TIN) and QR codes.', icon: Receipt },
    { title: 'Related-Party Agreements', desc: 'Intercompany contracts, transfer pricing policies, and counterparty registers.', icon: Network },
    { title: 'Historical ZATCA Correspondence', desc: 'Assessment notices, inspection queries, objection letters, and settlement logs.', icon: ShieldCheck }
  ];

  const whyChooseUs = [
    {
      title: '13+ Years Saudi Tax Experience',
      desc: 'Deep understanding of ZATCA bylaws, executive regulations, circulars, and dispute resolution precedent in KSA.',
      icon: Award
    },
    {
      title: 'ERP & Systems Architecture',
      desc: 'Direct alignment between accounting ledgers (Odoo, SAP, Oracle) and tax returns for automated, audit-ready numbers.',
      icon: Network
    },
    {
      title: 'Riyadh & Al Khobar Presence',
      desc: 'On-the-ground presence in Saudi Arabia’s primary commercial hubs, facilitating direct ZATCA and MISA liaison.',
      icon: MapPin
    },
    {
      title: 'Bilingual Arabic & English',
      desc: 'Flawless Arabic filings required by ZATCA portals, paired with structured English executive briefings for international management.',
      icon: Globe
    }
  ];

  const faqs = [
    {
      q: 'What is the difference between Zakat and corporate income tax in Saudi Arabia?',
      a: 'Zakat is an Islamic levy of 2.577% (based on the Gregorian calendar) or 2.5% (Hijri calendar) on the net Zakat base of eligible Saudi and GCC shareholders. Corporate Income Tax (CIT) is a 20% direct tax levied on the adjusted net profit attributable to non-Saudi/non-GCC foreign shareholders. For mixed-ownership entities, profits and capital are proportionally apportioned.'
    },
    {
      q: 'Who is subject to Zakat in Saudi Arabia?',
      a: 'Zakat applies to capital invested by Saudi and GCC citizens, wholly Saudi or GCC-owned companies, and the Saudi/GCC-held share of mixed-ownership entities operating in the Kingdom, in addition to sole proprietorships carrying on commercial activities.'
    },
    {
      q: 'When must a business register for VAT in Saudi Arabia?',
      a: 'Mandatory VAT registration (15% standard rate) applies to any business whose annual taxable supplies exceed SAR 375,000. Voluntary registration is available for businesses with annual supplies or expenses exceeding SAR 187,500.'
    },
    {
      q: 'What is Withholding Tax (WHT) in Saudi Arabia?',
      a: 'Withholding Tax is deducted at source on payments made from a Saudi resident entity to a non-resident vendor without a permanent establishment in the Kingdom. Typical rates are 5% (dividends, interest, airline tickets), 15% (royalties), and 20% (management fees), subject to relief under applicable Double Tax Avoidance Agreements (DTAA).'
    },
    {
      q: 'Which businesses require Transfer Pricing documentation?',
      a: 'All taxable and Zakat entities with controlled transactions must submit a Controlled Transaction Disclosure Form (CTDF) with their annual return. Entities with total arm’s length value of related-party transactions exceeding SAR 6 million must also maintain comprehensive Local File and Master File documentation.'
    },
    {
      q: 'What is ZATCA FATOORA Phase 2 (Integration Phase)?',
      a: 'Phase 2 mandates integrating your billing software or ERP directly with ZATCA’s FATOORA platform via APIs. Standard B2B invoices must be cryptographically cleared in real time before issuance, while simplified B2C invoices must be reported within 24 hours in XML UBL 2.1 format with a compliant cryptographic stamp.'
    },
    {
      q: 'How does Altapete support a business during a ZATCA tax or Zakat audit?',
      a: 'We review the assessment notice or audit request, perform ledger reconciliations, assemble the necessary supporting documentation, draft formal technical response letters in Arabic, and represent your company before ZATCA committees and appellate tax tribunals if formal objections are required.'
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
    <div className={`tax-adv-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
      
      {/* ────────────────── 1. HERO SECTION ────────────────── */}
      <section className="tax-hero-section">
        <div className="container position-relative">
          <div className="row align-items-center g-4 g-lg-5">
            
            {/* Left Copy */}
            <div className="col-lg-6">
              <div className="tax-eyebrow-pill">
                <span className="tax-pulse-dot" />
                <span>TAX &amp; ZATCA ADVISORY SERVICES</span>
              </div>

              <h1 className="tax-hero-title">
                Taxation &amp; ZATCA <span className="tax-gradient-text">Advisory Services</span> in Saudi Arabia
              </h1>

              <p className="tax-hero-desc">
                Ensure complete statutory compliance with the Kingdom&apos;s evolving fiscal laws. Altapete provides accredited advisory across <strong>Zakat, Corporate Income Tax, 15% VAT, Withholding Tax, Transfer Pricing, and FATOORA Phase 2 e-invoicing</strong>.
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                <a href="#consultation-booking" className="btn btn-linear hover-up tax-hero-btn">
                  Request Tax Health Check <ArrowRight size={17} />
                </a>
                <a href="#tax-obligations" className="btn btn-outline-brand tax-hero-secondary-btn">
                  Explore Tax Obligations
                </a>
              </div>

              {/* Key Trust Signals */}
              <div className="tax-trust-row">
                <div className="tax-trust-item">
                  <CheckCircle2 size={16} className="tax-accent-icon" />
                  <span>100% ZATCA Phase 2 Ready</span>
                </div>
                <div className="tax-trust-item">
                  <CheckCircle2 size={16} className="tax-accent-icon" />
                  <span>SOCPA Accredited Specialists</span>
                </div>
                <div className="tax-trust-item">
                  <CheckCircle2 size={16} className="tax-accent-icon" />
                  <span>Zero-Penalty Track Record</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: Interactive Tax Engine & Ledger Radar */}
            <div className="col-lg-6 text-center">
              <div className="tax-hero-visual position-relative">
                
                {/* Central Tax Engine Hub */}
                <div className="tax-central-hub">
                  <div className="tax-hub-icon">
                    <Calculator size={40} color="#00AEEF" />
                  </div>
                  <span className="tax-hub-text">ZATCA ENGINE</span>
                </div>

                {/* Rotating Conduit Rings */}
                <div className="tax-ring tax-ring-inner" />
                <div className="tax-ring tax-ring-outer" />

                {/* 6 Satellite Nodes */}
                <div className="tax-satellite tax-sat-1">
                  <Calculator size={16} color="#00AEEF" />
                  <span>Zakat Base</span>
                </div>
                <div className="tax-satellite tax-sat-2">
                  <Receipt size={16} color="#00C6FF" />
                  <span>20% CIT</span>
                </div>
                <div className="tax-satellite tax-sat-3">
                  <Percent size={16} color="#00E5FF" />
                  <span>15% VAT</span>
                </div>
                <div className="tax-satellite tax-sat-4">
                  <FileCheck size={16} color="#38BDF8" />
                  <span>WHT Filing</span>
                </div>
                <div className="tax-satellite tax-sat-5">
                  <Network size={16} color="#40C4FF" />
                  <span>Transfer Pricing</span>
                </div>
                <div className="tax-satellite tax-sat-6">
                  <ShieldCheck size={16} color="#00AEEF" />
                  <span>FATOORA CSID</span>
                </div>

                {/* Floating Metric Badge */}
                <div className="tax-floating-metric">
                  <div className="tax-metric-val">100%</div>
                  <div className="tax-metric-label">Audit-Ready Tax Reconciliations</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────── 2. CORE TAX & ZAKAT OBLIGATIONS ────────────────── */}
      <section className="tax-services-section" id="tax-obligations">
        <div className="container">
          
          <div className="text-center mb-40">
            <div className="tax-eyebrow-pill mb-2">
              <Percent size={13} />
              <span>SAUDI TAX REGIME</span>
            </div>
            <h2 className="tax-section-title">
              Understand Your <span className="tax-gradient-text">Tax &amp; Zakat Requirements</span>
            </h2>
            <p className="tax-section-subtitle">
              Tax and Zakat obligations in Saudi Arabia depend on legal structure, ownership nationality, transaction flows, and revenue scale.
            </p>
          </div>

          {/* Interactive Tabs */}
          <div className="tax-tabs-wrapper mb-4">
            {taxObligations.map((ob, idx) => {
              const Icon = ob.icon;
              const isActive = activeObligationTab === idx;
              return (
                <button
                  key={ob.id}
                  onClick={() => setActiveObligationTab(idx)}
                  className={`tax-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <Icon size={18} />
                  <span>{ob.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Obligation Card */}
          <div className="tax-obligation-showcase-card">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <div className="tax-ob-tag">{taxObligations[activeObligationTab].tag}</div>
                <h3 className="tax-ob-title">{taxObligations[activeObligationTab].title}</h3>
                <div className="tax-ob-who mb-3">
                  <strong>Applicable to:</strong> {taxObligations[activeObligationTab].who}
                </div>
                <p className="tax-ob-desc">{taxObligations[activeObligationTab].desc}</p>

                <div className="tax-points-grid">
                  {taxObligations[activeObligationTab].points.map((pt, pIdx) => (
                    <div key={pIdx} className="tax-point-item">
                      <CheckCircle2 size={16} color="#00AEEF" className="flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-5">
                <div className="tax-deliverable-card">
                  <div className="tax-deliverable-header">
                    <Award size={20} color="#00AEEF" />
                    <h4>Key Deliverable</h4>
                  </div>
                  <p className="tax-deliverable-text">
                    {taxObligations[activeObligationTab].deliverable}
                  </p>
                  <div className="tax-deliverable-footer">
                    <a href="#consultation-booking" className="tax-consult-link">
                      Schedule Specific Tax Review <ChevronRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ────────────────── 3. WHO WE SERVE ────────────────── */}
      <section className="tax-profiles-section">
        <div className="container">
          
          <div className="text-center mb-40">
            <div className="tax-eyebrow-pill mb-2">
              <Briefcase size={13} />
              <span>MARKET SEGMENTS</span>
            </div>
            <h2 className="tax-section-title">
              Tax &amp; Zakat Advisory for <span className="tax-gradient-text">Businesses in Saudi Arabia</span>
            </h2>
            <p className="tax-section-subtitle">
              From wholly Saudi enterprises and GCC conglomerates to foreign direct investors and complex cross-border joint ventures.
            </p>
          </div>

          <div className="row g-4">
            {clientProfiles.map((prof, idx) => {
              const Icon = prof.icon;
              return (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="tax-profile-card">
                    <div className="tax-profile-icon-wrap">
                      <Icon size={24} color="#00AEEF" />
                    </div>
                    <div className="tax-profile-tag">{prof.tag}</div>
                    <h3 className="tax-profile-title">{prof.title}</h3>
                    <p className="tax-profile-desc">{prof.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ────────────────── 4. 5-STEP PROCESS ────────────────── */}
      <section className="tax-process-section" id="process">
        <div className="container">
          
          <div className="text-center mb-40">
            <div className="tax-eyebrow-pill mb-2">
              <Clock size={13} />
              <span>STRUCTURED METHODOLOGY</span>
            </div>
            <h2 className="tax-section-title">
              Our Tax &amp; ZATCA <span className="tax-gradient-text">Advisory Process</span>
            </h2>
            <p className="tax-section-subtitle">
              A phased, audit-defensible approach that turns statutory obligations into a seamless, manageable workflow.
            </p>
          </div>

          {/* Stepper Navigation */}
          <div className="tax-stepper-nav mb-4">
            {workflowSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveWorkflowStep(idx)}
                className={`tax-step-nav-btn ${activeWorkflowStep === idx ? 'active' : ''}`}
              >
                <span className="tax-step-num">{step.num}</span>
                <span className="tax-step-title">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Step Display Card */}
          <div className="tax-process-detail-card">
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
              <div className="tax-step-badge">{workflowSteps[activeWorkflowStep].badge}</div>
              <div className="tax-step-counter">Phase {activeWorkflowStep + 1} of 5</div>
            </div>

            <h3 className="tax-step-display-title">
              {workflowSteps[activeWorkflowStep].num}. {workflowSteps[activeWorkflowStep].title} Phase
            </h3>

            <p className="tax-step-display-desc">
              {workflowSteps[activeWorkflowStep].desc}
            </p>

            <div className="tax-step-deliverable-wrap">
              <span className="tax-step-deliv-label">Phase Deliverable:</span>
              <span className="tax-step-deliv-text">{workflowSteps[activeWorkflowStep].deliverable}</span>
            </div>
          </div>

        </div>
      </section>

      {/* ────────────────── 5. COMPLIANCE REVIEW DOCUMENT PACK ────────────────── */}
      <section className="tax-checklist-section">
        <div className="container">
          
          <div className="text-center mb-40">
            <div className="tax-eyebrow-pill mb-2">
              <FileSpreadsheet size={13} />
              <span>DOCUMENT CHECKLIST</span>
            </div>
            <h2 className="tax-section-title">
              Prepare for an <span className="tax-gradient-text">Efficient Compliance Review</span>
            </h2>
            <p className="tax-section-subtitle">
              A complete and structured documentation pack ensures faster turnaround times and eliminates statutory filing bottlenecks.
            </p>
          </div>

          <div className="row g-3 g-lg-4">
            {documentChecklist.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div className="col-lg-3 col-md-6" key={idx}>
                  <div className="tax-checklist-card">
                    <div className="tax-check-icon-wrap">
                      <Icon size={20} color="#00AEEF" />
                    </div>
                    <h3 className="tax-check-title">{item.title}</h3>
                    <p className="tax-check-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ────────────────── 6. WHY ALTAPETE ────────────────── */}
      <section className="tax-why-section">
        <div className="container">
          
          <div className="text-center mb-40">
            <div className="tax-eyebrow-pill mb-2">
              <Sparkles size={13} />
              <span>WHY ALTAPETE</span>
            </div>
            <h2 className="tax-section-title">
              Local Tax Insight with <span className="tax-gradient-text">Technology-Enabled Delivery</span>
            </h2>
            <p className="tax-section-subtitle">
              We combine deep Saudi tax accounting expertise with robust ERP systems capabilities for end-to-end statutory accuracy.
            </p>
          </div>

          <div className="row g-4">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div className="col-lg-3 col-md-6" key={idx}>
                  <div className="tax-why-card">
                    <div className="tax-why-icon-wrap">
                      <Icon size={26} color="#00AEEF" />
                    </div>
                    <h3 className="tax-why-title">{item.title}</h3>
                    <p className="tax-why-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ────────────────── 7. CLIENT LOGOS MARQUEE ────────────────── */}
      <section className="tax-marquee-section">
        <div className="container text-center mb-35">
          <div className="tax-eyebrow-pill mb-2">
            <Award size={13} />
            <span>ENTERPRISE TRUST</span>
          </div>
          <h2 className="tax-section-title">
            Trusted by Businesses <span className="tax-gradient-text">Across the Kingdom</span>
          </h2>
          <p className="tax-section-subtitle">
            Delivering mission-critical Zakat, Corporate Income Tax, VAT, and FATOORA integrations for leading enterprises.
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

      {/* ────────────────── 8. FREQUENTLY ASKED QUESTIONS ────────────────── */}
      <section className="tax-faq-section" id="faq">
        <div className="container">
          
          <div className="text-center mb-40">
            <div className="tax-eyebrow-pill mb-2">
              <HelpCircle size={13} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="tax-section-title">
              Tax, Zakat &amp; <span className="tax-gradient-text">ZATCA FAQs</span>
            </h2>
            <p className="tax-section-subtitle">
              Clear answers to common questions on Saudi tax classifications, Zakat deductions, VAT rules, and FATOORA Phase 2 deadlines.
            </p>
          </div>

          <div className="tax-faq-accordion-wrap">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`tax-faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="tax-faq-header-btn"
                    onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="tax-faq-question">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`tax-faq-chevron ${isOpen ? 'rotated' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="tax-faq-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ────────────────── 9. REDESIGNED PROFESSIONAL CTA SECTION ────────────────── */}
      {/* Replaced distorted legacy image with an executive consultation hub */}
      <section className="tax-cta-section" id="consultation-booking">
        <div className="container">
          
          <div className="tax-cta-card">
            <div className="row g-4 g-lg-5 align-items-center">
              
              {/* Left Column: Direct Channels & Context */}
              <div className="col-lg-7">
                <div className="tax-eyebrow-pill mb-3">
                  <Sparkles size={13} />
                  <span>INITIATE COMPLIANCE REVIEW</span>
                </div>

                <h2 className="tax-cta-title">
                  Make Your <span className="tax-gradient-text">ZATCA Compliance</span> More Manageable
                </h2>

                <p className="tax-cta-desc">
                  Connect directly with our senior tax and Zakat advisors regarding Zakat base calculations, 15% VAT returns, Corporate Income Tax filings, Transfer Pricing files, or FATOORA Phase 2 ERP integrations.
                </p>

                {/* Direct Action Contacts */}
                <div className="tax-cta-channels-grid">
                  <a href="tel:+966551013823" className="tax-cta-channel-item">
                    <div className="tax-channel-icon">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="tax-channel-title">+966 55 101 3823</div>
                      <div className="tax-channel-sub">Saudi Direct Helpline</div>
                    </div>
                  </a>

                  <a href="mailto:info@altapetesolutions.com" className="tax-cta-channel-item">
                    <div className="tax-channel-icon">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="tax-channel-title">info@altapetesolutions.com</div>
                      <div className="tax-channel-sub">Confidential Tax Inquiry</div>
                    </div>
                  </a>

                  <a href="https://wa.me/966568029153" target="_blank" rel="noopener noreferrer" className="tax-cta-channel-item">
                    <div className="tax-channel-icon">
                      <Send size={18} />
                    </div>
                    <div>
                      <div className="tax-channel-title">+966 56 802 9153</div>
                      <div className="tax-channel-sub">WhatsApp Advisory Desk</div>
                    </div>
                  </a>

                  <div className="tax-cta-channel-item">
                    <div className="tax-channel-icon">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="tax-channel-title">Riyadh &amp; Al Khobar</div>
                      <div className="tax-channel-sub">Kingdom of Saudi Arabia</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Health Check Form */}
              <div className="col-lg-5">
                <div className="tax-form-card">
                  <div className="tax-form-header">
                    <Award size={20} color="#00AEEF" />
                    <h3 className="tax-form-title">Request Tax Health Check</h3>
                  </div>

                  {formSubmitted ? (
                    <div className="tax-form-success">
                      <CheckCircle2 size={40} color="#00AEEF" className="mb-3" />
                      <h4>Health Check Requested!</h4>
                      <p>Our senior tax advisory team will review your details and reach out within 24 business hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="tax-booking-form">
                      <div className="mb-3">
                        <label className="tax-form-label">Primary Advisory Need</label>
                        <select
                          className="form-select tax-form-input"
                          value={selectedFocus}
                          onChange={(e) => setSelectedFocus(e.target.value)}
                        >
                          <option value="zakat">Zakat Computation &amp; Declarations</option>
                          <option value="cit">Corporate Income Tax (CIT)</option>
                          <option value="vat">15% VAT Filings &amp; Reconciliations</option>
                          <option value="wht">Withholding Tax (WHT) on Remittances</option>
                          <option value="tp">Transfer Pricing Local &amp; Master Files</option>
                          <option value="fatoora">ZATCA Phase 2 E-Invoicing Integration</option>
                          <option value="audit">ZATCA Audit Representation &amp; Objections</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="tax-form-label">Company Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Al-Riyadh Enterprises Ltd."
                          className="form-control tax-form-input"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="tax-form-label">Contact Person &amp; Email</label>
                        <input
                          type="email"
                          required
                          placeholder="cfo@company.com"
                          className="form-control tax-form-input"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="tax-form-label">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          required
                          placeholder="+966 5X XXX XXXX"
                          className="form-control tax-form-input"
                        />
                      </div>

                      <button type="submit" className="btn btn-linear w-100 tax-form-submit-btn">
                        Submit Diagnostic Request <ArrowRight size={16} />
                      </button>

                      <div className="tax-form-footer-note">
                        <Lock size={12} /> Strictly confidential. SOCPA &amp; ZATCA accredited.
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
        .tax-adv-wrapper {
          width: 100%;
          position: relative;
          overflow: visible;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* ── THEME COLORS ── */
        .tax-adv-wrapper.dark-theme {
          color: #cbd5e1;
        }
        .tax-adv-wrapper.light-theme {
          color: #334155;
        }

        /* ── TYPOGRAPHY & PILLS ── */
        .tax-eyebrow-pill {
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
        .tax-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #00AEEF;
          box-shadow: 0 0 10px #00AEEF;
          animation: taxPulse 2s infinite;
        }
        @keyframes taxPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
        }

        .tax-hero-title {
          font-size: clamp(2.3rem, 4.2vw, 3.4rem);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }
        .dark-theme .tax-hero-title { color: #ffffff; }
        .light-theme .tax-hero-title { color: #0f172a; }

        .tax-gradient-text {
          background: linear-gradient(135deg, #00AEEF 0%, #0077cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .tax-hero-desc {
          font-size: clamp(1.02rem, 1.3vw, 1.15rem);
          line-height: 1.75;
          max-width: 580px;
          margin-bottom: 30px;
        }
        .dark-theme .tax-hero-desc { color: #94a3b8; }
        .light-theme .tax-hero-desc { color: #475569; }

        .tax-hero-btn {
          padding: 14px 30px;
          font-size: 14.5px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border-radius: 12px;
        }
        .tax-hero-secondary-btn {
          padding: 13px 26px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .tax-trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 13px;
          font-weight: 600;
        }
        .dark-theme .tax-trust-row { color: #cbd5e1; }
        .light-theme .tax-trust-row { color: #334155; }
        .tax-trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        /* ── HERO VISUAL ORB ── */
        .tax-hero-visual {
          width: 100%;
          max-width: 480px;
          height: 440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tax-central-hub {
          width: 135px;
          height: 135px;
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
        .light-theme .tax-central-hub {
          background: #ffffff;
          border-color: #00AEEF;
          box-shadow: 0 10px 40px rgba(0, 174, 239, 0.2);
        }
        .tax-hub-text {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #00AEEF;
          margin-top: 6px;
        }
        .tax-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(0, 174, 239, 0.25);
          pointer-events: none;
        }
        .tax-ring-inner {
          width: 270px;
          height: 270px;
          animation: taxSpin 45s linear infinite;
        }
        .tax-ring-outer {
          width: 380px;
          height: 380px;
          animation: taxSpin 60s linear infinite reverse;
        }
        @keyframes taxSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .tax-satellite {
          position: absolute;
          padding: 7px 13px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 7px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
        .dark-theme .tax-satellite {
          background: rgba(13, 21, 39, 0.85);
          border: 1px solid rgba(0, 174, 239, 0.3);
          color: #ffffff;
        }
        .light-theme .tax-satellite {
          background: #ffffff;
          border: 1px solid rgba(0, 174, 239, 0.35);
          color: #0f172a;
        }
        .tax-sat-1 { top: 8%; left: 14%; animation: taxFloat 5s ease-in-out infinite; }
        .tax-sat-2 { top: 8%; right: 14%; animation: taxFloat 6s ease-in-out infinite 1s; }
        .tax-sat-3 { top: 48%; right: 0%; animation: taxFloat 5.5s ease-in-out infinite 0.5s; }
        .tax-sat-4 { bottom: 10%; right: 14%; animation: taxFloat 6.5s ease-in-out infinite 1.5s; }
        .tax-sat-5 { bottom: 10%; left: 14%; animation: taxFloat 5.8s ease-in-out infinite 0.8s; }
        .tax-sat-6 { top: 48%; left: 0%; animation: taxFloat 6.2s ease-in-out infinite 1.2s; }

        @keyframes taxFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }

        .tax-floating-metric {
          position: absolute;
          bottom: 0%;
          left: 50%;
          transform: translateX(-50%);
          padding: 8px 20px;
          border-radius: 30px;
          text-align: center;
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          z-index: 12;
        }
        .dark-theme .tax-floating-metric {
          background: rgba(10, 18, 35, 0.92);
          border: 1px solid rgba(0, 174, 239, 0.35);
        }
        .light-theme .tax-floating-metric {
          background: #ffffff;
          border: 1px solid rgba(0, 174, 239, 0.35);
        }
        .tax-metric-val {
          font-size: 15px;
          font-weight: 800;
          color: #00AEEF;
        }
        .tax-metric-label {
          font-size: 11px;
          font-weight: 600;
          opacity: 0.85;
        }

        /* ── SECTION HEADINGS ── */
        .tax-section-title {
          font-size: clamp(1.9rem, 3.2vw, 2.6rem);
          font-weight: 700;
          letter-spacing: -0.01em;
          margin-bottom: 12px;
        }
        .dark-theme .tax-section-title { color: #ffffff; }
        .light-theme .tax-section-title { color: #0f172a; }

        .tax-section-subtitle {
          font-size: 15px;
          line-height: 1.65;
          max-width: 680px;
          margin: 0 auto;
        }
        .dark-theme .tax-section-subtitle { color: #94a3b8; }
        .light-theme .tax-section-subtitle { color: #475569; }

        /* ── OBLIGATION TABS ── */
        .tax-tabs-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        .tax-tab-btn {
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
        .dark-theme .tax-tab-btn {
          color: #94a3b8;
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.08);
        }
        .light-theme .tax-tab-btn {
          color: #475569;
          background: #f1f5f9;
          border-color: #e2e8f0;
        }
        .dark-theme .tax-tab-btn:hover,
        .dark-theme .tax-tab-btn.active {
          color: #00AEEF;
          background: rgba(0, 174, 239, 0.12);
          border-color: rgba(0, 174, 239, 0.4);
        }
        .light-theme .tax-tab-btn:hover,
        .light-theme .tax-tab-btn.active {
          color: #0077cc;
          background: #e0f2fe;
          border-color: #38bdf8;
        }

        .tax-obligation-showcase-card {
          border-radius: 24px;
          padding: 38px 40px;
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }
        .dark-theme .tax-obligation-showcase-card {
          background: rgba(13, 21, 39, 0.65);
          border: 1px solid rgba(44, 115, 217, 0.25);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
        }
        .light-theme .tax-obligation-showcase-card {
          background: #ffffff;
          border: 1px solid rgba(203, 213, 225, 0.9);
          box-shadow: 0 12px 35px rgba(40, 36, 96, 0.06);
        }

        .tax-ob-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #00AEEF;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .tax-ob-title {
          font-size: clamp(1.45rem, 2.3vw, 1.85rem);
          font-weight: 700;
          margin-bottom: 10px;
        }
        .dark-theme .tax-ob-title { color: #ffffff; }
        .light-theme .tax-ob-title { color: #0f172a; }

        .tax-ob-who {
          font-size: 13.5px;
          color: #00AEEF;
        }
        .tax-ob-desc {
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 22px;
        }
        .dark-theme .tax-ob-desc { color: #94a3b8; }
        .light-theme .tax-ob-desc { color: #475569; }

        .tax-points-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 12px;
        }
        .tax-point-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          line-height: 1.5;
        }
        .dark-theme .tax-point-item { color: #e2e8f0; }
        .light-theme .tax-point-item { color: #1e293b; }

        .tax-deliverable-card {
          border-radius: 18px;
          padding: 26px;
        }
        .dark-theme .tax-deliverable-card {
          background: rgba(8, 14, 28, 0.85);
          border: 1px solid rgba(0, 174, 239, 0.25);
        }
        .light-theme .tax-deliverable-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }
        .tax-deliverable-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .tax-deliverable-header h4 {
          font-size: 15px;
          font-weight: 700;
          margin: 0;
        }
        .dark-theme .tax-deliverable-header h4 { color: #ffffff; }
        .light-theme .tax-deliverable-header h4 { color: #0f172a; }

        .tax-deliverable-text {
          font-size: 13.5px;
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .dark-theme .tax-deliverable-text { color: #94a3b8; }
        .light-theme .tax-deliverable-text { color: #475569; }

        .tax-consult-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 700;
          color: #00AEEF;
          text-decoration: none;
          transition: gap 0.2s ease;
        }
        .tax-consult-link:hover {
          gap: 10px;
          color: #38bdf8;
        }

        /* ── PROFILES CARDS ── */
        .tax-profile-card {
          border-radius: 20px;
          padding: 28px 24px;
          height: 100%;
          transition: all 0.3s ease;
        }
        .dark-theme .tax-profile-card {
          background: rgba(13, 21, 39, 0.55);
          border: 1px solid rgba(44, 115, 217, 0.18);
        }
        .light-theme .tax-profile-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
        }
        .tax-profile-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 174, 239, 0.45);
          box-shadow: 0 16px 40px rgba(0, 174, 239, 0.12);
        }
        .tax-profile-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(0, 174, 239, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .tax-profile-tag {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 1.2px;
          color: #00AEEF;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .tax-profile-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .dark-theme .tax-profile-title { color: #ffffff; }
        .light-theme .tax-profile-title { color: #0f172a; }

        .tax-profile-desc {
          font-size: 13.5px;
          line-height: 1.6;
          margin: 0;
        }
        .dark-theme .tax-profile-desc { color: #94a3b8; }
        .light-theme .tax-profile-desc { color: #475569; }

        /* ── STEPPER METHODOLOGY ── */
        .tax-stepper-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        .tax-step-nav-btn {
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
        .dark-theme .tax-step-nav-btn {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.08);
          color: #94a3b8;
        }
        .light-theme .tax-step-nav-btn {
          background: #f1f5f9;
          border-color: #e2e8f0;
          color: #475569;
        }
        .tax-step-num {
          font-size: 12px;
          font-weight: 800;
          color: #00AEEF;
        }
        .dark-theme .tax-step-nav-btn.active,
        .dark-theme .tax-step-nav-btn:hover {
          background: rgba(0, 174, 239, 0.12);
          border-color: rgba(0, 174, 239, 0.4);
          color: #ffffff;
        }
        .light-theme .tax-step-nav-btn.active,
        .light-theme .tax-step-nav-btn:hover {
          background: #e0f2fe;
          border-color: #38bdf8;
          color: #0f172a;
        }

        .tax-process-detail-card {
          border-radius: 22px;
          padding: 34px 38px;
          max-width: 900px;
          margin: 0 auto;
        }
        .dark-theme .tax-process-detail-card {
          background: rgba(13, 21, 39, 0.7);
          border: 1px solid rgba(44, 115, 217, 0.25);
        }
        .light-theme .tax-process-detail-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }
        .tax-step-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          color: #00AEEF;
          background: rgba(0, 174, 239, 0.12);
          letter-spacing: 1px;
        }
        .tax-step-counter {
          font-size: 13px;
          font-weight: 600;
          opacity: 0.7;
        }
        .tax-step-display-title {
          font-size: clamp(1.4rem, 2.2vw, 1.75rem);
          font-weight: 700;
          margin-bottom: 14px;
        }
        .dark-theme .tax-step-display-title { color: #ffffff; }
        .light-theme .tax-step-display-title { color: #0f172a; }

        .tax-step-display-desc {
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .dark-theme .tax-step-display-desc { color: #94a3b8; }
        .light-theme .tax-step-display-desc { color: #475569; }

        .tax-step-deliverable-wrap {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          border-radius: 12px;
          font-size: 13.5px;
        }
        .dark-theme .tax-step-deliverable-wrap {
          background: rgba(0, 174, 239, 0.08);
          border: 1px solid rgba(0, 174, 239, 0.2);
        }
        .light-theme .tax-step-deliverable-wrap {
          background: #e0f2fe;
          border: 1px solid #bae6fd;
        }
        .tax-step-deliv-label {
          font-weight: 700;
          color: #00AEEF;
        }
        .dark-theme .tax-step-deliv-text { color: #e2e8f0; }
        .light-theme .tax-step-deliv-text { color: #0f172a; }

        /* ── CHECKLIST ── */
        .tax-checklist-card {
          border-radius: 16px;
          padding: 22px 20px;
          height: 100%;
          transition: all 0.3s ease;
        }
        .dark-theme .tax-checklist-card {
          background: rgba(13, 21, 39, 0.55);
          border: 1px solid rgba(44, 115, 217, 0.18);
        }
        .light-theme .tax-checklist-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        }
        .tax-checklist-card:hover {
          border-color: rgba(0, 174, 239, 0.4);
          transform: translateY(-4px);
        }
        .tax-check-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(0, 174, 239, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }
        .tax-check-title {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .dark-theme .tax-check-title { color: #ffffff; }
        .light-theme .tax-check-title { color: #0f172a; }

        .tax-check-desc {
          font-size: 12.5px;
          line-height: 1.55;
          margin: 0;
        }
        .dark-theme .tax-check-desc { color: #94a3b8; }
        .light-theme .tax-check-desc { color: #475569; }

        /* ── WHY ALTAPETE ── */
        .tax-why-card {
          border-radius: 18px;
          padding: 26px 22px;
          height: 100%;
          text-align: center;
          transition: all 0.3s ease;
        }
        .dark-theme .tax-why-card {
          background: rgba(13, 21, 39, 0.6);
          border: 1px solid rgba(44, 115, 217, 0.2);
        }
        .light-theme .tax-why-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
        }
        .tax-why-icon-wrap {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: rgba(0, 174, 239, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
        }
        .tax-why-title {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .dark-theme .tax-why-title { color: #ffffff; }
        .light-theme .tax-why-title { color: #0f172a; }

        .tax-why-desc {
          font-size: 13.5px;
          line-height: 1.6;
          margin: 0;
        }
        .dark-theme .tax-why-desc { color: #94a3b8; }
        .light-theme .tax-why-desc { color: #475569; }

        /* ── FAQ ACCORDION ── */
        .tax-faq-accordion-wrap {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .tax-faq-item {
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .dark-theme .tax-faq-item {
          background: rgba(13, 21, 39, 0.6);
          border: 1px solid rgba(44, 115, 217, 0.2);
        }
        .light-theme .tax-faq-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
        }
        .tax-faq-item.open {
          border-color: rgba(0, 174, 239, 0.45);
        }
        .tax-faq-header-btn {
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
        .tax-faq-question {
          font-size: 15.5px;
          font-weight: 600;
          padding-right: 15px;
        }
        .dark-theme .tax-faq-question { color: #ffffff; }
        .light-theme .tax-faq-question { color: #0f172a; }

        .tax-faq-chevron {
          transition: transform 0.3s ease;
          color: #00AEEF;
          flex-shrink: 0;
        }
        .tax-faq-chevron.rotated {
          transform: rotate(180deg);
        }
        .tax-faq-body {
          padding: 0 24px 20px 24px;
          font-size: 14.5px;
          line-height: 1.7;
        }
        .dark-theme .tax-faq-body p { color: #94a3b8; margin: 0; }
        .light-theme .tax-faq-body p { color: #475569; margin: 0; }

        /* ── REDESIGNED EXECUTIVE CTA SECTION ── */
        .tax-cta-card {
          border-radius: 28px;
          padding: 44px 46px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(16px);
        }
        .dark-theme .tax-cta-card {
          background: linear-gradient(135deg, rgba(13, 21, 39, 0.92) 0%, rgba(8, 14, 28, 0.96) 100%);
          border: 1px solid rgba(0, 174, 239, 0.35);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }
        .light-theme .tax-cta-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid rgba(203, 213, 225, 0.9);
          box-shadow: 0 15px 45px rgba(40, 36, 96, 0.08);
        }

        .tax-cta-title {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 800;
          line-height: 1.22;
          margin-bottom: 16px;
        }
        .dark-theme .tax-cta-title { color: #ffffff; }
        .light-theme .tax-cta-title { color: #0f172a; }

        .tax-cta-desc {
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .dark-theme .tax-cta-desc { color: #94a3b8; }
        .light-theme .tax-cta-desc { color: #475569; }

        .tax-cta-channels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
        }
        .tax-cta-channel-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .dark-theme .tax-cta-channel-item {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #e2e8f0;
        }
        .light-theme .tax-cta-channel-item {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #0f172a;
        }
        .dark-theme .tax-cta-channel-item:hover {
          background: rgba(0, 174, 239, 0.12);
          border-color: rgba(0, 174, 239, 0.35);
        }
        .light-theme .tax-cta-channel-item:hover {
          background: #e0f2fe;
          border-color: #38bdf8;
        }
        .tax-channel-icon {
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
        .tax-channel-title {
          font-size: 13.5px;
          font-weight: 700;
        }
        .tax-channel-sub {
          font-size: 11px;
          opacity: 0.7;
        }

        /* ── FORM CARD ── */
        .tax-form-card {
          border-radius: 22px;
          padding: 28px 26px;
        }
        .dark-theme .tax-form-card {
          background: rgba(7, 12, 24, 0.9);
          border: 1px solid rgba(44, 115, 217, 0.3);
        }
        .light-theme .tax-form-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }
        .tax-form-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .light-theme .tax-form-header {
          border-bottom-color: #f1f5f9;
        }
        .tax-form-title {
          font-size: 17px;
          font-weight: 700;
          margin: 0;
        }
        .dark-theme .tax-form-title { color: #ffffff; }
        .light-theme .tax-form-title { color: #0f172a; }

        .tax-form-label {
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .dark-theme .tax-form-label { color: #94a3b8; }
        .light-theme .tax-form-label { color: #475569; }

        .tax-form-input {
          border-radius: 10px;
          font-size: 13.5px;
          padding: 10px 14px;
        }
        .dark-theme .tax-form-input {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.12);
          color: #ffffff;
        }
        .dark-theme .tax-form-input:focus {
          background: rgba(255, 255, 255, 0.07);
          border-color: #00AEEF;
          color: #ffffff;
        }
        .light-theme .tax-form-input {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #0f172a;
        }

        .tax-form-submit-btn {
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
        .tax-form-footer-note {
          font-size: 11px;
          text-align: center;
          margin-top: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          opacity: 0.7;
        }
        .tax-form-success {
          text-align: center;
          padding: 40px 10px;
        }
        .tax-form-success h4 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .tax-form-success p {
          font-size: 13.5px;
          opacity: 0.8;
          margin: 0;
        }

        /* ── RESPONSIVE STYLES ── */
        @media (max-width: 991px) {
          .tax-hero-visual {
            height: 380px;
            margin-top: 20px;
          }
          .tax-obligation-showcase-card {
            padding: 28px 24px;
          }
          .tax-cta-card {
            padding: 32px 24px;
          }
        }
        @media (max-width: 768px) {
          .tax-hero-visual {
            height: 320px;
          }
          .tax-ring-inner { width: 220px; height: 220px; }
          .tax-ring-outer { width: 300px; height: 300px; }
          .tax-central-hub { width: 110px; height: 110px; }
          .tax-satellite { font-size: 10px; padding: 6px 10px; }
        }
      `}</style>
    </div>
  );
}
