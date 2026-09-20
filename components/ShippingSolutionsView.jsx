import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import {
  Package,
  Truck,
  Ship,
  Globe2,
  CalendarCheck,
  FileCheck2,
  BarChart3,
  Warehouse,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Clock,
  Compass,
  DollarSign,
  Smartphone,
  Layers,
  Lock,
  Server,
  Activity,
  ArrowUpRight,
  Check
} from 'lucide-react';

const STATS = [
  { value: '50+', label: 'Global Shipping Partners', desc: 'Direct carrier integrations' },
  { value: '10K+', label: 'Daily Processed Shipments', desc: 'Real-time telemetry' },
  { value: '99.4%', label: 'On-Time Delivery SLA', desc: 'Predictable logistics' },
  { value: '100%', label: 'ZATCA & Customs Ready', desc: 'FASAH & KSA compliant' },
];

const FEATURES = [
  {
    icon: Package,
    title: 'Shipment & Freight Management',
    desc: 'Plan, schedule, and track multi-modal freight across sea, air, and land routes in real time.',
    points: ['Freight order scheduling', 'Live milestone tracking', 'Multi-modal carrier dispatch']
  },
  {
    icon: CalendarCheck,
    title: 'Booking & Dispatch Automation',
    desc: 'Automate carrier bookings, document generation, and client inquiries from one central desk.',
    points: ['Automated booking confirmations', 'Contract & waybill archiving', 'Instant freight order intake']
  },
  {
    icon: Truck,
    title: 'Fleet & Telematics Oversight',
    desc: 'Monitor vehicles, driver allocations, fuel consumption, and routine maintenance schedules.',
    points: ['Live GPS route monitoring', 'Vehicle capacity utilization', 'Automated maintenance alerts']
  },
  {
    icon: Smartphone,
    title: 'Client Tracking & Web Portal',
    desc: 'Empower clients with a branded self-service tracking portal to review ETAs and download documents.',
    points: ['Self-service parcel tracking', 'Instant delivery proofs (e-POD)', 'Automated SMS/Email alerts']
  },
  {
    icon: Compass,
    title: 'Route & Trip Optimization',
    desc: 'Algorithmic route planning to reduce fuel costs, avoid port bottlenecks, and meet strict delivery windows.',
    points: ['Dynamic traffic & route mapping', 'Accurate transit time ETAs', 'Multi-stop delivery sequencing']
  },
  {
    icon: DollarSign,
    title: 'Freight Costing & Multi-Currency',
    desc: 'Transparent freight pricing, automated tariff calculations, and direct ERP financial reconciliation.',
    points: ['Automated customer invoices', 'Carrier tariff & freight reconciliation', 'Multi-currency & 15% VAT rules']
  },
  {
    icon: Warehouse,
    title: 'Depot & Warehouse Operations',
    desc: 'Seamlessly coordinate cargo storage, cross-docking, loading manifests, and gate clearances.',
    points: ['Cross-dock & container staging', 'Inbound / outbound verification', 'Automated packing lists & gate passes']
  },
  {
    icon: FileCheck2,
    title: 'Customs & Regulatory Compliance',
    desc: 'Ensure compliance with Saudi customs (FASAH), ZATCA Phase 2 invoicing, and international shipping rules.',
    points: ['Bills of Lading (BOL) generation', 'FASAH & customs documentation', 'ZATCA compliant freight e-invoicing']
  },
  {
    icon: BarChart3,
    title: 'Logistics Analytics & KPIs',
    desc: 'Executive dashboards tracking fleet fuel efficiency, on-time delivery rates, and vendor cost benchmarks.',
    points: ['Carrier performance scoring', 'Route profitability breakdowns', 'Visual executive BI dashboards']
  }
];

