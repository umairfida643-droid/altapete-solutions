import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import {
  Settings, BarChart3, Briefcase, TrendingUp, Search,
  DollarSign, ClipboardList, Target, Scale, Eye, Crosshair,
  Handshake, Users, KeyRound, ClipboardCheck,
  MapPin, Mail, Phone, ArrowUpRight
} from 'lucide-react';

const floatingCards = [
  { icon: BarChart3, label: 'Analytics', delay: '3s', top: '10%', left: '20%' },
  { icon: Briefcase, label: 'Business', delay: '3.5s', top: '15%', right: '15%' },
  { icon: TrendingUp, label: 'Growth', delay: '4s', top: '35%', right: '10%' },
  { icon: Search, label: 'Audit', delay: '4.5s', bottom: '25%', right: '20%' },
  { icon: DollarSign, label: 'Finance', delay: '5s', bottom: '15%', left: '15%' },
  { icon: ClipboardList, label: 'Reports', delay: '5.5s', bottom: '35%', left: '10%' },
  { icon: Target, label: 'Strategy', delay: '6s', top: '40%', left: '5%' },
  { icon: Scale, label: 'Compliance', delay: '6.5s', top: '60%', right: '5%' },
];

const values = [
  { icon: Handshake, title: 'Integrity', desc: 'Building trust through honest and ethical business practices' },
  { icon: Users, title: 'Teamwork', desc: 'Collaborating effectively to achieve common goals' },
  { icon: KeyRound, title: 'Ownership', desc: 'Taking responsibility for our actions and outcomes' },
  { icon: ClipboardCheck, title: 'Accountability', desc: 'Being answerable for our commitments and results' },
];

const stats = [
  { number: '150+', label: 'Projects Delivered & Renewals' },
  { number: '100+', label: 'Satisfied Customers' },
  { number: '5+', label: 'Strategic Partners' },
  { number: '50+', label: 'Skilled Resource Pool' },
];

const teamMembers = [
  { name: 'Ahad Maaz', role: 'Head of Business Solutions', position: 'Head of Business Solutions', bio: 'Head of Business Solutions @ Altapete Solutions (Aim high business solutions Odoo Certified V-16-V17-| Devops| SaaS | Cloud | Expert. Oracle eAM certified and SCM Consultant', image: '/assets/imgs/team/ahad-maaz.jpg', linkedin: 'https://www.linkedin.com/in/ahad-maaz-a8578533/' },
  { name: 'Shahzad Qamar', role: 'Director', position: 'Director Middle East', bio: 'Associate Member of SOCPA, FCA (ICAP), FPFA (PIPFA).', image: '/assets/imgs/team/shahzad-qamar.jpg', linkedin: 'https://www.linkedin.com/in/shahzad-qamar-8a647379/' },
  { name: 'Muhammad Kamal', role: 'CTO', position: 'CTO (Chief Technology Officer)', bio: 'CTO @ Altapete Solutions | ERP, Accounting Advisory ZATCA Integration Expert | Odoo/Oracle', image: '/assets/imgs/team/muhammad-kamal.jpg', linkedin: 'https://www.linkedin.com/in/muhammad-kamal-990525190/' },
  { name: 'Hasnat Shahid Bukhari', role: 'COO', position: 'COO (Chief Operating Officer)', bio: 'Business Analyst | Odoo Functional Consultant | CA Finalist | MBA | MS | MSc Acc & Fin | Team Lead', image: '/assets/imgs/team/hasnat-shahid-bukhari.jpg', linkedin: 'https://www.linkedin.com/in/hasnat-shahid-bukhari-%F0%9F%87%B5%F0%9F%87%B0-bb9b1b251/' },
  { name: 'Waqar Afridi', role: 'DBA', position: 'Senior DBA', bio: 'IT and Security Administrator', image: '/assets/imgs/team/waqar-afridi.jpg', linkedin: 'https://www.linkedin.com/in/waqar-afridi-49409815/' },
];

