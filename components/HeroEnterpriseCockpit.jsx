import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Server, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Database, 
  Calculator, 
  Building2, 
  Activity,
  ArrowUpRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const NODES = [
  {
    id: 'odoo-sap',
    title: 'ERP Orchestration',
    subtitle: 'Odoo 18 & SAP S/4HANA',
    tag: 'CORE ENGINE',
    status: '99.99% Uptime',
    latency: '8ms',
    icon: Layers,
    color: '#00AEEF',
    x: 90,
    y: 75,
    details: 'Automated workflows & multi-company ledger synchronization'
  },
  {
    id: 'zatca',
    title: 'ZATCA Phase 2',
    subtitle: 'FATOORA Clearance',
    tag: 'COMPLIANCE',
    status: 'Phase 2 Certified',
    latency: '14ms',
    icon: ShieldCheck,
    color: '#00C6FF',
    x: 430,
    y: 75,
    details: 'Cryptographic stamp, XML generation & live clearance portal'
  },
  {
    id: 'oracle',
    title: 'Database Cloud',
    subtitle: 'Oracle Autonomous',
    tag: 'DATA ENGINE',
    status: 'Sub-Second Sync',
    latency: '5ms',
    icon: Database,
    color: '#2c73d9',
    x: 90,
    y: 265,
    details: 'Zero-data-loss architecture with real-time replication'
  },
  {
    id: 'financial',
    title: 'Financial Advisory',
    subtitle: 'IFRS & Zakat Engine',
    tag: 'INTELLIGENCE',
    status: '100% Audit Ready',
    latency: '11ms',
    icon: Calculator,
    color: '#0088C7',
    x: 430,
    y: 265,
    details: 'Real-time financial modeling, VAT & balance sheet analytics'
  }
];

