import Layout from '@/components/Layout';
import Link from 'next/link';
import { Code2, Globe, Smartphone, Cloud, Lightbulb, Shield, Server, HeadphonesIcon, BarChart2, Bot, Settings, ArrowRight } from 'lucide-react';

const stats = [
  { value: '100+', label: 'Enterprise Solutions' },
  { value: '50+', label: 'Other Solutions' },
  { value: '2-4 Weeks', label: 'Avg. Timeline' },
  { value: '24/7', label: 'Customer Support' },
];

const services = [
  { icon: <Code2 size={32} color="#00AEEF" />, title: 'Software Development', desc: 'Custom enterprise software, SaaS platforms, ERP modules, and API integrations tailored to your business needs.', href: '/software-development' },
  { icon: <Globe size={32} color="#00AEEF" />, title: 'Web Development', desc: 'Modern corporate websites, customer portals, e-commerce platforms, and CMS solutions.', href: '/web-development' },
  { icon: <Smartphone size={32} color="#00AEEF" />, title: 'Mobile App Development', desc: 'Native iOS & Android apps and cross-platform solutions with React Native and Flutter.', href: '/mobile-app-development' },
  { icon: <Cloud size={32} color="#00AEEF" />, title: 'Cloud Services', desc: 'AWS, Azure, and Google Cloud infrastructure, cloud migration, and DevOps automation.', href: '/cloud-services' },
  { icon: <Lightbulb size={32} color="#00AEEF" />, title: 'IT Consulting', desc: 'Digital transformation strategy, IT architecture consulting, and technology roadmaps.', href: '/it-consulting' },
  { icon: <Shield size={32} color="#00AEEF" />, title: 'Cybersecurity', desc: 'Penetration testing, vulnerability assessments, security audits, and SOC services.', href: '/cybersecurity' },
  { icon: <Server size={32} color="#00AEEF" />, title: 'IT Infrastructure', desc: 'Network design, server setup, datacenter solutions, structured cabling, and VPN.', href: '/it-infrastructure' },
  { icon: <HeadphonesIcon size={32} color="#00AEEF" />, title: 'Technical Support', desc: '24/7 helpdesk, remote support, and SLA-based maintenance contracts for your IT systems.', href: '/technical-support' },
  { icon: <BarChart2 size={32} color="#00AEEF" />, title: 'Data & Analytics', desc: 'Business intelligence, Power BI dashboards, data warehousing, and actionable reporting.', href: '/data-analytics' },
  { icon: <Bot size={32} color="#00AEEF" />, title: 'AI & Automation', desc: 'RPA, AI/ML solutions, intelligent chatbots, and process automation workflows.', href: '/ai-automation' },
  { icon: <Settings size={32} color="#00AEEF" />, title: 'Customized IT Solutions', desc: 'Bespoke technology implementations designed around your unique enterprise requirements.', href: '/customized-it-solutions' },
];

export default function ITServices() {
  return (
    <Layout>
      <style jsx global>{`
        body { background: #f8fafc; color: #1e293b; font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #080d1a 0%, #0a1628 60%, #00AEEF22 100%)', padding: '100px 20px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: '#00AEEF22', color: '#00AEEF', padding: '6px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>TECHNOLOGY SOLUTIONS</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800, margin: '20px 0 16px' }}>IT Services</h1>
          <p style={{ color: '#94a3b8', fontSize: 18, lineHeight: 1.7, marginBottom: 36 }}>End-to-end technology services powering enterprise digital transformation. From custom software and cloud infrastructure to AI automation and cybersecurity — we deliver it all.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" style={{ background: '#00AEEF', color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>Get IT Consultation</Link>
            <Link href="/software-development" style={{ border: '2px solid #00AEEF', color: '#00AEEF', padding: '14px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>Software Development</Link>
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

      {/* Services Grid */}
      <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>Our IT Service Portfolio</h2>
          <p style={{ textAlign: 'center', color: '#64748b', maxWidth: 600, margin: '0 auto 50px', fontSize: 16 }}>11 specialized IT service areas covering every technology need your enterprise may have.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 28 }}>
            {services.map((s) => (
              <Link key={s.title} href={s.href} style={{ background: '#fff', borderRadius: 14, padding: '32px 28px', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px #0001', textDecoration: 'none', display: 'block', transition: 'transform .2s, box-shadow .2s' }}>
                <div style={{ marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: 15, marginBottom: 16 }}>{s.desc}</p>
                <span style={{ color: '#00AEEF', fontWeight: 600, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 4 }}>Learn More <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1e3a5f, #2563eb)', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, marginBottom: 16 }}>Transform Your Business with Technology</h2>
        <p style={{ color: '#bfdbfe', fontSize: 18, marginBottom: 36 }}>Partner with Altapete Solutions for cutting-edge IT services that drive real business results.</p>
        <Link href="/contact-us" style={{ background: '#fff', color: '#2563eb', padding: '16px 40px', borderRadius: 8, fontWeight: 800, textDecoration: 'none', fontSize: 17, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          Contact Us Today <ArrowRight size={20} />
        </Link>
      </section>
    </Layout>
  );
}
