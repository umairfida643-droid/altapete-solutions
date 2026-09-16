import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import MobileDrawer from './MobileDrawer';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pageTitle = title || "ERP, SAP & Custom Software Solutions | Altapete";
  const pageDesc = description || "Altapete provides ERP, SAP, Oracle, custom application development, accounting, and industry-specific software solutions for growing businesses.";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="icon" href="/assets/imgs/logo.png" />
        <link rel="stylesheet" href="https://fonts.bunny.net/css?family=noto-sans:400,500,700,800" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/extra-styles.css" />
      </Head>

      <div id="__next">
        <Header onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        <main className="main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
