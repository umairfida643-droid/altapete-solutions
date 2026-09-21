import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Briefcase,
  ShieldCheck,
  FileCheck2,
  Users,
  Scale,
  Building2,
  Clock,
  CheckCircle2,
  Zap
} from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'MISA Service Investment License',
    desc: 'Preparation and submission of the MISA service investment application for 100% foreign ownership with zero Saudi national partner required.',
    points: ['100% foreign capital ownership', 'No minimum capital requirement for most sectors', 'Expedited approval within 5–7 business days']
  },
  {
    icon: FileCheck2,
    title: 'Commercial Registration (CR) Issuance',
    desc: 'Drafting bilingual Articles of Association (AoA), electronic notarization, and issuance of the official CR from Ministry of Commerce.',
    points: ['MoC name reservation', 'Bilingual AoA drafting & notarization', 'Immediate CR certificate issuance']
  },
  {
    icon: Building2,
    title: 'Chamber of Commerce & National Address',
    desc: 'Registration with the local Chamber of Commerce (Riyadh, Jeddah, Eastern Province) and official SPL National Address setup.',
    points: ['Chamber of Commerce membership', 'Registered SPL National Address', 'Physical / virtual office lease advisory']
  },
  {
    icon: Scale,
    title: 'Corporate Bank Account Opening',
    desc: 'Assistance in opening multi-currency commercial accounts with major Saudi banks (SNB, Al Rajhi, SAB, Riyad Bank).',
    points: ['Bank KYC dossier assembly', 'Direct relationship manager meetings', 'Online banking & debit/credit card access']
  },
  {
    icon: Users,
    title: 'Qiwa, Muqeem & Labor Setup',
    desc: 'Complete onboarding on Qiwa portal, Muqeem government service, GOSI social insurance, and establishment file creation.',
    points: ['Qiwa establishment file opening', 'Saudization (Nitaqat) compliance roadmap', 'Muqeem portal setup for investor/employee visas']
  },
  {
    icon: ShieldCheck,
    title: 'ZATCA Tax & VAT Registration',
    desc: 'Registration with the Zakat, Tax and Customs Authority (ZATCA) for Corporate Income Tax and Value Added Tax (VAT).',
    points: ['ZATCA tax number issuance', '15% VAT registration', 'Phase 2 e-invoicing compliance setup']
  }
];

const BENEFITS = [
  {
    title: '100% Foreign Ownership Guarantee',
    desc: 'Full legal control and profit repatriation without local sponsor encumbrances.'
  },
  {
    title: 'Ideal for IT, Consulting & Technical Firms',
    desc: 'Specifically structured for software companies, engineering consultancies, management advisors, and marketing agencies.'
  },
  {
    title: 'Fast-Track 2–4 Week Incorporation',
    desc: 'Structured execution by experienced corporate PROs minimizing bureaucratic delays.'
  },
  {
    title: 'Post-Incorporation Operational Ready',
    desc: 'From day one, your company is ready to hire staff, invoice clients, and bid on government tenders.'
  }
];

export default function ServicesCompanyPage() {
  return (
    <Layout
      title="Services Company Formation in Saudi Arabia | Altapete Solutions"
      description="Form a 100% foreign-owned services company in Saudi Arabia. MISA licensing, CR issuance, corporate bank account, and complete labor portal setup."
    >
      <EnterprisePageView
        badge="SERVICES ENTITY SETUP"
        badgeIcon={Briefcase}
        title={
          <>
            Services Company Formation.<br />
            <span className="text-gradient">100% Foreign Ownership in Saudi Arabia.</span>
          </>
        }
        description="Establish your IT, consulting, engineering, or professional services business in Saudi Arabia with complete peace of mind. Altapete provides end-to-end MISA licensing, Commercial Registration, bank account opening, and government portal activation."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920"
        featuresTag="STEP-BY-STEP PROCESS"
        featuresTitle="Complete Services Entity Incorporation"
        featuresDesc="We manage the entire legal and operational setup process from initial licensing to your first employee visa."
        features={FEATURES}
        benefitsTag="STRATEGIC ADVANTAGE"
        benefitsTitle={
          <>Why Launch Your Services Firm with <span className="text-gradient">Altapete</span></>
        }
        benefitsDesc="Our deep relationships with Saudi government entities ensure smooth approvals and zero unexpected hurdles."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200"
        benefitStat={{
          badge: 'Turnkey Delivery',
          metric: '2–4 Weeks to Launch',
          note: 'Full legal incorporation and operational readiness'
        }}
        ctaTitle="Ready to Start Your Services Business in Saudi Arabia?"
        ctaDesc="Schedule a consultation with our corporate formation specialists to begin your MISA application."
        ctaPrimaryText="Start Incorporation Process"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore Company Formation"
        ctaSecondaryLink="/company-formation"
      />
    </Layout>
  );
}
