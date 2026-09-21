import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Database,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  FileCheck,
  Sliders,
  GitMerge,
  Headphones
} from 'lucide-react';

const FEATURES = [
  {
    icon: Database,
    title: 'Financials Cloud Implementation',
    desc: 'General ledger, accounts payable/receivable, fixed assets, and multi-currency consolidation with automated bank reconciliations.',
    points: ['Automated sub-ledger accounting', 'Multi-GAAP & IFRS financial reports', 'Saudi VAT 15% & ZATCA ready']
  },
  {
    icon: Layers,
    title: 'Supply Chain & Manufacturing (SCM)',
    desc: 'End-to-end inventory management, cost accounting, demand forecasting, and procurement automation across GCC entities.',
    points: ['Real-time multi-warehouse oversight', 'Automated supplier punchout catalogs', 'Subcontracting & work order tracking']
  },
  {
    icon: Sliders,
    title: 'Bespoke Fusion Customization',
    desc: 'Tailored Oracle Visual Builder extensions, custom OTBI reports, and role-based analytics dashboards.',
    points: ['Custom OTBI & BIP reports', 'Oracle Visual Builder Cloud (VBCS)', 'Automated BPM approval hierarchies']
  },
  {
    icon: GitMerge,
    title: 'Oracle Integration Cloud (OIC)',
    desc: 'Connect Oracle Fusion with legacy banking systems, POS, third-party logistics, and government portals.',
    points: ['Pre-built OIC adapters', 'ZATCA Phase 2 clearance API', 'REST/SOAP web service middleware']
  },
  {
    icon: Headphones,
    title: '24/7 Managed Services & DBA Support',
    desc: 'Continuous quarter-update testing, database monitoring, SLA-based incident handling, and user training.',
    points: ['Oracle quarterly update validation', 'Strict SLA incident resolution', 'Security patch & audit support']
  },
  {
    icon: ShieldCheck,
    title: 'Saudi Governance & Compliance',
    desc: 'Ensuring alignment with local regulatory mandates including SOCPA, FASAH customs, and national data residency.',
    points: ['ZATCA e-invoicing Phase 2 CSID', 'KSA sovereign cloud hosting', 'Bilingual Arabic/English interface']
  }
];

const BENEFITS = [
  {
    title: 'Autonomous Finance & AI Insights',
    desc: 'Harness predictive machine learning algorithms to automate reconciliations and accelerate period-end closing.'
  },
  {
    title: 'Enterprise Scalability Across the GCC',
    desc: 'Seamlessly expand across Saudi Arabia, UAE, and beyond with unified multi-chart of accounts.'
  },
  {
    title: 'Certified Oracle eAM & Cloud Architects',
    desc: 'Direct implementation by certified consultants with extensive regional oil & gas, contracting, and retail track records.'
  },
  {
    title: 'Guaranteed Deployment Milestones',
    desc: 'Structured methodology minimizing risk, ensuring rapid data migration, and zero operational disruption.'
  }
];

export default function OracleFusionPage() {
  return (
    <Layout
      title="Oracle Fusion ERP Implementation & Advisory | Altapete Solutions"
      description="Certified Oracle Fusion Cloud ERP implementation, customization, integration, and 24/7 support across Saudi Arabia and the GCC."
    >
      <EnterprisePageView
        badge="ORACLE CLOUD SPECIALIZATION"
        badgeIcon={Database}
        title={
          <>
            Oracle Fusion ERP.<br />
            <span className="text-gradient">Engineered for GCC Scale.</span>
          </>
        }
        description="Empower your enterprise with certified Oracle Fusion Cloud implementation. From Financials and SCM to Oracle Integration Cloud (OIC) and ZATCA Phase 2 compliance, Altapete delivers unmatched regional expertise."
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920"
        featuresTag="ORACLE FUSION SUITE"
        featuresTitle="Complete Lifecycle Implementation & Support"
        featuresDesc="Turn complex enterprise challenges into automated workflows with our accredited Oracle implementation practice."
        features={FEATURES}
        benefitsTag="STRATEGIC ADVANTAGE"
        benefitsTitle={
          <>Why Regional Leaders Choose <span className="text-gradient">Altapete for Oracle</span></>
        }
        benefitsDesc="Our team combines deep functional accounting credentials with certified Oracle Cloud technical engineering."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200"
        benefitStat={{
          badge: 'Oracle Track Record',
          metric: '100% On-Time Go-Lives',
          note: 'Backed by certified Oracle Cloud architects'
        }}
        ctaTitle="Ready to Discuss Your Oracle Fusion Roadmap?"
        ctaDesc="Schedule a discovery call with our certified Oracle Cloud architects to review architecture, timeline, and ROI."
        ctaPrimaryText="Schedule Oracle Consultation"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore ERP Services"
        ctaSecondaryLink="/erp-services"
      />
    </Layout>
  );
}
