import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { useTheme } from '@/context/ThemeContext';
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Server,
  UserCheck,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

const SECTIONS = [
  { id: 'governance', title: '1. Compliance & Legal Framework', icon: ShieldCheck },
  { id: 'data-collected', title: '2. Information We Collect', icon: FileText },
  { id: 'processing-purposes', title: '3. Processing & Usage of Data', icon: Eye },
  { id: 'nda-confidentiality', title: '4. NDA & Strict Confidentiality', icon: Lock },
  { id: 'cross-border', title: '5. Data Residency & Cross-Border', icon: Server },
  { id: 'rights', title: '6. Your Rights Under KSA PDPL', icon: UserCheck },
  { id: 'security', title: '7. Security Architecture & Encryption', icon: CheckCircle2 },
  { id: 'contact', title: '8. Data Protection Officer (DPO)', icon: Mail },
];

export default function PrivacyPolicyPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeSection, setActiveSection] = useState('governance');

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Layout
      title="Privacy Policy | Altapete Solutions Enterprise Data Governance"
      description="Review Altapete Solutions' Privacy Policy, ensuring full compliance with Saudi Arabia's Personal Data Protection Law (PDPL), strict NDA enterprise confidentiality, and bank-grade data security."
    >
      <div className={`legal-page-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
        
        {/* HERO SECTION */}
        <section className="legal-hero">
          <div className="container">
            <div className="hero-content text-center">
              <div className="hero-badge">
                <ShieldCheck size={15} color="#00AEEF" />
                <span>ENTERPRISE DATA GOVERNANCE &amp; COMPLIANCE</span>
              </div>
              <h1 className="hero-title">
                Privacy Policy &amp; <span className="text-gradient">Data Protection</span>
              </h1>
              <p className="hero-desc">
                Altapete Solutions is committed to safeguarding corporate datasets, enterprise ERP workflows, and client personal information in strict compliance with the Saudi Personal Data Protection Law (PDPL) and international privacy frameworks.
              </p>
              <div className="hero-meta">
                <div className="meta-item">
                  <Clock size={14} />
                  <span>Effective Date: January 1, 2026</span>
                </div>
                <div className="meta-item">
                  <CheckCircle2 size={14} color="#10b981" />
                  <span>KSA PDPL &amp; NDMO Compliant</span>
                </div>
                <div className="meta-item">
                  <Lock size={14} color="#00AEEF" />
                  <span>Strict NDA Enforced</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN BODY WITH STICKY SIDEBAR */}
        <section className="legal-body-section">
          <div className="container">
            <div className="row g-5">
              
              {/* SIDEBAR NAVIGATION */}
              <div className="col-lg-4">
                <aside className="legal-nav-sticky">
                  <h4 className="nav-heading">Table of Contents</h4>
                  <nav className="nav-links-list">
                    {SECTIONS.map((sec) => {
                      const Icon = sec.icon;
                      const isActive = activeSection === sec.id;
                      return (
                        <button
                          key={sec.id}
                          onClick={() => scrollTo(sec.id)}
                          className={`nav-link-btn ${isActive ? 'active' : ''}`}
                        >
                          <Icon size={16} className="nav-icon" />
                          <span>{sec.title}</span>
                          <ChevronRight size={14} className="chevron" />
                        </button>
                      );
                    })}
                  </nav>

                  <div className="dpo-contact-box mt-4">
                    <div className="dpo-title">Need Formal DPO Sign-Off?</div>
                    <p className="dpo-text">
                      For corporate audits, vendor risk assessments, or customized Data Processing Agreements (DPA), email our compliance team.
                    </p>
                    <a href="mailto:info@altapetesolutions.com" className="dpo-email-btn">
                      <Mail size={15} />
                      <span>info@altapetesolutions.com</span>
                    </a>
                  </div>
                </aside>
              </div>

              {/* CONTENT ARTICLES */}
              <div className="col-lg-8">
                <div className="legal-content-flow">

                  {/* Section 1 */}
                  <article id="governance" className="legal-card">
                    <div className="card-tag">SECTION 01</div>
                    <h2 className="card-title">1. Compliance &amp; Legal Framework</h2>
                    <p>
                      Altapete Solutions (&quot;Altapete&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates as a premier digital transformation, enterprise ERP implementation, and regulatory compliance consulting firm headquartered in Riyadh, Kingdom of Saudi Arabia.
                    </p>
                    <p>
                      This Privacy Policy governs our collection, processing, storage, and protection of information obtained through our official digital touchpoints (including <code>altapetesolutions.com</code>), client advisory portals, ERP deployment sandboxes, and offline enterprise consultations. We operate in strict alignment with:
                    </p>
                    <ul className="legal-list">
                      <li><strong>The Saudi Personal Data Protection Law (PDPL)</strong> enacted under Royal Decree No. (M/19) and associated Executive Regulations.</li>
                      <li><strong>National Data Management Office (NDMO)</strong> guidelines for cybersecurity and data classification across government and private sectors.</li>
                      <li><strong>Zakat, Tax and Customs Authority (ZATCA)</strong> cryptographic standards governing Phase 2 e-invoicing data integrity.</li>
                      <li><strong>Global Data Protection Regulation (GDPR)</strong> principles where European Union citizens or entities engage with our services.</li>
                    </ul>
                  </article>

                  {/* Section 2 */}
                  <article id="data-collected" className="legal-card">
                    <div className="card-tag">SECTION 02</div>
                    <h2 className="card-title">2. Information We Collect</h2>
                    <p>
                      We collect only the minimum necessary data required to deliver high-integrity enterprise consulting, architectural design, and software integration services:
                    </p>
                    <div className="data-type-grid">
                      <div className="data-box">
                        <h5>Business &amp; Engagement Contacts</h5>
                        <p>Full name, corporate email address, corporate telephone number, job title, entity legal name, and commercial jurisdiction.</p>
                      </div>
                      <div className="data-box">
                        <h5>Project Parameters &amp; RFPs</h5>
                        <p>Target ERP requirements (Oracle Fusion, Odoo, SAP), current software stack details, user tier count estimates, and projected implementation scopes.</p>
                      </div>
                      <div className="data-box">
                        <h5>System &amp; Integration Telemetry</h5>
                        <p>Server endpoint configurations, test payloads used during sandbox ERP staging, and technical communication logs.</p>
                      </div>
                      <div className="data-box">
                        <h5>Regulatory Staging Datasets</h5>
                        <p>Mock tax identifiers, test UUID hashes, and cryptographic test certificates generated during ZATCA sandbox simulations.</p>
                      </div>
                    </div>
                  </article>

                  {/* Section 3 */}
                  <article id="processing-purposes" className="legal-card">
                    <div className="card-tag">SECTION 03</div>
                    <h2 className="card-title">3. Processing &amp; Usage of Enterprise Data</h2>
                    <p>
                      All client information is utilized exclusively for legitimate business and engineering purposes:
                    </p>
                    <ul className="legal-list">
                      <li>Engineering and executing bespoke ERP migration roadmaps and software integration architecture.</li>
                      <li>Conducting official feasibility studies, ZATCA Phase 2 compliance audits, and tax advisory reviews.</li>
                      <li>Providing round-the-clock enterprise technical support and hypercare SLA management.</li>
                      <li>Fulfilling statutory obligations mandated by the Ministry of Commerce, ZATCA, SAMA, and MISA.</li>
                    </ul>
                    <div className="legal-callout">
                      <strong>Zero Monetization Policy:</strong> Altapete Solutions does not sell, rent, monetize, or lease your corporate datasets, technical blueprints, or personal employee data to any third-party advertisers, data aggregators, or unauthorized third parties.
                    </div>
                  </article>

                  {/* Section 4 */}
                  <article id="nda-confidentiality" className="legal-card">
                    <div className="card-tag">SECTION 04</div>
                    <h2 className="card-title">4. NDA &amp; Strict Confidentiality Protocols</h2>
                    <p>
                      Enterprise trust is the cornerstone of our business. Before accessing any sensitive client schema, corporate ledger, or database environment, Altapete executes a comprehensive, legally binding <strong>Mutual Non-Disclosure Agreement (MNDA)</strong>.
                    </p>
                    <p>
                      All senior enterprise architects, software engineers, and advisory consultants assigned to client accounts are bound by stringent confidentiality covenants. Client source code, database credentials, and commercial ledgers remain strictly compartmentalized behind role-based access control (RBAC) protocols.
                    </p>
                  </article>

                  {/* Section 5 */}
                  <article id="cross-border" className="legal-card">
                    <div className="card-tag">SECTION 05</div>
                    <h2 className="card-title">5. Data Residency &amp; Cross-Border Transfers</h2>
                    <p>
                      In compliance with Saudi Arabia&apos;s National Cybersecurity Authority (NCA) and PDPL data residency mandates:
                    </p>
                    <ul className="legal-list">
                      <li><strong>Domestic Data Sovereignty:</strong> Primary production datasets, client ERP instances, and ZATCA compliance logs for Saudi entities are hosted on certified KSA-compliant data centers (e.g., Oracle Cloud Riyadh/Jeddah, AWS Bahrain/UAE, or sovereign client private clouds).</li>
                      <li><strong>Cross-Border Safeguards:</strong> Any technical review involving our global delivery centers (Pakistan or UAE) is conducted over encrypted, isolated virtual private networks (VPNs) with zero permanent local data replication.</li>
                    </ul>
                  </article>

                  {/* Section 6 */}
                  <article id="rights" className="legal-card">
                    <div className="card-tag">SECTION 06</div>
                    <h2 className="card-title">6. Your Rights Under KSA PDPL</h2>
                    <p>
                      Under the Saudi Personal Data Protection Law, authorized enterprise representatives have specific rights concerning their corporate contact and personal data:
                    </p>
                    <ul className="legal-list">
                      <li><strong>Right to be Informed:</strong> To know how your data is collected, its legal basis, and intended processing methods.</li>
                      <li><strong>Right of Access &amp; Portability:</strong> To request a comprehensive copy of your stored records in a standardized format.</li>
                      <li><strong>Right of Rectification:</strong> To request immediate correction or updating of any inaccurate or outdated information.</li>
                      <li><strong>Right of Destruction:</strong> To request total purging of project records following contract expiration, subject to statutory retention laws.</li>
                    </ul>
                  </article>

                  {/* Section 7 */}
                  <article id="security" className="legal-card">
                    <div className="card-tag">SECTION 07</div>
                    <h2 className="card-title">7. Security Architecture &amp; Encryption Standards</h2>
                    <p>
                      We enforce defense-in-depth technical safeguards to preserve the confidentiality, integrity, and availability of all data assets:
                    </p>
                    <div className="security-badges-row">
                      <div className="sec-pill"><span>AES-256 Data Encryption</span></div>
                      <div className="sec-pill"><span>TLS 1.3 in Transit</span></div>
                      <div className="sec-pill"><span>MFA on All Engineering Hubs</span></div>
                      <div className="sec-pill"><span>Zero-Trust Infrastructure</span></div>
                      <div className="sec-pill"><span>Continuous Penetration Testing</span></div>
                    </div>
                  </article>

                  {/* Section 8 */}
                  <article id="contact" className="legal-card">
                    <div className="card-tag">SECTION 08</div>
                    <h2 className="card-title">8. Data Protection Officer (DPO) Inquiries</h2>
                    <p>
                      For any questions regarding our compliance practices, to exercise your PDPL statutory rights, or to submit vendor risk questionnaires, please contact our designated Data Protection Officer:
                    </p>
                    <div className="contact-details-panel">
                      <div><strong>Entity:</strong> Altapete Solutions (Aim High Business Solutions)</div>
                      <div><strong>Attention:</strong> Office of the Data Protection Officer &amp; Legal Counsel</div>
                      <div><strong>Direct Email:</strong> <a href="mailto:info@altapetesolutions.com">info@altapetesolutions.com</a></div>
                      <div><strong>Kingdom of Saudi Arabia:</strong> 7982 King Fahd Road, Al Khobar &amp; Riyadh Headquarters</div>
                      <div><strong>Direct Telephone:</strong> +966-533-820454 / +966-558-569116</div>
                    </div>
                  </article>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BOTTOM CTA BANNER (STANDARD ALTAPETE THEME) */}
        <section className="legal-cta-section">
          <div className="container">
            <div className="cp-cta-banner">
              <div className="cp-cta-glow" />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="cp-cta-heading">
                  Have Questions Regarding Enterprise Data Security?
                </h2>
                <p className="cp-cta-sub">
                  Reach out to our senior technology architects for confidential consultations, bilateral NDAs, or custom Data Processing Agreements (DPA).
                </p>
                <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact-us" className="btn btn-linear hover-up cp-cta-btn-primary">
                    <span>Contact Compliance Desk</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/what-we-do" className="btn btn-outline-brand hover-up cp-cta-btn-secondary">
                    <span>Explore Our Solutions</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* COMPONENT CSS */}
      <style jsx>{`
        .legal-page-wrapper {
          width: 100%;
          position: relative;
          background: var(--bg-body, #080d1a);
          color: var(--text-color, #e2e8f0);
          padding-bottom: 40px;
        }

        /* ── HERO ── */
        .legal-hero {
          padding: 90px 0 60px;
          position: relative;
          background: linear-gradient(180deg, rgba(0, 174, 239, 0.08) 0%, rgba(44, 115, 217, 0.02) 100%);
          border-bottom: 1px solid rgba(0, 174, 239, 0.12);
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          border-radius: 50px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.25);
          color: #00AEEF;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .hero-title {
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 800;
          letter-spacing: -0.8px;
          margin-bottom: 18px;
          line-height: 1.2;
        }
        .text-gradient {
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-desc {
          max-width: 780px;
          margin: 0 auto 30px;
          font-size: 16.5px;
          line-height: 1.7;
          color: var(--text-muted, #94a3b8);
        }
        .hero-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 24px;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted, #94a3b8);
        }

        /* ── BODY & SIDEBAR ── */
        .legal-body-section {
          padding: 60px 0 80px;
        }
        .legal-nav-sticky {
          position: sticky;
          top: 100px;
          background: rgba(13, 22, 40, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 174, 239, 0.15);
          border-radius: 18px;
          padding: 24px;
        }
        .nav-heading {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #00AEEF;
          margin-bottom: 18px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(0, 174, 239, 0.15);
        }
        .nav-links-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .nav-link-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 10px 14px;
          border-radius: 10px;
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-muted, #94a3b8);
          font-size: 13.5px;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .nav-link-btn:hover {
          background: rgba(0, 174, 239, 0.08);
          color: #00AEEF;
          border-color: rgba(0, 174, 239, 0.2);
        }
        .nav-link-btn.active {
          background: linear-gradient(90deg, rgba(0, 174, 239, 0.18), rgba(44, 115, 217, 0.1));
          border-color: rgba(0, 174, 239, 0.4);
          color: #ffffff;
        }
        .nav-link-btn .nav-icon {
          flex-shrink: 0;
          margin-right: 10px;
          color: #00AEEF;
        }
        .nav-link-btn span {
          flex: 1;
        }

        .dpo-contact-box {
          background: rgba(0, 174, 239, 0.05);
          border: 1px dashed rgba(0, 174, 239, 0.25);
          border-radius: 12px;
          padding: 18px;
        }
        .dpo-title {
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }
        .dpo-text {
          font-size: 12px;
          color: #94a3b8;
          line-height: 1.5;
          margin-bottom: 12px;
        }
        .dpo-email-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 700;
          color: #00AEEF;
          text-decoration: none;
          transition: color 0.2s;
        }
        .dpo-email-btn:hover {
          color: #38bdf8;
          text-decoration: underline;
        }

        /* ── LEGAL CARDS ── */
        .legal-content-flow {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .legal-card {
          background: rgba(13, 22, 40, 0.55);
          border: 1px solid rgba(0, 174, 239, 0.12);
          border-radius: 20px;
          padding: 36px 32px;
          position: relative;
        }
        .card-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #00AEEF;
          margin-bottom: 10px;
        }
        .card-title {
          font-size: clamp(20px, 2.8vw, 26px);
          font-weight: 800;
          margin-bottom: 18px;
          line-height: 1.3;
        }
        .legal-card p {
          font-size: 15px;
          line-height: 1.75;
          color: var(--text-muted, #94a3b8);
          margin-bottom: 16px;
        }
        .legal-card p:last-child {
          margin-bottom: 0;
        }
        .legal-list {
          list-style: none;
          padding-left: 0;
          margin: 18px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .legal-list li {
          position: relative;
          padding-left: 24px;
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--text-muted, #cbd5e1);
        }
        .legal-list li::before {
          content: '•';
          position: absolute;
          left: 6px;
          top: -2px;
          color: #00AEEF;
          font-size: 20px;
        }
        .legal-callout {
          background: rgba(0, 174, 239, 0.08);
          border-left: 3px solid #00AEEF;
          border-radius: 0 10px 10px 0;
          padding: 16px 20px;
          margin-top: 20px;
          font-size: 14.5px;
          line-height: 1.65;
        }

        .data-type-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 18px;
        }
        .data-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 18px;
        }
        .data-box h5 {
          font-size: 14.5px;
          font-weight: 700;
          color: #00AEEF;
          margin-bottom: 8px;
        }
        .data-box p {
          font-size: 13.5px;
          margin-bottom: 0;
        }

        .security-badges-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 16px;
        }
        .sec-pill {
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.25);
          border-radius: 50px;
          padding: 6px 16px;
          font-size: 12.5px;
          font-weight: 600;
          color: #00AEEF;
        }

        .contact-details-panel {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 174, 239, 0.15);
          border-radius: 14px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 14px;
          line-height: 1.6;
        }
        .contact-details-panel a {
          color: #00AEEF;
          text-decoration: none;
        }
        .contact-details-panel a:hover {
          text-decoration: underline;
        }

        /* ── BOTTOM CTA BANNER ── */
        .legal-cta-section {
          padding: 40px 0 80px;
        }
        .cp-cta-banner {
          background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%);
          border-radius: 24px;
          padding: clamp(40px, 6vw, 68px);
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(30, 58, 95, 0.35);
        }
        .cp-cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: rgba(0, 174, 239, 0.08);
          pointer-events: none;
        }
        .cp-cta-heading {
          font-size: clamp(24px, 4vw, 38px);
          font-weight: 800;
          color: #ffffff !important;
          margin-bottom: 14px;
        }
        .cp-cta-sub {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9) !important;
          max-width: 580px;
          margin: 0 auto 32px;
          line-height: 1.7;
        }
        .cp-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%) !important;
          color: #ffffff !important;
          border: 1px solid rgba(0, 174, 239, 0.4) !important;
          padding: 13px 28px !important;
          border-radius: 12px !important;
          font-size: 14.5px !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          box-shadow: 0 8px 24px rgba(0, 174, 239, 0.35) !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          cursor: pointer;
        }
        .cp-cta-btn-primary:hover {
          background: linear-gradient(135deg, #0099d8 0%, #1e5cb8 100%) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 12px 30px rgba(0, 174, 239, 0.5) !important;
          color: #ffffff !important;
        }
        .cp-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.12) !important;
          color: #ffffff !important;
          padding: 13px 26px !important;
          border-radius: 12px !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          text-decoration: none !important;
          border: 1.5px solid rgba(255, 255, 255, 0.28) !important;
          transition: all 0.25s ease !important;
          cursor: pointer;
        }
        .cp-cta-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.25) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
          transform: translateY(-2px) !important;
          color: #ffffff !important;
        }

        /* ── LIGHT THEME ADAPTATION ── */
        :global([data-theme="light"]) .legal-page-wrapper,
        .light-theme.legal-page-wrapper {
          background: #f8fafc;
          color: #0f172a;
        }
        :global([data-theme="light"]) .legal-hero,
        .light-theme .legal-hero {
          background: linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%);
          border-bottom-color: rgba(44, 115, 217, 0.15);
        }
        :global([data-theme="light"]) .legal-hero .hero-title,
        .light-theme .hero-title {
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .legal-hero .hero-desc,
        .light-theme .hero-desc {
          color: #475569 !important;
        }
        :global([data-theme="light"]) .legal-nav-sticky,
        .light-theme .legal-nav-sticky {
          background: #ffffff;
          border-color: rgba(44, 115, 217, 0.16);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        :global([data-theme="light"]) .nav-link-btn,
        .light-theme .nav-link-btn {
          color: #475569;
        }
        :global([data-theme="light"]) .nav-link-btn.active,
        .light-theme .nav-link-btn.active {
          background: rgba(44, 115, 217, 0.1);
          border-color: #2c73d9;
          color: #0f172a;
        }
        :global([data-theme="light"]) .legal-card,
        .light-theme .legal-card {
          background: #ffffff;
          border-color: rgba(44, 115, 217, 0.14);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
        }
        :global([data-theme="light"]) .card-title,
        .light-theme .card-title {
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .legal-card p,
        .light-theme .legal-card p {
          color: #475569 !important;
        }
        :global([data-theme="light"]) .legal-list li,
        .light-theme .legal-list li {
          color: #334155 !important;
        }
        :global([data-theme="light"]) .data-box,
        .light-theme .data-box {
          background: #f8fafc;
          border-color: rgba(0, 0, 0, 0.08);
        }
        :global([data-theme="light"]) .contact-details-panel,
        .light-theme .contact-details-panel {
          background: #f8fafc;
          border-color: rgba(44, 115, 217, 0.15);
          color: #334155;
        }
        :global([data-theme="light"]) .dpo-contact-box,
        .light-theme .dpo-contact-box {
          background: #f0f7ff;
          border-color: rgba(44, 115, 217, 0.3);
        }
        :global([data-theme="light"]) .dpo-title,
        .light-theme .dpo-title {
          color: #0f172a;
        }

        @media (max-width: 991px) {
          .legal-nav-sticky {
            position: relative;
            top: 0;
            margin-bottom: 30px;
          }
          .data-type-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
}
