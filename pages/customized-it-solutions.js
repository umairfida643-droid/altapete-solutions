import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Sliders,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Users
} from 'lucide-react';

const FEATURES = [
  {
    icon: Sliders,
    title: 'Bespoke Enterprise Systems',
    desc: 'Custom-built software engineered from the ground up to solve complex operational challenges that off-the-shelf tools cannot handle.',
    points: ['Tailor-made data models & workflows', 'Zero unwanted bloat or unused modules', 'High-concurrency database architecture']
  },
  {
    icon: Cpu,
    title: 'Hardware & IoT System Integration',
    desc: 'Connecting software platforms with physical hardware including RFID gates, barcode scanners, GPS telematics, and sensors.',
    points: ['Industrial IoT device telemetry', 'RFID yard & inventory tracking', 'Automated weighbridge & gate integration']
  },
  {
    icon: Layers,
    title: 'Legacy Bridge & Middleware Engineering',
    desc: 'Building custom middleware to synchronize isolated legacy software with modern cloud applications, ERPs, and government portals.',
    points: ['Custom ETL & API bridges', 'Automated data transformation', 'ZATCA Phase 2 compliance integration']
  },
  {
    icon: Users,
    title: 'Dedicated Engineering Squads',
    desc: 'Full-stack software engineers, QA specialists, and DevOps architects assigned exclusively to your digital initiatives.',
    points: ['Direct communication with developers', 'Agile two-week sprint cycles', 'Flexible scaling of team size']
  },
  {
    icon: ShieldCheck,
    title: 'Bank-Grade Security & Data Sovereignty',
    desc: 'Engineered with strict Saudi cybersecurity standards, encrypted data storage, and complete local cloud data residency.',
    points: ['AES-256 encryption at rest & transit', 'Saudi National data residency', 'Regular third-party security audits']
  },
  {
    icon: Zap,
    title: 'Rapid MVP to Enterprise Scale',
    desc: 'Accelerated development methodology delivering functional Minimum Viable Products in weeks, followed by iterative feature scaling.',
    points: ['2–4 week initial MVP deployment', 'Iterative user feedback integration', 'Guaranteed post-launch SLA warranty']
  }
];

const BENEFITS = [
  {
    title: 'Exact Alignment with Business Workflows',
    desc: 'No compromises — every screen, field, and calculation is built specifically to match how your team operates.'
  },
  {
    title: 'Full Source Code & IP Ownership',
    desc: 'You retain 100% intellectual property ownership of all custom software, database schemas, and documentation.'
  },
  {
    title: 'Bilingual Saudi-Based Specialists',
    desc: 'Direct collaboration with senior engineers who understand regional business culture and regulatory mandates.'
  },
  {
    title: 'Long-Term Maintenance & SLA Support',
    desc: 'Continuous enhancements, OS compatibility updates, and guaranteed SLA response times post-deployment.'
  }
];

export default function CustomizedItSolutionsPage() {
  return (
    <Layout
      title="Customized IT Solutions & Bespoke Engineering | Altapete Solutions"
      description="Bespoke enterprise IT solutions, custom hardware-software integration, dedicated developer squads, and rapid MVP delivery across Saudi Arabia and the GCC."
    >
      <EnterprisePageView
        badge="TAILORED TECHNOLOGY SOLUTIONS"
        badgeIcon={Sliders}
        title={
          <>
            Customized IT Solutions.<br />
            <span className="text-gradient">Engineered to Your Exact Operational DNA.</span>
          </>
        }
        description="When off-the-shelf software falls short, Altapete builds proprietary technology solutions tailored to your exact operational requirements. From bespoke enterprise platforms and IoT integrations to dedicated engineering squads."
        bgImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1920"
        featuresTag="TAILORED CAPABILITIES"
        featuresTitle="Bespoke Engineering Capabilities"
        featuresDesc="Turn your unique operational ideas into high-performance, compliant, and scalable digital realities."
        features={FEATURES}
        benefitsTag="COMPETITIVE ADVANTAGE"
        benefitsTitle={
          <>Why Choose Custom Solutions with <span className="text-gradient">Altapete</span></>
        }
        benefitsDesc="We engineer proprietary digital advantages that competitors using standard software cannot replicate."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200"
        benefitStat={{
          badge: 'Bespoke Quality',
          metric: '100% Custom Engineered',
          note: 'Built from the ground up for your unique requirements'
        }}
        ctaTitle="Have a Unique Technology Challenge?"
        ctaDesc="Schedule an architecture scoping session with our senior solutions engineers to explore your custom solution."
        ctaPrimaryText="Discuss Your Requirements"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore IT Services"
        ctaSecondaryLink="/it-services"
      />
    </Layout>
  );
}
