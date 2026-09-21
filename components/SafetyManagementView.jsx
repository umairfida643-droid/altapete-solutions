import React from 'react';
import {
  Shield,
  AlertTriangle,
  ClipboardCheck,
  Eye,
  Bell,
  BarChart3,
  FileText,
  Users,
  CheckCircle2,
  ArrowRight,
  Zap,
  Lock,
  Activity,
  HardHat,
} from 'lucide-react';

const CYAN = '#00AEEF';
const BLUE = '#2c73d9';
const DARK_BG = '#080d1a';
const DARK_BG2 = '#0a1628';

const features = [
  {
    icon: Shield,
    title: 'Incident Management',
    desc: 'Capture, track, and resolve every workplace incident with full audit trails.',
    bullets: ['Report incidents instantly via web or mobile', 'Near-miss tracking & investigation', 'Severity classification & root-cause analysis'],
  },
  {
    icon: HardHat,
    title: 'PPE & Equipment Tracking',
    desc: 'Maintain full visibility over safety equipment lifecycle and compliance status.',
    bullets: ['Equipment lifecycle management', 'Scheduled inspection reminders', 'Compliance status dashboards'],
  },
  {
    icon: ClipboardCheck,
    title: 'Safety Inspections',
    desc: 'Replace paper checklists with digital, scheduled inspection workflows.',
    bullets: ['Digital safety checklists', 'Scheduled & ad-hoc audits', 'Automated corrective action assignment'],
  },
  {
    icon: Bell,
    title: 'Real-Time Alerts & Notifications',
    desc: 'Keep the right people informed the moment a safety event occurs.',
    bullets: ['SMS & email alert dispatch', 'Custom escalation rules', 'Emergency protocol triggers'],
  },
  {
    icon: AlertTriangle,
    title: 'Risk Assessment',
    desc: 'Proactively identify and mitigate workplace hazards before they become incidents.',
    bullets: ['Hazard identification & logging', 'Risk matrix scoring', 'Mitigation plan tracking'],
  },
  {
    icon: FileText,
    title: 'Compliance & Regulatory',
    desc: 'Stay audit-ready with built-in support for local and international safety standards.',
    bullets: ['OSHA compliance tracking', 'Local KSA safety regulation support', 'Certification & renewal tracking'],
  },
  {
    icon: BarChart3,
    title: 'Safety Analytics & KPIs',
    desc: 'Data-driven safety culture powered by real-time dashboards and trend reports.',
    bullets: ['Accident rate & frequency tracking', 'Lost-time injury (LTI) analysis', 'Safety trend & comparison reports'],
  },
  {
    icon: Eye,
    title: 'Surveillance & Monitoring',
    desc: 'Integrate physical security systems for a unified safety monitoring environment.',
    bullets: ['CCTV integration & event linking', 'Zone & area monitoring', 'Access control log correlation'],
  },
  {
    icon: Activity,
    title: 'Emergency Response',
    desc: 'Ensure your teams are prepared and response times are minimised in any emergency.',
    bullets: ['Emergency drill scheduling & tracking', 'Evacuation plan management', 'Response time monitoring & reporting'],
  },
];

const stats = [
  { value: '100+', label: 'Enterprise Solutions' },
  { value: '50+', label: 'Other Solutions' },
  { value: '2-4 Weeks', label: 'Implementation Timeline' },
  { value: '24/7', label: 'Customer Support' },
];

const benefits = [
  'Reduce workplace incidents with proactive hazard identification and risk controls',
  'Ensure full regulatory compliance with OSHA and KSA safety requirements',
  'Speed up incident response with instant alerts and escalation workflows',
  'Build a measurable safety culture with KPI dashboards and trend analytics',
  'Eliminate paper-based processes with fully digital inspections and checklists',
  'Protect your workforce and reduce liability with comprehensive audit trails',
];

