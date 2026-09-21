import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  BarChart3,
  TrendingUp,
  Database,
  PieChart,
  Zap,
  Layers,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';

const FEATURES = [
  {
    icon: BarChart3,
    title: 'Executive BI Dashboards (Power BI & Tableau)',
    desc: 'Interactive, real-time executive dashboards consolidating sales, finance, inventory, and operational metrics into single-pane visibility.',
    points: ['Power BI & Tableau implementation', 'Real-time drill-down capabilities', 'Role-based access & automated email reports']
  },
  {
    icon: Database,
    title: 'Data Warehousing & Lakehouse Architecture',
    desc: 'Centralizing siloed databases from ERP, CRM, POS, and e-commerce into modern cloud data warehouses (Snowflake, BigQuery, Redshift).',
    points: ['Snowflake, BigQuery & Redshift setup', 'Historical data modeling & cleansing', 'High-speed query optimization']
  },
  {
    icon: Layers,
    title: 'Automated ETL & Data Pipelines',
    desc: 'Automated extraction, transformation, and loading pipelines keeping your analytical reports continuously synchronized with live operations.',
    points: ['Automated scheduled & streaming ETL', 'Data validation & error handling', 'Zero impact on production transactional DBs']
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics & Forecasting',
    desc: 'Machine learning models forecasting customer churn, demand surges, seasonal inventory requirements, and cash flow trends.',
    points: ['Demand & inventory forecasting', 'Customer lifetime value modeling', 'Cash flow predictive analytics']
  },
  {
    icon: FileSpreadsheet,
    title: 'Financial & Regulatory Reporting Automation',
    desc: 'Automating complex financial consolidation, IFRS reporting, and ZATCA tax reconciliations to eliminate manual spreadsheet errors.',
    points: ['Automated trial balance consolidation', 'IFRS financial statement generation', '15% VAT & Zakat reconciliation models']
  },
  {
    icon: Zap,
    title: 'Self-Service Analytics & Training',
    desc: 'Empowering departmental managers to build their own ad-hoc reports and analyses with intuitive semantic data models and training.',
    points: ['User-friendly semantic layers', 'Corporate Power BI training workshops', 'Pre-built departmental template libraries']
  }
];

const BENEFITS = [
  {
    title: 'Make Confident, Data-Driven Decisions',
    desc: 'Replace gut instinct and delayed spreadsheets with real-time, verified business intelligence.'
  },
  {
    title: 'Single Source of Truth Across Departments',
    desc: 'Align finance, sales, and supply chain around identical, reconciled metrics and KPIs.'
  },
  {
    title: 'Identify Hidden Revenue & Cost Leaks',
    desc: 'Pinpoint unprofitable products, overdue accounts receivable, and supply chain bottlenecks instantly.'
  },
  {
    title: 'Seamless ERP & Database Connectivity',
    desc: 'Connect directly to Oracle, SAP, Odoo, SQL Server, and cloud APIs without manual exports.'
  }
];

export default function DataAnalyticsPage() {
  return (
    <Layout
      title="Enterprise Data Analytics & Power BI Solutions | Altapete Solutions"
      description="Enterprise business intelligence, Power BI dashboards, data warehousing, and predictive analytics across Saudi Arabia and the GCC."
    >
      <EnterprisePageView
        badge="BUSINESS INTELLIGENCE & ANALYTICS"
        badgeIcon={BarChart3}
        title={
          <>
            Data &amp; Analytics Solutions.<br />
            <span className="text-gradient">Turn Raw Data into Actionable Strategic Growth.</span>
          </>
        }
        description="Unlock the full value of your enterprise data. Altapete delivers executive Power BI dashboards, modern cloud data warehousing, automated ETL pipelines, and predictive analytics tailored for regional market leaders."
        bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920"
        featuresTag="ANALYTICS CAPABILITIES"
        featuresTitle="Comprehensive Data & BI Solutions"
        featuresDesc="Empower your leadership with real-time clarity across every division of your enterprise."
        features={FEATURES}
        benefitsTag="STRATEGIC ADVANTAGE"
        benefitsTitle={
          <>Transform Your Business Intelligence with <span className="text-gradient">Altapete</span></>
        }
        benefitsDesc="We bridge complex data engineering with clean, intuitive executive visualizations."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
        benefitStat={{
          badge: 'BI Impact',
          metric: 'Real-Time Insights',
          note: 'Consolidating multi-company data into live executive dashboards'
        }}
        ctaTitle="Ready to Unlock Insights from Your Data?"
        ctaDesc="Schedule a discovery session with our senior BI architects to review your reporting challenges and see a live dashboard demo."
        ctaPrimaryText="Book BI Consultation"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore IT Services"
        ctaSecondaryLink="/it-services"
      />
    </Layout>
  );
}
