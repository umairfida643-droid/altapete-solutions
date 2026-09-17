import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Users, UserCheck, UserPlus, TrendingUp, Award, ShieldCheck,
  Search, Sliders, Cpu, CheckCircle2, ArrowRight, ArrowUpRight,
  Sparkles, Check, ChevronRight, Briefcase, Laptop, Building2,
  GraduationCap, Truck, ShoppingBag, DollarSign, HeartHandshake,
  Clock, HardHat, FileText, Bell, Plus, Eye, BarChart3, Settings
} from 'lucide-react';

const taglines = [
  'Strategic Talent Acquisition',
  'Saudi Muqeem & Labor Compliance',
  'Automated Workforce Management',
  'Employee Lifecycle Optimization'
];

const hrServices = [
  {
    id: 'talent',
    title: 'Talent Acquisition & Recruitment',
    icon: UserPlus,
    desc: 'Strategic sourcing, AI-driven screening, and structured onboarding of elite talent to build high-performing, resilient enterprise teams.',
    features: ['Executive Search', 'Bulk Hiring Campaigns', 'Campus Recruitment', 'Background Verification']
  },
  {
    id: 'performance',
    title: 'Performance Management',
    icon: TrendingUp,
    desc: 'Data-driven performance tracking, OKR & KPI calibration, and 360-degree continuous feedback systems designed for organizational growth.',
    features: ['KPI Telemetry', '360° Peer Feedback', 'Annual Performance Reviews', 'PIP & Merit Roadmaps']
  },
  {
    id: 'development',
    title: 'Employee Development',
    icon: Award,
    desc: 'Bespoke corporate learning pathways, executive mentorship programs, and verified skill certification matrices for long-term retention.',
    features: ['Leadership Development', 'Technical Workshops', 'Accredited Certifications', 'Structured Mentorship']
  },
  {
    id: 'analytics',
    title: 'HR Analytics & Compliance',
    icon: ShieldCheck,
    desc: 'Real-time workforce analytics, predictive attrition models, and automated compliance auditing for Saudi Muqeem, Qiwa, and GOSI mandates.',
    features: ['Workforce Analytics', 'Muqeem & Qiwa Audits', 'Policy Enforcement', 'Labor Risk Mitigation']
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    subtitle: 'Understanding Your Workforce',
    icon: Search,
    duration: 'Week 1',
    desc: 'We conduct a comprehensive operational audit of your existing HR landscape, Muqeem workflows, organizational charts, and identify regulatory and efficiency bottlenecks.',
    activities: [
      'HR Workflow & Org Structure Audit',
      'Muqeem & GOSI Compliance Assessment',
      'Workforce Cost & Attrition Analysis',
      'Digital Transformation Roadmap'
    ],
    deliverable: 'HR Architecture & Gap Analysis Report'
  },
  {
    number: '02',
    title: 'Strategy Development',
    subtitle: 'Crafting the Blueprint',
    icon: Sliders,
    duration: 'Weeks 2-3',
    desc: 'Our enterprise HR specialists design a tailored implementation strategy aligned with your corporate culture, Saudi labor regulations, and operational milestones.',
    activities: [
      'Custom HR Policy Formulation',
      'Muqeem API Integration Architecture',
      'Role Competency Matrix Design',
      'Change Management & SLA Plan'
    ],
    deliverable: 'Strategic HR Policy & SLA Blueprint'
  },
  {
    number: '03',
    title: 'Implementation',
    subtitle: 'Deploying the Solutions',
    icon: Cpu,
    duration: 'Weeks 4-6',
    desc: 'Seamless deployment of automated recruitment pipelines, Muqeem government connector modules, employee self-service portals, and staff training.',
    activities: [
      'Muqeem Integration Bridge Activation',
      'Automated Onboarding & Contract Setup',
      'HRMS Data Migration & Cleansing',
      'Internal Team Training & Sandbox Testing'
    ],
    deliverable: 'Live Production Platform & Operations Playbook'
  },
  {
    number: '04',
    title: 'Optimization & Support',
    subtitle: 'Sustained Excellence',
    icon: CheckCircle2,
    duration: 'Ongoing SLA',
    desc: 'Continuous SLA-backed technical monitoring, quarterly regulatory audits, continuous policy updates, and dedicated 24/7 priority HR support.',
    activities: [
      '24/7 Platform Health Monitoring',
      'Quarterly Saudi Labor Law Updates',
      'Annual Compliance Re-certification',
      'Dedicated Account Management'
    ],
    deliverable: 'Monthly KPI Reports & Guaranteed SLA Support'
  }
];

