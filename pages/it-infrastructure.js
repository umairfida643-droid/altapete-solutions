import React from 'react';
import Layout from '@/components/Layout';
import EnterprisePageView from '@/components/EnterprisePageView';
import {
  Server,
  Network,
  Cpu,
  ShieldCheck,
  Zap,
  Layers,
  CheckCircle2,
  Lock
} from 'lucide-react';

const FEATURES = [
  {
    icon: Network,
    title: 'Enterprise LAN/WAN & SD-WAN Design',
    desc: 'High-speed, redundant network architectures connecting multiple branch offices, warehouses, and headquarters across the GCC.',
    points: ['SD-WAN software-defined routing', 'High-throughput enterprise Wi-Fi 6', 'Redundant ISP failover configurations']
  },
  {
    icon: Server,
    title: 'Datacenter & Server Rack Deployment',
    desc: 'Turnkey on-premise and hybrid datacenter setups including server blade installation, SAN storage, and virtualization (VMware/Hyper-V).',
    points: ['VMware & Hyper-V virtualization', 'SAN/NAS high-speed storage setup', 'Power redundancy & UPS monitoring']
  },
  {
    icon: Layers,
    title: 'Structured Cabling & Fiber Optics',
    desc: 'Certified Cat6A and fiber-optic backbone installations for corporate offices, commercial towers, and industrial warehouses.',
    points: ['Certified Cat6A / Cat7 copper cabling', 'Single & multi-mode fiber backbones', 'Patch panel organization & cable testing']
  },
  {
    icon: Lock,
    title: 'Site-to-Site VPN & Remote Access',
    desc: 'Encrypted, high-performance IPSec VPN tunnels enabling secure branch connectivity and hybrid cloud integrations.',
    points: ['IPSec & SSL VPN client deployments', 'Zero-trust remote worker access', 'Multi-factor authenticated tunnels']
  },
  {
    icon: ShieldCheck,
    title: 'Next-Generation Firewalls (NGFW)',
    desc: 'Installation and management of Fortinet, Cisco, and Palo Alto firewalls with deep packet inspection and intrusion prevention.',
    points: ['Deep Packet Inspection (DPI)', 'Intrusion Prevention Systems (IPS)', 'Web content & application filtering']
  },
  {
    icon: Zap,
    title: 'Hardware Lifecycle & Asset Management',
    desc: 'Procurement, deployment, asset tagging, and routine preventive maintenance of enterprise servers, switches, and endpoints.',
    points: ['Enterprise hardware procurement', 'Asset tagging & inventory tracking', 'Preventive hardware maintenance']
  }
];

const BENEFITS = [
  {
    title: 'Zero Network Bottlenecks',
    desc: 'Engineered for high-volume enterprise data transfer, live video conferencing, and instantaneous ERP transactions.'
  },
  {
    title: 'High Availability & Automatic Failover',
    desc: 'Redundant network links and dual power supplies ensure your operations never suffer unexpected outages.'
  },
  {
    title: 'Certified Network Engineers',
    desc: 'Direct deployment by certified engineers: Cisco CCNA/CCNP, Fortinet NSE, and VMware VCP.'
  },
  {
    title: 'Turnkey Physical & Digital Setup',
    desc: 'We handle everything from physical cabling and server rack installation to software network configuration.'
  }
];

export default function ItInfrastructurePage() {
  return (
    <Layout
      title="Enterprise IT Infrastructure & Networking | Altapete Solutions"
      description="Enterprise network design, datacenter deployment, structured cabling, SD-WAN, and firewall security across Saudi Arabia and the GCC."
    >
      <EnterprisePageView
        badge="NETWORKING & INFRASTRUCTURE"
        badgeIcon={Server}
        title={
          <>
            IT Infrastructure &amp; Networking.<br />
            <span className="text-gradient">The Resilient Backbone of Your Enterprise.</span>
          </>
        }
        description="Build an ultra-reliable, high-speed foundation for your digital operations. Altapete delivers enterprise LAN/WAN design, datacenter virtualization, certified structured cabling, SD-WAN, and next-generation firewall security."
        bgImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1920"
        featuresTag="INFRASTRUCTURE SERVICES"
        featuresTitle="Robust Infrastructure Solutions"
        featuresDesc="Engineered for mission-critical uptime, seamless connectivity, and enterprise scalability."
        features={FEATURES}
        benefitsTag="OPERATIONAL RESILIENCE"
        benefitsTitle={
          <>Why Build Your Infrastructure with <span className="text-gradient">Altapete</span></>
        }
        benefitsDesc="We design infrastructure that eliminates bottlenecks and ensures business continuity under heavy workloads."
        benefits={BENEFITS}
        benefitImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200"
        benefitStat={{
          badge: 'Network Reliability',
          metric: '99.99% Network Uptime',
          note: 'Engineered with automated failover and redundancy'
        }}
        ctaTitle="Ready to Upgrade Your IT Infrastructure?"
        ctaDesc="Schedule an on-site or remote network assessment with our certified infrastructure engineers."
        ctaPrimaryText="Request Infrastructure Audit"
        ctaPrimaryLink="/contact-us"
        ctaSecondaryText="Explore IT Services"
        ctaSecondaryLink="/it-services"
      />
    </Layout>
  );
}
