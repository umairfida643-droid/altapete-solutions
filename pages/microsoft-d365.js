import Layout from '@/components/Layout';
import Link from 'next/link';
import {
  Monitor,
  Settings,
  Headphones,
  Sliders,
  GitMerge,
  ArrowRight,
  CheckCircle,
  Cloud,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Globe,
  BarChart2,
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
      'D365 Finance, Supply Chain Management, and Business Central deployment',
      'Microsoft Sure Step and FastTrack methodology-aligned rollouts',
      'Chart of Accounts, financial dimensions, and consolidation setup',
      'Multi-legal entity, multi-currency, and intercompany configuration',
      'Data migration, UAT, training, and go-live cutover management',
    ],
  },
  {
    icon: <Headphones size={30} color={CYAN} />,
    title: 'Support',
    points: [
      '24/7 D365 Finance & Operations and Business Central support',
      'Microsoft Unified and Premier support escalation capability',
      'D365 platform update impact assessment and regression testing',
      'Lifecycle Services (LCS) environment and release management',
      'Named senior consultant for strategic planning and roadmap guidance',
    ],
  },
  {
    icon: <Sliders size={30} color={CYAN} />,
    title: 'Customization',
    points: [
      'X++ development for D365 Finance & Operations extensions',
      'AL language development for Business Central custom extensions',
      'Power BI embedded dashboards and Power Automate workflows',
      'ZATCA e-invoicing and Saudi Arabia tax localization configuration',
      'Role Centre customizations and workspace personalization',
    ],
  },
  {
    icon: <GitMerge size={30} color={CYAN} />,
    title: 'Integration',
    points: [
      'Azure Integration Services — Logic Apps, Service Bus, API Management',
      'Dataverse and Power Platform integration with D365 modules',
      'D365–Salesforce, D365–SharePoint, and D365–Teams connectors',
      'EDI integration with suppliers, 3PLs, and banking institutions',
      'Custom OData and REST API integrations for third-party platforms',
    ],
  },
];

const benefits = [
  { icon: <Cloud size={22} color={CYAN} />, text: 'Native Microsoft Azure cloud with enterprise-grade security, SLAs, and global data centres' },
  { icon: <TrendingUp size={22} color={CYAN} />, text: 'Intelligent finance with AI-driven forecasting, anomaly detection, and cash flow insights' },
  { icon: <Cpu size={22} color={CYAN} />, text: 'Deep integration with Microsoft 365, Teams, Power BI, and the entire Microsoft ecosystem' },
  { icon: <Globe size={22} color={CYAN} />, text: 'Multi-country localizations with Saudi Arabia, UAE, and GCC regulatory compliance' },
  { icon: <ShieldCheck size={22} color={CYAN} />, text: 'Enterprise-grade audit trail, role-based security, and SOX/GDPR compliance controls' },
  { icon: <BarChart2 size={22} color={CYAN} />, text: 'Scalable from Business Central for SMEs to D365 Finance for global enterprise operations' },
];

export default function MicrosoftD365() {
  return (
    <Layout>
      <style>{`
        .d365-hero {
          background: linear-gradient(135deg, ${DARK} 0%, #0d1b3e 60%, #0a2a5e 100%);
          padding: 96px 24px 80px;
          text-align: center;
        }
        .d365-hero h1 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 20px;
          line-height: 1.15;
        }
        .d365-hero h1 span { color: ${CYAN}; }
        .d365-hero p {
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

        [data-theme='light'] .d365-hero { background: linear-gradient(135deg, #e8f4fc, #dbeafe); }
        [data-theme='light'] .d365-hero h1 { color: #0a1628; }
        [data-theme='light'] .d365-hero p { color: #475569; }
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
      <section className="d365-hero">
        <div className="section-tag">Microsoft Dynamics 365</div>
        <h1>
          Microsoft Dynamics 365 <span>Finance, SCM & Business Central</span>
        </h1>
        <p>
          Altapete Solutions delivers Microsoft Dynamics 365 implementations that leverage the full
          power of the Microsoft cloud — unifying finance, supply chain, and operations within
          your existing Microsoft ecosystem.
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
          <h2 className="section-title">Microsoft D365 Service Areas</h2>
          <p className="section-sub">
            Our Microsoft-certified consultants bring deep functional expertise across D365 Finance,
            Supply Chain Management, and Business Central for every industry vertical.
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
          <div className="section-tag">Why Microsoft D365</div>
          <h2 className="section-title" style={{ marginBottom: 10 }}>Key Business Benefits</h2>
          <p className="section-sub">
            Microsoft Dynamics 365 combines world-class ERP with the breadth of the Microsoft cloud —
            delivering intelligence, agility, and productivity at enterprise scale.
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
            Modernize Finance with <span>Dynamics 365</span>
          </h2>
          <p>
            Harness the Microsoft cloud to connect your people, processes, and data.
            Altapete Solutions delivers D365 implementations that are fast, compliant, and built to scale.
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
