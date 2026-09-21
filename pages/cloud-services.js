import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Cloud,
  Server,
  ShieldCheck,
  Zap,
  Cpu,
  GitBranch,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

const FEATURES = [
  {
    icon: Cloud,
    title: 'Cloud Migration & Modernization',
    desc: 'Seamless migration of on-premise servers, databases, and enterprise applications to AWS, Azure, Google Cloud, or Saudi sovereign clouds.',
    points: ['Lift-and-shift & re-platforming', 'Zero data loss migration plans', 'Downtime minimization strategies']
  },
  {
    icon: Server,
    title: 'Saudi Sovereign Cloud & Data Residency',
    desc: 'Deploy workloads in certified Class B/C Saudi datacenters ensuring full compliance with national data residency regulations.',
    points: ['CST & NCA certified hosting', 'Local data storage within KSA', 'High-security government compliance']
  },
  {
    icon: GitBranch,
    title: 'DevOps & Automated CI/CD Pipelines',
    desc: 'Accelerate release velocity with automated build, test, and deployment pipelines using GitHub Actions, GitLab, and Terraform.',
    points: ['Infrastructure as Code (Terraform)', 'Automated container deployments', 'Zero-downtime blue/green rollouts']
  },
  {
    icon: Cpu,
    title: 'Kubernetes & Container Orchestration',
    desc: 'Containerize monolithic applications and manage scalable microservices clusters with Kubernetes (EKS, AKS, GKE).',
    points: ['Docker containerization', 'Auto-scaling pod management', 'High-availability cluster design']
  },
  {
    icon: ShieldCheck,
    title: 'Cloud Security & Disaster Recovery',
    desc: 'Automated multi-region backups, point-in-time database restoration, and high-availability disaster recovery architectures.',
    points: ['RTO & RPO under 15 minutes', 'Automated snapshot lifecycle', 'Encrypted cloud storage (AES-256)']
  },
  {
    icon: Zap,
    title: 'Cloud Cost Optimization (FinOps)',
    desc: 'Continuous cloud spending audits, right-sizing underutilized instances, and reserved capacity planning to cut monthly bills.',
    points: ['Up to 35% cloud cost reduction', 'Unused resource cleanup', 'Monthly executive FinOps reporting']
  }
];

const BENEFITS = [
  {
    title: 'Guaranteed 99.9% Infrastructure Uptime',
    desc: 'High-availability architectures with automated failover ensure your critical services never go down.'
  },
  {
    title: 'Full Compliance with Saudi Data Laws',
    desc: 'Host with complete peace of mind knowing your data resides within Saudi borders under regulatory compliance.'
  },
  {
    title: 'Elastic Auto-Scaling on Demand',
    desc: 'Handle traffic spikes effortlessly during peak sales seasons or period-end reporting without overpaying during off-peak.'
  },
  {
    title: 'Certified Cloud Architects',
    desc: 'Direct consultation and 24/7 management by AWS, Azure, and Google Cloud certified architects.'
  }
];

export default function CloudServicesPage() {
  return (
    <Layout
      title="Cloud Services, Migration & DevOps | Altapete Solutions"
      description="Enterprise cloud migration, Saudi sovereign cloud hosting, DevOps automation, and Kubernetes orchestration across Saudi Arabia and the GCC."
    >
      <EnterprisePageView
        badge="CLOUD INFRASTRUCTURE & DEVOPS"
        badgeIcon={Cloud}
        title={
          <>
            Enterprise Cloud Services.<br />
            <span className="text-gradient">Secure, Scalable, and Sovereign.</span>
          </>
        }
        description="Modernize your IT infrastructure with certified cloud engineering. Altapete delivers turnkey cloud migrations, DevOps CI/CD automation, FinOps cost optimization, and certified Saudi sovereign cloud hosting."
        bgImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1920"
        featuresTag="CLOUD CAPABILITIES"
        featuresTitle="Comprehensive Cloud & DevOps Engineering"
        featuresDesc="Everything your business needs to build a resilient, secure, and cost-effective cloud environment."
        features={FEATURES}
        benefitsTag="STRATEGIC ADVANTAGE"
        benefitsTitle={
          <>Why Partner with <span className="text-gradient">Altapete for Cloud</span></>
        }
        benefitsDesc="We ensure your cloud transition is smooth, cost-efficient, and fully compliant with Saudi regulations."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200"
        benefitStat={{
          badge: 'Cloud SLA',
          metric: '99.95% Availability',
          note: 'Backed by 24/7 cloud monitoring and automated failover'
        }}
        ctaTitle="Ready to Accelerate Your Cloud Roadmap?"
        ctaDesc="Schedule a cloud infrastructure assessment with our certified cloud architects to review your migration strategy."
        ctaPrimaryText="Book Cloud Assessment"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore IT Services"
        ctaSecondaryLink="/it-services"
      />
    </Layout>
  );
}
