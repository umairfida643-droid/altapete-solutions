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
  Globe2
} from 'lucide-react';

export default function Footer() {
  const { theme } = useTheme();
  const logoSrc = theme === 'light' ? '/assets/imgs/logo-dark.png' : '/assets/imgs/logo.png';
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4500);
  };

  const footerSolutions = [
    { text: "Enterprise Solutions", href: "/enterprise-solutions", icon: Building2 },
    { text: "Technology Management", href: "/technology-management", icon: Server },
    { text: "Custom Application Development", href: "/custom-app-development", icon: Code2 },
    { text: "Shopify Integration", href: "/shopify-integration", icon: ShoppingCart },
    { text: "Zatca Integration", href: "/zatca-integration", icon: ShieldCheck },
    { text: "Odoo to Odoo", href: "/odoo-to-odoo-data-integration", icon: RefreshCw }
  ];

  const footerProducts = [
    { text: "Rental Solutions", href: "/rental-solutions", icon: Building },
    { text: "Shipping Solutions", href: "/shipping-solutions", icon: Truck },
    { text: "Hotel Management", href: "/hotel-management-solutions", icon: Hotel },
    { text: "Hospital Management", href: "/hospital-management-solutions", icon: Hospital },
    { text: "School Management", href: "/school-management-solutions", icon: GraduationCap },
    { text: "Construction Management", href: "/construction-management-solutions", icon: HardHat }
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
          {/* Card 1: Call Us */}
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

          {/* Card 2: Message Us */}
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
                Enterprise Support Available 24/7
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
            TIER 2: MAIN DIRECTORY & HQ OFFICES (4 COLUMNS)
            ===================================================================== */}
        <div className="row g-4 mb-45">
          {/* Column 1: Company Profile & 3 Registered Offices */}
          <div className="col-lg-4 col-md-12 mb-30">
            <Link href="/" className="d-inline-block mb-20">
              <img 
                src={logoSrc} 
                alt="Altapete Solutions - Aim High Business Solutions" 
                style={{ maxHeight: '38px', width: 'auto' }} 
              />
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: '1.7', marginBottom: '25px', maxWidth: '360px' }}>
              Altapete Solutions (APS) empowers executives with strategic insights, driving efficient decisions and lasting results beyond financial success.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(44, 115, 217, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <MapPin size={15} color="#2c73d9" />
                </div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.5' }}>
                  <strong style={{ color: 'var(--heading-color)', display: 'block' }}>Riyadh HQ:</strong>
                  Riyadh, Saudi Arabia
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(44, 115, 217, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <MapPin size={15} color="#2c73d9" />
                </div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.5' }}>
                  <strong style={{ color: 'var(--heading-color)', display: 'block' }}>Al Khobar:</strong>
                  Al Khobar, Saudi Arabia
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(44, 115, 217, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <MapPin size={15} color="#2c73d9" />
                </div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.5' }}>
                  <strong style={{ color: 'var(--heading-color)', display: 'block' }}>Lahore:</strong>
                  Lahore, Pakistan
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions (WITH ICONS) */}
          <div className="col-lg-2 col-md-6 col-6 mb-30">
            <h4 style={{ color: 'var(--heading-color)', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '20px' }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {footerSolutions.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <li key={idx}>
                    <Link 
                      href={item.href} 
                      style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '13.5px', 
                        textDecoration: 'none', 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease' 
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#2c73d9'; e.currentTarget.style.paddingLeft = '4px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.paddingLeft = '0'; }}
                    >
                      <ItemIcon size={14} color="#2c73d9" />
                      <span>{item.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Products (WITH ICONS) */}
          <div className="col-lg-2 col-md-6 col-6 mb-30">
            <h4 style={{ color: 'var(--heading-color)', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '20px' }}>
              Products
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {footerProducts.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <li key={idx}>
                    <Link 
                      href={item.href} 
                      style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '13.5px', 
                        textDecoration: 'none', 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease' 
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#2c73d9'; e.currentTarget.style.paddingLeft = '4px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.paddingLeft = '0'; }}
                    >
                      <ItemIcon size={14} color="#2c73d9" />
                      <span>{item.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Send a Message / Fast Connect Form */}
          <div className="col-lg-4 col-md-12 mb-30">
            <h4 style={{ color: 'var(--heading-color)', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '14px' }}>
              Send a Message
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5', marginBottom: '16px' }}>
              Fill out the form below and our architectural advisory team will get back to you shortly.
            </p>

            {submitted ? (
              <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(0, 174, 239, 0.12)', border: '1px solid rgba(0, 174, 239, 0.3)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={20} color="var(--brand-accent)" />
                <span style={{ color: 'var(--brand-accent)', fontSize: '13.5px', fontWeight: 600 }}>
                  Thank you! Your message has been sent successfully.
                </span>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
              >
                <div className="row g-2">
                  <div className="col-6">
                    <input 
                      type="text" 
                      placeholder="Full Name *" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        background: 'var(--bg-card-subtle)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        padding: '9px 12px',
                        color: 'var(--heading-color)',
                        fontSize: '13px',
                        outline: 'none',
                        width: '100%'
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <input 
                      type="email" 
                      placeholder="Email Address *" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        background: 'var(--bg-card-subtle)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        padding: '9px 12px',
                        color: 'var(--heading-color)',
                        fontSize: '13px',
                        outline: 'none',
                        width: '100%'
                      }}
                    />
                  </div>
                </div>

                <textarea 
                  placeholder="Your Message *"
                  rows={2}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    background: 'var(--bg-card-subtle)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '9px 12px',
                    color: 'var(--heading-color)',
                    fontSize: '13px',
                    outline: 'none',
                    resize: 'none',
                    width: '100%'
                  }}
                />

                <button 
                  type="submit" 
                  className="btn-primary-brand"
                  style={{ padding: '10px 18px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '13px' }}
                >
                  SEND MESSAGE <Send size={13} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* =====================================================================
            BOTTOM LEGAL BAR
            ===================================================================== */}
        <div 
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
            © {new Date().getFullYear()} Altapete Solutions. Aim High Business Solutions. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link href="/privacy-policy" style={{ color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="/company-profile" style={{ color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'none' }}>Company Profile</Link>
            <Link href="/sitemap" style={{ color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'none' }}>Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
