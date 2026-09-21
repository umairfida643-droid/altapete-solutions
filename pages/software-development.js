import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Code2,
  Server,
  Layers,
  Database,
  Cpu,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  Zap
} from 'lucide-react';

const FEATURES = [
  {
    icon: Code2,
    title: 'Custom Enterprise Software',
    desc: 'Bespoke operational platforms engineered to replace rigid off-the-shelf software with exact-fit workflows.',
    points: ['Clean modular architecture', 'Role-based access & audit trails', 'High-concurrency database design']
  },
  {
    icon: Server,
    title: 'Enterprise SaaS Platforms',
    desc: 'Multi-tenant cloud platforms designed for recurring revenue, high availability, and automated subscription billing.',
    points: ['Multi-tenant data isolation', 'Automated billing & metering', 'Global CDN & edge delivery']
  },
  {
    icon: GitBranch,
    title: 'Microservices & REST APIs',
    desc: 'Scalable backend architectures and secure API endpoints connecting mobile apps, third parties, and internal tools.',
    points: ['RESTful & GraphQL API design', 'Event-driven message queues', 'Swagger / OpenAPI documentation']
  },
  {
    icon: Database,
    title: 'Legacy System Modernization',
    desc: 'Refactoring outdated monolithic software into modern, cloud-native architectures without data loss.',
    points: ['Zero-downtime database migration', 'Modernized intuitive UI/UX', 'Cloud-native performance tuning']
  },
  {
    icon: ShieldCheck,
    title: 'Security-First Development (DevSecOps)',
    desc: 'Automated vulnerability scanning, OWASP Top 10 compliance, and continuous code quality enforcement.',
    points: ['Static & dynamic code analysis', 'OWASP Top 10 hardening', 'Automated CI/CD security checks']
  },
  {
    icon: Cpu,
    title: 'ERP & Third-Party System Extensions',
    desc: 'Custom middleware and plugins extending capabilities of Oracle, SAP, Odoo, and Microsoft Dynamics.',
    points: ['Custom business logic hooks', 'Bi-directional ETL pipelines', 'ZATCA Phase 2 compliance integration']
  }
];

const BENEFITS = [
  {
    title: 'Exact-Fit Business Logic',
    desc: 'Build software around your unique operational competitive advantages instead of altering your processes to fit rigid tools.'
  },
  {
    title: 'Full Intellectual Property Ownership',
    desc: 'You own 100% of the source code, database architecture, and intellectual property with zero recurring vendor lock-in.'
  },
  {
    title: 'Rapid Prototyping & Agile Sprints',
    desc: 'See working software in weeks with iterative two-week sprints, transparent sprint demos, and continuous feedback.'
  },
  {
    title: 'Enterprise SLA & Post-Launch Support',
    desc: 'Guaranteed warranty period, SLA-backed bug fixes, and continuous feature enhancements.'
  }
];

export default function SoftwareDevelopmentPage() {
  return (
    <Layout
      title="Custom Software Development Services | Altapete Solutions"
      description="Enterprise custom software development, SaaS platforms, microservices, and legacy modernization across Saudi Arabia and the GCC."
    >
      <EnterprisePageView
        badge="CUSTOM SOFTWARE ENGINEERING"
        badgeIcon={Code2}
        title={
          <>
            Custom Software Development.<br />
            <span className="text-gradient">Engineered for Your Exact Business Workflows.</span>
          </>
        }
        description="Build proprietary digital assets that drive enterprise efficiency. Altapete delivers bespoke software platforms, scalable SaaS architectures, and secure API integrations built for long-term reliability."
        bgImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920"
        featuresTag="DEVELOPMENT CAPABILITIES"
        featuresTitle="Full-Cycle Software Engineering"
        featuresDesc="From architecture design to continuous deployment, we engineer mission-critical software solutions."
        features={FEATURES}
        benefitsTag="STRATEGIC ADVANTAGE"
        benefitsTitle={
          <>Why Build Custom Software with <span className="text-gradient">Altapete</span></>
        }
        benefitsDesc="We combine world-class engineering standards with deep regional enterprise domain knowledge."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200"
        benefitStat={{
          badge: 'Engineering Quality',
          metric: '100% Source Code Ownership',
          note: 'Zero proprietary lock-in with full IP transfer'
        }}
        ctaTitle="Ready to Build Your Custom Software Solution?"
        ctaDesc="Schedule a technical discovery session with our senior software architects to scope your architecture and timeline."
        ctaPrimaryText="Request Technical Scoping"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore IT Services"
        ctaSecondaryLink="/it-services"
      />
    </Layout>
  );
}
