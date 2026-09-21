import Layout from '@/components/Layout';
import Link from 'next/link';
import {
  Database,
  Cloud,
  Layers,
  BarChart2,
  Monitor,
  Settings,
  Headphones,
  Sliders,
  GitMerge,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  TrendingUp,
} from 'lucide-react';

const CYAN = '#00AEEF';
const BLUE = '#2c73d9';
const DARK = '#080d1a';

const erpPlatforms = [
  {
    icon: <Database size={36} color={CYAN} />,
    title: 'Oracle Fusion ERP',
    desc: 'End-to-end enterprise cloud ERP covering finance, procurement, HCM, and supply chain management with AI-driven insights.',
    link: '/oracle-fusion',
  },
  {
    icon: <Cloud size={36} color={CYAN} />,
    title: 'NetSuite ERP',
    desc: 'Unified cloud business management suite spanning financials, CRM, e-commerce, and inventory for growing mid-market enterprises.',
    link: '/netsuite',
  },
  {
    icon: <Layers size={36} color={CYAN} />,
    title: 'Odoo ERP',
    desc: 'Flexible open-source ERP platform (V14–V17) with modules for accounting, sales, manufacturing, HR, and ZATCA/Arabic localization.',
    link: '/odoo-erp',
  },
  {
    icon: <BarChart2 size={36} color={CYAN} />,
    title: 'SAP',
    desc: 'Industry-leading SAP Business One and SAP S/4HANA implementations tailored for Saudi Arabia and regional compliance requirements.',
    link: '/sap-implementation',
  },
  {
    icon: <Monitor size={36} color={CYAN} />,
    title: 'Microsoft Dynamics 365',
    desc: 'Comprehensive D365 Finance, Supply Chain, and Business Central solutions seamlessly integrated with the Microsoft ecosystem.',
    link: '/microsoft-d365',
  },
];

const stats = [
  { value: '100+', label: 'Enterprise Solutions' },
  { value: '50+', label: 'Other Solutions' },
  { value: '2–4 Weeks', label: 'Avg. Timeline' },
  { value: '24/7', label: 'Customer Support' },
];

const services = [
  {
    icon: <Settings size={28} color={CYAN} />,
    title: 'Implementation',
    desc: 'Full-cycle ERP deployment — from requirement gathering and system design to go-live and hypercare — ensuring minimal disruption to your operations.',
  },
  {
    icon: <Headphones size={28} color={CYAN} />,
    title: 'Support',
    desc: 'Round-the-clock functional and technical support, SLA-driven ticket resolution, and proactive system health monitoring post go-live.',
  },
  {
    icon: <Sliders size={28} color={CYAN} />,
    title: 'Customization',
    desc: 'Tailored workflows, custom reports, role-based dashboards, and localization (VAT, ZATCA, Arabic UI) built to match your exact business needs.',
  },
  {
    icon: <GitMerge size={28} color={CYAN} />,
    title: 'Integration',
    desc: 'Seamless API and middleware integration between your ERP and third-party platforms — payment gateways, CRMs, e-commerce, BI tools, and more.',
  },
];

