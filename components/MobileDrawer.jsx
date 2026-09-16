import React, { useState } from 'react';
import Link from 'next/link';

export default function MobileDrawer({ isOpen, onClose }) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            zIndex: 9998,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}

      <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${isOpen ? 'sidebar-visible' : ''}`}>
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo border-gray-800 d-flex justify-content-between align-items-center">
              <Link className="d-flex" href="/" onClick={onClose}>
                <img className="logo-night" alt="Altapete Solutions" src="/assets/imgs/logo.png" style={{ width: '180px' }} />
              </Link>
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '24px',
                  cursor: 'pointer',
                  padding: '4px 8px'
                }}
              >
                ✕
              </button>
            </div>

            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav className="mt-15">
                  <ul className="mobile-menu font-heading">
                    {/* Solutions Accordion */}
                    <li className={`has-children ${activeAccordion === 1 ? 'active' : ''}`}>
                      <span className="menu-expand" onClick={() => toggleAccordion(1)}>
                        <i className="fi-rr-caret-down"></i>
                      </span>
                      <a href="#solutions" onClick={(e) => { e.preventDefault(); toggleAccordion(1); }}>Solutions</a>
                      <ul className={`sub-menu ${activeAccordion === 1 ? 'd-block' : 'd-none'}`} style={{ border: '1px solid #0ea5ea', borderRadius: '8px', marginTop: '0.5rem', padding: '12px' }}>
                        <div style={{ color: '#0ea5ea', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px' }}>Digital Transformation</div>
                        <li style={{ paddingLeft: '10px' }}><Link href="/enterprise-solutions" onClick={onClose}>Enterprise Solutions</Link></li>
                        <li style={{ paddingLeft: '10px' }}><Link href="/technology-management" onClick={onClose}>Technology Management Services</Link></li>
                        <li style={{ paddingLeft: '10px' }}><Link href="/custom-app-development" onClick={onClose}>Custom Application Development</Link></li>
                        <hr style={{ margin: '0.8rem 0', borderColor: 'rgba(255,255,255,0.1)' }} />
                        <div style={{ color: '#0ea5ea', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px' }}>Integration</div>
                        <li style={{ paddingLeft: '10px' }}><Link href="/zatca-integration" onClick={onClose}>Zatca Integration</Link></li>
                        <li style={{ paddingLeft: '10px' }}><Link href="/odoo-to-odoo-data-integration" onClick={onClose}>Odoo to Odoo</Link></li>
                        <li style={{ paddingLeft: '10px' }}><Link href="/salla-integration" onClick={onClose}>Salla Integration</Link></li>
                        <li style={{ paddingLeft: '10px' }}><Link href="/shopify-integration" onClick={onClose}>Shopify Integration</Link></li>
                        <li style={{ paddingLeft: '10px' }}><Link href="/hr-muqeem" onClick={onClose}>HR Muqeem Integration</Link></li>
                        <li style={{ paddingLeft: '10px' }}><Link href="/mada-jedia-hr-jisr-integration" onClick={onClose}>Other Integration (Mada-Jedia-Jisr)</Link></li>
                      </ul>
                    </li>

                    {/* Services Accordion */}
                    <li className={`has-children ${activeAccordion === 2 ? 'active' : ''}`}>
                      <span className="menu-expand" onClick={() => toggleAccordion(2)}>
                        <i className="fi-rr-caret-down"></i>
                      </span>
                      <a href="#services" onClick={(e) => { e.preventDefault(); toggleAccordion(2); }}>Services</a>
                      <ul className={`sub-menu ${activeAccordion === 2 ? 'd-block' : 'd-none'}`}>
                        <li><Link href="/accounting-financial-advisory" onClick={onClose}>Accounting & Financial Advisory</Link></li>
                        <li><Link href="/corporate-advisory" onClick={onClose}>Corporate Advisory</Link></li>
                        <li><Link href="/taxation-zakat-advisory" onClick={onClose}>Taxation & ZAKAT Advisory</Link></li>
                        <li><Link href="/outsourcing-business-services" onClick={onClose}>Outsourcing & Business Services</Link></li>
                      </ul>
                    </li>

                    {/* Products Accordion */}
                    <li className={`has-children ${activeAccordion === 3 ? 'active' : ''}`}>
                      <span className="menu-expand" onClick={() => toggleAccordion(3)}>
                        <i className="fi-rr-caret-down"></i>
                      </span>
                      <a href="#products" onClick={(e) => { e.preventDefault(); toggleAccordion(3); }}>Products</a>
                      <ul className={`sub-menu ${activeAccordion === 3 ? 'd-block' : 'd-none'}`}>
                        <li><Link href="/rental-solutions" onClick={onClose}>Rental Solutions</Link></li>
                        <li><Link href="/shipping-solutions" onClick={onClose}>Shipping Solutions</Link></li>
                        <li><Link href="/hotel-management-solutions" onClick={onClose}>Hotel Management</Link></li>
                        <li><Link href="/hospital-management-solutions" onClick={onClose}>Hospital Management</Link></li>
                        <li><Link href="/school-management-solutions" onClick={onClose}>School Management</Link></li>
                        <li><Link href="/construction-management-solutions" onClick={onClose}>Construction Management</Link></li>
                      </ul>
                    </li>

                    <li><Link href="/what-we-do" onClick={onClose}>What We Do</Link></li>
                    <li><Link href="/company-profile" onClick={onClose}>Company Profile</Link></li>
                    <li><Link href="/career" onClick={onClose}>Careers</Link></li>
                    <li><Link href="/blog" onClick={onClose}>Blog</Link></li>
                    <li><Link href="/contact-us" onClick={onClose}>Contact Us</Link></li>
                  </ul>
                </nav>
              </div>

              <div className="site-copyright color-gray-400 mt-30">
                Copyright © 2025 <a className="copyright" target="_blank" rel="noreferrer" href="https://altapetesolutions.com/">Altapete Solutions</a>, All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
