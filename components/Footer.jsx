import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { 
  MapPin, 
  ArrowRight,
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
  HardHat
} from 'lucide-react';

export default function Footer() {
  const { theme } = useTheme();
  const logoSrc = theme === 'light' ? '/assets/imgs/logo-dark.png' : '/assets/imgs/logo.png';

  const footerSolutions = [
    { text: "Enterprise Solutions", href: "/enterprise-solutions", icon: Building2 },
    { text: "Technology Management", href: "/technology-management", icon: Server },
    { text: "Custom Development", href: "/custom-app-development", icon: Code2 },
    { text: "Shopify Integration", href: "/shopify-integration", icon: ShoppingCart },
    { text: "Zatca Integration", href: "/zatca-integration", icon: ShieldCheck },
    { text: "Odoo to Odoo Data", href: "/odoo-to-odoo-data-integration", icon: RefreshCw }
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
        borderTop: '1px solid rgba(44, 115, 217, 0.2)',
        padding: '70px 0 30px',
        position: 'relative',
        zIndex: 10,
        transition: 'background-color 0.3s ease'
      }}
    >
      <div className="container">
        <div className="row g-4 mb-50">
          {/* Column 1: Company Profile & Global Offices */}
          <div className="col-lg-4 col-md-12 mb-30">
            <Link href="/" className="d-inline-block mb-20">
              <img 
                src={logoSrc} 
                alt="Altapete Solutions" 
                style={{ maxHeight: '38px', width: 'auto' }} 
              />
            </Link>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.7', marginBottom: '25px', maxWidth: '360px' }}>
              Altapete Solutions (APS) empowers executives with strategic insights, delivering modernization, resilience, and agility for future-ready enterprises.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="#2c73d9" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#cbd5e1', fontSize: '13.5px', lineHeight: '1.5' }}>
                  <strong style={{ color: '#ffffff' }}>Al Khobar:</strong> Office# 09, 4th Floor, King Khalid Street Cross 15, KSA
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="#2c73d9" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#cbd5e1', fontSize: '13.5px', lineHeight: '1.5' }}>
                  <strong style={{ color: '#ffffff' }}>Lahore:</strong> 159-D Nawab Town, Raiwind Road, Lahore, PK
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="#2c73d9" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#cbd5e1', fontSize: '13.5px', lineHeight: '1.5' }}>
                  <strong style={{ color: '#ffffff' }}>Riyadh:</strong> Building #44, Ibn Katheer Street, King Abdulaziz District, KSA
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions (WITH ICONS) */}
          <div className="col-lg-2 col-md-6 col-6 mb-30">
            <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '20px' }}>
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
                        color: '#94a3b8', 
                        fontSize: '13.5px', 
                        textDecoration: 'none', 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease' 
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#2c73d9'; e.currentTarget.style.paddingLeft = '4px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.paddingLeft = '0'; }}
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
            <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '20px' }}>
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
                        color: '#94a3b8', 
                        fontSize: '13.5px', 
                        textDecoration: 'none', 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease' 
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#2c73d9'; e.currentTarget.style.paddingLeft = '4px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.paddingLeft = '0'; }}
                    >
                      <ItemIcon size={14} color="#2c73d9" />
                      <span>{item.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-lg-4 col-md-12 mb-30">
            <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '20px' }}>
              Stay Updated
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.6', marginBottom: '16px' }}>
              Sign up to receive expert ERP insights, architectural checklists, and industry case studies.
            </p>

            <form 
              onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to Altapete Solutions!'); }}
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  color: '#ffffff',
                  fontSize: '13.5px',
                  outline: 'none'
                }}
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  color: '#ffffff',
                  fontSize: '13.5px',
                  outline: 'none'
                }}
              />
              <button 
                type="submit" 
                className="btn-primary-brand"
                style={{ padding: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
              >
                Subscribe to Updates <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ color: '#64748b', fontSize: '13px' }}>
            © {new Date().getFullYear()} Altapete Solutions (APS). All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link href="/privacy-policy" style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="/sitemap" style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none' }}>Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
