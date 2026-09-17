import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import {
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  Briefcase,
  BarChart3,
  TrendingUp,
  Users,
  Globe,
  Megaphone,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Star,
  Building2
} from 'lucide-react';

const CLIENT_LOGOS = [
  { src: '/assets/imgs/clients-clean/ensco.png', alt: 'Ensco' },
  { src: '/assets/imgs/clients-clean/ijarah.png', alt: 'Ijarah' },
  { src: '/assets/imgs/clients-clean/msaarabia.png', alt: 'MSA Arabia' },
  { src: '/assets/imgs/clients-clean/oca-global.png', alt: 'OCA Global' },
  { src: '/assets/imgs/clients-clean/almutlaq.png', alt: 'Al Mutlaq' },
  { src: '/assets/imgs/clients-clean/rubber-future.png', alt: 'Rubber Future' },
  { src: '/assets/imgs/clients-clean/shahina.png', alt: 'Shahina' },
  { src: '/assets/imgs/clients-clean/sirc.png', alt: 'SIRC' },
  { src: '/assets/imgs/clients-clean/tajmie.png', alt: 'Tajmie' },
  { src: '/assets/imgs/clients-clean/yugen.png', alt: 'Yugen' },
  { src: '/assets/imgs/clients-clean/zamil.png', alt: 'Zamil' },
];

const PROFILES = [
  {
    id: 1,
    name: 'Altapete Comprehensive Business & Accounting Services Profile',
    shortDesc: 'A full-spectrum overview of Altapete\'s integrated business, accounting, and advisory solutions for enterprises across Saudi Arabia.',
    icon: BookOpen,
    accent: '#00AEEF',
    tags: ['Accounting', 'Advisory', 'VAT', 'Zakat'],
    file: '/assets/profiles/comprehensive-profile.pdf',
  },
  {
    id: 2,
    name: 'Altapete Custom Business Solutions Profile',
    shortDesc: 'Tailored business process design and customisation services built to match your organisation\'s unique operational landscape.',
    icon: Briefcase,
    accent: '#7C3AED',
    tags: ['Custom Solutions', 'BPO', 'Process Design'],
    file: '/assets/profiles/custom-profile.pdf',
  },
  {
    id: 3,
    name: 'Altapete ERP Implementation & Consulting Profile',
    shortDesc: 'End-to-end ERP deployment and consulting for Oracle, Odoo, and SAP ecosystems — from requirements to go-live.',
    icon: BarChart3,
    accent: '#059669',
    tags: ['ERP', 'Oracle', 'Odoo', 'SAP'],
    file: '/assets/profiles/erp-profile.pdf',
  },
  {
    id: 4,
    name: 'Altapete IFRS & Financial Reporting Advisory Profile',
    shortDesc: 'Specialised advisory for IFRS adoption, transition, and ongoing financial reporting compliance in line with global standards.',
    icon: TrendingUp,
    accent: '#DC2626',
    tags: ['IFRS', 'Financial Reporting', 'Compliance'],
    file: '/assets/profiles/ifrs-profile.pdf',
  },
  {
    id: 5,
    name: 'Altapete Accounting, Tax & Business Consulting Profile',
    shortDesc: 'Core accounting, VAT/Zakat management, and business consulting services for SMEs and corporates operating in the Kingdom.',
    icon: ShieldCheck,
    accent: '#D97706',
    tags: ['Accounting', 'Tax', 'Consulting'],
    file: '/assets/profiles/main-profile.pdf',
  },
  {
    id: 6,
    name: 'Altapete Oracle & Odoo ERP Solutions Profile',
    shortDesc: 'Deep-dive profile on our Oracle Fusion and Odoo implementation capabilities — modules, migration paths, and support models.',
    icon: Globe,
    accent: '#EA580C',
    tags: ['Oracle', 'Odoo', 'ERP Solutions'],
    file: '/assets/profiles/oracle-odoo-profile.pdf',
  },
  {
    id: 7,
    name: 'Altapete Social Media & Digital Marketing Profile',
    shortDesc: 'Data-driven social media strategy, content creation, and digital marketing services to amplify your brand\'s presence.',
    icon: Megaphone,
    accent: '#0EA5E9',
    tags: ['Social Media', 'Digital Marketing', 'SEO'],
    file: '/assets/profiles/social-media-profile.pdf',
  },
  {
    id: 8,
    name: 'Altapete Tax Advisory & Compliance Services Profile',
    shortDesc: 'Expert tax advisory covering corporate income tax, withholding tax, transfer pricing, and ZATCA/FATOORA compliance.',
    icon: Users,
    accent: '#6366F1',
    tags: ['Tax Advisory', 'CIT', 'ZATCA', 'VAT'],
    file: '/assets/profiles/tax-advisory-profile.pdf',
  },
];

const STATS = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '200+', label: 'Clients Served' },
  { value: '8', label: 'Specialised Profiles' },
  { value: '100%', label: 'KSA Compliant' },
];

