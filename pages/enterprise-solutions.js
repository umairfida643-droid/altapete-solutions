import React from 'react';
import Layout from '@/components/Layout';
import EnterpriseSolutionsView from '@/components/EnterpriseSolutionsView';
import pagesData from '@/data/pagesData.json';

export default function EnterpriseSolutionsPage() {
  const data = pagesData['/enterprise-solutions'];

  return (
    <Layout
      title={data?.title || "Enterprise Solutions & Digital Transformation Services | Altapete"}
      description={data?.description || "Transform your enterprise with comprehensive digital solutions."}
    >
      <EnterpriseSolutionsView />
    </Layout>
  );
}
