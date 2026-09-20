import React from 'react';
import Layout from '@/components/Layout';
import ShippingSolutionsView from '@/components/ShippingSolutionsView';

export default function ShippingSolutionsPage() {
  return (
    <Layout
      title="Freight & Shipping Management Solutions | Altapete Solutions"
      description="Simplify and scale your multi-modal freight operations with Altapete Solutions. End-to-end shipment planning, telematics, customs compliance, and ERP integration across Saudi Arabia and the GCC."
    >
      <ShippingSolutionsView />
    </Layout>
  );
}
