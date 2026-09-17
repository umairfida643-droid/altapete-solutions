import React from 'react';
import Layout from '@/components/Layout';
import pagesData from '@/data/pagesData.json';

export default function HotelManagementSolutionsPage() {
  const data = pagesData['/hotel-management-solutions'];

  return (
    <Layout
      title={data?.title || "Altapete Solutions"}
      description={data?.description || ""}
    >
      <div className="product-detail-view" dangerouslySetInnerHTML={{ __html: data?.html || '' }} />
    </Layout>
  );
}