export default function SafetyManagementView() {
  return (
    <>
      <style jsx global>{`
        [data-theme='light'] .safety-hero {
          background: linear-gradient(135deg, #f0f7ff 0%, #e8f4ff 100%) !important;
        }
        [data-theme='light'] .safety-section-dark {
          background: #f8fafc !important;
        }
        [data-theme='light'] .safety-card {
          background: #ffffff !important;
          border-color: rgba(0, 174, 239, 0.15) !important;
        }
        [data-theme='light'] .safety-card h3,
        [data-theme='light'] .safety-card h4 {
          color: #0a1628 !important;
        }
        [data-theme='light'] .safety-card p,
        [data-theme='light'] .safety-card li {
          color: #475569 !important;
        }
        [data-theme='light'] .safety-stat-card {
          background: #ffffff !important;
          border-color: rgba(0, 174, 239, 0.2) !important;
        }
        [data-theme='light'] .safety-stat-number {
          color: #2c73d9 !important;
        }
        [data-theme='light'] .safety-stat-label {
          color: #475569 !important;
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        className="safety-hero"
        style={{
          background: `linear-gradient(135deg, ${DARK_BG} 0%, ${DARK_BG2} 100%)`,
          padding: '100px 24px 80px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          {/* pill badge */}
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(0,174,239,0.12)',
              border: `1px solid rgba(0,174,239,0.35)`,
              color: CYAN,
              borderRadius: 999,
              padding: '6px 18px',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.04em',
              marginBottom: 24,
            }}
          >
            Workplace Safety ERP
          </span>

          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              color: '#f8fafc',
              lineHeight: 1.15,
              margin: '0 0 20px',
            }}
          >
            Comprehensive{' '}
            <span style={{ color: CYAN }}>Safety Management System</span>
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(248,250,252,0.72)',
              maxWidth: 620,
              margin: '0 auto 36px',
              lineHeight: 1.75,
            }}
          >
            From incident tracking and risk assessment to compliance reporting and
            emergency response — our integrated safety platform protects your
            people and keeps your operations audit-ready.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/contact-us"
              style={{
                background: `linear-gradient(135deg, ${CYAN}, ${BLUE})`,
                color: '#fff',
                padding: '13px 30px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Get Started <ArrowRight size={16} />
            </a>
            <a
              href="/what-we-do"
              style={{
                background: 'transparent',
                color: '#f8fafc',
                padding: '13px 30px',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                border: '1px solid rgba(248,250,252,0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Learn More <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        style={{
          background: DARK_BG2,
          padding: '48px 24px',
          borderTop: '1px solid rgba(0,174,239,0.1)',
          borderBottom: '1px solid rgba(0,174,239,0.1)',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 20,
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="safety-stat-card"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(0,174,239,0.18)',
                borderRadius: 12,
                padding: '28px 20px',
                textAlign: 'center',
              }}
            >
              <div
                className="safety-stat-number"
                style={{ fontSize: '2.1rem', fontWeight: 800, color: CYAN, marginBottom: 6 }}
              >
                {s.value}
              </div>
              <div
                className="safety-stat-label"
                style={{ fontSize: '0.88rem', color: 'rgba(248,250,252,0.65)', fontWeight: 500 }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section
        style={{
          background: DARK_BG,
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                color: '#f8fafc',
                margin: '0 0 12px',
              }}
            >
              A Complete Toolkit for Workplace Safety
            </h2>
            <p style={{ color: 'rgba(248,250,252,0.6)', maxWidth: 560, margin: '0 auto', fontSize: '1rem' }}>
              Nine integrated modules designed to eliminate hazards, ensure compliance, and protect every worker.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 22,
            }}
          >
            {features.map(({ icon: Icon, title, desc, bullets }) => (
              <div
                key={title}
                className="safety-card"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(0,174,239,0.14)',
                  borderRadius: 14,
                  padding: '28px 26px',
                  transition: 'border-color 0.2s',
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 10,
                    background: 'rgba(0,174,239,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}
                >
                  <Icon size={22} color={CYAN} />
                </div>
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#f8fafc',
                    margin: '0 0 8px',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'rgba(248,250,252,0.6)',
                    margin: '0 0 14px',
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: '0.84rem',
                        color: 'rgba(248,250,252,0.55)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                      }}
                    >
                      <CheckCircle2 size={14} color={CYAN} style={{ flexShrink: 0, marginTop: 2 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section
        className="safety-section-dark"
        style={{
          background: `linear-gradient(135deg, ${DARK_BG2} 0%, #0f1e3a 100%)`,
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                color: '#f8fafc',
                margin: '0 0 12px',
              }}
            >
              Why Leading Organisations Trust Altapete for Safety
            </h2>
            <p style={{ color: 'rgba(248,250,252,0.6)', maxWidth: 520, margin: '0 auto' }}>
              Measurable safety improvements backed by technology, automation, and expert support.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 20,
            }}
          >
            {benefits.map((b) => (
              <div
                key={b}
                className="safety-card"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(0,174,239,0.12)',
                  borderRadius: 12,
                  padding: '22px 22px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                }}
              >
                <CheckCircle2 size={20} color={CYAN} style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ margin: 0, fontSize: '0.92rem', color: 'rgba(248,250,252,0.75)', lineHeight: 1.65 }}>
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
          padding: '72px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <Zap size={36} color="#fff" style={{ marginBottom: 16, opacity: 0.9 }} />
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              fontWeight: 800,
              color: '#fff',
              margin: '0 0 14px',
            }}
          >
            Ready to Build a Safer Workplace?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', margin: '0 0 36px', lineHeight: 1.7 }}>
            Speak with our safety management specialists and discover how
            Altapete can protect your people and ensure full compliance.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/contact-us"
              style={{
                background: '#fff',
                color: BLUE,
                padding: '13px 30px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Get Started Today <ArrowRight size={16} />
            </a>
            <a
              href="/what-we-do"
              style={{
                background: 'transparent',
                color: '#fff',
                padding: '13px 30px',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Explore Solutions <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
