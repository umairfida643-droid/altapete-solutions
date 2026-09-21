import React from 'react';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Shield,
  HardHat,
  ClipboardCheck,
  Bell,
  AlertTriangle,
  FileText,
  BarChart3,
  Eye,
  Activity
} from 'lucide-react';

const FEATURES = [
  {
    icon: Shield,
    title: 'Incident Management',
    desc: 'Capture, track, and resolve every workplace incident with full audit trails.',
    points: ['Report incidents instantly via web or mobile', 'Near-miss tracking & investigation', 'Severity classification & root-cause analysis']
  },
  {
    icon: HardHat,
    title: 'PPE & Equipment Tracking',
    desc: 'Maintain full visibility over safety equipment lifecycle and compliance status.',
    points: ['Equipment lifecycle management', 'Scheduled inspection reminders', 'Compliance status dashboards']
  },
  {
    icon: ClipboardCheck,
    title: 'Safety Inspections',
    desc: 'Replace paper checklists with digital, scheduled inspection workflows.',
    points: ['Digital safety checklists', 'Scheduled & ad-hoc audits', 'Automated corrective action assignment']
  },
  {
    icon: Bell,
    title: 'Real-Time Alerts & Notifications',
    desc: 'Keep the right people informed the moment a safety event occurs.',
    points: ['SMS & email alert dispatch', 'Custom escalation rules', 'Emergency protocol triggers']
  },
  {
    icon: AlertTriangle,
    title: 'Risk Assessment',
    desc: 'Proactively identify and mitigate workplace hazards before they become incidents.',
    points: ['Hazard identification & logging', 'Risk matrix scoring', 'Mitigation plan tracking']
  },
  {
    icon: FileText,
    title: 'Compliance & Regulatory',
    desc: 'Stay audit-ready with built-in support for local and international safety standards.',
    points: ['OSHA compliance tracking', 'Local KSA safety regulation support', 'Certification & renewal tracking']
  },
  {
    icon: BarChart3,
    title: 'Safety Analytics & KPIs',
    desc: 'Data-driven safety culture powered by real-time dashboards and trend reports.',
    points: ['Accident rate & frequency tracking', 'Lost-time injury (LTI) analysis', 'Safety trend & comparison reports']
  },
  {
    icon: Eye,
    title: 'Surveillance & Monitoring',
    desc: 'Integrate physical security systems for a unified safety monitoring environment.',
    points: ['CCTV integration & event linking', 'Zone & area monitoring', 'Access control log correlation']
  },
  {
    icon: Activity,
    title: 'Emergency Response',
    desc: 'Ensure your teams are prepared and response times are minimised in any emergency.',
    points: ['Emergency drill scheduling & tracking', 'Evacuation plan management', 'Response time monitoring & reporting']
  }
];

const BENEFITS = [
  {
    title: 'Reduce Workplace Incidents',
    desc: 'Proactive hazard identification and automated risk mitigation prevent accidents before they occur.'
  },
  {
    title: 'Full Saudi Regulatory Compliance',
    desc: 'Ensure 100% compliance with civil defense, OSHA, and Saudi Ministry of Human Resources safety standards.'
  },
  {
    title: 'Instant Incident Response & Escalation',
    desc: 'Automated real-time notifications alert site supervisors and emergency teams immediately.'
  },
  {
    title: 'Data-Driven Safety Culture',
    desc: 'Track Lost Time Injuries (LTI) and safety KPIs with real-time executive dashboards.'
  },
  {
    title: 'Eliminate Paper Checklists',
    desc: 'Replace slow manual paper logs with mobile digital inspection forms and automated audit trails.'
  },
  {
    title: 'Protect Workforce & Brand Reputation',
    desc: 'Demonstrate highest standard duty of care to protect workers, clients, and corporate standing.'
  }
];

export default function SafetyManagementView() {
  return (
    <EnterprisePageView
      badge="WORKPLACE SAFETY ERP"
      badgeIcon={Shield}
      title={
        <>
          Comprehensive Safety <br />
          <span className="text-gradient">Management System.</span>
        </>
      }
      description="From incident tracking and risk assessment to compliance reporting and emergency response — our integrated safety platform protects your people and keeps your operations audit-ready."
      bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920"
      featuresTag="SAFETY TOOLKIT"
      featuresTitle="A Complete Toolkit for Workplace Safety"
      featuresDesc="Nine integrated modules designed to eliminate hazards, ensure compliance, and protect every worker."
      features={FEATURES}
      benefitsTag="SAFETY CULTURE"
      benefitsTitle={
        <>Why Leading Organizations Trust <span className="text-gradient">Altapete for Safety</span></>
      }
      benefitsDesc="Measurable safety improvements backed by reliable technology, automation, and expert support."
      benefits={BENEFITS}
      benefitStat={{
        badge: 'Safety SLA',
        metric: 'Zero-Lag Emergency Alerts',
        note: 'Instant multi-channel notifications across all facilities'
      }}
      ctaTitle="Ready to Build a Safer Workplace?"
      ctaDesc="Speak with our safety management specialists and discover how Altapete can protect your people and reduce liability."
      ctaPrimaryText="Schedule Safety Demo"
      ctaPrimaryLink="/contact-us"
      ctaSecondaryText="Explore What We Do"
      ctaSecondaryLink="/what-we-do"
    />
  );
}
