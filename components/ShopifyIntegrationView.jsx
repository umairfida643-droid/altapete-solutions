import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShoppingBag, ShoppingCart, BarChart3, CreditCard, Smartphone,
  Code2, Zap, Cpu, ShieldCheck, ArrowRight, CheckCircle2,
  Check, ChevronRight, Sparkles, Store, Layers, Search,
  Palette, Rocket, Headphones, ExternalLink, Award, Globe,
  Sliders, ArrowUpRight
} from 'lucide-react';

const floatingHeroIcons = [
  { icon: ShoppingCart, label: 'E-commerce', angle: 0, delay: '0s' },
  { icon: BarChart3, label: 'Analytics', angle: 45, delay: '0.4s' },
  { icon: CreditCard, label: 'Payments', angle: 90, delay: '0.8s' },
  { icon: Smartphone, label: 'Mobile', angle: 135, delay: '1.2s' },
  { icon: Code2, label: 'APIs', angle: 180, delay: '1.6s' },
  { icon: Zap, label: 'Speed', angle: 225, delay: '2.0s' },
  { icon: Cpu, label: 'Custom Apps', angle: 270, delay: '2.4s' },
  { icon: ShieldCheck, label: 'Security', angle: 315, delay: '2.8s' },
];

const shopifySolutions = [
  {
    id: 'setup',
    title: 'Store Setup & Configuration',
    icon: Store,
    desc: 'Complete Shopify and Shopify Plus store creation with bespoke UX/UI design, catalog architecture, payment gateways, and domain setup.',
    features: ['Custom Theme Design', 'Product Catalog Architecture', 'Payment Gateway Integration', 'Domain & DNS Configuration']
  },
  {
    id: 'custom',
    title: 'Custom Development',
    icon: Code2,
    desc: 'Bespoke Shopify apps, custom Liquid and Hydrogen/Oxygen storefronts, private API middleware, and complex business logic.',
    features: ['Custom Shopify Apps', 'Liquid & Hydrogen Modifications', 'Private API Middleware', 'Custom Checkout Extensions']
  },
  {
    id: 'mobile',
    title: 'Mobile Optimization',
    icon: Smartphone,
    desc: 'Mobile-first responsive architecture ensuring touch-optimized navigation, sub-second rendering, and high-converting checkout funnels.',
    features: ['Mobile-First UI/UX', 'Touch Gesture Optimization', 'AMP & Fast Mobile Loading', 'PWA & Native App Connectors']
  },
  {
    id: 'integrations',
    title: 'Third-Party Integrations',
    icon: Layers,
    desc: 'Seamless real-time synchronization between Shopify and ERP systems (Odoo, SAP), CRMs (Salesforce, HubSpot), WMS, and 3PL fulfillment.',
    features: ['ERP & Odoo Data Bridges', 'CRM Synchronization', 'Inventory & 3PL Logistics', 'Omnichannel Marketing Feeds']
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    icon: Zap,
    desc: 'Core Web Vitals acceleration, asset minification, image CDN caching, and conversion rate optimization (CRO) for maximum conversions.',
    features: ['Core Web Vitals Pass', 'Advanced SEO Architecture', 'Conversion Funnel Tracking', 'Database & Query Caching']
  },
  {
    id: 'security',
    title: 'Security & Maintenance',
    icon: ShieldCheck,
    desc: 'Continuous enterprise security monitoring, automated off-site backups, proactive patch management, and 24/7 hypercare support.',
    features: ['Proactive Security Audits', 'Zero-Downtime Patching', 'Automated Daily Backups', '24/7 SLA Priority Support']
  }
];

