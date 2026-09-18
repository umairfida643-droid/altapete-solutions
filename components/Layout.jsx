import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import MobileDrawer from './MobileDrawer';
import TechBackground from './TechBackground';
import InteractivePageEnhancer from './InteractivePageEnhancer';
import FloatingWidgets from './FloatingWidgets';

export default function Layout({ children, title, description }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1, overflow: 'visible' }}>
      <Head>
        <title>{title ? `${title} | Altapete Solutions` : 'Altapete Solutions - Enterprise ERP & Digital Transformation'}</title>
        <meta name="description" content={description || "Altapete Solutions empowers executives with strategic ERP, SAP, Oracle, and business solutions."} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

      {/* Global Subtle Animated Technology Background */}
      <TechBackground />
      {/* Global Client-side Interactivity Enhancer for Auto-steps, Hero Tabs & Pills */}
      <InteractivePageEnhancer />

      <Header onToggleMobileMenu={() => setMobileMenuOpen(true)} />
      <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main style={{ flex: 1, position: 'relative', zIndex: 2, overflow: 'visible' }}>
        {children}
      </main>

      <Footer />

      {/* Global WhatsApp (Bottom-Left) & Go To Top (Bottom-Right) Widgets */}
      <FloatingWidgets />
    </div>
  );
}
