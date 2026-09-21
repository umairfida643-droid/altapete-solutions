import Layout from '@/components/Layout';
import Link from 'next/link';
import { HeadphonesIcon, Monitor, Clock, FileText, RefreshCw, Shield, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const stats = [
  { value: '100+', label: 'Enterprise Solutions' },
  { value: '50+', label: 'Other Solutions' },
  { value: '2-4 Weeks', label: 'Avg. Timeline' },
  { value: '24/7', label: 'Customer Support' },
];

const features = [
  { icon: <Clock size={28} color="#00AEEF" />, title: '24/7 Helpdesk', desc: 'Round-the-clock helpdesk support via phone, email, and chat for immediate issue resolution.' },
  { icon: <Monitor size={28} color="#00AEEF" />, title: 'Remote Support', desc: 'Secure remote desktop assistance for fast troubleshooting without on-site visits.' },
  { icon: <FileText size={28} color="#00AEEF" />, title: 'SLA-Based Contracts', desc: 'Flexible SLA-based maintenance contracts with defined response and resolution times.' },
  { icon: <RefreshCw size={28} color="#00AEEF" />, title: 'Preventive Maintenance', desc: 'Scheduled preventive maintenance to minimize downtime and extend hardware lifecycle.' },
  { icon: <HeadphonesIcon size={28} color="#00AEEF" />, title: 'On-Site Support', desc: 'Dedicated on-site IT engineers available for in-person technical assistance when needed.' },
  { icon: <Shield size={28} color="#00AEEF" />, title: 'Patch Management', desc: 'OS and application patch management to keep systems secure and up-to-date.' },
  { icon: <Users size={28} color="#00AEEF" />, title: 'End-User Support', desc: 'Comprehensive end-user support for hardware, software, email, and productivity tools.' },
  { icon: <Zap size={28} color="#00AEEF" />, title: 'Incident Management', desc: 'ITIL-aligned incident management with ticketing, escalation, and root-cause analysis.' },
  { icon: <CheckCircle size={28} color="#00AEEF" />, title: 'Asset Management', desc: 'IT asset inventory, lifecycle tracking, and procurement advisory services.' },
];

export default function TechnicalSupport() {
  return (
    <Layout>
      <style jsx global>{`
        body { background: #f8fafc; color: #1e293b; font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #080d1a 0%, #0a1628 60%, #00AEEF22 100%)', padding: '100px 20px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: '#00AEEF22', color: '#00AEEF', padding: '6px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>MANAGED SUPPORT</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800, margin: '20px 0 16px' }}>Technical Support & Maintenance</h1>
          <p style={{ color: '#94a3b8', fontSize: 18, lineHeight: 1.7, marginBottom: 36 }}>24/7 helpdesk, remote and on-site support, and SLA-based maintenance contracts — ensuring your IT systems stay operational, secure, and performing at their best.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" style={{ background: '#00AEEF', color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>Get Support Now</Link>
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
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>Technical Support Services</h2>
          <p style={{ textAlign: 'center', color: '#64748b', maxWidth: 600, margin: '0 auto 50px', fontSize: 16 }}>Reliable, responsive IT support that keeps your business running — 24 hours a day, 7 days a week.</p>
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
        <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, marginBottom: 16 }}>Never Face IT Downtime Alone</h2>
        <p style={{ color: '#bfdbfe', fontSize: 18, marginBottom: 36 }}>Our support engineers are available 24/7 to resolve your IT issues fast and keep your business moving.</p>
        <Link href="/contact-us" style={{ background: '#fff', color: '#2563eb', padding: '16px 40px', borderRadius: 8, fontWeight: 800, textDecoration: 'none', fontSize: 17, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          Contact Us Today <ArrowRight size={20} />
        </Link>
      </section>
    </Layout>
  );
}
