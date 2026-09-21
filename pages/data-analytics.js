import Layout from '@/components/Layout';
import Link from 'next/link';
import { BarChart2, Database, PieChart, TrendingUp, Layers, FileText, Zap, Globe, Settings, ArrowRight } from 'lucide-react';

const stats = [
  { value: '100+', label: 'Enterprise Solutions' },
  { value: '50+', label: 'Other Solutions' },
  { value: '2-4 Weeks', label: 'Avg. Timeline' },
  { value: '24/7', label: 'Customer Support' },
];

const features = [
  { icon: <BarChart2 size={28} color="#00AEEF" />, title: 'Business Intelligence', desc: 'Comprehensive BI solutions turning raw data into actionable strategic insights for leadership.' },
  { icon: <PieChart size={28} color="#00AEEF" />, title: 'Power BI Dashboards', desc: 'Interactive Power BI dashboards and reports enabling real-time data-driven decision making.' },
  { icon: <Database size={28} color="#00AEEF" />, title: 'Data Warehousing', desc: 'Azure Synapse, Snowflake, and Redshift data warehouse design, build, and management.' },
  { icon: <TrendingUp size={28} color="#00AEEF" />, title: 'Predictive Analytics', desc: 'Statistical modeling and predictive analytics to forecast trends and business outcomes.' },
  { icon: <Layers size={28} color="#00AEEF" />, title: 'ETL Pipelines', desc: 'Automated Extract, Transform, Load pipelines consolidating data from disparate sources.' },
  { icon: <FileText size={28} color="#00AEEF" />, title: 'Custom Reporting', desc: 'Tailored operational and executive reporting solutions aligned to your KPIs and SLAs.' },
  { icon: <Globe size={28} color="#00AEEF" />, title: 'Data Integration', desc: 'API-driven data integration connecting CRM, ERP, marketing, and operational systems.' },
  { icon: <Settings size={28} color="#00AEEF" />, title: 'Data Governance', desc: 'Data quality management, master data management, and governance framework setup.' },
  { icon: <Zap size={28} color="#00AEEF" />, title: 'Real-Time Analytics', desc: 'Apache Kafka and Azure Stream Analytics for real-time data processing and alerting.' },
];

export default function DataAnalytics() {
  return (
    <Layout>
      <style jsx global>{`
        body { background: #f8fafc; color: #1e293b; font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #080d1a 0%, #0a1628 60%, #00AEEF22 100%)', padding: '100px 20px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: '#00AEEF22', color: '#00AEEF', padding: '6px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>DATA INTELLIGENCE</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800, margin: '20px 0 16px' }}>Data & Analytics</h1>
          <p style={{ color: '#94a3b8', fontSize: 18, lineHeight: 1.7, marginBottom: 36 }}>Business intelligence, Power BI dashboards, data warehousing, predictive analytics, and real-time reporting — transforming your data into competitive intelligence.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" style={{ background: '#00AEEF', color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>Unlock Your Data</Link>
            <Link href="/it-services" style={{ border: '2px solid #00AEEF', color: '#00AEEF', padding: '14px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>All IT Services</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#fff', padding: '50px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center', padding: '30px 20px', borderRadius: 12, background: '#f1f5f9', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: '#00AEEF' }}>{s.value}</div>
              <div style={{ color: '#64748b', fontWeight: 500, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>Data & Analytics Capabilities</h2>
          <p style={{ textAlign: 'center', color: '#64748b', maxWidth: 600, margin: '0 auto 50px', fontSize: 16 }}>From raw data collection to executive dashboards — we build end-to-end analytics solutions that drive smarter decisions.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 28 }}>
            {features.map((f) => (
              <div key={f.title} style={{ background: '#fff', borderRadius: 14, padding: '32px 28px', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px #0001' }}>
                <div style={{ marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: 15 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1e3a5f, #2563eb)', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, marginBottom: 16 }}>Make Smarter Decisions with Your Data</h2>
        <p style={{ color: '#bfdbfe', fontSize: 18, marginBottom: 36 }}>Our data engineers and BI specialists will build the analytics infrastructure your business needs to thrive.</p>
        <Link href="/contact-us" style={{ background: '#fff', color: '#2563eb', padding: '16px 40px', borderRadius: 8, fontWeight: 800, textDecoration: 'none', fontSize: 17, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          Contact Us Today <ArrowRight size={20} />
        </Link>
      </section>
    </Layout>
  );
}
