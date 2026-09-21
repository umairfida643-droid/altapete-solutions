import Layout from '@/components/Layout';
import Link from 'next/link';
import { Building2, Briefcase, ShoppingCart, FileText, Globe, Shield, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const stats = [
  { value: '100+', label: 'Enterprise Solutions' },
  { value: '50+', label: 'Other Solutions' },
  { value: '2-4 Weeks', label: 'Avg. Timeline' },
  { value: '24/7', label: 'Customer Support' },
];

const features = [
  { icon: <FileText size={28} color="#00AEEF" />, title: 'Commercial Registration (CR)', desc: 'Full CR application and issuance process managed with the Ministry of Commerce.' },
  { icon: <Globe size={28} color="#00AEEF" />, title: 'MISA Licensing', desc: 'Foreign Investment License from the Ministry of Investment of Saudi Arabia (MISA).' },
  { icon: <Shield size={28} color="#00AEEF" />, title: 'Articles of Association', desc: 'Drafting and notarization of Articles of Association per Saudi legal requirements.' },
  { icon: <CheckCircle size={28} color="#00AEEF" />, title: 'Corporate Bank Account', desc: 'Assistance opening a Saudi corporate bank account for your newly formed entity.' },
  { icon: <Clock size={28} color="#00AEEF" />, title: 'Fast-Track Formation', desc: 'Streamlined process designed to complete company formation in 2–4 weeks.' },
  { icon: <Building2 size={28} color="#00AEEF" />, title: 'Legal Address & PRO', desc: 'Registered address services and government relations (PRO) support in KSA.' },
];

const companyTypes = [
  {
    href: '/services-company',
    icon: <Briefcase size={40} color="#00AEEF" />,
    title: 'Services Company',
    desc: 'Set up a professional services, consulting, or IT company in Saudi Arabia. Ideal for knowledge-based businesses and foreign professionals entering the KSA market.',
    tags: ['Professional Services', 'IT & Consulting', 'Saudization Guidance'],
  },
  {
    href: '/trading-company',
    icon: <ShoppingCart size={40} color="#00AEEF" />,
    title: 'Trading Company',
    desc: 'Establish an import/export, wholesale, or distribution company in Saudi Arabia. Full MISA foreign investment licensing and commercial registration.',
    tags: ['Import & Export', 'Wholesale Distribution', 'MISA Foreign License'],
  },
];

export default function CompanyFormation() {
  return (
    <Layout>
      <style jsx global>{`
        body { background: #f8fafc; color: #1e293b; font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #080d1a 0%, #0a1628 60%, #00AEEF22 100%)', padding: '100px 20px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: '#00AEEF22', color: '#00AEEF', padding: '6px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>SAUDI ARABIA BUSINESS SETUP</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800, margin: '20px 0 16px' }}>Company Formation Services</h1>
          <p style={{ color: '#94a3b8', fontSize: 18, lineHeight: 1.7, marginBottom: 36 }}>Launch your business in Saudi Arabia with confidence. We handle MISA licensing, Commercial Registration, Articles of Association, and every legal step of your company formation journey.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" style={{ background: '#00AEEF', color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>Start Your Business</Link>
            <Link href="/services-company" style={{ border: '2px solid #00AEEF', color: '#00AEEF', padding: '14px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>Services Company</Link>
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

      {/* Company Types */}
      <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>Choose Your Company Type</h2>
          <p style={{ textAlign: 'center', color: '#64748b', maxWidth: 600, margin: '0 auto 50px', fontSize: 16 }}>We offer specialized formation packages for two primary business structures in Saudi Arabia.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 36 }}>
            {companyTypes.map((c) => (
              <div key={c.title} style={{ background: '#fff', borderRadius: 16, padding: '44px 36px', border: '2px solid #e2e8f0', boxShadow: '0 4px 20px #0002', textAlign: 'center' }}>
                <div style={{ marginBottom: 20 }}>{c.icon}</div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>{c.title}</h3>
                <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: 24, fontSize: 15 }}>{c.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 28 }}>
                  {c.tags.map((t) => <span key={t} style={{ background: '#e0f2fe', color: '#0369a1', padding: '4px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600 }}>{t}</span>)}
                </div>
                <Link href={c.href} style={{ background: '#00AEEF', color: '#fff', padding: '12px 28px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation Steps */}
      <section style={{ padding: '80px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: 50 }}>What We Handle For You</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {features.map((f) => (
              <div key={f.title} style={{ background: '#f8fafc', borderRadius: 14, padding: '28px 24px', border: '1px solid #e2e8f0' }}>
                <div style={{ marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: 14 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1e3a5f, #2563eb)', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, marginBottom: 16 }}>Ready to Establish Your Business in Saudi Arabia?</h2>
        <p style={{ color: '#bfdbfe', fontSize: 18, marginBottom: 36 }}>Our business setup experts are ready to guide you from idea to incorporated company.</p>
        <Link href="/contact-us" style={{ background: '#fff', color: '#2563eb', padding: '16px 40px', borderRadius: 8, fontWeight: 800, textDecoration: 'none', fontSize: 17, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          Contact Us Today <ArrowRight size={20} />
        </Link>
      </section>
    </Layout>
  );
}