const BENEFITS = [
  {
    title: 'Unified Multi-Modal Operations',
    desc: 'Consolidate ocean freight, air cargo, and cross-border trucking under a single standardized enterprise control tower.'
  },
  {
    title: 'Real-Time Telematics & Milestones',
    desc: 'Live tracking of container moves, vessel moorings, truck locations, and port dispatch handovers.'
  },
  {
    title: 'Algorithmic Load & Route Planning',
    desc: 'Maximize truck and container space utilization while cutting empty turnaround miles and fuel wastage.'
  },
  {
    title: 'Zero-Error Customs & ZATCA Billing',
    desc: 'Generate cryptographic ZATCA Phase 2 compliant invoices, customs declarations, and tax settlement logs automatically.'
  },
  {
    title: 'Proactive Exception Management',
    desc: 'Detect shipment delays, customs holds, or route diversions early with automated corrective alerts.'
  },
  {
    title: 'Client Transparency & Faster Turnaround',
    desc: 'Accelerate cash cycles with instant digital Proof of Delivery (e-POD), automated invoicing, and self-service portals.'
  }
];

const INTEGRATIONS = [
  {
    category: 'Ocean & Vessel Tracking',
    icon: Ship,
    services: 'Maersk Spot, CMA CGM, MSC, MarineTraffic, FleetMon',
    desc: 'Automate container booking submissions, schedule lookups, and live ocean vessel AIS positioning.'
  },
  {
    category: 'Air Cargo & Courier APIs',
    icon: Package,
    services: 'DHL Express, FedEx, UPS, CargoAI, WebCargo, SMSA',
    desc: 'Direct integration for airway bills, express label printing, and real-time checkpoint updates.'
  },
  {
    category: 'Customs & Regulatory Platforms',
    icon: FileCheck2,
    services: 'Saudi FASAH, ZATCA Phase 2, Wared, International Single Windows',
    desc: 'Automated electronic filing of customs manifest data, HS Code verification, and duty clearance.'
  },
  {
    category: 'Enterprise ERP & Accounting',
    icon: Layers,
    services: 'Oracle Fusion / EBS, Odoo Enterprise, SAP S/4HANA, QuickBooks',
    desc: 'Bi-directional synchronization of freight orders, customer ledgers, vendor accounts, and cost centers.'
  },
  {
    category: 'Warehouse & Telematics Systems',
    icon: Warehouse,
    services: 'WMS Networks, Zebra RFID/Barcode, Geotab, Samsara GPS',
    desc: 'Bridge yard staging and pallet scans directly with logistics dispatch schedules.'
  },
  {
    category: 'Executive BI & Cargo Insurance',
    icon: BarChart3,
    services: 'Power BI, Tableau, Loadsure, TT Club, Automated Claims',
    desc: 'Instant risk mitigation with automated cargo insurance issuance and enterprise KPI dashboards.'
  }
];

const SECURITY_ITEMS = [
  { icon: Lock, title: 'AES-256 Data Encryption', desc: 'All shipment telemetry and commercial data encrypted at rest and in transit.' },
  { icon: ShieldCheck, title: 'Role-Based Access (RBAC)', desc: 'Granular permissions safeguarding sensitive client freight rates and ledgers.' },
  { icon: Server, title: 'KSA Cloud Residency', desc: 'Hosted on certified, sovereign Saudi cloud infrastructure meeting regulatory mandates.' },
  { icon: Activity, title: '24/7 SLA & Disaster Recovery', desc: 'High-availability automated failover with 99.9% uptime commitment.' },
];

