import React from 'react';
import Layout from '@/components/Layout';
import RetailManagementView from '@/components/RetailManagementView';

export default function RetailManagementPage() {
  return (
    <Layout
      title="Retail Management Solutions | Altapete Solutions"
      description="End-to-end retail ERP solutions with POS, inventory, customer loyalty, and sales analytics by Altapete Solutions."
    >
      <RetailManagementView />
    </Layout>
  );
}
