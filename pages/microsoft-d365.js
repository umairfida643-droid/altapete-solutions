import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Monitor,
  Cloud,
  Layers,
  BarChart3,
  Sliders,
  GitMerge,
  Headphones,
  ShieldCheck,
  Zap
} from 'lucide-react';

const FEATURES = [
  {
    icon: Monitor,
    title: 'D365 Business Central Implementation',
    desc: 'All-in-one business management solution connecting financials, sales, service, and operations for agile mid-market firms.',
    points: ['General ledger & multi-currency', 'Automated supply chain flows', 'Built-in Microsoft 365 copilot AI']
  },
  {
    icon: Cloud,
    title: 'D365 Finance & Operations (F&O)',
    desc: 'Large-scale enterprise financial management and intelligent supply chain orchestration with global asset management.',
    points: ['Multi-entity ledger consolidation', 'Predictive demand forecasting', 'Advanced warehouse & transport management']
  },
  {
    icon: Sliders,
    title: 'Power Platform & AL Extensions',
    desc: 'Custom AL code development, Power Apps business extensions, and automated Power Automate approval workflows.',
    points: ['Bespoke AL extensions & events', 'Power Automate multi-tier approvals', 'Power BI embedded operational reports']
  },
  {
    icon: GitMerge,
    title: 'Azure Integration Services',
    desc: 'Connecting Dynamics 365 with third-party billing engines, POS terminals, Saudi FASAH customs, and e-commerce stores.',
    points: ['ZATCA Phase 2 FATOORA integration', 'Azure API Management middleware', 'Shopify & Salla e-commerce sync']
  },
  {
    icon: Headphones,
    title: '24/7 Managed D365 Administration',
    desc: 'Proactive cloud environment management, Microsoft One Version update testing, and guaranteed SLA incident support.',
    points: ['Continuous update validation', 'Dedicated technical support team', 'System health & telemetry monitoring']
  },
  {
    icon: ShieldCheck,
    title: 'Saudi Localization & Governance',
    desc: 'Full alignment with ZATCA Phase 2 cryptographic e-invoicing, 15% VAT reporting, and Saudi Arabian labor regulations.',
    points: ['Cryptographic stamp & QR code', 'Bilingual Arabic/English reports', 'Saudi GOSI & WPS compliance']
  }
];

const BENEFITS = [
  {
    title: 'Native Microsoft 365 Integration',
    desc: 'Work seamlessly inside Outlook, Teams, and Excel with live bi-directional ERP data access.'
  },
  {
    title: 'AI-Powered Predictive Intelligence',
    desc: 'Harness built-in Copilot and machine learning to optimize inventory, cash flow, and supplier performance.'
  },
  {
    title: 'Enterprise Azure Cloud Security',
    desc: 'Protected by Microsoft’s multi-layered cloud security, automated backups, and strict data residency compliance.'
  },
  {
    title: 'Proven Regional Consultants',
    desc: 'Direct implementation by certified Microsoft Dynamics architects with extensive regional track records.'
  }
];

export default function MicrosoftD365Page() {
  return (
    <Layout
      title="Microsoft Dynamics 365 Implementation | Altapete Solutions"
      description="Certified Microsoft Dynamics 365 Business Central and Finance & Operations implementation, customization, and support across Saudi Arabia and the GCC."
    >
      <EnterprisePageView
        badge="MICROSOFT DYNAMICS PRACTICE"
        badgeIcon={Monitor}
        title={
          <>
            Microsoft Dynamics 365.<br />
            <span className="text-gradient">Intelligent Cloud ERP Connected to Microsoft 365.</span>
          </>
        }
        description="Empower your workforce with certified Microsoft Dynamics 365 Business Central and F&O implementation. Altapete delivers tailored AL extensions, Power Platform automation, and certified ZATCA Phase 2 compliance."
        bgImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1920"
        featuresTag="DYNAMICS 365 SUITE"
        featuresTitle="Complete Dynamics 365 Lifecycle Services"
        featuresDesc="Bridge your daily productivity apps with core enterprise financial and supply chain data."
        features={FEATURES}
        benefitsTag="STRATEGIC ADVANTAGE"
        benefitsTitle={
          <>Transform Your Business with <span className="text-gradient">Dynamics &amp; Altapete</span></>
        }
        benefitsDesc="Our certified architects ensure seamless deployment, rapid user adoption, and full local regulatory compliance."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200"
        benefitStat={{
          badge: 'Microsoft Capability',
          metric: '100% Cloud Connected',
          note: 'Native integration with Excel, Teams, and Power BI'
        }}
        ctaTitle="Ready to Connect Your Business with D365?"
        ctaDesc="Schedule a discovery consultation with our certified Microsoft Dynamics specialists to map your implementation plan."
        ctaPrimaryText="Schedule D365 Consultation"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore ERP Services"
        ctaSecondaryLink="/erp-services"
      />
    </Layout>
  );
}