export default function ShippingSolutionsView() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`shipping-view-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
      
      {/* 1. HERO SECTION (Clean, balanced enterprise hero) */}
      <section className="shipping-hero">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-xl-9 col-lg-10">
              
              <div className="hero-badge">
                <Ship size={14} color="#00AEEF" />
                <span>FREIGHT &amp; LOGISTICS MANAGEMENT PLATFORM</span>
              </div>

              <h1 className="hero-title">
                All Your Freight &amp; Fleet Operations. <br />
                <span className="text-gradient">One Intelligent Platform.</span>
              </h1>

              <p className="hero-desc">
                Altapete Solutions simplifies multi-modal logistics across Saudi Arabia and the GCC — combining automated shipment booking, live GPS tracking, customs clearance, and seamless ERP accounting in one connected platform.
              </p>

              <div className="hero-actions">
                <Link href="/contact-us" className="btn-hero-primary">
                  <span>Schedule Architecture Demo</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/what-we-do" className="btn-hero-secondary">
                  <span>Explore Our Capabilities</span>
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="hero-stats-row">
                {STATS.map((s, idx) => (
                  <div key={idx} className="stat-card">
                    <div className="stat-number">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                    <div className="stat-desc">{s.desc}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE FEATURES (Refined Typography & Website Brand Colors) */}
      <section className="shipping-features-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-tag">COMPREHENSIVE CAPABILITIES</div>
            <h2 className="section-title">Built for Modern Freight Forwarders &amp; Shippers</h2>
            <p className="section-desc">
              From individual consignments to multinational container fleets, manage your entire logistics value chain with complete digital transparency.
            </p>
          </div>

          <div className="row g-3 g-lg-4 mt-2">
            {FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="col-lg-4 col-md-6">
                  <div className="feature-card">
                    <div className="feat-icon-box">
                      <Icon size={20} color="#00AEEF" />
                    </div>
                    <h3 className="feat-title">{feat.title}</h3>
                    <p className="feat-desc">{feat.desc}</p>
                    <ul className="feat-points">
                      {feat.points.map((p, pIdx) => (
                        <li key={pIdx}>
                          <Check size={13} className="check-icon" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS BENEFITS & IMPACT */}
      <section className="shipping-benefits-section">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-center">
            
            <div className="col-lg-6">
              <div className="section-tag">OPERATIONAL IMPACT</div>
              <h2 className="section-title text-start mb-3">
                Measurable Efficiency Across Your <span className="text-gradient">Supply Chain</span>
              </h2>
              <p className="section-desc text-start mb-4">
                Manual dispatch slips and siloed spreadsheets cause costly shipment delays. Our integrated freight ERP automates repetitive workflows so your team handles higher volume with zero friction.
              </p>

              <div className="benefits-stack">
                {BENEFITS.map((ben, idx) => (
                  <div key={idx} className="benefit-item">
                    <div className="benefit-icon-dot">
                      <CheckCircle2 size={16} color="#00AEEF" />
                    </div>
                    <div>
                      <h4 className="benefit-title">{ben.title}</h4>
                      <p className="benefit-text">{ben.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="benefit-visual-frame">
                <img
                  src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200"
                  alt="Modern container logistics terminal"
                  className="benefit-img"
                />
                <div className="visual-stat-overlay">
                  <div className="overlay-badge">
                    <Zap size={14} color="#00AEEF" />
                    <span>Real-Time Logistics Engine</span>
                  </div>
                  <div className="overlay-metric">Up to 35% Reduction in Dispatch Latency</div>
                  <div className="overlay-note">Backed by automated milestone telematics &amp; ERP syncing</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INTEGRATION ECOSYSTEM */}
      <section className="shipping-integrations-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-tag">API &amp; CONNECTIVITY</div>
            <h2 className="section-title">Seamlessly Connected with the Global Freight Grid</h2>
            <p className="section-desc">
              Connect your logistics software with major shipping lines, national customs portals, and core accounting ERPs without custom code bottlenecks.
            </p>
          </div>

          <div className="row g-3 g-lg-4 mt-2">
            {INTEGRATIONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="col-lg-4 col-md-6">
                  <div className="integration-card">
                    <div className="int-card-head">
                      <div className="int-icon-box">
                        <Icon size={18} color="#00AEEF" />
                      </div>
                      <h4 className="int-cat-title">{item.category}</h4>
                    </div>
                    <p className="int-desc">{item.desc}</p>
                    <div className="int-services-tag">
                      <span className="services-label">Integrates with:</span> {item.services}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. DATA SECURITY & COMPLIANCE (Compact & balanced) */}
      <section className="shipping-security-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-tag">SECURITY &amp; COMPLIANCE</div>
            <h2 className="section-title">Bank-Grade Safeguards for Mission-Critical Telematics</h2>
            <p className="section-desc">
              Your cargo values, pricing agreements, and carrier contracts demand highest-grade security and full alignment with Saudi cybersecurity frameworks.
            </p>
          </div>

          <div className="row g-3 mt-2">
            {SECURITY_ITEMS.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div key={idx} className="col-lg-3 col-sm-6">
                  <div className="security-card">
                    <div className="sec-icon-wrap">
                      <Icon size={20} color="#00AEEF" />
                    </div>
                    <h4 className="sec-title">{sec.title}</h4>
                    <p className="sec-desc">{sec.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. STANDARD ALTAPETE CTA BANNER */}
      <section className="shipping-cta-section">
        <div className="container">
          <div className="cp-cta-banner">
            <div className="cp-cta-glow" />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="cp-cta-heading">
                Ready to Modernize Your Freight &amp; Fleet Operations?
              </h2>
              <p className="cp-cta-sub">
                Connect with our supply chain technology architects to explore custom workflows, ZATCA Phase 2 e-invoicing compliance, and seamless ERP integration.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact-us" className="cp-cta-btn-primary">
                  <span>Schedule Consultation</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/what-we-do" className="cp-cta-btn-secondary">
                  <span>Explore What We Do</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENT SCOPED & THEME-AWARE STYLES */}
      <style jsx>{`
        .shipping-view-wrapper {
          width: 100%;
          position: relative;
          background: var(--bg-body, #080d1a);
          color: var(--text-color, #e2e8f0);
          overflow: hidden;
        }

        /* ── 1. HERO SECTION ── */
        .shipping-hero {
          padding: 85px 0 60px;
          position: relative;
          background: linear-gradient(180deg, rgba(0, 174, 239, 0.08) 0%, rgba(44, 115, 217, 0.02) 100%);
          border-bottom: 1px solid rgba(0, 174, 239, 0.12);
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          border-radius: 50px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.25);
          color: #00AEEF;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .hero-title {
          font-size: clamp(30px, 4.5vw, 50px);
          font-weight: 800;
          letter-spacing: -0.8px;
          margin-bottom: 18px;
          line-height: 1.18;
        }
        .text-gradient {
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-desc {
          max-width: 740px;
          margin: 0 auto 34px;
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-muted, #94a3b8);
        }
        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }
        .btn-hero-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          color: #ffffff !important;
          padding: 13px 32px;
          border-radius: 50px;
          font-size: 14.5px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(0, 174, 239, 0.35);
          transition: all 0.3s ease;
        }
        .btn-hero-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 174, 239, 0.5);
          color: #ffffff !important;
        }
        .btn-hero-secondary {
          display: inline-flex;
          align-items: center;
          padding: 13px 30px;
          border-radius: 50px;
          border: 1.5px solid rgba(0, 174, 239, 0.3);
          color: var(--text-color, #e2e8f0) !important;
          font-size: 14.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .btn-hero-secondary:hover {
          background: rgba(0, 174, 239, 0.08);
          border-color: #00AEEF;
        }

        /* Stats strip */
        .hero-stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 1060px;
          margin: 0 auto;
        }
        .stat-card {
          background: rgba(13, 22, 40, 0.65);
          border: 1px solid rgba(0, 174, 239, 0.15);
          border-radius: 14px;
          padding: 18px 16px;
          text-align: center;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          border-color: rgba(0, 174, 239, 0.35);
          transform: translateY(-2px);
        }
        .stat-number {
          font-size: 26px;
          font-weight: 800;
          color: #00AEEF;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--heading-color, #ffffff);
          margin-bottom: 2px;
        }
        .stat-desc {
          font-size: 11px;
          color: var(--text-muted, #94a3b8);
        }

        /* ── SECTION HEADINGS (Scaled Down to Clean Enterprise Size) ── */
        .section-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #00AEEF;
          padding: 4px 14px;
          border-radius: 50px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.25);
          margin-bottom: 12px;
        }
        .section-title {
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 800;
          letter-spacing: -0.4px;
          margin-bottom: 12px;
          line-height: 1.25;
        }
        .section-desc {
          max-width: 660px;
          margin: 0 auto;
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--text-muted, #94a3b8);
        }

        /* ── 2. FEATURES GRID ── */
        .shipping-features-section {
          padding: 70px 0 60px;
        }
        .feature-card {
          background: rgba(13, 22, 40, 0.6);
          border: 1px solid rgba(0, 174, 239, 0.14);
          border-radius: 16px;
          padding: 24px 22px;
          height: 100%;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .feature-card:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 174, 239, 0.35);
          box-shadow: 0 12px 28px rgba(0, 174, 239, 0.1);
        }
        .feat-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .feat-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--heading-color, #ffffff);
          margin-bottom: 8px;
        }
        .feat-desc {
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--text-muted, #94a3b8);
          margin-bottom: 14px;
        }
        .feat-points {
          list-style: none;
          padding-left: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-top: 1px solid rgba(0, 174, 239, 0.1);
          padding-top: 12px;
        }
        .feat-points li {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12.5px;
          color: var(--text-muted, #cbd5e1);
        }
        .feat-points .check-icon {
          color: #00AEEF;
          flex-shrink: 0;
        }

        /* ── 3. BENEFITS SECTION ── */
        .shipping-benefits-section {
          padding: 70px 0;
          background: rgba(0, 174, 239, 0.02);
          border-top: 1px solid rgba(0, 174, 239, 0.08);
          border-bottom: 1px solid rgba(0, 174, 239, 0.08);
        }
        .benefits-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .benefit-icon-dot {
          flex-shrink: 0;
          margin-top: 3px;
        }
        .benefit-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--heading-color, #ffffff);
          margin-bottom: 3px;
        }
        .benefit-text {
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--text-muted, #94a3b8);
          margin-bottom: 0;
        }
        .benefit-visual-frame {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(0, 174, 239, 0.25);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
        }
        .benefit-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          display: block;
        }
        .visual-stat-overlay {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(10, 22, 40, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 174, 239, 0.3);
          border-radius: 12px;
          padding: 16px 20px;
        }
        .overlay-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #00AEEF;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .overlay-metric {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2px;
        }
        .overlay-note {
          font-size: 12px;
          color: #94a3b8;
        }

        /* ── 4. INTEGRATIONS SECTION ── */
        .shipping-integrations-section {
          padding: 70px 0;
        }
        .integration-card {
          background: rgba(13, 22, 40, 0.6);
          border: 1px solid rgba(0, 174, 239, 0.14);
          border-radius: 14px;
          padding: 22px 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }
        .integration-card:hover {
          transform: translateY(-2px);
          border-color: rgba(0, 174, 239, 0.35);
        }
        .int-card-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }
        .int-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .int-cat-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--heading-color, #ffffff);
          margin-bottom: 0;
        }
        .int-desc {
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-muted, #94a3b8);
          margin-bottom: 12px;
          flex: 1;
        }
        .int-services-tag {
          font-size: 12px;
          line-height: 1.5;
          color: #38bdf8;
          background: rgba(0, 174, 239, 0.06);
          border: 1px solid rgba(0, 174, 239, 0.14);
          padding: 6px 10px;
          border-radius: 6px;
        }
        .services-label {
          font-weight: 700;
          color: #94a3b8;
        }

        /* ── 5. SECURITY & COMPLIANCE ── */
        .shipping-security-section {
          padding: 60px 0 70px;
        }
        .security-card {
          background: rgba(13, 22, 40, 0.55);
          border: 1px solid rgba(0, 174, 239, 0.12);
          border-radius: 14px;
          padding: 22px 18px;
          text-align: center;
          height: 100%;
        }
        .sec-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
        }
        .sec-title {
          font-size: 14.5px;
          font-weight: 700;
          color: var(--heading-color, #ffffff);
          margin-bottom: 6px;
        }
        .sec-desc {
          font-size: 12.5px;
          line-height: 1.55;
          color: var(--text-muted, #94a3b8);
          margin-bottom: 0;
        }

        /* ── 6. BOTTOM CTA BANNER (STANDARD ALTAPETE THEME) ── */
        .shipping-cta-section {
          padding: 40px 0 80px;
        }
        .cp-cta-banner {
          background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%);
          border-radius: 24px;
          padding: clamp(36px, 5vw, 64px);
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(30, 58, 95, 0.35);
        }
        .cp-cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: rgba(0, 174, 239, 0.08);
          pointer-events: none;
        }
        .cp-cta-heading {
          font-size: clamp(22px, 3.5vw, 34px);
          font-weight: 800;
          color: #ffffff !important;
          margin-bottom: 12px;
        }
        .cp-cta-sub {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.9) !important;
          max-width: 580px;
          margin: 0 auto 30px;
          line-height: 1.65;
        }
        .cp-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #00AEEF;
          color: #ffffff !important;
          padding: 13px 32px;
          border-radius: 50px;
          font-size: 14.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .cp-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 174, 239, 0.4);
          color: #ffffff !important;
        }
        .cp-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff !important;
          padding: 13px 32px;
          border-radius: 50px;
          font-size: 14.5px;
          font-weight: 700;
          text-decoration: none;
          border: 1.5px solid rgba(255, 255, 255, 0.28);
          transition: all 0.3s ease;
        }
        .cp-cta-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          color: #ffffff !important;
        }

        /* ── LIGHT THEME ADAPTATION ── */
        :global([data-theme="light"]) .shipping-view-wrapper,
        .light-theme.shipping-view-wrapper {
          background: #f8fafc;
          color: #0f172a;
        }
        :global([data-theme="light"]) .shipping-hero,
        .light-theme .shipping-hero {
          background: linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%);
          border-bottom-color: rgba(44, 115, 217, 0.15);
        }
        :global([data-theme="light"]) .hero-title,
        .light-theme .hero-title {
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .hero-desc,
        .light-theme .hero-desc {
          color: #475569 !important;
        }
        :global([data-theme="light"]) .btn-hero-secondary,
        .light-theme .btn-hero-secondary {
          border-color: rgba(44, 115, 217, 0.3);
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .stat-card,
        .light-theme .stat-card {
          background: #ffffff;
          border-color: rgba(44, 115, 217, 0.16);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }
        :global([data-theme="light"]) .stat-label,
        .light-theme .stat-label {
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .stat-desc,
        .light-theme .stat-desc {
          color: #64748b !important;
        }
        :global([data-theme="light"]) .section-title,
        .light-theme .section-title {
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .section-desc,
        .light-theme .section-desc {
          color: #475569 !important;
        }
        :global([data-theme="light"]) .feature-card,
        .light-theme .feature-card {
          background: #ffffff;
          border-color: rgba(44, 115, 217, 0.16);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        :global([data-theme="light"]) .feat-title,
        .light-theme .feat-title {
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .feat-desc,
        .light-theme .feat-desc {
          color: #475569 !important;
        }
        :global([data-theme="light"]) .feat-points,
        .light-theme .feat-points {
          border-top-color: rgba(0, 0, 0, 0.06);
        }
        :global([data-theme="light"]) .feat-points li,
        .light-theme .feat-points li {
          color: #334155 !important;
        }
        :global([data-theme="light"]) .shipping-benefits-section,
        .light-theme .shipping-benefits-section {
          background: #f1f5f9;
          border-color: rgba(0, 0, 0, 0.06);
        }
        :global([data-theme="light"]) .benefit-title,
        .light-theme .benefit-title {
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .benefit-text,
        .light-theme .benefit-text {
          color: #475569 !important;
        }
        :global([data-theme="light"]) .visual-stat-overlay,
        .light-theme .visual-stat-overlay {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(44, 115, 217, 0.3);
        }
        :global([data-theme="light"]) .overlay-metric,
        .light-theme .overlay-metric {
          color: #0f172a;
        }
        :global([data-theme="light"]) .overlay-note,
        .light-theme .overlay-note {
          color: #64748b;
        }
        :global([data-theme="light"]) .integration-card,
        .light-theme .integration-card {
          background: #ffffff;
          border-color: rgba(44, 115, 217, 0.16);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        }
        :global([data-theme="light"]) .int-cat-title,
        .light-theme .int-cat-title {
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .int-desc,
        .light-theme .int-desc {
          color: #475569 !important;
        }
        :global([data-theme="light"]) .int-services-tag,
        .light-theme .int-services-tag {
          background: #f0f7ff;
          border-color: rgba(44, 115, 217, 0.2);
          color: #0077cc;
        }
        :global([data-theme="light"]) .security-card,
        .light-theme .security-card {
          background: #ffffff;
          border-color: rgba(44, 115, 217, 0.14);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        }
        :global([data-theme="light"]) .sec-title,
        .light-theme .sec-title {
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .sec-desc,
        .light-theme .sec-desc {
          color: #475569 !important;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .hero-stats-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .benefit-img {
            height: 360px;
          }
        }
        @media (max-width: 576px) {
          .hero-stats-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
