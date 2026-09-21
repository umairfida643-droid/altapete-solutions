import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Globe2,
  ShieldCheck,
  Package,
  FileCheck2,
  Scale,
  Truck,
  Building2,
  CheckCircle2,
  Zap
} from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'MISA Commercial Trading License',
    desc: 'Acquiring the MISA trading investment license allowing wholesale, retail, and e-commerce distribution across the Kingdom.',
    points: ['Wholesale & retail distribution rights', 'MISA trade license application management', 'Capital requirement & business plan advisory']
  },
  {
    icon: Truck,
    title: 'Customs & FASAH Code Registration',
    desc: 'Direct registration with Saudi Customs (ZATCA) and the FASAH national single-window platform for seamless import clearances.',
    points: ['Importer/exporter code issuance', 'FASAH digital broker authorization', 'HS code compliance & tariff classification']
  },
  {
    icon: Package,
    title: 'SABER Conformity Platform Setup',
    desc: 'Establishing your account on the SABER platform for SASO conformity certificates and product shipment approvals.',
    points: ['SASO certificate of conformity (PCoC)', 'Shipment conformity certificate (SCoC)', 'Saudi standards regulatory guidance']
  },
  {
    icon: FileCheck2,
    title: 'Commercial Registration (CR) Issuance',
    desc: 'Drafting bilingual Articles of Association, capital deposit verification, and immediate CR issuance from Ministry of Commerce.',
    points: ['Commercial name reservation', 'Ministry of Commerce AoA notarization', 'Immediate official CR certificate']
  },
  {
    icon: Scale,
    title: 'Corporate Banking & Trade Finance',
    desc: 'Assistance in opening multi-currency commercial bank accounts and setting up Letters of Credit (LC) and trade financing facilities.',
    points: ['Multi-currency trade accounts', 'Bank KYC and compliance support', 'Trade finance & letter of credit setup']
  },
  {
    icon: Building2,
    title: 'Warehouse & Logistics Licensing (Balady)',
    desc: 'Support in securing municipality (Balady) licenses, civil defense approvals, and warehouse leases across key logistics hubs.',
    points: ['Balady commercial license issuance', 'Civil Defense safety compliance', 'Logistics hub & yard leasing advisory']
  }
];

const BENEFITS = [
  {
    title: 'Tap into the GCC’s Largest Consumer Market',
    desc: 'Direct access to a $1+ Trillion economy with rising consumer spending and large-scale government procurement.'
  },
  {
    title: 'Wholesale & Retail Omnichannel Rights',
    desc: 'Sell directly to businesses (B2B), consumers (B2C), and supply to government mega-projects.'
  },
  {
    title: 'Seamless Customs & Supply Chain Integration',
    desc: 'Zero import clearance bottlenecks with pre-configured FASAH, SABER, and ZATCA compliance.'
  },
  {
    title: 'Turnkey Legal & Operational Setup',
    desc: 'Complete support from initial MISA application to warehouse leasing and employee visa issuance.'
  }
];

export default function TradingCompanyPage() {
  return (
    <Layout
      title="Trading Company Formation in Saudi Arabia | Altapete Solutions"
      description="Form a trading, wholesale, import/export, or retail company in Saudi Arabia. MISA commercial licensing, FASAH customs codes, SABER conformity, and bank accounts."
    >
      <EnterprisePageView
        badge="COMMERCIAL TRADING SETUP"
        badgeIcon={Globe2}
        title={
          <>
            Trading Company Formation.<br />
            <span className="text-gradient">Import, Distribute, and Scale in Saudi Arabia.</span>
          </>
        }
        description="Establish your import, export, wholesale, or retail distribution business in the Kingdom. Altapete provides turnkey MISA commercial licensing, Commercial Registration, FASAH customs integration, SABER setup, and corporate banking."
        bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920"
        featuresTag="TRADING INCORPORATION"
        featuresTitle="Comprehensive Trading Setup Services"
        featuresDesc="Everything you need to legally import, store, and distribute goods across the Kingdom of Saudi Arabia."
        features={FEATURES}
        benefitsTag="MARKET ADVANTAGE"
        benefitsTitle={
          <>Why Form Your Trading Company with <span className="text-gradient">Altapete</span></>
        }
        benefitsDesc="We streamline the complex intersection of MISA investment, customs clearance, and commercial trade laws."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200"
        benefitStat={{
          badge: 'Trade Readiness',
          metric: '100% Customs Ready',
          note: 'Full FASAH & SABER compliance from day one'
        }}
        ctaTitle="Ready to Enter the Saudi Trading Market?"
        ctaDesc="Schedule a consultation with our corporate setup advisors to discuss your capital requirements and commercial licensing."
        ctaPrimaryText="Start Trading Company Setup"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore Company Formation"
        ctaSecondaryLink="/company-formation"
      />
    </Layout>
  );
}
