import Layout from '@/components/Layout';
import Link from 'next/link';
import {
  Cloud,
  Settings,
  Headphones,
  Sliders,
  GitMerge,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Package,
  Users,
  BarChart2,
  ShieldCheck,
} from 'lucide-react';

const CYAN = '#00AEEF';
const BLUE = '#2c73d9';
const DARK = '#080d1a';

const stats = [
  { value: '100+', label: 'Enterprise Solutions' },
  { value: '50+', label: 'Other Solutions' },
  { value: '2–4 Weeks', label: 'Avg. Timeline' },
  { value: '24/7', label: 'Customer Support' },
];

const features = [
  {
    icon: <Settings size={30} color={CYAN} />,
    title: 'Implementation',
    points: [
      'SuiteSuccess methodology-aligned full-cycle deployment',
      'Chart of accounts, subsidiary, and consolidation setup',
      'Multi-currency, multi-tax, and multi-book configuration',
      'Data migration from QuickBooks, Sage, or legacy systems',
      'End-user training, UAT management, and go-live cutover',
    ],
  },
  {
    icon: <Headphones size={30} color={CYAN} />,
    title: 'Support',
    points: [
      '24/7 NetSuite functional and technical helpdesk',
      'Ongoing SuiteFlow, SuiteScript, and saved search support',
      'NetSuite version upgrade review and impact assessment',
      'Performance monitoring for scripts, workflows, and searches',
      'Dedicated account consultant for proactive guidance',
    ],
  },
  {
    icon: <Sliders size={30} color={CYAN} />,
    title: 'Customization',
    points: [
      'SuiteScript 2.x development for business logic automation',
      'Custom record types, fields, and transaction forms',
      'SuiteFlow workflow builder for approval and routing rules',
      'Advanced PDF/HTML custom invoice and report templates',
      'SuiteCommerce and SuitePeople portal customizations',
    ],
  },
  {
    icon: <GitMerge size={30} color={CYAN} />,
    title: 'Integration',
    points: [
      'SuiteTalk SOAP/REST web services and SuiteQL API integrations',
      'Pre-built connectors for Shopify, Salesforce, HubSpot, and Amazon',
      'EDI integration with 3PL and logistics partners',
      'Bank feed reconciliation and payment gateway connectivity',
      'Custom middleware using MuleSoft, Boomi, or Celigo',
    ],
  },
];

const benefits = [
  { icon: <DollarSign size={22} color={CYAN} />, text: 'Accelerate financial close with automated revenue recognition and consolidation' },
  { icon: <Package size={22} color={CYAN} />, text: 'End-to-end inventory and order management across multiple warehouses and channels' },
  { icon: <Users size={22} color={CYAN} />, text: 'Unified CRM and ERP data for a 360° view of customers and sales pipelines' },
  { icon: <Cloud size={22} color={CYAN} />, text: 'True cloud SaaS with no hardware investment and automatic bi-annual updates' },
  { icon: <BarChart2 size={22} color={CYAN} />, text: 'Real-time KPI dashboards and SuiteAnalytics for data-driven decisions' },
  { icon: <ShieldCheck size={22} color={CYAN} />, text: 'Built-in compliance controls for ASC 606, IFRS 15, SOX, and regional tax rules' },
];

