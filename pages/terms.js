import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { useTheme } from '@/context/ThemeContext';
import {
  FileText,
  Briefcase,
  ShieldCheck,
  Code,
  DollarSign,
  Clock,
  Scale,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Mail,
  Building
} from 'lucide-react';

const SECTIONS = [
  { id: 'engagement', title: '1. Master Services & SOW Scope', icon: Briefcase },
  { id: 'ip-rights', title: '2. IP & Deliverable Ownership', icon: Code },
  { id: 'client-duties', title: '3. Client Roles & Sandbox Access', icon: CheckCircle2 },
  { id: 'fees-tax', title: '4. Fees, Milestone Billing & VAT', icon: DollarSign },
  { id: 'sla-hypercare', title: '5. SLAs & Post-Go-Live Hypercare', icon: Clock },
  { id: 'confidentiality', title: '6. Confidentiality & Non-Solicitation', icon: ShieldCheck },
  { id: 'liability', title: '7. Limitation of Liability', icon: AlertCircle },
  { id: 'governing-law', title: '8. Governing Law & Jurisdiction', icon: Scale },
];

export default function TermsOfServicePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeSection, setActiveSection] = useState('engagement');

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Layout
      title="Terms of Service | Altapete Solutions Enterprise Consulting"
      description="Review Altapete Solutions' Master Services Terms of Service governing enterprise ERP implementations, ZATCA e-invoicing compliance, custom cloud software engineering, and SLAs across Saudi Arabia and the GCC."
    >
      <div className={`legal-page-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
        
        {/* HERO SECTION */}
        <section className="legal-hero">
          <div className="container">
            <div className="hero-content text-center">
              <div className="hero-badge">
                <FileText size={15} color="#00AEEF" />
                <span>MASTER SERVICES AGREEMENT (MSA) &amp; TERMS</span>
              </div>
              <h1 className="hero-title">
                Terms of <span className="text-gradient">Service &amp; Engagement</span>
              </h1>
              <p className="hero-desc">
                These Terms govern enterprise consulting, ERP implementation, software development, and advisory engagements between Altapete Solutions and client organizations across the Kingdom of Saudi Arabia, UAE, and international jurisdictions.
              </p>
              <div className="hero-meta">
                <div className="meta-item">
                  <Clock size={14} />
                  <span>Last Updated: January 2026</span>
                </div>
                <div className="meta-item">
                  <Scale size={14} color="#00AEEF" />
                  <span>KSA Commercial Law Jurisdiction</span>
                </div>
                <div className="meta-item">
                  <CheckCircle2 size={14} color="#10b981" />
                  <span>Enterprise Milestone Governed</span>
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
                  <h4 className="nav-heading">Contractual Sections</h4>
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
                    <div className="dpo-title">Execute a Custom Master Agreement?</div>
                    <p className="dpo-text">
                      For large enterprise accounts requiring procurement customization or bespoke MSA negotiations, our corporate legal desk is available.
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
                  <article id="engagement" className="legal-card">
                    <div className="card-tag">SECTION 01</div>
                    <h2 className="card-title">1. Master Services &amp; SOW Scope</h2>
                    <p>
                      These Terms of Service (&quot;Terms&quot;) constitute the legal framework governing enterprise services provided by <strong>Altapete Solutions</strong> (operating under Aim High Business Solutions, KSA CR-registered) to clients (&quot;Client&quot; or &quot;Customer&quot;).
                    </p>
                    <p>
                      Each specific engagement is detailed in an mutually executed <strong>Statement of Work (SOW)</strong>, Project Charter, or Purchase Order, specifying:
                    </p>
                    <ul className="legal-list">
                      <li>Functional specifications, user tiers, and target database schemas (Oracle, Odoo, SAP, Custom Stack).</li>
                      <li>Phased project milestones, delivery timelines, User Acceptance Testing (UAT) criteria, and sign-off protocols.</li>
                      <li>Named Project Directors, Lead Technical Architects, and Client Steering Committee members.</li>
                    </ul>
                  </article>

                  {/* Section 2 */}
                  <article id="ip-rights" className="legal-card">
                    <div className="card-tag">SECTION 02</div>
                    <h2 className="card-title">2. Intellectual Property &amp; Deliverable Ownership</h2>
                    <p>
                      We believe in absolute transparency and clarity regarding software ownership:
                    </p>
                    <div className="data-type-grid">
                      <div className="data-box">
                        <h5>Client Deliverables &amp; Custom Code</h5>
                        <p>Upon receipt of full payment for the corresponding milestone, the Client receives full ownership and title to all custom-developed modules, bespoke code, and workflow logic created specifically for their business.</p>
                      </div>
                      <div className="data-box">
                        <h5>Altapete Pre-Existing Frameworks</h5>
                        <p>Altapete retains ownership of proprietary libraries, pre-built accelerators, boilerplate frameworks, and deployment automation scripts used to deliver the engagement. The Client receives a perpetual, royalty-free license to use these integrated components.</p>
                      </div>
                    </div>
                  </article>

                  {/* Section 3 */}
                  <article id="client-duties" className="legal-card">
                    <div className="card-tag">SECTION 03</div>
                    <h2 className="card-title">3. Client Roles &amp; System Access</h2>
                    <p>
                      Timely project execution relies on structured collaboration between both parties:
                    </p>
                    <ul className="legal-list">
                      <li><strong>Sandbox &amp; API Access:</strong> Client shall provide Altapete engineers with necessary staging environments, non-production test databases, and API credentials in a timely manner.</li>
                      <li><strong>Designated Product Owner:</strong> Client shall appoint an authorized Project Sponsor empowered to approve architectural design documents, UAT completions, and milestone sign-offs.</li>
                      <li><strong>User Acceptance Testing (UAT):</strong> Client agrees to complete UAT cycles within the designated timeframe (typically 10 business days) to avoid project drift and schedule dislocation.</li>
                    </ul>
                  </article>

                  {/* Section 4 */}
                  <article id="fees-tax" className="legal-card">
                    <div className="card-tag">SECTION 04</div>
                    <h2 className="card-title">4. Fees, Milestone Billing &amp; VAT Compliance</h2>
                    <p>
                      All commercial terms adhere strictly to Saudi Arabian financial and invoicing statutes:
                    </p>
                    <ul className="legal-list">
                      <li><strong>Milestone Invoicing:</strong> Fees are invoiced upon completion and sign-off of pre-agreed milestone gates (e.g. Discovery &amp; Architecture 20%, Configuration &amp; Integration 40%, UAT &amp; Data Migration 30%, Go-Live Hypercare 10%).</li>
                      <li><strong>Saudi Value-Added Tax (VAT):</strong> All invoices issued to Saudi resident entities are subject to statutory 15% VAT in compliance with ZATCA regulations and include full FATOORA-compliant Phase 2 cryptographic QR codes.</li>
                      <li><strong>Payment Terms:</strong> Invoices are payable within 30 calendar days of invoice presentation unless otherwise stipulated in the SOW.</li>
                    </ul>
                  </article>

                  {/* Section 5 */}
                  <article id="sla-hypercare" className="legal-card">
                    <div className="card-tag">SECTION 05</div>
                    <h2 className="card-title">5. SLAs &amp; Post-Go-Live Hypercare Warranty</h2>
                    <p>
                      Every production rollout delivered by Altapete is backed by an enterprise warranty and dedicated hypercare period:
                    </p>
                    <div className="sla-table-wrapper">
                      <div className="sla-row">
                        <div className="sla-col-level">Priority 1 (Critical Outage)</div>
                        <div className="sla-col-desc">Complete core ERP / ZATCA clearance halted. Response within <strong>1 hour</strong>; continuous engineering until restored.</div>
                      </div>
                      <div className="sla-row">
                        <div className="sla-col-level">Priority 2 (High Degradation)</div>
                        <div className="sla-col-desc">Major module impaired with available workaround. Response within <strong>4 hours</strong>; resolution target 24 hours.</div>
                      </div>
                      <div className="sla-row">
                        <div className="sla-col-level">Priority 3 (Routine Query)</div>
                        <div className="sla-col-desc">Minor configuration question or general maintenance request. Response within <strong>1 business day</strong>.</div>
                      </div>
                    </div>
                  </article>

                  {/* Section 6 */}
                  <article id="confidentiality" className="legal-card">
                    <div className="card-tag">SECTION 06</div>
                    <h2 className="card-title">6. Confidentiality &amp; Non-Solicitation</h2>
                    <p>
                      Both parties agree that all business strategies, source codes, proprietary workflows, financial ledgers, and technical designs shared during the engagement constitute confidential information.
                    </p>
                    <p>
                      Neither party shall, during the term of engagement and for a period of twelve (12) months thereafter, directly or indirectly solicit for employment any key engineers, consultants, or directors of the other party without prior written consent.
                    </p>
                  </article>

                  {/* Section 7 */}
                  <article id="liability" className="legal-card">
                    <div className="card-tag">SECTION 07</div>
                    <h2 className="card-title">7. Limitation of Liability</h2>
                    <p>
                      To the maximum extent permitted by applicable Saudi Arabian law:
                    </p>
                    <ul className="legal-list">
                      <li>Neither party shall be liable for indirect, incidental, punitive, or consequential damages, including loss of profits, data loss, or business interruption.</li>
                      <li>Altapete&apos;s total aggregate liability arising out of or related to any SOW shall be strictly capped at the total professional fees received by Altapete under that specific SOW in the twelve (12) months preceding the claim.</li>
                    </ul>
                  </article>

                  {/* Section 8 */}
                  <article id="governing-law" className="legal-card">
                    <div className="card-tag">SECTION 08</div>
                    <h2 className="card-title">8. Governing Law &amp; Commercial Jurisdiction</h2>
                    <p>
                      These Terms and any related Statements of Work shall be governed by and construed in accordance with the <strong>laws, royal decrees, and commercial regulations of the Kingdom of Saudi Arabia</strong>.
                    </p>
                    <p>
                      Any dispute arising out of or in connection with these Terms that cannot be amicably settled through executive negotiation within thirty (30) days shall be submitted to the exclusive jurisdiction of the <strong>Commercial Courts in Riyadh, Kingdom of Saudi Arabia</strong>.
                    </p>
                    <div className="contact-details-panel mt-3">
                      <div><strong>Corporate Legal Desk:</strong> Altapete Solutions Legal Counsel</div>
                      <div><strong>Email:</strong> <a href="mailto:info@altapetesolutions.com">info@altapetesolutions.com</a></div>
                      <div><strong>Principal Offices:</strong> Riyadh &amp; Al Khobar, Kingdom of Saudi Arabia</div>
                    </div>
                  </article>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="legal-cta-section">
          <div className="container">
            <div className="cp-cta-banner">
              <div className="cp-cta-glow" />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="cp-cta-heading">
                  Ready to Execute an Enterprise SOW or Master Agreement?
                </h2>
                <p className="cp-cta-sub">
                  Connect with our senior enterprise directors to structure milestone-based contracts, guaranteed SLAs, and predictable project roadmaps.
                </p>
                <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact-us" className="btn btn-linear hover-up cp-cta-btn-primary">
                    <span>Schedule Executive Call</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/company-profile" className="btn btn-outline-brand hover-up cp-cta-btn-secondary">
                    <span>View Company Profile</span>
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

        .sla-table-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 18px;
        }
        .sla-row {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: rgba(0, 174, 239, 0.04);
          border: 1px solid rgba(0, 174, 239, 0.15);
          border-radius: 12px;
          padding: 14px 18px;
        }
        .sla-col-level {
          font-size: 13px;
          font-weight: 700;
          color: #00AEEF;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .sla-col-desc {
          font-size: 13.5px;
          color: #cbd5e1;
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
        :global([data-theme="light"]) .sla-row,
        .light-theme .sla-row {
          background: #f0f7ff;
          border-color: rgba(44, 115, 217, 0.18);
        }
        :global([data-theme="light"]) .sla-col-desc,
        .light-theme .sla-col-desc {
          color: #334155;
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
