import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Briefcase,
  TrendingUp,
  Layers,
  ShieldCheck,
  Target,
  FileCheck2,
  CheckCircle2,
  Zap
} from 'lucide-react';

const FEATURES = [
  {
    icon: Briefcase,
    title: 'Digital Transformation Strategy',
    desc: 'Comprehensive multi-year technology roadmaps aligned with business growth targets, operational KPIs, and Vision 2030 initiatives.',
    points: ['Technology maturity assessments', 'Executive digital roadmap formulation', 'Business-IT alignment frameworks']
  },
  {
    icon: Layers,
    title: 'Enterprise Architecture & Tech Audits',
    desc: 'In-depth review of existing software stacks, technical debt, security gaps, and integration bottlenecks with actionable remedies.',
    points: ['Application portfolio rationalization', 'Technical debt identification', 'Target state architecture blueprints']
  },
  {
    icon: Target,
    title: 'ERP & Software Vendor Evaluation',
    desc: 'Unbiased RFP preparation, vendor scoring, demonstration facilitation, and contract negotiation to select the right software.',
    points: ['RFP specification drafting', 'Objective vendor capability scoring', 'Licensing & SLA contract advisory']
  },
  {
    icon: ShieldCheck,
    title: 'IT Governance, Risk & Compliance (GRC)',
    desc: 'Establishing enterprise IT policies, disaster recovery governance, and alignment with ISO 27001 and Saudi NCA standards.',
    points: ['IT governance charter drafting', 'Risk management & mitigation plans', 'SOP documentation & compliance audits']
  },
  {
    icon: TrendingUp,
    title: 'IT Budgeting & Cost Optimization',
    desc: 'Rationalizing annual IT expenditure, evaluating ROI on capital tech investments, and renegotiating vendor contracts.',
    points: ['IT OPEX & CAPEX optimization', 'Software license consolidation', 'Clear business ROI modeling']
  },
  {
    icon: FileCheck2,
    title: 'Project Assurance & PMO Advisory',
    desc: 'Independent oversight of critical technology implementations ensuring vendors deliver on scope, budget, and promised milestones.',
    points: ['Independent milestone verification', 'Vendor deliverable quality audits', 'Executive progress dashboards']
  }
];

const BENEFITS = [
  {
    title: 'Unbiased, Vendor-Agnostic Advice',
    desc: 'Our recommendations are driven strictly by your business needs, not vendor sales commissions.'
  },
  {
    title: 'Maximize Return on Technology Spend',
    desc: 'Eliminate shelfware and redundant subscriptions with strategic IT asset rationalization.'
  },
  {
    title: 'Seasoned C-Level Technology Advisors',
    desc: 'Direct consultation with former enterprise CIOs and senior architects with decades of regional leadership.'
  },
  {
    title: 'Mitigate Implementation Risks',
    desc: 'Protect major digital investments from costly scope creep, vendor delays, and architectural dead-ends.'
  }
];

export default function ItConsultingPage() {
  return (
    <Layout
      title="Enterprise IT Consulting & Digital Strategy | Altapete Solutions"
      description="Strategic IT consulting, enterprise architecture audits, digital transformation roadmaps, and vendor selection across Saudi Arabia and the GCC."
    >
      <EnterprisePageView
        badge="STRATEGIC IT ADVISORY"
        badgeIcon={Briefcase}
        title={
          <>
            IT Consulting &amp; Strategy.<br />
            <span className="text-gradient">Transforming Technology into Competitive Advantage.</span>
          </>
        }
        description="Make technology investments with complete clarity and confidence. Altapete provides strategic IT consulting, enterprise architecture reviews, vendor evaluations, and digital transformation roadmaps tailored for the GCC market."
        bgImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1920"
        featuresTag="ADVISORY PRACTICE"
        featuresTitle="Strategic Technology Advisory Services"
        featuresDesc="Bridge the gap between executive business strategy and complex technology execution."
        features={FEATURES}
        benefitsTag="EXECUTIVE IMPACT"
        benefitsTitle={
          <>Strategic Clarity with <span className="text-gradient">Altapete Advisory</span></>
        }
        benefitsDesc="We help enterprise leaders navigate technology disruption with actionable, milestone-driven blueprints."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200"
        benefitStat={{
          badge: 'Advisory Experience',
          metric: '13+ Years Enterprise Advisory',
          note: 'Guiding top GCC enterprises through digital transformation'
        }}
        ctaTitle="Ready to Align Your Technology with Business Goals?"
        ctaDesc="Schedule a confidential discovery session with our senior IT consulting partners to assess your digital roadmap."
        ctaPrimaryText="Book Strategy Consultation"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore IT Services"
        ctaSecondaryLink="/it-services"
      />
    </Layout>
  );
}
