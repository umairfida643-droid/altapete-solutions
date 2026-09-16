import React, { useState, useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import {
  ShoppingCart, ShieldCheck, Zap, Layers, RefreshCw, Cpu, Server, Globe,
  Lock, Truck, CreditCard, ChevronDown, Plus, Minus, MessageSquare,
  Phone, MapPin, Sparkles, Building2, Terminal, Code2, Activity,
  ArrowRight, CheckCircle2, ArrowUpRight, Clock, FileCheck, Check,
  BarChart3, Database, Send, Play, Pause
} from 'lucide-react';

const solutions = [
  {
    icon: Database,
    title: "ERP & Financials Core Bridge",
    arTitle: "الربط مع أنظمة تخطيط الموارد",
    desc: "Direct two-way synchronization between Salla and tier-one ERPs including Oracle NetSuite, SAP S/4HANA, Microsoft Dynamics 365, and Odoo. Automate general ledger postings, chart-of-accounts reconciliation, and inventory journals.",
    tags: ["Oracle", "SAP", "Odoo", "Dynamics"]
  },
  {
    icon: ShieldCheck,
    title: "ZATCA Phase 2 E-Invoicing",
    arTitle: "الفوترة الإلكترونية - المرحلة الثانية",
    desc: "100% compliant with Saudi ZATCA e-invoicing mandates. Real-time generation of cryptographic UBL 2.1 XML invoices, tamper-proof hashes, QR codes, and instant portal clearance for B2B & B2C transactions.",
    tags: ["ZATCA Certified", "UBL 2.1", "ECDSA Cryptography"]
  },
  {
    icon: RefreshCw,
    title: "Omnichannel Multi-Warehouse Sync",
    arTitle: "إدارة المخزون متعدد المستودعات",
    desc: "Sub-second multi-hub inventory allocation across regional fulfillment centers in Riyadh, Jeddah, and Dammam. Real-time stock reservation prevents overselling across digital and brick-and-mortar stores.",
    tags: ["Sub-second Sync", "Multi-Location", "Safety Buffers"]
  },
  {
    icon: CreditCard,
    title: "Regional Payments & Reconciliation",
    arTitle: "بوابات الدفع الإقليمية والتقسيط",
    desc: "Unified checkout connectivity with mada, Apple Pay, STC Pay, Urpay, Tabby, and Tamara. Automated settlement reconciliation matching payment gateway payouts against internal bank ledgers.",
    tags: ["mada", "Tabby & Tamara", "STC Pay", "Apple Pay"]
  },
  {
    icon: Truck,
    title: "Automated Logistics & 3PL Dispatch",
    arTitle: "أتمتة الشحن والخدمات اللوجستية",
    desc: "Instant automated Airway Bill (AWB) generation, smart courier selection, pickup scheduling, and bi-directional shipment tracking with SMSA, Aramex, SPL (Saudi Post), and DHL Express.",
    tags: ["SMSA", "Aramex", "SPL", "Automated AWB"]
  },
  {
    icon: Code2,
    title: "Custom Salla Apps & B2B Portals",
    arTitle: "تطبيقات سلة المخصصة والتجارة بالجملة",
    desc: "Custom headless microservices and private merchant apps leveraging Salla's Twilight Engine. Support for tiered enterprise wholesale pricing, custom tax exemptions, and specialized customer portals.",
    tags: ["Twilight API", "Headless", "B2B Wholesale"]
  }
];

const timelinePhases = [
  {
    number: "01",
    phase: "Discovery & Architecture Audit",
    arTitle: "تحليل المتطلبات وهندسة الربط",
    duration: "3-5 Business Days",
    desc: "Comprehensive assessment of your Salla merchant setup, back-office ERP architecture, SKUs taxonomy, and specific Saudi regulatory workflows.",
    deliverables: ["Integration Architecture Blueprint", "API Schema Mapping Document", "Risk & Contingency Plan"],
    roles: ["Solutions Architect", "Business Systems Analyst"]
  },
  {
    number: "02",
    phase: "Infrastructure & Webhook Pipelines",
    arTitle: "تجهيز البنية التحتية وواجهات الويب",
    duration: "5-7 Business Days",
    desc: "Configuring secure middleware proxies, rate-limited queues, mutual TLS certificates, and Salla webhook listener endpoints in Saudi-compliant cloud zones.",
    deliverables: ["API Gateway Provisioning", "Encrypted Message Queue Setup", "Salla App Sandbox Config"],
    roles: ["Cloud & DevOps Engineer", "Integration Specialist"]
  },
  {
    number: "03",
    phase: "Core Integration Engineering",
    arTitle: "تطوير مسارات الربط والمزامنة",
    duration: "10-14 Business Days",
    desc: "Building real-time bi-directional pipelines for catalog sync, order ingestion, customer master data, inventory balances, and automated courier manifest generation.",
    deliverables: ["2-Way ERP Sync Engine", "Automated AWB Dispatcher", "Inventory Reconciliation Service"],
    roles: ["Senior Backend Engineer", "ERP Specialist"]
  },
  {
    number: "04",
    phase: "ZATCA Phase 2 E-Invoicing Engine",
    arTitle: "تكامل منظومة الفاتورة الإلكترونية",
    duration: "7-10 Business Days",
    desc: "Integrating cryptographic stamping, cryptographic hash chains, QR code generators, and direct reporting to the ZATCA FATOORA portal.",
    deliverables: ["UBL 2.1 Compliant XML Generator", "Cryptographic Signing Engine", "Fatoora Portal Clearance Pass"],
    roles: ["ZATCA Compliance Engineer", "Security Architect"]
  },
  {
    number: "05",
    phase: "Stress Testing & User Acceptance",
    arTitle: "اختبارات الضغط والمطابقة النهائية",
    duration: "5-7 Business Days",
    desc: "Rigorous synthetic load testing, simulated peak sales events (Founding Day / Black Friday volume), failover recovery audits, and edge-case validations.",
    deliverables: ["High-Concurrency Load Report", "UAT Sign-off Matrix", "Payment & Refund Audit Log"],
    roles: ["QA Automation Lead", "Principal Test Engineer"]
  },
  {
    number: "06",
    phase: "Zero-Downtime Go-Live & SLA Support",
    arTitle: "الإطلاق السلس والدعم المستمر",
    duration: "2-3 Business Days",
    desc: "Production cutover with zero disruption to active shoppers. Real-time telemetry monitoring, dedicated hypercare team, and 24/7 enterprise SLA coverage.",
    deliverables: ["Zero-Downtime Production Cutover", "Real-Time Telemetry Dashboard", "Enterprise SLA Handover"],
    roles: ["Deployment Lead", "24/7 SLA Support Lead"]
  }
];

const faqs = [
  {
    question: "How does Altapete handle real-time inventory synchronization between Salla and our ERP?",
    answer: "We deploy an event-driven queueing architecture using Redis and high-throughput microservices. When an order is placed on Salla, an immediate stock lock is broadcast to your ERP within 200 milliseconds. Similarly, inventory adjustments or arrivals received in your warehouse ERP immediately reflect on Salla, preventing overselling."
  },
  {
    question: "Is ZATCA Phase 2 e-invoicing integrated natively with Salla orders?",
    answer: "Yes. Our integration engine intercepts every finalized checkout, generates the compliant UBL 2.1 XML structure, signs it with your cryptographic compliance certificate, generates the mandatory Phase 2 QR code, and simultaneously submits it to the ZATCA portal for clearance or reporting."
  },
  {
    question: "Can you connect local Saudi payment gateways like Tabby, Tamara, and mada?",
    answer: "Absolutely. In addition to native Salla payment methods, we engineer custom reconciliation pipelines that connect checkout data directly with your accounting general ledger, matching payouts, handling installment commissions, and automating dispute workflows."
  },
  {
    question: "What happens if our ERP system undergoes scheduled downtime or maintenance?",
    answer: "Our middleware features resilient fault tolerance with automated exponential backoff and dead-letter queues. Salla orders and customer webhooks are securely held in an encrypted queue and processed chronologically as soon as your ERP resumes normal operations, ensuring zero data loss."
  },
  {
    question: "What is the typical timeframe for an enterprise Salla integration project?",
    answer: "A standard enterprise integration with ERP, ZATCA Phase 2, and logistics automation typically takes between 3 to 5 weeks from architecture discovery to production go-live, depending on the complexity of your custom ERP workflows."
  }
];

export default function SallaIntegrationPage() {
  const [activeTab, setActiveTab] = useState('orders');
  const [activePhase, setActivePhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActivePhase((prev) => (prev + 1) % timelinePhases.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  return (
    <Layout
      title="Advanced Salla E-Commerce Integration & ERP Automation | Altapete Solutions"
      description="Connect Salla to Oracle, Odoo, SAP, ZATCA Phase 2 E-Invoicing, and regional shipping & payment gateways with Altapete's Saudi enterprise integration suite."
    >
      <style jsx global>{`
        /* Salla Integration Custom Aesthetics */
        .salla-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 18px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          background: rgba(44, 115, 217, 0.12);
          border: 1px solid rgba(44, 115, 217, 0.35);
          color: #2c73d9;
          margin-bottom: 20px;
        }

        [data-theme="dark"] .salla-hero-badge {
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          color: #00d4ff;
        }

        .salla-hero-title {
          font-size: clamp(2.3rem, 4.5vw, 3.8rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 12px;
          color: var(--heading-color, #0f172a);
        }

        .salla-gradient-text {
          background: linear-gradient(135deg, #2c73d9 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .salla-cockpit-card {
          background: #ffffff;
          border: 1.5px solid rgba(44, 115, 217, 0.18);
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(40, 36, 96, 0.08);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        [data-theme="dark"] .salla-cockpit-card {
          background: rgba(15, 17, 34, 0.85);
          border: 1.5px solid rgba(0, 212, 255, 0.25);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(0, 212, 255, 0.1);
          backdrop-filter: blur(16px);
        }

        .salla-feature-card {
          background: #ffffff;
          border: 1.5px solid rgba(44, 115, 217, 0.14);
          border-radius: 20px;
          padding: 32px 28px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        [data-theme="dark"] .salla-feature-card {
          background: rgba(21, 19, 43, 0.7);
          border: 1.5px solid rgba(44, 115, 217, 0.22);
          backdrop-filter: blur(12px);
        }

        .salla-feature-card:hover {
          transform: translateY(-8px);
          border-color: #2c73d9;
          box-shadow: 0 20px 40px rgba(44, 115, 217, 0.16);
        }

        [data-theme="dark"] .salla-feature-card:hover {
          border-color: #00d4ff;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 212, 255, 0.2);
        }

        .salla-step-btn {
          width: 100%;
          text-align: left;
          padding: 16px 20px;
          border-radius: 14px;
          border: 1.5px solid rgba(44, 115, 217, 0.14);
          background: #ffffff;
          color: var(--text-primary);
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
        }

        [data-theme="dark"] .salla-step-btn {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .salla-step-btn.active {
          border-color: #2c73d9;
          background: rgba(44, 115, 217, 0.08);
          box-shadow: 0 4px 20px rgba(44, 115, 217, 0.15);
        }

        [data-theme="dark"] .salla-step-btn.active {
          border-color: #00d4ff;
          background: rgba(0, 212, 255, 0.12);
          box-shadow: 0 4px 25px rgba(0, 212, 255, 0.25);
        }

        .salla-kpi-card {
          background: linear-gradient(135deg, rgba(44, 115, 217, 0.06) 0%, rgba(0, 212, 255, 0.03) 100%);
          border: 1.5px solid rgba(44, 115, 217, 0.18);
          border-radius: 20px;
          padding: 28px;
          text-align: center;
        }

        [data-theme="dark"] .salla-kpi-card {
          background: rgba(15, 23, 42, 0.6);
          border-color: rgba(0, 212, 255, 0.22);
        }

        .salla-faq-item {
          border-radius: 16px;
          background: #ffffff;
          border: 1.5px solid rgba(44, 115, 217, 0.15);
          overflow: hidden;
          margin-bottom: 16px;
          transition: all 0.25s ease;
        }

        [data-theme="dark"] .salla-faq-item {
          background: rgba(15, 17, 34, 0.65);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .salla-faq-item.active {
          border-color: #2c73d9;
          box-shadow: 0 10px 25px rgba(44, 115, 217, 0.1);
        }

        [data-theme="dark"] .salla-faq-item.active {
          border-color: #00d4ff;
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.15);
        }

        .salla-arch-node {
          background: #ffffff;
          border: 1.5px solid rgba(44, 115, 217, 0.2);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          position: relative;
        }

        [data-theme="dark"] .salla-arch-node {
          background: rgba(21, 19, 43, 0.85);
          border-color: rgba(0, 212, 255, 0.25);
        }
      `}</style>

      <div className="cover-home1">
        <div className="container">
          <div className="row">
            <div className="col-xl-1" />
            <div className="col-xl-10 col-lg-12">

              {/* 1. HERO SECTION & LIVE SALLA CLOUD COCKPIT */}
              <section className="pt-40 pb-60 position-relative">
                <div className="row align-items-center g-5">
                  <div className="col-lg-6">
                    <div className="salla-hero-badge">
                      <span className="pulsing-dot" style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#00d4ff' }} />
                      Saudi E-Commerce Ecosystem • منظومة سلة
                    </div>

                    <h1 className="salla-hero-title">
                      Enterprise Salla{' '}
                      <span className="salla-gradient-text">Integration & Cloud Sync</span>
                    </h1>

                    <div className="ar-subtitle" dir="rtl">
                      منصة سلة للتجارة الإلكترونية والربط السحابي المؤسسي المتقدم
                    </div>

                    <p className="text-base color-gray-600 mb-30" style={{ lineHeight: 1.75 }}>
                      Bridge your <strong>Salla store</strong> directly into enterprise ERPs (Oracle, SAP, Odoo), ZATCA Phase 2 compliant e-invoicing, regional payments (mada, Tabby, Tamara, STC Pay), and automated 3PL fulfillment across Saudi Arabia and the GCC.
                    </p>

                    <div className="d-flex flex-wrap gap-2 mb-35">
                      {[
                        "22+ MENA Countries",
                        "ZATCA Phase 2 Verified",
                        "Sub-200ms Latency",
                        "Native Arabic RTL"
                      ].map((chip, idx) => (
                        <span key={idx} style={{
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: 600,
                          backgroundColor: 'rgba(44, 115, 217, 0.08)',
                          border: '1px solid rgba(44, 115, 217, 0.2)',
                          color: 'var(--brand-accent)'
                        }}>
                          ✓ {chip}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex flex-wrap gap-3">
                      <a
                        href="#contact-salla"
                        className="btn btn-primary"
                        style={{
                          background: 'linear-gradient(135deg, #2c73d9 0%, #0066cc 100%)',
                          border: 'none',
                          padding: '14px 28px',
                          borderRadius: '12px',
                          fontWeight: 700,
                          fontSize: '15px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px',
                          color: '#ffffff',
                          textDecoration: 'none',
                          boxShadow: '0 10px 25px rgba(44, 115, 217, 0.35)'
                        }}
                      >
                        Schedule Technical Discovery
                        <ArrowRight size={18} />
                      </a>

                      <a
                        href="#architecture-section"
                        className="btn"
                        style={{
                          border: '1.5px solid rgba(44, 115, 217, 0.3)',
                          padding: '14px 24px',
                          borderRadius: '12px',
                          fontWeight: 600,
                          fontSize: '15px',
                          color: 'var(--text-primary)',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        View Architecture
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Interactive Salla Cloud Cockpit */}
                  <div className="col-lg-6">
                    <div className="salla-cockpit-card">
                      {/* Cockpit Top Bar */}
                      <div style={{
                        padding: '18px 24px',
                        borderBottom: '1px solid rgba(44, 115, 217, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgba(44, 115, 217, 0.03)'
                      }}>
                        <div className="d-flex align-items-center gap-2">
                          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }} />
                          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#f59e0b' }} />
                          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10b981' }} />
                          <span style={{ fontSize: '13px', fontWeight: 700, marginLeft: 8, color: 'var(--text-primary)' }}>
                            Salla Enterprise Gateway • بوابة الربط المباشر
                          </span>
                        </div>
                        <div style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: 700,
                          background: 'rgba(16, 185, 129, 0.12)',
                          color: '#10b981',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6
                        }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />
                          99.98% SLA UPTIME
                        </div>
                      </div>

                      {/* Interactive Tab Switcher */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        borderBottom: '1px solid rgba(44, 115, 217, 0.15)',
                        background: 'rgba(44, 115, 217, 0.02)'
                      }}>
                        {[
                          { id: 'orders', label: 'Orders & ERP', ar: 'الطلبات والمخزون', icon: ShoppingCart },
                          { id: 'zatca', label: 'ZATCA Phase 2', ar: 'الفاتورة الإلكترونية', icon: ShieldCheck },
                          { id: 'logistics', label: 'Courier & Pay', ar: 'الشحن والمدفوعات', icon: Truck }
                        ].map((t) => {
                          const IconComp = t.icon;
                          const active = activeTab === t.id;
                          return (
                            <button
                              key={t.id}
                              onClick={() => setActiveTab(t.id)}
                              style={{
                                padding: '14px 8px',
                                border: 'none',
                                background: active ? 'rgba(44, 115, 217, 0.08)' : 'transparent',
                                borderBottom: active ? '2.5px solid #2c73d9' : '2.5px solid transparent',
                                color: active ? 'var(--brand-accent)' : 'var(--text-muted)',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                textAlign: 'center'
                              }}
                            >
                              <div className="d-flex align-items-center justify-content-center gap-2">
                                <IconComp size={15} />
                                <span style={{ fontSize: '12px', fontWeight: active ? 700 : 500 }}>{t.label}</span>
                              </div>
                              <div className="ar-font" style={{ fontSize: '11px', marginTop: 2, opacity: 0.85 }}>{t.ar}</div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Cockpit Dynamic Views */}
                      <div style={{ padding: '24px' }}>
                        {activeTab === 'orders' && (
                          <div>
                            <div className="row g-3 mb-4">
                              <div className="col-4">
                                <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(44, 115, 217, 0.06)', border: '1px solid rgba(44, 115, 217, 0.12)' }}>
                                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Today&apos;s Volume</div>
                                  <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)', marginTop: 2 }}>482,900 SAR</div>
                                </div>
                              </div>
                              <div className="col-4">
                                <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(44, 115, 217, 0.06)', border: '1px solid rgba(44, 115, 217, 0.12)' }}>
                                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Synced SKUs</div>
                                  <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--brand-accent)', marginTop: 2 }}>18,420 Active</div>
                                </div>
                              </div>
                              <div className="col-4">
                                <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(44, 115, 217, 0.06)', border: '1px solid rgba(44, 115, 217, 0.12)' }}>
                                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Sync Latency</div>
                                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#10b981', marginTop: 2 }}>0.14s Avg</div>
                                </div>
                              </div>
                            </div>

                            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12, display: 'flex', justifyContent: 'space-between' }}>
                              <span>Real-Time Ingestion Pipeline</span>
                              <span style={{ color: '#10b981' }}>● Active Stream</span>
                            </div>

                            <div className="d-flex flex-column gap-2">
                              {[
                                { id: '#SA-98241', item: 'Executive Chair x2', amount: '1,840 SAR', status: 'Posted to Oracle ERP', time: 'Just now' },
                                { id: '#SA-98240', item: 'Wireless Barcode Scanner', amount: '620 SAR', status: 'Stock Reserved in Odoo', time: '12s ago' },
                                { id: '#SA-98239', item: 'POS Terminal Ribbon x10', amount: '450 SAR', status: 'General Ledger Reconciled', time: '45s ago' }
                              ].map((order, i) => (
                                <div key={i} style={{
                                  padding: '10px 14px',
                                  borderRadius: '10px',
                                  background: 'rgba(44, 115, 217, 0.04)',
                                  border: '1px solid rgba(44, 115, 217, 0.1)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  fontSize: '12px'
                                }}>
                                  <div>
                                    <span style={{ fontWeight: 700, color: 'var(--brand-accent)', marginRight: 8 }}>{order.id}</span>
                                    <span style={{ color: 'var(--text-primary)' }}>{order.item}</span>
                                    <div style={{ fontSize: '11px', color: '#10b981', marginTop: 2 }}>✓ {order.status}</div>
                                  </div>
                                  <div className="text-end">
                                    <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{order.amount}</div>
                                    <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{order.time}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTab === 'zatca' && (
                          <div>
                            <div style={{
                              padding: '14px',
                              borderRadius: '12px',
                              background: 'rgba(44, 115, 217, 0.08)',
                              border: '1px solid rgba(44, 115, 217, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              marginBottom: 16
                            }}>
                              <div>
                                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>
                                  ZATCA FATOORA Phase 2 Integration
                                </div>
                                <div className="ar-font" style={{ fontSize: '11px', color: 'var(--brand-accent)', marginTop: 2 }}>
                                  الربط المباشر مع منصة فاتورة - هيئة الزكاة والضريبة والجمارك
                                </div>
                              </div>
                              <span style={{
                                padding: '4px 10px',
                                borderRadius: '20px',
                                fontSize: '11px',
                                fontWeight: 700,
                                background: '#10b981',
                                color: '#ffffff'
                              }}>
                                Certified Compliant
                              </span>
                            </div>

                            <div className="d-flex flex-column gap-2 mb-3">
                              {[
                                { step: '1. UBL 2.1 Standard XML Invoicing', status: 'Auto-Generated on Checkout' },
                                { step: '2. Cryptographic Hash Chaining', status: 'SHA-256 Verified' },
                                { step: '3. Digital ECDSA Signature Stamping', status: 'X.509 Compliance Token' },
                                { step: '4. FATOORA Portal API Transmission', status: 'Cleared & Cleared-ACK < 0.3s' }
                              ].map((step, idx) => (
                                <div key={idx} style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  padding: '10px 12px',
                                  borderRadius: '8px',
                                  background: 'rgba(44, 115, 217, 0.04)',
                                  fontSize: '12px'
                                }}>
                                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{step.step}</span>
                                  <span style={{ color: '#10b981', fontWeight: 600 }}>✓ {step.status}</span>
                                </div>
                              ))}
                            </div>

                            <div style={{
                              padding: '10px',
                              borderRadius: '8px',
                              background: 'rgba(0, 212, 255, 0.06)',
                              border: '1px dashed rgba(0, 212, 255, 0.3)',
                              fontSize: '11px',
                              color: 'var(--text-secondary)'
                            }}>
                              🔒 <strong>Zero Manual Invoicing:</strong> Fully automated clearance for both B2B standard invoices and B2C simplified receipts with cryptographic QR codes attached.
                            </div>
                          </div>
                        )}

                        {activeTab === 'logistics' && (
                          <div>
                            <div className="row g-3 mb-3">
                              <div className="col-6">
                                <div style={{ padding: '14px', borderRadius: '12px', background: 'rgba(44, 115, 217, 0.06)', border: '1px solid rgba(44, 115, 217, 0.15)' }}>
                                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Payment Engine</div>
                                  <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginTop: 4 }}>mada / Apple Pay / STC</div>
                                  <div style={{ fontSize: '11px', color: '#10b981', marginTop: 4 }}>✓ Settlement Auto-Reconciled</div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div style={{ padding: '14px', borderRadius: '12px', background: 'rgba(44, 115, 217, 0.06)', border: '1px solid rgba(44, 115, 217, 0.15)' }}>
                                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Courier Dispatch</div>
                                  <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginTop: 4 }}>SMSA / Aramex / SPL</div>
                                  <div style={{ fontSize: '11px', color: '#10b981', marginTop: 4 }}>✓ Automated AWB & Label</div>
                                </div>
                              </div>
                            </div>

                            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10 }}>
                              Automated Dispatch Sequence
                            </div>

                            <div className="d-flex flex-column gap-2">
                              {[
                                { courier: 'SMSA Express', city: 'Riyadh -> Jeddah Hub', awb: 'AWB-88391024', status: 'Out for Delivery' },
                                { courier: 'Aramex Domestic', city: 'Dammam -> Khobar', awb: 'AWB-55420199', status: 'Driver Manifest Printed' },
                                { courier: 'SPL Express', city: 'Riyadh -> Medina', awb: 'AWB-22941031', status: 'Sorting Facility Ingest' }
                              ].map((item, idx) => (
                                <div key={idx} style={{
                                  padding: '10px 14px',
                                  borderRadius: '8px',
                                  background: 'rgba(44, 115, 217, 0.04)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  fontSize: '12px'
                                }}>
                                  <div>
                                    <span style={{ fontWeight: 700, color: 'var(--brand-accent)' }}>{item.courier}</span>
                                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.city}</div>
                                  </div>
                                  <div className="text-end">
                                    <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-primary)' }}>{item.awb}</div>
                                    <div style={{ fontSize: '10px', color: '#10b981' }}>● {item.status}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. CORE SOLUTIONS MATRIX */}
              <section className="pt-60 pb-60">
                <div className="text-center mb-50">
                  <div className="salla-hero-badge">Enterprise Capabilities</div>
                  <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: 'var(--heading-color)' }}>
                    Comprehensive Salla Integration Capabilities
                  </h2>
                  <div className="ar-subtitle" dir="rtl">
                    حلول الربط المؤسسي المتكاملة لمنصة سلة مع الأنظمة والخدمات اللوجستية
                  </div>
                  <p className="text-base color-gray-600" style={{ maxWidth: 720, margin: '10px auto 0' }}>
                    Engineered for high-volume merchants and enterprise groups operating across Saudi Arabia, ensuring real-time operational continuity and total compliance.
                  </p>
                </div>

                <div className="row g-4">
                  {solutions.map((sol, index) => {
                    const IconComponent = sol.icon;
                    return (
                      <div key={index} className="col-lg-4 col-md-6">
                        <div className="salla-feature-card">
                          <div style={{
                            width: 56,
                            height: 56,
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, rgba(44, 115, 217, 0.15) 0%, rgba(0, 212, 255, 0.1) 100%)',
                            border: '1px solid rgba(44, 115, 217, 0.25)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 20,
                            color: 'var(--brand-accent)'
                          }}>
                            <IconComponent size={28} />
                          </div>

                          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 4, color: 'var(--heading-color)' }}>
                            {sol.title}
                          </h3>

                          <div className="ar-font" dir="rtl" style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: 'var(--brand-accent)',
                            marginBottom: 14
                          }}>
                            {sol.arTitle}
                          </div>

                          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>
                            {sol.desc}
                          </p>

                          <div className="d-flex flex-wrap gap-2 mt-20 pt-16" style={{ borderTop: '1px solid rgba(44, 115, 217, 0.1)' }}>
                            {sol.tags.map((tag, tIdx) => (
                              <span key={tIdx} style={{
                                fontSize: '11px',
                                fontWeight: 600,
                                padding: '3px 10px',
                                borderRadius: '6px',
                                background: 'rgba(44, 115, 217, 0.06)',
                                color: 'var(--text-secondary)'
                              }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 3. INTERACTIVE 6-PHASE DELIVERY TIMELINE */}
              <section className="pt-60 pb-60">
                <div className="text-center mb-50">
                  <div className="salla-hero-badge">Proven Methodology</div>
                  <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: 'var(--heading-color)' }}>
                    6-Phase Salla Integration Timeline
                  </h2>
                  <div className="ar-subtitle" dir="rtl">
                    الخطة الزمنية المتكاملة لتنفيذ واختبار وتدشين الربط المؤسسي
                  </div>
                  <p className="text-base color-gray-600" style={{ maxWidth: 700, margin: '10px auto 0' }}>
                    A systematic, zero-interruption integration roadmap delivered by certified Saudi enterprise integration specialists.
                  </p>
                </div>

                <div className="row g-4 align-items-center">
                  {/* Left Column: Interactive Stepper Buttons */}
                  <div className="col-lg-5">
                    <div className="d-flex flex-column gap-3">
                      {timelinePhases.map((phase, idx) => {
                        const active = activePhase === idx;
                        return (
                          <button
                            key={idx}
                            className={`salla-step-btn ${active ? 'active' : ''}`}
                            onClick={() => {
                              setActivePhase(idx);
                              setIsPlaying(false);
                            }}
                          >
                            <div style={{
                              width: 38,
                              height: 38,
                              borderRadius: '10px',
                              background: active ? 'linear-gradient(135deg, #2c73d9, #00d4ff)' : 'rgba(44, 115, 217, 0.1)',
                              color: active ? '#ffffff' : 'var(--brand-accent)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 800,
                              fontSize: '14px',
                              flexShrink: 0
                            }}>
                              {phase.number}
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-primary)' }}>
                                {phase.phase}
                              </div>
                              <div className="ar-font" dir="rtl" style={{ fontSize: '12px', color: 'var(--brand-accent)', marginTop: 2 }}>
                                {phase.arTitle}
                              </div>
                            </div>
                            <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)' }}>
                              {phase.duration}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-3 px-2">
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        Phase {activePhase + 1} of {timelinePhases.length}
                      </span>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--brand-accent)',
                          fontSize: '12px',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          cursor: 'pointer'
                        }}
                      >
                        {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                        {isPlaying ? 'Pause auto-advance' : 'Resume auto-advance'}
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Active Phase Detail Card */}
                  <div className="col-lg-7">
                    <div style={{
                      background: '#ffffff',
                      border: '2px solid rgba(44, 115, 217, 0.25)',
                      borderRadius: '24px',
                      padding: '40px',
                      boxShadow: '0 20px 50px rgba(40, 36, 96, 0.08)',
                      position: 'relative'
                    }}>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span style={{
                          fontSize: '13px',
                          fontWeight: 800,
                          letterSpacing: 1,
                          textTransform: 'uppercase',
                          color: 'var(--brand-accent)'
                        }}>
                          Phase {timelinePhases[activePhase].number} • {timelinePhases[activePhase].duration}
                        </span>
                        <span style={{
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: 700,
                          background: 'rgba(16, 185, 129, 0.1)',
                          color: '#10b981'
                        }}>
                          Milestone Verified
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 6, color: 'var(--heading-color)' }}>
                        {timelinePhases[activePhase].phase}
                      </h3>

                      <div className="ar-subtitle" dir="rtl" style={{ fontSize: '16px', marginBottom: 18 }}>
                        {timelinePhases[activePhase].arTitle}
                      </div>

                      <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 28 }}>
                        {timelinePhases[activePhase].desc}
                      </p>

                      <div style={{ marginBottom: 28 }}>
                        <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, color: 'var(--text-primary)', marginBottom: 12 }}>
                          Key Milestone Deliverables
                        </div>
                        <div className="d-flex flex-column gap-2">
                          {timelinePhases[activePhase].deliverables.map((item, dIdx) => (
                            <div key={dIdx} style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 10,
                              fontSize: '13.5px',
                              color: 'var(--text-secondary)'
                            }}>
                              <CheckCircle2 size={18} color="#10b981" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div style={{
                        paddingTop: '20px',
                        borderTop: '1px solid rgba(44, 115, 217, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <div>
                          <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>
                            Assigned Altapete Team
                          </div>
                          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', marginTop: 2 }}>
                            {timelinePhases[activePhase].roles.join(" • ")}
                          </div>
                        </div>

                        <div className="d-flex gap-2">
                          <button
                            onClick={() => {
                              setActivePhase((prev) => (prev > 0 ? prev - 1 : timelinePhases.length - 1));
                              setIsPlaying(false);
                            }}
                            style={{
                              width: 38,
                              height: 38,
                              borderRadius: '10px',
                              border: '1px solid rgba(44, 115, 217, 0.2)',
                              background: 'transparent',
                              cursor: 'pointer',
                              color: 'var(--text-primary)',
                              fontWeight: 700
                            }}
                          >
                            ←
                          </button>
                          <button
                            onClick={() => {
                              setActivePhase((prev) => (prev + 1) % timelinePhases.length);
                              setIsPlaying(false);
                            }}
                            style={{
                              width: 38,
                              height: 38,
                              borderRadius: '10px',
                              border: '1px solid rgba(44, 115, 217, 0.2)',
                              background: 'transparent',
                              cursor: 'pointer',
                              color: 'var(--text-primary)',
                              fontWeight: 700
                            }}
                          >
                            →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. TECHNICAL ARCHITECTURE BLUEPRINT */}
              <section id="architecture-section" className="pt-60 pb-60">
                <div className="text-center mb-50">
                  <div className="salla-hero-badge">Systems Architecture</div>
                  <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: 'var(--heading-color)' }}>
                    Enterprise Integration Conduit Blueprint
                  </h2>
                  <div className="ar-subtitle" dir="rtl">
                    الهندسة التقنية لمسارات تدفق البيانات والأمان العالي
                  </div>
                  <p className="text-base color-gray-600" style={{ maxWidth: 700, margin: '10px auto 0' }}>
                    How Altapete links storefront webhooks to back-office databases with cryptographic security and sub-second queueing.
                  </p>
                </div>

                <div className="row g-4">
                  {[
                    {
                      layer: "Layer 1",
                      title: "Salla Commerce Layer",
                      ar: "واجهة متجر سلة",
                      icon: ShoppingCart,
                      items: ["Salla Twilight API", "Storefront Webhooks", "Shopper Checkout Cart", "Customer Accounts"]
                    },
                    {
                      layer: "Layer 2",
                      title: "Altapete Event Gateway",
                      ar: "بوابة المعالجة والاصطفاف",
                      icon: Cpu,
                      items: ["mTLS Mutual Authentication", "Redis Distributed Queue", "Payload Schema Validation", "Dead-Letter Auto Recovery"]
                    },
                    {
                      layer: "Layer 3",
                      title: "Compliance & Orchestration",
                      ar: "محرك الامتثال والربط",
                      icon: ShieldCheck,
                      items: ["ZATCA Phase 2 Cryptography", "UBL 2.1 XML Generator", "Airway Bill Dispatcher", "Payment Fee Reconciliation"]
                    },
                    {
                      layer: "Layer 4",
                      title: "Enterprise Core Backends",
                      ar: "الأنظمة المؤسسية المركزية",
                      icon: Server,
                      items: ["Oracle / SAP / Odoo ERP", "Warehouse Management (WMS)", "Bank Accounts & Ledgers", "Courier Logistics Network"]
                    }
                  ].map((node, nIdx) => {
                    const NIcon = node.icon;
                    return (
                      <div key={nIdx} className="col-lg-3 col-md-6">
                        <div className="salla-arch-node h-100 d-flex flex-column">
                          <div style={{
                            fontSize: '11px',
                            fontWeight: 800,
                            letterSpacing: 1,
                            textTransform: 'uppercase',
                            color: 'var(--brand-accent)',
                            marginBottom: 8
                          }}>
                            {node.layer}
                          </div>

                          <div style={{
                            width: 46,
                            height: 46,
                            borderRadius: '12px',
                            background: 'rgba(44, 115, 217, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 14px',
                            color: 'var(--brand-accent)'
                          }}>
                            <NIcon size={24} />
                          </div>

                          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 2, color: 'var(--heading-color)' }}>
                            {node.title}
                          </h4>

                          <div className="ar-font" dir="rtl" style={{ fontSize: '12px', color: 'var(--brand-accent)', marginBottom: 14 }}>
                            {node.ar}
                          </div>

                          <div className="d-flex flex-column gap-2 text-start mt-auto" style={{
                            borderTop: '1px solid rgba(44, 115, 217, 0.12)',
                            paddingTop: '14px'
                          }}>
                            {node.items.map((it, itIdx) => (
                              <div key={itIdx} style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 6 }}>
                                <span style={{ color: '#10b981', fontWeight: 'bold' }}>•</span>
                                <span>{it}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 5. TRACK RECORD & KEY PERFORMANCE INDICATORS */}
              <section className="pt-40 pb-60">
                <div className="row g-4">
                  {[
                    { metric: "99.98%", label: "Integration SLA Uptime", sub: "Enterprise High Availability", ar: "نسبة توفر الخدمة السحابية" },
                    { metric: "< 200ms", label: "Average Sync Latency", sub: "Real-Time Event Processing", ar: "سرعة مزامنة الطلبات والبيانات" },
                    { metric: "120M+ SAR", label: "Annual GMV Routed", sub: "Processed Through Altapete Conduits", ar: "حجم المعاملات السنوية المدارة" },
                    { metric: "100%", label: "ZATCA Compliance", sub: "Phase 2 Clearance Acceptance", ar: "مطابقة تامة لمتطلبات هيئة الزكاة" }
                  ].map((kpi, kIdx) => (
                    <div key={kIdx} className="col-lg-3 col-sm-6">
                      <div className="salla-kpi-card h-100">
                        <div style={{
                          fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                          fontWeight: 800,
                          background: 'linear-gradient(135deg, #2c73d9 0%, #00d4ff 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          lineHeight: 1.1,
                          marginBottom: 8
                        }}>
                          {kpi.metric}
                        </div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--heading-color)' }}>
                          {kpi.label}
                        </div>
                        <div className="ar-font" dir="rtl" style={{ fontSize: '11px', color: 'var(--brand-accent)', margin: '4px 0' }}>
                          {kpi.ar}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                          {kpi.sub}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. FREQUENTLY ASKED QUESTIONS */}
              <section className="pt-40 pb-60">
                <div className="text-center mb-50">
                  <div className="salla-hero-badge">Merchant Intelligence</div>
                  <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: 'var(--heading-color)' }}>
                    Frequently Asked Questions
                  </h2>
                  <div className="ar-subtitle" dir="rtl">
                    الأسئلة الشائعة حول تكامل متجر سلة مع الأنظمة المحاسبية
                  </div>
                  <p className="text-base color-gray-600" style={{ maxWidth: 680, margin: '10px auto 0' }}>
                    Straightforward answers about architecture, ZATCA Phase 2 compliance, and integration milestones.
                  </p>
                </div>

                <div style={{ maxWidth: 880, margin: '0 auto' }}>
                  {faqs.map((faq, fIdx) => {
                    const isOpen = openFaq === fIdx;
                    return (
                      <div key={fIdx} className={`salla-faq-item ${isOpen ? 'active' : ''}`}>
                        <button
                          onClick={() => setOpenFaq(isOpen ? -1 : fIdx)}
                          style={{
                            width: '100%',
                            padding: '22px 26px',
                            background: 'none',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            textAlign: 'left',
                            gap: 16
                          }}
                        >
                          <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>
                            {faq.question}
                          </span>
                          <div style={{
                            width: 28,
                            height: 28,
                            borderRadius: '8px',
                            background: isOpen ? 'rgba(44, 115, 217, 0.15)' : 'rgba(44, 115, 217, 0.06)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--brand-accent)',
                            flexShrink: 0
                          }}>
                            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                          </div>
                        </button>
                        {isOpen && (
                          <div style={{
                            padding: '0 26px 24px',
                            fontSize: '14.5px',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                            borderTop: '1px solid rgba(44, 115, 217, 0.1)'
                          }}>
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 7. STRATEGIC CONSULTATION & DIRECT CTA */}
              <section id="contact-salla" className="pt-40 pb-80">
                <div style={{
                  background: 'linear-gradient(135deg, rgba(40, 36, 96, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
                  borderRadius: '28px',
                  padding: '50px 40px',
                  border: '1.5px solid rgba(44, 115, 217, 0.35)',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
                  color: '#ffffff',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-40%',
                    right: '-20%',
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%)',
                    filter: 'blur(50px)'
                  }} />

                  <div className="row align-items-center g-4 position-relative" style={{ zIndex: 2 }}>
                    <div className="col-lg-7">
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '6px 16px',
                        borderRadius: '20px',
                        background: 'rgba(0, 212, 255, 0.15)',
                        border: '1px solid rgba(0, 212, 255, 0.35)',
                        color: '#00d4ff',
                        fontSize: '12px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginBottom: 16
                      }}>
                        <Sparkles size={14} />
                        Saudi Integration Advisory
                      </div>

                      <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.6rem)', fontWeight: 800, color: '#ffffff', marginBottom: 12 }}>
                        Ready to Connect Your Salla Store to Enterprise Power?
                      </h2>

                      <div className="ar-font" dir="rtl" style={{
                        fontSize: '16px',
                        color: '#00d4ff',
                        fontWeight: 700,
                        marginBottom: 16
                      }}>
                        ابدأ رحلة الربط المؤسسي لمتجرك مع أنظمة تخطيط الموارد والفاتورة الإلكترونية
                      </div>

                      <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.7, maxWidth: 600 }}>
                        Speak directly with our senior Saudi integration architects in Riyadh or Al Khobar. We will analyze your SKU structure, ERP workflows, and deliver a tailored execution roadmap.
                      </p>
                    </div>

                    <div className="col-lg-5">
                      <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '20px',
                        padding: '28px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16
                      }}>
                        <a
                          href="https://wa.me/966568029153"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: '#25D366',
                            color: '#ffffff',
                            padding: '14px 20px',
                            borderRadius: '12px',
                            fontWeight: 700,
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 10,
                            boxShadow: '0 8px 20px rgba(37, 211, 102, 0.3)'
                          }}
                        >
                          <MessageSquare size={18} />
                          Chat on WhatsApp: +966 56 802 9153
                        </a>

                        <a
                          href="tel:+966551013823"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: '#ffffff',
                            padding: '14px 20px',
                            borderRadius: '12px',
                            fontWeight: 700,
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 10
                          }}
                        >
                          <Phone size={18} />
                          Call Saudi Office: +966 55 101 3823
                        </a>

                        <a
                          href="mailto:info@altapetesolutions.com"
                          style={{
                            background: 'transparent',
                            border: '1px dashed rgba(255, 255, 255, 0.25)',
                            color: '#cbd5e1',
                            padding: '12px 20px',
                            borderRadius: '12px',
                            fontWeight: 600,
                            fontSize: '13px',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 8
                          }}
                        >
                          Send RFQ to info@altapetesolutions.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
