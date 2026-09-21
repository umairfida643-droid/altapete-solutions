import Layout from '@/components/Layout';
import Link from 'next/link';
import { Code2, Layers, Database, GitBranch, Cpu, Globe, Shield, Zap, Settings, ArrowRight } from 'lucide-react';

const stats = [
  { value: '100+', label: 'Enterprise Solutions' },
  { value: '50+', label: 'Other Solutions' },
  { value: '2-4 Weeks', label: 'Avg. Timeline' },
  { value: '24/7', label: 'Customer Support' },
];

const features = [
  { icon: <Layers size={28} color="#00AEEF" />, title: 'Enterprise Software', desc: 'Scalable, robust enterprise applications built for high performance and complex business logic.' },
  { icon: <Globe size={28} color="#00AEEF" />, title: 'SaaS Development', desc: 'Multi-tenant SaaS platforms with subscription management, billing, and cloud-native architecture.' },
  { icon: <Settings size={28} color="#00AEEF" />, title: 'ERP Custom Modules', desc: 'Custom module development for SAP, Oracle, Odoo, and Microsoft Dynamics ERP systems.' },
  { icon: <GitBranch size={28} color="#00AEEF" />, title: 'API Development', desc: 'RESTful and GraphQL API design, development, documentation, and third-party integrations.' },
  { icon: <Database size={28} color="#00AEEF" />, title: 'Database Architecture', desc: 'Optimized database design, query performance tuning, and data migration strategies.' },
  { icon: <Code2 size={28} color="#00AEEF" />, title: 'Legacy Modernization', desc: 'Migrate and modernize legacy systems to modern tech stacks without business disruption.' },
  { icon: <Shield size={28} color="#00AEEF" />, title: 'Secure Code Practices', desc: 'Security-first development with OWASP guidelines, code reviews, and vulnerability testing.' },
  { icon: <Cpu size={28} color="#00AEEF" />, title: 'Microservices Architecture', desc: 'Containerized, scalable microservices design using Docker, Kubernetes, and CI/CD pipelines.' },
  { icon: <Zap size={28} color="#00AEEF" />, title: 'Agile Delivery', desc: 'Sprint-based agile development with transparent progress reporting and rapid iterations.' },
];

export default function SoftwareDevelopment() {
  return (
    <Layout>
      <style jsx global>{`
        body { background: #f8fafc; color: #1e293b; font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #080d1a 0%, #0a1628 60%, #00AEEF22 100%)', padding: '100px 20px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: '#00AEEF22', color: '#00AEEF', padding: '6px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>CUSTOM SOFTWARE</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800, margin: '20px 0 16px' }}>Software Development</h1>
          <p style={{ color: '#94a3b8', fontSize: 18, lineHeight: 1.7, marginBottom: 36 }}>Custom enterprise software, SaaS platforms, ERP modules, and API solutions built by expert developers. We translate your business requirements into high-performance, scalable software products.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" style={{ background: '#00AEEF', color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>Start Your Project</Link>
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
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>Custom Software Capabilities</h2>
          <p style={{ textAlign: 'center', color: '#64748b', maxWidth: 600, margin: '0 auto 50px', fontSize: 16 }}>From concept to deployment, we deliver software solutions that solve real business challenges.</p>
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
        <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, marginBottom: 16 }}>Build Your Custom Software Solution</h2>
        <p style={{ color: '#bfdbfe', fontSize: 18, marginBottom: 36 }}>Tell us your requirements and our development team will design the perfect solution for your business.</p>
        <Link href="/contact-us" style={{ background: '#fff', color: '#2563eb', padding: '16px 40px', borderRadius: 8, fontWeight: 800, textDecoration: 'none', fontSize: 17, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          Contact Us Today <ArrowRight size={20} />
        </Link>
      </section>
    </Layout>
  );
}