const industries = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    clients: '150+ Clients',
    icon: Building2,
    desc: 'Optimizing workforce efficiency, multi-shift roster allocation, and health safety compliance in heavy production environments.',
    specialties: ['Safety Compliance', 'Shift Management', 'Skills Training', 'Quality Control']
  },
  {
    id: 'technology',
    title: 'Technology',
    clients: '120+ Clients',
    icon: Laptop,
    desc: 'Scaling agile engineering teams with competitive equity packages, remote-first onboarding, and innovation-centric retention policies.',
    specialties: ['Remote Work Policies', 'Tech Talent Acquisition', 'Innovation Culture', 'Rapid Scaling']
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    clients: '90+ Clients',
    icon: HeartHandshake,
    desc: 'Supporting clinical professionals, hospitals, and clinics with 24/7 rota scheduling, credentials verification, and patient safety standards.',
    specialties: ['Compliance Management', '24/7 Shift Scheduling', 'Certification Tracking', 'Staff Well-being']
  },
  {
    id: 'finance',
    title: 'Financial Services',
    clients: '80+ Clients',
    icon: DollarSign,
    desc: 'Ensuring strict compliance with regulatory governance, background checks, security clearances, and performance tracking.',
    specialties: ['Risk Assessment', 'Regulatory Compliance', 'Security Clearance', 'Performance Metrics']
  },
  {
    id: 'retail',
    title: 'Retail & E-commerce',
    clients: '200+ Clients',
    icon: ShoppingBag,
    desc: 'Managing dynamic seasonal retail surges, front-line customer service teams, and multi-location store coordination.',
    specialties: ['Seasonal Hiring', 'Customer Service Teams', 'Inventory Staffing', 'Multi-Location Sync']
  },
  {
    id: 'education',
    title: 'Education',
    clients: '60+ Clients',
    icon: GraduationCap,
    desc: 'Supporting universities, private academies, and school districts with accredited faculty recruitment and academic scheduling.',
    specialties: ['Faculty Recruitment', 'Academic Planning', 'Administrative Services', 'Research Coordination']
  },
  {
    id: 'construction',
    title: 'Construction',
    clients: '70+ Clients',
    icon: HardHat,
    desc: 'Managing project-based field workers, on-site HSE protocols, scaffolding certifications, and equipment safety compliance.',
    specialties: ['Project Staffing', 'Safety Protocols', 'Skills Certification', 'Site Administration']
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    clients: '110+ Clients',
    icon: Truck,
    desc: 'Optimizing cross-docking operators, fleet dispatchers, warehouse fulfillment crews, and licensed transport personnel.',
    specialties: ['Fleet Management', 'Warehouse Operations', 'Route Optimization', 'Driver Coordination']
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
  { src: '/assets/imgs/clients-clean/zamil.png', alt: 'Zamil' },
];

