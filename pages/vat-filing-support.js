import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  FileCheck2,
  Scale,
  Calculator,
  ShieldCheck,
  AlertTriangle,
  BarChart3,
  FileText,
  Clock,
  Zap
} from 'lucide-react';

const FEATURES = [
  {
    icon: Calculator,
    title: '15% VAT Calculation & Return Filing',
    desc: 'Accurate monthly and quarterly VAT return preparation and submission directly on the official ZATCA portal.',
    points: ['Standard 15% VAT computation', 'Zero-rated and exempt supply classification', 'On-time portal submission guarantee']
  },
  {
    icon: FileCheck2,
    title: 'Input Tax Reconciliation & Audits',
    desc: 'Rigorous reconciliation between purchase invoices, import declarations (SABER/customs), and general ledger accounts.',
    points: ['Disallowed expense identification', 'Customs import VAT matching', 'Supplier tax ID verification']
  },
  {
    icon: AlertTriangle,
    title: 'Penalty Mitigation & Objection Filing',
    desc: 'Strategic review of past tax filings, voluntary disclosure submissions, and representation in penalty waiver appeals.',
    points: ['Voluntary disclosure support', 'Objection letter drafting', 'Penalty relief applications']
  },
  {
    icon: Scale,
    title: 'Withholding Tax (WHT) Compliance',
    desc: 'Accurate deduction and monthly filing of withholding tax on payments to non-resident entities across the GCC.',
    points: ['Applicable rate assessment (5%–20%)', 'Double taxation treaty evaluation', 'Monthly WHT return filing']
  },
  {
    icon: BarChart3,
    title: 'VAT Health Check & Readiness Review',
    desc: 'Comprehensive diagnostic review of your ERP transaction records, invoicing processes, and tax documentation.',
    points: ['ERP tax configuration audit', 'Invoice compliance checks', 'Actionable remediation roadmap']
  },
  {
    icon: FileText,
    title: 'ZATCA Audit Dossier Preparation',
    desc: 'Structured organization of all supporting invoices, customs bills, and payment proofs ready for ZATCA inspection.',
    points: ['Digital audit trail preparation', 'Bilingual explanatory documentation', 'Direct auditor correspondence']
  }
];

const BENEFITS = [
  {
    title: 'Zero Late-Filing Penalties',
    desc: 'Guaranteed on-time submissions backed by automated deadline tracking and dedicated tax managers.'
  },
  {
    title: 'Maximize Legitimate Input Tax Recovery',
    desc: 'Identify and claim all eligible input VAT to improve operational cash flow and reduce tax leakage.'
  },
  {
    title: 'SOCPA & ICAP Accredited Advisors',
    desc: 'Direct consultation with certified chartered accountants experienced in complex Saudi tax cases.'
  },
  {
    title: 'Complete ERP & Data Alignment',
    desc: 'Ensure your accounting system figures reconcile perfectly with your submitted ZATCA returns.'
  }
];

export default function VatFilingSupportPage() {
  return (
    <Layout
      title="VAT Filing Support & Reconciliation | Altapete Solutions"
      description="Professional 15% VAT filing support, input tax reconciliation, withholding tax calculations, and ZATCA portal submissions across Saudi Arabia."
    >
      <EnterprisePageView
        badge="VAT & TAX COMPLIANCE"
        badgeIcon={FileCheck2}
        title={
          <>
            15% VAT Filing &amp; Reconciliation.<br />
            <span className="text-gradient">Accurate, Compliant, and Penalty-Free.</span>
          </>
        }
        description="Eliminate tax compliance risks with professional VAT filing support. Altapete's certified tax specialists handle monthly and quarterly returns, input VAT reconciliations, and direct ZATCA representation across Saudi Arabia."
        bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1920"
        featuresTag="TAX ADVISORY SERVICES"
        featuresTitle="Comprehensive VAT Management Services"
        featuresDesc="From transaction-level reconciliations to official ZATCA submissions, we protect your business from compliance penalties."
        features={FEATURES}
        benefitsTag="STRATEGIC ADVANTAGE"
        benefitsTitle={
          <>Peace of Mind with <span className="text-gradient">Altapete VAT Services</span></>
        }
        benefitsDesc="Our accredited tax accountants ensure your filings are 100% compliant with Saudi tax laws."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200"
        benefitStat={{
          badge: 'Tax Accuracy',
          metric: '100% On-Time Submissions',
          note: 'Guaranteed penalty-free VAT compliance'
        }}
        ctaTitle="Need Expert Help with Your Next VAT Return?"
        ctaDesc="Speak with our certified tax advisors today for a confidential review of your VAT records and reconciliation needs."
        ctaPrimaryText="Schedule VAT Consultation"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore Taxation & Zakat"
        ctaSecondaryLink="/taxation-zakat-advisory"
      />
    </Layout>
  );
}