export default function Netsuite() {
  return (
    <Layout>
      <style>{`
        .ns-hero {
          background: linear-gradient(135deg, ${DARK} 0%, #0d1b3e 60%, #0a2a5e 100%);
          padding: 96px 24px 80px;
          text-align: center;
        }
        .ns-hero h1 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 20px;
          line-height: 1.15;
        }
        .ns-hero h1 span { color: ${CYAN}; }
        .ns-hero p {
          font-size: 1.1rem;
          color: #a8b8d8;
          max-width: 680px;
          margin: 0 auto 36px;
          line-height: 1.75;
        }
        .section-tag {
          display: inline-block;
          background: rgba(0,174,239,0.12);
          color: ${CYAN};
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 14px;
        }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(90deg, ${CYAN}, ${BLUE});
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          padding: 14px 32px;
          border-radius: 50px;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .hero-btn:hover { opacity: 0.88; }

        .stats-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          background: linear-gradient(90deg, ${BLUE}, ${CYAN});
        }
        .stat-item {
          flex: 1 1 180px;
          text-align: center;
          padding: 28px 16px;
          border-right: 1px solid rgba(255,255,255,0.18);
        }
        .stat-item:last-child { border-right: none; }
        .stat-value { font-size: 2rem; font-weight: 800; color: #fff; display: block; }
        .stat-label { font-size: 0.85rem; color: rgba(255,255,255,0.82); margin-top: 4px; display: block; }

        .section { padding: 80px 24px; max-width: 1160px; margin: 0 auto; }
        .section-title {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 12px;
        }
        .section-sub {
          font-size: 1rem;
          color: #a8b8d8;
          max-width: 620px;
          line-height: 1.7;
          margin: 0 0 48px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 28px;
        }
        .feature-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(0,174,239,0.18);
          border-radius: 16px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.22s, box-shadow 0.22s;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0,174,239,0.15);
          border-color: ${CYAN};
        }
        .feature-card h3 { font-size: 1.15rem; font-weight: 700; color: #e8f0fe; margin: 0; }
        .feature-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .feature-card ul li {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 0.88rem; color: #8a9ab8; line-height: 1.55;
        }
        .feature-card ul li svg { flex-shrink: 0; margin-top: 2px; }

        .benefits-section { background: rgba(255,255,255,0.02); padding: 80px 24px; }
        .benefits-inner { max-width: 1160px; margin: 0 auto; }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .benefit-item {
          display: flex; align-items: flex-start; gap: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(44,115,217,0.18);
          border-radius: 12px;
          padding: 22px 20px;
        }
        .benefit-item svg { flex-shrink: 0; margin-top: 2px; }
        .benefit-item p { font-size: 0.9rem; color: #a8b8d8; line-height: 1.6; margin: 0; }

        .cta-section { padding: 80px 24px; text-align: center; }
        .cta-inner {
          background: linear-gradient(135deg, #0d1b3e, #0a2a5e);
          border: 1px solid rgba(0,174,239,0.25);
          border-radius: 24px;
          padding: 64px 32px;
          max-width: 820px;
          margin: 0 auto;
        }
        .cta-inner h2 { font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 800; color: #fff; margin: 0 0 16px; }
        .cta-inner h2 span { color: ${CYAN}; }
        .cta-inner p { font-size: 1rem; color: #a8b8d8; margin: 0 0 36px; line-height: 1.7; }
        .cta-buttons { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(90deg, ${CYAN}, ${BLUE});
          color: #fff; font-weight: 700; font-size: 1rem;
          padding: 14px 32px; border-radius: 50px; text-decoration: none;
          transition: opacity 0.2s;
        }
        .btn-primary:hover { opacity: 0.88; }
        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #fff; font-weight: 700; font-size: 1rem;
          padding: 13px 32px; border-radius: 50px;
          border: 2px solid rgba(255,255,255,0.3); text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-outline:hover { border-color: ${CYAN}; color: ${CYAN}; }

        [data-theme='light'] .ns-hero { background: linear-gradient(135deg, #e8f4fc, #dbeafe); }
        [data-theme='light'] .ns-hero h1 { color: #0a1628; }
        [data-theme='light'] .ns-hero p { color: #475569; }
        [data-theme='light'] .section-title { color: #0a1628; }
        [data-theme='light'] .section-sub { color: #475569; }
        [data-theme='light'] .feature-card { background: #fff; border-color: rgba(0,174,239,0.2); }
        [data-theme='light'] .feature-card h3 { color: #0a1628; }
        [data-theme='light'] .feature-card ul li { color: #475569; }
        [data-theme='light'] .benefits-section { background: #f1f5f9; }
        [data-theme='light'] .benefit-item { background: #fff; border-color: rgba(44,115,217,0.15); }
        [data-theme='light'] .benefit-item p { color: #475569; }
        [data-theme='light'] .cta-inner { background: linear-gradient(135deg, #dbeafe, #e0f2fe); border-color: rgba(0,174,239,0.3); }
        [data-theme='light'] .cta-inner h2 { color: #0a1628; }
        [data-theme='light'] .cta-inner p { color: #475569; }
        [data-theme='light'] .btn-outline { color: #0a1628; border-color: rgba(10,22,40,0.3); }
        [data-theme='light'] .btn-outline:hover { color: ${BLUE}; border-color: ${BLUE}; }
      `}</style>

      {/* Hero */}
      <section className="ns-hero">
        <div className="section-tag">NetSuite ERP</div>
        <h1>
          NetSuite ERP <span>Implementation & Support</span>
        </h1>
        <p>
          Scale confidently with Oracle NetSuite — the #1 cloud ERP for fast-growing businesses.
          Altapete Solutions delivers tailored NetSuite deployments that unify your financials, inventory,
          CRM, and e-commerce on a single platform.
        </p>
        <Link href="/contact" className="hero-btn">
          Request a Consultation <ArrowRight size={18} />
        </Link>
      </section>

      {/* Stats */}
      <div className="stats-row">
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Features */}
      <div style={{ background: DARK }}>
        <div className="section">
          <div className="section-tag">Our Services</div>
          <h2 className="section-title">NetSuite ERP Service Areas</h2>
          <p className="section-sub">
            Our NetSuite-certified consultants deliver every phase of your ERP programme —
            from pre-sales scoping through to long-term managed services.
          </p>
          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                {f.icon}
                <h3>{f.title}</h3>
                <ul>
                  {f.points.map((pt) => (
                    <li key={pt}>
                      <CheckCircle size={14} color={CYAN} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="benefits-inner">
          <div className="section-tag">Why NetSuite</div>
          <h2 className="section-title" style={{ marginBottom: 10 }}>Key Business Benefits</h2>
          <p className="section-sub">
            NetSuite eliminates the IT overhead of on-premise ERP and delivers real-time business
            intelligence at every level of your organisation.
          </p>
          <div className="benefits-grid">
            {benefits.map((b) => (
              <div key={b.text} className="benefit-item">
                {b.icon}
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ background: DARK }}>
        <div className="cta-inner">
          <h2>
            Grow Faster with <span>NetSuite ERP</span>
          </h2>
          <p>
            Whether you&apos;re moving off spreadsheets or outgrowing your current system,
            Altapete Solutions gets you live on NetSuite — quickly and correctly.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">
              Get Started <ArrowRight size={16} />
            </Link>
            <Link href="/erp-services" className="btn-outline">
              All ERP Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