export default function HeroEnterpriseCockpit() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [tick, setTick] = useState(0);

  // Auto-advance loop every 3.5s
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % NODES.length);
      setTick((t) => t + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeNode = NODES[activeIdx];

  return (
    <div 
      className="hero-cockpit-container position-relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ maxWidth: '580px', margin: '0 auto' }}
    >
      {/* Ambient Pulsing Glow behind Console */}
      <div 
        className="cockpit-glow-backdrop"
        style={{
          position: 'absolute',
          inset: '-8%',
          background: 'radial-gradient(circle at 50% 50%, rgba(44, 115, 217, 0.3) 0%, rgba(0, 174, 239, 0.15) 50%, transparent 75%)',
          filter: 'blur(50px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Main Glass Console Card */}
      <div className="cockpit-frame position-relative" style={{ zIndex: 1 }}>
        {/* Console Header Bar */}
        <div className="cockpit-header">
          <div className="d-flex align-items-center gap-2">
            <span className="window-dot red" />
            <span className="window-dot yellow" />
            <span className="window-dot green" />
          </div>

          <div className="cockpit-status-badge d-flex align-items-center gap-2">
            <span className="live-ping-dot" />
            <span className="cockpit-status-text">
              Ecosystem Core Active • <span className="text-accent">{activeNode.status}</span>
            </span>
          </div>

          <div className="cockpit-version-tag">
            APS 2026.4
          </div>
        </div>

        {/* Central Visual Stage with Interactive SVG Conduits */}
        <div className="cockpit-stage position-relative">
          {/* Background Concentric Radar Grid */}
          <div className="cockpit-radar-grid" />

          {/* SVG Conduits & Flowing Data Packets */}
          <svg 
            viewBox="0 0 520 340" 
            className="cockpit-svg"
            style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 2 }}
          >
            <defs>
              {/* Conduit Gradients */}
              <linearGradient id="conduitGrad0" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2c73d9" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="conduitGrad1" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00C6FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2c73d9" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="conduitGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2c73d9" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="conduitGrad3" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#0088C7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2c73d9" stopOpacity="0.3" />
              </linearGradient>

              {/* Core Glow Filter */}
              <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connecting Conduits from Center (260, 170) to 4 Nodes */}
            {/* Top-Left: (90, 75) */}
            <path
              d="M 260 170 C 180 170, 140 100, 90 75"
              className={`conduit-path ${activeIdx === 0 ? 'conduit-active' : ''}`}
              stroke="url(#conduitGrad0)"
              strokeWidth={activeIdx === 0 ? "3" : "1.8"}
              fill="none"
              strokeDasharray={activeIdx === 0 ? "none" : "4 4"}
            />
            {/* Top-Right: (430, 75) */}
            <path
              d="M 260 170 C 340 170, 380 100, 430 75"
              className={`conduit-path ${activeIdx === 1 ? 'conduit-active' : ''}`}
              stroke="url(#conduitGrad1)"
              strokeWidth={activeIdx === 1 ? "3" : "1.8"}
              fill="none"
              strokeDasharray={activeIdx === 1 ? "none" : "4 4"}
            />
            {/* Bottom-Left: (90, 265) */}
            <path
              d="M 260 170 C 180 170, 140 240, 90 265"
              className={`conduit-path ${activeIdx === 2 ? 'conduit-active' : ''}`}
              stroke="url(#conduitGrad2)"
              strokeWidth={activeIdx === 2 ? "3" : "1.8"}
              fill="none"
              strokeDasharray={activeIdx === 2 ? "none" : "4 4"}
            />
            {/* Bottom-Right: (430, 265) */}
            <path
              d="M 260 170 C 340 170, 380 240, 430 265"
              className={`conduit-path ${activeIdx === 3 ? 'conduit-active' : ''}`}
              stroke="url(#conduitGrad3)"
              strokeWidth={activeIdx === 3 ? "3" : "1.8"}
              fill="none"
              strokeDasharray={activeIdx === 3 ? "none" : "4 4"}
            />

            {/* Animated Data Packets (Pulsing Circles Flowing Along Lines) */}
            <circle r="4.5" fill="#00AEEF" className="data-packet-anim packet-0" />
            <circle r="4.5" fill="#00C6FF" className="data-packet-anim packet-1" />
            <circle r="4.5" fill="#2c73d9" className="data-packet-anim packet-2" />
            <circle r="4.5" fill="#0088C7" className="data-packet-anim packet-3" />

            {/* Center Hub: Altapete Ecosystem Gateway */}
            <g transform="translate(260, 170)">
              {/* Outer Pulse Rings */}
              <circle r="52" className="hub-pulse-ring-1" />
              <circle r="44" className="hub-pulse-ring-2" />

              {/* Spinning Orbital Dots */}
              <g className="hub-orbital-spin">
                <circle cx="48" cy="0" r="3" fill="#00AEEF" />
                <circle cx="-48" cy="0" r="3" fill="#2c73d9" />
                <circle cx="0" cy="48" r="2" fill="#00C6FF" />
                <circle cx="0" cy="-48" r="2" fill="#00AEEF" />
              </g>

              {/* Central Core Disk */}
              <circle r="34" className="hub-core-disk" filter="url(#coreGlow)" />
              <circle r="33" fill="none" stroke="rgba(0, 174, 239, 0.6)" strokeWidth="1.5" />

              {/* Core Center Emblem */}
              <g transform="translate(-14, -14)">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </g>
            </g>
          </svg>

          {/* HTML Overlay: 4 Interactive Satellite Node Cards */}
          <div 
            className="cockpit-nodes-layer" 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              width: '100%', 
              height: '100%', 
              pointerEvents: 'none',
              zIndex: 10
            }}
          >
            {NODES.map((node, i) => {
              const Icon = node.icon;
              const isActive = i === activeIdx;

              // Compute positioning percentage
              const isLeft = i === 0 || i === 2;
              const isTop = i === 0 || i === 1;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveIdx(i)}
                  className={`cockpit-node-card ${isActive ? 'active' : ''}`}
                  style={{
                    position: 'absolute',
                    top: isTop ? '12px' : 'auto',
                    bottom: !isTop ? '12px' : 'auto',
                    left: isLeft ? '14px' : 'auto',
                    right: !isLeft ? '14px' : 'auto',
                    pointerEvents: 'auto',
                    cursor: 'pointer'
                  }}
                >
                  <div className="node-inner d-flex align-items-center gap-2">
                    <div 
                      className="node-icon-box"
                      style={{ 
                        color: node.color,
                        background: isActive ? `${node.color}22` : 'rgba(44, 115, 217, 0.08)',
                        border: `1px solid ${isActive ? node.color : 'rgba(44, 115, 217, 0.2)'}`
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    <div className="node-text">
                      <div className="node-title">{node.title}</div>
                      <div className="node-subtitle">{node.subtitle}</div>
                    </div>

                    {isActive && (
                      <div className="node-active-badge">
                        <span style={{ background: node.color }} className="node-live-dot" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Center HUD Information Overlay */}
          <div className="cockpit-center-hud text-center">
            <span className="hud-badge-tag">{activeNode.tag}</span>
            <div className="hud-metric-row d-flex align-items-center justify-content-center gap-2">
              <Activity size={14} className="text-accent" />
              <span className="hud-latency">{activeNode.latency} Latency</span>
              <span className="hud-divider">•</span>
              <span className="hud-status">{activeNode.status}</span>
            </div>
            <div className="hud-details-text">{activeNode.details}</div>
          </div>
        </div>

        {/* 4 Bottom Telemetry Cards (Theme Responsive) */}
        <div className="cockpit-metrics-grid">
          {/* Metric 1 */}
          <div 
            className={`cockpit-metric-item ${activeIdx === 0 ? 'selected' : ''}`}
            onClick={() => setActiveIdx(0)}
          >
            <div className="metric-icon" style={{ color: '#00AEEF' }}>
              <Cpu size={16} />
            </div>
            <div className="metric-info">
              <div className="metric-name">Cloud ERP Engine</div>
              <div className="metric-value">Odoo 18 & SAP</div>
            </div>
          </div>

          {/* Metric 2 */}
          <div 
            className={`cockpit-metric-item ${activeIdx === 1 ? 'selected' : ''}`}
            onClick={() => setActiveIdx(1)}
          >
            <div className="metric-icon" style={{ color: '#00C6FF' }}>
              <ShieldCheck size={16} />
            </div>
            <div className="metric-info">
              <div className="metric-name">ZATCA Certified</div>
              <div className="metric-value">Phase 2 Compliant</div>
            </div>
          </div>

          {/* Metric 3 */}
          <div 
            className={`cockpit-metric-item ${activeIdx === 2 ? 'selected' : ''}`}
            onClick={() => setActiveIdx(2)}
          >
            <div className="metric-icon" style={{ color: '#2c73d9' }}>
              <Zap size={16} />
            </div>
            <div className="metric-info">
              <div className="metric-name">Sub-Second Sync</div>
              <div className="metric-value">&lt;10ms Latency</div>
            </div>
          </div>

          {/* Metric 4 */}
          <div 
            className={`cockpit-metric-item ${activeIdx === 3 ? 'selected' : ''}`}
            onClick={() => setActiveIdx(3)}
          >
            <div className="metric-icon" style={{ color: '#0088C7' }}>
              <Calculator size={16} />
            </div>
            <div className="metric-info">
              <div className="metric-name">Financial Advisory</div>
              <div className="metric-value">100% IFRS Aligned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
