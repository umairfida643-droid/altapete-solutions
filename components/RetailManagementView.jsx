import React from 'react';
import {
  ShoppingBag,
  BarChart3,
  Package,
  Users,
  CreditCard,
  Tag,
  Repeat,
  Star,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Globe2,
  Smartphone,
} from 'lucide-react';

const CYAN = '#00AEEF';
const BLUE = '#2c73d9';
const DARK_BG = '#080d1a';
const DARK_BG2 = '#0a1628';

const features = [
  {
    icon: ShoppingBag,
    title: 'POS & Sales Management',
    desc: 'Streamlined point-of-sale operations for single and multi-branch retail environments.',
    bullets: ['Multi-branch POS terminals', 'Barcode scanning & product lookup', 'Receipt printing & digital receipts'],
  },
  {
    icon: Package,
    title: 'Inventory & Stock Control',
    desc: 'Real-time inventory visibility across all your warehouses and store locations.',
    bullets: ['Real-time stock level monitoring', 'Multi-warehouse management', 'Auto reorder & low-stock alerts'],
  },
  {
    icon: Users,
    title: 'Customer & Loyalty Programs',
    desc: 'Build lasting customer relationships with integrated loyalty and CRM tools.',
    bullets: ['Loyalty points & rewards engine', 'Full CRM & customer profiles', 'Customer segmentation & targeting'],
  },
  {
    icon: CreditCard,
    title: 'Payments & Multi-Currency',
    desc: 'Accept all major payment methods with full VAT compliance built in.',
    bullets: ['Mada / Visa / cash support', 'Multi-currency transactions', 'VAT 15% calculation & reporting'],
  },
  {
    icon: BarChart3,
    title: 'Sales Analytics & Reporting',
    desc: 'Actionable insights from daily performance to long-term trend analysis.',
    bullets: ['Daily / weekly / monthly reports', 'Top products & category analysis', 'Profit margin & cost analysis'],
  },
  {
    icon: Tag,
    title: 'Promotions & Pricing Engine',
    desc: 'Flexible promotion management to drive sales and increase basket size.',
    bullets: ['Seasonal & flash discounts', 'Bundle & combo offers', 'Dynamic price rules & overrides'],
  },
  {
    icon: Repeat,
    title: 'Returns & Exchanges',
    desc: 'Hassle-free return processing that keeps customers satisfied and stock accurate.',
    bullets: ['Return management workflow', 'Refund processing & reconciliation', 'Credit notes & store credit'],
  },
  {
    icon: Smartphone,
    title: 'Mobile & E-Commerce',
    desc: 'Unify your online and offline channels for a seamless omnichannel experience.',
    bullets: ['Mobile POS for staff on the floor', 'Online store integration', 'Omnichannel inventory sync'],
  },
  {
    icon: Globe2,
    title: 'ZATCA Compliance',
    desc: "Stay fully compliant with Saudi Arabia's e-invoicing and tax regulations.",
    bullets: ['Phase 2 e-invoicing ready', 'QR code generation per invoice', 'Automated VAT & tax reports'],
  },
];

const stats = [
  { value: '100+', label: 'Enterprise Solutions' },
  { value: '50+', label: 'Other Solutions' },
  { value: '2-4 Weeks', label: 'Implementation Timeline' },
  { value: '24/7', label: 'Customer Support' },
];

const benefits = [
  'Reduce operational costs with automated workflows and smart reordering',
  'Increase customer retention through personalized loyalty programmes',
  'Gain real-time visibility into sales, stock, and profitability',
  'Scale effortlessly from a single store to a national retail chain',
  'Ensure full ZATCA & VAT compliance without manual effort',
  'Empower your team with intuitive mobile and desktop interfaces',
];

export default function RetailManagementView() {
  return (
    <>
      <style jsx global>{`
        [data-theme='light'] .retail-hero {
          background: linear-gradient(135deg, #f0f7ff 0%, #e8f4ff 100%) !important;
        }
        [data-theme='light'] .retail-section-dark {
          background: #f8fafc !important;
        }
        [data-theme='light'] .retail-card {
          background: #ffffff !important;
          border-color: rgba(0, 174, 239, 0.15) !important;
        }
        [data-theme='light'] .retail-card h3,
        [data-theme='light'] .retail-card h4 {
          color: #0a1628 !important;
        }
        [data-theme='light'] .retail-card p,
        [data-theme='light'] .retail-card li {
          color: #475569 !important;
        }
        [data-theme='light'] .retail-stat-card {
          background: #ffffff !important;
          border-color: rgba(0, 174, 239, 0.2) !important;
        }
        [data-theme='light'] .retail-stat-number {
          color: #2c73d9 !important;
        }
        [data-theme='light'] .retail-stat-label {
          color: #475569 !important;
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        className="retail-hero"
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
            Retail ERP Solutions
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
            Unified Retail{' '}
            <span style={{ color: CYAN }}>Management Platform</span>
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
            From point-of-sale to supply chain, our end-to-end retail ERP
            connects every corner of your business — so you can sell smarter,
            serve better, and grow faster.
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
              className="retail-stat-card"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(0,174,239,0.18)',
                borderRadius: 12,
                padding: '28px 20px',
                textAlign: 'center',
              }}
            >
              <div
                className="retail-stat-number"
                style={{ fontSize: '2.1rem', fontWeight: 800, color: CYAN, marginBottom: 6 }}
              >
                {s.value}
              </div>
              <div
                className="retail-stat-label"
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
              Everything You Need to Run a Modern Retail Business
            </h2>
            <p style={{ color: 'rgba(248,250,252,0.6)', maxWidth: 560, margin: '0 auto', fontSize: '1rem' }}>
              Nine purpose-built modules that work together seamlessly out of the box.
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
                className="retail-card"
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
        className="retail-section-dark"
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
              Why Retailers Choose Altapete
            </h2>
            <p style={{ color: 'rgba(248,250,252,0.6)', maxWidth: 520, margin: '0 auto' }}>
              Proven outcomes that give you a competitive edge in today's fast-moving retail landscape.
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
                className="retail-card"
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
            Ready to Transform Your Retail Operations?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', margin: '0 0 36px', lineHeight: 1.7 }}>
            Talk to our retail ERP specialists today and get a personalised demo
            tailored to your business needs.
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
