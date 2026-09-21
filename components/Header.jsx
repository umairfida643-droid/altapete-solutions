import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '@/context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import TopAnnouncementBar from './TopAnnouncementBar';
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
  Sparkles,
  Menu,
  CheckCircle2,
  ExternalLink,
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

export default function Header({ onToggleMobileMenu }) {
  const { theme } = useTheme();
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  
  // Navigation active flyout states
  const [activeMenu, setActiveMenu] = useState(null); // 'solutions' | 'services' | 'products' | null
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky((prev) => {
        if (!prev && scrollY > 40) return true;
        if (prev && scrollY < 15) return false;
        return prev;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
  }, [router.asPath]);

  const handleMenuEnter = (menuType) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(menuType);
  };

  const handleMenuLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180); // 180ms graceful leave timeout
  };

  const handleKeyDown = (e, menuType) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveMenu(activeMenu === menuType ? null : menuType);
    } else if (e.key === 'Escape') {
      setActiveMenu(null);
    }
  };

  const logoSrc = theme === 'light' ? '/assets/imgs/logo-dark.png' : '/assets/imgs/logo.png';

  const digitalTransformationServices = [
    { 
      text: "Enterprise Solutions", 
      href: "/enterprise-solutions", 
      icon: Building2, 
      desc: "Scalable ERP, SAP & unified multi-company architectures" 
    },
    { 
      text: "Technology Management Services", 
      href: "/technology-management", 
      icon: Server, 
      desc: "Cloud infrastructure, DevOps, 24/7 DBA & cyber security" 
    },
    { 
      text: "Custom Application Development", 
      href: "/custom-app-development", 
      icon: Code2, 
      desc: "Bespoke SaaS platforms, client portals & mobile systems" 
    }
  ];

  const integrationServices = [
    { 
      text: "ZATCA Integration", 
      href: "/zatca-integration", 
      icon: ShieldCheck, 
      tag: "Phase 2", 
      desc: "Certified compliant e-invoicing API integration" 
    },
    { 
      text: "Odoo to Odoo Integration", 
      href: "/odoo-to-odoo-data-integration", 
      icon: RefreshCw, 
      tag: "Sync Engine", 
      desc: "Real-time cross-database automated data sync" 
    },
    { 
      text: "Salla Integration", 
      href: "/salla-integration", 
      icon: ShoppingBag, 
      tag: "E-Commerce", 
      desc: "Automated orders, inventory & billing ERP pipeline" 
    },
    { 
      text: "Shopify Integration", 
      href: "/shopify-integration", 
      icon: ShoppingCart, 
      tag: "Omnichannel", 
      desc: "Seamless multi-store ERP reconciliation" 
    },
    { 
      text: "HR Muqeem Integration", 
      href: "/hr-muqeem", 
      icon: Users, 
      tag: "Gov Portal", 
      desc: "Automated residency, visa & Saudi labor workflows" 
    },
    { 
      text: "Mada - Geidea - Jisr Integration", 
      href: "/mada-jedia-hr-jisr-integration", 
      icon: CreditCard, 
      tag: "Fintech/HR", 
      desc: "Payment POS terminals & payroll gateway sync" 
    }
  ];

  const servicesList = [
    { 
      text: "Accounting & Financial Advisory", 
      href: "/accounting-financial-advisory", 
      icon: Calculator, 
      desc: "Audit, compliance, valuation & strategic financial reporting" 
    },
    { 
      text: "Corporate Advisory", 
      href: "/corporate-advisory", 
      icon: Briefcase, 
      desc: "Strategic M&A, restructuring & executive business planning" 
    },
    { 
      text: "Taxation & ZAKAT Advisory", 
      href: "/taxation-zakat-advisory", 
      icon: Scale, 
      desc: "Zakat, Corporate Tax & VAT optimization & filing" 
    },
    { 
      text: "Outsourcing & Business Services", 
      href: "/outsourcing-business-services", 
      icon: Building, 
      desc: "Payroll outsourcing, bookkeeping & operational HR" 
    }
  ];

  const productsList = [
    { 
      text: "Hospital Management", 
      href: "/hospital-management-solutions", 
      icon: Hospital, 
      desc: "EMR, clinic scheduling, pharmacy & bed management" 
    },
    { 
      text: "Construction Management", 
      href: "/construction-management-solutions", 
      icon: HardHat, 
      desc: "Job costing, project billing, subcontractor & BOQ tracking" 
    },
    { 
      text: "Retail Management", 
      href: "/retail-management", 
      icon: ShoppingBag, 
      desc: "POS, inventory, loyalty programs & retail analytics" 
    },
    { 
      text: "Shipping Management", 
      href: "/shipping-solutions", 
      icon: Truck, 
      desc: "Freight forwarding, dispatch tracking & logistics billing" 
    },
    { 
      text: "Rental Management", 
      href: "/rental-solutions", 
      icon: Building, 
      desc: "Fleet, machinery & equipment rental lifecycle management" 
    },
    { 
      text: "Hotel Management", 
      href: "/hotel-management-solutions", 
      icon: Hotel, 
      desc: "PMS, room booking engine, housekeeping & guest folio" 
    },
    { 
      text: "School Management Solutions", 
      href: "/school-management-solutions", 
      icon: GraduationCap, 
      desc: "LMS, admissions, fee management & academic gradebook" 
    },
    { 
      text: "Safety Management", 
      href: "/safety-management", 
      icon: ShieldCheck, 
      desc: "Incident tracking, compliance, PPE & workplace safety" 
    }
  ];

  const industriesColumns = [
    [
      { name: "Oil & Gas", icon: Flame },
      { name: "Energy & Utilities", icon: Zap },
      { name: "Banking & Financial Services", icon: Landmark },
      { name: "Telecommunications", icon: Radio },
      { name: "Pharmaceuticals", icon: Pill },
      { name: "Textiles & Apparel", icon: Shirt },
      { name: "Printing & Publishing", icon: Printer }
    ],
    [
      { name: "Healthcare", icon: HeartPulse },
      { name: "Real Estate", icon: Building2 },
      { name: "Engineering", icon: Wrench },
      { name: "Automotive", icon: Car },
      { name: "Transportation", icon: Truck }
    ],
    [
      { name: "Hospitality", icon: UtensilsCrossed },
      { name: "Government & Public Sector", icon: Building },
      { name: "Professional Services", icon: Briefcase },
      { name: "Insurance", icon: ShieldCheck },
      { name: "Agriculture & Agribusiness", icon: Sprout }
    ],
    [
      { name: "Chemicals & Petrochemicals", icon: FlaskConical },
      { name: "Mining & Metals", icon: Pickaxe },
      { name: "Media & Entertainment", icon: Film },
      { name: "Travel & Tourism", icon: Plane },
      { name: "Non-Profit Organizations", icon: HeartHandshake }
    ]
  ];

  return (
    <header 
      id="header" 
      className={`header sticky-bar ${isSticky ? 'stick' : ''}`}
      style={{
        width: '100%',
        margin: 0,
        padding: 0,
        backgroundColor: 'var(--header-bg)',
        borderBottom: '1px solid var(--header-border)',
        boxShadow: isSticky ? '0 8px 24px rgba(0, 0, 0, 0.2)' : 'none',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.25s ease'
      }}
    >
      <TopAnnouncementBar />
      <div 
        className="container header-container" 
        style={{ 
          position: 'relative',
          width: '100%',
          maxWidth: '1280px'
        }}
      >
        <div 
          className="main-header" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            width: '100%',
            padding: '12px 0'
          }}
        >
          {/* Logo */}
          <div className="header-logo" style={{ flexShrink: 0 }}>
            <Link href="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img 
                alt="Altapete Solutions" 
                src={logoSrc} 
                style={{ 
                  height: '38px', 
                  width: 'auto',
                  maxWidth: '220px',
                  objectFit: 'contain',
                  transition: 'opacity 0.2s ease'
                }} 
              />
            </Link>
          </div>

          {/* Navigation Links: desktop only */}
          <div className="header-nav d-none d-xl-flex" style={{ alignItems: 'center', justifyContent: 'center', flex: 1, margin: '0 16px' }}>
            <nav className="nav-main-menu d-none d-xl-block">
              <ul className="main-menu" style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: 0, padding: 0, listStyle: 'none' }}>
                
                {/* 1. Solutions Mega Menu Trigger */}
                <li
                  className="nav-item-dropdown"
                  onMouseEnter={() => handleMenuEnter('solutions')}
                  onMouseLeave={handleMenuLeave}
                >
                  <button 
                    type="button"
                    onClick={() => setActiveMenu(activeMenu === 'solutions' ? null : 'solutions')}
                    onKeyDown={(e) => handleKeyDown(e, 'solutions')}
                    aria-expanded={activeMenu === 'solutions'}
                    aria-haspopup="true"
                    className={`nav-link-btn ${activeMenu === 'solutions' ? 'is-active' : ''}`}
                  >
                    <span>Solutions</span>
                    <ChevronDown size={14} className="nav-arrow-icon" style={{ transform: activeMenu === 'solutions' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>

                  {/* Mega Menu Flyout */}
                  <div
                    className={`megamenu-panel ${activeMenu === 'solutions' ? 'is-open' : ''}`}
                    onMouseEnter={() => handleMenuEnter('solutions')}
                    onMouseLeave={handleMenuLeave}
                    role="region"
                    aria-label="Solutions Navigation"
                  >
                    <div className="row g-4">
                      
                      {/* Column 1: Featured Overview & Architecture Support */}
                      <div className="col-lg-4">
                        <div className="megamenu-overview-card h-100 d-flex flex-column justify-content-between">
                          <div>
                            <div className="megamenu-chip mb-3">
                              <Sparkles size={13} /> ENTERPRISE SOLUTIONS HUB
                            </div>
                            <h3 className="megamenu-heading mb-2">
                              Next-Gen Technology Architecture
                            </h3>
                            <p className="megamenu-lead mb-4">
                              Empowering businesses across Saudi Arabia, UAE, and Pakistan with robust ERP implementations, seamless API integrations, and cloud architectures designed for operational resilience.
                            </p>

                            <div className="megamenu-key-points">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <CheckCircle2 size={15} color="var(--brand-accent)" />
                                <span>ZATCA Phase 2 E-Invoicing Compliant</span>
                              </div>
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <CheckCircle2 size={15} color="var(--brand-accent)" />
                                <span>Certified Odoo & SAP Functional Experts</span>
                              </div>
                              <div className="d-flex align-items-center gap-2">
                                <CheckCircle2 size={15} color="var(--brand-accent)" />
                                <span>Sub-second Multi-Database Synchronization</span>
                              </div>
                            </div>
                          </div>

                          <div className="pt-4 border-top" style={{ borderColor: 'var(--border-color)' }}>
                            <Link 
                              href="/contact-us"
                              className="btn-primary-brand w-100 text-center"
                              style={{ padding: '10px 18px', fontSize: '13.5px' }}
                            >
                              Consult an Enterprise Architect <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Column 2: Digital Transformation */}
                      <div className="col-lg-4">
                        <div className="megamenu-column-header mb-3">
                          <div className="megamenu-header-icon">
                            <Layers size={16} />
                          </div>
                          <h4>Digital Transformation</h4>
                        </div>

                        <div className="d-flex flex-column gap-2">
                          {digitalTransformationServices.map((item, idx) => {
                            const ItemIcon = item.icon;
                            return (
                              <Link
                                key={idx}
                                href={item.href}
                                className="megamenu-item-card"
                              >
                                <div className="megamenu-item-icon">
                                  <ItemIcon size={18} strokeWidth={1.8} />
                                </div>
                                <div className="megamenu-item-content">
                                  <div className="megamenu-item-title">{item.text}</div>
                                  <div className="megamenu-item-desc">{item.desc}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-3 pt-3 border-top" style={{ borderColor: 'var(--border-color)' }}>
                          <Link 
                            href="/services" 
                            className="megamenu-viewall-link"
                          >
                            Explore All Services & Advisory <ArrowRight size={13} />
                          </Link>
                        </div>
                      </div>

                      {/* Column 3: Integration Ecosystem */}
                      <div className="col-lg-4">
                        <div className="megamenu-column-header mb-3">
                          <div className="megamenu-header-icon">
                            <RefreshCw size={16} />
                          </div>
                          <h4>Integration Ecosystem</h4>
                        </div>

                        <div className="d-flex flex-column gap-2">
                          {integrationServices.map((item, idx) => {
                            const ItemIcon = item.icon;
                            return (
                              <Link
                                key={idx}
                                href={item.href}
                                className="megamenu-item-card"
                              >
                                <div className="megamenu-item-icon">
                                  <ItemIcon size={17} strokeWidth={1.8} />
                                </div>
                                <div className="megamenu-item-content">
                                  <div className="d-flex align-items-center justify-content-between gap-1">
                                    <span className="megamenu-item-title">{item.text}</span>
                                    <span className="megamenu-badge-tag">{item.tag}</span>
                                  </div>
                                  <div className="megamenu-item-desc">{item.desc}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  </div>
                </li>

                {/* 2. Services Dropdown */}
                <li
                  className="nav-item-dropdown"
                  onMouseEnter={() => handleMenuEnter('services')}
                  onMouseLeave={handleMenuLeave}
                >
                  <button 
                    type="button"
                    onClick={() => setActiveMenu(activeMenu === 'services' ? null : 'services')}
                    onKeyDown={(e) => handleKeyDown(e, 'services')}
                    aria-expanded={activeMenu === 'services'}
                    aria-haspopup="true"
                    className={`nav-link-btn ${activeMenu === 'services' ? 'is-active' : ''}`}
                  >
                    <span>Services</span>
                    <ChevronDown size={14} className="nav-arrow-icon" style={{ transform: activeMenu === 'services' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>

                  <div 
                    className={`dropdown-panel ${activeMenu === 'services' ? 'is-open' : ''}`}
                    onMouseEnter={() => handleMenuEnter('services')}
                    onMouseLeave={handleMenuLeave}
                  >
                    <div className="dropdown-panel-inner">
                      {servicesList.map((item, idx) => {
                        const ItemIcon = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            className="dropdown-item-row"
                          >
                            <div className="dropdown-icon-box">
                              <ItemIcon size={18} strokeWidth={1.9} />
                            </div>
                            <div className="dropdown-text-box">
                              <span className="dropdown-item-heading">{item.text}</span>
                              <span className="dropdown-item-sub">{item.desc}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </li>

                {/* 3. Products Dropdown */}
                <li
                  className="nav-item-dropdown"
                  onMouseEnter={() => handleMenuEnter('products')}
                  onMouseLeave={handleMenuLeave}
                >
                  <button 
                    type="button"
                    onClick={() => setActiveMenu(activeMenu === 'products' ? null : 'products')}
                    onKeyDown={(e) => handleKeyDown(e, 'products')}
                    aria-expanded={activeMenu === 'products'}
                    aria-haspopup="true"
                    className={`nav-link-btn ${activeMenu === 'products' ? 'is-active' : ''}`}
                  >
                    <span>Products</span>
                    <ChevronDown size={14} className="nav-arrow-icon" style={{ transform: activeMenu === 'products' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>

                  <div 
                    className={`dropdown-panel ${activeMenu === 'products' ? 'is-open' : ''}`}
                    onMouseEnter={() => handleMenuEnter('products')}
                    onMouseLeave={handleMenuLeave}
                  >
                    <div className="dropdown-panel-inner">
                      {productsList.map((item, idx) => {
                        const ItemIcon = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            className="dropdown-item-row"
                          >
                            <div className="dropdown-icon-box">
                              <ItemIcon size={18} strokeWidth={1.9} />
                            </div>
                            <div className="dropdown-text-box">
                              <span className="dropdown-item-heading">{item.text}</span>
                              <span className="dropdown-item-sub">{item.desc}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </li>

                {/* 4. Industries Mega Menu (Non-clickable items with SVG icons) */}
                <li
                  className="nav-item-dropdown"
                  onMouseEnter={() => handleMenuEnter('industries')}
                  onMouseLeave={handleMenuLeave}
                >
                  <button 
                    type="button"
                    onClick={() => setActiveMenu(activeMenu === 'industries' ? null : 'industries')}
                    onKeyDown={(e) => handleKeyDown(e, 'industries')}
                    aria-expanded={activeMenu === 'industries'}
                    aria-haspopup="true"
                    className={`nav-link-btn ${activeMenu === 'industries' ? 'is-active' : ''}`}
                  >
                    <span>Industries</span>
                    <ChevronDown size={14} className="nav-arrow-icon" style={{ transform: activeMenu === 'industries' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>

                  <div
                    className={`megamenu-panel ${activeMenu === 'industries' ? 'is-open' : ''}`}
                    onMouseEnter={() => handleMenuEnter('industries')}
                    onMouseLeave={handleMenuLeave}
                    role="region"
                    aria-label="Industries Navigation"
                    style={{
                      maxWidth: '1120px',
                      width: 'min(1120px, 95vw)'
                    }}
                  >
                    {/* Top Header Bar */}
                    <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom" style={{ borderColor: 'var(--border-color)' }}>
                      <div className="d-flex align-items-center gap-3">
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          background: 'rgba(44, 115, 217, 0.12)',
                          border: '1px solid rgba(44, 115, 217, 0.25)',
                          color: 'var(--brand-accent)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Building2 size={18} />
                        </div>
                        <div>
                          <h3 style={{ fontSize: '15px', fontWeight: 700, margin: 0, color: 'var(--heading-color)', letterSpacing: '0.2px' }}>
                            Industries We Empower
                          </h3>
                          <p style={{ fontSize: '12px', margin: 0, color: 'var(--text-muted)' }}>
                            Purpose-built ERP architectures and regulatory workflows tailored for specialized enterprise verticals.
                          </p>
                        </div>
                      </div>
                      <div className="d-none d-md-flex align-items-center gap-2">
                        <span style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '4px 12px',
                          borderRadius: '20px',
                          background: 'rgba(44, 115, 217, 0.1)',
                          border: '1px solid rgba(44, 115, 217, 0.25)',
                          color: 'var(--brand-accent)',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase'
                        }}>
                          22 Core Verticals
                        </span>
                      </div>
                    </div>

                    {/* 4-Column Grid: Exact match to user specification */}
                    <div className="row g-3">
                      {industriesColumns.map((col, colIdx) => (
                        <div key={colIdx} className="col-lg-3 col-md-6 col-12">
                          <div className="d-flex flex-column gap-2">
                            {col.map((item, itemIdx) => {
                              const ItemIcon = item.icon;
                              return (
                                <div
                                  key={itemIdx}
                                  className="industry-menu-item"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '11px',
                                    padding: '8px 10px',
                                    borderRadius: '10px',
                                    background: 'var(--bg-card-subtle)',
                                    border: '1px solid var(--border-color)',
                                    cursor: 'default',
                                    userSelect: 'none',
                                    transition: 'all 0.2s ease'
                                  }}
                                >
                                  <div 
                                    className="industry-menu-icon-box"
                                    style={{
                                      width: '32px',
                                      height: '32px',
                                      borderRadius: '8px',
                                      background: 'rgba(44, 115, 217, 0.12)',
                                      border: '1px solid rgba(44, 115, 217, 0.25)',
                                      color: 'var(--brand-accent)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      flexShrink: 0,
                                      transition: 'all 0.2s ease'
                                    }}
                                  >
                                    <ItemIcon size={16} strokeWidth={1.9} />
                                  </div>
                                  <span 
                                    className="industry-menu-title"
                                    style={{
                                      fontSize: '12.5px',
                                      fontWeight: 600,
                                      color: 'var(--heading-color)',
                                      lineHeight: '1.3'
                                    }}
                                  >
                                    {item.name}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>

                {/* 5. What We Do */}
                <li>
                  <Link 
                    href="/what-we-do"
                    className={`nav-link-btn ${router.pathname === '/what-we-do' ? 'is-active' : ''}`}
                  >
                    What We Do
                  </Link>
                </li>

                {/* 6. Company Profile */}
                <li>
                  <Link 
                    href="/company-profile"
                    className={`nav-link-btn ${router.pathname === '/company-profile' ? 'is-active' : ''}`}
                  >
                    Company Profile
                  </Link>
                </li>

              </ul>
            </nav>
          </div>

          {/* Right Header Controls: Theme Toggle & Contact Us CTA */}
          <div 
            className="header-right" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              flexShrink: 0,
              marginLeft: 'auto'
            }}
          >
            {/* Dark / Light Theme Toggle */}
            <ThemeToggle />

            {/* Desktop Contact CTA */}
            <div className="d-none d-sm-block">
              <Link 
                href="/contact-us"
                className="btn-primary-brand"
                style={{ padding: '9px 20px', fontSize: '13.5px' }}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="d-xl-none hamburger-btn"
              onClick={onToggleMobileMenu}
              aria-label="Toggle Mobile Navigation Menu"
              style={{
                background: 'var(--toggle-bg)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                borderRadius: '10px',
                width: '38px',
                height: '38px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                padding: 0,
                transition: 'all 0.2s ease'
              }}
            >
              <Menu size={20} />
            </button>
          </div>

        </div>
      </div>

      <style jsx>{`
        .industry-menu-item:hover {
          background: var(--bg-card) !important;
          border-color: rgba(44, 115, 217, 0.4) !important;
          transform: translateY(-1px);
        }
        .industry-menu-item:hover .industry-menu-icon-box {
          background: rgba(44, 115, 217, 0.22) !important;
          border-color: rgba(44, 115, 217, 0.45) !important;
          color: var(--brand-accent) !important;
        }
        .industry-menu-item:hover .industry-menu-title {
          color: var(--brand-accent) !important;
        }
      `}</style>
    </header>
  );
}
