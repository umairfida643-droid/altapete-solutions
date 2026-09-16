import React from 'react';
import Layout from '@/components/Layout';
import pagesData from '@/data/pagesData.json';

export default function Custom404() {
  const data = pagesData['/404'];

  return (
    <Layout title={data?.title} description={data?.description}>
      <div dangerouslySetInnerHTML={{ __html: data?.html || '' }} />
    </Layout>
  );
}
