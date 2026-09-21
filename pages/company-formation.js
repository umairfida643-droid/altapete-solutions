import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Building2,
  Briefcase,
  Globe2,
  ShieldCheck,
  FileCheck2,
  Scale,
  Users,
  CheckCircle2,
  ArrowRight,
  Zap
} from 'lucide-react';

const FEATURES = [
  {
    icon: Briefcase,
    title: 'Services Company Formation',
    desc: 'Turnkey setup for IT, engineering, consulting, management, and technical services companies with 100% foreign ownership under MISA.',
    points: ['100% foreign ownership available', 'MISA service investment license', 'CR & Chamber of Commerce registration'],
    link: '/services-company'
  },
  {
    icon: Globe2,
    title: 'Trading Company Formation',
    desc: 'Complete incorporation for wholesale, retail, import, export, and distribution entities with SABER and customs registration.',
    points: ['MISA trading license issuance', 'Customs & FASAH code registration', 'SABER product certification setup'],
    link: '/trading-company'
  },
  {
    icon: ShieldCheck,
    title: 'MISA Foreign Investment Licensing',
    desc: 'End-to-end guidance through the Ministry of Investment (MISA) licensing requirements, business plans, and capital approvals.',
    points: ['MISA application dossier preparation', 'Expedited government approvals', 'License renewals & amendments']
  },
  {
    icon: FileCheck2,
    title: 'Commercial Registration (CR) & MoC',
    desc: 'Drafting Articles of Association (AoA), electronic notarization, and issuance of Commercial Registration from Ministry of Commerce.',
    points: ['Articles of Association drafting', 'Commercial name reservation', 'Ministry of Commerce notarization']
  },
  {
    icon: Scale,
    title: 'Corporate Bank Account Opening',
    desc: 'Assistance in opening multi-currency corporate bank accounts with leading Saudi financial institutions (SNB, Al Rajhi, Riyad Bank).',
    points: ['Bank KYC dossier preparation', 'Direct relationship manager introductions', 'Multi-currency account activation']
  },
  {
    icon: Users,
    title: 'Post-Incorporation Compliance (Qiwa, Muqeem, GOSI)',
    desc: 'Complete setup on Saudi government portals including Qiwa, Muqeem, GOSI, ZATCA, and national address registration.',
    points: ['Qiwa & Saudization setup', 'Muqeem visa & Iqama portal', 'ZATCA tax registration']
  }
];

const BENEFITS = [
  {
    title: '100% Foreign Ownership in Saudi Arabia',
    desc: 'Establish your business under Saudi Vision 2030 reforms without requiring a local Saudi partner in most sectors.'
  },
  {
    title: 'Fast-Track Government Approvals',
    desc: 'Our direct liaison with MISA, Ministry of Commerce, and ZATCA reduces incorporation time from months to weeks.'
  },
  {
    title: 'End-to-End Turnkey Support',
    desc: 'From initial business plan drafting to visa issuance and office lease agreements, we handle every detail.'
  },
  {
    title: 'Integrated Post-Launch Services',
    desc: 'Seamless transition into our accounting, VAT filing, ERP implementation, and payroll services.'
  }
];

export default function CompanyFormationPage() {
  return (
    <Layout
      title="Company Formation & Business Setup in Saudi Arabia | Altapete Solutions"
      description="Start your business in Saudi Arabia with 100% foreign ownership. MISA licensing, Commercial Registration (CR), corporate bank accounts, and complete post-incorporation compliance."
    >
      <EnterprisePageView
        badge="SAUDI BUSINESS SETUP"
        badgeIcon={Building2}
        title={
          <>
            Company Formation in Saudi Arabia.<br />
            <span className="text-gradient">Establish, Scale, and Thrive Under Vision 2030.</span>
          </>
        }
        description="Launch your enterprise in the Middle East's largest economy. Altapete provides turnkey company incorporation, MISA foreign investment licensing, Commercial Registration, and post-incorporation government compliance."
        bgImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1920"
        featuresTag="FORMATION OPTIONS"
        featuresTitle="Turnkey Business Incorporation Services"
        featuresDesc="Everything you need to legally establish and operate your business in the Kingdom of Saudi Arabia."
        features={FEATURES}
        benefitsTag="STRATEGIC VALUE"
        benefitsTitle={
          <>Why Form Your Company with <span className="text-gradient">Altapete</span></>
        }
        benefitsDesc="We remove legal and regulatory complexity so you can focus on winning market share in Saudi Arabia."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200"
        benefitStat={{
          badge: 'Setup Track Record',
          metric: '100% Incorporation Success',
          note: 'Trusted by regional and multinational enterprises'
        }}
        ctaTitle="Ready to Establish Your Company in Saudi Arabia?"
        ctaDesc="Schedule a discovery call with our corporate setup advisors to determine the ideal legal structure, capital requirements, and timeline."
        ctaPrimaryText="Start Your Company Setup"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore Corporate Advisory"
        ctaSecondaryLink="/corporate-advisory"
      />
    </Layout>
  );
}
