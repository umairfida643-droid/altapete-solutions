import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Cpu,
  Bot,
  Zap,
  FileText,
  Workflow,
  Sparkles,
  CheckCircle2,
  Layers
} from 'lucide-react';

const FEATURES = [
  {
    icon: Workflow,
    title: 'Robotic Process Automation (RPA)',
    desc: 'Deploy software bots to execute repetitive, rule-based tasks across ERPs, spreadsheets, and portals with zero human error.',
    points: ['Automated invoice & PO processing', 'Cross-system data entry automation', 'UiPath & Power Automate implementations']
  },
  {
    icon: Bot,
    title: 'AI Virtual Assistants & Chatbots',
    desc: 'Bilingual (Arabic/English) conversational AI assistants capable of qualifying leads, booking consultations, and resolving client inquiries.',
    points: ['Bilingual Arabic & English NLP', 'CRM & ERP appointment integration', 'Omnichannel WhatsApp & Web deployment']
  },
  {
    icon: FileText,
    title: 'Intelligent Document Processing (IDP)',
    desc: 'Extract structured data automatically from scanned paper invoices, bills of lading, contracts, and IDs using OCR and AI models.',
    points: ['Multi-lingual OCR (Arabic & English)', 'Automated ERP data ingestion', '99%+ field extraction accuracy']
  },
  {
    icon: Sparkles,
    title: 'Generative AI & LLM Integration',
    desc: 'Fine-tuned Large Language Models (LLMs) integrated securely into enterprise workflows for contract analysis and knowledge retrieval.',
    points: ['Private enterprise LLM deployment', 'Internal document question-answering', 'Zero sensitive data leakage safeguards']
  },
  {
    icon: Layers,
    title: 'Workflow Automation & System Orchestration',
    desc: 'Connecting disconnected software stacks to trigger automated email alerts, approval chains, and inventory reorders.',
    points: ['Multi-app automated triggers', 'Automated management escalations', 'End-to-end process visibility']
  },
  {
    icon: Zap,
    title: 'Machine Learning & Predictive Scoring',
    desc: 'Custom ML models predicting customer churn, credit risk, equipment breakdown, and dynamic pricing optimization.',
    points: ['Customer risk & credit scoring', 'Predictive equipment maintenance', 'Dynamic pricing algorithms']
  }
];

const BENEFITS = [
  {
    title: 'Reduce Operational Costs by up to 50%',
    desc: 'Automate labor-intensive manual data entry and repetitive clerical workflows to free staff for strategic initiatives.'
  },
  {
    title: 'Eliminate Human Processing Errors',
    desc: 'Ensure 100% accuracy in financial postings, invoice reconciliation, and inventory record updates.'
  },
  {
    title: '24/7 Continuous Execution',
    desc: 'Software bots and AI assistants work non-stop around the clock, processing tasks during off-hours with zero delay.'
  },
  {
    title: 'Enterprise Data Security & Sovereignty',
    desc: 'All AI models and automated workflows operate within secure enterprise boundaries with full Saudi data privacy compliance.'
  }
];

export default function AiAutomationPage() {
  return (
    <Layout
      title="AI & Automation Solutions (RPA) | Altapete Solutions"
      description="Enterprise Robotic Process Automation (RPA), bilingual AI chatbots, intelligent document processing, and workflow automation across Saudi Arabia and the GCC."
    >
      <EnterprisePageView
        badge="ARTIFICIAL INTELLIGENCE & AUTOMATION"
        badgeIcon={Cpu}
        title={
          <>
            AI &amp; Automation Solutions.<br />
            <span className="text-gradient">Intelligent Workflows. Zero Human Error.</span>
          </>
        }
        description="Supercharge your enterprise efficiency with cutting-edge automation. Altapete delivers Robotic Process Automation (RPA), bilingual conversational AI chatbots, intelligent document processing (IDP), and custom machine learning models."
        bgImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920"
        featuresTag="AUTOMATION CAPABILITIES"
        featuresTitle="Comprehensive AI & Automation Services"
        featuresDesc="Empower your workforce by automating routine tasks and infusing intelligence into every business process."
        features={FEATURES}
        benefitsTag="MEASURABLE ROI"
        benefitsTitle={
          <>Why Build Your Automation with <span className="text-gradient">Altapete</span></>
        }
        benefitsDesc="We deliver tangible operational savings through secure, enterprise-grade AI and RPA engineering."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200"
        benefitStat={{
          badge: 'Automation ROI',
          metric: 'Up to 50% Time Saved',
          note: 'On repetitive clerical and financial processing tasks'
        }}
        ctaTitle="Ready to Automate Your Business Processes?"
        ctaDesc="Schedule an automation discovery workshop with our AI specialists to identify high-ROI automation opportunities."
        ctaPrimaryText="Book Automation Workshop"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore IT Services"
        ctaSecondaryLink="/it-services"
      />
    </Layout>
  );
}
