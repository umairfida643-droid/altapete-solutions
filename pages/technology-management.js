import React from 'react';
import Layout from '@/components/Layout';
import TechnologyManagementView from '@/components/TechnologyManagementView';
import pagesData from '@/data/pagesData.json';

export default function TechnologyManagementPage() {
  const data = pagesData['/technology-management'];

  return (
    <Layout
      title={data?.title || "Technology Management & IT Services | Altapete"}
      description={data?.description || "Accelerate your business with DevOps, Cloud, and Infrastructure solutions."}
    >
      <TechnologyManagementView />
    </Layout>
  );
}
