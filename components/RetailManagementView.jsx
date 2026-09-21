import React from 'react';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  ShoppingBag,
  Package,
  Users,
  CreditCard,
  BarChart3,
  Tag,
  Repeat,
  Smartphone,
  Globe2
} from 'lucide-react';

const FEATURES = [
  {
    icon: ShoppingBag,
    title: 'POS & Sales Management',
    desc: 'Streamlined point-of-sale operations for single and multi-branch retail environments.',
    points: ['Multi-branch POS terminals', 'Barcode scanning & product lookup', 'Receipt printing & digital receipts']
  },
  {
    icon: Package,
    title: 'Inventory & Stock Control',
    desc: 'Real-time inventory visibility across all your warehouses and store locations.',
    points: ['Real-time stock level monitoring', 'Multi-warehouse management', 'Auto reorder & low-stock alerts']
  },
  {
    icon: Users,
    title: 'Customer & Loyalty Programs',
    desc: 'Build lasting customer relationships with integrated loyalty and CRM tools.',
    points: ['Loyalty points & rewards engine', 'Full CRM & customer profiles', 'Customer segmentation & targeting']
  },
  {
    icon: CreditCard,
    title: 'Payments & Multi-Currency',
    desc: 'Accept all major payment methods with full VAT compliance built in.',
    points: ['Mada / Visa / cash support', 'Multi-currency transactions', 'VAT 15% calculation & reporting']
  },
  {
    icon: BarChart3,
    title: 'Sales Analytics & Reporting',
    desc: 'Actionable insights from daily performance to long-term trend analysis.',
    points: ['Daily / weekly / monthly reports', 'Top products & category analysis', 'Profit margin & cost analysis']
  },
  {
    icon: Tag,
    title: 'Promotions & Pricing Engine',
    desc: 'Flexible promotion management to drive sales and increase basket size.',
    points: ['Seasonal & flash discounts', 'Bundle & combo offers', 'Dynamic price rules & overrides']
  },
  {
    icon: Repeat,
    title: 'Returns & Exchanges',
    desc: 'Hassle-free return processing that keeps customers satisfied and stock accurate.',
    points: ['Return management workflow', 'Refund processing & reconciliation', 'Credit notes & store credit']
  },
  {
    icon: Smartphone,
    title: 'Mobile & E-Commerce',
    desc: 'Unify your online and offline channels for a seamless omnichannel experience.',
    points: ['Mobile POS for staff on the floor', 'Online store integration', 'Omnichannel inventory sync']
  },
  {
    icon: Globe2,
    title: 'ZATCA Compliance',
    desc: "Stay fully compliant with Saudi Arabia's e-invoicing and tax regulations.",
    points: ['Phase 2 e-invoicing ready', 'QR code generation per invoice', 'Automated VAT & tax reports']
  }
];

const BENEFITS = [
  {
    title: 'Reduce Operational Costs',
    desc: 'Automated inventory workflows and smart reordering eliminate waste and costly stockouts.'
  },
  {
    title: 'Increase Customer Lifetime Value',
    desc: 'Personalized loyalty points and omnichannel CRM profiles keep customers coming back.'
  },
  {
    title: 'Real-Time Multi-Branch Control',
    desc: 'Monitor daily sales, inventory levels, and cash registers across all stores from one screen.'
  },
  {
    title: 'Scalable for National Chains',
    desc: 'Effortlessly scale from a boutique retail store to a nationwide multi-warehouse chain.'
  },
  {
    title: '100% ZATCA & VAT Compliance',
    desc: 'Instant cryptographic invoice clearance and automated 15% VAT filing support.'
  },
  {
    title: 'Intuitive Staff Usability',
    desc: 'Minimal training required with ergonomic POS interfaces designed for high checkout speed.'
  }
];

export default function RetailManagementView() {
  return (
    <EnterprisePageView
      badge="RETAIL ERP PLATFORM"
      badgeIcon={ShoppingBag}
      title={
        <>
          Unified Retail <br />
          <span className="text-gradient">Management Platform.</span>
        </>
      }
      description="From point-of-sale to supply chain, our end-to-end retail ERP connects every corner of your business — so you can sell smarter, serve better, and grow faster."
      bgImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1920"
      featuresTag="RETAIL CAPABILITIES"
      featuresTitle="A Complete Toolkit for Modern Retailers"
      featuresDesc="Nine integrated modules designed to streamline sales, protect margins, and power omnichannel retail."
      features={FEATURES}
      benefitsTag="STRATEGIC ADVANTAGE"
      benefitsTitle={
        <>Why Leading Retailers Choose <span className="text-gradient">Altapete</span></>
      }
      benefitsDesc="Measurable business improvements backed by reliable enterprise technology and local support."
      benefits={BENEFITS}
      benefitStat={{
        badge: 'Retail Performance',
        metric: 'Sub-Second POS Speed',
        note: 'High-throughput point of sale with offline sync resilience'
      }}
      ctaTitle="Ready to Transform Your Retail Operations?"
      ctaDesc="Talk to our retail ERP specialists today and get a personalized architecture walkthrough tailored to your stores."
      ctaPrimaryText="Schedule Retail Demo"
      ctaPrimaryLink="/contact-us"
      ctaSecondaryText="Explore What We Do"
      ctaSecondaryLink="/what-we-do"
    />
  );
}
