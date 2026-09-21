import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  BarChart2,
  ShieldCheck,
  Server,
  Layers,
  Sliders,
  GitMerge,
  Headphones,
  Zap
} from 'lucide-react';

const FEATURES = [
  {
    icon: BarChart2,
    title: 'SAP Business One (B1) Implementation',
    desc: 'Complete ERP implementation for growing enterprises spanning finance, sales, inventory, and production with Saudi localization.',
    points: ['Financial & banking management', 'Advanced inventory & warehousing', 'Production scheduling & MRP']
  },
  {
    icon: Server,
    title: 'SAP S/4HANA Migration & Rollout',
    desc: 'Strategic migration roadmaps from legacy SAP ECC to S/4HANA with in-memory database acceleration and streamlined architecture.',
    points: ['Brownfield & greenfield migration', 'SAP Fiori modern UX deployment', 'Real-time financial analytics']
  },
  {
    icon: Sliders,
    title: 'ABAP & B1 Usability Customization',
    desc: 'Custom ABAP development, user-defined fields (UDFs), B1 usability package enhancements, and role-tailored dashboards.',
    points: ['Custom ABAP / B1 SDK logic', 'Automated approval procedures', 'Crystal Reports & SAP Analytics Cloud']
  },
  {
    icon: GitMerge,
    title: 'SAP Integration & API Connectors',
    desc: 'Connecting SAP with third-party logistics, POS billing systems, local e-commerce, and ZATCA Phase 2 clearance.',
    points: ['SAP Integration Framework (B1iF)', 'ZATCA Phase 2 FATOORA API', 'Automated bank file integration']
  },
  {
    icon: Headphones,
    title: '24/7 SAP Basis & Functional Support',
    desc: 'Round-the-clock technical administration, transport management, patch deployment, and functional troubleshooting.',
    points: ['SAP Basis health monitoring', 'Disaster recovery & backup audits', 'SLA-backed ticket resolution']
  },
  {
    icon: ShieldCheck,
    title: 'Saudi Tax & Audit Readiness',
    desc: 'Full alignment with ZATCA Phase 2 cryptographic e-invoicing, 15% VAT calculation, and SOCPA compliant financial reporting.',
    points: ['Cryptographic invoice generation', 'Electronic tax return reconciliation', 'Bilingual invoice printing']
  }
];

const BENEFITS = [
  {
    title: 'World-Standard Enterprise Core',
    desc: 'Leverage SAP’s battle-tested digital core trusted by the world’s largest and most regulated corporations.'
  },
  {
    title: 'Real-Time In-Memory Decision Making',
    desc: 'Run complex queries and instant period-end closings in seconds using high-performance SAP HANA architecture.'
  },
  {
    title: 'Regional Compliance Guarantee',
    desc: 'Built-in support for Saudi Arabia ZATCA Phase 2 requirements, withholding tax, and local commercial regulations.'
  },
  {
    title: 'Experienced Regional Consultants',
    desc: 'Direct execution by accredited SAP functional and technical consultants with extensive GCC deployment track records.'
  }
];

export default function SapImplementationPage() {
  return (
    <Layout
      title="SAP Business One & S/4HANA Implementation | Altapete Solutions"
      description="Certified SAP Business One and SAP S/4HANA implementation, ABAP customization, and 24/7 support across Saudi Arabia and the GCC."
    >
      <EnterprisePageView
        badge="SAP ENTERPRISE PRACTICE"
        badgeIcon={BarChart2}
        title={
          <>
            SAP Implementation &amp; Advisory.<br />
            <span className="text-gradient">The Gold Standard in Enterprise ERP.</span>
          </>
        }
        description="Accelerate your digital transformation with certified SAP Business One and S/4HANA implementation. Altapete combines global SAP best practices with deep Saudi localization and ZATCA compliance."
        bgImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1920"
        featuresTag="SAP SOLUTIONS"
        featuresTitle="End-to-End SAP Lifecycle Services"
        featuresDesc="Empower your enterprise with reliable, compliant, and scalable SAP solutions tailored for regional growth."
        features={FEATURES}
        benefitsTag="STRATEGIC VALUE"
        benefitsTitle={
          <>Drive Enterprise Value with <span className="text-gradient">Altapete &amp; SAP</span></>
        }
        benefitsDesc="From initial blueprinting to post-launch hypercare, we ensure your SAP investment delivers measurable efficiency."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200"
        benefitStat={{
          badge: 'SAP Delivery',
          metric: '99.9% System Reliability',
          note: 'Backed by certified SAP technical & functional architects'
        }}
        ctaTitle="Ready to Elevate Your Enterprise with SAP?"
        ctaDesc="Schedule a consultation with our senior SAP consultants to review licensing, migration options, and deployment timelines."
        ctaPrimaryText="Schedule SAP Discovery Call"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore All ERP Services"
        ctaSecondaryLink="/erp-services"
      />
    </Layout>
  );
}