export default function ErpServices() {
  return (
    <Layout>
      <style>{`
        .erp-hero {
          background: linear-gradient(135deg, ${DARK} 0%, #0d1b3e 60%, #0a2a5e 100%);
          padding: 96px 24px 80px;
          text-align: center;
        }
        .erp-hero h1 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 20px;
          line-height: 1.15;
        }
        .erp-hero h1 span { color: ${CYAN}; }
        .erp-hero p {
          font-size: 1.1rem;
          color: #a8b8d8;
          max-width: 680px;
          margin: 0 auto 36px;
          line-height: 1.75;
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

        /* Stats */
        .stats-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0;
          background: linear-gradient(90deg, ${BLUE}, ${CYAN});
          padding: 0;
        }
        .stat-item {
          flex: 1 1 180px;
          text-align: center;
          padding: 28px 16px;
          border-right: 1px solid rgba(255,255,255,0.18);
        }
        .stat-item:last-child { border-right: none; }
        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: #fff;
          display: block;
        }
        .stat-label {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.82);
          margin-top: 4px;
          display: block;
        }

        /* Platforms */
        .section {
          padding: 80px 24px;
          max-width: 1160px;
          margin: 0 auto;
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
        .section-title {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 14px;
        }
        .section-sub {
          font-size: 1rem;
          color: #a8b8d8;
          max-width: 600px;
          line-height: 1.7;
          margin: 0 0 48px;
        }

        .platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 24px;
        }
        .platform-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(0,174,239,0.18);
          border-radius: 16px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform 0.22s, box-shadow 0.22s;
          text-decoration: none;
        }
        .platform-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0,174,239,0.18);
          border-color: ${CYAN};
        }
        .platform-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #e8f0fe;
          margin: 0;
        }
        .platform-card p {
          font-size: 0.9rem;
          color: #8a9ab8;
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }
        .platform-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: ${CYAN};
          font-size: 0.88rem;
          font-weight: 600;
          margin-top: 4px;
        }

        /* Services */
        .services-section {
          padding: 80px 24px;
          background: rgba(255,255,255,0.02);
        }
        .services-inner {
          max-width: 1160px;
          margin: 0 auto;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 28px;
        }
        .service-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(44,115,217,0.2);
          border-radius: 16px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform 0.22s, box-shadow 0.22s;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 32px rgba(44,115,217,0.18);
          border-color: ${BLUE};
        }
        .service-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #e8f0fe;
          margin: 0;
        }
        .service-card p {
          font-size: 0.9rem;
          color: #8a9ab8;
          line-height: 1.65;
          margin: 0;
        }

        /* CTA */
        .cta-section {
          padding: 80px 24px;
          text-align: center;
        }
        .cta-inner {
          background: linear-gradient(135deg, #0d1b3e, #0a2a5e);
          border: 1px solid rgba(0,174,239,0.25);
          border-radius: 24px;
          padding: 64px 32px;
          max-width: 820px;
          margin: 0 auto;
        }
        .cta-inner h2 {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px;
        }
        .cta-inner h2 span { color: ${CYAN}; }
        .cta-inner p {
          font-size: 1rem;
          color: #a8b8d8;
          margin: 0 0 36px;
          line-height: 1.7;
        }
        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
        }
        .btn-primary {
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
        .btn-primary:hover { opacity: 0.88; }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          padding: 13px 32px;
          border-radius: 50px;
          border: 2px solid rgba(255,255,255,0.3);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-outline:hover { border-color: ${CYAN}; color: ${CYAN}; }

        /* Light theme */
        [data-theme='light'] .erp-hero {
          background: linear-gradient(135deg, #e8f4fc 0%, #dbeafe 100%);
        }
        [data-theme='light'] .erp-hero h1 { color: #0a1628; }
        [data-theme='light'] .erp-hero p { color: #475569; }
        [data-theme='light'] .section-title { color: #0a1628; }
        [data-theme='light'] .section-sub { color: #475569; }
        [data-theme='light'] .platform-card {
          background: #fff;
          border-color: rgba(0,174,239,0.2);
        }
        [data-theme='light'] .platform-card h3 { color: #0a1628; }
        [data-theme='light'] .platform-card p { color: #475569; }
        [data-theme='light'] .services-section { background: #f1f5f9; }
        [data-theme='light'] .service-card {
          background: #fff;
          border-color: rgba(44,115,217,0.15);
        }
        [data-theme='light'] .service-card h3 { color: #0a1628; }
        [data-theme='light'] .service-card p { color: #475569; }
        [data-theme='light'] .cta-inner {
          background: linear-gradient(135deg, #dbeafe, #e0f2fe);
          border-color: rgba(0,174,239,0.3);
        }
        [data-theme='light'] .cta-inner h2 { color: #0a1628; }
        [data-theme='light'] .cta-inner p { color: #475569; }
        [data-theme='light'] .btn-outline { color: #0a1628; border-color: rgba(10,22,40,0.3); }
        [data-theme='light'] .btn-outline:hover { color: ${BLUE}; border-color: ${BLUE}; }
      `}</style>

      {/* Hero */}
      <section className="erp-hero">
        <div className="section-tag">ERP Services</div>
        <h1>
          Enterprise Resource Planning <span>Solutions</span>
        </h1>
        <p>
          Altapete Solutions delivers end-to-end ERP services across the world&apos;s leading platforms.
          From rapid implementation to continuous support, we transform your operations with
          intelligent, scalable, and compliant ERP systems.
        </p>
        <Link href="/contact" className="hero-btn">
          Get a Free Consultation <ArrowRight size={18} />
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

      {/* ERP Platforms */}
      <div style={{ background: DARK }}>
        <div className="section">
          <div className="section-tag">Our Platforms</div>
          <h2 className="section-title">ERP Platforms We Specialize In</h2>
          <p className="section-sub">
            We are certified partners and practitioners across five industry-leading ERP ecosystems,
            each offering distinct capabilities to fit your enterprise size and industry vertical.
          </p>
          <div className="platforms-grid">
            {erpPlatforms.map((p) => (
              <Link key={p.title} href={p.link} className="platform-card">
                {p.icon}
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="platform-link">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="services-section">
        <div className="services-inner">
          <div style={{ marginBottom: 48 }}>
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">Core ERP Service Areas</h2>
            <p className="section-sub">
              Every engagement is structured around four pillars that ensure your ERP investment delivers
              measurable ROI from day one through the entire system lifecycle.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                {s.icon}
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ background: DARK }}>
        <div className="cta-inner">
          <h2>
            Ready to <span>Transform</span> Your Business?
          </h2>
          <p>
            Join 100+ enterprises that trust Altapete Solutions for their ERP journey.
            Let&apos;s discuss your requirements and design the right solution for your organisation.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">
              Start Your Project <ArrowRight size={16} />
            </Link>
            <Link href="/about" className="btn-outline">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
