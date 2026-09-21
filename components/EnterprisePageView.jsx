import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import {
  ArrowRight,
  CheckCircle2,
  Check,
  Zap,
  ShieldCheck,
} from 'lucide-react';

const DEFAULT_STATS = [
  { value: '100+', label: 'Enterprise Solutions', desc: 'Deployed globally' },
  { value: '50+', label: 'Other Solutions', desc: 'Industry verticals' },
  { value: '2-4 Weeks', label: 'Timeline', desc: 'Fast implementation' },
  { value: '24/7', label: 'Customer Support', desc: 'Dedicated technical SLA' },
];

export default function EnterprisePageView({
  badge = 'ENTERPRISE SOLUTION',
  badgeIcon: BadgeIcon = Zap,
  title,
  description,
  bgImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920',
  stats = DEFAULT_STATS,
  featuresTag = 'COMPREHENSIVE CAPABILITIES',
  featuresTitle = 'Key Features & Capabilities',
  featuresDesc = 'Tailored architecture, compliant workflows, and seamless integrations built for modern enterprises.',
  features = [],
  benefitsTag = 'OPERATIONAL IMPACT',
  benefitsTitle,
  benefitsDesc,
  benefits = [],
  benefitImage = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200',
  benefitStat = {
    badge: 'Enterprise Performance',
    metric: 'Guaranteed 99.9% Uptime SLA',
    note: 'Backed by certified technical and functional consultants'
  },
  ctaTitle = 'Ready to Transform Your Business Operations?',
  ctaDesc = 'Connect with our senior enterprise consultants to explore tailored architecture, custom integrations, and full compliance.',
  ctaPrimaryText = 'Schedule Consultation',
  ctaPrimaryLink = '/contact-us',
  ctaSecondaryText = 'Explore Capabilities',
  ctaSecondaryLink = '/what-we-do'
}) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`ep-view-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
      
      {/* 1. HERO SECTION */}
      <section className="ep-hero">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-xl-9 col-lg-10">
              
              <div className="hero-badge">
                <BadgeIcon size={14} color="#00AEEF" />
                <span>{badge}</span>
              </div>

              <h1 className="hero-title">
                {title}
              </h1>

              {description && (
                <p className="hero-desc">
                  {description}
                </p>
              )}

              <div className="hero-actions">
                <Link href={ctaPrimaryLink} className="btn-hero-primary">
                  <span>{ctaPrimaryText}</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href={ctaSecondaryLink} className="btn-hero-secondary">
                  <span>{ctaSecondaryText}</span>
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="hero-stats-row">
                {stats.map((s, idx) => (
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

      {/* 2. CORE FEATURES */}
      {features.length > 0 && (
        <section className="ep-features-section">
          <div className="container">
            <div className="section-head text-center">
              <div className="section-tag">{featuresTag}</div>
              <h2 className="section-title">{featuresTitle}</h2>
              {featuresDesc && <p className="section-desc">{featuresDesc}</p>}
            </div>

            <div className="row g-3 g-lg-4 mt-2">
              {features.map((feat, idx) => {
                const Icon = feat.icon || Zap;
                return (
                  <div key={idx} className="col-lg-4 col-md-6">
                    <div className="feature-card">
                      <div className="feat-icon-box">
                        <Icon size={20} color="#00AEEF" />
                      </div>
                      <h3 className="feat-title">{feat.title}</h3>
                      <p className="feat-desc">{feat.desc}</p>
                      {feat.points && feat.points.length > 0 && (
                        <ul className="feat-points">
                          {feat.points.map((p, pIdx) => (
                            <li key={pIdx}>
                              <Check size={13} className="check-icon" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {feat.link && (
                        <div style={{ marginTop: '14px' }}>
                          <Link href={feat.link} className="feat-link">
                            <span>Explore Details</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3. BUSINESS BENEFITS & IMPACT */}
      {benefits.length > 0 && (
        <section className="ep-benefits-section">
          <div className="container">
            <div className="row g-4 g-lg-5 align-items-center">
              
              <div className="col-lg-6">
                <div className="section-tag">{benefitsTag}</div>
                <h2 className="section-title text-start mb-3">
                  {benefitsTitle || (
                    <>Measurable Efficiency Across Your <span className="text-gradient">Operations</span></>
                  )}
                </h2>
                {benefitsDesc && (
                  <p className="section-desc text-start mb-4">
                    {benefitsDesc}
                  </p>
                )}

                <div className="benefits-stack">
                  {benefits.map((ben, idx) => (
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
                    src={benefitImage}
                    alt="Altapete Enterprise Solutions"
                    className="benefit-img"
                  />
                  {benefitStat && (
                    <div className="visual-stat-overlay">
                      <div className="overlay-badge">
                        <Zap size={14} color="#00AEEF" />
                        <span>{benefitStat.badge}</span>
                      </div>
                      <div className="overlay-metric">{benefitStat.metric}</div>
                      <div className="overlay-note">{benefitStat.note}</div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 4. STANDARD ALTAPETE CTA BANNER */}
      <section className="ep-cta-section">
        <div className="container">
          <div className="cp-cta-banner">
            <div className="cp-cta-glow" />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="cp-cta-heading">
                {ctaTitle}
              </h2>
              <p className="cp-cta-sub">
                {ctaDesc}
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href={ctaPrimaryLink} className="cp-cta-btn-primary">
                  <span>{ctaPrimaryText}</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href={ctaSecondaryLink} className="cp-cta-btn-secondary">
                  <span>{ctaSecondaryText}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES MATCHING SHIPPINGSOLUTIONSVIEW EXACTLY */}
      <style jsx>{`
        .ep-view-wrapper {
          width: 100%;
          position: relative;
          background: var(--bg-body, #080d1a);
          color: var(--text-color, #e2e8f0);
          overflow: hidden;
        }

        /* ── 1. HERO SECTION ── */
        .ep-hero {
          padding: 95px 0 65px;
          position: relative;
          background: linear-gradient(rgba(8, 13, 26, 0.86), rgba(10, 22, 40, 0.93)), url('${bgImage}') center/cover no-repeat;
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
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 800;
          letter-spacing: -0.8px;
          margin-bottom: 18px;
          line-height: 1.18;
          color: #ffffff;
        }
        .text-gradient {
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-desc {
          max-width: 740px;
          margin: 0 auto 34px;
          font-size: 15.5px;
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

        /* ── SECTION HEADINGS ── */
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
          color: var(--heading-color, #ffffff);
        }
        .section-desc {
          max-width: 660px;
          margin: 0 auto;
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--text-muted, #94a3b8);
        }

        /* ── 2. FEATURES GRID ── */
        .ep-features-section {
          padding: 70px 0 60px;
        }
        .feature-card {
          background: rgba(13, 22, 40, 0.6);
          border: 1px solid rgba(0, 174, 239, 0.14);
          border-radius: 16px;
          padding: 24px 22px;
          height: 100%;
          display: flex;
          flex-direction: column;
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
          flex: 1;
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
        .feat-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 700;
          color: #00AEEF;
          text-decoration: none;
          transition: gap 0.2s ease;
        }
        .feat-link:hover {
          gap: 9px;
          color: #38bdf8;
        }

        /* ── 3. BENEFITS SECTION ── */
        .ep-benefits-section {
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
          height: 440px;
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

        /* ── 4. BOTTOM CTA BANNER ── */
        .ep-cta-section {
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

        /* ── LIGHT THEME ADAPTATION (DUAL SELECTORS: [data-theme="light"] + .light-theme) ── */
        :global([data-theme="light"]) .ep-view-wrapper,
        .light-theme.ep-view-wrapper {
          background: #f8fafc;
          color: #0f172a;
        }
        :global([data-theme="light"]) .ep-hero,
        .light-theme .ep-hero {
          background: linear-gradient(rgba(240, 247, 255, 0.92), rgba(255, 255, 255, 0.96)), url('${bgImage}') center/cover no-repeat;
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
        :global([data-theme="light"]) .ep-benefits-section,
        .light-theme .ep-benefits-section {
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
