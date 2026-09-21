import Layout from '@/components/Layout';
import Link from 'next/link';
import { FileCheck, Shield, QrCode, FileText, Clock, CheckCircle, ArrowRight, Star, Zap, Globe, Lock, BarChart2, AlertCircle } from 'lucide-react';

const stats = [
  { value: '100+', label: 'Enterprise Solutions' },
  { value: '50+', label: 'Other Solutions' },
  { value: '2-4 Weeks', label: 'Avg. Timeline' },
  { value: '24/7', label: 'Customer Support' },
];

const features = [
  { icon: <FileCheck size={28} color="#00AEEF" />, title: 'Phase 1 Compliance', desc: 'Full e-invoicing Phase 1 generation and archival compliant with ZATCA standards.' },
  { icon: <Shield size={28} color="#00AEEF" />, title: 'Phase 2 Clearance', desc: 'Real-time clearance and reporting integration with ZATCA portal for Phase 2.' },
  { icon: <QrCode size={28} color="#00AEEF" />, title: 'QR Code Generation', desc: 'Automated QR code embedding in invoices per ZATCA cryptographic stamp requirements.' },
  { icon: <FileText size={28} color="#00AEEF" />, title: 'UBL XML Invoicing', desc: 'Structured UBL 2.1 XML invoice generation meeting KSA e-invoicing specifications.' },
  { icon: <Lock size={28} color="#00AEEF" />, title: 'CSID Integration', desc: 'Cryptographic Stamp Identifier (CSID) provisioning and onboarding with ZATCA.' },
  { icon: <BarChart2 size={28} color="#00AEEF" />, title: 'VAT Filing Support', desc: 'End-to-end VAT return filing and reconciliation support through ZATCA portal.' },
  { icon: <Globe size={28} color="#00AEEF" />, title: 'ERP Integration', desc: 'Seamless integration with SAP, Oracle, Microsoft Dynamics and custom ERP systems.' },
  { icon: <AlertCircle size={28} color="#00AEEF" />, title: 'Compliance Auditing', desc: 'Regular audits to ensure continued compliance as ZATCA regulations evolve.' },
  { icon: <Zap size={28} color="#00AEEF" />, title: 'Rapid Deployment', desc: 'Fast-track implementation in 2–4 weeks to meet ZATCA wave deadlines.' },
];

export default function ZATCAServices() {
  return (
    <Layout>
      <style jsx global>{`
        body { background: #f8fafc; color: #1e293b; font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #080d1a 0%, #0a1628 60%, #00AEEF22 100%)', padding: '100px 20px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: '#00AEEF22', color: '#00AEEF', padding: '6px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>KSA COMPLIANCE</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800, margin: '20px 0 16px' }}>ZATCA E-Invoicing Services</h1>
          <p style={{ color: '#94a3b8', fontSize: 18, lineHeight: 1.7, marginBottom: 36 }}>Full-spectrum ZATCA compliance solutions — Phase 1 & 2 e-invoicing, CSID provisioning, UBL XML, QR codes, and VAT filing support for businesses operating in Saudi Arabia.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" style={{ background: '#00AEEF', color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>Get Compliant Now</Link>
            <Link href="/vat-filing-support" style={{ border: '2px solid #00AEEF', color: '#00AEEF', padding: '14px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>VAT Filing Support</Link>
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
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>Our ZATCA Service Suite</h2>
          <p style={{ textAlign: 'center', color: '#64748b', maxWidth: 600, margin: '0 auto 50px', fontSize: 16 }}>Comprehensive e-invoicing and VAT compliance services tailored for Saudi Arabia.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 28 }}>
            {features.map((f) => (
              <div key={f.title} style={{ background: '#fff', borderRadius: 14, padding: '32px 28px', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px #0001', transition: 'box-shadow .2s' }}>
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
        <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 800, marginBottom: 16 }}>Ready to Achieve ZATCA Compliance?</h2>
        <p style={{ color: '#bfdbfe', fontSize: 18, marginBottom: 36 }}>Our experts will guide you through every step of e-invoicing compliance in Saudi Arabia.</p>
        <Link href="/contact-us" style={{ background: '#fff', color: '#2563eb', padding: '16px 40px', borderRadius: 8, fontWeight: 800, textDecoration: 'none', fontSize: 17, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          Contact Us Today <ArrowRight size={20} />
        </Link>
      </section>
    </Layout>
  );
}