const launchSteps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    subtitle: 'Understanding Your Vision',
    icon: Search,
    duration: '3-5 Days',
    desc: 'We begin with an exhaustive technical and commercial audit of your e-commerce requirements, catalog hierarchy, target audiences, and integration touchpoints to build an actionable blueprint.',
    activities: [
      'Business Requirements & Scope Analysis',
      'Technical Architecture & Data Model Audit',
      'Competitor Benchmarking & User Personas',
      'Milestone Scheduling & KPI Definition'
    ],
    deliverable: 'Requirements Specification & Architecture Blueprint'
  },
  {
    number: '02',
    title: 'Design & Architecture',
    subtitle: 'Creating the Blueprint',
    icon: Palette,
    duration: '1-2 Weeks',
    desc: 'Our design and engineering leads create high-fidelity conversion-focused storefront wireframes, frictionless mobile navigation patterns, and rigorous API mapping specifications.',
    activities: [
      'Custom Shopify Theme Wireframes & UI Kit',
      'Mobile-First Responsive Layout Prototyping',
      'Data Schema & Middleware API Mapping',
      'Brand Visual System & Asset Harmonization'
    ],
    deliverable: 'Figma High-Fidelity Prototypes & API Specifications'
  },
  {
    number: '03',
    title: 'Development & Integration',
    subtitle: 'Building Your Solution',
    icon: Code2,
    duration: '2-3 Weeks',
    desc: 'We construct your store using clean Liquid markup, modular Hydrogen components, private API webhooks, and secure bridges to your ERP, accounting, and inventory engines.',
    activities: [
      'Shopify Liquid & Front-End Development',
      'Custom App & Webhook Pipeline Creation',
      'Payment Gateway & Tax Engine Calibration',
      'Automated Inventory & Customer Data Sync'
    ],
    deliverable: 'Fully Functional Staging Environment & Clean Code'
  },
  {
    number: '04',
    title: 'Testing & Quality Assurance',
    subtitle: 'Ensuring Excellence',
    icon: ShieldCheck,
    duration: '1 Week',
    desc: 'Exhaustive end-to-end quality assurance across browsers, mobile viewports, payment gateways, checkout funnels, edge cases, and high-concurrency stress testing.',
    activities: [
      'Cross-Browser & Multi-Device Responsive QA',
      'End-to-End Payment & Sandbox Checkout Verification',
      'Core Web Vitals & Page Load Stress Testing',
      'Data Integrity & Sync Security Auditing'
    ],
    deliverable: 'Comprehensive QA Audit Report & 95+ Lighthouse Score'
  },
  {
    number: '05',
    title: 'Launch & Deployment',
    subtitle: 'Going Live with Confidence',
    icon: Rocket,
    duration: '2-3 Days',
    desc: 'Flawless production deployment with zero downtime, instant DNS propagation, real-time transaction monitoring, and thorough administrator onboarding.',
    activities: [
      'Production DNS Switch & SSL Provisioning',
      'Final Real-Time Data Migration & 301 URL Redirects',
      'Payment Gateway Live Mode Activation',
      'Staff Training & Store Administration Handover'
    ],
    deliverable: 'Live Production Store & Operations Playbook'
  },
  {
    number: '06',
    title: 'Support & Optimization',
    subtitle: 'Continuous Success',
    icon: Headphones,
    duration: 'Ongoing SLA',
    desc: 'Post-launch hypercare, ongoing SLA-backed maintenance, proactive speed optimization, quarterly security audits, and continuous conversion rate optimization (CRO).',
    activities: [
      '24/7 Real-Time Uptime & Transaction Telemetry',
      'Continuous Conversion Rate Optimization (CRO)',
      'Quarterly App Updates & Security Reviews',
      'Dedicated Technical Support & Feature Iterations'
    ],
    deliverable: 'Monthly Performance Reports & Guaranteed SLA Support'
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

export default function ShopifyIntegrationView() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = launchSteps[activeStepIndex];
  const ActiveStepIcon = activeStep.icon;

  return (
    <div className="shopify-view-root">
      <style jsx global>{`
        /* =========================================================================
           SHOPIFY INTEGRATION DUAL-THEME STYLING
           ========================================================================= */
        .shopify-view-root {
          color: var(--text-primary);
          overflow-x: hidden;
        }

        /* Hero Animation & Positioning */
        .shopify-hero-container {
          position: relative;
          width: 100%;
          max-width: 540px;
          height: 520px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .shopify-central-hub {
          position: relative;
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #00AEEF 0%, #0066cc 100%);
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 50px rgba(0, 174, 239, 0.45);
          z-index: 10;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .shopify-central-hub:hover {
          transform: scale(1.06);
          box-shadow: 0 0 70px rgba(0, 174, 239, 0.65);
        }

        .shopify-pulse-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px dashed rgba(0, 174, 239, 0.3);
          pointer-events: none;
        }

        .shopify-pulse-ring-1 {
          width: 330px;
          height: 330px;
          animation: shopifySpin 40s linear infinite;
        }

        .shopify-pulse-ring-2 {
          width: 440px;
          height: 440px;
          border-style: dotted;
          border-color: rgba(0, 174, 239, 0.2);
          animation: shopifySpinReverse 55s linear infinite;
        }

        @keyframes shopifySpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shopifySpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes shopifyFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .shopify-floating-item-anchor {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 5;
        }

        .shopify-floating-card {
          width: 84px;
          height: 84px;
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          user-select: none;
        }

        /* Dark Mode Theme Tokens for Shopify */
        [data-theme="dark"] .shopify-floating-card {
          background: rgba(13, 24, 48, 0.85);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(0, 174, 239, 0.35);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        [data-theme="dark"] .shopify-floating-card:hover {
          border-color: #00AEEF;
          transform: translateY(-12px) scale(1.08) !important;
          box-shadow: 0 16px 36px rgba(0, 174, 239, 0.35);
          background: rgba(18, 35, 70, 0.95);
        }

        [data-theme="dark"] .shopify-card-bg {
          background: #0d1830 !important;
          border: 1.5px solid rgba(0, 174, 239, 0.25) !important;
          color: #ffffff !important;
        }

        [data-theme="dark"] .shopify-card-bg:hover {
          border-color: rgba(0, 174, 239, 0.55) !important;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45) !important;
        }

        [data-theme="dark"] .shopify-step-tile {
          background: rgba(15, 23, 42, 0.6) !important;
          border: 1.5px solid rgba(255, 255, 255, 0.08) !important;
          color: #cbd5e1 !important;
        }

        [data-theme="dark"] .shopify-step-tile.active {
          background: linear-gradient(135deg, rgba(0, 174, 239, 0.18), rgba(0, 102, 204, 0.12)) !important;
          border-color: #00AEEF !important;
          box-shadow: 0 8px 24px rgba(0, 174, 239, 0.2) !important;
        }

        [data-theme="dark"] .shopify-step-detail-card {
          background: #0d1830 !important;
          border: 1.5px solid rgba(0, 174, 239, 0.35) !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5) !important;
        }

        /* Light Mode Theme Tokens for Shopify */
        [data-theme="light"] .shopify-floating-card {
          background: #ffffff;
          border: 1.5px solid rgba(0, 174, 239, 0.35);
          box-shadow: 0 10px 25px rgba(0, 102, 204, 0.1);
        }

        [data-theme="light"] .shopify-floating-card:hover {
          border-color: #00AEEF;
          transform: translateY(-12px) scale(1.08) !important;
          box-shadow: 0 16px 36px rgba(0, 174, 239, 0.25);
          background: #ffffff;
        }

        [data-theme="light"] .shopify-card-bg {
          background: #ffffff !important;
          border: 1.5px solid rgba(0, 102, 204, 0.15) !important;
          color: #0f172a !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        [data-theme="light"] .shopify-card-bg:hover {
          border-color: #00AEEF !important;
          box-shadow: 0 16px 36px rgba(0, 174, 239, 0.15) !important;
        }

        [data-theme="light"] .shopify-step-tile {
          background: #ffffff !important;
          border: 1.5px solid #e2e8f0 !important;
          color: #334155 !important;
        }

        [data-theme="light"] .shopify-step-tile.active {
          background: linear-gradient(135deg, rgba(0, 174, 239, 0.08), rgba(0, 102, 204, 0.04)) !important;
          border-color: #00AEEF !important;
          box-shadow: 0 8px 24px rgba(0, 174, 239, 0.15) !important;
        }

        [data-theme="light"] .shopify-step-detail-card {
          background: #ffffff !important;
          border: 1.5px solid #cbd5e1 !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08) !important;
        }

        /* Heading Theme Contrast */
        [data-theme="dark"] h1,
        [data-theme="dark"] h2,
        [data-theme="dark"] h3,
        [data-theme="dark"] h4,
        [data-theme="dark"] h5,
        [data-theme="dark"] h6 {
          color: #ffffff !important;
        }

        [data-theme="light"] h1,
        [data-theme="light"] h2,
        [data-theme="light"] h3,
        [data-theme="light"] h4,
        [data-theme="light"] h5,
        [data-theme="light"] h6 {
          color: #0f172a !important;
        }

        /* CTA Button Enhancements */
        .btn-brand-1 {
          background: linear-gradient(135deg, #00AEEF 0%, #0066cc 100%) !important;
          color: #ffffff !important;
          border: 1px solid rgba(0, 174, 239, 0.4) !important;
          border-radius: 12px !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow: 0 4px 18px rgba(0, 174, 239, 0.35) !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          cursor: pointer !important;
        }

        .btn-brand-1:hover,
        .btn-brand-1:focus {
          background: linear-gradient(135deg, #0099d8 0%, #0052a3 100%) !important;
          color: #ffffff !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 25px rgba(0, 174, 239, 0.55) !important;
        }

        .btn-brand-1:active {
          transform: translateY(0) !important;
        }

        .btn-outline {
          border-radius: 12px !important;
          font-weight: 600 !important;
          text-decoration: none !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          cursor: pointer !important;
        }

        [data-theme="dark"] .btn-outline {
          background: rgba(0, 174, 239, 0.1) !important;
          border: 1.5px solid rgba(0, 174, 239, 0.5) !important;
          color: #ffffff !important;
          box-shadow: 0 2px 12px rgba(0, 174, 239, 0.15) !important;
        }

        [data-theme="dark"] .btn-outline:hover,
        [data-theme="dark"] .btn-outline:focus {
          background: rgba(0, 174, 239, 0.22) !important;
          border-color: #00AEEF !important;
          color: #ffffff !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(0, 174, 239, 0.35) !important;
        }

        [data-theme="light"] .btn-outline {
          background: rgba(0, 174, 239, 0.06) !important;
          border: 1.5px solid rgba(0, 174, 239, 0.55) !important;
          color: #0077b6 !important;
          box-shadow: 0 2px 8px rgba(0, 174, 239, 0.1) !important;
        }

        [data-theme="light"] .btn-outline:hover,
        [data-theme="light"] .btn-outline:focus {
          background: rgba(0, 174, 239, 0.15) !important;
          border-color: #0077b6 !important;
          color: #005f94 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 18px rgba(0, 174, 239, 0.25) !important;
        }

        /* General Marquee */
        @keyframes shopifyMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 991px) {
          .shopify-hero-container {
            height: 440px;
            max-width: 440px;
            margin-top: 30px;
          }
          .shopify-pulse-ring-1 { width: 280px; height: 280px; }
          .shopify-pulse-ring-2 { width: 360px; height: 360px; }
          .shopify-floating-card { width: 72px; height: 72px; border-radius: 14px; }
        }

        @media (max-width: 576px) {
          .shopify-hero-container {
            height: 380px;
            max-width: 340px;
          }
          .shopify-central-hub { width: 90px; height: 90px; border-radius: 22px; }
          .shopify-pulse-ring-1 { width: 240px; height: 240px; }
          .shopify-pulse-ring-2 { width: 300px; height: 300px; }
          .shopify-floating-card { width: 62px; height: 62px; border-radius: 12px; }
          .shopify-floating-card div { font-size: 0.6rem !important; }
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
              <section style={{ position: 'relative', overflow: 'hidden', padding: '40px 0 60px' }}>
                <div className="container">
                  <div className="row align-items-center">
                    
                    {/* Left Column: Hero Copy */}
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
                          E-commerce Excellence
                        </div>
                      </div>

                      <h1 style={{
                        fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
                        fontWeight: 800,
                        lineHeight: 1.2,
                        marginBottom: 20,
                        letterSpacing: '-0.02em',
                        color: 'var(--heading-color)'
                      }}>
                        Shopify Integration{' '}
                        <span style={{
                          background: 'linear-gradient(135deg, #00AEEF 0%, #0066cc 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                          Solutions
                        </span>
                      </h1>

                      <p style={{
                        fontSize: '1.125rem',
                        lineHeight: 1.7,
                        color: 'var(--text-secondary)',
                        marginBottom: 30,
                        maxWidth: 520
                      }}>
                        Transform your digital commerce with our comprehensive <strong style={{ color: '#00AEEF' }}>Shopify integration services</strong>. We engineer high-performing, custom-built e-commerce architectures that drive scalable revenue, streamline operations, and elevate customer experiences.
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 36 }}>
                        <a
                          href="#solutions-grid"
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
                          Explore Solutions
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
                          Book Consultation
                        </Link>
                      </div>

                      {/* Trust Indicators */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 24,
                        paddingTop: 20,
                        borderTop: '1px solid var(--border-color)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <CheckCircle2 size={18} color="#00AEEF" />
                          <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>500+ Stores Scaled</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <CheckCircle2 size={18} color="#00AEEF" />
                          <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Certified Shopify Specialists</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <CheckCircle2 size={18} color="#00AEEF" />
                          <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>99.9% Uptime Guarantee</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Hero Visual with Centered Aligned Orbital Animation */}
                    <div className="col-lg-6">
                      <div className="shopify-hero-container">
                        
                        {/* Orbital concentric rings */}
                        <div className="shopify-pulse-ring shopify-pulse-ring-1" />
                        <div className="shopify-pulse-ring shopify-pulse-ring-2" />

                        {/* Centered SVG Conduit Lines linking center to each node */}
                        <svg
                          style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0,
                            pointerEvents: 'none',
                            zIndex: 2
                          }}
                        >
                          <defs>
                            <linearGradient id="shopifyLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="#0066cc" stopOpacity="0.15" />
                            </linearGradient>
                          </defs>
                          {floatingHeroIcons.map((node, i) => {
                            const angleRad = (node.angle * Math.PI) / 180;
                            const r = 165;
                            const x2 = 50 + (Math.cos(angleRad) * r * 100) / 540;
                            const y2 = 50 + (Math.sin(angleRad) * r * 100) / 520;
                            return (
                              <line
                                key={i}
                                x1="50%"
                                y1="50%"
                                x2={`${x2}%`}
                                y2={`${y2}%`}
                                stroke="url(#shopifyLineGrad)"
                                strokeWidth="1.5"
                                strokeDasharray="4,4"
                                opacity="0.6"
                              />
                            );
                          })}
                        </svg>

                        {/* Central Glowing Shopify Hub */}
                        <div className="shopify-central-hub">
                          <ShoppingBag size={52} color="#ffffff" />
                        </div>

                        {/* 8 Satellite Nodes - Geometrically Centered with Separate Floating Animation */}
                        {floatingHeroIcons.map((item, i) => {
                          const Icon = item.icon;
                          const angleRad = (item.angle * Math.PI) / 180;
                          const r = 165; // radius in px
                          const x = Math.cos(angleRad) * r;
                          const y = Math.sin(angleRad) * r;

                          return (
                            <div
                              key={i}
                              className="shopify-floating-item-anchor"
                              style={{
                                transform: `translate(calc(-50% + ${x.toFixed(2)}px), calc(-50% + ${y.toFixed(2)}px))`
                              }}
                            >
                              <div
                                className="shopify-floating-card"
                                style={{
                                  animation: `shopifyFloat 3.5s ease-in-out infinite`,
                                  animationDelay: item.delay
                                }}
                              >
                                <Icon size={26} color="#00AEEF" style={{ marginBottom: 4 }} />
                                <div style={{
                                  fontSize: '0.68rem',
                                  fontWeight: 700,
                                  color: 'var(--text-primary)',
                                  textAlign: 'center',
                                  lineHeight: 1.1
                                }}>
                                  {item.label}
                                </div>
                              </div>
                            </div>
                          );
                        })}

                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* ===================================================================
                  SECTION 2: COMPREHENSIVE SHOPIFY SOLUTIONS (6 CARDS)
                  =================================================================== */}
              <section id="solutions-grid" style={{ padding: '60px 0 40px' }}>
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
                      Engineered for Growth
                    </div>
                    <h2 style={{
                      fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                      fontWeight: 700,
                      marginBottom: 16,
                      color: 'var(--heading-color)'
                    }}>
                      Comprehensive Shopify{' '}
                      <span style={{
                        background: 'linear-gradient(135deg, #00AEEF 0%, #0066cc 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        Solutions
                      </span>
                    </h2>
                    <p style={{
                      fontSize: '1.1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6
                    }}>
                      From initial turnkey setup to custom headless architectures and multi-system ERP connectors, we deliver enterprise-grade Shopify solutions tailored to your unique requirements.
                    </p>
                  </div>

                  <div className="row g-4">
                    {shopifySolutions.map((sol) => {
                      const Icon = sol.icon;
                      return (
                        <div key={sol.id} className="col-lg-4 col-md-6">
                          <div
                            className="shopify-card-bg"
                            style={{
                              borderRadius: 20,
                              padding: '32px 26px',
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
                                {sol.title}
                              </h3>

                              <p style={{
                                fontSize: '0.95rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                                marginBottom: 24
                              }}>
                                {sol.desc}
                              </p>
                            </div>

                            <div style={{
                              paddingTop: 18,
                              borderTop: '1px solid var(--border-color)'
                            }}>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {sol.features.map((feat, idx) => (
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

                  {/* Bespoke Project CTA Card */}
                  <div style={{ marginTop: 40 }}>
                    <div
                      className="shopify-card-bg"
                      style={{
                        borderRadius: 20,
                        padding: '36px 40px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 24,
                        background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.12) 0%, rgba(0, 102, 204, 0.06) 100%) !important',
                        border: '1.5px solid rgba(0, 174, 239, 0.35) !important'
                      }}
                    >
                      <div style={{ maxWidth: 640 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                          <Sparkles size={20} color="#00AEEF" />
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0, color: 'var(--heading-color)' }}>
                            Need a Custom Shopify Integration Architecture?
                          </h3>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', margin: 0, lineHeight: 1.6 }}>
                          Our certified technical architects build bespoke Shopify apps, ERP connectors, and headless Hydrogen commerce engines mapped to your exact operational workflows.
                        </p>
                      </div>

                      <Link
                        href="/contact"
                        className="btn btn-brand-1"
                        style={{
                          padding: '14px 30px',
                          fontWeight: 700,
                          borderRadius: 12,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 10,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Discuss Your Project
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>

                </div>
              </section>

              {/* ===================================================================
                  SECTION 3: "FROM CONCEPT TO LAUNCH" - 6 INTERACTIVE CLICKABLE STEPS
                  =================================================================== */}
              <section style={{ padding: '60px 0 40px' }}>
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
                      Our Proven Methodology
                    </div>
                    <h2 style={{
                      fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                      fontWeight: 700,
                      marginBottom: 16,
                      color: 'var(--heading-color)'
                    }}>
                      From Concept to{' '}
                      <span style={{
                        background: 'linear-gradient(135deg, #00AEEF 0%, #0066cc 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        Launch
                      </span>
                    </h2>
                    <p style={{
                      fontSize: '1.1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6
                    }}>
                      Our battle-tested 6-stage engineering process ensures deterministic project delivery with zero downtime, absolute code transparency, and measurable e-commerce results.
                    </p>
                  </div>

                  <div className="row g-4 align-items-stretch">
                    
                    {/* Left Column: 6 Clickable Step Selectors */}
                    <div className="col-lg-5">
                      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12, height: '100%', justifyContent: 'space-between' }}>
                        {launchSteps.map((step, idx) => {
                          const StepIcon = step.icon;
                          const isActive = activeStepIndex === idx;

                          return (
                            <div
                              key={step.number}
                              className={`shopify-step-tile ${isActive ? 'active' : ''}`}
                              onClick={() => setActiveStepIndex(idx)}
                              style={{
                                borderRadius: 16,
                                padding: '16px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                cursor: 'pointer',
                                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                                position: 'relative',
                                flex: 1
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                {/* Step number bubble */}
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
                                    color: isActive ? '#00AEEF' : 'var(--heading-color)',
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

                    {/* Right Column: Dynamic Step Detail Card */}
                    <div className="col-lg-7">
                      <div
                        className="shopify-step-detail-card"
                        style={{
                          borderRadius: 22,
                          padding: '36px',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <div>
                          {/* Step Header Badge & Duration */}
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
                              STAGE {activeStep.number} OF 06
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
                              <span>Duration:</span>
                              <strong>{activeStep.duration}</strong>
                            </div>
                          </div>

                          {/* Title & Subtitle with Icon Badge */}
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 18 }}>
                            <div style={{
                              width: 48,
                              height: 48,
                              borderRadius: 14,
                              background: 'rgba(0, 174, 239, 0.12)',
                              border: '1.5px solid rgba(0, 174, 239, 0.3)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#00AEEF',
                              flexShrink: 0,
                              marginTop: 2
                            }}>
                              <ActiveStepIcon size={24} />
                            </div>
                            <div>
                              <h3 style={{
                                fontSize: 'clamp(1.5rem, 2.3vw, 2.1rem)',
                                fontWeight: 800,
                                marginBottom: 4,
                                color: 'var(--heading-color)',
                                lineHeight: 1.2
                              }}>
                                {activeStep.title}
                              </h3>
                              <div style={{
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                color: '#00AEEF'
                              }}>
                                {activeStep.subtitle}
                              </div>
                            </div>
                          </div>

                          {/* Main Step Description */}
                          <p style={{
                            fontSize: '1.05rem',
                            lineHeight: 1.7,
                            color: 'var(--text-secondary)',
                            marginBottom: 30
                          }}>
                            {activeStep.desc}
                          </p>

                          {/* Key Activities List */}
                          <div style={{ marginBottom: 30 }}>
                            <h5 style={{
                              fontSize: '1rem',
                              fontWeight: 700,
                              marginBottom: 16,
                              letterSpacing: 0.5,
                              textTransform: 'uppercase',
                              color: 'var(--heading-color)'
                            }}>
                              Key Engineering Activities
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
                                      fontSize: '0.9rem',
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
                            gap: 14,
                            marginBottom: 26
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

                        {/* Step Navigation Dots & Next Button */}
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingTop: 20,
                          borderTop: '1px solid var(--border-color)',
                          marginTop: 10
                        }}>
                          {/* 6 Step Dots */}
                          <div style={{ display: 'flex', gap: 8 }}>
                            {launchSteps.map((_, dotIdx) => (
                              <div
                                key={dotIdx}
                                onClick={() => setActiveStepIndex(dotIdx)}
                                style={{
                                  width: activeStepIndex === dotIdx ? 24 : 10,
                                  height: 10,
                                  borderRadius: 5,
                                  background: activeStepIndex === dotIdx ? '#00AEEF' : 'rgba(0, 174, 239, 0.25)',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s ease'
                                }}
                              />
                            ))}
                          </div>

                          {/* Next Step / Complete Button */}
                          <button
                            type="button"
                            onClick={() => setActiveStepIndex((prev) => (prev + 1) % launchSteps.length)}
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
                            {activeStepIndex < launchSteps.length - 1 ? 'Next Phase' : 'Restart Tour'}
                            <ArrowRight size={15} />
                          </button>
                        </div>

                      </div>
                    </div>

                  </div>

                </div>
              </section>

              {/* ===================================================================
                  SECTION 4: PERFORMANCE & TRUST METRICS
                  =================================================================== */}
              <section style={{ padding: '30px 0 50px' }}>
                <div className="container">
                  <div
                    className="shopify-card-bg"
                    style={{
                      borderRadius: 22,
                      padding: '40px 30px',
                      background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.08) 0%, rgba(0, 102, 204, 0.03) 100%) !important'
                    }}
                  >
                    <div className="row text-center g-4">
                      <div className="col-md-3 col-6">
                        <div style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 800, color: '#00AEEF', lineHeight: 1.1, marginBottom: 8 }}>
                          500+
                        </div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                          Projects Delivered
                        </div>
                      </div>

                      <div className="col-md-3 col-6">
                        <div style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 800, color: '#10b981', lineHeight: 1.1, marginBottom: 8 }}>
                          98%
                        </div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                          Client Success Rate
                        </div>
                      </div>

                      <div className="col-md-3 col-6">
                        <div style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 800, color: '#f59e0b', lineHeight: 1.1, marginBottom: 8 }}>
                          2-4
                        </div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                          Weeks Average Delivery
                        </div>
                      </div>

                      <div className="col-md-3 col-6">
                        <div style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', fontWeight: 800, color: '#ec4899', lineHeight: 1.1, marginBottom: 8 }}>
                          24/7
                        </div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                          Continuous Support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ===================================================================
                  SECTION 5: CLIENTS MARQUEE (MATCHING HOMEPAGE)
                  =================================================================== */}
              <section style={{ padding: '30px 0 60px', overflow: 'hidden' }}>
                <div style={{ textAlign: 'center', padding: '0 20px', marginBottom: 40 }}>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, marginBottom: 12, color: 'var(--heading-color)' }}>
                    Trusted by Brands Worldwide
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 620, margin: '0 auto' }}>
                    Enterprise retailers, fast-growing digital brands, and global distributors count on Altapete Solutions for mission-critical e-commerce engineering.
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
                    animation: 'shopifyMarquee 30s linear infinite'
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
                        color: 'var(--heading-color)'
                      }}>
                        Ready to Transform Your Shopify Store?
                      </h2>
                      <p style={{
                        fontSize: '1.125rem',
                        lineHeight: 1.7,
                        color: 'var(--text-secondary)',
                        marginBottom: 32
                      }}>
                        Partner with our certified Shopify architects and integration specialists to build high-converting storefronts, automated ERP integrations, and resilient cloud systems.
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
                          Schedule a Technical Call
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