const WHY_ITEMS = [
  { title: 'Regulatory Expertise', desc: 'Deep understanding of ZATCA, SAMA, MISA, CMA, and other Saudi regulatory bodies.' },
  { title: 'Cross-Industry Track Record', desc: 'Serving manufacturing, real estate, retail, hospitality, and professional services sectors.' },
  { title: 'Technology-Driven Delivery', desc: 'ERP-backed processes, FATOORA e-invoicing, and cloud-first reporting solutions.' },
  { title: 'Certified Professionals', desc: 'CPA, CFA, SOCPA, and ACCA qualified professionals delivering every engagement.' },
];

export default function CompanyProfileView() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [hoveredCard, setHoveredCard] = useState(null);

  const bg = isDark ? '#0a0f1e' : '#f0f4f8';
  const cardBg = isDark ? '#111827' : '#ffffff';
  const cardBorder = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const headingColor = isDark ? '#ffffff' : '#0f172a';
  const subColor = isDark ? '#94a3b8' : '#64748b';
  const tagBg = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
  const tagColor = isDark ? '#94a3b8' : '#475569';
  const dividerColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
  const statBg = isDark ? 'rgba(0,174,239,0.08)' : 'rgba(44,115,217,0.06)';

  const sectionBase = {
    padding: '70px 0 60px',
  };

  return (
    <div
      className="cp-view-wrapper"
      style={{ background: bg }}
    >
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section
        className="cp-hero"
        style={{
          background: 'linear-gradient(135deg, #0a1628 0%, #0d2248 40%, #1a3a6e 100%)',
          padding: '90px 0 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* BG decoration circles */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '420px', height: '420px', borderRadius: '50%',
          background: 'rgba(0,174,239,0.07)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '320px', height: '320px', borderRadius: '50%',
          background: 'rgba(124,58,237,0.06)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}>
              Home
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 13, fontWeight: 600 }}>Company Profiles</span>
          </div>

          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(0,174,239,0.18)', border: '1px solid rgba(0,174,239,0.35)',
            borderRadius: 50, padding: '6px 18px', marginBottom: 28,
          }}>
            <FileText size={14} color="#00AEEF" />
            <span style={{ color: '#00AEEF', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em' }}>
              OFFICIAL COMPANY DOCUMENTS
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 58px)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: 20,
            maxWidth: 720,
          }}>
            Company<br />
            <span style={{ color: '#00AEEF' }}>Profile Library</span>
          </h1>

          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.72)',
            maxWidth: 580,
            lineHeight: 1.7,
            marginBottom: 48,
          }}>
            Download Altapete&apos;s official service profiles — each document provides a detailed overview of our capabilities, methodologies, and client success stories.
          </p>

          {/* Stats row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  background: statBg,
                  border: '1px solid rgba(0,174,239,0.2)',
                  borderRadius: 12,
                  padding: '14px 24px',
                  minWidth: 130,
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 800, color: '#00AEEF', lineHeight: 1 }}>{s.value}</div>
                <div className="cp-stat-label" style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── PROFILE CARDS ─────────────────────── */}
      <section style={{ ...sectionBase, padding: '70px 0 60px' }}>
        <div className="container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: isDark ? 'rgba(0,174,239,0.1)' : 'rgba(44,115,217,0.08)',
              border: `1px solid ${isDark ? 'rgba(0,174,239,0.25)' : 'rgba(44,115,217,0.2)'}`,
              borderRadius: 50, padding: '6px 18px', marginBottom: 20,
            }}>
              <Star size={13} color={isDark ? '#00AEEF' : '#2c73d9'} />
              <span style={{ color: isDark ? '#00AEEF' : '#2c73d9', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em' }}>
                DOWNLOAD OUR PROFILES
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: headingColor, marginBottom: 14 }}>
              Explore Our Service Portfolios
            </h2>
            <p style={{ fontSize: 16, color: subColor, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Each profile document is a comprehensive showcase of the services, qualifications, and outcomes Altapete delivers.
            </p>
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 28,
          }}>
            {PROFILES.map((profile) => {
              const Icon = profile.icon;
              const isHovered = hoveredCard === profile.id;
              return (
                <div
                  key={profile.id}
                  onMouseEnter={() => setHoveredCard(profile.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: cardBg,
                    border: `1px solid ${isHovered ? profile.accent + '55' : cardBorder}`,
                    borderRadius: 16,
                    padding: '28px 28px 24px',
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    transform: isHovered ? 'translateY(-4px)' : 'none',
                    boxShadow: isHovered
                      ? `0 20px 50px ${profile.accent}22`
                      : isDark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0,
                  }}
                >
                  {/* Card top */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 18 }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                      background: profile.accent + '18',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={24} color={profile.accent} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: 11, fontWeight: 700, color: profile.accent,
                        letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4,
                      }}>
                        Profile {String(profile.id).padStart(2, '0')}
                      </div>
                      <h3 style={{
                        fontSize: 15, fontWeight: 700, color: headingColor,
                        lineHeight: 1.4, margin: 0,
                      }}>
                        {profile.name}
                      </h3>
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: dividerColor, marginBottom: 16 }} />

                  {/* Description */}
                  <p style={{ fontSize: 14, color: subColor, lineHeight: 1.65, margin: '0 0 18px', flex: 1 }}>
                    {profile.shortDesc}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 22 }}>
                    {profile.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 11, fontWeight: 600, color: tagColor,
                          background: tagBg, borderRadius: 50,
                          padding: '4px 12px', letterSpacing: '0.04em',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div style={{ display: 'flex', gap: 10 }}>
                    <a
                      href={profile.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                        padding: '11px 16px',
                        borderRadius: 10,
                        background: profile.accent,
                        color: '#ffffff',
                        fontSize: 13, fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                        border: 'none',
                      }}
                    >
                      <ExternalLink size={14} />
                      View
                    </a>
                    <a
                      href={profile.file}
                      download
                      style={{
                        flex: 1,
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                        padding: '11px 16px',
                        borderRadius: 10,
                        background: 'transparent',
                        color: profile.accent,
                        border: `1.5px solid ${profile.accent}55`,
                        fontSize: 13, fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                    >
                      <Download size={14} />
                      Download
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────── WHY ALTAPETE ─────────────────────── */}
      <section style={{ padding: '60px 0', background: isDark ? '#0d1625' : '#e8f0fb' }}>
        <div className="container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
            {/* Left */}
            <div style={{ flex: '1 1 320px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: isDark ? 'rgba(0,174,239,0.1)' : 'rgba(44,115,217,0.08)',
                border: `1px solid ${isDark ? 'rgba(0,174,239,0.25)' : 'rgba(44,115,217,0.2)'}`,
                borderRadius: 50, padding: '6px 18px', marginBottom: 20,
              }}>
                <Building2 size={13} color={isDark ? '#00AEEF' : '#2c73d9'} />
                <span style={{ color: isDark ? '#00AEEF' : '#2c73d9', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em' }}>
                  WHY ALTAPETE
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, color: headingColor, lineHeight: 1.25, marginBottom: 16 }}>
                Trusted by Industry<br />Leaders Across KSA
              </h2>
              <p style={{ fontSize: 15, color: subColor, lineHeight: 1.7, maxWidth: 400 }}>
                Altapete combines local regulatory expertise with global consulting best practices to deliver measurable outcomes for every client.
              </p>
            </div>
            {/* Right */}
            <div style={{ flex: '1 1 360px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              {WHY_ITEMS.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: cardBg,
                    border: `1px solid ${cardBorder}`,
                    borderRadius: 14,
                    padding: '20px 20px 18px',
                    boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.25)' : '0 4px 16px rgba(0,0,0,0.05)',
                  }}
                >
                  <CheckCircle2 size={20} color={isDark ? '#00AEEF' : '#2c73d9'} style={{ marginBottom: 10 }} />
                  <div style={{ fontSize: 14, fontWeight: 700, color: headingColor, marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: subColor, lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── CLIENT LOGOS ─────────────────────── */}
      <section style={{ padding: '48px 0 56px', background: isDark ? '#0a0f1e' : '#f8fafc', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: subColor, textTransform: 'uppercase', marginBottom: 32 }}>
            Trusted by Leading Organisations Across Saudi Arabia
          </p>
        </div>
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div className="marquee-track">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <div key={i} className="client-card-wrapper">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="client-logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── CTA ──────────────────────────── */}
      <section style={{ padding: '60px 0 80px' }}>
        <div className="container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            background: isDark
              ? 'linear-gradient(135deg, #0d1b35 0%, #0a1628 100%)'
              : 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
            borderRadius: 24,
            padding: 'clamp(40px, 6vw, 72px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: isDark ? '1px solid rgba(0,174,239,0.15)' : 'none',
          }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 600, height: 600, borderRadius: '50%',
              background: 'rgba(0,174,239,0.05)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', marginBottom: 16 }}>
                Ready to Partner with Altapete?
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.7 }}>
                Reach out to our team for a tailored consultation or to discuss how our services align with your business goals.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#00AEEF',
                    color: '#ffffff',
                    padding: '14px 36px',
                    borderRadius: 50,
                    fontSize: 15, fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  Get in Touch
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/what-we-do"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'rgba(255,255,255,0.12)',
                    color: '#ffffff',
                    padding: '14px 36px',
                    borderRadius: 50,
                    fontSize: 15, fontWeight: 700,
                    textDecoration: 'none',
                    border: '1.5px solid rgba(255,255,255,0.25)',
                    transition: 'all 0.3s',
                  }}
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── MARQUEE ANIMATION ──────────────────── */}
      <style jsx>{`
        .marquee-track {
          display: flex;
          gap: 32px;
          width: max-content;
          animation: marquee-scroll 30s linear infinite;
          align-items: center;
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .cp-view-wrapper {
          font-family: inherit;
        }
        .cp-hero {
          background: linear-gradient(135deg, #0a1628 0%, #0d2248 40%, #1a3a6e 100%) !important;
        }
        .cp-stat-label {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        @media (max-width: 768px) {
          .cp-hero-stats {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
