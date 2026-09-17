import React from 'react';
import Layout from '@/components/Layout';
import TaxationZakatView from '@/components/TaxationZakatView';

export default function TaxationZakatAdvisoryPage() {
  return (
    <Layout
      title="Taxation & ZATCA Advisory Services Saudi Arabia | Altapete Solutions"
      description="Comprehensive Zakat computation, Corporate Income Tax, 15% VAT reconciliations, Withholding Tax, Transfer Pricing, and FATOORA Phase 2 E-Invoicing advisory in Saudi Arabia."
    >
      <TaxationZakatView />
    </Layout>
  );
}
