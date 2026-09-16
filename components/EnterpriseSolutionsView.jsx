import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

// --- Authentic Vector Logos ---
export function BrandLogo({ name, isDark = true, size = 26 }) {
  switch (name) {
    case 'oracle-fusion':
      // Oracle Cloud / Fusion Logo
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="7" width="28" height="18" rx="9" stroke={isDark ? "#FFFFFF" : "#EA1B22"} strokeWidth="3" fill="none" />
          <path d="M11 16h10" stroke={isDark ? "#00AEEF" : "#EA1B22"} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="16" cy="16" r="3" fill={isDark ? "#00AEEF" : "#EA1B22"} />
        </svg>
      );

    case 'oracle-ebs':
      // Oracle E-Business Suite (EBS Enterprise Stack)
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="26" height="6.5" rx="2" fill={isDark ? "#38BDF8" : "#EA1B22"} opacity="0.9" />
          <rect x="3" y="13" width="26" height="6.5" rx="2" fill={isDark ? "#00AEEF" : "#C74634"} />
          <rect x="3" y="21" width="26" height="6.5" rx="2" fill={isDark ? "#0284C7" : "#8F1D1D"} opacity="0.9" />
          <circle cx="23" cy="8.25" r="1.5" fill="#ffffff" />
          <circle cx="23" cy="16.25" r="1.5" fill="#ffffff" />
          <circle cx="23" cy="24.25" r="1.5" fill="#ffffff" />
        </svg>
      );

    case 'netsuite':
      // Oracle NetSuite Official Geometric N Logo
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 5h10v11h-5v5h-5V5z" fill={isDark ? "#38BDF8" : "#0074BD"} />
          <path d="M5 11h5v5h5v11H5V11z" fill={isDark ? "#FFFFFF" : "#1A365D"} />
          <path d="M10 11h7v10h-7V11z" fill={isDark ? "#7DD3FC" : "#005A9C"} opacity="0.8" />
        </svg>
      );

    case 'odoo':
      // Official Odoo Logo
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
          <path
            fill={isDark ? "#FFFFFF" : "#714B67"}
            d="M21.1002 15.7957c-1.6015 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2979 2.8998-2.8998 2.8998zm0-1.2c.9388.0006 1.7003-.7601 1.7008-1.6989.0004-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zm-6.0655 1.2c-1.6014 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2999 2.8998-2.8998 2.8998zm0-1.2c.9389.0006 1.7003-.7601 1.7008-1.6989.0005-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zM11.865 12.858c0 1.6199-1.2979 2.9378-2.8977 2.9378s-2.8998-1.314-2.8998-2.9358 1.1799-2.8597 2.8998-2.8597c.6359 0 1.2239.134 1.6998.484v-1.68a.6.6 0 0 1 1.2 0v4.0537h-.002zm-2.8977 1.7399c.9388.0005 1.7002-.7602 1.7007-1.699.0005-.9388-.7602-1.7003-1.699-1.7007h-.0017c-.9389.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699zm-6.0675 1.1979C1.2983 15.7957 0 14.4974 0 12.8959s1.2983-2.8997 2.8998-2.8997 2.8997 1.2982 2.8997 2.8997c0 1.5999-1.2999 2.8998-2.8997 2.8998zm0-1.2c.9388.0006 1.7002-.7601 1.7007-1.699.0005-.9387-.7602-1.7002-1.699-1.7006h-.0017c-.9388.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699z"
          />
        </svg>
      );

    case 'sap-erp':
      // Official SAP Blue Trapezoid Logo
      return (
        <svg viewBox="0 0 412.38 204" width={size} height={size * 0.55} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`sap-grad-${isDark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? "#00AEEF" : "#00b1eb"} />
              <stop offset="50%" stopColor={isDark ? "#0088C7" : "#007fc4"} />
              <stop offset="100%" stopColor={isDark ? "#0069B4" : "#0069b4"} />
            </linearGradient>
          </defs>
          <polyline points="0 204 208.413 204 412.38 0 0 0 0 204" fill={`url(#sap-grad-${isDark ? 'dark' : 'light'})`} />
          <path
            fill="#ffffff"
            d="m244.727,38.359l-40.593-.025v96.518l-35.46-96.518h-35.16l-30.277,80.716c-3.224-20.352-24.277-27.38-40.84-32.649-10.937-3.512-22.541-8.678-22.434-14.387.091-4.687,6.225-9.04,18.377-8.385,8.17.433,15.373,1.092,29.71,8.006l14.102-24.557c-13.088-6.658-31.169-10.867-45.985-10.883h-.086c-17.277,0-31.677,5.598-40.602,14.824-6.221,6.443-9.572,14.626-9.712,23.679-.227,12.454,4.341,21.292,13.938,28.338,8.104,5.944,18.468,9.794,27.603,12.626,11.27,3.492,20.467,6.526,20.36,13.002-.083,2.355-.977,4.552-2.671,6.337-2.807,2.897-7.124,3.986-13.084,4.098-11.497.243-20.026-1.559-33.61-9.585l-12.536,24.903c13.546,7.705,29.586,12.223,45.952,12.223l2.106-.024c14.247-.256,25.745-4.316,34.929-11.712.527-.416,1.001-.845,1.488-1.277l-4.073,10.874h36.875l6.189-18.822c6.477,2.214,13.847,3.437,21.676,3.437,7.618,0,14.795-1.17,21.156-3.252l5.965,18.637h60.137v-38.969h13.113c31.706,0,50.456-16.147,50.456-43.202,0-30.139-18.219-43.969-57.011-43.969Zm-93.816,82.587c-4.737,0-9.177-.828-13.006-2.275l12.866-40.593h.244l12.643,40.708c-3.801,1.349-8.138,2.16-12.746,2.16Zm96.199-23.324h-8.941v-32.711h8.941c11.927,0,21.437,3.961,21.437,16.139,0,12.602-9.51,16.572-21.437,16.572"
          />
        </svg>
      );

    case 'microsoft':
      // Official Microsoft 4-Square Logo
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" rx="1" />
          <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" rx="1" />
          <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" rx="1" />
          <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" rx="1" />
        </svg>
      );

    default:
      return null;
  }
}

