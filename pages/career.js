import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { useTheme } from '@/context/ThemeContext';
import {
  Briefcase,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Zap,
  Award,
  GraduationCap,
  Globe2,
  CheckCircle2,
  Mail,
  Send,
  Building2,
  Laptop,
  Compass,
  ArrowUpRight
} from 'lucide-react';

const DEPARTMENTS = ['All Roles', 'ERP Solutions', 'Software Engineering', 'Tax & Advisory', 'Cloud & Data'];

const JOB_OPENINGS = [
  {
    id: 'odoo-lead',
    title: 'Lead Odoo ERP Technical Architect',
    dept: 'ERP Solutions',
    type: 'Full-Time',
    experience: '5+ Years Experience',
    location: 'Riyadh, Saudi Arabia',
    workMode: 'Hybrid (On-Site & Remote)',
    desc: 'Lead the technical architecture, custom module development, and high-volume database performance tuning for large-scale Odoo Enterprise v16/v17/v18 deployments across KSA.',
    skills: ['Python 3', 'PostgreSQL', 'Odoo ORM', 'REST / Webhooks', 'ZATCA Integration', 'Multi-Company Architecture'],
    highlight: 'Key Technical Role'
  },
  {
    id: 'oracle-consultant',
    title: 'Oracle Fusion / EBS Financials Senior Consultant',
    dept: 'ERP Solutions',
    type: 'Full-Time',
    experience: '6+ Years Experience',
    location: 'Al Khobar, Saudi Arabia',
    workMode: 'On-Site Client Engagements',
    desc: 'Drive enterprise financials migrations (GL, AP, AR, Fixed Assets, Cash Management) to Oracle Cloud ERP, ensuring full SOCPA compliance and KSA localizations.',
    skills: ['Oracle Cloud ERP', 'E-Business Suite', 'General Ledger', 'Data Migration (FBDI)', 'SOCPA Accounting', 'SCM Basics'],
    highlight: 'Enterprise Priority'
  },
  {
    id: 'fullstack-engineer',
    title: 'Senior Full-Stack Engineer (Next.js & Node.js)',
    dept: 'Software Engineering',
    type: 'Full-Time',
    experience: '4+ Years Experience',
    location: 'Lahore Hub / Hybrid',
    workMode: 'Hybrid / Flexible',
    desc: 'Build high-performance web applications, modern customer portals, and distributed microservices integrating with enterprise ERP backends.',
    skills: ['React / Next.js', 'TypeScript', 'Node.js', 'PostgreSQL / Prisma', 'Tailwind / CSS-in-JS', 'Docker & CI/CD'],
    highlight: 'Engineering Core'
  },
  {
    id: 'zatca-specialist',
    title: 'ZATCA Phase 2 E-Invoicing & Tax Compliance Specialist',
    dept: 'Tax & Advisory',
    type: 'Full-Time',
    experience: '3+ Years Experience',
    location: 'Riyadh, Saudi Arabia',
    workMode: 'Hybrid',
    desc: 'Guide top-tier corporate clients through ZATCA FATOORA Phase 2 compliance, cryptographic CSID onboarding, XML UBL 2.1 validation, and clearance workflows.',
    skills: ['ZATCA FATOORA Phase 2', 'Cryptographic Stamping', 'XML UBL 2.1', 'API Integration', 'Saudi VAT Statutes'],
    highlight: 'Regulatory Lead'
  },
  {
    id: 'database-admin',
    title: 'Enterprise Database Administrator (Oracle / PostgreSQL)',
    dept: 'Cloud & Data',
    type: 'Full-Time',
    experience: '5+ Years Experience',
    location: 'Remote / KSA / PK',
    workMode: 'Remote / Hybrid',
    desc: 'Ensure 99.99% availability, automated failover replication, multi-terabyte data backups, query optimization, and security compliance for enterprise database instances.',
    skills: ['Oracle RAC / Data Guard', 'PostgreSQL Replication', 'Query Optimization', 'Linux / Bash Scripting', 'Disaster Recovery (DR)'],
    highlight: 'Infrastructure Lead'
  },
  {
    id: 'erp-business-analyst',
    title: 'Senior ERP Business Analyst & Scrum Lead',
    dept: 'ERP Solutions',
    type: 'Full-Time',
    experience: '4+ Years Experience',
    location: 'Riyadh, Saudi Arabia',
    workMode: 'Hybrid',
    desc: 'Bridge executive stakeholders and engineering squads, translating complex supply chain and manufacturing workflows into actionable functional blueprints.',
    skills: ['Business Process Modeling', 'UAT Facilitation', 'Agile / Scrum', 'ERP GAP Analysis', 'Client Relationship'],
    highlight: 'Strategic Delivery'
  }
];

