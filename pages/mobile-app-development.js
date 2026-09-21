import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Smartphone,
  Layers,
  ShieldCheck,
  Zap,
  Globe2,
  Cpu,
  CheckCircle2,
  Users
} from 'lucide-react';

const FEATURES = [
  {
    icon: Smartphone,
    title: 'Native iOS & Android Engineering',
    desc: 'High-performance native mobile apps written in Swift (iOS) and Kotlin (Android) delivering uncompromising platform performance.',
    points: ['Native UI components & gestures', 'Optimal battery & memory efficiency', 'App Store & Google Play submission']
  },
  {
    icon: Layers,
    title: 'Cross-Platform Flutter & React Native',
    desc: 'Cost-effective single-codebase mobile applications running seamlessly on both iOS and Android with native look and feel.',
    points: ['Up to 40% faster development time', 'Unified codebase maintenance', 'Pixel-perfect multi-screen design']
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Mobile Security',
    desc: 'Biometric authentication (FaceID/Fingerprint), end-to-end data encryption, and Mobile Device Management (MDM) compatibility.',
    points: ['Biometric login & 2FA security', 'Encrypted local SQLite/Realm storage', 'Jailbreak & root detection safeguards']
  },
  {
    icon: Zap,
    title: 'Offline-First Architecture',
    desc: 'Local database caching and background synchronization enabling field workers to operate without active internet access.',
    points: ['Seamless offline data entry', 'Automated conflict resolution', 'Instant background cloud sync']
  },
  {
    icon: Globe2,
    title: 'Bilingual Arabic & English UI/UX',
    desc: 'Tailored RTL interfaces designed specifically for Saudi and GCC consumer preferences and enterprise usability standards.',
    points: ['Native Arabic RTL design patterns', 'Intuitive micro-interactions', 'Accessibility & high-contrast support']
  },
  {
    icon: Cpu,
    title: 'Backend & IoT Hardware Integration',
    desc: 'Direct connectivity with Bluetooth barcode scanners, mobile POS payment terminals, RFID chips, and GPS telematics.',
    points: ['Bluetooth BLE hardware pairing', 'GPS live tracking & geofencing', 'Push notifications via Firebase Cloud']
  }
];

const BENEFITS = [
  {
    title: 'Empower Your Mobile Workforce',
    desc: 'Equip sales reps, delivery drivers, and field technicians with real-time operational mobile tools.'
  },
  {
    title: 'Direct Client Engagement Channel',
    desc: 'Boost customer loyalty and retention with branded mobile ordering, real-time push alerts, and direct self-service.'
  },
  {
    title: 'Full ERP & Database Synchronization',
    desc: 'Mobile transactions reflect instantly inside your core ERP system with zero manual reconciliation.'
  },
  {
    title: 'Turnkey App Store Launch & Maintenance',
    desc: 'We manage the entire publishing process on Apple App Store and Google Play including ongoing OS updates.'
  }
];

export default function MobileAppDevelopmentPage() {
  return (
    <Layout
      title="Enterprise Mobile App Development | Altapete Solutions"
      description="Native iOS, Android, and Flutter cross-platform mobile app development across Saudi Arabia and the GCC. Enterprise security, offline sync, and ERP integration."
    >
      <EnterprisePageView
        badge="MOBILE APPLICATION ENGINEERING"
        badgeIcon={Smartphone}
        title={
          <>
            Mobile App Development.<br />
            <span className="text-gradient">Native Performance. Enterprise Scalability.</span>
          </>
        }
        description="Connect with your customers and mobilize your workforce with high-performance mobile apps. Altapete delivers native iOS, Android, and Flutter applications engineered for seamless ERP integration and rock-solid security."
        bgImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1920"
        featuresTag="MOBILE CAPABILITIES"
        featuresTitle="Full-Lifecycle Mobile Engineering"
        featuresDesc="From UI/UX wireframing to store deployment and continuous updates, we build apps users love."
        features={FEATURES}
        benefitsTag="OPERATIONAL VALUE"
        benefitsTitle={
          <>Why Build Your Mobile App with <span className="text-gradient">Altapete</span></>
        }
        benefitsDesc="We bridge mobile engineering with enterprise backend systems for unified digital operations."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1200"
        benefitStat={{
          badge: 'Mobile Quality',
          metric: '99.9% Crash-Free Sessions',
          note: 'Tested across 50+ real physical device types'
        }}
        ctaTitle="Ready to Build an Exceptional Mobile App?"
        ctaDesc="Schedule a scoping consultation with our mobile solutions architects to discuss your feature roadmap and timeline."
        ctaPrimaryText="Start Mobile App Project"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore IT Services"
        ctaSecondaryLink="/it-services"
      />
    </Layout>
  );
}
