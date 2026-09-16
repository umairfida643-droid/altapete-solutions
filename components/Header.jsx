import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header({ onToggleMobileMenu }) {
  const [isSticky, setIsSticky] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutionsData = {
    title: "Solutions",
    description: "At APS, we deliver transformative digital solutions that empower businesses to scale, adapt, and excel—driving operational efficiency through enterprise platforms, cloud services, and custom-built applications.",
    mainImage: "/assets/imgs/template/mm-img.png",
    sections: [
      {
        title: "Digital Transformation",
        image: "/assets/imgs/template/megamenuimg-1.png",
        items: [
          { text: "Enterprise Solutions", href: "/enterprise-solutions" },
          { text: "Technology Management Services", href: "/technology-management" },
          { text: "Custom Application Development", href: "/custom-app-development" }
        ]
      },
      {
        title: "Integration",
        image: "/assets/imgs/template/megamenuimg-2.png",
        items: [
          { text: "Zatca Integration", href: "/zatca-integration" },
          { text: "Odoo to Odoo", href: "/odoo-to-odoo-data-integration" },
          { text: "Salla Integration", href: "/salla-integration" },
          { text: "Shopify Integration", href: "/shopify-integration" },
          { text: "HR Muqeem Integration", href: "/hr-muqeem" },
          { text: "Other Integration (Mada-Jedia-Jisr)", href: "/mada-jedia-hr-jisr-integration" }
        ]
      }
    ]
  };

  return (
    <header id="header" className={`header sticky-bar bg-gray-900 ${isSticky ? 'stick' : ''}`}>
      <div className="container">
        <div className="main-header">
          <div className="header-logo">
            <Link href="/" className="logo-container">
              <img alt="Altapete Solutions" src="/assets/imgs/logo.png" className="logo-night" style={{ maxHeight: '42px', width: 'auto' }} />
              <img alt="Altapete Solutions" src="/assets/imgs/template/logo-day.svg" className="d-none logo-day" />
            </Link>
          </div>

          <div className="header-nav">
            <nav className="nav-main-menu d-none d-xl-block">
              <ul className="main-menu">
                {/* Mega Menu Trigger */}
                <li
                  className="has-children"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <Link href="/" className="active">
                    Solutions
                  </Link>
                </li>

                {/* Services Dropdown */}
                <li
                  className="has-children"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link href="/services" className="color-gray-500">
                    Services
                  </Link>
                  <ul className={`sub-menu two-col ${servicesOpen ? 'd-block' : ''}`}>
                    <li><Link href="/accounting-financial-advisory" className="color-gray-500">Accounting & Financial Advisory</Link></li>
                    <li><Link href="/corporate-advisory" className="color-gray-500">Corporate Advisory</Link></li>
                    <li><Link href="/taxation-zakat-advisory" className="color-gray-500">Taxation & ZAKAT Advisory</Link></li>
                    <li><Link href="/outsourcing-business-services" className="color-gray-500">Outsourcing & Business Services</Link></li>
                  </ul>
                </li>

                {/* Products Dropdown */}
                <li
                  className="has-children"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link href="/products" className="color-gray-500">
                    Products
                  </Link>
                  <ul className={`sub-menu two-col ${productsOpen ? 'd-block' : ''}`}>
                    <li><Link href="/rental-solutions" className="color-gray-500">Rental Solutions</Link></li>
                    <li><Link href="/shipping-solutions" className="color-gray-500">Shipping Solutions</Link></li>
                    <li><Link href="/hotel-management-solutions" className="color-gray-500">Hotel Management</Link></li>
                    <li><Link href="/hospital-management-solutions" className="color-gray-500">Hospital Management</Link></li>
                    <li><Link href="/school-management-solutions" className="color-gray-500">School Management</Link></li>
                    <li><Link href="/construction-management-solutions" className="color-gray-500">Construction Management</Link></li>
                  </ul>
                </li>

                <li><Link href="/what-we-do" className="color-gray-500">What We Do</Link></li>
                <li><Link href="/company-profile" className="color-gray-500">Company Profile</Link></li>
                <li><Link href="/career" className="color-gray-500">Careers</Link></li>
                <li><Link href="/blog" className="color-gray-500">Blog</Link></li>
              </ul>
            </nav>

            <div className="burger-icon burger-icon-white" onClick={onToggleMobileMenu}>
              <span className="burger-icon-top"></span>
              <span className="burger-icon-mid"></span>
              <span className="burger-icon-bottom"></span>
            </div>
          </div>

          {/* Solutions Mega Menu Overlay */}
          {megaMenuOpen && (
            <div
              className="megamenu position-absolute"
              style={{ top: '85%', left: 0, right: 0, zIndex: 1000, width: '100%' }}
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <div className="container">
                <div
                  className="submenu shadow-lg"
                  style={{
                    background: 'linear-gradient(51deg, rgba(255, 255, 255, 1) 0%, rgba(148, 199, 255, 1) 100%)',
                    borderRadius: '16px',
                    padding: '36px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <div className="row">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <div className="mm-content pe-3">
                        {solutionsData.mainImage && (
                          <div className="mm-img mb-3">
                            <img src={solutionsData.mainImage} alt={solutionsData.title} style={{ maxWidth: '100%', borderRadius: '8px' }} />
                          </div>
                        )}
                        <h3 style={{ color: '#0f172a', fontWeight: 700, fontSize: '22px', marginBottom: '10px' }}>{solutionsData.title}</h3>
                        <p style={{ color: '#334155', fontWeight: 400, fontSize: '14px', lineHeight: '24px' }}>
                          {solutionsData.description}
                        </p>
                      </div>
                    </div>

                    {solutionsData.sections.map((section, sIdx) => (
                      <div className="col-sm-4 mb-3 mb-sm-0" key={sIdx}>
                        <div className="menucontent d-flex">
                          {section.image && (
                            <div className="menuimg me-3">
                              <img src={section.image} alt={section.title} style={{ width: '40px', height: '40px' }} />
                            </div>
                          )}
                          <div className="content-menu">
                            <h4 style={{ color: '#0f172a', fontWeight: 700, fontSize: '18px', marginBottom: '14px' }}>{section.title}</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {section.items.map((item, iIdx) => (
                                <li key={iIdx} style={{ marginBottom: '10px' }}>
                                  <Link
                                    href={item.href}
                                    style={{
                                      color: '#1e293b',
                                      fontWeight: 500,
                                      fontSize: '15px',
                                      lineHeight: '22px',
                                      textDecoration: 'none',
                                      transition: 'all 0.2s ease-in-out',
                                      display: 'inline-block'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#0284c7'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = '#1e293b'; e.currentTarget.style.transform = 'translateX(0)'; }}
                                  >
                                    {item.text}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="header-right text-end">
            <Link className="btn btn-linear d-none d-sm-inline-block hover-up hover-shadow" href="/contact-us">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