// --- Services Data ---
const ENTERPRISE_SERVICES = [
  {
    id: 'oracle-fusion',
    title: 'Oracle Fusion',
    subtitle: 'Cloud Applications',
    clients: '5+',
    desc: 'Oracle Fusion Cloud Applications implementation and optimization for modern, integrated business processes across all enterprise functions — from finance to HR to supply chain.',
    features: [
      'Cloud Implementation',
      'Data Migration',
      'Integration Services',
      'Performance Optimization'
    ],
    metric: '65% faster business processes',
    deliverables: ['Fusion Setup', 'Integration Framework', 'Performance Reports'],
    orbitAngle: 0,
    color: '#00AEEF'
  },
  {
    id: 'oracle-ebs',
    title: 'Oracle E-Business Suite',
    subtitle: 'Enterprise ERP Solution',
    clients: '5+',
    desc: 'Comprehensive Oracle EBS implementation, upgrade, and maintenance services for robust enterprise resource planning and management across complex organizational structures.',
    features: [
      'EBS Implementation',
      'System Upgrades',
      'Performance Tuning',
      'Custom Development'
    ],
    metric: '45% reduction in operational costs',
    deliverables: ['EBS Configuration', 'Custom Reports', 'Maintenance Plan'],
    orbitAngle: 60,
    color: '#00C6FF'
  },
  {
    id: 'netsuite',
    title: 'NetSuite',
    subtitle: 'Cloud ERP Business Suite',
    clients: '5+',
    desc: 'Oracle NetSuite is a leading cloud-based business management platform that provides integrated solutions for finance, ERP, CRM, inventory, and eCommerce—all in a single unified system.',
    features: [
      'Full NetSuite Implementation',
      'Module Customization',
      'SuiteScript & API Integration',
      'User Training & Ongoing Support'
    ],
    metric: 'Up to 60% improvement in operational efficiency',
    deliverables: ['System Implementation', 'Custom Workflows & Modules', 'User Training & Documentation'],
    orbitAngle: 120,
    color: '#00E5FF'
  },
  {
    id: 'odoo',
    title: 'Odoo',
    subtitle: 'All-in-One ERP',
    clients: '55+',
    desc: 'Complete Odoo implementation and customization services for comprehensive business management including CRM, inventory, accounting, manufacturing, and more in one platform.',
    features: [
      'Full Implementation',
      'Custom Modules',
      'Third-party Integration',
      'Training & Support'
    ],
    metric: '50% improvement in operational efficiency',
    deliverables: ['Configured System', 'Custom Modules', 'User Training'],
    orbitAngle: 180,
    color: '#38BDF8'
  },
  {
    id: 'sap-erp',
    title: 'SAP ERP',
    subtitle: 'Enterprise Resource Planning',
    clients: '5+',
    desc: 'End-to-end SAP ERP implementation and consulting services for fully integrated business processes, real-time reporting, and intelligent operational insights at enterprise scale.',
    features: [
      'S/4HANA Implementation',
      'Legacy Migration',
      'Custom Development',
      'Support Services'
    ],
    metric: '70% improvement in process efficiency',
    deliverables: ['SAP Configuration', 'Migration Plan', 'Training Program'],
    orbitAngle: 240,
    color: '#00B8D9'
  },
  {
    id: 'microsoft',
    title: 'Microsoft',
    subtitle: 'Microsoft Ecosystem Solutions',
    clients: '5+',
    desc: 'Full-spectrum Microsoft solutions including Dynamics 365, Azure, Power Platform, and Microsoft 365 — enabling digital transformation across your entire enterprise stack.',
    features: [
      'Dynamics 365',
      'Azure Cloud',
      'Power Platform',
      'Microsoft 365'
    ],
    metric: '60% improvement in collaboration efficiency',
    deliverables: ['Platform Setup', 'Power BI Reports', 'Azure Architecture'],
    orbitAngle: 300,
    color: '#29B6F6'
  }
];

