import React, { useState } from 'react';
import Link from 'next/link';
import {
  Database, RefreshCw, Layers, Zap, Sliders,
  ShieldCheck, CheckCircle2, ArrowRight, Server,
  Code2, Cpu, Globe, Check, ExternalLink,
  ChevronRight, Sparkles, Building2, Award,
  Activity, Lock
} from 'lucide-react';

const odooSolutionCategories = [
  {
    id: 'core',
    name: 'Core Integration Services',
    description: 'Fundamental architecture for real-time synchronization, multi-company consolidation, and schema mapping.',
    cards: [
      {
        title: 'Real-time Data Synchronization',
        complexity: 'ADVANCED',
        timeline: '2-3 Weeks',
        icon: RefreshCw,
        desc: 'Bi-directional real-time sync between multiple Odoo instances with automated conflict resolution and data integrity checks.',
        features: ['Live Data Sync', 'Conflict Resolution', 'Data Validation', 'Error Handling']
      },
      {
        title: 'Multi-Company Architecture',
        complexity: 'EXPERT',
        timeline: '3-4 Weeks',
        icon: Building2,
        desc: 'Complex multi-company setups with shared master data, automated inter-company transactions, and hierarchical structures.',
        features: ['Company Hierarchies', 'Shared Resources', 'Inter-company Billing', 'Consolidated Reporting']
      },
      {
        title: 'Advanced Data Mapping',
        complexity: 'ADVANCED',
        timeline: '1-2 Weeks',
        icon: Database,
        desc: 'Intelligent field mapping with custom transformations, syntactic validation rules, and automated data cleansing.',
        features: ['Smart Field Mapping', 'Data Transformation', 'Validation Rules', 'Auto Cleansing']
      }
    ]
  },
  {
    id: 'technical',
    name: 'Technical Solutions',
    description: 'Deep technical infrastructure including custom API bridges, automated ETL pipelines, and webhook handlers.',
    cards: [
      {
        title: 'Custom API Bridges & Webhooks',
        complexity: 'ADVANCED',
        timeline: '2 Weeks',
        icon: Code2,
        desc: 'Event-driven webhooks and RESTful/XML-RPC API bridges ensuring sub-second transaction dispatch between environments.',
        features: ['Webhook Listeners', 'Tokenized Auth', 'Payload Formatting', 'Retry Queues']
      },
      {
        title: 'Database Consolidation & ETL',
        complexity: 'EXPERT',
        timeline: '3-4 Weeks',
        icon: Server,
        desc: 'High-throughput batch and stream ETL migration between PostgreSQL databases with zero data downtime.',
        features: ['Schema Normalization', 'ETL Validation', 'Index Optimization', 'Rollback Safeguards']
      },
      {
        title: 'Automated Conflict Reconciliation',
        complexity: 'ADVANCED',
        timeline: '1-2 Weeks',
        icon: Sliders,
        desc: 'Deterministic timestamp and business-rule validation engines preventing record overwrites during concurrent edits.',
        features: ['Timestamp Verification', 'Rule Engines', 'Audit Trail Logging', 'Discrepancy Alerts']
      }
    ]
  },
  {
    id: 'business',
    name: 'Business Solutions',
    description: 'Enterprise operational workflows covering inter-company trade, group financial reporting, and unified stock.',
    cards: [
      {
        title: 'Inter-Company Automated Billing',
        complexity: 'INTERMEDIATE',
        timeline: '1-2 Weeks',
        icon: Zap,
        desc: 'Automated generation of mirrored sales and purchase orders, vendor bills, and internal transfers across subsidiaries.',
        features: ['Automated Invoicing', 'Cross-Entity PO/SO', 'Currency Conversions', 'Transfer Ledgers']
      },
      {
        title: 'Unified Financial Reporting',
        complexity: 'EXPERT',
        timeline: '2-3 Weeks',
        icon: Award,
        desc: 'Consolidated balance sheets, P&L statements, and cash flow telemetry combining multiple Odoo enterprise databases.',
        features: ['Consolidated P&L', 'Group Balance Sheets', 'Multi-Currency FX', 'Executive Dashboards']
      },
      {
        title: 'Omnichannel Inventory Allocation',
        complexity: 'ADVANCED',
        timeline: '2 Weeks',
        icon: Layers,
        desc: 'Centralized stock visibility across all business units, automated inter-warehouse replenishment, and safety buffers.',
        features: ['Real-time Stock Levels', 'Auto-Replenishment', 'Transfer Orders', 'Traceability Lots']
      }
    ]
  }
];