const clientLogos = [
  { src: '/assets/imgs/clients-clean/ensco.png', alt: 'ENSCO' },
  { src: '/assets/imgs/clients-clean/ijarah.png', alt: 'Ijarah' },
  { src: '/assets/imgs/clients-clean/msaarabia.png', alt: 'MSA Arabia' },
  { src: '/assets/imgs/clients-clean/oca-global.png', alt: 'OCA Global' },
  { src: '/assets/imgs/clients-clean/almutlaq.png', alt: 'Al Mutlaq Group' },
  { src: '/assets/imgs/clients-clean/rubber-future.png', alt: 'Rubber Future' },
  { src: '/assets/imgs/clients-clean/shahina.png', alt: 'Shahina' },
  { src: '/assets/imgs/clients-clean/sirc.png', alt: 'SIRC' },
  { src: '/assets/imgs/clients-clean/tajmie.png', alt: 'Tajmie' },
  { src: '/assets/imgs/clients-clean/yugen.png', alt: 'Yugen' },
  { src: '/assets/imgs/clients-clean/zamil.png', alt: 'Zamil' },
];

const offices = [
  { city: 'Al Khobar', country: 'Saudi Arabia', address: '7982 King Fahd Road, Al Khobar' },
  { city: 'Riyadh', country: 'Saudi Arabia', address: 'Riyadh Office' },
  { city: 'Lahore', country: 'Pakistan', address: '28-A Sector XX, DHA Phase 3, Lahore' },
];

