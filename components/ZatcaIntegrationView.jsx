import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck, FileCheck, CheckCircle2, Lock, Zap,
  TrendingUp, BarChart3, Database, RefreshCw, Cpu,
  Server, ArrowRight, Check, AlertCircle, Sparkles,
  ExternalLink, ChevronRight, Leaf, Clock, Award
} from 'lucide-react';

const compliancePhases = [
  {
    id: 'phase1',
    title: 'Phase 1 - Generation & Storage',
    subtitle: 'Foundation Setup',
    deadline: 'December 2021',
    status: 'Active & Enforced',
    statusColor: '#10b981',
    badgeColor: '#00AEEF',
    services: [
      {
        title: 'E-Invoice Generation',
        tier: 'Standard',
        timeline: '1-2 Weeks',
        desc: 'Generate ZATCA-compliant XML invoices with mandatory tax fields, standard VAT tags, and cryptographic QR codes.',
        features: ['XML Format Compliance', 'QR Code Generation', 'Mandatory Fields', 'Invoice Validation']
      },
      {
        title: 'Secure Storage Solution',
        tier: 'Standard',
        timeline: '1 Week',
        desc: 'Implement tamper-proof cloud archiving for tax invoices with strict role-based access and automated retrieval.',
        features: ['Cloud Storage', 'Data Encryption', 'Backup Systems', 'Quick Retrieval']
      },
      {
        title: 'Invoice Validation Engine',
        tier: 'Intermediate',
        timeline: '2 Weeks',
        desc: 'Pre-clearance syntactic and semantic data validation against official ZATCA business dictionaries prior to issuance.',
        features: ['Data Validation', 'Error Detection', 'Format Checking', 'Compliance Reports']
      }
    ]
  },
  {
    id: 'phase2',
    title: 'Phase 2 - Integration & Reporting',
    subtitle: 'Advanced Compliance',
    deadline: 'Waves 1-15+ Active',
    status: 'Mandatory Clearance',
    statusColor: '#00AEEF',
    badgeColor: '#f59e0b',
    services: [
      {
        title: 'ZATCA Clearance API',
        tier: 'Expert',
        timeline: '2-3 Weeks',
        desc: 'Direct bidirectional API integration with ZATCA (FATOORA) for sub-second B2B clearance with cryptographic stamps.',
        features: ['FATOORA API Bridge', 'Cryptographic Stamp', 'Real-time Clearance', 'UBL 2.1 XML Format']
      },
      {
        title: 'Cryptographic Hashing & ECDSA',
        tier: 'Advanced',
        timeline: '1-2 Weeks',
        desc: 'Automated SHA-256 sequential hash chaining and ECDSA digital signatures using onboard cryptographic CSIDs.',
        features: ['SHA-256 Chaining', 'ECDSA Digital Signatures', 'Tamper Detection', 'X.509 Compliance Token']
      },
      {
        title: 'Simplified B2C Reporting',
        tier: 'Intermediate',
        timeline: '1 Week',
        desc: 'Automated high-throughput transmission of B2C simplified tax receipts to the ZATCA portal within 24 hours.',
        features: ['24-Hour Auto Reporting', 'Encrypted QR Codes', 'Batch Dispatch Queues', 'Status Acknowledgment']
      }
    ]
  },
  {
    id: 'ongoing',
    title: 'Ongoing Services',
    subtitle: 'Continuous Support',
    deadline: '24/7 Managed SLA',
    status: 'Always Available',
    statusColor: '#8b5cf6',
    badgeColor: '#2c73d9',
    services: [
      {
        title: '24/7 Telemetry & Health Monitoring',
        tier: 'Standard',
        timeline: 'Continuous',
        desc: 'Round-the-clock API health monitoring, transmission error alerts, and auto-retry queues for zero invoice drop.',
        features: ['24/7 API Telemetry', 'Error Alerts & Auto-Retry', 'Dedicated Hypercare', '99.9% Uptime SLA']
      },
      {
        title: 'CSID Certificate Lifecycle',
        tier: 'Standard',
        timeline: 'Annual',
        desc: 'Automated renewal and secure vaulting of production cryptographic compliance certificates before expiration.',
        features: ['CSID Auto-Renewal', 'Private Key Vaulting', 'Portal Re-Registration', 'Zero Downtime Rotation']
      },
      {
        title: 'Regulatory Wave Migrations',
        tier: 'Intermediate',
        timeline: 'On-Demand',
        desc: 'Continuous technical updates guaranteeing full compliance with upcoming ZATCA rule revisions and new waves.',
        features: ['Tax Law Updates', 'API Schema Migrations', 'Multi-Company Rollout', 'Staff Audits & Training']
      }
    ]
  }
];

