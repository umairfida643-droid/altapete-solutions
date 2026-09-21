import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Code2,
  Globe2,
  Smartphone,
  Cloud,
  Briefcase,
  ShieldCheck,
  Server,
  Headphones,
  BarChart3,
  Cpu,
  Sliders,
  Zap
} from 'lucide-react';

const FEATURES = [
  {
    icon: Code2,
    title: 'Software Development',
    desc: 'Bespoke enterprise platforms, SaaS applications, custom APIs, and legacy system modernization.',
    points: ['Custom business software', 'Microservices & REST APIs', 'Scalable enterprise SaaS'],
    link: '/software-development'
  },
  {
    icon: Globe2,
    title: 'Web Development',
    desc: 'High-performance corporate portals, omnichannel e-commerce, and responsive web applications.',
    points: ['Next.js & React architectures', 'E-commerce & portal development', 'SEO & Core Web Vitals optimization'],
    link: '/web-development'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native iOS & Android and cross-platform Flutter/React Native mobile applications for enterprises.',
    points: ['iOS & Android native apps', 'Flutter & React Native cross-platform', 'Enterprise mobile security'],
    link: '/mobile-app-development'
  },
  {
    icon: Cloud,
    title: 'Cloud Services & DevOps',
    desc: 'Cloud migration, DevOps pipelines, container orchestration, and multi-cloud architecture (AWS, Azure, GCP).',
    points: ['AWS, Azure & Saudi Cloud hosting', 'CI/CD automated pipelines', 'Kubernetes & Docker containerization'],
    link: '/cloud-services'
  },
  {
    icon: Briefcase,
    title: 'IT Consulting & Strategy',
    desc: 'Technology roadmaps, digital transformation strategy, enterprise architecture, and vendor evaluation.',
    points: ['Digital transformation blueprints', 'Enterprise architecture audits', 'IT governance & budgeting'],
    link: '/it-consulting'
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity & Compliance',
    desc: 'Penetration testing, vulnerability assessments, SOC monitoring, and Saudi NCA ECC compliance.',
    points: ['Vulnerability & penetration testing', 'Saudi NCA ECC & ISO 27001 compliance', '24/7 SOC security monitoring'],
    link: '/cybersecurity'
  },
  {
    icon: Server,
    title: 'IT Infrastructure & Networking',
    desc: 'Enterprise network design, datacenter setup, structured cabling, VPNs, and SD-WAN deployments.',
    points: ['Enterprise LAN/WAN & SD-WAN', 'Server & datacenter infrastructure', 'High-availability VPN networks'],
    link: '/it-infrastructure'
  },
  {
    icon: Headphones,
    title: 'Technical Support & Maintenance',
    desc: '24/7 helpdesk, remote and on-site IT support, SLA-backed maintenance contracts, and patch management.',
    points: ['24/7 bilingual IT helpdesk', 'SLA-backed incident response', 'Proactive hardware & software maintenance'],
    link: '/technical-support'
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    desc: 'Business intelligence dashboards, data warehousing, ETL pipelines, and predictive analytics (Power BI, Tableau).',
    points: ['Power BI & Tableau dashboards', 'Data warehousing & ETL pipelines', 'Predictive business analytics'],
    link: '/data-analytics'
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    desc: 'Robotic process automation (RPA), AI chatbots, machine learning models, and workflow automation.',
    points: ['Robotic Process Automation (RPA)', 'AI chatbots & virtual assistants', 'Intelligent document processing'],
    link: '/ai-automation'
  },
  {
    icon: Sliders,
    title: 'Customized IT Solutions',
    desc: 'Tailor-made technology solutions engineered from the ground up for unique operational needs.',
    points: ['Bespoke industry solutions', 'Hardware-software integration', 'Dedicated engineering teams'],
    link: '/customized-it-solutions'
  }
];

const BENEFITS = [
  {
    title: 'End-to-End Technology Partner',
    desc: 'From custom software and cloud infrastructure to 24/7 support and cybersecurity, all under one roof.'
  },
  {
    title: 'Saudi Sovereign Cloud & Compliance',
    desc: 'Full alignment with Saudi National Cybersecurity Authority (NCA) mandates and local data residency laws.'
  },
  {
    title: 'Senior Engineering Expertise',
    desc: 'Direct collaboration with senior software architects and certified cloud engineers with 13+ years of track record.'
  },
  {
    title: 'Agile & Milestone-Driven Delivery',
    desc: 'Predictable sprint delivery, transparent communications, and guaranteed post-launch warranty.'
  }
];

export default function ItServicesPage() {
  return (
    <Layout
      title="Enterprise IT Services & Solutions | Altapete Solutions"
      description="Comprehensive IT services across Saudi Arabia and the GCC. Custom software development, cloud services, cybersecurity, mobile apps, and 24/7 technical support."
    >
      <EnterprisePageView
        badge="ENTERPRISE IT SERVICES"
        badgeIcon={Code2}
        title={
          <>
            Comprehensive IT Services.<br />
            <span className="text-gradient">Engineered for Digital Transformation.</span>
          </>
        }
        description="Accelerate your digital capabilities with Altapete's full-spectrum IT services. From custom software and mobile applications to cloud infrastructure, cybersecurity, and 24/7 technical support."
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920"
        featuresTag="OUR IT CAPABILITIES"
        featuresTitle="End-to-End Enterprise Technology Spectrum"
        featuresDesc="Discover our 11 dedicated technology practices designed to modernize and protect your business."
        features={FEATURES}
        benefitsTag="STRATEGIC VALUE"
        benefitsTitle={
          <>Why Leading Enterprises Choose <span className="text-gradient">Altapete IT</span></>
        }
        benefitsDesc="We deliver modern, scalable, and secure technology solutions backed by rigorous enterprise SLAs."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200"
        benefitStat={{
          badge: 'Technology Track Record',
          metric: '100+ Enterprise Deployments',
          note: 'Trusted by leading GCC organizations'
        }}
        ctaTitle="Ready to Accelerate Your Technology Roadmap?"
        ctaDesc="Connect with our senior technology architects to discuss your project requirements, architecture, and timeline."
        ctaPrimaryText="Book Technical Consultation"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore Company Profile"
        ctaSecondaryLink="/company-profile"
      />
    </Layout>
  );
}
