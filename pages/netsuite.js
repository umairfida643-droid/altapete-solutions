import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Cloud,
  Layers,
  BarChart3,
  Globe,
  Sliders,
  GitMerge,
  Headphones,
  ShieldCheck,
  Zap
} from 'lucide-react';

const FEATURES = [
  {
    icon: Cloud,
    title: 'NetSuite OneWorld Implementation',
    desc: 'Multi-subsidiary financial management, automated currency conversions, and unified tax compliance for fast-growing GCC groups.',
    points: ['Real-time subsidiary consolidation', 'Automated intercompany eliminations', 'Multi-currency & IFRS reporting']
  },
  {
    icon: Layers,
    title: 'Inventory & Order Management',
    desc: 'Omnichannel inventory visibility across physical warehouses, e-commerce stores, and retail branches in real time.',
    points: ['Automated reorder point planning', 'Lot and serial number tracking', 'Drop-shipment & fulfillment routing']
  },
  {
    icon: Sliders,
    title: 'SuiteScript & SuiteCloud Customization',
    desc: 'Bespoke workflows, custom records, and automated business logic tailored to your specific operating procedures.',
    points: ['SuiteScript 2.1 development', 'Custom approval workflows', 'Personalized role-based dashboards']
  },
  {
    icon: GitMerge,
    title: 'SuiteTalk & REST Web Services',
    desc: 'Seamless integration with Shopify, Salla, local POS, banking payment gateways, and Saudi tax authorities.',
    points: ['ZATCA Phase 2 clearance middleware', 'E-commerce order synchronization', 'POS payment reconciliation']
  },
  {
    icon: Headphones,
    title: '24/7 Managed NetSuite Support',
    desc: 'Post-go-live administrator support, bi-annual NetSuite release testing, user training, and SLA-driven enhancements.',
    points: ['Dedicated NetSuite administrator', 'Release update regression testing', 'Guaranteed SLA response times']
  },
  {
    icon: ShieldCheck,
    title: 'Saudi Localization & VAT 15%',
    desc: 'Full compliance with ZATCA e-invoicing Phase 2, Arabic invoice templates, and Saudi labor accounting standards.',
    points: ['Cryptographic invoice stamping', 'Arabic language layout packs', 'Saudi GOSI & WPS compliance']
  }
];

const BENEFITS = [
  {
    title: 'True Cloud Agility & Low TCO',
    desc: 'Zero hardware costs, automated bi-annual updates, and anywhere access for distributed executive teams.'
  },
  {
    title: 'Built-in Business Intelligence',
    desc: 'Real-time financial and operational visibility without requiring expensive third-party BI software.'
  },
  {
    title: 'Rapid Deployment Milestones',
    desc: 'Proven SuiteSuccess methodology delivering live systems in weeks rather than months.'
  },
  {
    title: 'GCC Multi-Country Expansion',
    desc: 'Easily activate new subsidiaries in Saudi Arabia, UAE, Qatar, and Bahrain with local tax compliance.'
  }
];

export default function NetSuitePage() {
  return (
    <Layout
      title="NetSuite Cloud ERP Implementation & Support | Altapete Solutions"
      description="Certified Oracle NetSuite ERP implementation, SuiteScript customization, SuiteTalk integrations, and 24/7 support across Saudi Arabia and the GCC."
    >
      <EnterprisePageView
        badge="NETSUITE CLOUD ERP"
        badgeIcon={Cloud}
        title={
          <>
            Oracle NetSuite ERP.<br />
            <span className="text-gradient">Unified Cloud for High-Growth Groups.</span>
          </>
        }
        description="Empower your organization with the world's leading cloud ERP. Altapete delivers turnkey NetSuite implementation, custom SuiteScript automation, and seamless ZATCA Phase 2 compliance across the GCC."
        bgImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920"
        featuresTag="NETSUITE SUITE"
        featuresTitle="Full Lifecycle NetSuite Services"
        featuresDesc="Scale your operations with automated financials, real-time inventory, and integrated omnichannel commerce."
        features={FEATURES}
        benefitsTag="OPERATIONAL IMPACT"
        benefitsTitle={
          <>Accelerate Growth with <span className="text-gradient">NetSuite & Altapete</span></>
        }
        benefitsDesc="Eliminate spreadsheet chaos and gain real-time visibility across all business units."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
        benefitStat={{
          badge: 'NetSuite Delivery',
          metric: '2–4 Weeks Time-to-Value',
          note: 'Using agile SuiteSuccess implementation framework'
        }}
        ctaTitle="Ready to Accelerate with NetSuite?"
        ctaDesc="Connect with our certified NetSuite consultants for a personalized demonstration and licensing consultation."
        ctaPrimaryText="Schedule NetSuite Demo"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore ERP Services"
        ctaSecondaryLink="/erp-services"
      />
    </Layout>
  );
}
