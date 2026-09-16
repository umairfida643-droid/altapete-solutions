import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Server, 
  Code2, 
  ShieldCheck, 
  RefreshCw, 
  ShoppingBag, 
  ShoppingCart, 
  Users, 
  CreditCard,
  ChevronDown,
  X,
  Calculator,
  Briefcase,
  Scale,
  Building,
  Truck,
  Hotel,
  Hospital,
  GraduationCap,
  HardHat
} from 'lucide-react';

export default function MobileDrawer({ isOpen, onClose }) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(11, 10, 23, 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 9998,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}

      <div 
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${isOpen ? 'sidebar-visible' : ''}`}
        style={{
          background: '#0d0c1d',
          borderLeft: '1px solid rgba(44, 115, 217, 0.25)',
          zIndex: 9999
        }}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo d-flex justify-content-between align-items-center pb-20 border-bottom" style={{ borderColor: 'rgba(44, 115, 217, 0.2)' }}>
              <Link className="d-flex" href="/" onClick={onClose}>
                <img className="logo-night" alt="Altapete Solutions" src="/assets/imgs/logo.png" style={{ maxHeight: '38px', width: 'auto' }} />
              </Link>
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(44, 115, 217, 0.15)',
                  border: '1px solid rgba(44, 115, 217, 0.3)',
                  color: '#2c73d9',
                  borderRadius: '8px',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav className="mt-20">
                  <ul className="mobile-menu font-heading" style={{ listStyle: 'none', padding: 0 }}>
                    {/* Solutions Accordion */}
                    <li className={`has-children ${activeAccordion === 1 ? 'active' : ''}`}>
                      <div 
                        onClick={() => toggleAccordion(1)}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', cursor: 'pointer', color: '#ffffff', fontWeight: 600 }}
                      >
                        <span>Solutions</span>
                        <ChevronDown size={16} style={{ transform: activeAccordion === 1 ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease', color: '#2c73d9' }} />
                      </div>

                      {activeAccordion === 1 && (
                        <div style={{ background: 'rgba(40, 36, 96, 0.3)', border: '1px solid rgba(44, 115, 217, 0.25)', borderRadius: '12px', padding: '14px', marginBottom: '14px' }}>
                          <div style={{ color: '#2c73d9', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                            Digital Transformation
                          </div>
                          {[
                            { text: "Enterprise Solutions", href: "/enterprise-solutions", icon: Building2 },
                            { text: "Technology Management Services", href: "/technology-management", icon: Server },
                            { text: "Custom Application Development", href: "/custom-app-development", icon: Code2 }
                          ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                              <Link 
                                key={i} 
                                href={item.href} 
                                onClick={onClose}
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', color: '#cbd5e1', fontSize: '13.5px', textDecoration: 'none' }}
                              >
                                <Icon size={15} color="#2c73d9" /> {item.text}
                              </Link>
                            );
                          })}

                          <hr style={{ margin: '12px 0', borderColor: 'rgba(44, 115, 217, 0.15)' }} />

                          <div style={{ color: '#2c73d9', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                            Integration
                          </div>
                          {[
                            { text: "Zatca Integration", href: "/zatca-integration", icon: ShieldCheck },
                            { text: "Odoo to Odoo", href: "/odoo-to-odoo-data-integration", icon: RefreshCw },
                            { text: "Salla Integration", href: "/salla-integration", icon: ShoppingBag },
                            { text: "Shopify Integration", href: "/shopify-integration", icon: ShoppingCart },
                            { text: "HR Muqeem Integration", href: "/hr-muqeem", icon: Users },
                            { text: "Other Integration (Mada-Jedia-Jisr)", href: "/mada-jedia-hr-jisr-integration", icon: CreditCard }
                          ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                              <Link 
                                key={i} 
                                href={item.href} 
                                onClick={onClose}
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', color: '#cbd5e1', fontSize: '13.5px', textDecoration: 'none' }}
                              >
                                <Icon size={15} color="#2c73d9" /> {item.text}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </li>

                    {/* Services Accordion */}
                    <li className={`has-children ${activeAccordion === 2 ? 'active' : ''}`}>
                      <div 
                        onClick={() => toggleAccordion(2)}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', cursor: 'pointer', color: '#ffffff', fontWeight: 600 }}
                      >
                        <span>Services</span>
                        <ChevronDown size={16} style={{ transform: activeAccordion === 2 ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease', color: '#2c73d9' }} />
                      </div>

                      {activeAccordion === 2 && (
                        <div style={{ background: 'rgba(40, 36, 96, 0.3)', border: '1px solid rgba(44, 115, 217, 0.25)', borderRadius: '12px', padding: '14px', marginBottom: '14px' }}>
                          {[
                            { text: "Accounting & Financial Advisory", href: "/accounting-financial-advisory", icon: Calculator },
                            { text: "Corporate Advisory", href: "/corporate-advisory", icon: Briefcase },
                            { text: "Taxation & ZAKAT Advisory", href: "/taxation-zakat-advisory", icon: Scale },
                            { text: "Outsourcing & Business Services", href: "/outsourcing-business-services", icon: Building }
                          ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                              <Link 
                                key={i} 
                                href={item.href} 
                                onClick={onClose}
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', color: '#cbd5e1', fontSize: '13.5px', textDecoration: 'none' }}
                              >
                                <Icon size={15} color="#2c73d9" /> {item.text}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </li>

                    {/* Products Accordion */}
                    <li className={`has-children ${activeAccordion === 3 ? 'active' : ''}`}>
                      <div 
                        onClick={() => toggleAccordion(3)}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', cursor: 'pointer', color: '#ffffff', fontWeight: 600 }}
                      >
                        <span>Products</span>
                        <ChevronDown size={16} style={{ transform: activeAccordion === 3 ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease', color: '#2c73d9' }} />
                      </div>

                      {activeAccordion === 3 && (
                        <div style={{ background: 'rgba(40, 36, 96, 0.3)', border: '1px solid rgba(44, 115, 217, 0.25)', borderRadius: '12px', padding: '14px', marginBottom: '14px' }}>
                          {[
                            { text: "Rental Solutions", href: "/rental-solutions", icon: Building },
                            { text: "Shipping Solutions", href: "/shipping-solutions", icon: Truck },
                            { text: "Hotel Management", href: "/hotel-management-solutions", icon: Hotel },
                            { text: "Hospital Management", href: "/hospital-management-solutions", icon: Hospital },
                            { text: "School Management", href: "/school-management-solutions", icon: GraduationCap },
                            { text: "Construction Management", href: "/construction-management-solutions", icon: HardHat }
                          ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                              <Link 
                                key={i} 
                                href={item.href} 
                                onClick={onClose}
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', color: '#cbd5e1', fontSize: '13.5px', textDecoration: 'none' }}
                              >
                                <Icon size={15} color="#2c73d9" /> {item.text}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </li>

                    <li style={{ padding: '12px 0' }}><Link href="/what-we-do" onClick={onClose} style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>What We Do</Link></li>
                    <li style={{ padding: '12px 0' }}><Link href="/company-profile" onClick={onClose} style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>Company Profile</Link></li>
                    <li style={{ padding: '12px 0' }}><Link href="/career" onClick={onClose} style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>Careers</Link></li>
                    <li style={{ padding: '12px 0' }}><Link href="/blog" onClick={onClose} style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>Blog</Link></li>
                  </ul>
                </nav>

                <div className="mt-30">
                  <Link 
                    href="/contact-us" 
                    onClick={onClose} 
                    className="btn btn-linear w-100 text-center d-block"
                    style={{ padding: '12px', fontSize: '14px', textTransform: 'uppercase' }}
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="site-copyright color-gray-500 mt-30 text-center" style={{ fontSize: '12px' }}>
                  Copyright © 2025 Altapete Solutions. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
