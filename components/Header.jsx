import React, { useState, useEffect } from 'react';
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
  Calculator,
  Briefcase,
  Scale,
  Building,
  Truck,
  Hotel,
  Hospital,
  GraduationCap,
  HardHat,
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';

export default function Header({ onToggleMobileMenu }) {
  const { theme } = useTheme();
  const [isSticky, setIsSticky] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoSrc = theme === 'light' ? '/assets/imgs/logo-dark.png' : '/assets/imgs/logo.png';

  const digitalTransformationServices = [
    { text: "Enterprise Solutions", href: "/enterprise-solutions", icon: Building2, desc: "ERP, SAP & scalable platforms" },
    { text: "Technology Management Services", href: "/technology-management", icon: Server, desc: "Cloud & infrastructure advisory" },
    { text: "Custom Application Development", href: "/custom-app-development", icon: Code2, desc: "Tailored software & portals" }
  ];

  const integrationServices = [
    { text: "Zatca Integration", href: "/zatca-integration", icon: ShieldCheck, desc: "Phase 2 compliant e-invoicing" },
    { text: "Odoo to Odoo", href: "/odoo-to-odoo-data-integration", icon: RefreshCw, desc: "Multi-instance data sync" },
    { text: "Salla Integration", href: "/salla-integration", icon: ShoppingBag, desc: "E-commerce ERP sync" },
    { text: "Shopify Integration", href: "/shopify-integration", icon: ShoppingCart, desc: "Automated orders & inventory" },
    { text: "HR Muqeem Integration", href: "/hr-muqeem", icon: Users, desc: "Government portal link" },
    { text: "Other Integration (Mada-Jedia-Jisr)", href: "/mada-jedia-hr-jisr-integration", icon: CreditCard, desc: "Payment & HR systems" }
  ];

  const servicesList = [
    { text: "Accounting & Financial Advisory", href: "/accounting-financial-advisory", icon: Calculator, desc: "Audit, compliance & reporting" },
    { text: "Corporate Advisory", href: "/corporate-advisory", icon: Briefcase, desc: "Strategic M&A & restructuring" },
    { text: "Taxation & ZAKAT Advisory", href: "/taxation-zakat-advisory", icon: Scale, desc: "Zakat & VAT compliance" },
    { text: "Outsourcing & Business Services", href: "/outsourcing-business-services", icon: Building, desc: "Payroll, bookkeeping & HR ops" }
  ];

  const productsList = [
    { text: "Rental Solutions", href: "/rental-solutions", icon: Building, desc: "Fleet & property equipment rental" },
    { text: "Shipping Solutions", href: "/shipping-solutions", icon: Truck, desc: "Logistics & freight forwarding" },
    { text: "Hotel Management", href: "/hotel-management-solutions", icon: Hotel, desc: "PMS, booking & guest engine" },
    { text: "Hospital Management", href: "/hospital-management-solutions", icon: Hospital, desc: "EMR, clinic & bed operations" },
    { text: "School Management", href: "/school-management-solutions", icon: GraduationCap, desc: "LMS, admissions & gradebook" },
    { text: "Construction Management", href: "/construction-management-solutions", icon: HardHat, desc: "Job costing, billing & BOQ" }
  ];

  return (
    <header 
      id="header" 
      className={`header sticky-bar ${isSticky ? 'stick' : ''}`}
      style={{
        backgroundColor: 'var(--header-bg)',
        borderBottom: '1px solid var(--header-border)',
        backdropFilter: 'blur(16px)',
        position: 'sticky',
        top: 0,
        zIndex: 999,
        transition: 'background-color 0.3s ease, border-color 0.3s ease'
      }}
    >
      <div className="container">
        <div 
          className="main-header" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: isSticky ? '10px 0' : '16px 0',
            transition: 'padding 0.25s ease'
          }}
        >
          {/* Logo */}
          <div className="header-logo">
            <Link href="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img 
                alt="Altapete Solutions" 
                src={logoSrc} 
                style={{ 
                  maxHeight: '38px', 
                  width: 'auto',
                  transition: 'opacity 0.2s ease'
                }} 
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="header-nav">
            <nav className="nav-main-menu d-none d-xl-block">
              <ul className="main-menu" style={{ display: 'flex', alignItems: 'center', gap: '6px', listStyle: 'none', margin: 0, padding: 0 }}>
                
                {/* 1. Solutions Mega Menu Trigger */}
                <li
                  className="has-children position-relative"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                  style={{ padding: '8px 12px' }}
                >
                  <Link 
                    href="/" 
                    style={{
                      color: megaMenuOpen ? 'var(--brand-accent)' : 'var(--text-primary)',
                      fontWeight: 600,
                      fontSize: '14.5px',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    Solutions <ChevronDown size={14} style={{ transform: megaMenuOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }} />
                  </Link>

                  {/* Mega Menu Flyout */}
                  {megaMenuOpen && (
                    <div
                      className="megamenu-dropdown"
                      style={{
                        position: 'fixed',
                        top: '68px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 'min(1160px, 95vw)',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '16px',
                        padding: '28px',
                        boxShadow: 'var(--card-shadow-hover)',
                        zIndex: 1000,
                        animation: 'fadeIn 0.2s ease'
                      }}
                      onMouseEnter={() => setMegaMenuOpen(true)}
                      onMouseLeave={() => setMegaMenuOpen(false)}
                    >
                      <div className="row g-4">
                        {/* Left Column: Summary Card */}
                        <div className="col-lg-4">
                          <div 
                            style={{
                              background: 'var(--bg-card-subtle)',
                              border: '1px solid var(--border-color)',
                              borderRadius: '14px',
                              padding: '22px',
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between'
                            }}
                          >
                            <div>
                              <div 
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  padding: '4px 12px',
                                  borderRadius: '20px',
                                  background: 'rgba(44, 115, 217, 0.12)',
                                  border: '1px solid rgba(44, 115, 217, 0.3)',
                                  color: 'var(--brand-accent)',
                                  fontSize: '11px',
                                  fontWeight: 700,
                                  textTransform: 'uppercase',
                                  marginBottom: '14px'
                                }}
                              >
                                <Sparkles size={12} /> Enterprise Suite
                              </div>
                              <h3 style={{ color: 'var(--text-primary)', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>
                                Solutions Overview
                              </h3>
                              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                                At APS, we deliver transformative digital solutions that empower businesses to scale, adapt, and excel through enterprise platforms.
                              </p>
                            </div>
                            <div className="mt-3">
                              <Link 
                                href="/what-we-do"
                                className="btn-secondary-brand w-100 text-center justify-content-center"
                                style={{ padding: '8px 14px', fontSize: '13px' }}
                              >
                                View Capabilities <ArrowRight size={14} />
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Middle Column: Digital Transformation (WITH ICONS) */}
                        <div className="col-lg-4">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                            <div style={{ padding: '6px', borderRadius: '8px', background: 'rgba(44, 115, 217, 0.12)', color: 'var(--brand-accent)' }}>
                              <Layers size={16} />
                            </div>
                            <h4 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                              Digital Transformation
                            </h4>
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {digitalTransformationServices.map((item, idx) => {
                              const ItemIcon = item.icon;
                              return (
                                <Link
                                  key={idx}
                                  href={item.href}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '12px',
                                    padding: '10px 12px',
                                    borderRadius: '10px',
                                    textDecoration: 'none',
                                    background: 'var(--bg-card-subtle)',
                                    border: '1px solid var(--border-color)',
                                    transition: 'all 0.2s ease'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--bg-hover)';
                                    e.currentTarget.style.borderColor = 'var(--brand-accent)';
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'var(--bg-card-subtle)';
                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                  }}
                                >
                                  <div 
                                    style={{
                                      padding: '7px',
                                      borderRadius: '8px',
                                      background: 'rgba(44, 115, 217, 0.12)',
                                      color: 'var(--brand-accent)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      flexShrink: 0
                                    }}
                                  >
                                    <ItemIcon size={16} strokeWidth={1.8} />
                                  </div>
                                  <div>
                                    <div style={{ color: 'var(--text-primary)', fontSize: '13.5px', fontWeight: 600 }}>{item.text}</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '11.5px', marginTop: '2px' }}>{item.desc}</div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* Right Column: Integration (WITH ICONS) */}
                        <div className="col-lg-4">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                            <div style={{ padding: '6px', borderRadius: '8px', background: 'rgba(44, 115, 217, 0.12)', color: 'var(--brand-accent)' }}>
                              <RefreshCw size={16} />
                            </div>
                            <h4 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                              Integration Ecosystem
                            </h4>
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '310px', overflowY: 'auto' }}>
                            {integrationServices.map((item, idx) => {
                              const ItemIcon = item.icon;
                              return (
                                <Link
                                  key={idx}
                                  href={item.href}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '8px 12px',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    background: 'var(--bg-card-subtle)',
                                    border: '1px solid var(--border-color)',
                                    transition: 'all 0.18s ease'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--bg-hover)';
                                    e.currentTarget.style.borderColor = 'var(--brand-accent)';
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'var(--bg-card-subtle)';
                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                  }}
                                >
                                  <div 
                                    style={{
                                      padding: '5px',
                                      borderRadius: '6px',
                                      background: 'rgba(44, 115, 217, 0.12)',
                                      color: 'var(--brand-accent)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      flexShrink: 0
                                    }}
                                  >
                                    <ItemIcon size={14} strokeWidth={1.8} />
                                  </div>
                                  <span style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500 }}>
                                    {item.text}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </li>

                {/* 2. Services Dropdown (WITH ICONS) */}
                <li
                  className="has-children position-relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  style={{ padding: '8px 12px' }}
                >
                  <Link 
                    href="/services" 
                    style={{
                      color: servicesOpen ? 'var(--brand-accent)' : 'var(--text-primary)',
                      fontWeight: 500,
                      fontSize: '14.5px',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    Services <ChevronDown size={14} style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }} />
                  </Link>

                  {servicesOpen && (
                    <div className="custom-dropdown-menu">
                      {servicesList.map((item, idx) => {
                        const ItemIcon = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            className="custom-dropdown-item"
                          >
                            <div className="custom-dropdown-icon">
                              <ItemIcon size={17} strokeWidth={1.9} />
                            </div>
                            <div className="custom-dropdown-text">
                              <span className="custom-dropdown-title">{item.text}</span>
                              <span className="custom-dropdown-desc">{item.desc}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </li>

                {/* 3. Products Dropdown (WITH ICONS) */}
                <li
                  className="has-children position-relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  style={{ padding: '8px 12px' }}
                >
                  <Link 
                    href="/products" 
                    style={{
                      color: productsOpen ? 'var(--brand-accent)' : 'var(--text-primary)',
                      fontWeight: 500,
                      fontSize: '14.5px',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    Products <ChevronDown size={14} style={{ transform: productsOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }} />
                  </Link>

                  {productsOpen && (
                    <div className="custom-dropdown-menu">
                      {productsList.map((item, idx) => {
                        const ItemIcon = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            className="custom-dropdown-item"
                          >
                            <div className="custom-dropdown-icon">
                              <ItemIcon size={17} strokeWidth={1.9} />
                            </div>
                            <div className="custom-dropdown-text">
                              <span className="custom-dropdown-title">{item.text}</span>
                              <span className="custom-dropdown-desc">{item.desc}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </li>

                {/* Direct Links */}
                <li style={{ padding: '8px 12px' }}>
                  <Link href="/what-we-do" style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '14.5px', textDecoration: 'none' }}>
                    What We Do
                  </Link>
                </li>
                <li style={{ padding: '8px 12px' }}>
                  <Link href="/company-profile" style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '14.5px', textDecoration: 'none' }}>
                    Company Profile
                  </Link>
                </li>
                <li style={{ padding: '8px 12px' }}>
                  <Link href="/career" style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '14.5px', textDecoration: 'none' }}>
                    Careers
                  </Link>
                </li>
                <li style={{ padding: '8px 12px' }}>
                  <Link href="/blog" style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '14.5px', textDecoration: 'none' }}>
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Hamburger Trigger */}
            <div className="burger-icon burger-icon-white d-xl-none" onClick={onToggleMobileMenu} style={{ cursor: 'pointer' }}>
              <span className="burger-icon-top"></span>
              <span className="burger-icon-mid"></span>
              <span className="burger-icon-bottom"></span>
            </div>
          </div>

          {/* Right Area: Theme Toggle & Primary Button */}
          <div className="header-right d-none d-sm-flex align-items-center gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Primary Dark Blue CTA */}
            <Link 
              href="/contact-us" 
              className="btn-primary-brand"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
