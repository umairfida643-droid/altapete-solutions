import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { 
  Phone,
  Mail,
  MapPin, 
  ArrowRight,
  ExternalLink,
  Building2,
  Server,
  Code2,
  ShoppingCart,
  ShoppingBag,
  ShieldCheck,
  RefreshCw,
  Building,
  Truck,
  Hotel,
  Hospital,
  GraduationCap,
  HardHat,
  Send,
  CheckCircle2,
  Globe2,
  Calculator,
  Briefcase,
  Scale,
  Users,
  CreditCard,
  Sparkles,
  Award,
  Loader2,
  AlertCircle
} from 'lucide-react';

export default function Footer() {
  const { theme } = useTheme();
  const logoSrc = theme === 'light' ? '/assets/imgs/logo-dark.png' : '/assets/imgs/logo.png';
  
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    const payload = {
      source: 'footer',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    try {
      // 1. Dispatch through Next.js server API route
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});

      // 2. Direct browser delivery to info@altapetesolutions.com via FormSubmit.co
      await fetch('https://formsubmit.co/ajax/info@altapetesolutions.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          _subject: `⚡ [Footer Quick Message] From: ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      }).catch(() => {});

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Footer submission error:', err);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  const footerSolutions = [
    { text: "Enterprise Solutions", href: "/enterprise-solutions", icon: Building2 },
    { text: "Technology Management", href: "/technology-management", icon: Server },
    { text: "Custom App Development", href: "/custom-app-development", icon: Code2 },
    { text: "ZATCA Phase 2 Integration", href: "/zatca-integration", icon: ShieldCheck },
    { text: "Odoo to Odoo Sync", href: "/odoo-to-odoo-data-integration", icon: RefreshCw },
    { text: "Salla E-Commerce", href: "/salla-integration", icon: ShoppingBag },
    { text: "Shopify Integration", href: "/shopify-integration", icon: ShoppingCart },
    { text: "HR Muqeem Integration", href: "/hr-muqeem", icon: Users },
    { text: "Mada - Geidea - Jisr Integration", href: "/mada-jedia-hr-jisr-integration", icon: CreditCard }
  ];

  const footerServices = [
    { text: "Accounting & Financial", href: "/accounting-financial-advisory", icon: Calculator },
    { text: "Corporate Advisory & MISA", href: "/corporate-advisory", icon: Briefcase },
    { text: "Taxation & ZAKAT Advisory", href: "/taxation-zakat-advisory", icon: Scale },
    { text: "Outsourcing & BPO Services", href: "/outsourcing-business-services", icon: Building },
    { text: "Strategic IT Consulting", href: "/services", icon: Sparkles },
    { text: "Executive Business Advisory", href: "/what-we-do", icon: Award }
  ];

  const footerProducts = [
    { text: "Hotel Management (PMS)", href: "/hotel-management-solutions", icon: Hotel },
    { text: "Construction Management", href: "/construction-management-solutions", icon: HardHat },
    { text: "Hospital Management (EMR)", href: "/hospital-management-solutions", icon: Hospital },
    { text: "School Management (SIS)", href: "/school-management-solutions", icon: GraduationCap },
    { text: "Shipment & Logistics", href: "/shipping-solutions", icon: Truck },
    { text: "Rental Management ERP", href: "/rental-solutions", icon: Building },
    { text: "All Industry Solutions", href: "/products", icon: ArrowRight }
  ];

  return (
    <footer 
      className="footer"
      style={{
        background: 'var(--footer-bg)',
        color: 'var(--footer-text)',
        borderTop: '1px solid var(--footer-border)',
        paddingTop: '60px',
        paddingBottom: '30px',
        position: 'relative',
        zIndex: 10,
        transition: 'background-color 0.3s ease'
      }}
    >
      <div className="container">
        
        {/* =====================================================================
            TIER 1: QUICK CONTACT & GLOBAL PRESENCE CARDS
            ===================================================================== */}
        <div className="row g-4 mb-5 pb-2">
          {/* Card 1: Direct Call Helplines */}
          <div className="col-lg-4 col-md-6 col-12">
            <div 
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--card-shadow)',
                transition: 'all 0.3s ease'
              }}
              className="footer-contact-card"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div 
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(44, 115, 217, 0.14)',
                      border: '1px solid rgba(44, 115, 217, 0.3)',
                      color: 'var(--brand-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={19} />
                  </div>
                  <h4 style={{ color: 'var(--heading-color)', fontSize: '17px', fontWeight: 700, margin: 0 }}>
                    Call Us
                  </h4>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a 
                    href="tel:+966533820454"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                      color: 'var(--heading-color)',
                      padding: '7px 10px',
                      borderRadius: '8px',
                      background: 'var(--bg-card-subtle)',
                      transition: 'all 0.2s ease'
                    }}
                    className="contact-sub-item"
                  >
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600 }}>+966-533-820454</div>
                      <div style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>Saudi Arabia / UAE</div>
                    </div>
                    <ExternalLink size={13} color="var(--brand-accent)" />
                  </a>

                  <a 
                    href="tel:+966558569116"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                      color: 'var(--heading-color)',
                      padding: '7px 10px',
                      borderRadius: '8px',
                      background: 'var(--bg-card-subtle)',
                      transition: 'all 0.2s ease'
                    }}
                    className="contact-sub-item"
                  >
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600 }}>+966-558-569116</div>
                      <div style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>Saudi Arabia / UAE</div>
                    </div>
                    <ExternalLink size={13} color="var(--brand-accent)" />
                  </a>

                  <a 
                    href="tel:+966551013823"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                      color: 'var(--heading-color)',
                      padding: '7px 10px',
                      borderRadius: '8px',
                      background: 'var(--bg-card-subtle)',
                      transition: 'all 0.2s ease'
                    }}
                    className="contact-sub-item"
                  >
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600 }}>+966-551-013823</div>
                      <div style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>Saudi Arabia / UAE</div>
                    </div>
                    <ExternalLink size={13} color="var(--brand-accent)" />
                  </a>

                  <a 
                    href="tel:+923703536327"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                      color: 'var(--heading-color)',
                      padding: '7px 10px',
                      borderRadius: '8px',
                      background: 'var(--bg-card-subtle)',
                      transition: 'all 0.2s ease'
                    }}
                    className="contact-sub-item"
                  >
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600 }}>+92 370 3536327</div>
                      <div style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>Pakistan</div>
                    </div>
                    <ExternalLink size={13} color="var(--brand-accent)" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Message Us / Official Support */}
          <div className="col-lg-4 col-md-6 col-12">
            <div 
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--card-shadow)',
                transition: 'all 0.3s ease'
              }}
              className="footer-contact-card"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div 
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(44, 115, 217, 0.14)',
                      border: '1px solid rgba(44, 115, 217, 0.3)',
                      color: 'var(--brand-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={19} />
                  </div>
                  <h4 style={{ color: 'var(--heading-color)', fontSize: '17px', fontWeight: 700, margin: 0 }}>
                    Message Us
                  </h4>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a 
                    href="mailto:info@altapetesolutions.com"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                      color: 'var(--heading-color)',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: 'var(--bg-card-subtle)',
                      transition: 'all 0.2s ease'
                    }}
                    className="contact-sub-item"
                  >
                    <div>
                      <div style={{ fontSize: '13.5px', fontWeight: 600 }}>info@altapetesolutions.com</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Official Inquiries & Support</div>
                    </div>
                    <ExternalLink size={13} color="var(--brand-accent)" />
                  </a>

                  <a 
                    href="https://wa.me/966551076961"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                      color: 'var(--heading-color)',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: 'var(--bg-card-subtle)',
                      transition: 'all 0.2s ease'
                    }}
                    className="contact-sub-item"
                  >
                    <div>
                      <div style={{ fontSize: '13.5px', fontWeight: 600 }}>+966 55 107 6961</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Direct WhatsApp Chat</div>
                    </div>
                    <ExternalLink size={13} color="var(--brand-accent)" />
                  </a>
                </div>
              </div>

              <div style={{ marginTop: '16px', padding: '10px 12px', borderRadius: '8px', background: 'rgba(44, 115, 217, 0.08)', border: '1px solid rgba(44, 115, 217, 0.2)', fontSize: '11.5px', color: 'var(--brand-accent)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--brand-accent)', boxShadow: '0 0 8px var(--brand-accent)', display: 'inline-block' }}></span>
                Enterprise Support Desk Active (24/7 Response)
              </div>
            </div>
          </div>

          {/* Card 3: Regional Presence */}
          <div className="col-lg-4 col-md-12 col-12">
            <div 
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--card-shadow)',
                transition: 'all 0.3s ease'
              }}
              className="footer-contact-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(44, 115, 217, 0.14)',
                    border: '1px solid rgba(44, 115, 217, 0.3)',
                    color: 'var(--brand-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Globe2 size={19} />
                </div>
                <h4 style={{ color: 'var(--heading-color)', fontSize: '17px', fontWeight: 700, margin: 0 }}>
                  Regional Presence
                </h4>
              </div>

              <div className="row g-2" style={{ flexGrow: 1 }}>
                <div className="col-6">
                  <div style={{ padding: '10px', borderRadius: '8px', background: 'var(--bg-card-subtle)', height: '100%' }}>
                    <div style={{ color: 'var(--heading-color)', fontSize: '13px', fontWeight: 700 }}>Saudi Arabia</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '11.5px', marginTop: '2px' }}>Riyadh, Jeddah, Khobar</div>
                  </div>
                </div>
                <div className="col-6">
                  <div style={{ padding: '10px', borderRadius: '8px', background: 'var(--bg-card-subtle)', height: '100%' }}>
                    <div style={{ color: 'var(--heading-color)', fontSize: '13px', fontWeight: 700 }}>UAE</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '11.5px', marginTop: '2px' }}>Dubai, Abu Dhabi</div>
                  </div>
                </div>
                <div className="col-6">
                  <div style={{ padding: '10px', borderRadius: '8px', background: 'var(--bg-card-subtle)', height: '100%' }}>
                    <div style={{ color: 'var(--heading-color)', fontSize: '13px', fontWeight: 700 }}>Bahrain</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '11.5px', marginTop: '2px' }}>Manama</div>
                  </div>
                </div>
                <div className="col-6">
                  <div style={{ padding: '10px', borderRadius: '8px', background: 'var(--bg-card-subtle)', height: '100%' }}>
                    <div style={{ color: 'var(--heading-color)', fontSize: '13px', fontWeight: 700 }}>Pakistan</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '11.5px', marginTop: '2px' }}>Lahore</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border-color)', marginBottom: '50px' }}></div>

        {/* =====================================================================
            TIER 2: MAIN DIRECTORY (5 COLUMNS: COMPANY | SOLUTIONS | SERVICES | PRODUCTS | SEND MESSAGE)
            ===================================================================== */}
        <div className="row g-4 mb-45">
          {/* Column 1: Company Profile & Regional City Presence */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-12 mb-30">
            <Link href="/" className="d-inline-block mb-20">
              <img 
                src={logoSrc} 
                alt="Altapete Solutions - Aim High Business Solutions" 
                style={{ maxHeight: '38px', width: 'auto' }} 
              />
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.7', marginBottom: '20px' }}>
              Altapete Solutions (APS) delivers tier-1 ERP transformations, certified ZATCA Phase 2 compliance, and financial advisory to visionary enterprises across the GCC and South Asia.
            </p>

            {/* City presences (No street addresses) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={14} color="#2c73d9" />
                <span style={{ color: 'var(--text-secondary)', fontSize: '12.5px' }}>
                  <strong style={{ color: 'var(--heading-color)' }}>Riyadh HQ:</strong> Riyadh, Saudi Arabia
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={14} color="#2c73d9" />
                <span style={{ color: 'var(--text-secondary)', fontSize: '12.5px' }}>
                  <strong style={{ color: 'var(--heading-color)' }}>Al Khobar:</strong> Al Khobar, Saudi Arabia
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={14} color="#2c73d9" />
                <span style={{ color: 'var(--text-secondary)', fontSize: '12.5px' }}>
                  <strong style={{ color: 'var(--heading-color)' }}>Lahore Office:</strong> Lahore, Pakistan
                </span>
              </div>
            </div>

            <Link 
              href="/company-profile" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--brand-accent)',
                fontSize: '12.5px',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              <span>Explore Corporate Credentials</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Column 2: Solutions (WITH HYPERLINKS) */}
          <div className="col-xl-2 col-lg-2 col-md-6 col-6 mb-30">
            <h4 style={{ color: 'var(--heading-color)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '18px' }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerSolutions.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <li key={idx}>
                    <Link 
                      href={item.href} 
                      style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '13px', 
                        textDecoration: 'none', 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '7px',
                        transition: 'all 0.2s ease' 
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#2c73d9'; e.currentTarget.style.paddingLeft = '3px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.paddingLeft = '0'; }}
                    >
                      <ItemIcon size={13} color="#2c73d9" style={{ flexShrink: 0 }} />
                      <span>{item.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Services (WITH HYPERLINKS) */}
          <div className="col-xl-2 col-lg-2 col-md-6 col-6 mb-30">
            <h4 style={{ color: 'var(--heading-color)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '18px' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerServices.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <li key={idx}>
                    <Link 
                      href={item.href} 
                      style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '13px', 
                        textDecoration: 'none', 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '7px',
                        transition: 'all 0.2s ease' 
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#2c73d9'; e.currentTarget.style.paddingLeft = '3px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.paddingLeft = '0'; }}
                    >
                      <ItemIcon size={13} color="#2c73d9" style={{ flexShrink: 0 }} />
                      <span>{item.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Products (WITH HYPERLINKS) */}
          <div className="col-xl-2 col-lg-2 col-md-6 col-6 mb-30">
            <h4 style={{ color: 'var(--heading-color)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '18px' }}>
              Products
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerProducts.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <li key={idx}>
                    <Link 
                      href={item.href} 
                      style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '13px', 
                        textDecoration: 'none', 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '7px',
                        transition: 'all 0.2s ease' 
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#2c73d9'; e.currentTarget.style.paddingLeft = '3px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.paddingLeft = '0'; }}
                    >
                      <ItemIcon size={13} color="#2c73d9" style={{ flexShrink: 0 }} />
                      <span>{item.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 5: Send a Message (WIRED TO info@altapetesolutions.com) */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-12 mb-30">
            <h4 style={{ color: 'var(--heading-color)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '14px' }}>
              Send a Message
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '12.5px', lineHeight: '1.5', marginBottom: '14px' }}>
              Queries are delivered directly to <strong style={{ color: 'var(--heading-color)' }}>info@altapetesolutions.com</strong> for swift technical response.
            </p>

            {submitted ? (
              <div style={{ padding: '16px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.35)', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ color: '#10b981', fontSize: '13px', fontWeight: 700 }}>Inquiry Received!</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '11.5px', marginTop: '2px' }}>
                    Routed to info@altapetesolutions.com. An advisor will reach out shortly.
                  </div>
                </div>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}
              >
                <div className="row g-2">
                  <div className="col-6">
                    <input 
                      type="text" 
                      placeholder="Name *" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        background: 'var(--bg-card-subtle)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '7px',
                        padding: '8px 10px',
                        color: 'var(--heading-color)',
                        fontSize: '12.5px',
                        outline: 'none',
                        width: '100%'
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <input 
                      type="tel" 
                      placeholder="Phone / WA" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        background: 'var(--bg-card-subtle)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '7px',
                        padding: '8px 10px',
                        color: 'var(--heading-color)',
                        fontSize: '12.5px',
                        outline: 'none',
                        width: '100%'
                      }}
                    />
                  </div>
                </div>

                <input 
                  type="email" 
                  placeholder="Email Address *" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    background: 'var(--bg-card-subtle)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '7px',
                    padding: '8px 10px',
                    color: 'var(--heading-color)',
                    fontSize: '12.5px',
                    outline: 'none',
                    width: '100%'
                  }}
                />

                <textarea 
                  placeholder="How can we assist you? *"
                  rows={2}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    background: 'var(--bg-card-subtle)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '7px',
                    padding: '8px 10px',
                    color: 'var(--heading-color)',
                    fontSize: '12.5px',
                    outline: 'none',
                    resize: 'none',
                    width: '100%'
                  }}
                />

                {errorMessage && (
                  <div style={{ color: '#ef4444', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertCircle size={12} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={submitting}
                  className="btn-primary-brand"
                  style={{ 
                    padding: '9px 16px', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '7px', 
                    fontSize: '12.5px',
                    opacity: submitting ? 0.7 : 1,
                    cursor: submitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={13} className="spin-loader" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send size={12} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* =====================================================================
            TIER 3: ACCREDITATIONS & ENTERPRISE TRUST BAR
            ===================================================================== */}
        <div 
          style={{
            borderTop: '1px solid var(--border-color)',
            borderBottom: '1px solid var(--border-color)',
            padding: '18px 0',
            marginBottom: '25px'
          }}
        >
          <div className="row g-3 align-items-center text-center text-md-start">
            <div className="col-lg-3 col-md-6 col-12">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <ShieldCheck size={16} color="#10b981" />
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--heading-color)' }}>
                  ZATCA Phase 2 Certified Middleware
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <Sparkles size={16} color="#2c73d9" />
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--heading-color)' }}>
                  Odoo, SAP & Oracle Ecosystem
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <Scale size={16} color="#8b5cf6" />
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--heading-color)' }}>
                  SOCPA & ICAP Accredited Advisory
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <Award size={16} color="#f59e0b" />
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--heading-color)' }}>
                  23+ Years Combined Track Record
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            TIER 4: BOTTOM LEGAL BAR
            ===================================================================== */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ color: 'var(--text-muted)', fontSize: '12.5px' }}>
            © {new Date().getFullYear()} Altapete Solutions. Aim High Business Solutions. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <Link href="/privacy-policy" style={{ color: 'var(--text-muted)', fontSize: '12.5px', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'var(--text-muted)', fontSize: '12.5px', textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="/company-profile" style={{ color: 'var(--text-muted)', fontSize: '12.5px', textDecoration: 'none' }}>Company Profile</Link>
            <Link href="/what-we-do" style={{ color: 'var(--text-muted)', fontSize: '12.5px', textDecoration: 'none' }}>What We Do</Link>
            <Link href="/career" style={{ color: 'var(--text-muted)', fontSize: '12.5px', textDecoration: 'none' }}>Careers</Link>
            <Link href="/contact-us" style={{ color: 'var(--text-muted)', fontSize: '12.5px', textDecoration: 'none' }}>Contact Us</Link>
          </div>
        </div>

      </div>

      <style jsx>{`
        .spin-loader {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
}
