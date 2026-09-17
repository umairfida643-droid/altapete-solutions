import React from 'react';
import Layout from '@/components/Layout';
import CustomAppDevelopmentView from '@/components/CustomAppDevelopmentView';
import pagesData from '@/data/pagesData.json';

export default function CustomAppDevelopmentPage() {
  const data = pagesData['/custom-app-development'];

  return (
    <Layout
      title={data?.title || "Advanced Custom Software Solutions for Modern Businesses | Altapete"}
      description={data?.description || "Get advanced custom software solutions built to streamline operations, improve productivity, and create scalable digital solutions for your business."}
    >
      <CustomAppDevelopmentView />
    </Layout>
  );
}
