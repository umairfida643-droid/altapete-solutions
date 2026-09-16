import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      className="footer"
      style={{
        background: 'linear-gradient(180deg, #0d0c1d 0%, #070611 100%)',
        borderTop: '1px solid rgba(44, 115, 217, 0.2)',
        padding: '70px 0 30px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div className="row g-4 mb-50">
          {/* Column 1: Company Profile & Global Offices */}
          <div className="col-lg-4 col-md-12 mb-30">
            <Link href="/" className="d-inline-block mb-20">
              <img 
                src="/assets/imgs/logo.png" 
                alt="Altapete Solutions" 
                style={{ maxHeight: '46px', width: 'auto', filter: 'drop-shadow(0 2px 8px rgba(44, 115, 217, 0.25))' }} 
              />
            </Link>
            <p style={{ color: '#94a3b8', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '25px', maxWidth: '360px' }}>
              Altapete Solutions (APS) empowers executives with strategic insights, delivering modernization, resilience, and agility for future-ready enterprises.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="#2c73d9" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#cbd5e1', fontSize: '13.5px', lineHeight: '1.5' }}>
                  <strong>Al Khobar:</strong> Office# 09, 4th Floor, King Khalid Street Cross 15, KSA
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="#2c73d9" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#cbd5e1', fontSize: '13.5px', lineHeight: '1.5' }}>
                  <strong>Lahore:</strong> 159-D Nawab Town, Raiwind Road, Lahore, PK
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="#2c73d9" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#cbd5e1', fontSize: '13.5px', lineHeight: '1.5' }}>
                  <strong>Riyadh:</strong> Building #44, Ibn Katheer Street, King Abdulaziz District, KSA
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="col-lg-2 col-md-6 col-6 mb-30">
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '22px' }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { text: "Enterprise Solutions", href: "/enterprise-solutions" },
                { text: "Technology Management", href: "/technology-management" },
                { text: "Custom Development", href: "/custom-app-development" },
                { text: "Shopify Integration", href: "/shopify-integration" },
                { text: "Zatca Integration", href: "/zatca-integration" },
                { text: "Odoo to Odoo Data", href: "/odoo-to-odoo-data-integration" }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#2c73d9'; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="col-lg-2 col-md-6 col-6 mb-30">
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '22px' }}>
              Products
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { text: "Rental Solutions", href: "/rental-solutions" },
                { text: "Shipping Solutions", href: "/shipping-solutions" },
                { text: "Hotel Management", href: "/hotel-management-solutions" },
                { text: "Hospital Management", href: "/hospital-management-solutions" },
                { text: "School Management", href: "/school-management-solutions" },
                { text: "Construction Management", href: "/construction-management-solutions" }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#2c73d9'; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-lg-4 col-md-12 mb-30">
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '22px' }}>
              Stay Updated
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', marginBottom: '18px' }}>
              Sign up to receive expert ERP insights, architectural guides, and industry case studies.
            </p>

            <form 
              onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to Altapete Solutions!'); }}
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                style={{
                  background: 'rgba(40, 36, 96, 0.35)',
                  border: '1px solid rgba(44, 115, 217, 0.25)',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                style={{
                  background: 'rgba(40, 36, 96, 0.35)',
                  border: '1px solid rgba(44, 115, 217, 0.25)',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <button 
                type="submit" 
                className="btn btn-linear"
                style={{ padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                Subscribe to Newsletter <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            borderTop: '1px solid rgba(44, 115, 217, 0.15)',
            paddingTop: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '15px'
          }}
        >
          <div style={{ color: '#94a3b8', fontSize: '13.5px' }}>
            Copyright © 2025 <span style={{ color: '#2c73d9', fontWeight: 600 }}>Altapete Solutions</span>. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href="https://www.linkedin.com/company/altapete-solutions/" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#cbd5e1',
                fontSize: '13.5px',
                textDecoration: 'none',
                padding: '6px 14px',
                borderRadius: '8px',
                background: 'rgba(40, 36, 96, 0.4)',
                border: '1px solid rgba(44, 115, 217, 0.25)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#2c73d9'; e.currentTarget.style.borderColor = '#2c73d9'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.borderColor = 'rgba(44, 115, 217, 0.25)'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2c73d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg> Follow on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