const PERKS = [
  {
    icon: Zap,
    title: 'High-Impact GCC Deployments',
    desc: 'Work on mission-critical ERP rollouts, national e-invoicing milestones, and tier-1 enterprise transformations.'
  },
  {
    icon: GraduationCap,
    title: 'Sponsored Certifications',
    desc: '100% company-funded credentials in Oracle Cloud, Odoo, AWS, SOCPA, and PMP to fast-track your career growth.'
  },
  {
    icon: Globe2,
    title: 'Cross-Border Collaboration',
    desc: 'Engage with top-tier consultants across Riyadh, Al Khobar, Dubai, and Lahore in an inclusive, agile culture.'
  },
  {
    icon: Award,
    title: 'Competitive Compensation',
    desc: 'Attractive tax-advantaged compensation packages, performance-linked milestone bonuses, and premium health coverage.'
  },
  {
    icon: Laptop,
    title: 'Modern Engineering Stack',
    desc: 'Work with modern cloud tooling, clean CI/CD pipelines, top-spec hardware, and automated deployment architectures.'
  },
  {
    icon: Compass,
    title: 'Transparent Growth Trajectory',
    desc: 'Clear promotion benchmarks from Consultant to Solution Architect to Practice Director with mentorship from leaders.'
  }
];

export default function CareerPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedDept, setSelectedDept] = useState('All Roles');

  const filteredJobs = selectedDept === 'All Roles'
    ? JOB_OPENINGS
    : JOB_OPENINGS.filter((j) => j.dept === selectedDept);

  return (
    <Layout
      title="Careers at Altapete Solutions | Join Our Enterprise Tech & Advisory Team"
      description="Explore open career opportunities at Altapete Solutions. We are hiring Odoo and Oracle ERP consultants, cloud architects, full-stack engineers, and ZATCA compliance advisors across Riyadh, Al Khobar, and Lahore."
    >
      <div className={`career-page-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
        
        {/* 1. HERO SECTION */}
        <section className="career-hero">
          <div className="container text-center">
            <div className="hero-badge">
              <Sparkles size={14} color="#00AEEF" />
              <span>CAREERS AT ALTAPETE SOLUTIONS • WE ARE EXPANDING</span>
            </div>
            
            <h1 className="hero-title">
              Engineer the Future of <br />
              <span className="text-gradient">Enterprise Digital Transformation</span>
            </h1>

            <p className="hero-desc">
              Join a high-performance team delivering mission-critical ERP ecosystems, ZATCA e-invoicing infrastructure, and bespoke cloud architectures across Saudi Arabia and the GCC.
            </p>

            <div className="hero-actions">
              <a href="#open-positions" className="btn-hero-primary">
                <span>View Open Positions</span>
                <ArrowRight size={16} />
              </a>
              <Link href="/company-profile" className="btn-hero-secondary">
                <span>Explore Company Profile</span>
              </Link>
            </div>

            {/* Metric counters */}
            <div className="hero-stats-strip">
              <div className="stat-box">
                <div className="stat-val">15+</div>
                <div className="stat-lbl">Years Industry Legacy</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">100+</div>
                <div className="stat-lbl">Enterprise Clients</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">4</div>
                <div className="stat-lbl">GCC &amp; SA Regional Hubs</div>
              </div>
              <div className="stat-box">
                <div className="stat-val">100%</div>
                <div className="stat-lbl">Commitment to Excellence</div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. WHY WORK WITH US (PERKS & CULTURE) */}
        <section className="career-perks-section">
          <div className="container">
            <div className="section-head text-center">
              <div className="section-tag">LIFE AT ALTAPETE</div>
              <h2 className="section-title">Why Top Engineers &amp; Advisors Choose Us</h2>
              <p className="section-desc">
                We foster a culture of technical excellence, continuous learning, and direct client impact without bureaucratic friction.
              </p>
            </div>

            <div className="row g-4 mt-2">
              {PERKS.map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <div key={idx} className="col-lg-4 col-md-6">
                    <div className="perk-card">
                      <div className="perk-icon-wrap">
                        <Icon size={24} color="#00AEEF" />
                      </div>
                      <h4 className="perk-card-title">{perk.title}</h4>
                      <p className="perk-card-desc">{perk.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. OPEN ROLES DIRECTORY */}
        <section id="open-positions" className="career-jobs-section">
          <div className="container">
            <div className="section-head text-center">
              <div className="section-tag">OPPORTUNITIES</div>
              <h2 className="section-title">Open Strategic Positions</h2>
              <p className="section-desc">
                Find your next career leap in ERP engineering, software development, regulatory compliance, or corporate advisory.
              </p>
            </div>

            {/* Department Filter Tabs */}
            <div className="dept-tabs-wrapper">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`dept-tab-btn ${selectedDept === dept ? 'active' : ''}`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Jobs List */}
            <div className="jobs-list-flow">
              {filteredJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="job-card-header">
                    <div>
                      <div className="job-badges">
                        <span className="badge-dept">{job.dept}</span>
                        <span className="badge-highlight">{job.highlight}</span>
                      </div>
                      <h3 className="job-title">{job.title}</h3>
                    </div>

                    <a
                      href={`mailto:careers@altapetesolutions.com?subject=${encodeURIComponent(`Application: ${job.title}`)}&body=${encodeURIComponent(`Dear Hiring Team,\n\nI am writing to apply for the position of ${job.title} at Altapete Solutions.\n\nPlease find attached my CV and portfolio for your review.\n\nBest regards,`)}`}
                      className="btn-apply-card"
                    >
                      <span>Apply Now</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>

                  <p className="job-desc">{job.desc}</p>

                  <div className="job-meta-row">
                    <div className="meta-pill">
                      <MapPin size={14} color="#00AEEF" />
                      <span>{job.location}</span>
                    </div>
                    <div className="meta-pill">
                      <Briefcase size={14} color="#2c73d9" />
                      <span>{job.type}</span>
                    </div>
                    <div className="meta-pill">
                      <Clock size={14} color="#10b981" />
                      <span>{job.workMode}</span>
                    </div>
                  </div>

                  <div className="job-skills-wrap">
                    {job.skills.map((skill) => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. FAST APPLICATION / DIRECT DISPATCH BOX */}
        <section className="career-apply-fast">
          <div className="container">
            <div className="fast-apply-box">
              <div className="row align-items-center g-4">
                <div className="col-lg-8">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <Mail size={20} color="#00AEEF" />
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#00AEEF', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      DIRECT RESUME SUBMISSION
                    </span>
                  </div>
                  <h3 className="fast-title">Don&apos;t See a Role Matching Your Exact Stack?</h3>
                  <p className="fast-desc">
                    We are always scouting for senior enterprise architects, SOCPA CPAs, and high-velocity engineers. Send your resume directly to our talent acquisition team.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <a
                    href="mailto:careers@altapetesolutions.com?subject=Spontaneous%20Application%20-%20Altapete%20Solutions"
                    className="btn-dispatch-cv"
                  >
                    <Send size={16} />
                    <span>Email Your Resume (CV)</span>
                  </a>
                  <div className="mt-2 text-muted" style={{ fontSize: '12px' }}>
                    Sent to: <code>careers@altapetesolutions.com</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BOTTOM CTA BANNER (STANDARD ALTAPETE THEME) */}
        <section className="career-cta-section">
          <div className="container">
            <div className="cp-cta-banner">
              <div className="cp-cta-glow" />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="cp-cta-heading">
                  Ready to Deliver High-Impact Digital Solutions?
                </h2>
                <p className="cp-cta-sub">
                  Connect directly with our leadership team for executive confidential discussions or explore how Altapete works.
                </p>
                <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact-us" className="cp-cta-btn-primary">
                    <span>Contact Leadership</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/what-we-do" className="cp-cta-btn-secondary">
                    <span>Explore Our Work</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* COMPONENT SCOPED & THEME STYLING */}
      <style jsx>{`
        .career-page-wrapper {
          width: 100%;
          position: relative;
          background: var(--bg-body, #080d1a);
          color: var(--text-color, #e2e8f0);
          padding-bottom: 40px;
        }

        /* ── HERO ── */
        .career-hero {
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
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          letter-spacing: -0.8px;
          margin-bottom: 20px;
          line-height: 1.18;
        }
        .text-gradient {
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-desc {
          max-width: 740px;
          margin: 0 auto 34px;
          font-size: 16.5px;
          line-height: 1.7;
          color: var(--text-muted, #94a3b8);
        }
        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 56px;
        }
        .btn-hero-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          color: #ffffff !important;
          padding: 14px 34px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(0, 174, 239, 0.35);
          transition: all 0.3s ease;
        }
        .btn-hero-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 174, 239, 0.5);
          color: #ffffff !important;
        }
        .btn-hero-secondary {
          display: inline-flex;
          align-items: center;
          padding: 14px 32px;
          border-radius: 50px;
          border: 1.5px solid rgba(0, 174, 239, 0.3);
          color: var(--text-color, #e2e8f0) !important;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .btn-hero-secondary:hover {
          background: rgba(0, 174, 239, 0.08);
          border-color: #00AEEF;
        }

        .hero-stats-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          max-width: 960px;
          margin: 0 auto;
        }
        .stat-box {
          background: rgba(13, 22, 40, 0.6);
          border: 1px solid rgba(0, 174, 239, 0.15);
          border-radius: 14px;
          padding: 16px 28px;
          min-width: 170px;
          backdrop-filter: blur(8px);
        }
        .stat-val {
          font-size: 28px;
          font-weight: 800;
          color: #00AEEF;
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-lbl {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--text-muted, #94a3b8);
        }

        /* ── SECTION HEADINGS ── */
        .section-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #00AEEF;
          padding: 4px 14px;
          border-radius: 50px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.25);
          margin-bottom: 12px;
        }
        .section-title {
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 14px;
        }
        .section-desc {
          max-width: 620px;
          margin: 0 auto;
          font-size: 15px;
          line-height: 1.65;
          color: var(--text-muted, #94a3b8);
        }

        /* ── PERKS SECTION ── */
        .career-perks-section {
          padding: 80px 0;
        }
        .perk-card {
          background: rgba(13, 22, 40, 0.55);
          border: 1px solid rgba(0, 174, 239, 0.12);
          border-radius: 18px;
          padding: 30px 26px;
          height: 100%;
          transition: all 0.3s ease;
        }
        .perk-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 174, 239, 0.35);
          box-shadow: 0 16px 36px rgba(0, 174, 239, 0.12);
        }
        .perk-icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .perk-card-title {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--heading-color, #ffffff);
        }
        .perk-card-desc {
          font-size: 14px;
          line-height: 1.65;
          color: var(--text-muted, #94a3b8);
          margin-bottom: 0;
        }

        /* ── JOBS DIRECTORY ── */
        .career-jobs-section {
          padding: 60px 0 80px;
        }
        .dept-tabs-wrapper {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin: 36px 0 42px;
        }
        .dept-tab-btn {
          padding: 9px 20px;
          border-radius: 50px;
          background: rgba(13, 22, 40, 0.6);
          border: 1px solid rgba(0, 174, 239, 0.18);
          color: var(--text-muted, #94a3b8);
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .dept-tab-btn:hover {
          color: #00AEEF;
          border-color: rgba(0, 174, 239, 0.4);
        }
        .dept-tab-btn.active {
          background: #00AEEF;
          border-color: #00AEEF;
          color: #ffffff;
          box-shadow: 0 6px 18px rgba(0, 174, 239, 0.35);
        }

        .jobs-list-flow {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .job-card {
          background: rgba(13, 22, 40, 0.6);
          border: 1px solid rgba(0, 174, 239, 0.14);
          border-radius: 18px;
          padding: 28px 32px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .job-card:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 174, 239, 0.35);
          box-shadow: 0 16px 36px rgba(0, 174, 239, 0.1);
        }
        .job-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }
        .job-badges {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .badge-dept {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          padding: 3px 10px;
          border-radius: 50px;
          background: rgba(0, 174, 239, 0.12);
          color: #00AEEF;
        }
        .badge-highlight {
          font-size: 11px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 50px;
          background: rgba(16, 185, 129, 0.12);
          color: #10b981;
        }
        .job-title {
          font-size: clamp(18px, 2.4vw, 22px);
          font-weight: 800;
          color: var(--heading-color, #ffffff);
          margin-bottom: 0;
        }
        .btn-apply-card {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 22px;
          border-radius: 50px;
          background: #00AEEF;
          color: #ffffff !important;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .btn-apply-card:hover {
          background: #0088c7;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 174, 239, 0.35);
          color: #ffffff !important;
        }
        .job-desc {
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--text-muted, #94a3b8);
          margin-bottom: 16px;
        }
        .job-meta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }
        .meta-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted, #cbd5e1);
        }
        .job-skills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }
        .skill-tag {
          font-size: 11.5px;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-muted, #94a3b8);
          padding: 3px 10px;
          border-radius: 6px;
        }

        /* ── FAST APPLICATION BOX ── */
        .career-apply-fast {
          padding: 20px 0 60px;
        }
        .fast-apply-box {
          background: linear-gradient(135deg, rgba(13, 27, 53, 0.9) 0%, rgba(10, 22, 40, 0.9) 100%);
          border: 1px solid rgba(0, 174, 239, 0.25);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
        }
        .fast-title {
          font-size: clamp(20px, 3vw, 26px);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 8px;
        }
        .fast-desc {
          font-size: 14.5px;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 0;
        }
        .btn-dispatch-cv {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 30px;
          border-radius: 50px;
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          color: #ffffff !important;
          font-size: 14.5px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 10px 24px rgba(0, 174, 239, 0.35);
          transition: all 0.3s ease;
        }
        .btn-dispatch-cv:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(0, 174, 239, 0.5);
          color: #ffffff !important;
        }

        /* ── BOTTOM CTA BANNER ── */
        .career-cta-section {
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
          background: #00AEEF;
          color: #ffffff !important;
          padding: 14px 34px;
          border-radius: 50px;
          font-size: 14.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .cp-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 174, 239, 0.4);
          color: #ffffff !important;
        }
        .cp-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff !important;
          padding: 14px 34px;
          border-radius: 50px;
          font-size: 14.5px;
          font-weight: 700;
          text-decoration: none;
          border: 1.5px solid rgba(255, 255, 255, 0.28);
          transition: all 0.3s ease;
        }
        .cp-cta-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          color: #ffffff !important;
        }

        /* ── LIGHT THEME ADAPTATION ── */
        :global([data-theme="light"]) .career-page-wrapper,
        .light-theme.career-page-wrapper {
          background: #f8fafc;
          color: #0f172a;
        }
        :global([data-theme="light"]) .career-hero,
        .light-theme .career-hero {
          background: linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%);
          border-bottom-color: rgba(44, 115, 217, 0.15);
        }
        :global([data-theme="light"]) .career-hero .hero-title,
        .light-theme .hero-title {
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .career-hero .hero-desc,
        .light-theme .hero-desc {
          color: #475569 !important;
        }
        :global([data-theme="light"]) .stat-box,
        .light-theme .stat-box {
          background: #ffffff;
          border-color: rgba(44, 115, 217, 0.18);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }
        :global([data-theme="light"]) .btn-hero-secondary,
        .light-theme .btn-hero-secondary {
          border-color: rgba(44, 115, 217, 0.35);
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .section-title,
        .light-theme .section-title {
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .section-desc,
        .light-theme .section-desc {
          color: #475569 !important;
        }
        :global([data-theme="light"]) .perk-card,
        .light-theme .perk-card {
          background: #ffffff;
          border-color: rgba(44, 115, 217, 0.15);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        :global([data-theme="light"]) .perk-card-title,
        .light-theme .perk-card-title {
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .perk-card-desc,
        .light-theme .perk-card-desc {
          color: #475569 !important;
        }
        :global([data-theme="light"]) .dept-tab-btn,
        .light-theme .dept-tab-btn {
          background: #ffffff;
          border-color: rgba(44, 115, 217, 0.2);
          color: #475569;
        }
        :global([data-theme="light"]) .dept-tab-btn.active,
        .light-theme .dept-tab-btn.active {
          background: #2c73d9;
          border-color: #2c73d9;
          color: #ffffff;
        }
        :global([data-theme="light"]) .job-card,
        .light-theme .job-card {
          background: #ffffff;
          border-color: rgba(44, 115, 217, 0.16);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
        }
        :global([data-theme="light"]) .job-title,
        .light-theme .job-title {
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .job-desc,
        .light-theme .job-desc {
          color: #475569 !important;
        }
        :global([data-theme="light"]) .meta-pill,
        .light-theme .meta-pill {
          color: #334155;
        }
        :global([data-theme="light"]) .skill-tag,
        .light-theme .skill-tag {
          background: #f1f5f9;
          border-color: rgba(0, 0, 0, 0.08);
          color: #334155;
        }
        :global([data-theme="light"]) .fast-apply-box,
        .light-theme .fast-apply-box {
          background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%);
          border-color: rgba(44, 115, 217, 0.25);
          box-shadow: 0 10px 30px rgba(44, 115, 217, 0.08);
        }
        :global([data-theme="light"]) .fast-title,
        .light-theme .fast-title {
          color: #0f172a !important;
        }
        :global([data-theme="light"]) .fast-desc,
        .light-theme .fast-desc {
          color: #475569 !important;
        }
      `}</style>
    </Layout>
  );
}
