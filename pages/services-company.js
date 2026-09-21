import Layout from '@/components/Layout';
import Link from 'next/link';
import { Briefcase, FileText, Globe, Users, Shield, CheckCircle, Clock, Building2, ArrowRight } from 'lucide-react';

const stats = [
  { value: '100+', label: 'Enterprise Solutions' },
  { value: '50+', label: 'Other Solutions' },
  { value: '2-4 Weeks', label: 'Avg. Timeline' },
  { value: '24/7', label: 'Customer Support' },
];

const features = [
  { icon: <Globe size={28} color="#00AEEF" />, title: 'MISA Foreign License', desc: 'Obtain the MISA foreign investment license required for non-Saudi owned services companies.' },
  { icon: <FileText size={28} color="#00AEEF" />, title: 'Commercial Registration', desc: 'Full CR application and issuance through the Ministry of Commerce, Saudi Arabia.' },
  { icon: <Shield size={28} color="#00AEEF" />, title: 'Articles of Association', desc: 'Legally compliant drafting and notarization of your company\'s Articles of Association.' },
  { icon: <Users size={28} color="#00AEEF" />, title: 'Saudization (Nitaqat)', desc: 'Expert guidance on Saudization (Nitaqat) quotas and compliant workforce planning.' },
  { icon: <Building2 size={28} color="#00AEEF" />, title: 'IT Company Setup', desc: 'Specialized formation packages for IT services, software, and tech consulting companies.' },
  { icon: <Briefcase size={28} color="#00AEEF" />, title: 'Consulting Firm Setup', desc: 'Professional services and consulting firm formation with appropriate activity codes.' },
  { icon: <CheckCircle size={28} color="#00AEEF" />, title: 'Bank Account Opening', desc: 'Assistance with corporate bank account opening at leading Saudi financial institutions.' },
  { icon: <Clock size={28} color="#00AEEF" />, title: 'PRO & Government Liaison', desc: 'Dedicated PRO services to manage government correspondences and document processing.' },
  { icon: <FileText size={28} color="#00AEEF" />, title: 'Visa & Work Permits', desc: 'Support for employee visas, Iqama, and work permit processes post-incorporation.' },
];

export default function ServicesCompany() {
  return (
    <Layout>
      <style jsx global>{`
        body { background: #f8fafc; color: #1e293b; font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #080d1a 0%, #0a1628 60%, #00AEEF22 100%)', padding: '100px 20px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: '#00AEEF22', color: '#00AEEF', padding: '6px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>KSA COMPANY FORMATION</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800, margin: '20px 0 16px' }}>Services Company Formation</h1>
          <p style={{ color: '#94a3b8', fontSize: 18, lineHeight: 1.7, marginBottom: 36 }}>Set up your professional services, IT, or consulting company in Saudi Arabia. We manage MISA licensing, Commercial Registration, Saudization compliance, and every legal requirement from start to finish.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" style={{ background: '#00AEEF', color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>Get Started</Link>
            <Link href="/company-formation" style={{ border: '2px solid #00AEEF', color: '#00AEEF', padding: '14px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>All Formation Options</Link>
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
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>Services Company Formation Package</h2>
          <p style={{ textAlign: 'center', color: '#64748b', maxWidth: 600, margin: '0 auto 50px', fontSize: 16 }}>Everything you need to legally establish a services company in the Kingdom of Saudi Arabia.</p>
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
        <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, marginBottom: 16 }}>Launch Your Services Company in Saudi Arabia</h2>
        <p style={{ color: '#bfdbfe', fontSize: 18, marginBottom: 36 }}>Our formation specialists will have your services company registered and operational in 2–4 weeks.</p>
        <Link href="/contact-us" style={{ background: '#fff', color: '#2563eb', padding: '16px 40px', borderRadius: 8, fontWeight: 800, textDecoration: 'none', fontSize: 17, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          Contact Us Today <ArrowRight size={20} />
        </Link>
      </section>
    </Layout>
  );
}
