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
      <style jsx global>{`
        /* =========================================================================
           HR MUQEEM HERO ILLUSTRATION & RESPONSIVE REPAIR
           ========================================================================= */
        @keyframes notificationFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        .hr-hero-wrapper {
          position: relative !important;
          overflow: visible !important;
          padding-top: 55px !important;
          padding-bottom: 35px !important;
        }

        .hr-dashboard-visual {
          position: relative !important;
          overflow: visible !important;
          min-height: 620px !important;
          height: auto !important;
          padding: 25px 10px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .hr-dashboard-card {
          position: relative !important;
          overflow: visible !important;
          width: 400px !important;
          max-width: 100% !important;
          min-height: 530px !important;
          height: auto !important;
          margin-top: 15px !important;
          border-radius: 20px !important;
          padding: 30px !important;
          backdrop-filter: blur(20px) !important;
          transition: all 0.3s ease !important;
        }

        .hr-notification-pill {
          position: absolute !important;
          top: -14px !important;
          right: -8px !important;
          z-index: 10 !important;
          animation: notificationFloat 3s ease-in-out infinite !important;
          box-shadow: 0 10px 30px rgba(0, 174, 239, 0.4) !important;
        }

        /* Dual-theme card support */
        [data-theme="dark"] .hr-dashboard-card {
          background: #0d1830 !important;
          border: 1.5px solid rgba(0, 174, 239, 0.35) !important;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5) !important;
          color: #ffffff !important;
        }

        [data-theme="dark"] .hr-dashboard-card h3 {
          color: #ffffff !important;
        }

        [data-theme="dark"] .hr-dashboard-card p {
          color: #cbd5e1 !important;
        }

        [data-theme="light"] .hr-dashboard-card {
          background: #ffffff !important;
          border: 1.5px solid #cbd5e1 !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08) !important;
          color: #0f172a !important;
        }

        [data-theme="light"] .hr-dashboard-card h3 {
          color: #0f172a !important;
        }

        [data-theme="light"] .hr-dashboard-card p {
          color: #475569 !important;
        }

        [data-theme="light"] .hr-dashboard-card div[style*="color:#E6F0FF"] {
          color: #0f172a !important;
        }

        [data-theme="light"] .hr-dashboard-card div[style*="color:#B8C5D6"] {
          color: #475569 !important;
        }

        @media (max-width: 768px) {
          .hr-hero-wrapper {
            padding-top: 30px !important;
            padding-bottom: 20px !important;
          }

          .hr-dashboard-visual {
            min-height: auto !important;
            padding: 20px 0 !important;
          }

          .hr-dashboard-card {
            width: 100% !important;
            padding: 24px !important;
          }

          .hr-notification-pill {
            top: -12px !important;
            right: 12px !important;
            padding: 8px 14px !important;
            font-size: 0.82rem !important;
          }
        }
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: data?.html || '' }} />
    </Layout>
  );
}
