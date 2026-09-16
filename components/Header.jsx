import React, { useState, useEffect } from 'react';
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
  Layers,
  ArrowRight,
  Briefcase,
  Calculator,
  Scale,
  Building,
  Truck,
  Hotel,
  Hospital,
  GraduationCap,
  HardHat,
  Sparkles
} from 'lucide-react';

export default function Header({ onToggleMobileMenu }) {
  const [isSticky, setIsSticky] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <header 
      id="header" 
      className={`header sticky-bar ${isSticky ? 'stick' : ''}`}
      style={{
        backgroundColor: isSticky ? 'rgba(11, 10, 23, 0.95)' : 'rgba(11, 10, 23, 0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(44, 115, 217, 0.15)',
        transition: 'all 0.3s ease',
        zIndex: 999
      }}
    >
      <div className="container">
        <div className="main-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0' }}>
          {/* Brand Logo */}
          <div className="header-logo">
            <Link href="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img 
                alt="Altapete Solutions" 
                src="/assets/imgs/logo.png" 
                className="logo-night" 
                style={{ maxHeight: '44px', width: 'auto', filter: 'drop-shadow(0 2px 10px rgba(44, 115, 217, 0.2))' }} 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="header-nav">
            <nav className="nav-main-menu d-none d-xl-block">
              <ul className="main-menu" style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', margin: 0, padding: 0 }}>
                
                {/* 1. Solutions Mega Menu Trigger */}
                <li
                  className="has-children position-relative"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                  style={{ padding: '10px 14px' }}
                >
                  <Link 
                    href="/" 
                    className="active"
                    style={{
                      color: megaMenuOpen ? '#2c73d9' : '#ffffff',
                      fontWeight: 600,
                      fontSize: '15px',
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
                      className="megamenu-dropdown shadow-2xl"
                      style={{
                        position: 'fixed',
                        top: '72px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 'min(1180px, 94vw)',
                        background: 'linear-gradient(145deg, #13112a 0%, #0d0c1d 100%)',
                        border: '1px solid rgba(44, 115, 217, 0.35)',
                        borderRadius: '20px',
                        padding: '32px',
                        boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.85), 0 0 35px rgba(44, 115, 217, 0.2)',
                        backdropFilter: 'blur(20px)',
                        zIndex: 1000
                      }}
                      onMouseEnter={() => setMegaMenuOpen(true)}
                      onMouseLeave={() => setMegaMenuOpen(false)}
                    >
                      <div className="row g-4">
                        {/* Column 1: Main Highlight Card */}
                        <div className="col-lg-4">
                          <div 
                            style={{
                              background: 'linear-gradient(135deg, rgba(40, 36, 96, 0.7) 0%, rgba(19, 17, 42, 0.9) 100%)',
                              border: '1px solid rgba(44, 115, 217, 0.3)',
                              borderRadius: '16px',
                              padding: '24px',
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
                                  background: 'rgba(44, 115, 217, 0.15)',
                                  border: '1px solid rgba(44, 115, 217, 0.3)',
                                  color: '#2c73d9',
                                  fontSize: '12px',
                                  fontWeight: 600,
                                  textTransform: 'uppercase',
                                  marginBottom: '16px'
                                }}
                              >
                                <Sparkles size={12} /> Enterprise Suite
                              </div>
                              <h3 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
                                Solutions Overview
                              </h3>
                              <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                                At APS, we deliver transformative digital solutions that empower businesses to scale, adapt, and excel—driving operational efficiency through enterprise platforms, cloud services, and custom-built applications.
                              </p>
                            </div>
                            <div>
                              <Link 
                                href="/contact-us" 
                                className="btn btn-linear btn-sm d-inline-flex align-items-center gap-2"
                                style={{ padding: '10px 20px', fontSize: '13px' }}
                              >
                                Consult an Architect <ArrowRight size={14} />
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Column 2: Digital Transformation (With SVG Icons) */}
                        <div className="col-lg-4">
                          <div style={{ paddingLeft: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                              <div style={{ padding: '6px', borderRadius: '8px', background: 'rgba(44, 115, 217, 0.15)', color: '#2c73d9' }}>
                                <Layers size={18} />
                              </div>
                              <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                Digital Transformation
                              </h4>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                              {digitalTransformationServices.map((item, idx) => {
                                const IconComponent = item.icon;
                                return (
                                  <Link
                                    key={idx}
                                    href={item.href}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      gap: '14px',
                                      padding: '12px 14px',
                                      borderRadius: '12px',
                                      textDecoration: 'none',
                                      background: 'rgba(40, 36, 96, 0.2)',
                                      border: '1px solid rgba(44, 115, 217, 0.15)',
                                      transition: 'all 0.25s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.background = 'rgba(44, 115, 217, 0.18)';
                                      e.currentTarget.style.borderColor = 'rgba(44, 115, 217, 0.5)';
                                      e.currentTarget.style.transform = 'translateX(5px)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.background = 'rgba(40, 36, 96, 0.2)';
                                      e.currentTarget.style.borderColor = 'rgba(44, 115, 217, 0.15)';
                                      e.currentTarget.style.transform = 'translateX(0)';
                                    }}
                                  >
                                    <div 
                                      style={{
                                        padding: '8px',
                                        borderRadius: '10px',
                                        background: 'rgba(44, 115, 217, 0.15)',
                                        color: '#2c73d9',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                      }}
                                    >
                                      <IconComponent size={18} />
                                    </div>
                                    <div>
                                      <div style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600 }}>{item.text}</div>
                                      <div style={{ color: '#94a3b8', fontSize: '12px', marginTop: '2px' }}>{item.desc}</div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Column 3: Integration (With SVG Icons) */}
                        <div className="col-lg-4">
                          <div style={{ paddingLeft: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                              <div style={{ padding: '6px', borderRadius: '8px', background: 'rgba(44, 115, 217, 0.15)', color: '#2c73d9' }}>
                                <RefreshCw size={18} />
                              </div>
                              <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                Integration Ecosystem
                              </h4>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '340px', overflowY: 'auto' }}>
                              {integrationServices.map((item, idx) => {
                                const IconComponent = item.icon;
                                return (
                                  <Link
                                    key={idx}
                                    href={item.href}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '12px',
                                      padding: '9px 12px',
                                      borderRadius: '10px',
                                      textDecoration: 'none',
                                      background: 'rgba(40, 36, 96, 0.2)',
                                      border: '1px solid rgba(44, 115, 217, 0.12)',
                                      transition: 'all 0.25s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.background = 'rgba(44, 115, 217, 0.18)';
                                      e.currentTarget.style.borderColor = 'rgba(44, 115, 217, 0.5)';
                                      e.currentTarget.style.transform = 'translateX(4px)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.background = 'rgba(40, 36, 96, 0.2)';
                                      e.currentTarget.style.borderColor = 'rgba(44, 115, 217, 0.12)';
                                      e.currentTarget.style.transform = 'translateX(0)';
                                    }}
                                  >
                                    <div 
                                      style={{
                                        padding: '6px',
                                        borderRadius: '8px',
                                        background: 'rgba(44, 115, 217, 0.15)',
                                        color: '#2c73d9',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                      }}
                                    >
                                      <IconComponent size={16} />
                                    </div>
                                    <span style={{ color: '#e2e8f0', fontSize: '13.5px', fontWeight: 500 }}>
                                      {item.text}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </li>

                {/* 2. Services Dropdown */}
                <li
                  className="has-children position-relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  style={{ padding: '10px 14px' }}
                >
                  <Link 
                    href="/services" 
                    style={{
                      color: servicesOpen ? '#2c73d9' : '#cbd5e1',
                      fontWeight: 500,
                      fontSize: '15px',
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
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '320px',
                        background: 'linear-gradient(145deg, #13112a 0%, #0d0c1d 100%)',
                        border: '1px solid rgba(44, 115, 217, 0.3)',
                        borderRadius: '16px',
                        padding: '16px',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(44, 115, 217, 0.15)',
                        zIndex: 1000
                      }}
                    >
                      {[
                        { text: "Accounting & Financial Advisory", href: "/accounting-financial-advisory", icon: Calculator },
                        { text: "Corporate Advisory", href: "/corporate-advisory", icon: Briefcase },
                        { text: "Taxation & ZAKAT Advisory", href: "/taxation-zakat-advisory", icon: Scale },
                        { text: "Outsourcing & Business Services", href: "/outsourcing-business-services", icon: Building }
                      ].map((item, idx) => {
                        const ItemIcon = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              padding: '10px 12px',
                              borderRadius: '10px',
                              textDecoration: 'none',
                              color: '#e2e8f0',
                              fontSize: '14px',
                              fontWeight: 500,
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(44, 115, 217, 0.18)';
                              e.currentTarget.style.color = '#2c73d9';
                              e.currentTarget.style.transform = 'translateX(4px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = '#e2e8f0';
                              e.currentTarget.style.transform = 'translateX(0)';
                            }}
                          >
                            <div style={{ padding: '6px', borderRadius: '8px', background: 'rgba(44, 115, 217, 0.15)', color: '#2c73d9' }}>
                              <ItemIcon size={16} />
                            </div>
                            {item.text}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </li>

                {/* 3. Products Dropdown */}
                <li
                  className="has-children position-relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  style={{ padding: '10px 14px' }}
                >
                  <Link 
                    href="/products" 
                    style={{
                      color: productsOpen ? '#2c73d9' : '#cbd5e1',
                      fontWeight: 500,
                      fontSize: '15px',
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
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '320px',
                        background: 'linear-gradient(145deg, #13112a 0%, #0d0c1d 100%)',
                        border: '1px solid rgba(44, 115, 217, 0.3)',
                        borderRadius: '16px',
                        padding: '16px',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(44, 115, 217, 0.15)',
                        zIndex: 1000
                      }}
                    >
                      {[
                        { text: "Rental Solutions", href: "/rental-solutions", icon: Building },
                        { text: "Shipping Solutions", href: "/shipping-solutions", icon: Truck },
                        { text: "Hotel Management", href: "/hotel-management-solutions", icon: Hotel },
                        { text: "Hospital Management", href: "/hospital-management-solutions", icon: Hospital },
                        { text: "School Management", href: "/school-management-solutions", icon: GraduationCap },
                        { text: "Construction Management", href: "/construction-management-solutions", icon: HardHat }
                      ].map((item, idx) => {
                        const ItemIcon = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              padding: '10px 12px',
                              borderRadius: '10px',
                              textDecoration: 'none',
                              color: '#e2e8f0',
                              fontSize: '14px',
                              fontWeight: 500,
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(44, 115, 217, 0.18)';
                              e.currentTarget.style.color = '#2c73d9';
                              e.currentTarget.style.transform = 'translateX(4px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = '#e2e8f0';
                              e.currentTarget.style.transform = 'translateX(0)';
                            }}
                          >
                            <div style={{ padding: '6px', borderRadius: '8px', background: 'rgba(44, 115, 217, 0.15)', color: '#2c73d9' }}>
                              <ItemIcon size={16} />
                            </div>
                            {item.text}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </li>

                {/* Direct Links */}
                <li style={{ padding: '10px 14px' }}>
                  <Link href="/what-we-do" style={{ color: '#cbd5e1', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }}>
                    What We Do
                  </Link>
                </li>
                <li style={{ padding: '10px 14px' }}>
                  <Link href="/company-profile" style={{ color: '#cbd5e1', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }}>
                    Company Profile
                  </Link>
                </li>
                <li style={{ padding: '10px 14px' }}>
                  <Link href="/career" style={{ color: '#cbd5e1', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }}>
                    Careers
                  </Link>
                </li>
                <li style={{ padding: '10px 14px' }}>
                  <Link href="/blog" style={{ color: '#cbd5e1', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }}>
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

          {/* Right Action Button */}
          <div className="header-right d-none d-sm-block">
            <Link 
              href="/contact-us"
              className="btn btn-linear hover-up hover-shadow"
              style={{ padding: '12px 26px', fontSize: '14px', textTransform: 'uppercase' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
