import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import ThemeToggle from './ThemeToggle';
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
  HardHat,
  Flame,
  Zap,
  Landmark,
  Radio,
  Pill,
  Shirt,
  Printer,
  HeartPulse,
  Wrench,
  Car,
  UtensilsCrossed,
  Sprout,
  FlaskConical,
  Pickaxe,
  Film,
  Plane,
  HeartHandshake
} from 'lucide-react';

export default function MobileDrawer({ isOpen, onClose }) {
  const { theme } = useTheme();
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const logoSrc = theme === 'light' ? '/assets/imgs/logo-dark.png' : '/assets/imgs/logo.png';

  const allIndustries = [
    { name: "Oil & Gas", icon: Flame },
    { name: "Energy & Utilities", icon: Zap },
    { name: "Banking & Financial Services", icon: Landmark },
    { name: "Telecommunications", icon: Radio },
    { name: "Pharmaceuticals", icon: Pill },
    { name: "Textiles & Apparel", icon: Shirt },
    { name: "Printing & Publishing", icon: Printer },
    { name: "Healthcare", icon: HeartPulse },
    { name: "Real Estate", icon: Building2 },
    { name: "Engineering", icon: Wrench },
    { name: "Automotive", icon: Car },
    { name: "Transportation", icon: Truck },
    { name: "Hospitality", icon: UtensilsCrossed },
    { name: "Government & Public Sector", icon: Building },
    { name: "Professional Services", icon: Briefcase },
    { name: "Insurance", icon: ShieldCheck },
    { name: "Agriculture & Agribusiness", icon: Sprout },
    { name: "Chemicals & Petrochemicals", icon: FlaskConical },
    { name: "Mining & Metals", icon: Pickaxe },
    { name: "Media & Entertainment", icon: Film },
    { name: "Travel & Tourism", icon: Plane },
    { name: "Non-Profit Organizations", icon: HeartHandshake }
  ];

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(6px)',
            zIndex: 9998,
            transition: 'opacity 0.25s ease'
          }}
        />
      )}

      <div 
        className={`mobile-header-active mobile-header-wrapper-style ${isOpen ? 'sidebar-visible' : ''}`}
        style={{
          background: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border-color)',
          zIndex: 9999,
          width: '320px',
          maxWidth: '85vw'
        }}
      >
        <div className="mobile-header-wrapper-inner" style={{ padding: '24px' }}>
          <div className="mobile-header-content-area">
            
            {/* Top Logo & Actions */}
            <div className="d-flex justify-content-between align-items-center pb-20 border-bottom" style={{ borderColor: 'var(--border-color)' }}>
              <Link className="d-flex" href="/" onClick={onClose}>
                <img alt="Altapete Solutions" src={logoSrc} style={{ maxHeight: '34px', width: 'auto' }} />
              </Link>
              <div className="d-flex align-items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={onClose}
                  style={{
                    background: 'var(--toggle-bg)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    borderRadius: '8px',
                    padding: '6px',
                    cursor: 'pointer',
                    display: 'flex'
                  }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Nav Menu */}
            <div className="perfect-scroll mt-20">
              <nav>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {/* Solutions Accordion */}
                  <li style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <div 
                      onClick={() => toggleAccordion(1)}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', cursor: 'pointer', color: 'var(--text-primary)', fontWeight: 600, fontSize: '15px' }}
                    >
                      <span>Solutions</span>
                      <ChevronDown size={16} color="var(--brand-accent)" style={{ transform: activeAccordion === 1 ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }} />
                    </div>

                    {activeAccordion === 1 && (
                      <div style={{ background: 'var(--bg-card-subtle)', borderRadius: '10px', padding: '12px', marginBottom: '14px' }}>
                        <div style={{ color: 'var(--brand-accent)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.8px' }}>
                          Digital Transformation
                        </div>
                        {[
                          { text: "Enterprise Solutions", href: "/enterprise-solutions", icon: Building2 },
                          { text: "Managed IT Services", href: "/technology-management", icon: Server },
                          { text: "Custom Application Development", href: "/custom-app-development", icon: Code2 }
                        ].map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <Link 
                              key={i} 
                              href={item.href} 
                              onClick={onClose}
                              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 0', color: 'var(--text-secondary)', fontSize: '13px', textDecoration: 'none' }}
                            >
                              <Icon size={15} color="var(--brand-accent)" /> {item.text}
                            </Link>
                          );
                        })}

                        <hr style={{ margin: '10px 0', borderColor: 'var(--border-color)' }} />

                        <div style={{ color: 'var(--brand-accent)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.8px' }}>
                          Integration Ecosystem
                        </div>
                        {[
                          { text: "Zatca Integration", href: "/zatca-integration", icon: ShieldCheck },
                          { text: "Odoo to Odoo", href: "/odoo-to-odoo-data-integration", icon: RefreshCw },
                          { text: "Salla Integration", href: "/salla-integration", icon: ShoppingBag },
                          { text: "Shopify Integration", href: "/shopify-integration", icon: ShoppingCart },
                          { text: "HR Muqeem Integration", href: "/hr-muqeem", icon: Users },
                          { text: "Mada - Geidea - Jisr Integration", href: "/mada-jedia-hr-jisr-integration", icon: CreditCard }
                        ].map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <Link 
                              key={i} 
                              href={item.href} 
                              onClick={onClose}
                              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 0', color: 'var(--text-secondary)', fontSize: '13px', textDecoration: 'none' }}
                            >
                              <Icon size={15} color="var(--brand-accent)" /> {item.text}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </li>

                  {/* Services Accordion */}
                  <li style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <div 
                      onClick={() => toggleAccordion(2)}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', cursor: 'pointer', color: 'var(--text-primary)', fontWeight: 600, fontSize: '15px' }}
                    >
                      <span>Services</span>
                      <ChevronDown size={16} color="var(--brand-accent)" style={{ transform: activeAccordion === 2 ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }} />
                    </div>

                    {activeAccordion === 2 && (
                      <div style={{ background: 'var(--bg-card-subtle)', borderRadius: '10px', padding: '12px', marginBottom: '14px' }}>
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
                              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 0', color: 'var(--text-secondary)', fontSize: '13px', textDecoration: 'none' }}
                            >
                              <Icon size={15} color="var(--brand-accent)" /> {item.text}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </li>

                  {/* Products Accordion */}
                  <li style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <div 
                      onClick={() => toggleAccordion(3)}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', cursor: 'pointer', color: 'var(--text-primary)', fontWeight: 600, fontSize: '15px' }}
                    >
                      <span>Products</span>
                      <ChevronDown size={16} color="var(--brand-accent)" style={{ transform: activeAccordion === 3 ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }} />
                    </div>

                    {activeAccordion === 3 && (
                      <div style={{ background: 'var(--bg-card-subtle)', borderRadius: '10px', padding: '12px', marginBottom: '14px' }}>
                        {[
                          { text: "Hospital Management", href: "/hospital-management-solutions", icon: Hospital },
                          { text: "Construction Management", href: "/construction-management-solutions", icon: HardHat },
                          { text: "Retail Management", href: "/retail-management", icon: ShoppingBag },
                          { text: "Shipping Management", href: "/shipping-solutions", icon: Truck },
                          { text: "Rental Management", href: "/rental-solutions", icon: Building },
                          { text: "Hotel Management", href: "/hotel-management-solutions", icon: Hotel },
                          { text: "School Management Solutions", href: "/school-management-solutions", icon: GraduationCap },
                          { text: "Safety Management", href: "/safety-management", icon: ShieldCheck }
                        ].map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <Link 
                              key={i} 
                              href={item.href} 
                              onClick={onClose}
                              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 0', color: 'var(--text-secondary)', fontSize: '13px', textDecoration: 'none' }}
                            >
                              <Icon size={15} color="var(--brand-accent)" /> {item.text}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </li>

                  {/* Industries Accordion */}
                  <li style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <div 
                      onClick={() => toggleAccordion(4)}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', cursor: 'pointer', color: 'var(--text-primary)', fontWeight: 600, fontSize: '15px' }}
                    >
                      <span>Industries</span>
                      <ChevronDown size={16} color="var(--brand-accent)" style={{ transform: activeAccordion === 4 ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }} />
                    </div>

                    {activeAccordion === 4 && (
                      <div style={{ background: 'var(--bg-card-subtle)', borderRadius: '10px', padding: '12px', marginBottom: '14px' }}>
                        <div style={{ color: 'var(--brand-accent)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.8px' }}>
                          Core Industry Verticals
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxHeight: '280px', overflowY: 'auto' }}>
                          {allIndustries.map((item, i) => {
                            const Icon = item.icon;
                            return (
                              <div 
                                key={i} 
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '10px',
                                  padding: '7px 8px',
                                  borderRadius: '8px',
                                  background: 'var(--bg-surface)',
                                  border: '1px solid var(--border-color)',
                                  color: 'var(--heading-color)',
                                  fontSize: '12px',
                                  fontWeight: 600,
                                  cursor: 'default',
                                  userSelect: 'none'
                                }}
                              >
                                <div style={{
                                  width: '26px',
                                  height: '26px',
                                  borderRadius: '6px',
                                  background: 'rgba(44, 115, 217, 0.12)',
                                  border: '1px solid rgba(44, 115, 217, 0.25)',
                                  color: 'var(--brand-accent)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0
                                }}>
                                  <Icon size={14} />
                                </div>
                                <span>{item.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </li>

                  {/* Direct Pages */}
                  <li style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <Link href="/what-we-do" onClick={onClose} style={{ display: 'block', padding: '14px 0', color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
                      What We Do
                    </Link>
                  </li>
                  <li style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <Link href="/company-profile" onClick={onClose} style={{ display: 'block', padding: '14px 0', color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
                      Company Profile
                    </Link>
                  </li>
                  <li style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <Link href="/career" onClick={onClose} style={{ display: 'block', padding: '14px 0', color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
                      Careers
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="mt-30">
                <Link 
                  href="/contact-us" 
                  onClick={onClose} 
                  className="btn-primary-brand w-100 text-center justify-content-center"
                >
                  Contact Us
                </Link>
              </div>

              <div style={{ color: 'var(--text-muted)', fontSize: '12px', textAlign: 'center', marginTop: '30px' }}>
                Copyright © 2025 Altapete Solutions. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
