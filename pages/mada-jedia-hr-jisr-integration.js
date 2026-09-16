import React from 'react';
import Layout from '@/components/Layout';
import pagesData from '@/data/pagesData.json';

export default function MadaJediaHrJisrIntegrationPage() {
  const data = pagesData['/mada-jedia-hr-jisr-integration'];

  return (
    <Layout
      title={data?.title || "Altapete Solutions"}
      description={data?.description || ""}
    >
      <div dangerouslySetInnerHTML={{ __html: data?.html || '' }} />
    </Layout>
  );
}
