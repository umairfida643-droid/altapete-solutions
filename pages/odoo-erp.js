import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Layers,
  RefreshCw,
  ShieldCheck,
  Zap,
  Sliders,
  GitMerge,
  Headphones,
  Users,
  Smartphone
} from 'lucide-react';

const FEATURES = [
  {
    icon: Layers,
    title: 'Full Odoo V14–V18 Implementation',
    desc: 'Turnkey deployment of Accounting, Inventory, Sales, Purchase, Manufacturing (MRP), and HR apps customized for Saudi workflows.',
    points: ['End-to-end module configuration', 'Data migration from legacy systems', 'Bilingual Arabic & English UI']
  },
  {
    icon: RefreshCw,
    title: 'Odoo-to-Odoo Real-Time Sync',
    desc: 'Proprietary sub-second data synchronization engine across separate Odoo databases with zero data loss.',
    points: ['Bi-directional automated sync', 'Multi-company inventory allocation', 'Independent database isolation']
  },
  {
    icon: ShieldCheck,
    title: 'Certified ZATCA Phase 2 Middleware',
    desc: 'Direct API integration with the FATOORA portal for B2B cryptographic invoice clearance and B2C reporting.',
    points: ['Production CSID onboarding', 'XML UBL 2.1 & QR code generation', '100% ZATCA Clearance SLA']
  },
  {
    icon: Sliders,
    title: 'Custom Python Module Development',
    desc: 'Bespoke business logic, specialized industry extensions, custom reports, and mobile barcode workflows.',
    points: ['Custom model & view design', 'Automated server action rules', 'QWeb custom invoice templates']
  },
  {
    icon: GitMerge,
    title: 'Salla, Shopify & POS Integration',
    desc: 'Connect your Odoo ERP with leading e-commerce platforms, payment gateways, and retail point-of-sale hardware.',
    points: ['Real-time order & customer sync', 'Automated journal entry creation', 'Multi-branch POS terminals']
  },
  {
    icon: Headphones,
    title: '24/7 DBA & Functional Support',
    desc: 'Certified Odoo functional consultants and senior PostgreSQL DBAs ensuring optimal performance and rapid ticket resolution.',
    points: ['PostgreSQL performance tuning', 'Automated daily backup verification', 'Dedicated Slack/WhatsApp support']
  }
];

const BENEFITS = [
  {
    title: 'Unmatched Flexibility & Lower TCO',
    desc: 'Modular architecture allows you to start with core apps and scale effortlessly without exorbitant licensing fees.'
  },
  {
    title: 'Tailored for Saudi Business Realities',
    desc: 'Built-in support for GOSI payroll rules, Muqeem labor workflows, and FASAH customs clearance.'
  },
  {
    title: 'Certified Odoo Specialists',
    desc: 'Our leadership includes official Odoo Certified V16-V17 consultants with over a decade of hands-on delivery.'
  },
  {
    title: 'Seamless Ecosystem Upgrades',
    desc: 'Safe, automated migration paths between major Odoo versions preserving all custom modules and historical ledgers.'
  }
];

export default function OdooErpPage() {
  return (
    <Layout
      title="Odoo ERP Implementation, Customization & ZATCA | Altapete Solutions"
      description="Certified Odoo ERP (V14–V18) implementation, custom Python development, real-time database sync, and ZATCA Phase 2 compliance across Saudi Arabia and the GCC."
    >
      <EnterprisePageView
        badge="CERTIFIED ODOO EXPERTS"
        badgeIcon={Layers}
        title={
          <>
            Odoo ERP Solutions.<br />
            <span className="text-gradient">Agile, Modular, and 100% Saudi Ready.</span>
          </>
        }
        description="Transform your operations with certified Odoo ERP implementation. From accounting and supply chain to bespoke Python modules and certified ZATCA Phase 2 clearance, Altapete delivers enterprise-grade Odoo solutions."
        bgImage="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1920"
        featuresTag="ODOO PLATFORM"
        featuresTitle="Comprehensive Odoo Capabilities"
        featuresDesc="Everything your organization needs to streamline operations, cut costs, and ensure absolute regulatory compliance."
        features={FEATURES}
        benefitsTag="OPERATIONAL ADVANTAGE"
        benefitsTitle={
          <>Why Altapete is the Preferred <span className="text-gradient">Odoo Partner</span></>
        }
        benefitsDesc="We don't just install Odoo — we re-engineer your workflows for sustained operational excellence and compliance."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200"
        benefitStat={{
          badge: 'Odoo Proven Track Record',
          metric: '150+ Successful Deployments',
          note: 'Led by official Odoo certified V16–V17 consultants'
        }}
        ctaTitle="Ready to Power Your Business with Odoo?"
        ctaDesc="Get in touch with our certified Odoo architects for a live customized walkthrough of your industry workflows."
        ctaPrimaryText="Book Free Odoo Demo"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore Odoo to Odoo Sync"
        ctaSecondaryLink="/odoo-to-odoo-data-integration"
      />
    </Layout>
  );
}
