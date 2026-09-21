import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  ShieldCheck,
  FileCheck2,
  Lock,
  Zap,
  Server,
  FileText,
  CheckCircle2,
  Scale,
  GitMerge
} from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'ZATCA Phase 2 E-Invoicing (FATOORA)',
    desc: 'Turnkey integration with the ZATCA portal providing cryptographic invoice clearance for B2B transactions and 24-hour reporting for B2C.',
    points: ['Production CSID onboarding', 'XML UBL 2.1 & QR code generation', '100% Clearance SLA Guarantee'],
    link: '/zatca-integration'
  },
  {
    icon: FileCheck2,
    title: 'VAT Filing & Reconciliation Support',
    desc: 'Comprehensive 15% VAT filing support, input tax reconciliations, and penalty-free submissions on the ZATCA portal.',
    points: ['Monthly & quarterly VAT return filing', 'Input VAT audit & reconciliation', 'Withholding tax (WHT) calculations'],
    link: '/vat-filing-support'
  },
  {
    icon: Lock,
    title: 'Cryptographic Security & Tamper-Proofing',
    desc: 'Automated digital signature embedding, cryptographic stamps, and SHA-256 hash chaining to meet ZATCA compliance standards.',
    points: ['Cryptographic stamp generation', 'Invoice hash chain verification', 'Secure private key storage']
  },
  {
    icon: GitMerge,
    title: 'Multi-ERP Middleware Connectors',
    desc: 'Pre-built, certified middleware connectors for Oracle, SAP, Odoo, Microsoft D365, and custom billing POS systems.',
    points: ['Zero disruption to existing ERP', 'Sub-second API response time', 'Automated error retry & alerting']
  },
  {
    icon: Scale,
    title: 'Zakat & Corporate Tax Advisory',
    desc: 'Accredited SOCPA and ICAP tax consultants ensuring optimal Zakat base computation and full corporate tax compliance.',
    points: ['Zakat base computation on ERAD', 'Corporate income tax (CIT) returns', 'Audit representation before ZATCA'],
    link: '/taxation-zakat-advisory'
  },
  {
    icon: Zap,
    title: 'Real-Time Telemetry & Audit Logs',
    desc: 'Live tracking dashboards showing invoice status, clearance acknowledgments, and tamper-proof compliance logs.',
    points: ['Live clearance status dashboard', 'Automated error diagnosis', 'Audit-ready historical invoice archive']
  }
];

const BENEFITS = [
  {
    title: '100% Clearance SLA Guarantee',
    desc: 'Zero rejected invoices with our real-time pre-validation engine checking all 150+ ZATCA business rules before submission.'
  },
  {
    title: 'Avoid Heavy Fines & Penalties',
    desc: 'Protect your business from regulatory fines with automated e-invoicing compliance and on-time VAT submissions.'
  },
  {
    title: 'Seamless ERP Compatibility',
    desc: 'Integrate directly into your existing ERP or billing software without needing expensive system replacements.'
  },
  {
    title: 'Accredited Saudi Tax Experts',
    desc: 'Direct consultation with SOCPA and ICAP accredited tax advisors with deep regulatory experience across the Kingdom.'
  }
];

export default function ZatcaServicesPage() {
  return (
    <Layout
      title="ZATCA E-Invoicing Phase 2 & VAT Services | Altapete Solutions"
      description="Certified ZATCA Phase 2 e-invoicing integration, production CSID onboarding, 15% VAT filing, and tax advisory across Saudi Arabia."
    >
      <EnterprisePageView
        badge="CERTIFIED ZATCA MIDDLEWARE"
        badgeIcon={ShieldCheck}
        title={
          <>
            ZATCA E-Invoicing &amp; VAT Services.<br />
            <span className="text-gradient">100% Compliance. Zero Operational Friction.</span>
          </>
        }
        description="Navigate Saudi Arabia's tax and e-invoicing mandates with complete confidence. Altapete provides certified ZATCA Phase 2 middleware, production CSID onboarding, 15% VAT filing support, and expert tax advisory."
        bgImage="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1920"
        featuresTag="TAX & COMPLIANCE SOLUTIONS"
        featuresTitle="Comprehensive ZATCA & VAT Services"
        featuresDesc="Everything your organization needs to ensure seamless compliance with Saudi Arabia's tax and electronic invoicing regulations."
        features={FEATURES}
        benefitsTag="STRATEGIC ADVANTAGE"
        benefitsTitle={
          <>Why Leading Companies Rely on <span className="text-gradient">Altapete for ZATCA</span></>
        }
        benefitsDesc="We eliminate regulatory stress with certified middleware and accredited Saudi tax consultants."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200"
        benefitStat={{
          badge: 'Compliance Track Record',
          metric: '100% Clearance SLA',
          note: 'Millions of compliant invoices processed across Saudi Arabia'
        }}
        ctaTitle="Ensure 100% ZATCA Phase 2 Compliance Today"
        ctaDesc="Schedule a health check with our certified ZATCA integration team to verify your invoicing readiness and CSID setup."
        ctaPrimaryText="Book ZATCA Health Check"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore ZATCA Integration"
        ctaSecondaryLink="/zatca-integration"
      />
    </Layout>
  );
}
