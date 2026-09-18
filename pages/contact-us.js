import React from 'react';
import Layout from '@/components/Layout';
import ContactUsView from '@/components/ContactUsView';
import pagesData from '@/data/pagesData.json';

export default function ContactUsPage() {
  const data = pagesData['/contact-us'];

  return (
    <Layout
      title={data?.title || "Contact Altapete | ERP, SAP, Oracle Consulting & Global Offices"}
      description={data?.description || "Get in touch with Altapete Solutions for enterprise ERP implementation, SAP & Oracle migrations, and global consulting across Saudi Arabia, UAE, Bahrain, and Pakistan."}
    >
      <ContactUsView />
    </Layout>
  );
}

