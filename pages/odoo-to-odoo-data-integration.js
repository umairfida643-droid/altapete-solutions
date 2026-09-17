import React from 'react';
import Layout from '@/components/Layout';
import OdooToOdooView from '@/components/OdooToOdooView';

export default function OdooToOdooDataIntegrationPage() {
  return (
    <Layout
      title="Odoo to Odoo Data Integration | Altapete Solutions"
      description="Seamless real-time Odoo to Odoo data integration, multi-company consolidation, and automated synchronization services."
    >
      <OdooToOdooView />
    </Layout>
  );
}
