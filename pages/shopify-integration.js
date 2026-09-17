import React from 'react';
import Layout from '@/components/Layout';
import ShopifyIntegrationView from '@/components/ShopifyIntegrationView';

export default function ShopifyIntegrationPage() {
  return (
    <Layout
      title="Shopify Integration Solutions | Altapete Solutions"
      description="Scalable, enterprise-grade Shopify and Shopify Plus integration solutions, custom apps, ERP connectivity, and performance optimization."
    >
      <ShopifyIntegrationView />
    </Layout>
  );
}
