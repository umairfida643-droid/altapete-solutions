import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  CreditCard,
  Smartphone,
  Users,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  Zap,
  Building2,
  FileCheck2
} from 'lucide-react';

const FEATURES = [
  {
    icon: CreditCard,
    title: 'Mada Debit & POS Terminal Integration',
    desc: 'Automated synchronization between physical Mada card terminals and your ERP for daily batch settlement and fee reconciliation.',
    points: ['Mada terminal batch settlement sync', 'Card scheme transaction fee auditing', 'Automated POS journal entries in ERP']
  },
  {
    icon: Smartphone,
    title: 'Geidea POS & Payment Gateway Sync',
    desc: 'Direct API integration with Geidea smart POS terminals and e-commerce gateway for unified in-store and online payments.',
    points: ['Geidea Cloud POS real-time API sync', 'Instant payment confirmation callbacks', 'Multi-terminal cash register balancing']
  },
  {
    icon: Users,
    title: 'Jisr HR & Payroll Platform Integration',
    desc: 'Seamless bi-directional data flow between Jisr HR platform and your ERP for employee master records, attendance, and payroll.',
    points: ['Bi-directional employee records sync', 'Automated monthly payroll journal creation', 'Leave, overtime & deduction processing']
  },
  {
    icon: FileCheck2,
    title: 'Saudi Wages Protection System (WPS / Mudad)',
    desc: 'Automated generation and validation of WPS salary files compliant with Saudi Ministry of Human Resources and Mudad platform.',
    points: ['Mudad payroll file format validation', 'GOSI social insurance deduction audit', 'Zero-rejection salary file processing']
  },
  {
    icon: Building2,
    title: 'Multi-Branch Payment Consolidation',
    desc: 'Centralized reconciliation dashboard consolidating cash, Mada, Geidea, credit cards, and buy-now-pay-later (Tabby/Tamara).',
    points: ['Multi-store daily cashier balancing', 'Discrepancy & short-cash alerting', 'Consolidated bank statement matching']
  },
  {
    icon: ShieldCheck,
    title: 'ZATCA & Audit-Ready Compliance',
    desc: 'Every payment settlement links directly with corresponding ZATCA Phase 2 electronic tax invoices for seamless financial audits.',
    points: ['Invoice-to-payment cryptographic link', 'SOCPA audit trail generation', 'Automated 15% VAT settlement reports']
  }
];

const BENEFITS = [
  {
    title: 'Eliminate Daily Manual Cashier Balancing',
    desc: 'Save hundreds of hours monthly by automating POS payment batch matching and bank deposit reconciliations.'
  },
  {
    title: '100% Error-Free Payroll Processing',
    desc: 'Ensure salary records in Jisr match ERP financial ledgers and bank WPS files with zero human errors.'
  },
  {
    title: 'Real-Time Multi-Branch Financial Visibility',
    desc: 'Track daily collections across all physical retail stores and online channels from a single executive dashboard.'
  },
  {
    title: 'Saudi Banking & Regulatory Compliance',
    desc: 'Built specifically for Saudi Arabian financial infrastructure including Mada, Geidea, Mudad, and ZATCA.'
  }
];

export default function MadaGeideaJisrIntegrationPage() {
  return (
    <Layout
      title="Mada - Geidea - Jisr Integration Services | Altapete Solutions"
      description="Seamless integration between Mada POS terminals, Geidea payment gateways, and Jisr HR & payroll platform with your ERP in Saudi Arabia."
    >
      <EnterprisePageView
        badge="FINTECH & HR INTEGRATION"
        badgeIcon={CreditCard}
        title={
          <>
            Mada - Geidea - Jisr Integration.<br />
            <span className="text-gradient">Unified POS Payments &amp; Saudi HR Payroll Sync.</span>
          </>
        }
        description="Connect your retail payment terminals and HR payroll systems directly to your core ERP. Altapete delivers automated Mada debit card reconciliations, Geidea POS integrations, and seamless Jisr HR synchronization across Saudi Arabia."
        bgImage="https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=1920"
        featuresTag="INTEGRATION CAPABILITIES"
        featuresTitle="Comprehensive Fintech & HR Integration"
        featuresDesc="Bridge the gap between physical retail registers, smart payment gateways, and cloud HR platforms."
        features={FEATURES}
        benefitsTag="FINANCIAL CONTROL"
        benefitsTitle={
          <>Why Choose Altapete for <span className="text-gradient">Mada - Geidea - Jisr Sync</span></>
        }
        benefitsDesc="We eliminate manual reconciliation bottlenecks and ensure 100% compliance with Saudi labor and banking regulations."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200"
        benefitStat={{
          badge: 'Payment Accuracy',
          metric: '100% Automated Reconciliation',
          note: 'Matching POS card settlements with bank deposits'
        }}
        ctaTitle="Ready to Automate Your Mada, Geidea &amp; Jisr Workflows?"
        ctaDesc="Connect with our integration architects to design a real-time data bridge for your retail and HR operations."
        ctaPrimaryText="Schedule Integration Scoping"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore All Integrations"
        ctaSecondaryLink="/what-we-do"
      />
    </Layout>
  );
}
