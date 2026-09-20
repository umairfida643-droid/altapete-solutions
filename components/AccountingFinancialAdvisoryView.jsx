import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  Sparkles,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Calculator,
  FileText,
  PieChart,
  BookOpen,
  Award,
  Layers,
  Scale
} from 'lucide-react';

const services = [
  {
    id: 'accounting-outsourcing',
    num: '01',
    tag: 'Core',
    title: 'Accounting Management & Outsourcing',
    arabicTitle: 'إدارة المحاسبة وخدمات التعهيد',
    desc: 'End-to-end accounting operations handled by our team — books, ledgers, and closings kept accurate and audit-ready.',
    features: [
      'Bookkeeping & Ledger',
      'Bank Reconciliation',
      'Payables & Receivables',
      'Month-End Close'
    ],
    statVal: '99.8%',
    statLabel: 'Accuracy Rate',
    icon: BookOpen
  },
  {
    id: 'fractional-cfo',
    num: '02',
    tag: 'Advisory',
    title: 'Fractional CFO',
    arabicTitle: 'المدير المالي الجزئي',
    desc: 'Senior financial leadership on a part-time basis — strategic insight without the full-time cost.',
    features: [
      'Cash Flow Planning',
      'Financial Strategy',
      'Board Reporting',
      'Fundraising Support'
    ],
    statVal: '45%',
    statLabel: 'Cost Savings',
    icon: TrendingUp
  },
  {
    id: 'risk-assessment',
    num: '03',
    tag: 'Risk',
    title: 'Enterprise Risk Assessment & Control Advisory',
    arabicTitle: 'تقييم مخاطر المنشآت والاستشارات الرقابية',
    desc: 'Identify, assess, and mitigate risk across the organization, with controls designed to hold up under scrutiny.',
    features: [
      'Risk Framework',
      'Risk Registers',
      'Control Design',
      'Mitigation Plans'
    ],
    statVal: '100+',
    statLabel: 'Risk Frameworks',
    icon: ShieldCheck
  },
  {
    id: 'ecl',
    num: '04',
    tag: 'IFRS 9',
    title: 'Expected Credit Loss (ECL)',
    arabicTitle: 'خسائر الائتمان المتوقعة (ECL)',
    desc: 'IFRS 9 impairment modelling calibrated to your portfolio, with staging logic and disclosures ready for audit.',
    features: [
      'PD / LGD / EAD Models',
      'Staging Criteria',
      'Scenario Weighting',
      'Disclosure Support'
    ],
    statVal: 'IFRS 9',
    statLabel: 'Compliant Models',
    icon: Calculator
  },
  {
    id: 'actuarial-valuation',
    num: '05',
    tag: 'Valuation',
    title: 'Actuarial Valuation',
    arabicTitle: 'التقييم الاكتواري',
    desc: 'End-of-service, pension, and employee benefit valuations prepared to recognised actuarial standards.',
    features: [
      'End-of-Service Benefits',
      'Pension Valuation',
      'IAS 19 Reporting',
      'Liability Modeling'
    ],
    statVal: '30+',
    statLabel: 'Years Experience',
    icon: Scale
  },
  {
    id: 'ifrs-advisory',
    num: '06',
    tag: 'Compliance',
    title: 'IFRS Advisory & Implementation',
    arabicTitle: 'الاستشارات وتطبيق المعايير الدولية لإعداد التقارير المالية (IFRS)',
    desc: 'Expert IFRS adoption, transition, and ongoing compliance across all relevant standards.',
    features: [
      'IFRS 9 & 16',
      'Standard Transition',
      'Training Programs',
      'Policy Development'
    ],
    statVal: '50+',
    statLabel: 'IFRS Projects',
    icon: Layers
  },
  {
    id: 'accounting-policies',
    num: '07',
    tag: 'Policy',
    title: 'Accounting Policies & Procedures Manual',
    arabicTitle: 'دليل السياسات والإجراءات المحاسبية',
    desc: 'Written policy manuals and procedure documentation that turn best practice into everyday routine.',
    features: [
      'Policy Manuals',
      'Procedure Docs',
      'Control Mapping',
      'Approval Matrices'
    ],
    statVal: '80+',
    statLabel: 'Manuals Created',
    icon: FileText
  },
  {
    id: 'management-reporting',
    num: '08',
    tag: 'Reporting',
    title: 'Management Reporting',
    arabicTitle: 'التقارير الإدارية',
    desc: 'Reports that drive decisions — accurate, timely, and built around the numbers your board actually asks for.',
    features: [
      'Board Reports',
      'Dashboard Design',
      'KPI Tracking',
      'Variance Analysis'
    ],
    statVal: '85%',
    statLabel: 'Faster Reporting',
    icon: PieChart
  },
  {
    id: 'tax-enquiry-support',
    num: '09',
    tag: 'Tax',
    title: 'Tax Enquiry Support',
    arabicTitle: 'دعم الاستفسارات الضريبية',
    desc: 'Specialized advisory and formal representation for ZATCA tax inquiries, audits, and official technical assessments.',
    features: [
      'ZATCA Correspondence',
      'Audit Defense',
      'Penalty Mitigation',
      'Assessment Review'
    ],
    statVal: '100%',
    statLabel: 'Query Resolution',
    icon: Award
  }
];