export default function HrMuqeemView() {
  const [activeTaglineIdx, setActiveTaglineIdx] = useState(0);
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = processSteps[activeStepIdx];
  const ActiveStepIcon = activeStep.icon;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTaglineIdx((prev) => (prev + 1) % taglines.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hr-muqeem-root">
      <style jsx global>{`
        /* =========================================================================
           HR MUQEEM GLOBAL HARMONIZED TYPOGRAPHY & THEMING
           ========================================================================= */
        .hr-muqeem-root {
          color: var(--text-primary);
          overflow-x: hidden;
        }

        /* Floating Badge Animation */
        @keyframes hrBadgeFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes hrPulse {
          0%, 100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes hrMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Hero Card Theme Adaptation */
        [data-theme="dark"] .hr-dashboard-card {
          background: #0d1830 !important;
          border: 1.5px solid rgba(0, 174, 239, 0.35) !important;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5) !important;
        }

        [data-theme="light"] .hr-dashboard-card {
          background: #ffffff !important;
          border: 1.5px solid #cbd5e1 !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08) !important;
        }

        /* General Card Theme Adaptation */
        [data-theme="dark"] .hr-feature-card {
          background: #0d1830 !important;
          border: 1.5px solid rgba(0, 174, 239, 0.22) !important;
          color: #ffffff !important;
        }

        [data-theme="dark"] .hr-feature-card:hover {
          border-color: rgba(0, 174, 239, 0.55) !important;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45) !important;
        }

        [data-theme="light"] .hr-feature-card {
          background: #ffffff !important;
          border: 1.5px solid rgba(0, 102, 204, 0.14) !important;
          color: #0f172a !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        [data-theme="light"] .hr-feature-card:hover {
          border-color: #00AEEF !important;
          box-shadow: 0 16px 36px rgba(0, 174, 239, 0.15) !important;
        }

        /* Process Step Tiles */
        [data-theme="dark"] .hr-step-tile {
          background: rgba(15, 23, 42, 0.6) !important;
          border: 1.5px solid rgba(255, 255, 255, 0.08) !important;
          color: #cbd5e1 !important;
        }

        [data-theme="dark"] .hr-step-tile.active {
          background: linear-gradient(135deg, rgba(0, 174, 239, 0.18), rgba(0, 102, 204, 0.12)) !important;
          border-color: #00AEEF !important;
          box-shadow: 0 8px 24px rgba(0, 174, 239, 0.2) !important;
        }

        [data-theme="light"] .hr-step-tile {
          background: #ffffff !important;
          border: 1.5px solid #e2e8f0 !important;
          color: #334155 !important;
        }

        [data-theme="light"] .hr-step-tile.active {
          background: linear-gradient(135deg, rgba(0, 174, 239, 0.08), rgba(0, 102, 204, 0.04)) !important;
          border-color: #00AEEF !important;
          box-shadow: 0 8px 24px rgba(0, 174, 239, 0.15) !important;
        }

        @media (max-width: 991px) {
          .hr-hero-visual {
            margin-top: 40px;
          }
        }

        @media (max-width: 576px) {
          .hr-hero-visual {
            padding: 10px 0;
          }
          .hr-dashboard-card {
            width: 100% !important;
            padding: 22px 18px !important;
          }
          .hr-floating-badge {
            top: -12px !important;
            right: 8px !important;
            padding: 8px 14px !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>

      <div className="cover-home1">
        <div className="container">
          <div className="row">
            <div className="col-xl-1" />
            <div className="col-xl-10 col-lg-12">

              {/* ===================================================================
                  SECTION 1: HERO SECTION
                  =================================================================== */}
              <section style={{ position: 'relative', overflow: 'visible', padding: '50px 0 60px' }}>
                <div className="container">
                  <div className="row align-items-center">
                    
                    {/* Left Column: Hero Text */}
                    <div className="col-lg-6">
                      <div style={{ marginBottom: 20 }}>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '6px 16px',
                          borderRadius: 50,
                          backgroundColor: 'rgba(0, 174, 239, 0.12)',
                          border: '1px solid rgba(0, 174, 239, 0.35)',
                          fontSize: 13,
                          fontWeight: 700,
                          color: '#00AEEF',
                          textTransform: 'uppercase',
                          letterSpacing: 1.5
                        }}>
                          <Sparkles size={14} color="#00AEEF" />
                          Enterprise HR Solutions
                        </div>
                      </div>

                      <h1 style={{
                        fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
                        fontWeight: 800,
                        lineHeight: 1.2,
                        marginBottom: 16,
                        letterSpacing: '-0.02em',
                        color: 'var(--heading-color)'
                      }}>
                        HRMuqeem{' '}
                        <span style={{
                          background: 'linear-gradient(135deg, #00AEEF 0%, #0066cc 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                          Integration
                        </span>
                      </h1>

                      {/* Rotating Tagline */}
                      <div style={{
                        minHeight: 36,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        marginBottom: 20
                      }}>
                        <div style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: '#00AEEF',
                          boxShadow: '0 0 10px #00AEEF'
                        }} />
                        <span style={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: '#00AEEF',
                          letterSpacing: '-0.01em',
                          transition: 'all 0.3s ease'
                        }}>
                          {taglines[activeTaglineIdx]}
                        </span>
                      </div>

                      <p style={{
                        fontSize: '1.125rem',
                        lineHeight: 1.7,
                        color: 'var(--text-secondary)',
                        marginBottom: 32,
                        maxWidth: 520
                      }}>
                        Revolutionize your human resources with cutting-edge <strong style={{ color: '#00AEEF' }}>Muqeem integration solutions</strong>. We empower your workforce, guarantee strict Saudi labor and GOSI compliance, and streamline day-to-day talent operations.
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 36 }}>
                        <a
                          href="#hr-services-section"
                          className="btn btn-brand-1"
                          style={{
                            padding: '14px 28px',
                            fontWeight: 600,
                            borderRadius: 12,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 10
                          }}
                        >
                          Explore HR Solutions
                          <ArrowRight size={18} />
                        </a>
                        <Link
                          href="/contact"
                          className="btn btn-outline"
                          style={{
                            padding: '14px 28px',
                            fontWeight: 600,
                            borderRadius: 12,
                            border: '1.5px solid rgba(0, 174, 239, 0.4)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 10
                          }}
                        >
                          Schedule Consultation
                        </Link>
                      </div>

                      {/* Trust Badges */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 24,
                        paddingTop: 20,
                        borderTop: '1px solid var(--border-color)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <CheckCircle2 size={18} color="#00AEEF" />
                          <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>100% Muqeem & Qiwa Compliant</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <CheckCircle2 size={18} color="#00AEEF" />
                          <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>1,000+ Employees Managed</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <CheckCircle2 size={18} color="#00AEEF" />
                          <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>24/7 Dedicated SLA Support</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Clean, Perfectly Sized & Never Clipped HR Dashboard Illustration */}
                    <div className="col-lg-6">
                      <div
                        className="hr-hero-visual"
                        style={{
                          position: 'relative',
                          overflow: 'visible',
                          minHeight: 580,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {/* Background Subtle Glowing Orbs */}
                        <div style={{
                          position: 'absolute',
                          top: '10%',
                          right: '10%',
                          width: 220,
                          height: 220,
                          background: 'radial-gradient(circle, rgba(0, 174, 239, 0.12) 0%, transparent 70%)',
                          borderRadius: '50%',
                          pointerEvents: 'none',
                          animation: 'hrPulse 4s ease-in-out infinite'
                        }} />

                        {/* Interactive HR Dashboard Card */}
                        <div
                          className="hr-dashboard-card"
                          style={{
                            position: 'relative',
                            overflow: 'visible',
                            width: 410,
                            maxWidth: '100%',
                            minHeight: 520,
                            borderRadius: 22,
                            padding: '32px 28px',
                            margin: '20px 0',
                            backdropFilter: 'blur(20px)',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                        >
                          {/* Floating Notification Pill - Perfectly Anchored & Visible */}
                          <div
                            className="hr-floating-badge"
                            style={{
                              position: 'absolute',
                              top: -14,
                              right: -8,
                              background: 'linear-gradient(135deg, #00C6FF 0%, #00cc6a 100%)',
                              borderRadius: 14,
                              padding: '10px 16px',
                              boxShadow: '0 10px 25px rgba(0, 174, 239, 0.4)',
                              color: '#ffffff',
                              fontSize: '0.88rem',
                              fontWeight: 700,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 8,
                              zIndex: 10,
                              animation: 'hrBadgeFloat 3s ease-in-out infinite'
                            }}
                          >
                            <Bell size={16} color="#ffffff" />
                            <span>5 New Applications</span>
                          </div>

                          {/* Card Header */}
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 14,
                            marginBottom: 24,
                            paddingBottom: 16,
                            borderBottom: '1px solid var(--border-color)'
                          }}>
                            <div style={{
                              width: 44,
                              height: 44,
                              borderRadius: 12,
                              background: 'linear-gradient(135deg, #00AEEF 0%, #0066cc 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}>
                              <Users size={24} color="#ffffff" />
                            </div>
                            <div>
                              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                                HR Dashboard
                              </h3>
                              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                                Saudi Employee Management &amp; Muqeem
                              </p>
                            </div>
                          </div>

                          {/* Team Overview Section */}
                          <div style={{ marginBottom: 24 }}>
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              marginBottom: 14
                            }}>
                              <h4 style={{
                                fontSize: '0.95rem',
                                fontWeight: 700,
                                color: '#00AEEF',
                                margin: 0,
                                textTransform: 'uppercase',
                                letterSpacing: 0.8
                              }}>
                                Team Overview
                              </h4>
                              <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                                3 Active Members
                              </span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                              {/* Member 1 */}
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '10px 14px',
                                borderRadius: 12,
                                background: 'rgba(0, 174, 239, 0.06)',
                                border: '1px solid rgba(0, 174, 239, 0.18)'
                              }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                  <div style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    background: 'rgba(0, 174, 239, 0.15)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#00AEEF'
                                  }}>
                                    <Laptop size={16} />
                                  </div>
                                  <div>
                                    <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>Sarah Johnson</div>
                                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Senior Developer</div>
                                  </div>
                                </div>
                                <span style={{
                                  fontSize: '0.72rem',
                                  fontWeight: 700,
                                  padding: '3px 10px',
                                  borderRadius: 20,
                                  background: 'rgba(16, 185, 129, 0.15)',
                                  color: '#10b981',
                                  border: '1px solid rgba(16, 185, 129, 0.3)'
                                }}>
                                  Active
                                </span>
                              </div>

                              {/* Member 2 */}
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '10px 14px',
                                borderRadius: 12,
                                background: 'rgba(0, 174, 239, 0.06)',
                                border: '1px solid rgba(0, 174, 239, 0.18)'
                              }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                  <div style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    background: 'rgba(245, 158, 11, 0.15)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#f59e0b'
                                  }}>
                                    <Briefcase size={16} />
                                  </div>
                                  <div>
                                    <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>Mike Chen</div>
                                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Project Manager</div>
                                  </div>
                                </div>
                                <span style={{
                                  fontSize: '0.72rem',
                                  fontWeight: 700,
                                  padding: '3px 10px',
                                  borderRadius: 20,
                                  background: 'rgba(239, 68, 68, 0.15)',
                                  color: '#ef4444',
                                  border: '1px solid rgba(239, 68, 68, 0.3)'
                                }}>
                                  In Meeting
                                </span>
                              </div>

                              {/* Member 3 */}
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '10px 14px',
                                borderRadius: 12,
                                background: 'rgba(0, 174, 239, 0.06)',
                                border: '1px solid rgba(0, 174, 239, 0.18)'
                              }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                  <div style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    background: 'rgba(139, 92, 246, 0.15)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#8b5cf6'
                                  }}>
                                    <Award size={16} />
                                  </div>
                                  <div>
                                    <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>Emily Davis</div>
                                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>UI/UX Designer</div>
                                  </div>
                                </div>
                                <span style={{
                                  fontSize: '0.72rem',
                                  fontWeight: 700,
                                  padding: '3px 10px',
                                  borderRadius: 20,
                                  background: 'rgba(245, 158, 11, 0.15)',
                                  color: '#f59e0b',
                                  border: '1px solid rgba(245, 158, 11, 0.3)'
                                }}>
                                  Available
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Quick Actions */}
                          <div>
                            <h4 style={{
                              fontSize: '0.88rem',
                              fontWeight: 700,
                              color: 'var(--text-secondary)',
                              marginBottom: 12,
                              textTransform: 'uppercase',
                              letterSpacing: 0.8
                            }}>
                              Quick Actions
                            </h4>
                            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                              <button
                                type="button"
                                style={{
                                  padding: '8px 14px',
                                  background: 'rgba(0, 174, 239, 0.1)',
                                  border: '1px solid rgba(0, 174, 239, 0.3)',
                                  borderRadius: 20,
                                  color: '#00AEEF',
                                  fontSize: '0.82rem',
                                  fontWeight: 700,
                                  cursor: 'pointer',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: 6,
                                  transition: 'all 0.2s ease'
                                }}
                              >
                                <Plus size={14} />
                                Add Employee
                              </button>

                              <button
                                type="button"
                                style={{
                                  padding: '8px 14px',
                                  background: 'rgba(0, 174, 239, 0.1)',
                                  border: '1px solid rgba(0, 174, 239, 0.3)',
                                  borderRadius: 20,
                                  color: '#00AEEF',
                                  fontSize: '0.82rem',
                                  fontWeight: 700,
                                  cursor: 'pointer',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: 6,
                                  transition: 'all 0.2s ease'
                                }}
                              >
                                <Eye size={14} />
                                Review
                              </button>

                              <button
                                type="button"
                                style={{
                                  padding: '8px 14px',
                                  background: 'rgba(0, 174, 239, 0.1)',
                                  border: '1px solid rgba(0, 174, 239, 0.3)',
                                  borderRadius: 20,
                                  color: '#00AEEF',
                                  fontSize: '0.82rem',
                                  fontWeight: 700,
                                  cursor: 'pointer',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: 6,
                                  transition: 'all 0.2s ease'
                                }}
                              >
                                <BarChart3 size={14} />
                                Report
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* ===================================================================
                  SECTION 2: OUR EXPERTISE / HR SERVICES (4 CARDS)
                  =================================================================== */}
              <section id="hr-services-section" style={{ padding: '60px 0 40px' }}>
                <div className="container">
                  
                  <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 50px' }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '6px 16px',
                      borderRadius: 50,
                      backgroundColor: 'rgba(0, 174, 239, 0.12)',
                      border: '1px solid rgba(0, 174, 239, 0.35)',
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#00AEEF',
                      textTransform: 'uppercase',
                      letterSpacing: 1.5,
                      marginBottom: 16
                    }}>
                      Our Expertise
                    </div>

                    <h2 style={{
                      fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                      fontWeight: 700,
                      lineHeight: 1.25,
                      marginBottom: 16,
                      color: 'var(--heading-color)'
                    }}>
                      Complete HR Solutions for{' '}
                      <span style={{
                        background: 'linear-gradient(135deg, #00AEEF 0%, #0066cc 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        Modern Businesses
                      </span>
                    </h2>

                    <p style={{
                      fontSize: '1.1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6
                    }}>
                      From executive talent acquisition to automated performance appraisals and labor compliance, we deliver comprehensive human capital management engineered for growth.
                    </p>
                  </div>

                  <div className="row g-4">
                    {hrServices.map((srv) => {
                      const Icon = srv.icon;
                      return (
                        <div key={srv.id} className="col-lg-6">
                          <div
                            className="hr-feature-card"
                            style={{
                              borderRadius: 20,
                              padding: '32px 28px',
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                          >
                            <div>
                              <div style={{
                                width: 56,
                                height: 56,
                                borderRadius: 16,
                                background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.15) 0%, rgba(0, 102, 204, 0.08) 100%)',
                                border: '1.5px solid rgba(0, 174, 239, 0.35)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 20
                              }}>
                                <Icon size={28} color="#00AEEF" />
                              </div>

                              <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: 700,
                                marginBottom: 12,
                                color: 'var(--heading-color)'
                              }}>
                                {srv.title}
                              </h3>

                              <p style={{
                                fontSize: '0.98rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                                marginBottom: 24
                              }}>
                                {srv.desc}
                              </p>
                            </div>

                            <div style={{
                              paddingTop: 18,
                              borderTop: '1px solid var(--border-color)'
                            }}>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {srv.features.map((feat, idx) => (
                                  <span
                                    key={idx}
                                    style={{
                                      fontSize: '0.78rem',
                                      fontWeight: 600,
                                      padding: '5px 12px',
                                      borderRadius: 20,
                                      background: 'rgba(0, 174, 239, 0.08)',
                                      color: '#00AEEF',
                                      border: '1px solid rgba(0, 174, 239, 0.2)'
                                    }}
                                  >
                                    {feat}
                                  </span>
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

              {/* ===================================================================
                  SECTION 3: OUR PROCESS / METHODOLOGY (4 STEPS)
                  =================================================================== */}
              <section id="hr-process-section" style={{ padding: '60px 0 40px' }}>
                <div className="container">

                  <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 50px' }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '6px 16px',
                      borderRadius: 50,
                      backgroundColor: 'rgba(0, 174, 239, 0.12)',
                      border: '1px solid rgba(0, 174, 239, 0.35)',
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#00AEEF',
                      textTransform: 'uppercase',
                      letterSpacing: 1.5,
                      marginBottom: 16
                    }}>
                      Our Methodology
                    </div>

                    <h2 style={{
                      fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                      fontWeight: 700,
                      lineHeight: 1.25,
                      marginBottom: 16,
                      color: 'var(--heading-color)'
                    }}>
                      Simple, Effective,{' '}
                      <span style={{
                        background: 'linear-gradient(135deg, #00AEEF 0%, #0066cc 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        Results-Driven
                      </span>
                    </h2>

                    <p style={{
                      fontSize: '1.1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6
                    }}>
                      Our structured 4-phase deployment framework guarantees seamless HR digitalization with zero disruption to daily workforce operations.
                    </p>
                  </div>

                  <div className="row g-4 align-items-stretch">
                    {/* Left Column: Interactive Step Selector */}
                    <div className="col-lg-5">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                        {processSteps.map((step, idx) => {
                          const StepIcon = step.icon;
                          const isActive = activeStepIdx === idx;

                          return (
                            <div
                              key={step.number}
                              className={`hr-step-tile ${isActive ? 'active' : ''}`}
                              onClick={() => setActiveStepIdx(idx)}
                              style={{
                                borderRadius: 16,
                                padding: '18px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                cursor: 'pointer',
                                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{
                                  width: 44,
                                  height: 44,
                                  borderRadius: 14,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontWeight: 800,
                                  fontSize: '0.95rem',
                                  background: isActive
                                    ? 'linear-gradient(135deg, #00AEEF 0%, #0066cc 100%)'
                                    : 'rgba(0, 174, 239, 0.1)',
                                  color: isActive ? '#ffffff' : '#00AEEF',
                                  border: isActive ? '1.5px solid #00AEEF' : '1px solid rgba(0, 174, 239, 0.25)',
                                  boxShadow: isActive ? '0 0 20px rgba(0, 174, 239, 0.4)' : 'none',
                                  transition: 'all 0.25s ease'
                                }}>
                                  {step.number}
                                </div>

                                <div>
                                  <h4 style={{
                                    fontSize: '1.05rem',
                                    fontWeight: 700,
                                    margin: 0,
                                    color: isActive ? '#00AEEF' : 'var(--text-primary)',
                                    transition: 'color 0.2s ease'
                                  }}>
                                    {step.title}
                                  </h4>
                                  <div style={{
                                    fontSize: '0.82rem',
                                    color: 'var(--text-secondary)',
                                    marginTop: 3
                                  }}>
                                    {step.subtitle}
                                  </div>
                                </div>
                              </div>

                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: isActive ? '#00AEEF' : 'var(--text-muted)'
                              }}>
                                <ChevronRight
                                  size={20}
                                  style={{
                                    transform: isActive ? 'translateX(3px)' : 'none',
                                    transition: 'transform 0.2s ease'
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Column: Step Detail Card */}
                    <div className="col-lg-7">
                      <div
                        className="hr-feature-card"
                        style={{
                          borderRadius: 22,
                          padding: '38px',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          position: 'relative'
                        }}
                      >
                        <div>
                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 12,
                            marginBottom: 20
                          }}>
                            <div style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 10,
                              padding: '6px 14px',
                              borderRadius: 50,
                              background: 'rgba(0, 174, 239, 0.12)',
                              border: '1.5px solid rgba(0, 174, 239, 0.35)',
                              color: '#00AEEF',
                              fontSize: '0.85rem',
                              fontWeight: 700
                            }}>
                              <ActiveStepIcon size={16} />
                              STAGE {activeStep.number} OF 04
                            </div>

                            <div style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 6,
                              padding: '6px 14px',
                              borderRadius: 50,
                              background: 'rgba(0, 174, 239, 0.08)',
                              border: '1px solid rgba(0, 174, 239, 0.2)',
                              color: '#00AEEF',
                              fontSize: '0.85rem',
                              fontWeight: 600
                            }}>
                              <span>Timeline:</span>
                              <strong>{activeStep.duration}</strong>
                            </div>
                          </div>

                          <h3 style={{
                            fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                            fontWeight: 800,
                            marginBottom: 6,
                            color: 'var(--heading-color)'
                          }}>
                            {activeStep.title}
                          </h3>
                          <div style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: '#00AEEF',
                            marginBottom: 18
                          }}>
                            {activeStep.subtitle}
                          </div>

                          <p style={{
                            fontSize: '1.05rem',
                            lineHeight: 1.7,
                            color: 'var(--text-secondary)',
                            marginBottom: 28
                          }}>
                            {activeStep.desc}
                          </p>

                          <div style={{ marginBottom: 26 }}>
                            <h5 style={{
                              fontSize: '0.95rem',
                              fontWeight: 700,
                              marginBottom: 14,
                              letterSpacing: 0.5,
                              textTransform: 'uppercase',
                              color: 'var(--text-primary)'
                            }}>
                              Key Stage Activities
                            </h5>

                            <div className="row g-3">
                              {activeStep.activities.map((act, aIdx) => (
                                <div key={aIdx} className="col-md-6">
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 12,
                                    padding: '12px 14px',
                                    borderRadius: 12,
                                    background: 'rgba(0, 174, 239, 0.05)',
                                    border: '1px solid rgba(0, 174, 239, 0.15)'
                                  }}>
                                    <div style={{
                                      width: 20,
                                      height: 20,
                                      borderRadius: '50%',
                                      background: 'linear-gradient(135deg, #00AEEF, #0066cc)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      flexShrink: 0,
                                      marginTop: 2
                                    }}>
                                      <Check size={12} color="#ffffff" strokeWidth={3} />
                                    </div>
                                    <span style={{
                                      fontSize: '0.88rem',
                                      lineHeight: 1.5,
                                      fontWeight: 500,
                                      color: 'var(--text-primary)'
                                    }}>
                                      {act}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Deliverable Box */}
                          <div style={{
                            padding: '16px 20px',
                            borderRadius: 14,
                            background: 'rgba(0, 174, 239, 0.08)',
                            border: '1.5px dashed rgba(0, 174, 239, 0.35)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 14
                          }}>
                            <Award size={24} color="#00AEEF" style={{ flexShrink: 0 }} />
                            <div>
                              <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700, color: '#00AEEF', letterSpacing: 1, display: 'block' }}>
                                Verified Stage Deliverable
                              </span>
                              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                                {activeStep.deliverable}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Navigation Footer */}
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingTop: 20,
                          borderTop: '1px solid var(--border-color)',
                          marginTop: 20
                        }}>
                          <div style={{ display: 'flex', gap: 8 }}>
                            {processSteps.map((_, dotIdx) => (
                              <div
                                key={dotIdx}
                                onClick={() => setActiveStepIdx(dotIdx)}
                                style={{
                                  width: activeStepIdx === dotIdx ? 24 : 10,
                                  height: 10,
                                  borderRadius: 5,
                                  background: activeStepIdx === dotIdx ? '#00AEEF' : 'rgba(0, 174, 239, 0.25)',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s ease'
                                }}
                              />
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() => setActiveStepIdx((prev) => (prev + 1) % processSteps.length)}
                            style={{
                              background: 'linear-gradient(135deg, #00AEEF 0%, #0066cc 100%)',
                              border: 'none',
                              color: '#ffffff',
                              padding: '10px 20px',
                              borderRadius: 10,
                              fontWeight: 700,
                              fontSize: '0.88rem',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 8,
                              boxShadow: '0 4px 15px rgba(0, 174, 239, 0.3)',
                              transition: 'transform 0.2s ease'
                            }}
                          >
                            {activeStepIdx < processSteps.length - 1 ? 'Next Phase' : 'Restart Tour'}
                            <ArrowRight size={15} />
                          </button>
                        </div>

                      </div>
                    </div>

                  </div>

                </div>
              </section>

              {/* ===================================================================
                  SECTION 4: SECTORS WE SERVE (8 INDUSTRY CARDS)
                  =================================================================== */}
              <section id="hr-industries-section" style={{ padding: '60px 0 40px' }}>
                <div className="container">

                  <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 50px' }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '6px 16px',
                      borderRadius: 50,
                      backgroundColor: 'rgba(0, 174, 239, 0.12)',
                      border: '1px solid rgba(0, 174, 239, 0.35)',
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#00AEEF',
                      textTransform: 'uppercase',
                      letterSpacing: 1.5,
                      marginBottom: 16
                    }}>
                      Sectors We Serve
                    </div>

                    <h2 style={{
                      fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                      fontWeight: 700,
                      lineHeight: 1.25,
                      marginBottom: 16,
                      color: 'var(--heading-color)'
                    }}>
                      Specialized Expertise Across{' '}
                      <span style={{
                        background: 'linear-gradient(135deg, #00AEEF 0%, #0066cc 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        Multiple Sectors
                      </span>
                    </h2>

                    <p style={{
                      fontSize: '1.1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6
                    }}>
                      Tailored workforce management frameworks configured for the compliance, operational, and scaling needs of diverse global industries.
                    </p>
                  </div>

                  <div className="row g-4">
                    {industries.map((ind) => {
                      const Icon = ind.icon;
                      return (
                        <div key={ind.id} className="col-lg-3 col-md-6">
                          <div
                            className="hr-feature-card"
                            style={{
                              borderRadius: 20,
                              padding: '28px 22px',
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                          >
                            <div>
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 18
                              }}>
                                <div style={{
                                  width: 48,
                                  height: 48,
                                  borderRadius: 14,
                                  background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.15) 0%, rgba(0, 102, 204, 0.08) 100%)',
                                  border: '1.5px solid rgba(0, 174, 239, 0.35)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}>
                                  <Icon size={24} color="#00AEEF" />
                                </div>
                                <span style={{
                                  fontSize: '0.78rem',
                                  fontWeight: 700,
                                  color: '#00AEEF',
                                  background: 'rgba(0, 174, 239, 0.1)',
                                  border: '1px solid rgba(0, 174, 239, 0.25)',
                                  borderRadius: 20,
                                  padding: '4px 10px'
                                }}>
                                  {ind.clients}
                                </span>
                              </div>

                              <h3 style={{
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                marginBottom: 10,
                                color: 'var(--heading-color)'
                              }}>
                                {ind.title}
                              </h3>

                              <p style={{
                                fontSize: '0.88rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.5,
                                marginBottom: 20
                              }}>
                                {ind.desc}
                              </p>
                            </div>

                            <div style={{
                              paddingTop: 14,
                              borderTop: '1px solid var(--border-color)'
                            }}>
                              <div style={{
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                color: '#00AEEF',
                                letterSpacing: 0.8,
                                marginBottom: 8
                              }}>
                                Key Specialties
                              </div>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                {ind.specialties.map((spec, sIdx) => (
                                  <div
                                    key={sIdx}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: 8,
                                      fontSize: '0.82rem',
                                      color: 'var(--text-primary)'
                                    }}
                                  >
                                    <div style={{
                                      width: 5,
                                      height: 5,
                                      borderRadius: '50%',
                                      background: '#00AEEF'
                                    }} />
                                    <span>{spec}</span>
                                  </div>
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

              {/* ===================================================================
                  SECTION 5: CLIENTS MARQUEE (MATCHING HOMEPAGE)
                  =================================================================== */}
              <section style={{ padding: '40px 0 60px', overflow: 'hidden' }}>
                <div style={{ textAlign: 'center', padding: '0 20px', marginBottom: 40 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    fontWeight: 700,
                    marginBottom: 12,
                    color: 'var(--heading-color)'
                  }}>
                    Trusted by Organizations Across Saudi Arabia
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 620, margin: '0 auto' }}>
                    Leading enterprises and government-aligned organizations count on Altapete Solutions for mission-critical HR and Muqeem infrastructure.
                  </p>
                </div>

                <div style={{
                  position: 'relative',
                  width: '100%',
                  marginBottom: 24,
                  maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
                  WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: 24,
                    width: 'max-content',
                    animation: 'hrMarquee 30s linear infinite'
                  }}>
                    {[...clientLogos, ...clientLogos].map((logo, i) => (
                      <div
                        key={i}
                        className="client-card-wrapper"
                        style={{
                          flexShrink: 0,
                          width: 200,
                          height: 90,
                          borderRadius: 16,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '14px 22px'
                        }}
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="client-logo-img"
                          draggable={false}
                          style={{
                            maxHeight: 52,
                            maxWidth: 140,
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain',
                            pointerEvents: 'none'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ===================================================================
                  SECTION 6: CALL TO ACTION SECTION
                  =================================================================== */}
              <section style={{ padding: '0 0 80px' }}>
                <div className="container">
                  <div
                    style={{
                      borderRadius: 24,
                      padding: '60px 40px',
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.15) 0%, rgba(0, 102, 204, 0.25) 100%)',
                      border: '1.5px solid rgba(0, 174, 239, 0.4)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto' }}>
                      <h2 style={{
                        fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                        fontWeight: 800,
                        marginBottom: 16,
                        color: 'var(--text-primary)'
                      }}>
                        Ready to Transform Your Saudi HR Operations?
                      </h2>
                      <p style={{
                        fontSize: '1.125rem',
                        lineHeight: 1.7,
                        color: 'var(--text-secondary)',
                        marginBottom: 32
                      }}>
                        Connect with our certified Muqeem integration specialists to automate government filings, streamline recruitment, and build a compliant, agile workforce.
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16 }}>
                        <Link
                          href="/contact"
                          className="btn btn-brand-1"
                          style={{
                            padding: '15px 36px',
                            fontWeight: 700,
                            borderRadius: 12,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 10
                          }}
                        >
                          Book a Consultation Call
                          <ArrowUpRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
