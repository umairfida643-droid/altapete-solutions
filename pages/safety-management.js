import React from 'react';
import Layout from '@/components/Layout';
import SafetyManagementView from '@/components/SafetyManagementView';

export default function SafetyManagementPage() {
  return (
    <Layout
      title="Safety Management Solutions | Altapete Solutions"
      description="Comprehensive workplace safety management, incident tracking, compliance, and reporting solutions by Altapete Solutions."
    >
      <SafetyManagementView />
    </Layout>
  );
}
