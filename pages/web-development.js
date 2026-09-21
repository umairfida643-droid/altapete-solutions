import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Globe2,
  Layout as LayoutIcon,
  ShoppingCart,
  Zap,
  ShieldCheck,
  Search,
  Smartphone,
  CheckCircle2
} from 'lucide-react';

const FEATURES = [
  {
    icon: Globe2,
    title: 'Corporate Web Portals & Platforms',
    desc: 'High-impact enterprise portals built with Next.js and React delivering blazing-fast speed and interactive user experiences.',
    points: ['Server-Side Rendering (SSR) & SSG', 'Bilingual Arabic & English RTL support', 'Corporate identity design integration']
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce & Omnichannel Stores',
    desc: 'Custom headless e-commerce platforms connected directly to your ERP, inventory, Mada payments, and ZATCA Phase 2 billing.',
    points: ['Mada & Apple Pay gateway integration', 'Real-time ERP inventory synchronization', 'ZATCA compliant checkout & invoicing']
  },
  {
    icon: LayoutIcon,
    title: 'Client & Vendor Self-Service Portals',
    desc: 'Secure authenticated portals empowering clients and vendors to track orders, download invoices, and submit service tickets.',
    points: ['Role-based customer access', 'Automated document downloads', 'Live shipment & milestone tracking']
  },
  {
    icon: Zap,
    title: 'Core Web Vitals & Performance',
    desc: 'Sub-second page load times optimized for Google Core Web Vitals to maximize engagement and conversion rates.',
    points: ['Under 1-second First Contentful Paint', 'Automated image optimization & CDN', 'Zero Cumulative Layout Shift (CLS)']
  },
  {
    icon: Search,
    title: 'Enterprise SEO & Content Architecture',
    desc: 'Search engine optimized markup, structured data schema, and content architecture designed to dominate organic rankings.',
    points: ['Schema.org structured rich snippets', 'Automated XML sitemaps & robots.txt', 'High-intent B2B search visibility']
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Web Security & SSL',
    desc: 'Hardened web applications with Web Application Firewall (WAF), automated SSL certificates, and DDoS protection.',
    points: ['Cloudflare enterprise WAF & DDoS', 'Automated daily cloud backups', 'Strict Content Security Policy (CSP)']
  }
];

const BENEFITS = [
  {
    title: 'High-Converting Corporate Presence',
    desc: 'Elevate your brand with sophisticated design that turns enterprise visitors into qualified business leads.'
  },
  {
    title: 'Bilingual Arabic-First Experience',
    desc: 'Native RTL design and typography engineered to resonate with Saudi and GCC corporate decision-makers.'
  },
  {
    title: 'Direct ERP & CRM Integration',
    desc: 'Eliminate manual data entry with web inquiries flowing directly into your Odoo, SAP, or custom CRM.'
  },
  {
    title: '100% Responsive Across All Devices',
    desc: 'Pixel-perfect rendering on desktops, tablets, and smartphones with zero UI distortion.'
  }
];

export default function WebDevelopmentPage() {
  return (
    <Layout
      title="Enterprise Web Development Services | Altapete Solutions"
      description="High-performance corporate web development, Next.js portals, e-commerce stores, and client portals across Saudi Arabia and the GCC."
    >
      <EnterprisePageView
        badge="WEB ENGINEERING PRACTICE"
        badgeIcon={Globe2}
        title={
          <>
            Enterprise Web Development.<br />
            <span className="text-gradient">Blazing Speed, Bilingual Excellence, Real Impact.</span>
          </>
        }
        description="Build a high-performance digital presence that commands authority. Altapete delivers modern corporate portals, headless e-commerce, and client portals engineered with Next.js, React, and seamless ERP integration."
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920"
        featuresTag="WEB CAPABILITIES"
        featuresTitle="Modern Web Solutions for Enterprise Growth"
        featuresDesc="Combine sophisticated UI design with enterprise-grade backend infrastructure."
        features={FEATURES}
        benefitsTag="MEASURABLE RESULTS"
        benefitsTitle={
          <>Why Build Your Web Presence with <span className="text-gradient">Altapete</span></>
        }
        benefitsDesc="We engineer web applications that load in under a second and convert high-value corporate prospects."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
        benefitStat={{
          badge: 'Performance Standard',
          metric: '95+ Google PageSpeed Score',
          note: 'Engineered with Next.js and edge CDN caching'
        }}
        ctaTitle="Ready to Build a High-Performance Web Portal?"
        ctaDesc="Schedule a consultation with our web architects to discuss your digital presence and technical specifications."
        ctaPrimaryText="Start Your Web Project"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore IT Services"
        ctaSecondaryLink="/it-services"
      />
    </Layout>
  );
}
