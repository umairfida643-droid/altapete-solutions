import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  Sparkles,
  Menu,
  CheckCircle2,
  ExternalLink
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
      setIsSticky(window.scrollY > 25);
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
      text: "Mada, Jedia & Jisr Integration", 
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
      text: "Rental Solutions", 
      href: "/rental-solutions", 
      icon: Building, 
      desc: "Fleet, machinery & equipment rental lifecycle management" 
    },
    { 
      text: "Shipping Solutions", 
      href: "/shipping-solutions", 
      icon: Truck, 
      desc: "Freight forwarding, dispatch tracking & logistics billing" 
    },
    { 
      text: "Hotel Management", 
      href: "/hotel-management-solutions", 
      icon: Hotel, 
      desc: "PMS, room booking engine, housekeeping & guest folio" 
    },
    { 
      text: "Hospital Management", 
      href: "/hospital-management-solutions", 
      icon: Hospital, 
      desc: "EMR, clinic scheduling, pharmacy & bed management" 
    },
    { 
      text: "School Management", 
      href: "/school-management-solutions", 
      icon: GraduationCap, 
      desc: "LMS, admissions, fee management & academic gradebook" 
    },
    { 
      text: "Construction Management", 
      href: "/construction-management-solutions", 
      icon: HardHat, 
      desc: "Job costing, project billing, subcontractor & BOQ tracking" 
    }
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
        transition: 'background-color 0.3s ease, border-color 0.3s ease, padding 0.25s ease'
      }}
    >
      <div className="container" style={{ position: 'relative' }}>
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

          {/* Navigation Links */}
          <div className="header-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, margin: '0 16px' }}>
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

                {/* 4. What We Do */}
                <li>
                  <Link 
                    href="/what-we-do"
                    className={`nav-link-btn ${router.pathname === '/what-we-do' ? 'is-active' : ''}`}
                  >
                    What We Do
                  </Link>
                </li>

                {/* 5. Blog */}
                <li>
                  <Link 
                    href="/blog"
                    className={`nav-link-btn ${router.pathname.startsWith('/blog') ? 'is-active' : ''}`}
                  >
                    Blog
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
          <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
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
                background: 'var(--bg-card-subtle)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              <Menu size={20} />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
