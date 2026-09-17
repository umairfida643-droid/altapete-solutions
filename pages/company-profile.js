import React from 'react';
import Layout from '@/components/Layout';
import CompanyProfileView from '@/components/CompanyProfileView';

export default function CompanyProfilePage() {
  return (
    <Layout
      title="Company Profile — Altapete Solutions"
      description="Download Altapete's official service profiles covering accounting, ERP, tax advisory, IFRS, digital marketing, and more."
    >
      <CompanyProfileView />
    </Layout>
  );
}