export default function EnterpriseSolutionsView() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState('oracle-fusion');
  const cardRefs = useRef({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted ? true : theme === 'dark';

  const handleSelectService = (id, shouldScroll = true) => {
    setActiveServiceId(id);
    if (shouldScroll) {
      const target = document.getElementById(`service-card-${id}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const ORBIT_RADIUS = 136;

  return (
    <div className="enterprise-solutions-wrapper" style={{ minHeight: '100vh', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
      
      {/* ── HERO SECTION WITH ORBIT COCKPIT ── */}
      <div className="cover-home1" style={{ position: 'relative', overflow: 'visible', paddingTop: '40px', paddingBottom: '50px' }}>
        <div className="container">
          <div className="row align-items-center">
            
            {/* Left Column: Heading, Description & Interactive Navigation Pills */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div style={{ marginBottom: '16px' }}>
                <h5 style={{
                  color: isDark ? '#00AEEF' : '#1e40af',
                  fontSize: '13px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '2.5px',
                  position: 'relative',
                  paddingBottom: '8px',
                  display: 'inline-block'
                }}>
                  Digital Transformation Excellence
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '60px',
                    height: '2.5px',
                    background: isDark ? 'linear-gradient(90deg, #00AEEF, #0088C7)' : 'linear-gradient(90deg, #2c73d9, #1d4ed8)',
                    borderRadius: '2px'
                  }}></div>
                </h5>
              </div>

              <h1 style={{
                color: isDark ? '#FFFFFF' : '#0f172a',
                fontSize: 'clamp(28px, 4.5vw, 48px)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '18px'
              }}>
                Enterprise <span style={{ color: isDark ? '#00AEEF' : '#2c73d9' }}>Solutions</span>
              </h1>

              <p style={{
                fontSize: 'clamp(15px, 1.8vw, 17px)',
                color: isDark ? '#B0C4D8' : '#475569',
                lineHeight: 1.65,
                marginBottom: '26px',
                maxWidth: '520px'
              }}>
                Transform your enterprise with our comprehensive{' '}
                <strong style={{ color: isDark ? '#00AEEF' : '#2c73d9' }}>digital solutions</strong>.
                We deliver scalable, secure, and intelligent enterprise systems tailored to your workflows.
              </p>

              {/* 6 Interactive Pills with Official Logos */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                {ENTERPRISE_SERVICES.map((s) => {
                  const isActive = activeServiceId === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => handleSelectService(s.id, true)}
                      type="button"
                      style={{
                        background: isActive
                          ? (isDark ? 'rgba(0, 174, 239, 0.22)' : 'rgba(44, 115, 217, 0.15)')
                          : (isDark ? 'rgba(255, 255, 255, 0.04)' : '#ffffff'),
                        border: isActive
                          ? `1.5px solid ${isDark ? '#00AEEF' : '#2c73d9'}`
                          : (isDark ? '1px solid rgba(0, 174, 239, 0.22)' : '1px solid rgba(40, 36, 96, 0.16)'),
                        borderRadius: '24px',
                        padding: '7px 15px',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        color: isActive
                          ? (isDark ? '#ffffff' : '#1e40af')
                          : (isDark ? '#cbd5e1' : '#334155'),
                        cursor: 'pointer',
                        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: isActive
                          ? (isDark ? '0 0 16px rgba(0, 174, 239, 0.35)' : '0 4px 14px rgba(44, 115, 217, 0.2)')
                          : (isDark ? 'none' : '0 2px 6px rgba(0,0,0,0.04)'),
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transform: isActive ? 'translateY(-2px)' : 'none'
                      }}
                    >
                      <BrandLogo name={s.id} isDark={isDark} size={18} />
                      <span>{s.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Orbit Animation Cockpit (Completely unclipped, no cutting cards!) */}
            <div className="col-lg-6">
              <div
                className="orbit-cockpit-stage"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '460px',
                  height: '420px',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'visible'
                }}
              >
                {/* Concentric Ambient Rings */}
                <div
                  style={{
                    position: 'absolute',
                    width: '240px',
                    height: '240px',
                    borderRadius: '50%',
                    border: isDark ? '1.5px dashed rgba(0, 174, 239, 0.25)' : '1.5px dashed rgba(44, 115, 217, 0.22)',
                    pointerEvents: 'none',
                    animation: 'spinClockwise 45s linear infinite'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    border: isDark ? '1px dashed rgba(0, 174, 239, 0.15)' : '1px dashed rgba(44, 115, 217, 0.15)',
                    pointerEvents: 'none',
                    animation: 'spinCounterClockwise 65s linear infinite'
                  }}
                />

                {/* SVG Connecting Conduits from Center Hub to Satellite Cards */}
                <svg
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                    pointerEvents: 'none',
                    overflow: 'visible'
                  }}
                >
                  <defs>
                    <linearGradient id="orbitConduitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={isDark ? "rgba(0,174,239,0.7)" : "rgba(44,115,217,0.7)"} />
                      <stop offset="100%" stopColor={isDark ? "rgba(0,174,239,0.1)" : "rgba(44,115,217,0.1)"} />
                    </linearGradient>
                  </defs>
                  {ENTERPRISE_SERVICES.map((s) => {
                    const rad = (s.orbitAngle * Math.PI) / 180;
                    const endX = 230 + ORBIT_RADIUS * Math.cos(rad);
                    const endY = 210 + ORBIT_RADIUS * Math.sin(rad);
                    const isActive = activeServiceId === s.id;

                    return (
                      <line
                        key={`conduit-${s.id}`}
                        x1="230"
                        y1="210"
                        x2={endX}
                        y2={endY}
                        stroke={isActive ? (isDark ? '#00AEEF' : '#2c73d9') : 'url(#orbitConduitGrad)'}
                        strokeWidth={isActive ? '2.5' : '1.2'}
                        opacity={isActive ? 1 : 0.4}
                        strokeDasharray={isActive ? 'none' : '4 4'}
                        style={{
                          transition: 'all 0.35s ease',
                          filter: isActive ? (isDark ? 'drop-shadow(0 0 6px #00AEEF)' : 'drop-shadow(0 0 4px #2c73d9)') : 'none'
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Center Hub: ERP HUB */}
                <div
                  style={{
                    position: 'absolute',
                    width: '96px',
                    height: '96px',
                    background: isDark
                      ? 'linear-gradient(135deg, #0d1a2a, #102030)'
                      : 'linear-gradient(135deg, #ffffff, #f0f7ff)',
                    borderRadius: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isDark
                      ? '0 0 40px rgba(0, 174, 239, 0.45)'
                      : '0 10px 30px rgba(44, 115, 217, 0.2)',
                    zIndex: 10,
                    border: isDark ? '3px solid #00AEEF' : '3px solid #2c73d9',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    gap: '2px',
                    cursor: 'default'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDark ? '#00AEEF' : '#2c73d9'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  <div style={{
                    fontSize: '10px',
                    color: isDark ? '#00AEEF' : '#2c73d9',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    ERP HUB
                  </div>
                </div>

                {/* 6 Satellite Orbit Cards (No clipping, completely within safe radius!) */}
                {ENTERPRISE_SERVICES.map((s) => {
                  const rad = (s.orbitAngle * Math.PI) / 180;
                  const x = ORBIT_RADIUS * Math.cos(rad);
                  const y = ORBIT_RADIUS * Math.sin(rad);
                  const isActive = activeServiceId === s.id;

                  return (
                    <div
                      key={`satellite-${s.id}`}
                      onClick={() => handleSelectService(s.id, true)}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isActive ? 1.08 : 1})`,
                        width: '84px',
                        height: '78px',
                        background: isActive
                          ? (isDark ? 'linear-gradient(135deg, #00AEEF, #0088C7)' : 'linear-gradient(135deg, #2c73d9, #1d4ed8)')
                          : (isDark ? 'rgba(18, 25, 46, 0.92)' : '#ffffff'),
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: isActive
                          ? `2px solid ${isDark ? '#00AEEF' : '#2c73d9'}`
                          : (isDark ? '1px solid rgba(0, 174, 239, 0.28)' : '1px solid rgba(40, 36, 96, 0.14)'),
                        borderRadius: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                        zIndex: isActive ? 12 : 6,
                        boxShadow: isActive
                          ? (isDark ? '0 12px 28px rgba(0, 174, 239, 0.6)' : '0 12px 28px rgba(44, 115, 217, 0.35)')
                          : (isDark ? '0 4px 16px rgba(0,0,0,0.35)' : '0 4px 14px rgba(40, 36, 96, 0.08)')
                      }}
                      title={`Select ${s.title}`}
                    >
                      <div style={{ marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <BrandLogo name={s.id} isDark={isActive ? true : isDark} size={22} />
                      </div>
                      <div style={{
                        fontSize: '10px',
                        color: isActive ? '#ffffff' : (isDark ? '#e2e8f0' : '#1e293b'),
                        fontWeight: 700,
                        textAlign: 'center',
                        lineHeight: 1.15,
                        padding: '0 4px'
                      }}>
                        {s.title === 'Oracle E-Business Suite' ? 'Oracle EBS' : s.title}
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── FEATURED SERVICES SECTION (NO BACKGROUND GRID!) ── */}
      <div
        id="featured-services-section"
        style={{
          position: 'relative',
          padding: '60px 0 80px',
          background: isDark
            ? 'linear-gradient(180deg, #090e1a 0%, #0c1527 100%)'
            : 'linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%)',
          transition: 'background 0.3s ease'
        }}
      >
        {/* Clean Ambient Glow (NO GRID LINES WHATSOEVER) */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '350px',
            background: isDark
              ? 'radial-gradient(ellipse at center, rgba(0, 174, 239, 0.12), transparent 70%)'
              : 'radial-gradient(ellipse at center, rgba(44, 115, 217, 0.08), transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Section Heading & Subtitle */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8 col-md-10">
              <h5 style={{
                color: isDark ? '#00AEEF' : '#1e40af',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2.5px',
                position: 'relative',
                paddingBottom: '10px',
                display: 'inline-block',
                marginBottom: '16px'
              }}>
                Enterprise Solutions Portfolio
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '2.5px',
                  background: isDark ? 'linear-gradient(90deg, #00AEEF, #0088C7)' : 'linear-gradient(90deg, #2c73d9, #1d4ed8)',
                  borderRadius: '2px'
                }}></div>
              </h5>

              <h2 style={{
                color: isDark ? '#FFFFFF' : '#0f172a',
                fontSize: 'clamp(26px, 4vw, 42px)',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '16px'
              }}>
                Our Featured <span style={{ color: isDark ? '#00AEEF' : '#2c73d9' }}>Services</span>
              </h2>

              <p style={{
                fontSize: 'clamp(14px, 1.8vw, 17px)',
                color: isDark ? '#94a3b8' : '#475569',
                lineHeight: 1.7,
                marginBottom: '10px',
                maxWidth: '680px',
                margin: '0 auto'
              }}>
                Comprehensive enterprise solutions designed to accelerate your digital transformation journey with proven expertise across leading ERP platforms and technology ecosystems.
              </p>
            </div>
          </div>

          {/* 6 Featured Service Cards Grid */}
          <div className="row g-4">
            {ENTERPRISE_SERVICES.map((s) => {
              const isActive = activeServiceId === s.id;

              return (
                <div key={s.id} className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    id={`service-card-${s.id}`}
                    ref={(el) => (cardRefs.current[s.id] = el)}
                    onClick={() => handleSelectService(s.id, false)}
                    style={{
                      background: isActive
                        ? (isDark
                            ? 'linear-gradient(135deg, rgba(0, 174, 239, 0.16), rgba(18, 25, 46, 0.95))'
                            : 'linear-gradient(135deg, #ffffff, #f0f7ff)')
                        : (isDark ? 'rgba(18, 25, 46, 0.85)' : '#ffffff'),
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: isActive
                        ? `2px solid ${isDark ? '#00AEEF' : '#2c73d9'}`
                        : (isDark ? '1px solid rgba(44, 115, 217, 0.22)' : '1px solid rgba(40, 36, 96, 0.12)'),
                      borderRadius: '20px',
                      padding: '28px',
                      height: '100%',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      transform: isActive ? 'translateY(-6px)' : 'none',
                      boxShadow: isActive
                        ? (isDark
                            ? '0 20px 45px rgba(0, 174, 239, 0.28), 0 0 30px rgba(0, 174, 239, 0.15)'
                            : '0 20px 45px rgba(44, 115, 217, 0.22), 0 0 20px rgba(44, 115, 217, 0.1)')
                        : (isDark ? '0 10px 30px rgba(0,0,0,0.4)' : '0 10px 30px rgba(40, 36, 96, 0.06)'),
                      cursor: 'pointer'
                    }}
                  >
                    {/* Active Indicator Badge */}
                    {isActive && (
                      <div style={{
                        position: 'absolute',
                        top: '18px',
                        right: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: isDark ? 'rgba(0, 174, 239, 0.2)' : 'rgba(44, 115, 217, 0.12)',
                        border: `1px solid ${isDark ? '#00AEEF' : '#2c73d9'}`,
                        borderRadius: '20px',
                        padding: '3px 9px',
                        fontSize: '10.5px',
                        fontWeight: 700,
                        color: isDark ? '#00AEEF' : '#1e40af'
                      }}>
                        <span style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: isDark ? '#00AEEF' : '#2c73d9',
                          boxShadow: isDark ? '0 0 8px #00AEEF' : 'none',
                          display: 'inline-block'
                        }} />
                        SELECTED
                      </div>
                    )}

                    {/* Logo Header Box */}
                    <div style={{
                      background: isActive
                        ? (isDark ? 'linear-gradient(135deg, #00AEEF, #0077BB)' : 'linear-gradient(135deg, #2c73d9, #1e40af)')
                        : (isDark ? 'rgba(0, 174, 239, 0.12)' : 'rgba(44, 115, 217, 0.08)'),
                      borderRadius: '16px',
                      width: '64px',
                      height: '64px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px',
                      transition: 'all 0.3s ease',
                      border: isDark ? '1px solid rgba(0, 174, 239, 0.25)' : '1px solid rgba(44, 115, 217, 0.2)',
                      boxShadow: isActive
                        ? (isDark ? '0 8px 20px rgba(0, 174, 239, 0.35)' : '0 8px 20px rgba(44, 115, 217, 0.25)')
                        : 'none'
                    }}>
                      <BrandLogo name={s.id} isDark={isActive ? true : isDark} size={32} />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 style={{
                      color: isDark ? '#FFFFFF' : '#0f172a',
                      fontSize: 'clamp(18px, 2.2vw, 21px)',
                      fontWeight: 700,
                      margin: '0 0 4px 0',
                      lineHeight: 1.2
                    }}>
                      {s.title}
                    </h3>

                    <p style={{
                      color: isDark ? '#00AEEF' : '#2c73d9',
                      fontSize: '13px',
                      fontWeight: 600,
                      margin: '0 0 12px 0'
                    }}>
                      {s.subtitle}
                    </p>

                    {/* Clients Badge */}
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{
                        background: isDark ? 'rgba(0, 174, 239, 0.18)' : 'rgba(44, 115, 217, 0.12)',
                        color: isDark ? '#00C6FF' : '#1e40af',
                        border: isDark ? '1px solid rgba(0, 174, 239, 0.35)' : '1px solid rgba(44, 115, 217, 0.25)',
                        borderRadius: '10px',
                        padding: '3px 10px',
                        fontSize: '11px',
                        fontWeight: 700
                      }}>
                        {s.clients} Clients
                      </span>
                    </div>

                    {/* Description */}
                    <p style={{
                      color: isDark ? '#cbd5e1' : '#475569',
                      fontSize: '13.5px',
                      lineHeight: 1.6,
                      marginBottom: '18px'
                    }}>
                      {s.desc}
                    </p>

                    {/* Key Features Grid */}
                    <div style={{ marginBottom: '18px' }}>
                      <p style={{
                        color: isDark ? '#FFFFFF' : '#0f172a',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        margin: '0 0 8px 0'
                      }}>
                        Key Features:
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '7px' }}>
                        {s.features.map((f, idx) => (
                          <div
                            key={idx}
                            style={{
                              background: isDark ? 'rgba(0, 174, 239, 0.08)' : 'rgba(44, 115, 217, 0.06)',
                              border: isDark ? '1px solid rgba(0, 174, 239, 0.24)' : '1px solid rgba(44, 115, 217, 0.18)',
                              borderRadius: '10px',
                              padding: '6px 8px',
                              fontSize: '11px',
                              color: isDark ? '#38bdf8' : '#1e40af',
                              fontWeight: 600,
                              textAlign: 'center',
                              lineHeight: 1.25
                            }}
                          >
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metric & Key Deliverables */}
                    <div style={{
                      background: isDark ? 'rgba(0, 174, 239, 0.06)' : '#f8fafc',
                      border: isDark ? '1px solid rgba(0, 174, 239, 0.18)' : '1px solid rgba(44, 115, 217, 0.14)',
                      borderRadius: '12px',
                      padding: '14px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isDark ? '#00AEEF' : '#2c73d9'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                          <polyline points="16 7 22 7 22 13" />
                        </svg>
                        <span style={{
                          color: isDark ? '#00AEEF' : '#1e40af',
                          fontSize: '12px',
                          fontWeight: 700
                        }}>
                          {s.metric}
                        </span>
                      </div>

                      <p style={{
                        color: isDark ? '#8A9DB5' : '#64748b',
                        fontSize: '11px',
                        fontWeight: 700,
                        margin: '0 0 6px 0'
                      }}>
                        Key Deliverables:
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {s.deliverables.map((deliv, idx) => (
                          <span
                            key={idx}
                            style={{
                              background: isDark ? 'rgba(0, 174, 239, 0.1)' : 'rgba(44, 115, 217, 0.08)',
                              border: isDark ? '1px solid rgba(0, 174, 239, 0.3)' : '1px solid rgba(44, 115, 217, 0.22)',
                              borderRadius: '8px',
                              padding: '3px 8px',
                              fontSize: '10px',
                              color: isDark ? '#38bdf8' : '#1e40af',
                              fontWeight: 500
                            }}
                          >
                            {deliv}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Embedded Animations CSS */}
      <style jsx>{`
        @keyframes spinClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinCounterClockwise {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @media (max-width: 576px) {
          .orbit-cockpit-stage {
            transform: scale(0.85);
            transform-origin: center;
          }
        }
      `}</style>
    </div>
  );
}