export default function WhatWeDoPage() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('wwd-visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.wwd-animate').forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <Layout
      title="About Us | Discover Our Trusted Business Solutions Team"
      description="Learn about Alta Pete Solutions, our expertise, mission, values, and commitment to delivering smart business solutions that help organizations grow."
    >
      <style jsx global>{`
        .wwd-animate { opacity: 0; transform: translateY(40px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .wwd-animate.wwd-visible { opacity: 1; transform: translateY(0); }
        @keyframes wwdFloat { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
        @keyframes wwdSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes wwdPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        @keyframes wwdFadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes wwdMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .wwd-team-card { opacity: 0; animation: wwdFadeInUp 0.6s ease-out forwards; }
        .wwd-team-card:nth-child(1) { animation-delay: 0.1s; }
        .wwd-team-card:nth-child(2) { animation-delay: 0.2s; }
        .wwd-team-card:nth-child(3) { animation-delay: 0.3s; }
        .wwd-team-card:nth-child(4) { animation-delay: 0.4s; }
        .wwd-team-card:nth-child(5) { animation-delay: 0.5s; }
        .wwd-stat:hover .wwd-stat-number { transform: scale(1.05); }
        @media (max-width: 768px) {
          .wwd-hero-visual { height: 400px !important; }
          .wwd-floating-card { width: 60px !important; height: 60px !important; }
          .wwd-values-grid { flex-direction: column !important; align-items: center !important; }
          .wwd-value-card { width: 100% !important; max-width: 300px !important; }
          .wwd-contact-col-border { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(255,255,255,0.08); margin-top: 26px; padding-top: 26px; }
        }
      `}</style>

      <div className="cover-home1">
        <div className="container">
          <div className="row">
            <div className="col-xl-1" />
            <div className="col-xl-10 col-lg-12">

              {/* 1. HERO */}
              <section style={{ display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 2 }} className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="head-sidebar wow animate__animated animate__fadeIn">
                        <h5 style={{ marginBottom: 0 }} className="line-bottom">Empowering Growth Through Innovation</h5>
                      </div>
                      <h1 style={{ color: '#E6F0FF', fontSize: 40, fontWeight: 700 }} className="mt-20 mb-20 wow animate__animated animate__fadeInUp">
                        Shaping the Future{' '}
                      </h1>
                      <div className="row">
                        <div className="col-lg-10">
                          <p className="text-base color-gray-600 wow animate__animated animate__fadeInUp">
                            With a 13-year legacy, <strong>Altapete</strong> embodies agility, innovation, and transformation—empowering global businesses with cutting-edge IT solutions that drive sustainability and future readiness.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 text-center">
                      <div className="wwd-hero-visual position-relative" style={{ height: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ position: 'absolute', width: 120, height: 120, background: 'linear-gradient(135deg, #00d4ff, #0066cc)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 50px rgba(0, 212, 255, 0.5)', zIndex: 10 }}>
                          <Settings size={48} color="white" />
                        </div>
                        {floatingCards.map((card, i) => { const Icon = card.icon; return (
                          <div key={i} className="wwd-floating-card" style={{ position: 'absolute', top: card.top, left: card.left, right: card.right, bottom: card.bottom, width: 80, height: 80, background: 'rgba(0, 212, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0, 212, 255, 0.3)', borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', animation: `wwdFloat ${card.delay} ease-in-out infinite`, cursor: 'pointer', transition: 'all 0.3s ease' }}>
                            <Icon size={24} color="#00d4ff" style={{ marginBottom: 4 }} />
                            <div style={{ fontSize: '0.7rem', color: '#00d4ff', fontWeight: 500 }}>{card.label}</div>
                          </div>
                        ); })}
                        <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}>
                          <defs><linearGradient id="wwdLineGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="rgba(0, 212, 255, 0)" /><stop offset="50%" stopColor="rgba(0, 212, 255, 0.6)" /><stop offset="100%" stopColor="rgba(0, 212, 255, 0)" /></linearGradient></defs>
                          {[{ x2: '70%', y2: '50%', d: 2 }, { x2: '50%', y2: '85%', d: 2.3 }, { x2: '10%', y2: '85%', d: 2.6 }, { x2: '10%', y2: '50%', d: 2.9 }, { x2: '10%', y2: '15%', d: 3.2 }, { x2: '50%', y2: '15%', d: 3.5 }].map((l, i) => (
                            <line key={i} x1="50%" y1="50%" x2={l.x2} y2={l.y2} stroke="url(#wwdLineGrad)" strokeWidth="2" style={{ animation: `wwdPulse ${l.d}s ease-in-out infinite` }} />
                          ))}
                        </svg>
                        <div style={{ position: 'absolute', width: 300, height: 300, border: '1px solid rgba(0, 212, 255, 0.2)', borderRadius: '50%', animation: 'wwdSpin 20s linear infinite' }} />
                        <div style={{ position: 'absolute', width: 400, height: 400, border: '1px solid rgba(0, 212, 255, 0.1)', borderRadius: '50%', animation: 'wwdSpin 30s linear infinite reverse' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. VISION & MISSION */}
              <section style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                  <div className="row mb-5">
                    <div className="col-12 text-center">
                      <h2 className="wwd-animate" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.3, marginBottom: '2rem' }}>
                        <span style={{ fontWeight: 600, background: 'linear-gradient(135deg, #00d4ff, #0066cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Driving Business Excellence</span>
                      </h2>
                      <p className="wwd-animate" style={{ fontSize: '1.2rem', color: '#a0a9b8', lineHeight: 1.6, maxWidth: 900, margin: '0 auto', paddingBottom: '1rem' }}>
                        We deliver smart, scalable solutions that enhance performance, improve efficiency, and support sustainable growth across diverse global industries.
                      </p>
                    </div>
                  </div>
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="wwd-animate" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0, 212, 255, 0.3)', borderRadius: 20, padding: 40, height: '100%', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, transparent 70%)', borderRadius: 20, zIndex: 1 }} />
                        <div style={{ position: 'relative', zIndex: 2 }}>
                          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
                            <div style={{ width: 60, height: 60, background: 'linear-gradient(135deg, #00d4ff, #0066cc)', borderRadius: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
                              <Eye size={30} color="white" />
                            </div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 600, color: '#ffffff', margin: 0 }}>Our Vision</h3>
                          </div>
                          <p style={{ fontSize: '1.1rem', color: '#a0a9b8', lineHeight: 1.7, margin: 0 }}>
                            We envision a future where businesses of all sizes thrive through intelligent technology, seamless integration, and innovative solutions—enabling them to lead in their industries with agility, sustainability, and a commitment to continuous improvement.
                          </p>
                        </div>
                        <div style={{ position: 'absolute', top: 20, right: 20, width: 100, height: 100, background: 'rgba(0, 212, 255, 0.1)', borderRadius: '50%', filter: 'blur(30px)', zIndex: 1 }} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="wwd-animate" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0, 212, 255, 0.3)', borderRadius: 20, padding: 40, height: '100%', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, transparent 30%, rgba(0, 102, 204, 0.1) 100%)', borderRadius: 20, zIndex: 1 }} />
                        <div style={{ position: 'relative', zIndex: 2 }}>
                          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
                            <div style={{ width: 60, height: 60, background: 'linear-gradient(135deg, #0066cc, #00d4ff)', borderRadius: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
                              <Crosshair size={30} color="white" />
                            </div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 600, color: '#ffffff', margin: 0 }}>Our Mission</h3>
                          </div>
                          <p style={{ fontSize: '1.1rem', color: '#a0a9b8', lineHeight: 1.7, margin: 0 }}>
                            Our mission is to empower organizations by delivering tailored digital solutions, expert advisory services, and transformative technologies that simplify complexity, enhance operational efficiency, and foster long-term growth through trust, collaboration, and measurable impact.
                          </p>
                        </div>
                        <div style={{ position: 'absolute', bottom: 20, left: 20, width: 80, height: 80, background: 'rgba(0, 102, 204, 0.1)', borderRadius: '50%', filter: 'blur(25px)', zIndex: 1 }} />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 80, display: 'flex', justifyContent: 'center' }}>
                    <div className="wwd-animate" style={{ width: 200, height: 2, background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }} />
                  </div>
                </div>
              </section>

              {/* 3. VALUES */}
              <section style={{ padding: '30px 0', position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                  <div className="row mb-5"><div className="col-12 text-center">
                    <h2 className="wwd-animate" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#ffffff', marginBottom: '3rem' }}>
                      Our{' '}<span style={{ fontWeight: 600, background: 'linear-gradient(135deg, #00d4ff, #0066cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Values</span>
                    </h2>
                  </div></div>
                  <div className="row justify-content-center"><div className="col-12">
                    <div className="wwd-values-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                      {values.map((val, i) => { const Icon = val.icon; return (
                        <div key={i} className="wwd-animate wwd-value-card" style={{ width: 220, minHeight: 280, background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '2px solid rgba(0, 212, 255, 0.3)', borderRadius: 20, padding: '30px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', marginBottom: 20, transitionDelay: `${i * 0.15}s` }}>
                          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, transparent 70%)', borderRadius: '20px 20px 0 0', zIndex: 1 }} />
                          <div style={{ width: 80, height: 80, background: 'linear-gradient(135deg, #00d4ff, #0066cc)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, position: 'relative', zIndex: 2, boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)' }}>
                            <Icon size={36} color="white" />
                          </div>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#ffffff', marginBottom: 15, position: 'relative', zIndex: 2 }}>{val.title}</h3>
                          <p style={{ fontSize: '0.95rem', color: '#a0a9b8', lineHeight: 1.5, margin: 0, position: 'relative', zIndex: 2 }}>{val.desc}</p>
                          <div style={{ position: 'absolute', top: 15, right: 15, width: 30, height: 30, background: 'rgba(0, 212, 255, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#00d4ff', fontWeight: 600, zIndex: 2 }}>{i + 1}</div>
                          <div style={{ position: 'absolute', bottom: -20, right: -20, width: 60, height: 60, background: 'rgba(0, 212, 255, 0.1)', borderRadius: '50%', filter: 'blur(20px)', zIndex: 1 }} />
                        </div>
                      ); })}
                    </div>
                  </div></div>
                  <div style={{ marginTop: 60, display: 'flex', justifyContent: 'center' }}>
                    <div className="wwd-animate" style={{ width: 300, height: 2, background: 'linear-gradient(90deg, transparent, #00d4ff, #0066cc, transparent)' }} />
                  </div>
                </div>
              </section>

              {/* 4. LEGACY STATS */}
              <section style={{ background: 'linear-gradient(135deg, #1a1b3a 0%, #2d1b69 50%, #1a1b3a 100%)', position: 'relative', overflow: 'hidden', padding: '80px 0', color: 'white', borderRadius: 20 }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(45deg, rgba(0,255,128,.1) 1px, transparent 1px), linear-gradient(-45deg, rgba(0,255,128,.1) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.3 }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 20% 80%, rgba(0,255,128,.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,191,255,.1) 0%, transparent 50%)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                  <h2 className="wwd-animate" style={{ fontSize: '3.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem', background: 'linear-gradient(45deg, #00ff80, #00bfff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>20+ Years of Legacy</h2>
                  <p className="wwd-animate" style={{ fontSize: '1.2rem', lineHeight: 1.6, textAlign: 'center', marginBottom: '4rem', color: 'rgba(255,255,255,0.9)', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
                    Year after year, we&apos;ve pushed the boundaries of convention, going beyond the ordinary to set new benchmarks in the IT industry, driven by our relentless pursuit of excellence, innovation, and agile resilience.
                  </p>
                  <div className="row g-4">
                    {stats.map((stat, i) => (
                      <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                        <div className="wwd-stat" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                          <div className="wwd-stat-number" style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '0.5rem', background: 'linear-gradient(45deg, #00ff80, #00bfff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, transition: 'transform 0.3s ease' }}>{stat.number}</div>
                          <div style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 5. TEAM */}
              <section className="py-4">
                <div className="container position-relative" style={{ zIndex: 10 }}>
                  <div className="wwd-animate" style={{ textAlign: 'center', marginBottom: 30 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 20px', borderRadius: 50, backgroundColor: 'rgba(0, 184, 212, 0.1)', border: '1px solid rgba(0, 184, 212, 0.3)', fontSize: 14, fontWeight: 600, color: '#00b8d4', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 24 }}>
                      <div style={{ width: 8, height: 8, backgroundColor: '#00b8d4', borderRadius: '50%', animation: 'wwdPulse 2s infinite' }} />
                      Our Team
                    </div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>
                      Meet the <span style={{ color: '#00b8d4' }}>brilliant minds</span><br />behind Altapete Solutions
                    </h2>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: '#94a3b8', maxWidth: 700, margin: '0 auto', lineHeight: 1.6 }}>
                      Our diverse team of experts brings together decades of experience in technology, design, and innovation to deliver exceptional solutions for our clients.
                    </p>
                  </div>
                  <div className="row g-4">
                    {teamMembers.map((member, i) => (
                      <div key={i} className="col-lg-3 col-md-6 wwd-team-card">
                        <div style={{ backgroundColor: 'rgba(15, 15, 15, 0.8)', borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(0, 184, 212, 0.2)', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', height: '100%', position: 'relative', backdropFilter: 'blur(10px)' }}
                          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-12px)'; e.currentTarget.style.border = '1px solid rgba(0, 184, 212, 0.6)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 184, 212, 0.2)'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.border = '1px solid rgba(0, 184, 212, 0.2)'; e.currentTarget.style.boxShadow = ''; }}>
                          <div style={{ position: 'relative', width: '100%', height: 320, overflow: 'hidden', backgroundColor: 'rgba(0, 184, 212, 0.1)' }}>
                            <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                          </div>
                          <div style={{ padding: 20 }}>
                            <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: 20, backgroundColor: 'rgba(0, 184, 212, 0.15)', border: '1px solid rgba(0, 184, 212, 0.3)', fontSize: 12, fontWeight: 600, color: '#00b8d4', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{member.role}</div>
                            <h3 style={{ marginTop: 8, marginBottom: 4 }}><a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease' }}>{member.name}</a></h3>
                            <p style={{ fontSize: '0.9rem', color: '#00b8d4', marginBottom: 5, fontWeight: 'bold' }}>{member.position}</p>
                            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: 0, minHeight: 60 }}>{member.bio}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 6. CLIENTS MARQUEE */}
              <section style={{ padding: '30px 0', overflow: 'hidden' }}>
                <div style={{ textAlign: 'center', padding: '0 20px', marginBottom: 60 }}>
                  <h2 className="wwd-animate" style={{ color: '#fff', fontSize: 42, fontWeight: 700, marginBottom: 16 }}>Trusted by Businesses Across Industries</h2>
                  <p className="wwd-animate" style={{ color: '#8b9db5', fontSize: 18, maxWidth: 600, margin: '0 auto' }}>We&apos;re proud to partner with leading organizations across various industries</p>
                </div>
                <div style={{ position: 'relative', width: '100%', marginBottom: 24, maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
                  <div style={{ display: 'flex', gap: 24, width: 'max-content', animation: 'wwdMarquee 30s linear infinite' }}>
                    {[...clientLogos, ...clientLogos].map((logo, i) => (
                      <div key={i} className="client-card-wrapper" style={{ flexShrink: 0, width: 200, height: 90, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px 22px' }}>
                        <img src={logo.src} alt={logo.alt} className="client-logo-img" draggable={false} style={{ maxHeight: 52, maxWidth: 140, width: 'auto', height: 'auto', objectFit: 'contain', pointerEvents: 'none' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 7. CONTACT CTA */}
              <section style={{ position: 'relative', padding: '60px 0' }}>
                <div style={{ position: 'absolute', top: '10%', right: '5%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)', animation: 'wwdFloat 6s ease-in-out infinite' }} />
                <div style={{ position: 'absolute', bottom: '15%', left: '10%', width: 250, height: 250, background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)', animation: 'wwdFloat 8s ease-in-out infinite reverse' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                  <div className="wwd-animate" style={{ textAlign: 'center', marginBottom: 30 }}>
                    <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: 50, marginBottom: 20 }}>
                      <span style={{ color: '#60a5fa', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Get in Touch</span>
                    </div>
                    <h2 style={{ color: '#ffffff', fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>Let&apos;s Build the Right Solution for Your Business</h2>
                    <p style={{ color: '#94a3b8', fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', maxWidth: 650, margin: '0 auto', lineHeight: 1.7 }}>We&apos;d love to hear from you. Whether you have a question about our services, need assistance, or just want to say hello.</p>
                  </div>
                  <div className="wwd-animate" style={{ background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 40, marginBottom: 30 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                          <div style={{ width: 40, height: 40, flexShrink: 0, background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.18)', borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}><Phone size={20} /></div>
                          <h3 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 600, margin: 0 }}>Call Us</h3>
                        </div>
                        {[{ num: '+966 55 101 3823', sub: 'Saudi Arabia', href: 'tel:+966551013823' }, { num: '+966 53 382 0454', sub: 'Saudi Arabia', href: 'tel:+966533820454' }, { num: '+92 370 3536327', sub: 'Pakistan', href: 'tel:+923703536327' }].map((ph, i) => (
                          <a key={i} href={ph.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '13px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none', textDecoration: 'none', color: '#cbd5e1', transition: 'color 0.25s ease' }}>
                            <span style={{ fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.4 }}>{ph.num}<span style={{ display: 'block', color: '#64748b', fontSize: '0.8rem', fontWeight: 400, marginTop: 3 }}>{ph.sub}</span></span>
                            <ArrowUpRight size={16} style={{ opacity: 0.45 }} />
                          </a>
                        ))}
                      </div>
                      <div className="wwd-contact-col-border" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: 40 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                          <div style={{ width: 40, height: 40, flexShrink: 0, background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.18)', borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}><Mail size={20} /></div>
                          <h3 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 600, margin: 0 }}>Message Us</h3>
                        </div>
                        <a href="mailto:info@altapetesolutions.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', color: '#cbd5e1' }}>
                          <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>info@altapetesolutions.com<span style={{ display: 'block', color: '#64748b', fontSize: '0.8rem', marginTop: 3 }}>Email</span></span>
                          <ArrowUpRight size={16} style={{ opacity: 0.45 }} />
                        </a>
                        <a href="https://wa.me/966568029153" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '13px 0', textDecoration: 'none', color: '#cbd5e1' }}>
                          <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>+966 56 802 9153<span style={{ display: 'block', color: '#64748b', fontSize: '0.8rem', marginTop: 3 }}>WhatsApp</span></span>
                          <ArrowUpRight size={16} style={{ opacity: 0.45 }} />
                        </a>
                      </div>
                      <div className="wwd-contact-col-border" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: 40 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                          <div style={{ width: 40, height: 40, flexShrink: 0, background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.18)', borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}><MapPin size={20} /></div>
                          <h3 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 600, margin: 0 }}>Visit Us</h3>
                        </div>
                        {[{ country: 'Saudi Arabia', sub: 'Riyadh, Jeddah' }, { country: 'UAE', sub: 'Dubai, Abu Dhabi' }, { country: 'Bahrain', sub: 'Manama' }, { country: 'Pakistan', sub: 'Karachi, Lahore' }].map((loc, i) => (
                          <div key={i} style={{ padding: '13px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none', color: '#cbd5e1' }}>
                            <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{loc.country}<span style={{ display: 'block', color: '#64748b', fontSize: '0.8rem', marginTop: 3 }}>{loc.sub}</span></span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="wwd-animate" style={{ background: 'rgba(30, 41, 59, 0.6)', backdropFilter: 'blur(30px)', border: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: 24, padding: 30, boxShadow: '0 25px 50px rgba(0,0,0,0.25)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
                      <div>
                        <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.75rem, 4vw, 2rem)', fontWeight: 700, marginBottom: 30 }}>Our Offices</h2>
                        {offices.map((office, i) => (
                          <div key={i} style={{ marginBottom: i < offices.length - 1 ? 25 : 0, paddingBottom: i < offices.length - 1 ? 25 : 0, borderBottom: i < offices.length - 1 ? '1px solid rgba(148,163,184,0.1)' : 'none' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                              <div style={{ width: 8, height: 8, background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', borderRadius: '50%' }} />
                              <h3 style={{ color: '#ffffff', fontSize: '1.125rem', fontWeight: 600, margin: 0 }}>{office.city}</h3>
                              <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>• {office.country}</span>
                            </div>
                            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', margin: 0, paddingLeft: 18 }}>{office.address}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
