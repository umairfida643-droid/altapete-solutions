import React from 'react';
import Layout from '@/components/Layout';
import pagesData from '@/data/pagesData.json';

export default function ConstructionManagementSolutionsPage() {
  const data = pagesData['/construction-management-solutions'];

  return (
    <Layout
      title={data?.title || "Altapete Solutions"}
      description={data?.description || ""}
    >
      <div dangerouslySetInnerHTML={{ __html: data?.html || '' }} />
    </Layout>
  );
}