export default function AccountingFinancialAdvisoryView() {
  const [activeService, setActiveService] = useState(0);

  const handleServiceSelect = (index) => {
    setActiveService(index);
    const cardEl = document.getElementById(`service-card-${index}`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="afa-page-wrapper">
      <style jsx global>{`
        /* Dark Theme Variables */
        [data-theme="dark"] .afa-portfolio-box {
          background: rgba(13, 24, 48, 0.75);
          border: 1px solid rgba(0, 174, 239, 0.25);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        }
        [data-theme="dark"] .afa-service-card {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.07);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }
        [data-theme="dark"] .afa-service-card.active {
          background: rgba(0, 174, 239, 0.08) !important;
          border: 1.5px solid rgba(0, 174, 239, 0.45) !important;
          box-shadow: 0 20px 48px rgba(0, 174, 239, 0.2) !important;
        }

        /* Light Theme Variables */
        [data-theme="light"] .afa-portfolio-box {
          background: #ffffff;
          border: 1px solid rgba(0, 174, 239, 0.25);
          box-shadow: 0 10px 30px rgba(0, 102, 204, 0.08);
        }
        [data-theme="light"] .afa-service-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        [data-theme="light"] .afa-service-card.active {
          background: #ffffff !important;
          border: 1.5px solid #00AEEF !important;
          box-shadow: 0 16px 36px rgba(0, 174, 239, 0.18) !important;
        }
        [data-theme="light"] .afa-hero-h1 {
          color: #0f172a !important;
        }
        [data-theme="light"] .afa-section-h2 {
          color: #0f172a !important;
        }
        [data-theme="light"] .afa-card-h3 {
          color: #0f172a !important;
        }

        /* Common Styles */
        .afa-portfolio-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 8px;
          margin-bottom: 3px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          user-select: none;
        }
        .afa-portfolio-item:hover {
          background: rgba(0, 174, 239, 0.06);
          transform: translateX(4px);
        }
        .afa-portfolio-item.active {
          background: rgba(0, 174, 239, 0.12) !important;
          border: 1px solid rgba(0, 174, 239, 0.35) !important;
          transform: translateX(4px);
          box-shadow: 0 4px 14px rgba(0, 174, 239, 0.15);
        }

        .afa-service-card {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        .afa-service-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 174, 239, 0.4);
          box-shadow: 0 16px 36px rgba(0, 174, 239, 0.15);
        }
        .afa-service-card.active {
          transform: translateY(-6px);
        }

        @media (max-width: 991px) {
          .afa-services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .afa-services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="cover-home1">
        <div className="container">
          <div className="row">
            <div className="col-xl-1" />
            <div className="col-xl-10 col-lg-12">
              <div style={{ overflow: 'hidden', width: '100%' }}>

                {/* ===================================================================
                    HERO SECTION: LEFT COPY & RIGHT SERVICES PORTFOLIO (CLICKABLE)
                    =================================================================== */}
                <div className="container" style={{ padding: '40px 0 60px' }}>
                  <div className="row align-items-center gy-5">

                    {/* Left Column: Hero Intro */}
                    <div className="col-lg-5">
                      {/* Category Badge */}
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        background: 'rgba(0, 174, 239, 0.08)',
                        border: '1px solid rgba(0, 174, 239, 0.22)',
                        borderRadius: 6,
                        padding: '5px 13px',
                        marginBottom: 22
                      }}>
                        <span style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: '#00AEEF',
                          display: 'block',
                          boxShadow: '0 0 8px #00AEEF'
                        }} />
                        <span style={{
                          color: '#00AEEF',
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: 2,
                          textTransform: 'uppercase'
                        }}>
                          Financial Services
                        </span>
                      </div>

                      {/* Main Heading */}
                      <h1 className="afa-hero-h1" style={{
                        fontSize: 'clamp(26px, 4vw, 42px)',
                        fontWeight: 800,
                        lineHeight: 1.15,
                        marginBottom: 14,
                        textTransform: 'uppercase',
                        color: 'var(--heading-color)'
                      }}>
                        Financial<br />
                        <span style={{ color: '#00AEEF' }}>Advisory</span><br />
                        Services
                      </h1>

                      {/* Lead Subtitle */}
                      <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: 'clamp(14px, 1.7vw, 15px)',
                        lineHeight: 1.7,
                        marginBottom: 28,
                        maxWidth: 400
                      }}>
                        Certified experts delivering end-to-end financial solutions — from accounting management to actuarial valuation.
                      </p>

                      {/* Stats Overview */}
                      <div style={{
                        display: 'flex',
                        borderRadius: 10,
                        overflow: 'hidden',
                        border: '1px solid rgba(0, 174, 239, 0.18)',
                        marginBottom: 28
                      }}>
                        <div style={{
                          flex: 1,
                          textAlign: 'center',
                          padding: '14px 8px',
                          background: 'rgba(0, 174, 239, 0.05)',
                          borderRight: '1px solid rgba(0, 174, 239, 0.14)'
                        }}>
                          <div style={{
                            color: '#00AEEF',
                            fontWeight: 800,
                            lineHeight: 1,
                            fontSize: 'clamp(20px, 3vw, 26px)'
                          }}>
                            150+
                          </div>
                          <div style={{
                            color: 'var(--text-muted)',
                            fontSize: 10,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: 1.2,
                            marginTop: 5
                          }}>
                            Clients
                          </div>
                        </div>

                        <div style={{
                          flex: 1,
                          textAlign: 'center',
                          padding: '14px 8px',
                          background: 'rgba(0, 174, 239, 0.05)',
                          borderRight: '1px solid rgba(0, 174, 239, 0.14)'
                        }}>
                          <div style={{
                            color: '#00AEEF',
                            fontWeight: 800,
                            lineHeight: 1,
                            fontSize: 'clamp(20px, 3vw, 26px)'
                          }}>
                            9
                          </div>
                          <div style={{
                            color: 'var(--text-muted)',
                            fontSize: 10,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: 1.2,
                            marginTop: 5
                          }}>
                            Services
                          </div>
                        </div>

                        <div style={{
                          flex: 1,
                          textAlign: 'center',
                          padding: '14px 8px',
                          background: 'rgba(0, 174, 239, 0.05)'
                        }}>
                          <div style={{
                            color: '#00AEEF',
                            fontWeight: 800,
                            lineHeight: 1,
                            fontSize: 'clamp(20px, 3vw, 26px)'
                          }}>
                            20+
                          </div>
                          <div style={{
                            color: 'var(--text-muted)',
                            fontSize: 10,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: 1.2,
                            marginTop: 5
                          }}>
                            Experts
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link
                        href="/contact-us"
                        className="btn btn-brand-1"
                        style={{
                          padding: '14px 30px',
                          fontWeight: 700,
                          borderRadius: 10,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 10
                        }}
                      >
                        Get Started
                        <ArrowRight size={16} />
                      </Link>
                    </div>

                    {/* Right Column: Interactive Clickable Services Portfolio */}
                    <div className="col-lg-7">
                      <div className="afa-portfolio-box" style={{
                        borderRadius: 16,
                        overflow: 'hidden',
                        backdropFilter: 'blur(16px)'
                      }}>
                        {/* Box Window Bar */}
                        <div style={{
                          background: 'rgba(0, 174, 239, 0.08)',
                          borderBottom: '1px solid rgba(0, 174, 239, 0.15)',
                          padding: '12px 20px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <span style={{
                            color: '#00AEEF',
                            fontSize: 11,
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: 2
                          }}>
                            Services Portfolio
                          </span>
                          <div style={{ display: 'flex', gap: 6 }}>
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56' }} />
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f' }} />
                          </div>
                        </div>

                        {/* List of 9 Clickable Services */}
                        <div style={{ padding: '8px 10px' }}>
                          {services.map((srv, idx) => {
                            const isActive = activeService === idx;

                            return (
                              <div
                                key={srv.id}
                                className={`afa-portfolio-item ${isActive ? 'active' : ''}`}
                                onClick={() => handleServiceSelect(idx)}
                              >
                                {/* Checkmark icon */}
                                <span style={{
                                  fontSize: 13,
                                  fontWeight: 700,
                                  minWidth: 16,
                                  color: isActive ? '#00AEEF' : 'rgba(0, 174, 239, 0.35)',
                                  transition: 'color 0.25s ease'
                                }}>
                                  <Check size={16} strokeWidth={isActive ? 3 : 2} />
                                </span>

                                {/* Vertical Indicator Line */}
                                <div style={{
                                  width: 2,
                                  height: 30,
                                  borderRadius: 2,
                                  flexShrink: 0,
                                  background: isActive ? '#00AEEF' : 'rgba(0, 174, 239, 0.15)',
                                  boxShadow: isActive ? '0 0 8px #00AEEF' : 'none',
                                  transition: 'all 0.25s ease'
                                }} />

                                {/* Titles (English & Arabic) */}
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <span style={{
                                    display: 'block',
                                    fontSize: 'clamp(11px, 1.4vw, 13px)',
                                    fontWeight: isActive ? 700 : 500,
                                    color: isActive ? 'var(--heading-color)' : 'var(--text-secondary)',
                                    lineHeight: 1.35,
                                    transition: 'all 0.25s ease'
                                  }}>
                                    {srv.title}
                                  </span>
                                  <span dir="rtl" style={{
                                    display: 'block',
                                    textAlign: 'left',
                                    fontSize: 'clamp(10px, 1.2vw, 12px)',
                                    fontWeight: 400,
                                    color: isActive ? '#00AEEF' : 'var(--text-muted)',
                                    lineHeight: 1.5,
                                    marginTop: 2,
                                    transition: 'color 0.25s ease'
                                  }}>
                                    {srv.arabicTitle}
                                  </span>
                                </div>

                                {/* Category Tag */}
                                <span style={{
                                  background: isActive ? 'rgba(0, 174, 239, 0.18)' : 'rgba(0, 174, 239, 0.05)',
                                  border: isActive ? '1px solid rgba(0, 174, 239, 0.45)' : '1px solid rgba(0, 174, 239, 0.15)',
                                  borderRadius: 20,
                                  padding: '2px 9px',
                                  fontSize: 9,
                                  fontWeight: 700,
                                  color: isActive ? '#00AEEF' : 'var(--text-muted)',
                                  textTransform: 'uppercase',
                                  letterSpacing: 0.8,
                                  whiteSpace: 'nowrap',
                                  transition: 'all 0.25s ease'
                                }}>
                                  {srv.tag}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* ===================================================================
                    SECTION 2: "WHAT WE OFFER" - 9 FULL SERVICE CARDS
                    =================================================================== */}
                <section id="what-we-offer-grid" style={{ padding: '40px 0 80px' }}>
                  <div className="container">
                    
                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: 52 }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        background: 'rgba(0, 174, 239, 0.08)',
                        border: '1px solid rgba(0, 174, 239, 0.22)',
                        borderRadius: 6,
                        padding: '5px 14px',
                        marginBottom: 16
                      }}>
                        <span style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: '#00AEEF',
                          display: 'block'
                        }} />
                        <span style={{
                          color: '#00AEEF',
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: 2,
                          textTransform: 'uppercase'
                        }}>
                          What We Offer
                        </span>
                      </div>

                      <h2 className="afa-section-h2" style={{
                        fontSize: 'clamp(26px, 4vw, 38px)',
                        fontWeight: 800,
                        lineHeight: 1.15,
                        marginBottom: 10,
                        color: 'var(--heading-color)'
                      }}>
                        Financial Advisory{' '}
                        <span style={{ color: '#00AEEF' }}>Services</span>
                      </h2>

                      <p dir="rtl" style={{
                        color: 'var(--text-secondary)',
                        fontSize: 'clamp(15px, 2vw, 18px)',
                        fontWeight: 600,
                        lineHeight: 1.6,
                        marginBottom: 12
                      }}>
                        خدمات المحاسبة والتدقيق والاستشارات المالية
                      </p>

                      <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: 'clamp(13px, 1.6vw, 15px)',
                        maxWidth: 480,
                        margin: '0 auto',
                        lineHeight: 1.7
                      }}>
                        Comprehensive accounting and financial advisory services tailored to your industry and scale.
                      </p>
                    </div>

                    {/* 3-Column Services Grid */}
                    <div
                      className="afa-services-grid"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 18
                      }}
                    >
                      {services.map((srv, idx) => {
                        const isActive = activeService === idx;

                        return (
                          <div
                            key={srv.id}
                            id={`service-card-${idx}`}
                            className={`afa-service-card ${isActive ? 'active' : ''}`}
                            onClick={() => setActiveService(idx)}
                          >
                            {/* Top indicator bar */}
                            <div style={{
                              height: 3,
                              background: isActive
                                ? 'linear-gradient(90deg, #00AEEF, #0088C7)'
                                : 'rgba(0, 174, 239, 0.12)',
                              transition: 'background 0.32s ease'
                            }} />

                            <div style={{
                              padding: '22px 22px 20px',
                              flex: 1,
                              display: 'flex',
                              flexDirection: 'column'
                            }}>
                              {/* Card Number & Top Icon */}
                              <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: 16
                              }}>
                                <div style={{
                                  fontSize: 32,
                                  fontWeight: 900,
                                  fontFamily: 'monospace',
                                  lineHeight: 1,
                                  color: isActive ? 'rgba(0, 174, 239, 0.35)' : 'rgba(0, 174, 239, 0.12)',
                                  transition: 'color 0.32s ease',
                                  userSelect: 'none'
                                }}>
                                  {srv.num}
                                </div>
                                <span style={{
                                  background: isActive ? 'rgba(0, 174, 239, 0.18)' : 'rgba(0, 174, 239, 0.06)',
                                  border: isActive ? '1px solid rgba(0, 174, 239, 0.45)' : '1px solid rgba(0, 174, 239, 0.15)',
                                  borderRadius: 20,
                                  padding: '2px 9px',
                                  fontSize: 9,
                                  fontWeight: 700,
                                  color: '#00AEEF',
                                  textTransform: 'uppercase',
                                  letterSpacing: 0.8
                                }}>
                                  {srv.tag}
                                </span>
                              </div>

                              {/* Title */}
                              <div style={{ marginBottom: 10 }}>
                                <h3 className="afa-card-h3" style={{
                                  fontSize: 'clamp(13px, 1.6vw, 15px)',
                                  fontWeight: 700,
                                  lineHeight: 1.35,
                                  margin: 0,
                                  color: isActive ? '#00AEEF' : 'var(--heading-color)',
                                  transition: 'color 0.32s ease'
                                }}>
                                  {srv.title}
                                </h3>
                              </div>

                              {/* Description */}
                              <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: 12,
                                lineHeight: 1.65,
                                marginBottom: 16,
                                flex: 1
                              }}>
                                {srv.desc}
                              </p>

                              {/* 4 Feature Pills */}
                              <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: 5,
                                marginBottom: 16
                              }}>
                                {srv.features.map((feat, fIdx) => (
                                  <div
                                    key={fIdx}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: 6,
                                      padding: '5px 8px',
                                      borderRadius: 6,
                                      background: 'rgba(0, 174, 239, 0.05)',
                                      border: '1px solid rgba(0, 174, 239, 0.1)'
                                    }}
                                  >
                                    <div style={{
                                      width: 4,
                                      height: 4,
                                      borderRadius: '50%',
                                      background: '#00AEEF',
                                      flexShrink: 0,
                                      opacity: isActive ? 1 : 0.6
                                    }} />
                                    <span style={{
                                      color: 'var(--text-secondary)',
                                      fontSize: 10,
                                      fontWeight: 500,
                                      lineHeight: 1.3
                                    }}>
                                      {feat}
                                    </span>
                                  </div>
                                ))}
                              </div>

                              {/* Stat Metric */}
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingTop: 14,
                                borderTop: '1px solid rgba(0, 174, 239, 0.12)'
                              }}>
                                <div>
                                  <div style={{
                                    color: '#00AEEF',
                                    fontSize: 'clamp(16px, 2vw, 20px)',
                                    fontWeight: 800,
                                    lineHeight: 1
                                  }}>
                                    {srv.statVal}
                                  </div>
                                  <div style={{
                                    color: 'var(--text-muted)',
                                    fontSize: 9,
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: 1,
                                    marginTop: 3
                                  }}>
                                    {srv.statLabel}
                                  </div>
                                </div>

                                <ChevronRight
                                  size={16}
                                  color="#00AEEF"
                                  style={{
                                    transform: isActive ? 'translateX(4px)' : 'none',
                                    transition: 'transform 0.25s ease'
                                  }}
                                />
                              </div>

                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
