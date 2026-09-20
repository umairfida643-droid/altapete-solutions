import React from 'react';
import Layout from '@/components/Layout';
import AccountingFinancialAdvisoryView from '@/components/AccountingFinancialAdvisoryView';

export default function AccountingFinancialAdvisoryPage() {
  return (
    <Layout
      title="Accounting & Financial Advisory Services | Altapete Solutions"
      description="Certified experts delivering end-to-end financial solutions — from accounting management, fractional CFO, and IFRS advisory to actuarial valuation and risk assessment across Saudi Arabia."
    >
      <AccountingFinancialAdvisoryView />
    </Layout>
  );
}

