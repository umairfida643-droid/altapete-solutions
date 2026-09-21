import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import {
  ArrowRight,
  CheckCircle2,
  Check,
  Zap,
  ShieldCheck,
  Clock
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
      
      {/* 1. HERO SECTION (Unchanged) */}
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
                <Link href={ctaPrimaryLink} className="btn btn-linear hover-up btn-hero-primary">
                  <span>{ctaPrimaryText}</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href={ctaSecondaryLink} className="btn btn-outline-brand hover-up btn-hero-secondary">
                  <span>{ctaSecondaryText}</span>
                </Link>
              </div>

              {/* Minimal & Professional Stats Bar */}
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

      {/* 2. CORE FEATURES (Refined Typography) */}
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
                        <Icon size={18} color="#00AEEF" />
                      </div>
                      <h3 className="feat-title">{feat.title}</h3>
                      <p className="feat-desc">{feat.desc}</p>
                      {feat.points && feat.points.length > 0 && (
                        <ul className="feat-points">
                          {feat.points.map((p, pIdx) => (
                            <li key={pIdx}>
                              <Check size={12} className="check-icon" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {feat.link && (
                        <div style={{ marginTop: '12px' }}>
                          <Link href={feat.link} className="feat-link">
                            <span>Explore Details</span>
                            <ArrowRight size={12} />
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

      {/* 3. BUSINESS BENEFITS & ASSURANCE PANEL (NO STOCK IMAGES) */}
      {benefits.length > 0 && (
        <section className="ep-benefits-section">
          <div className="container">
            <div className="section-head text-center mb-5">
              <div className="section-tag">{benefitsTag}</div>
              <h2 className="section-title">
                {benefitsTitle || (
                  <>Measurable Efficiency Across Your <span className="text-gradient">Operations</span></>
                )}
              </h2>
              {benefitsDesc && (
                <p className="section-desc">
                  {benefitsDesc}
                </p>
              )}
            </div>

            <div className="row g-4 g-lg-5 align-items-center">
              
              <div className="col-lg-6">
                <div className="benefits-stack">
                  {benefits.map((ben, idx) => (
                    <div key={idx} className="benefit-item">
                      <div className="benefit-icon-dot">
                        <CheckCircle2 size={15} color="#00AEEF" />
                      </div>
                      <div>
                        <h4 className="benefit-title">{ben.title}</h4>
                        <p className="benefit-text">{ben.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal Code-Driven SLA & Assurance Card — replaces stock photo */}
              <div className="col-lg-6">
                <div className="assurance-panel">
                  <div className="assurance-panel-head">
                    <div className="assurance-badge">
                      <ShieldCheck size={14} color="#00AEEF" />
                      <span>{benefitStat?.badge || 'Enterprise Assurance'}</span>
                    </div>
                    <div className="assurance-status-pill">
                      <span className="pulse-dot" />
                      <span>Active SLA</span>
                    </div>
                  </div>

                  <div className="assurance-headline">
                    {benefitStat?.metric || 'Guaranteed 99.9% Uptime & Regional Compliance'}
                  </div>
                  <p className="assurance-sub">
                    {benefitStat?.note || 'Engineered and supported by certified senior enterprise architects.'}
                  </p>

                  <div className="assurance-grid">
                    <div className="assurance-card">
                      <div className="as-icon-box"><Zap size={16} color="#00AEEF" /></div>
                      <div className="as-title">Deployment Speed</div>
                      <div className="as-desc">2–4 Weeks Implementation</div>
                    </div>
                    <div className="assurance-card">
                      <div className="as-icon-box"><ShieldCheck size={16} color="#00AEEF" /></div>
                      <div className="as-title">Governance</div>
                      <div className="as-desc">100% ZATCA & NCA Ready</div>
                    </div>
                    <div className="assurance-card">
                      <div className="as-icon-box"><CheckCircle2 size={16} color="#00AEEF" /></div>
                      <div className="as-title">Availability</div>
                      <div className="as-desc">99.9% Production SLA</div>
                    </div>
                    <div className="assurance-card">
                      <div className="as-icon-box"><Clock size={16} color="#00AEEF" /></div>
                      <div className="as-title">Support Desk</div>
                      <div className="as-desc">24/7 Priority Resolution</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 4. STANDARD ALTAPETE CTA BANNER (Scaled & Minimal) */}
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
                <Link href={ctaPrimaryLink} className="btn btn-linear hover-up cp-cta-btn-primary">
                  <span>{ctaPrimaryText}</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href={ctaSecondaryLink} className="btn btn-outline-brand hover-up cp-cta-btn-secondary">
                  <span>{ctaSecondaryText}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINIMAL & PROFESSIONAL STYLES */}
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
          padding: 90px 0 60px;
          position: relative;
          background: linear-gradient(rgba(8, 13, 26, 0.86), rgba(10, 22, 40, 0.93)), url('${bgImage}') center/cover no-repeat;
          border-bottom: 1px solid rgba(0, 174, 239, 0.12);
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 16px;
          border-radius: 50px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.25);
          color: #00AEEF;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.1px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .hero-title {
          font-size: clamp(28px, 4.2vw, 46px);
          font-weight: 800;
          letter-spacing: -0.6px;
          margin-bottom: 16px;
          line-height: 1.18;
          color: #ffffff;
        }
        .text-gradient {
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-desc {
          max-width: 720px;
          margin: 0 auto 30px;
          font-size: 15px;
          line-height: 1.65;
          color: var(--text-muted, #94a3b8);
        }
        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .btn-hero-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%) !important;
          color: #ffffff !important;
          border: 1px solid rgba(0, 174, 239, 0.4) !important;
          padding: 13px 28px !important;
          border-radius: 12px !important;
          font-size: 14.5px !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          box-shadow: 0 8px 24px rgba(0, 174, 239, 0.35) !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          cursor: pointer;
        }
        .btn-hero-primary:hover {
          background: linear-gradient(135deg, #0099d8 0%, #1e5cb8 100%) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 12px 30px rgba(0, 174, 239, 0.5) !important;
          color: #ffffff !important;
        }
        .btn-hero-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px !important;
          border-radius: 12px !important;
          background: rgba(44, 115, 217, 0.12) !important;
          border: 1.5px solid rgba(0, 174, 239, 0.5) !important;
          color: #00C6FF !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          text-decoration: none !important;
          box-shadow: 0 2px 12px rgba(0, 174, 239, 0.15) !important;
          transition: all 0.25s ease !important;
          cursor: pointer;
        }
        .btn-hero-secondary:hover {
          background: #00AEEF !important;
          border-color: #00AEEF !important;
          color: #ffffff !important;
          box-shadow: 0 4px 18px rgba(0, 174, 239, 0.45) !important;
          transform: translateY(-2px) !important;
        }

        /* Minimal & Professional Stats Strip */
        .hero-stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          max-width: 860px;
          margin: 0 auto;
        }
        .stat-card {
          background: rgba(13, 22, 40, 0.65);
          border: 1px solid rgba(0, 174, 239, 0.14);
          border-radius: 12px;
          padding: 12px 14px;
          text-align: center;
          backdrop-filter: blur(8px);
          transition: all 0.25s ease;
        }
        .stat-card:hover {
          border-color: rgba(0, 174, 239, 0.35);
          transform: translateY(-2px);
        }
        .stat-number {
          font-size: 20px;
          font-weight: 800;
          color: #00AEEF;
          line-height: 1.1;
          margin-bottom: 2px;
        }
        .stat-label {
          font-size: 11.5px;
          font-weight: 700;
          color: var(--heading-color, #ffffff);
          margin-bottom: 1px;
        }
        .stat-desc {
          font-size: 10.5px;
          color: var(--text-muted, #94a3b8);
        }

        /* ── SECTION HEADINGS (Professional & Minimal) ── */
        .section-tag {
          display: inline-block;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 1.2px;
          color: #00AEEF;
          padding: 3px 12px;
          border-radius: 50px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.25);
          margin-bottom: 10px;
        }
        .section-title {
          font-size: clamp(19px, 2.2vw, 24px);
          font-weight: 700;
          letter-spacing: -0.3px;
          margin-bottom: 8px;
          line-height: 1.25;
          color: var(--heading-color, #ffffff);
        }
        .section-desc {
          max-width: 620px;
          margin: 0 auto;
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--text-muted, #94a3b8);
        }

        /* ── 2. FEATURES GRID ── */
        .ep-features-section {
          padding: 55px 0 50px;
        }
        .feature-card {
          background: rgba(13, 22, 40, 0.6);
          border: 1px solid rgba(0, 174, 239, 0.14);
          border-radius: 14px;
          padding: 20px 18px;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .feature-card:hover {
          transform: translateY(-2px);
          border-color: rgba(0, 174, 239, 0.32);
          box-shadow: 0 8px 24px rgba(0, 174, 239, 0.08);
        }
        .feat-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 9px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }
        .feat-title {
          font-size: 14.5px;
          font-weight: 700;
          color: var(--heading-color, #ffffff);
          margin-bottom: 6px;
        }
        .feat-desc {
          font-size: 12.5px;
          line-height: 1.55;
          color: var(--text-muted, #94a3b8);
          margin-bottom: 12px;
          flex: 1;
        }
        .feat-points {
          list-style: none;
          padding-left: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
          border-top: 1px solid rgba(0, 174, 239, 0.1);
          padding-top: 10px;
        }
        .feat-points li {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--text-muted, #cbd5e1);
        }
        .feat-points .check-icon {
          color: #00AEEF;
          flex-shrink: 0;
        }
        .feat-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 700;
          color: #00AEEF;
          text-decoration: none;
          transition: gap 0.2s ease;
        }
        .feat-link:hover {
          gap: 8px;
          color: #38bdf8;
        }

        /* ── 3. BENEFITS & ASSURANCE PANEL ── */
        .ep-benefits-section {
          padding: 55px 0;
          background: rgba(0, 174, 239, 0.02);
          border-top: 1px solid rgba(0, 174, 239, 0.08);
          border-bottom: 1px solid rgba(0, 174, 239, 0.08);
        }
        .benefits-stack {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }
        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .benefit-icon-dot {
          flex-shrink: 0;
          margin-top: 3px;
        }
        .benefit-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--heading-color, #ffffff);
          margin-bottom: 2px;
        }
        .benefit-text {
          font-size: 12.5px;
          line-height: 1.55;
          color: var(--text-muted, #94a3b8);
          margin-bottom: 0;
        }

        /* Minimal Code-Driven SLA & Assurance Card */
        .assurance-panel {
          background: rgba(13, 22, 40, 0.7);
          border: 1px solid rgba(0, 174, 239, 0.2);
          border-radius: 18px;
          padding: 28px 24px;
          backdrop-filter: blur(12px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
        }
        .assurance-panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .assurance-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #00AEEF;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }
        .assurance-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10.5px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 50px;
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #4ade80;
        }
        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
        .assurance-headline {
          font-size: 17px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 5px;
          line-height: 1.35;
        }
        .assurance-sub {
          font-size: 12.5px;
          color: #94a3b8;
          margin-bottom: 20px;
          line-height: 1.55;
        }
        .assurance-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .assurance-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 174, 239, 0.12);
          border-radius: 12px;
          padding: 14px 12px;
          transition: all 0.25s ease;
        }
        .assurance-card:hover {
          border-color: rgba(0, 174, 239, 0.3);
          transform: translateY(-2px);
        }
        .as-icon-box {
          margin-bottom: 8px;
        }
        .as-title {
          font-size: 10.5px;
          font-weight: 700;
          color: #00AEEF;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }
        .as-desc {
          font-size: 12px;
          font-weight: 600;
          color: var(--heading-color, #ffffff);
        }

        /* ── 4. BOTTOM CTA BANNER ── */
        .ep-cta-section {
          padding: 35px 0 65px;
        }
        .cp-cta-banner {
          background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%);
          border-radius: 20px;
          padding: clamp(30px, 4.5vw, 52px);
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(30, 58, 95, 0.32);
        }
        .cp-cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(0, 174, 239, 0.08);
          pointer-events: none;
        }
        .cp-cta-heading {
          font-size: clamp(20px, 2.6vw, 26px);
          font-weight: 800;
          color: #ffffff !important;
          margin-bottom: 10px;
        }
        .cp-cta-sub {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.9) !important;
          max-width: 520px;
          margin: 0 auto 24px;
          line-height: 1.6;
        }
        .cp-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%) !important;
          color: #ffffff !important;
          border: 1px solid rgba(0, 174, 239, 0.4) !important;
          padding: 13px 28px !important;
          border-radius: 12px !important;
          font-size: 14.5px !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          box-shadow: 0 8px 24px rgba(0, 174, 239, 0.35) !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          cursor: pointer;
        }
        .cp-cta-btn-primary:hover {
          background: linear-gradient(135deg, #0099d8 0%, #1e5cb8 100%) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 12px 30px rgba(0, 174, 239, 0.5) !important;
          color: #ffffff !important;
        }
        .cp-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.12) !important;
          color: #ffffff !important;
          padding: 13px 26px !important;
          border-radius: 12px !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          text-decoration: none !important;
          border: 1.5px solid rgba(255, 255, 255, 0.28) !important;
          transition: all 0.25s ease !important;
          cursor: pointer;
        }
        .cp-cta-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.25) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
          transform: translateY(-2px) !important;
          color: #ffffff !important;
        }

        /* ── LIGHT THEME ADAPTATION ── */
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
          background: rgba(44, 115, 217, 0.08) !important;
          border: 1.5px solid rgba(44, 115, 217, 0.4) !important;
          color: #1e40af !important;
          box-shadow: 0 2px 8px rgba(44, 115, 217, 0.1) !important;
        }
        :global([data-theme="light"]) .btn-hero-secondary:hover,
        .light-theme .btn-hero-secondary:hover {
          background: #2c73d9 !important;
          border-color: #2c73d9 !important;
          color: #ffffff !important;
          box-shadow: 0 4px 16px rgba(44, 115, 217, 0.3) !important;
          transform: translateY(-2px) !important;
        }
        :global([data-theme="light"]) .stat-card,
        .light-theme .stat-card {
          background: #ffffff;
          border-color: rgba(44, 115, 217, 0.16);
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.04);
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
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
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

        :global([data-theme="light"]) .assurance-panel,
        .light-theme .assurance-panel {
          background: #ffffff;
          border-color: rgba(44, 115, 217, 0.18);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
        }
        :global([data-theme="light"]) .assurance-headline,
        .light-theme .assurance-headline {
          color: #0f172a;
        }
        :global([data-theme="light"]) .assurance-sub,
        .light-theme .assurance-sub {
          color: #64748b;
        }
        :global([data-theme="light"]) .assurance-card,
        .light-theme .assurance-card {
          background: #f8fafc;
          border-color: rgba(44, 115, 217, 0.14);
        }
        :global([data-theme="light"]) .as-desc,
        .light-theme .as-desc {
          color: #0f172a;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .hero-stats-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 576px) {
          .hero-stats-row {
            grid-template-columns: 1fr;
          }
          .assurance-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