const businessBenefits = [
  {
    id: 'cost',
    title: 'Cost Reduction',
    subtitle: 'Operational Efficiency',
    icon: TrendingUp,
    stat: '40%',
    statLabel: 'Cost Savings',
    desc: 'Reduce administrative overhead by up to 40% through automated end-to-end invoice generation, digital validation, and zero manual paperwork.',
    pills: ['Reduced paper costs', 'Lower processing time', 'Fewer manual errors', 'Streamlined workflows']
  },
  {
    id: 'speed',
    title: 'Faster Processing',
    subtitle: 'Digital Transformation',
    icon: Zap,
    stat: '10x',
    statLabel: 'Faster Processing',
    desc: 'Accelerate invoice clearance and delivery from days to milliseconds with direct machine-to-machine ZATCA API transmission.',
    pills: ['Sub-second clearance', 'Instant XML dispatch', 'Real-time QR generation', 'Zero manual latency']
  },
  {
    id: 'security',
    title: 'Enhanced Security',
    subtitle: 'Data Protection',
    icon: ShieldCheck,
    stat: '99.9%',
    statLabel: 'Security Level',
    desc: 'Bank-grade cryptographic hashing (SHA-256) and ECDSA digital signatures guarantee invoice authenticity and eliminate fraudulent alterations.',
    pills: ['SHA-256 Hash Chaining', 'ECDSA X.509 Tokens', 'Encrypted Archiving', 'Audit Trail Integrity']
  },
  {
    id: 'analytics',
    title: 'Better Analytics',
    subtitle: 'Business Intelligence',
    icon: BarChart3,
    stat: '360°',
    statLabel: 'Business View',
    desc: 'Consolidate transaction data across all enterprise subsidiaries to gain a comprehensive, real-time picture of tax exposure and cash flow.',
    pills: ['Revenue Telemetry', 'Automated Reconciliation', 'VAT Exposure Dashboards', 'Audit-Ready Reports']
  },
  {
    id: 'compliance',
    title: 'Full Compliance',
    subtitle: 'Government Requirements',
    icon: FileCheck,
    stat: '100%',
    statLabel: 'Compliance Rate',
    desc: 'Guarantee 100% adherence to Saudi Arabia’s official ZATCA (FATOORA) Phase 2 e-invoicing mandate, preventing steep fines and business disruptions.',
    pills: ['Phase 2 Mandate Clearance', 'Standard B2B Clearance', 'Simplified B2C Reporting', 'Zero Penalty Guarantee']
  },
  {
    id: 'eco',
    title: 'Eco-Friendly',
    subtitle: 'Environmental Impact',
    icon: Leaf,
    stat: '90%',
    statLabel: 'Carbon Reduction',
    desc: 'Eliminate physical paper storage, toner usage, and transportation logistics with modern, cloud-native PDF/A-3 digital archiving.',
    pills: ['Zero Paper Waste', 'Digital PDF/A-3 Archival', 'Reduced Carbon Footprint', 'Sustainable ESG Operations']
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

export default function ZatcaIntegrationView() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);

  const currentPhase = compliancePhases[activePhaseIndex];
  const currentBenefit = businessBenefits[activeBenefitIndex];

  return (
    <div className="zatca-view-wrapper">
      
      {/* =========================================================
          1. HERO SECTION: CRYPTOGRAPHIC FATOORA HUB
         ========================================================= */}
      <section className="zatca-hero-section">
        <div className="container position-relative">
          <div className="row align-items-center g-4 g-lg-5">
            {/* Left Copy */}
            <div className="col-lg-6">
              <div className="zatca-eyebrow-pill">
                <span className="zatca-pulse-dot" />
                <span>ZATCA COMPLIANCE EXCELLENCE</span>
              </div>

              <h1 className="zatca-hero-title">
                ZATCA Integration <span className="zatca-gradient-text">Solutions</span>
              </h1>

              <p className="zatca-hero-desc">
                Achieve 100% full ZATCA (FATOORA) Phase 2 e-invoicing compliance with our enterprise integration solutions. We ensure seamless cryptographic clearance and reporting while preserving uninterrupted business velocity.
              </p>

              <div className="zatca-hero-actions d-flex flex-wrap align-items-center gap-3">
                <Link href="/contact-us" className="btn btn-linear hover-up zatca-primary-btn">
                  <span>Schedule ZATCA Consultation</span>
                  <ArrowRight size={17} />
                </Link>
                <a href="#compliance-solutions" className="btn btn-outline-brand hover-up zatca-secondary-btn">
                  <span>Explore Solutions</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="zatca-trust-row">
                <div className="zatca-trust-item">
                  <CheckCircle2 size={16} className="trust-icon" />
                  <span>Phase 2 Cleared</span>
                </div>
                <div className="zatca-trust-item">
                  <CheckCircle2 size={16} className="trust-icon" />
                  <span>UBL 2.1 XML Compliant</span>
                </div>
                <div className="zatca-trust-item">
                  <CheckCircle2 size={16} className="trust-icon" />
                  <span>Sub-Second Latency</span>
                </div>
              </div>
            </div>

            {/* Right Visual: High-Tech Security Clearance Node */}
            <div className="col-lg-6">
              <div className="zatca-hero-visual">
                <div className="visual-core-orb">
                  <div className="core-glow" />
                  <div className="core-icon-box">
                    <ShieldCheck size={42} color="#ffffff" />
                    <span className="core-label">FATOORA</span>
                    <span className="core-sub">PHASE 2 READY</span>
                  </div>
                </div>

                {/* Concentric Security Rings */}
                <div className="visual-ring ring-1" />
                <div className="visual-ring ring-2" />

                {/* Floating Microchips */}
                <div className="floating-chip chip-1">
                  <Lock size={15} color="#00AEEF" />
                  <span>ECDSA Cryptography</span>
                </div>
                <div className="floating-chip chip-2">
                  <FileCheck size={15} color="#00C6FF" />
                  <span>UBL 2.1 XML Validation</span>
                </div>
                <div className="floating-chip chip-3">
                  <Server size={15} color="#2c73d9" />
                  <span>SHA-256 Hash Chain</span>
                </div>
                <div className="floating-chip chip-4">
                  <Zap size={15} color="#10b981" />
                  <span>Instant Clearance &lt;0.3s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. COMPLETE ZATCA COMPLIANCE SOLUTIONS (IMAGE 2)
         ========================================================= */}
      <section id="compliance-solutions" className="zatca-solutions-section">
        <div className="container">
          <div className="text-center mb-4 pb-2">
            <div className="zatca-section-tag">ZATCA INTEGRATION SERVICES</div>
            <h2 className="zatca-section-title">
              Complete ZATCA Compliance <span className="zatca-gradient-text">Solutions</span>
            </h2>
            <p className="zatca-section-desc">
              From Phase 1 foundation setup to Phase 2 automated clearance and ongoing support, we deliver comprehensive integration services ensuring 100% regulatory compliance.
            </p>
          </div>

          {/* Interactive Phase Switcher Tabs */}
          <div className="zatca-tabs-wrapper">
            <div className="zatca-tabs-nav">
              {compliancePhases.map((phase, idx) => {
                const isActive = activePhaseIndex === idx;
                return (
                  <button
                    key={phase.id}
                    type="button"
                    className={`zatca-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActivePhaseIndex(idx)}
                  >
                    <div className="tab-title">{phase.title}</div>
                    <div className="tab-subtitle">{phase.subtitle}</div>
                    {isActive && <span className="tab-active-indicator" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Phase Status Banner */}
          <div className="zatca-phase-status-banner">
            <h3 className="banner-title">{currentPhase.title}</h3>
            <div className="banner-meta">
              <span>Deadline: <strong>{currentPhase.deadline}</strong></span>
              <span className="meta-sep">•</span>
              <span>Status: <strong style={{ color: currentPhase.statusColor }}>{currentPhase.status}</strong></span>
            </div>
          </div>

          {/* 3 Interactive Service Cards */}
          <div className="row g-4">
            {currentPhase.services.map((service, sIdx) => (
              <div key={sIdx} className="col-lg-4 col-md-6">
                <div className="zatca-service-card">
                  <div className="service-card-header">
                    <div className="service-icon-box">
                      {sIdx === 0 && <FileCheck size={26} color="#00AEEF" />}
                      {sIdx === 1 && <Database size={26} color="#00C6FF" />}
                      {sIdx === 2 && <ShieldCheck size={26} color="#2c73d9" />}
                    </div>
                    <div>
                      <h4 className="service-card-title">{service.title}</h4>
                      <div className="service-badges-row">
                        <span className="badge-tier">{service.tier}</span>
                        <span className="badge-timeline">{service.timeline}</span>
                      </div>
                    </div>
                  </div>

                  <p className="service-card-desc">{service.desc}</p>

                  <div className="service-features-grid">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="service-feature-pill">
                        <span className="pill-dot" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. WHY ZATCA COMPLIANCE DRIVES SUCCESS (IMAGE 1)
         ========================================================= */}
      <section className="zatca-benefits-section">
        <div className="container">
          <div className="text-center mb-4 pb-2">
            <div className="zatca-section-tag">BUSINESS VALUE</div>
            <h2 className="zatca-section-title">
              Why ZATCA Compliance <span className="zatca-gradient-text">Drives Success</span>
            </h2>
            <p className="zatca-section-desc">
              Beyond regulatory compliance, ZATCA integration delivers tangible business benefits that enhance operational efficiency, reduce enterprise costs, and drive sustainable growth.
            </p>
          </div>

          <div className="row g-4 g-lg-5">
            {/* Left Column: 6 Clickable Options */}
            <div className="col-lg-5">
              <div className="zatca-benefits-sidebar">
                <h3 className="sidebar-heading">Key Business Benefits</h3>
                <div className="d-flex flex-column gap-3">
                  {businessBenefits.map((benefit, bIdx) => {
                    const Icon = benefit.icon;
                    const isActive = activeBenefitIndex === bIdx;
                    return (
                      <button
                        key={benefit.id}
                        type="button"
                        className={`benefit-option-btn ${isActive ? 'active' : ''}`}
                        onClick={() => setActiveBenefitIndex(bIdx)}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className={`benefit-icon-box ${isActive ? 'active' : ''}`}>
                            <Icon size={22} />
                          </div>
                          <div className="text-start">
                            <div className="benefit-btn-title">{benefit.title}</div>
                            <div className="benefit-btn-sub">{benefit.subtitle}</div>
                          </div>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                          <div className="benefit-btn-stat">{benefit.stat}</div>
                          <span className="benefit-indicator-dot" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Detail Card */}
            <div className="col-lg-7">
              <div className="zatca-benefit-detail-card">
                <div className="detail-header">
                  <div className="detail-icon-box">
                    {React.createElement(currentBenefit.icon, { size: 28 })}
                  </div>
                  <div>
                    <h3 className="detail-title">{currentBenefit.title}</h3>
                    <div className="detail-subtitle">{currentBenefit.subtitle}</div>
                  </div>
                </div>

                <p className="detail-desc">{currentBenefit.desc}</p>

                {/* Highlighted Stat Box */}
                <div className="detail-stat-box">
                  <div className="stat-big-number">{currentBenefit.stat}</div>
                  <div className="stat-big-label">{currentBenefit.statLabel}</div>
                </div>

                {/* 4 Capability Pills */}
                <div className="detail-pills-grid">
                  {currentBenefit.pills.map((pill, pIdx) => (
                    <div key={pIdx} className="detail-pill-item">
                      <CheckCircle2 size={16} className="pill-check" />
                      <span>{pill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. OUR VALUED CLIENTS (MARQUEE - MATCHING HOMEPAGE)
         ========================================================= */}
      <section className="zatca-clients-section">
        <div className="container text-center mb-4">
          <div className="zatca-section-tag">ENTERPRISE TRUST</div>
          <h2 className="zatca-section-title">
            Our <span className="zatca-gradient-text">Valued Clients</span>
          </h2>
          <p className="zatca-section-desc">
            Empowering businesses across Saudi Arabia with certified ZATCA-compliant software solutions and driving digital transformation excellence.
          </p>
        </div>

        <div className="zatca-marquee-wrapper">
          <div className="zatca-marquee-track">
            {[...clientLogos, ...clientLogos].map((cl, idx) => (
              <div className="client-card-wrapper" key={idx}>
                <img src={cl.src} alt={cl.alt} className="client-logo-img" draggable={false} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. BOTTOM CTA SECTION
         ========================================================= */}
      <section className="zatca-cta-section">
        <div className="container">
          <div className="zatca-cta-box text-center">
            <h2 className="cta-title">Ready for Seamless ZATCA Compliance?</h2>
            <p className="cta-desc">
              Connect with our certified Saudi integration specialists today to evaluate your ERP infrastructure, initiate sandbox testing, and secure immediate compliance.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link href="/contact-us" className="btn btn-linear hover-up zatca-primary-btn">
                <span>Book Compliance Consultation</span>
                <ArrowRight size={17} />
              </Link>
              <a href="tel:+966551013823" className="btn btn-outline-brand hover-up zatca-secondary-btn">
                <span>Call Saudi Office (+966-551-013823)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STYLED JSX & DUAL THEME CONTRAST RULES
         ========================================================= */}
      <style jsx>{`
        .zatca-view-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .zatca-section-tag {
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

        .zatca-section-title {
          font-size: clamp(1.85rem, 3vw, 2.5rem);
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 14px;
          line-height: 1.22;
        }

        .zatca-section-desc {
          font-size: 15px;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .zatca-gradient-text {
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* 1. Hero Section */
        .zatca-hero-section {
          padding: 70px 0 60px;
          position: relative;
        }

        .zatca-eyebrow-pill {
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

        .zatca-pulse-dot {
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

        .zatca-hero-title {
          font-size: clamp(2.2rem, 3.8vw, 3.1rem);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.8px;
          margin-bottom: 18px;
        }

        .zatca-hero-desc {
          font-size: 15.5px;
          line-height: 1.65;
          margin-bottom: 28px;
          max-width: 540px;
        }

        .zatca-hero-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .zatca-primary-btn {
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

        .zatca-primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(0, 174, 239, 0.5);
          color: #ffffff !important;
        }

        .zatca-secondary-btn {
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

        .zatca-secondary-btn:hover {
          background: rgba(0, 174, 239, 0.1);
          transform: translateY(-2px);
        }

        .zatca-trust-row {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          padding-top: 18px;
          border-top: 1px solid rgba(148, 163, 184, 0.18);
        }

        .zatca-trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          font-weight: 600;
        }

        .trust-icon {
          color: #00AEEF;
        }

        /* Hero Visual Hub */
        .zatca-hero-visual {
          position: relative;
          width: 100%;
          max-width: 480px;
          height: 420px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-core-orb {
          position: relative;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 50px rgba(0, 174, 239, 0.45);
          z-index: 5;
          text-align: center;
        }

        .core-glow {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00AEEF, transparent, #2c73d9);
          filter: blur(8px);
          opacity: 0.6;
        }

        .core-icon-box {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .core-label {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #ffffff;
          margin-top: 4px;
        }

        .core-sub {
          font-size: 8px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.5px;
        }

        .visual-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(0, 174, 239, 0.25);
          pointer-events: none;
        }

        .ring-1 {
          width: 280px;
          height: 280px;
          animation: spinClockwise 50s linear infinite;
        }

        .ring-2 {
          width: 380px;
          height: 380px;
          animation: spinCounter 40s linear infinite;
        }

        @keyframes spinClockwise { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinCounter { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }

        .floating-chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          z-index: 6;
          white-space: nowrap;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .chip-1 { top: 15%; left: 5%; }
        .chip-2 { top: 15%; right: 5%; }
        .chip-3 { bottom: 15%; left: 8%; }
        .chip-4 { bottom: 15%; right: 8%; }

        /* 2. Solutions Section */
        .zatca-solutions-section {
          padding: 50px 0;
        }

        .zatca-tabs-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }

        .zatca-tabs-nav {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          padding: 6px;
          border-radius: 50px;
        }

        .zatca-tab-btn {
          position: relative;
          padding: 12px 24px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          background: transparent;
          text-align: center;
        }

        .tab-title {
          font-size: 13.5px;
          font-weight: 700;
          line-height: 1.2;
        }

        .tab-subtitle {
          font-size: 11px;
          opacity: 0.8;
          margin-top: 2px;
        }

        .zatca-tab-btn.active {
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          color: #ffffff !important;
          box-shadow: 0 8px 20px rgba(0, 174, 239, 0.35);
        }

        .zatca-phase-status-banner {
          padding: 16px 24px;
          border-radius: 18px;
          margin-bottom: 30px;
          text-align: center;
        }

        .banner-title {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .banner-meta {
          font-size: 13px;
        }

        .meta-sep {
          margin: 0 10px;
          opacity: 0.5;
        }

        .zatca-service-card {
          padding: 30px 24px;
          border-radius: 20px;
          height: 100%;
          transition: all 0.3s ease;
        }

        .zatca-service-card:hover {
          transform: translateY(-5px);
        }

        .service-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .service-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(0, 174, 239, 0.12);
          border: 1px solid rgba(0, 174, 239, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .service-card-title {
          font-size: 16.5px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .service-badges-row {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .badge-tier {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 10px;
          background: linear-gradient(135deg, #00AEEF, #0088C7);
          color: #ffffff;
        }

        .badge-timeline {
          font-size: 10.5px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 10px;
          background: rgba(0, 174, 239, 0.15);
          color: #00AEEF;
        }

        .service-card-desc {
          font-size: 13.5px;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .service-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .service-feature-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          border-radius: 8px;
          font-size: 11.5px;
          font-weight: 500;
        }

        .pill-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00AEEF;
          flex-shrink: 0;
        }

        /* 3. Benefits Section (Interactive) */
        .zatca-benefits-section {
          padding: 50px 0;
        }

        .zatca-benefits-sidebar {
          padding: 24px;
          border-radius: 22px;
        }

        .sidebar-heading {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 18px;
          text-align: center;
        }

        .benefit-option-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-radius: 16px;
          border: 1px solid transparent;
          background: transparent;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .benefit-option-btn:hover {
          transform: translateX(4px);
        }

        .benefit-option-btn.active {
          border-color: #00AEEF !important;
          background: rgba(0, 174, 239, 0.1) !important;
          box-shadow: 0 4px 16px rgba(0, 174, 239, 0.15);
        }

        .benefit-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }

        .benefit-icon-box.active {
          background: linear-gradient(135deg, #00AEEF, #2c73d9) !important;
          color: #ffffff !important;
        }

        .benefit-btn-title {
          font-size: 14.5px;
          font-weight: 700;
          line-height: 1.2;
        }

        .benefit-btn-sub {
          font-size: 11px;
          color: #00AEEF;
          margin-top: 2px;
        }

        .benefit-btn-stat {
          font-size: 15px;
          font-weight: 800;
          color: #00AEEF;
        }

        .benefit-indicator-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00AEEF;
          opacity: 0.4;
        }

        .benefit-option-btn.active .benefit-indicator-dot {
          opacity: 1;
          box-shadow: 0 0 8px #00AEEF;
        }

        /* Right Detail Card */
        .zatca-benefit-detail-card {
          padding: 38px 32px;
          border-radius: 22px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
        }

        .detail-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .detail-icon-box {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          background: linear-gradient(135deg, #00AEEF, #2c73d9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 10px 24px rgba(0, 174, 239, 0.35);
        }

        .detail-title {
          font-size: clamp(1.6rem, 2.3vw, 2.1rem);
          font-weight: 800;
          margin-bottom: 4px;
        }

        .detail-subtitle {
          font-size: 13.5px;
          font-weight: 600;
          color: #00AEEF;
        }

        .detail-desc {
          font-size: 14.5px;
          line-height: 1.68;
          margin-bottom: 24px;
        }

        .detail-stat-box {
          padding: 24px;
          border-radius: 16px;
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          color: #ffffff;
          text-align: center;
          margin-bottom: 24px;
          box-shadow: 0 10px 26px rgba(0, 174, 239, 0.3);
        }

        .stat-big-number {
          font-size: clamp(2.5rem, 3.5vw, 3.2rem);
          font-weight: 900;
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-big-label {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .detail-pills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .detail-pill-item {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 12.5px;
          font-weight: 600;
        }

        .pill-check {
          color: #00AEEF;
          flex-shrink: 0;
        }

        /* 4. Marquee Section */
        .zatca-clients-section {
          padding: 45px 0;
          overflow: hidden;
        }

        .zatca-marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
        }

        .zatca-marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .zatca-marquee-wrapper:hover .zatca-marquee-track {
          animation-play-state: paused;
        }

        /* 5. CTA Section */
        .zatca-cta-section {
          padding: 50px 0 30px;
        }

        .zatca-cta-box {
          padding: 44px 30px;
          border-radius: 22px;
        }

        .cta-title {
          font-size: clamp(1.8rem, 2.6vw, 2.3rem);
          font-weight: 800;
          margin-bottom: 12px;
        }

        .cta-desc {
          font-size: 15px;
          max-width: 650px;
          margin: 0 auto 24px;
          line-height: 1.6;
        }

        @media (max-width: 767px) {
          .detail-pills-grid,
          .service-features-grid {
            grid-template-columns: 1fr;
          }
          .zatca-hero-visual {
            height: 360px;
          }
          .ring-1 { width: 220px; height: 220px; }
          .ring-2 { width: 300px; height: 300px; }
        }
      `}</style>

      {/* Global Dual Theme Overrides */}
      <style jsx global>{`
        /* ---------------- DARK THEME ---------------- */
        [data-theme="dark"] .zatca-view-wrapper {
          background-color: #060c18;
          color: #e2e8f0;
        }

        [data-theme="dark"] .zatca-hero-title,
        [data-theme="dark"] .zatca-section-title,
        [data-theme="dark"] .banner-title,
        [data-theme="dark"] .service-card-title,
        [data-theme="dark"] .sidebar-heading,
        [data-theme="dark"] .benefit-btn-title,
        [data-theme="dark"] .detail-title,
        [data-theme="dark"] .cta-title {
          color: #ffffff !important;
        }

        [data-theme="dark"] .zatca-hero-desc,
        [data-theme="dark"] .zatca-section-desc,
        [data-theme="dark"] .service-card-desc,
        [data-theme="dark"] .detail-desc,
        [data-theme="dark"] .cta-desc {
          color: #94a3b8 !important;
        }

        [data-theme="dark"] .zatca-trust-item,
        [data-theme="dark"] .service-feature-pill span,
        [data-theme="dark"] .detail-pill-item span {
          color: #cbd5e1 !important;
        }

        [data-theme="dark"] .floating-chip {
          background: rgba(13, 24, 48, 0.85);
          border: 1px solid rgba(0, 174, 239, 0.3);
          color: #ffffff;
        }

        [data-theme="dark"] .zatca-tabs-nav {
          background: rgba(13, 24, 48, 0.8);
          border: 1px solid rgba(0, 174, 239, 0.25);
        }

        [data-theme="dark"] .zatca-tab-btn {
          color: #94a3b8;
        }
        [data-theme="dark"] .zatca-tab-btn:hover {
          color: #ffffff;
        }

        [data-theme="dark"] .zatca-phase-status-banner {
          background: rgba(0, 174, 239, 0.08);
          border: 1px solid rgba(0, 174, 239, 0.25);
          color: #cbd5e1;
        }

        [data-theme="dark"] .zatca-service-card,
        [data-theme="dark"] .zatca-benefits-sidebar,
        [data-theme="dark"] .zatca-benefit-detail-card,
        [data-theme="dark"] .zatca-cta-box {
          background: rgba(13, 24, 48, 0.65);
          border: 1.5px solid rgba(0, 174, 239, 0.2);
          backdrop-filter: blur(12px);
        }

        [data-theme="dark"] .service-feature-pill,
        [data-theme="dark"] .detail-pill-item {
          background: rgba(0, 174, 239, 0.08);
          border: 1px solid rgba(0, 174, 239, 0.18);
        }

        [data-theme="dark"] .benefit-icon-box {
          background: rgba(0, 174, 239, 0.15);
          color: #00AEEF;
        }

        [data-theme="dark"] .benefit-option-btn {
          color: #cbd5e1;
        }


        /* ---------------- LIGHT THEME ---------------- */
        [data-theme="light"] .zatca-view-wrapper,
        :root:not([data-theme="dark"]) .zatca-view-wrapper {
          background-color: #f8fafc;
          color: #334155;
        }

        [data-theme="light"] .zatca-hero-title,
        :root:not([data-theme="dark"]) .zatca-hero-title,
        [data-theme="light"] .zatca-section-title,
        :root:not([data-theme="dark"]) .zatca-section-title,
        [data-theme="light"] .banner-title,
        :root:not([data-theme="dark"]) .banner-title,
        [data-theme="light"] .service-card-title,
        :root:not([data-theme="dark"]) .service-card-title,
        [data-theme="light"] .sidebar-heading,
        :root:not([data-theme="dark"]) .sidebar-heading,
        [data-theme="light"] .benefit-btn-title,
        :root:not([data-theme="dark"]) .benefit-btn-title,
        [data-theme="light"] .detail-title,
        :root:not([data-theme="dark"]) .detail-title,
        [data-theme="light"] .cta-title,
        :root:not([data-theme="dark"]) .cta-title {
          color: #0f172a !important;
        }

        [data-theme="light"] .zatca-hero-desc,
        :root:not([data-theme="dark"]) .zatca-hero-desc,
        [data-theme="light"] .zatca-section-desc,
        :root:not([data-theme="dark"]) .zatca-section-desc,
        [data-theme="light"] .service-card-desc,
        :root:not([data-theme="dark"]) .service-card-desc,
        [data-theme="light"] .detail-desc,
        :root:not([data-theme="dark"]) .detail-desc,
        [data-theme="light"] .cta-desc,
        :root:not([data-theme="dark"]) .cta-desc {
          color: #475569 !important;
        }

        [data-theme="light"] .zatca-trust-item,
        :root:not([data-theme="dark"]) .zatca-trust-item,
        [data-theme="light"] .service-feature-pill span,
        :root:not([data-theme="dark"]) .service-feature-pill span,
        [data-theme="light"] .detail-pill-item span,
        :root:not([data-theme="dark"]) .detail-pill-item span {
          color: #1e293b !important;
        }

        [data-theme="light"] .floating-chip,
        :root:not([data-theme="dark"]) .floating-chip {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #0f172a;
        }

        [data-theme="light"] .zatca-tabs-nav,
        :root:not([data-theme="dark"]) .zatca-tabs-nav {
          background: #e2e8f0;
          border: 1px solid #cbd5e1;
        }

        [data-theme="light"] .zatca-tab-btn,
        :root:not([data-theme="dark"]) .zatca-tab-btn {
          color: #475569;
        }
        [data-theme="light"] .zatca-tab-btn:hover,
        :root:not([data-theme="dark"]) .zatca-tab-btn:hover {
          color: #0f172a;
        }

        [data-theme="light"] .zatca-phase-status-banner,
        :root:not([data-theme="dark"]) .zatca-phase-status-banner {
          background: #f0f9ff;
          border: 1.5px solid #bae6fd;
          color: #0f172a;
        }

        [data-theme="light"] .zatca-service-card,
        :root:not([data-theme="dark"]) .zatca-service-card,
        [data-theme="light"] .zatca-benefits-sidebar,
        :root:not([data-theme="dark"]) .zatca-benefits-sidebar,
        [data-theme="light"] .zatca-benefit-detail-card,
        :root:not([data-theme="dark"]) .zatca-benefit-detail-card,
        [data-theme="light"] .zatca-cta-box,
        :root:not([data-theme="dark"]) .zatca-cta-box {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        [data-theme="light"] .service-feature-pill,
        :root:not([data-theme="dark"]) .service-feature-pill,
        [data-theme="light"] .detail-pill-item,
        :root:not([data-theme="dark"]) .detail-pill-item {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }

        [data-theme="light"] .benefit-icon-box,
        :root:not([data-theme="dark"]) .benefit-icon-box {
          background: #f0f9ff;
          color: #0284c7;
        }

        [data-theme="light"] .benefit-option-btn,
        :root:not([data-theme="dark"]) .benefit-option-btn {
          color: #0f172a;
        }

      `}</style>
    </div>
  );
}
