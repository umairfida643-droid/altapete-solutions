import React from 'react';
import Layout from '@/components/Layout';
import pagesData from '@/data/pagesData.json';

export default function HrMuqeemPage() {
  const data = pagesData['/hr-muqeem'];

  return (
    <Layout
      title={data?.title || "Altapete Solutions"}
      description={data?.description || ""}
    >
      <div dangerouslySetInnerHTML={{ __html: data?.html || '' }} />
    </Layout>
  );
}