const complexityGuides = [
  {
    level: 'INTERMEDIATE',
    subtitle: 'Standard integrations with moderate customization',
    icon: Zap,
    color: '#00AEEF',
    desc: 'Ideal for standard Odoo-to-Odoo connections, standard chart of accounts sync, and single-currency transaction flow.'
  },
  {
    level: 'ADVANCED',
    subtitle: 'Complex setups with custom development required',
    icon: Sliders,
    color: '#00C6FF',
    desc: 'Engineered for high-volume transactions, custom field transformations, event-driven webhooks, and automated reconciliations.'
  },
  {
    level: 'EXPERT',
    subtitle: 'Enterprise-level with extensive customization',
    icon: ShieldCheck,
    color: '#2c73d9',
    desc: 'Bespoke multi-national setups, multi-currency consolidations, high-availability database replication, and custom security protocols.'
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

export default function OdooToOdooView() {
  const [activeTab, setActiveTab] = useState('core');

  const selectedCategory = odooSolutionCategories.find(c => c.id === activeTab) || odooSolutionCategories[0];

  return (
    <div className="odoo-view-wrapper">
      
      {/* =========================================================
          1. HERO SECTION: ODOO BRIDGE VISUAL
         ========================================================= */}
      <section className="odoo-hero-section">
        <div className="container position-relative">
          <div className="row align-items-center g-4 g-lg-5">
            {/* Left Copy */}
            <div className="col-lg-6">
              <div className="odoo-eyebrow-pill">
                <span className="odoo-pulse-dot" />
                <span>ENTERPRISE ERP SYNCHRONIZATION</span>
              </div>

              <h1 className="odoo-hero-title">
                Odoo-to-Odoo <span className="odoo-gradient-text">Integration</span>
              </h1>

              <p className="odoo-hero-desc">
                Connect and synchronize multiple Odoo databases seamlessly. We build high-throughput bi-directional data pipelines, multi-company ledger bridges, and real-time inventory allocation networks with zero data loss.
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                <Link 
                  href="/contact-us" 
                  className="btn btn-linear hover-up odoo-hero-btn"
                >
                  Consult Odoo Architects <ArrowRight size={17} />
                </Link>
                <a 
                  href="#solutions-grid" 
                  className="btn btn-outline-brand odoo-hero-secondary-btn"
                >
                  Explore Solutions
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="odoo-trust-row">
                <div className="odoo-trust-item">
                  <CheckCircle2 size={16} className="trust-icon" />
                  <span>Odoo V14 - V17 Compatible</span>
                </div>
                <div className="odoo-trust-item">
                  <CheckCircle2 size={16} className="trust-icon" />
                  <span>Sub-Second Sync SLA</span>
                </div>
                <div className="odoo-trust-item">
                  <CheckCircle2 size={16} className="trust-icon" />
                  <span>PostgreSQL Master Sync</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Enterprise Dual-Instance Synchronization Architecture */}
            <div className="col-lg-6">
              <div className="odoo-architecture-canvas">
                {/* Ambient Background Glow */}
                <div className="arch-glow-radial" />

                {/* Top Status Header */}
                <div className="arch-top-bar">
                  <div className="arch-status-badge">
                    <span className="live-dot" />
                    <span>ACTIVE BI-DIRECTIONAL BRIDGE</span>
                  </div>
                  <div className="arch-telemetry-tag">
                    <Activity size={12} />
                    <span>0.2s Latency SLA</span>
                  </div>
                </div>

                {/* Main 3-Column Visual Layout */}
                <div className="arch-nodes-wrapper">
                  {/* Left Node: Instance A (HQ) */}
                  <div className="arch-node-card node-hq">
                    <div className="node-card-head">
                      <div className="node-icon-wrapper hq-icon">
                        <Database size={17} />
                      </div>
                      <div className="node-title-group">
                        <span className="node-name">Odoo Instance A</span>
                        <span className="node-subtitle">HQ (KSA)</span>
                      </div>
                      <span className="node-status-pill">Master</span>
                    </div>

                    <div className="node-metrics-list">
                      <div className="node-metric-item">
                        <span className="metric-bullet" />
                        <span className="metric-label">Sales & Invoices</span>
                        <span className="metric-val">Live</span>
                      </div>
                      <div className="node-metric-item">
                        <span className="metric-bullet" />
                        <span className="metric-label">Master Contacts</span>
                        <span className="metric-val">Synced</span>
                      </div>
                      <div className="node-metric-item">
                        <span className="metric-bullet" />
                        <span className="metric-label">General Ledger</span>
                        <span className="metric-val">Mirrored</span>
                      </div>
                    </div>

                    <div className="node-card-footer">
                      <span className="footer-env">PostgreSQL 16</span>
                      <span className="footer-ping">99.99% Uptime</span>
                    </div>
                  </div>

                  {/* Center Node: Sync Engine Conduit */}
                  <div className="arch-center-conduit">
                    {/* Top data stream line with animated particle */}
                    <div className="conduit-channel top-channel">
                      <div className="conduit-wire" />
                      <div className="conduit-packet packet-right" />
                      <span className="channel-tooltip">SO / Invoices →</span>
                    </div>

                    {/* Central Sync Orb */}
                    <div className="sync-core-orb">
                      <div className="sync-core-ring" />
                      <div className="sync-core-inner">
                        <RefreshCw size={22} color="#ffffff" className="sync-rotate-icon" />
                        <span className="sync-core-text">SYNC</span>
                      </div>
                    </div>

                    {/* Bottom data stream line with animated particle (opposite) */}
                    <div className="conduit-channel bottom-channel">
                      <div className="conduit-wire" />
                      <div className="conduit-packet packet-left" />
                      <span className="channel-tooltip">← Stock / Orders</span>
                    </div>

                    <div className="conduit-label-badge">
                      <span>Real-Time ETL</span>
                    </div>
                  </div>

                  {/* Right Node: Instance B (Subsidiary) */}
                  <div className="arch-node-card node-branch">
                    <div className="node-card-head">
                      <div className="node-icon-wrapper branch-icon">
                        <Server size={17} />
                      </div>
                      <div className="node-title-group">
                        <span className="node-name">Odoo Instance B</span>
                        <span className="node-subtitle">Subsidiary Unit</span>
                      </div>
                      <span className="node-status-pill subsidiary">Replica</span>
                    </div>

                    <div className="node-metrics-list">
                      <div className="node-metric-item">
                        <span className="metric-bullet" />
                        <span className="metric-label">Inter-Co PO/SO</span>
                        <span className="metric-val">Active</span>
                      </div>
                      <div className="node-metric-item">
                        <span className="metric-bullet" />
                        <span className="metric-label">Stock Allocations</span>
                        <span className="metric-val">Synced</span>
                      </div>
                      <div className="node-metric-item">
                        <span className="metric-bullet" />
                        <span className="metric-label">Multi-Currency FX</span>
                        <span className="metric-val">Auto</span>
                      </div>
                    </div>

                    <div className="node-card-footer">
                      <span className="footer-env">REST & Webhooks</span>
                      <span className="footer-ping">0 Pending</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Telemetry Bar */}
                <div className="arch-bottom-telemetry">
                  <div className="telemetry-chip">
                    <ShieldCheck size={13} className="chip-icon" />
                    <span>Zero Data Loss Protocol</span>
                  </div>
                  <div className="telemetry-chip">
                    <Lock size={13} className="chip-icon" />
                    <span>TLS 1.3 End-to-End Encryption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. COMPREHENSIVE SOLUTIONS WITH 3 CLICKABLE TABS (IMAGE 4)
         ========================================================= */}
      <section id="solutions-grid" className="odoo-solutions-section">
        <div className="container">
          <div className="text-center mb-4 pb-2">
            <div className="odoo-section-tag">COMPREHENSIVE CAPABILITIES</div>
            <h2 className="odoo-section-title">
              Comprehensive Odoo-to-Odoo <span className="odoo-gradient-text">Solutions</span>
            </h2>
            <p className="odoo-section-desc">
              Whether synchronizing multiple subsidiaries or executing continuous database replication, our battle-tested integration services guarantee zero operational disruption.
            </p>
          </div>

          {/* 3 Clickable Category Tabs */}
          <div className="odoo-tabs-container">
            <div className="odoo-tabs-nav">
              {odooSolutionCategories.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className={`odoo-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveTab(cat.id)}
                  >
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subtitle Description */}
          <div className="text-center mb-4">
            <p className="category-sub-desc">{selectedCategory.description}</p>
          </div>

          {/* 3 Cards for the Active Category */}
          <div className="row g-4 mb-5">
            {selectedCategory.cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="col-lg-4 col-md-6">
                  <div className="odoo-service-card">
                    <div className="service-card-header">
                      <div className="service-icon-box">
                        <Icon size={26} color="#00AEEF" />
                      </div>
                      <div>
                        <h4 className="service-card-title">{card.title}</h4>
                        <div className="service-badges-row">
                          <span className={`badge-complexity complexity-${card.complexity.toLowerCase()}`}>
                            {card.complexity}
                          </span>
                          <span className="badge-timeline">{card.timeline}</span>
                        </div>
                      </div>
                    </div>

                    <p className="service-card-desc">{card.desc}</p>

                    <div className="service-features-grid">
                      {card.features.map((feat, fIdx) => (
                        <div key={fIdx} className="service-feature-pill">
                          <span className="pill-dot" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =========================================================
              3. SERVICE COMPLEXITY GUIDE WITH REAL ICONS (IMAGE 4)
             ========================================================= */}
          <div className="complexity-guide-wrapper">
            <h3 className="complexity-guide-title">Service Complexity Guide</h3>
            <div className="row g-4">
              {complexityGuides.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="col-lg-4 col-md-6">
                    <div className="complexity-card">
                      {/* Real Lucide Icon inside glowing badge */}
                      <div className="complexity-icon-box" style={{ background: `linear-gradient(135deg, ${item.color}, #0088C7)` }}>
                        <Icon size={24} color="#ffffff" />
                      </div>
                      <h4 className="complexity-level" style={{ color: item.color }}>{item.level}</h4>
                      <p className="complexity-sub">{item.subtitle}</p>
                      <p className="complexity-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          4. OUR VALUED CLIENTS (HOMEPAGE-MATCHING MARQUEE)
         ========================================================= */}
      <section className="odoo-clients-section">
        <div className="container text-center mb-4">
          <div className="odoo-section-tag">PROVEN ENTERPRISE IMPACT</div>
          <h2 className="odoo-section-title">
            Trusted by <span className="odoo-gradient-text">Leading Companies</span>
          </h2>
          <p className="odoo-section-desc">
            Architecting mission-critical Odoo integrations for regional enterprises across retail, healthcare, manufacturing, and logistics.
          </p>
        </div>

        <div className="odoo-marquee-wrapper">
          <div className="odoo-marquee-track">
            {[...clientLogos, ...clientLogos].map((cl, idx) => (
              <div className="client-card-wrapper" key={idx}>
                <img src={cl.src} alt={cl.alt} className="client-logo-img" draggable={false} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. CTA SECTION
         ========================================================= */}
      <section className="odoo-cta-section">
        <div className="container">
          <div className="odoo-cta-box text-center">
            <h2 className="cta-title">Ready to Integrate Your Odoo Instances?</h2>
            <p className="cta-desc">
              Speak with our senior Odoo solution architects to design a zero-downtime integration architecture tailored to your multi-company structure.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link href="/contact-us" className="btn btn-linear hover-up odoo-hero-btn">
                Request Architecture Review <ArrowRight size={17} />
              </Link>
              <a href="tel:+966551013823" className="btn btn-outline-brand odoo-hero-secondary-btn">
                Direct Hotline (+966-551-013823)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STYLED JSX & DUAL THEME CONTRAST RULES
         ========================================================= */}
      <style jsx>{`
        .odoo-view-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .odoo-section-tag {
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

        .odoo-section-title {
          font-size: clamp(1.85rem, 3vw, 2.5rem);
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 14px;
          line-height: 1.22;
        }

        .odoo-section-desc {
          font-size: 15px;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .category-sub-desc {
          font-size: 14.5px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .odoo-gradient-text {
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* 1. Hero Section */
        .odoo-hero-section {
          padding: 70px 0 60px;
          position: relative;
        }

        .odoo-eyebrow-pill {
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

        .odoo-pulse-dot {
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

        .odoo-hero-title {
          font-size: clamp(2.2rem, 3.8vw, 3.1rem);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.8px;
          margin-bottom: 18px;
        }

        .odoo-hero-desc {
          font-size: 15.5px;
          line-height: 1.65;
          margin-bottom: 28px;
          max-width: 540px;
        }

        .odoo-hero-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .odoo-hero-btn {
          padding: 14px 30px;
          font-size: 14.5px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border-radius: 12px;
        }

        .odoo-hero-secondary-btn {
          padding: 13px 26px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .odoo-trust-row {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          padding-top: 18px;
          border-top: 1px solid rgba(148, 163, 184, 0.18);
        }

        .odoo-trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          font-weight: 600;
        }

        .trust-icon {
          color: #00AEEF;
        }

        /* Enterprise Architecture Canvas Visual */
        .odoo-architecture-canvas {
          position: relative;
          width: 100%;
          max-width: 580px;
          margin: 0 auto;
          padding: 24px 22px;
          border-radius: 24px;
          background: rgba(13, 24, 48, 0.7);
          border: 1px solid rgba(0, 174, 239, 0.25);
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .arch-glow-radial {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(0, 174, 239, 0.18) 0%, rgba(44, 115, 217, 0.05) 50%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        /* Top Bar */
        .arch-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          margin-bottom: 18px;
          border-bottom: 1px solid rgba(0, 174, 239, 0.15);
          position: relative;
          z-index: 2;
        }

        .arch-status-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.8px;
          color: #00E5FF;
        }

        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #00E5FF;
          box-shadow: 0 0 10px #00E5FF;
          animation: pulseAnim 1.8s infinite;
        }

        .arch-telemetry-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #94a3b8;
        }

        /* 3-Column Nodes Wrapper */
        .arch-nodes-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          position: relative;
          z-index: 2;
          margin-bottom: 18px;
        }

        /* Node Cards */
        .arch-node-card {
          flex: 1;
          min-width: 0;
          padding: 16px 14px;
          border-radius: 16px;
          background: rgba(15, 30, 60, 0.85);
          border: 1px solid rgba(0, 174, 239, 0.25);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .arch-node-card:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 174, 239, 0.5);
        }

        .node-card-head {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 12px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .node-icon-wrapper {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .node-icon-wrapper.hq-icon {
          background: rgba(0, 174, 239, 0.15);
          color: #00AEEF;
          border: 1px solid rgba(0, 174, 239, 0.3);
        }

        .node-icon-wrapper.branch-icon {
          background: rgba(44, 115, 217, 0.15);
          color: #3b82f6;
          border: 1px solid rgba(44, 115, 217, 0.3);
        }

        .node-title-group {
          flex: 1;
          min-width: 0;
        }

        .node-name {
          display: block;
          font-size: 12.5px;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .node-subtitle {
          display: block;
          font-size: 10px;
          color: #94a3b8;
          line-height: 1.2;
        }

        .node-status-pill {
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          padding: 2px 7px;
          border-radius: 20px;
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
          letter-spacing: 0.4px;
        }

        .node-status-pill.subsidiary {
          background: rgba(0, 174, 239, 0.15);
          color: #00E5FF;
          border-color: rgba(0, 174, 239, 0.3);
        }

        /* Metrics List */
        .node-metrics-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 12px;
        }

        .node-metric-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10.5px;
        }

        .metric-bullet {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #00AEEF;
          flex-shrink: 0;
        }

        .metric-label {
          color: #cbd5e1;
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .metric-val {
          font-weight: 700;
          color: #10b981;
          font-size: 10px;
        }

        .node-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 9.5px;
          color: #64748b;
          font-weight: 600;
        }

        .footer-ping {
          color: #00E5FF;
        }

        /* Center Conduit */
        .arch-center-conduit {
          width: 96px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .conduit-channel {
          position: relative;
          width: 100%;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .conduit-channel.top-channel {
          margin-bottom: 8px;
        }

        .conduit-channel.bottom-channel {
          margin-top: 8px;
        }

        .conduit-wire {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: rgba(0, 174, 239, 0.3);
          border-radius: 2px;
        }

        .conduit-packet {
          position: absolute;
          width: 20px;
          height: 4px;
          border-radius: 4px;
          background: linear-gradient(90deg, transparent, #00E5FF, transparent);
          box-shadow: 0 0 8px #00E5FF;
        }

        .packet-right {
          animation: flowRight 2.2s ease-in-out infinite;
        }

        .packet-left {
          animation: flowLeft 2.2s ease-in-out infinite;
        }

        @keyframes flowRight {
          0% { left: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: calc(100% - 20px); opacity: 0; }
        }

        @keyframes flowLeft {
          0% { right: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { right: calc(100% - 20px); opacity: 0; }
        }

        .channel-tooltip {
          font-size: 8px;
          font-weight: 700;
          color: #00E5FF;
          white-space: nowrap;
          background: rgba(6, 12, 24, 0.9);
          padding: 1px 5px;
          border-radius: 4px;
          border: 1px solid rgba(0, 229, 255, 0.3);
          position: relative;
          z-index: 3;
          letter-spacing: 0.2px;
        }

        .sync-core-orb {
          position: relative;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
        }

        .sync-core-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px dashed rgba(0, 229, 255, 0.6);
          animation: spinCounter 10s linear infinite;
        }

        .sync-core-inner {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 24px rgba(0, 174, 239, 0.6);
        }

        .sync-rotate-icon {
          animation: spinCounter 6s linear infinite;
        }

        .sync-core-text {
          font-size: 7px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.6px;
          margin-top: 1px;
        }

        .conduit-label-badge {
          margin-top: 6px;
          font-size: 8.5px;
          font-weight: 800;
          color: #00E5FF;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* Bottom Telemetry Bar */
        .arch-bottom-telemetry {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid rgba(0, 174, 239, 0.15);
          position: relative;
          z-index: 2;
          flex-wrap: wrap;
        }

        .telemetry-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          padding: 4px 10px;
          border-radius: 20px;
          background: rgba(0, 174, 239, 0.06);
          border: 1px solid rgba(0, 174, 239, 0.18);
        }

        .chip-icon {
          color: #00E5FF;
          flex-shrink: 0;
        }

        /* 2. Solutions Tabs */
        .odoo-solutions-section {
          padding: 50px 0;
        }

        .odoo-tabs-container {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .odoo-tabs-nav {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          padding: 6px;
          border-radius: 50px;
        }

        .odoo-tab-btn {
          padding: 12px 26px;
          border-radius: 50px;
          border: none;
          font-size: 14.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          background: transparent;
        }

        .odoo-tab-btn.active {
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          color: #ffffff !important;
          box-shadow: 0 8px 20px rgba(0, 174, 239, 0.35);
        }

        .odoo-service-card {
          padding: 30px 24px;
          border-radius: 20px;
          height: 100%;
          transition: all 0.3s ease;
        }

        .odoo-service-card:hover {
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
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .service-badges-row {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .badge-complexity {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 10px;
          color: #ffffff;
        }

        .complexity-intermediate { background: #00AEEF; }
        .complexity-advanced { background: #0088C7; }
        .complexity-expert { background: #2c73d9; }

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

        /* 3. Complexity Guide */
        .complexity-guide-wrapper {
          padding: 36px 30px;
          border-radius: 24px;
        }

        .complexity-guide-title {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 28px;
          text-align: center;
        }

        .complexity-card {
          padding: 26px 20px;
          border-radius: 18px;
          text-align: center;
          height: 100%;
          transition: all 0.3s ease;
        }

        .complexity-card:hover {
          transform: translateY(-4px);
        }

        .complexity-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          box-shadow: 0 8px 20px rgba(0, 174, 239, 0.3);
        }

        .complexity-level {
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }

        .complexity-sub {
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 10px;
          line-height: 1.4;
        }

        .complexity-desc {
          font-size: 12.5px;
          line-height: 1.5;
          margin-bottom: 0;
        }

        /* 4. Marquee Section */
        .odoo-clients-section {
          padding: 45px 0;
          overflow: hidden;
        }

        .odoo-marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
        }

        .odoo-marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .odoo-marquee-wrapper:hover .odoo-marquee-track {
          animation-play-state: paused;
        }

        /* 5. CTA Section */
        .odoo-cta-section {
          padding: 50px 0 30px;
        }

        .odoo-cta-box {
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

        @media (max-width: 991px) {
          .odoo-architecture-canvas {
            max-width: 100%;
            margin-top: 15px;
          }
        }

        @media (max-width: 767px) {
          .service-features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 575px) {
          .arch-nodes-wrapper {
            flex-direction: column;
            gap: 16px;
          }
          .arch-center-conduit {
            width: 100%;
            flex-direction: row;
            gap: 12px;
          }
          .conduit-channel {
            display: none;
          }
          .arch-node-card {
            width: 100%;
          }
          .arch-bottom-telemetry {
            flex-direction: column;
            gap: 8px;
            align-items: flex-start;
          }
        }
      `}</style>

      {/* Global Dual Theme Overrides */}
      <style jsx global>{`
        /* ---------------- DARK THEME ---------------- */
        [data-theme="dark"] .odoo-view-wrapper {
          background-color: #060c18;
          color: #e2e8f0;
        }

        [data-theme="dark"] .odoo-hero-title,
        [data-theme="dark"] .odoo-section-title,
        [data-theme="dark"] .service-card-title,
        [data-theme="dark"] .complexity-guide-title,
        [data-theme="dark"] .instance-header span,
        [data-theme="dark"] .cta-title {
          color: #ffffff !important;
        }

        [data-theme="dark"] .odoo-hero-desc,
        [data-theme="dark"] .odoo-section-desc,
        [data-theme="dark"] .category-sub-desc,
        [data-theme="dark"] .service-card-desc,
        [data-theme="dark"] .complexity-desc,
        [data-theme="dark"] .instance-meta,
        [data-theme="dark"] .cta-desc {
          color: #94a3b8 !important;
        }

        [data-theme="dark"] .complexity-sub {
          color: #cbd5e1 !important;
        }

        [data-theme="dark"] .odoo-trust-item,
        [data-theme="dark"] .service-feature-pill span {
          color: #cbd5e1 !important;
        }

        [data-theme="dark"] .odoo-architecture-canvas {
          background: rgba(13, 24, 48, 0.75);
          border-color: rgba(0, 174, 239, 0.25);
        }

        [data-theme="dark"] .arch-node-card {
          background: rgba(15, 30, 60, 0.85);
          border-color: rgba(0, 174, 239, 0.25);
        }

        [data-theme="dark"] .node-name {
          color: #ffffff !important;
        }

        [data-theme="dark"] .node-subtitle,
        [data-theme="dark"] .metric-label,
        [data-theme="dark"] .arch-telemetry-tag,
        [data-theme="dark"] .telemetry-chip {
          color: #94a3b8 !important;
        }

        [data-theme="dark"] .odoo-tabs-nav {
          background: rgba(13, 24, 48, 0.8);
          border: 1px solid rgba(0, 174, 239, 0.25);
        }

        [data-theme="dark"] .odoo-tab-btn {
          color: #94a3b8;
        }
        [data-theme="dark"] .odoo-tab-btn:hover {
          color: #ffffff;
        }

        [data-theme="dark"] .odoo-service-card,
        [data-theme="dark"] .complexity-guide-wrapper,
        [data-theme="dark"] .complexity-card,
        [data-theme="dark"] .odoo-cta-box {
          background: rgba(13, 24, 48, 0.65);
          border: 1.5px solid rgba(0, 174, 239, 0.2);
          backdrop-filter: blur(12px);
        }

        [data-theme="dark"] .service-feature-pill {
          background: rgba(0, 174, 239, 0.08);
          border: 1px solid rgba(0, 174, 239, 0.18);
        }



        /* ---------------- LIGHT THEME ---------------- */
        [data-theme="light"] .odoo-view-wrapper,
        :root:not([data-theme="dark"]) .odoo-view-wrapper {
          background-color: #f8fafc;
          color: #334155;
        }

        [data-theme="light"] .odoo-hero-title,
        :root:not([data-theme="dark"]) .odoo-hero-title,
        [data-theme="light"] .odoo-section-title,
        :root:not([data-theme="dark"]) .odoo-section-title,
        [data-theme="light"] .service-card-title,
        :root:not([data-theme="dark"]) .service-card-title,
        [data-theme="light"] .complexity-guide-title,
        :root:not([data-theme="dark"]) .complexity-guide-title,
        [data-theme="light"] .instance-header span,
        :root:not([data-theme="dark"]) .instance-header span,
        [data-theme="light"] .cta-title,
        :root:not([data-theme="dark"]) .cta-title {
          color: #0f172a !important;
        }

        [data-theme="light"] .odoo-hero-desc,
        :root:not([data-theme="dark"]) .odoo-hero-desc,
        [data-theme="light"] .odoo-section-desc,
        :root:not([data-theme="dark"]) .odoo-section-desc,
        [data-theme="light"] .category-sub-desc,
        :root:not([data-theme="dark"]) .category-sub-desc,
        [data-theme="light"] .service-card-desc,
        :root:not([data-theme="dark"]) .service-card-desc,
        [data-theme="light"] .complexity-desc,
        :root:not([data-theme="dark"]) .complexity-desc,
        [data-theme="light"] .instance-meta,
        :root:not([data-theme="dark"]) .instance-meta,
        [data-theme="light"] .cta-desc,
        :root:not([data-theme="dark"]) .cta-desc {
          color: #475569 !important;
        }

        [data-theme="light"] .complexity-sub,
        :root:not([data-theme="dark"]) .complexity-sub {
          color: #1e293b !important;
        }

        [data-theme="light"] .odoo-trust-item,
        :root:not([data-theme="dark"]) .odoo-trust-item,
        [data-theme="light"] .service-feature-pill span,
        :root:not([data-theme="dark"]) .service-feature-pill span {
          color: #1e293b !important;
        }

        [data-theme="light"] .odoo-architecture-canvas,
        :root:not([data-theme="dark"]) .odoo-architecture-canvas {
          background: #ffffff;
          border-color: #cbd5e1;
          box-shadow: 0 20px 45px rgba(0, 70, 150, 0.08);
        }

        [data-theme="light"] .arch-glow-radial,
        :root:not([data-theme="dark"]) .arch-glow-radial {
          background: radial-gradient(circle, rgba(0, 174, 239, 0.1) 0%, transparent 70%);
        }

        [data-theme="light"] .arch-top-bar,
        :root:not([data-theme="dark"]) .arch-top-bar,
        [data-theme="light"] .arch-bottom-telemetry,
        :root:not([data-theme="dark"]) .arch-bottom-telemetry {
          border-color: #e2e8f0;
        }

        [data-theme="light"] .arch-status-badge,
        :root:not([data-theme="dark"]) .arch-status-badge {
          color: #0077b6;
        }

        [data-theme="light"] .live-dot,
        :root:not([data-theme="dark"]) .live-dot {
          background: #0077b6;
          box-shadow: 0 0 10px #0077b6;
        }

        [data-theme="light"] .arch-node-card,
        :root:not([data-theme="dark"]) .arch-node-card {
          background: #f8fafc;
          border-color: #e2e8f0;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }

        [data-theme="light"] .node-name,
        :root:not([data-theme="dark"]) .node-name {
          color: #0f172a !important;
        }

        [data-theme="light"] .node-subtitle,
        :root:not([data-theme="dark"]) .node-subtitle {
          color: #64748b !important;
        }

        [data-theme="light"] .metric-label,
        :root:not([data-theme="dark"]) .metric-label {
          color: #334155 !important;
        }

        [data-theme="light"] .node-card-head,
        :root:not([data-theme="dark"]) .node-card-head,
        [data-theme="light"] .node-card-footer,
        :root:not([data-theme="dark"]) .node-card-footer {
          border-color: #e2e8f0;
        }

        [data-theme="light"] .telemetry-chip,
        :root:not([data-theme="dark"]) .telemetry-chip {
          background: #f1f5f9;
          border-color: #cbd5e1;
          color: #334155 !important;
        }

        [data-theme="light"] .channel-tooltip,
        :root:not([data-theme="dark"]) .channel-tooltip {
          background: #ffffff;
          color: #0284c7;
          border-color: #bae6fd;
        }

        [data-theme="light"] .odoo-tabs-nav,
        :root:not([data-theme="dark"]) .odoo-tabs-nav {
          background: #e2e8f0;
          border: 1px solid #cbd5e1;
        }

        [data-theme="light"] .odoo-tab-btn,
        :root:not([data-theme="dark"]) .odoo-tab-btn {
          color: #475569;
        }
        [data-theme="light"] .odoo-tab-btn:hover,
        :root:not([data-theme="dark"]) .odoo-tab-btn:hover {
          color: #0f172a;
        }

        [data-theme="light"] .odoo-service-card,
        :root:not([data-theme="dark"]) .odoo-service-card,
        [data-theme="light"] .complexity-guide-wrapper,
        :root:not([data-theme="dark"]) .complexity-guide-wrapper,
        [data-theme="light"] .complexity-card,
        :root:not([data-theme="dark"]) .complexity-card,
        [data-theme="light"] .odoo-cta-box,
        :root:not([data-theme="dark"]) .odoo-cta-box {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        [data-theme="light"] .service-feature-pill,
        :root:not([data-theme="dark"]) .service-feature-pill {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }


      `}</style>
    </div>
  );
}
