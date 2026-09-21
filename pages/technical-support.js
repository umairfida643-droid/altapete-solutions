import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Headphones,
  Clock,
  ShieldCheck,
  Zap,
  Server,
  Users,
  CheckCircle2,
  FileCheck2
} from 'lucide-react';

const FEATURES = [
  {
    icon: Headphones,
    title: '24/7 Bilingual IT Helpdesk',
    desc: 'Round-the-clock remote support via phone, email, WhatsApp, and ticketing portal in both Arabic and English.',
    points: ['Under 15-minute response SLA', 'Multi-channel support access', 'Bilingual Level 1–Level 3 engineers']
  },
  {
    icon: Users,
    title: 'Dedicated On-Site IT Engineers',
    desc: 'Full-time or scheduled on-premise IT engineers managing desktop support, local printers, network hardware, and staff onboarding.',
    points: ['On-site dedicated technicians', 'Rapid hardware replacement', 'Staff IT training & workstation setup']
  },
  {
    icon: Server,
    title: 'Proactive System & Server Monitoring',
    desc: 'Continuous real-time telemetry tracking server CPU, RAM, disk space, backup health, and network connectivity 24/7.',
    points: ['Automated threshold alerts', 'Preventive failure detection', 'Monthly system health audits']
  },
  {
    icon: ShieldCheck,
    title: 'Patch Management & OS Updates',
    desc: 'Centralized, scheduled deployment of security patches, operating system updates, and antivirus definitions across all endpoints.',
    points: ['Zero-downtime off-hours patching', 'Vulnerability remediation', 'Automated endpoint compliance checks']
  },
  {
    icon: FileCheck2,
    title: 'SLA-Driven Maintenance Contracts (AMC)',
    desc: 'Customized Annual Maintenance Contracts (AMC) with guaranteed response and resolution times tailored to your operating hours.',
    points: ['Tiered SLA guarantees', 'Transparent monthly incident reports', 'Fixed, predictable IT support costs']
  },
  {
    icon: Zap,
    title: 'Disaster Recovery & Backup Verification',
    desc: 'Daily automated backup monitoring, off-site replication, and routine mock disaster recovery restoration drills.',
    points: ['Daily backup success audits', 'Off-site cloud replication', 'Quarterly restoration test drills']
  }
];

const BENEFITS = [
  {
    title: 'Eliminate Costly IT Downtime',
    desc: 'Proactive monitoring catches hardware and software anomalies before they disrupt daily operations.'
  },
  {
    title: 'Predictable, Fixed Monthly IT Costs',
    desc: 'Replace unpredictable repair bills and expensive in-house IT overhead with transparent SLA contracts.'
  },
  {
    title: 'Rapid Escalation to Senior Specialists',
    desc: 'Level 1 helpdesk seamlessly escalates complex database, network, or ERP issues to senior certified architects.'
  },
  {
    title: 'Bilingual Saudi-Based Support Team',
    desc: 'Our local engineers understand regional business etiquette, working hours, and urgency standards.'
  }
];

export default function TechnicalSupportPage() {
  return (
    <Layout
      title="24/7 IT Technical Support & Maintenance | Altapete Solutions"
      description="24/7 bilingual IT helpdesk, dedicated on-site engineers, proactive server monitoring, and SLA-backed maintenance contracts across Saudi Arabia."
    >
      <EnterprisePageView
        badge="MANAGED IT SUPPORT & MAINTENANCE"
        badgeIcon={Headphones}
        title={
          <>
            24/7 Technical Support.<br />
            <span className="text-gradient">Always Available. SLA Guaranteed. Peace of Mind.</span>
          </>
        }
        description="Never let IT issues slow your business down. Altapete provides 24/7 bilingual helpdesk support, dedicated on-site engineers, proactive server monitoring, and SLA-driven Annual Maintenance Contracts (AMC) across Saudi Arabia."
        bgImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1920"
        featuresTag="SUPPORT SERVICES"
        featuresTitle="Comprehensive Managed IT Support"
        featuresDesc="Keep your hardware, software, and workforce operating at peak performance around the clock."
        features={FEATURES}
        benefitsTag="OPERATIONAL CERTAINTY"
        benefitsTitle={
          <>Why Partner with <span className="text-gradient">Altapete for IT Support</span></>
        }
        benefitsDesc="We act as an extension of your team, providing enterprise-grade IT management without the overhead."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200"
        benefitStat={{
          badge: 'Support Standard',
          metric: '15-Minute Response SLA',
          note: '24/7 bilingual technical desk in Saudi Arabia'
        }}
        ctaTitle="Ready to Protect Your Business with 24/7 IT Support?"
        ctaDesc="Connect with our support managers to design a customized Annual Maintenance Contract (AMC) for your business."
        ctaPrimaryText="Get IT Support Quotation"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore IT Services"
        ctaSecondaryLink="/it-services"
      />
    </Layout>
  );
}
