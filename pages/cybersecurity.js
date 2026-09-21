import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  ShieldCheck,
  Lock,
  Eye,
  AlertTriangle,
  Server,
  FileCheck2,
  CheckCircle2,
  Zap
} from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Vulnerability Assessment & Pentesting (VAPT)',
    desc: 'Thorough black-box, grey-box, and white-box penetration testing of web apps, mobile apps, network infrastructure, and APIs.',
    points: ['OWASP Top 10 web & mobile testing', 'External & internal network pentesting', 'Actionable remediation advisory']
  },
  {
    icon: FileCheck2,
    title: 'Saudi NCA Compliance (ECC, CSCC, DCC)',
    desc: 'Audit, gap assessment, and remediation frameworks to meet mandatory National Cybersecurity Authority (NCA) compliance mandates.',
    points: ['Essential Cybersecurity Controls (ECC)', 'Critical Systems Cybersecurity (CSCC)', 'Data Cybersecurity Controls (DCC)']
  },
  {
    icon: Eye,
    title: '24/7 Security Operations Center (SOC)',
    desc: 'Continuous real-time threat monitoring, SIEM log analysis, and incident response to detect and neutralize intrusions early.',
    points: ['24/7/365 active threat hunting', 'Automated SIEM event correlation', 'Rapid incident containment & recovery']
  },
  {
    icon: Lock,
    title: 'Zero-Trust Architecture & IAM',
    desc: 'Implementation of least-privilege access, Multi-Factor Authentication (MFA), Single Sign-On (SSO), and role-based permissions.',
    points: ['Multi-Factor Authentication (MFA) rollouts', 'Privileged Access Management (PAM)', 'Single Sign-On (SSO) enterprise integration']
  },
  {
    icon: AlertTriangle,
    title: 'Security Awareness & Phishing Simulations',
    desc: 'Educating corporate employees through simulated spear-phishing campaigns, interactive training modules, and risk assessments.',
    points: ['Automated phishing campaign simulations', 'Employee risk scoring & analytics', 'Bilingual Arabic/English training content']
  },
  {
    icon: Server,
    title: 'Cloud & Endpoint Security Hardening',
    desc: 'Deploying Endpoint Detection and Response (EDR), next-generation firewalls, and cloud security posture management (CSPM).',
    points: ['Next-Gen Antivirus (NGAV) & EDR', 'Cloud Security Posture Management (CSPM)', 'Automated patch & vulnerability management']
  }
];

const BENEFITS = [
  {
    title: 'Protect Corporate Reputation & Data',
    desc: 'Safeguard intellectual property, customer financial records, and commercial contracts from ransomware and data leaks.'
  },
  {
    title: '100% Alignment with Saudi Regulators',
    desc: 'Avoid costly legal liabilities by maintaining continuous compliance with NCA, SAMA, and CITC standards.'
  },
  {
    title: 'Certified Security Specialists',
    desc: 'Our cybersecurity team holds globally recognized certifications: CISSP, CEH, CISA, and OSCP.'
  },
  {
    title: 'Rapid Incident Response SLA',
    desc: 'Guaranteed emergency response times to contain breaches, recover data, and restore business operations.'
  }
];

export default function CybersecurityPage() {
  return (
    <Layout
      title="Enterprise Cybersecurity & NCA Compliance | Altapete Solutions"
      description="Penetration testing (VAPT), Saudi NCA ECC compliance, 24/7 SOC monitoring, and zero-trust security across Saudi Arabia and the GCC."
    >
      <EnterprisePageView
        badge="CYBERSECURITY & DEFENSE"
        badgeIcon={ShieldCheck}
        title={
          <>
            Enterprise Cybersecurity.<br />
            <span className="text-gradient">Bank-Grade Protection. 100% NCA Compliant.</span>
          </>
        }
        description="Defend your digital assets against advanced cyber threats. Altapete delivers enterprise penetration testing (VAPT), 24/7 SOC threat monitoring, zero-trust architectures, and mandatory Saudi NCA compliance audits."
        bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920"
        featuresTag="SECURITY CAPABILITIES"
        featuresTitle="Comprehensive Cybersecurity Services"
        featuresDesc="Protect every endpoint, network layer, and cloud workload with proactive defense."
        features={FEATURES}
        benefitsTag="SECURITY VALUE"
        benefitsTitle={
          <>Why Trust Your Security to <span className="text-gradient">Altapete</span></>
        }
        benefitsDesc="We combine ethical hacking excellence with deep knowledge of Saudi regulatory cybersecurity mandates."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200"
        benefitStat={{
          badge: 'Security Standard',
          metric: '100% NCA Aligned',
          note: 'Full compliance with ECC and CSCC frameworks'
        }}
        ctaTitle="Ready to Assess Your Cybersecurity Posture?"
        ctaDesc="Schedule a confidential vulnerability assessment and compliance audit with our certified ethical hackers."
        ctaPrimaryText="Book Security Audit"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore IT Services"
        ctaSecondaryLink="/it-services"
      />
    </Layout>
  );
}
