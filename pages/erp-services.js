import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Database,
  Cloud,
  Layers,
  BarChart2,
  Monitor,
  Settings,
  Headphones,
  Sliders,
  GitMerge,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Database,
    title: 'Oracle Fusion ERP',
    desc: 'Complete enterprise cloud suite for finance, supply chain, procurement, and HR with AI-guided automation.',
    points: ['Financials & procurement cloud', 'Supply chain & manufacturing', 'Automated ZATCA Phase 2 tax integration'],
    link: '/oracle-fusion'
  },
  {
    icon: Cloud,
    title: 'NetSuite ERP',
    desc: 'Unified mid-market cloud platform spanning multi-subsidiary financials, CRM, and real-time inventory.',
    points: ['OneWorld multi-currency & VAT', 'Omnichannel inventory tracking', 'Advanced revenue recognition'],
    link: '/netsuite'
  },
  {
    icon: Layers,
    title: 'Odoo ERP (V14–V18)',
    desc: 'Modular, agile ERP implementation with full Saudi localization, payroll, and bi-directional sync engine.',
    points: ['Arabic UI & Saudi payroll rules', 'Sub-second Odoo-to-Odoo sync', 'ZATCA clearance e-invoicing'],
    link: '/odoo-erp'
  },
  {
    icon: BarChart2,
    title: 'SAP Business One & S/4HANA',
    desc: 'Tier-1 enterprise digital core delivering real-time analytics, compliance, and multi-entity consolidation.',
    points: ['S/4HANA migration roadmap', 'Localized KSA tax packs', 'Continuous 24/7 SLA monitoring'],
    link: '/sap-implementation'
  },
  {
    icon: Monitor,
    title: 'Microsoft Dynamics 365',
    desc: 'Connected business applications across Finance, Supply Chain Management, and Business Central.',
    points: ['Power Platform & BI dashboards', 'Azure cloud security & RBAC', 'Seamless Office 365 workflows'],
    link: '/microsoft-d365'
  },
  {
    icon: Settings,
    title: 'Implementation & Advisory',
    desc: 'Certified functional and technical architects managing full ERP lifecycle with zero operational downtime.',
    points: ['GAP analysis & blueprinting', 'Legacy data cleaning & migration', 'Staff change management & training']
  },
  {
    icon: Headphones,
    title: '24/7 Post Go-Live Support',
    desc: 'Dedicated technical desk, bug triage, SLA guarantees, and routine patch updates across Saudi Arabia.',
    points: ['Guaranteed SLA response times', 'Dedicated named account engineer', 'Proactive database health audits']
  },
  {
    icon: Sliders,
    title: 'Bespoke Customization',
    desc: 'Tailor workflows, custom fields, approval chains, and localized reports to match your operating model.',
    points: ['Custom module development', 'Automated multi-level approvals', 'Custom executive KPI dashboards']
  },
  {
    icon: GitMerge,
    title: 'Enterprise Integration Grid',
    desc: 'Direct middleware connectors between your ERP and banking, e-commerce, POS, and government portals.',
    points: ['Saudi FASAH & Muqeem APIs', 'Shopify & Salla real-time sync', 'Mada & POS payment integration']
  }
];

const BENEFITS = [
  {
    title: 'Unified Multi-Entity Accounting',
    desc: 'Consolidate multiple company ledgers, inter-company transactions, and tax reporting in real time.'
  },
  {
    title: '100% ZATCA & Regional Compliance',
    desc: 'Built-in Phase 2 cryptographic e-invoicing clearance, 15% VAT filing support, and SOCPA audit trails.'
  },
  {
    title: 'Automated Supply Chain Transparency',
    desc: 'Eliminate stockouts and excess inventory with algorithmic reordering and real-time warehouse oversight.'
  },
  {
    title: 'Seamless Third-Party Connectivity',
    desc: 'Bi-directional data pipelines connecting POS, online stores, logistics, and government platforms.'
  },
  {
    title: 'Certified Saudi Specialists',
    desc: 'Direct access to bilingual senior ERP architects with 13+ years of regional deployment experience.'
  },
  {
    title: 'Guaranteed Deployment Milestones',
    desc: 'Fixed-timeline, milestone-driven execution ensuring your project goes live on budget and on schedule.'
  }
];

export default function ErpServicesPage() {
  return (
    <Layout
      title="Enterprise ERP Services & Implementation | Altapete Solutions"
      description="Leading ERP implementation, customization, and support across Saudi Arabia and the GCC. Certified Oracle Fusion, NetSuite, Odoo, SAP, and Microsoft D365 specialists."
    >
      <EnterprisePageView
        badge="ENTERPRISE ERP ECOSYSTEM"
        badgeIcon={Database}
        title={
          <>
            Transform Your Enterprise with <br />
            <span className="text-gradient">World-Class ERP Systems.</span>
          </>
        }
        description="Altapete Solutions delivers certified ERP implementation, customization, and 24/7 support across Saudi Arabia and the GCC — empowering organizations with unified financials, automated supply chains, and guaranteed ZATCA compliance."
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920"
        featuresTag="PLATFORMS & CAPABILITIES"
        featuresTitle="Full-Spectrum ERP Services for Modern Enterprises"
        featuresDesc="Whether deploying a new ERP or modernizing legacy infrastructure, our accredited specialists ensure seamless adoption, data integrity, and compliance."
        features={FEATURES}
        benefitsTag="STRATEGIC ADVANTAGE"
        benefitsTitle={
          <>Why Leading Organizations Choose <span className="text-gradient">Altapete for ERP</span></>
        }
        benefitsDesc="We bridge complex enterprise software with local Saudi regulatory requirements to ensure measurable ROI from day one."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200"
        benefitStat={{
          badge: 'ERP Excellence',
          metric: '100+ Enterprise Deployments',
          note: 'Delivered across manufacturing, trading, contracting, and retail'
        }}
        ctaTitle="Ready to Elevate Your ERP Capabilities?"
        ctaDesc="Book a confidential architecture review with our senior enterprise consultants to map your migration roadmap and ROI."
        ctaPrimaryText="Book Free ERP Consultation"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore Company Profile"
        ctaSecondaryLink="/company-profile"
      />
    </Layout>
  );
}
