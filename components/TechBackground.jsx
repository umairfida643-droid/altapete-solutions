import React from 'react';

/**
 * TechBackground: A minimal, corporate, ultra-lightweight animated SVG background.
 * Features faint circuit traces, subtle moving data streams, and geometric grid nodes.
 * Completely non-intrusive (opacity ~0.035), pointer-events: none, GPU-accelerated.
 */
export default function TechBackground() {
  return (
    <div
      className="tech-bg-container"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    >
      <style jsx global>{`
        .tech-bg-canvas {
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
          opacity: 0.04;
          transition: opacity 0.5s ease;
        }

        [data-theme="light"] .tech-bg-canvas {
          opacity: 0.028;
        }

        /* Subtle moving circuit dash */
        @keyframes techTraceFlow {
          0% {
            stroke-dashoffset: 2000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        /* Soft drifting grid nodes */
        @keyframes techNodePulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.15);
          }
        }

        /* Ambient floating digital stream */
        @keyframes techStreamFloat {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-25px) translateX(15px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        .tech-trace-1 {
          stroke: #2c73d9;
          stroke-dasharray: 120 400;
          animation: techTraceFlow 45s linear infinite;
        }

        .tech-trace-2 {
          stroke: #00d4ff;
          stroke-dasharray: 80 320;
          animation: techTraceFlow 35s linear infinite reverse;
        }

        .tech-trace-3 {
          stroke: #282460;
          stroke-dasharray: 100 500;
          animation: techTraceFlow 55s linear infinite;
        }

        .tech-node-pulse {
          animation: techNodePulse 6s ease-in-out infinite;
          transform-origin: center;
        }

        .tech-stream-layer {
          animation: techStreamFloat 30s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-trace-1,
          .tech-trace-2,
          .tech-trace-3,
          .tech-node-pulse,
          .tech-stream-layer {
            animation: none !important;
          }
        }
      `}</style>

      {/* SVG Layer: Geometric Circuit Grid & Connections */}
      <svg
        className="tech-bg-canvas"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="techSmallGrid" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="1" fill="#2c73d9" opacity="0.35" />
            <line x1="0" y1="40" x2="80" y2="40" stroke="#2c73d9" strokeWidth="0.5" opacity="0.15" />
            <line x1="40" y1="0" x2="40" y2="80" stroke="#2c73d9" strokeWidth="0.5" opacity="0.15" />
          </pattern>
          <linearGradient id="techFadeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2c73d9" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#282460" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Micro Grid Background */}
        <rect width="100%" height="100%" fill="url(#techSmallGrid)" />

        {/* Floating Digital Stream Group */}
        <g className="tech-stream-layer">
          {/* Circuit Trace Path 1 (Top Left to Center) */}
          <path
            d="M -100 240 L 320 240 L 460 380 L 820 380 L 960 520 L 1400 520 L 1540 660 L 2020 660"
            fill="none"
            strokeWidth="1.5"
            className="tech-trace-1"
          />

          {/* Circuit Trace Path 2 (Bottom Left to Top Right) */}
          <path
            d="M -60 840 L 260 840 L 400 700 L 740 700 L 880 560 L 1260 560 L 1400 420 L 2000 420"
            fill="none"
            strokeWidth="1.2"
            className="tech-trace-2"
          />

          {/* Circuit Trace Path 3 (Central Highway) */}
          <path
            d="M 120 -50 L 120 300 L 260 440 L 680 440 L 820 580 L 820 900 L 960 1040 L 1600 1040"
            fill="none"
            strokeWidth="1.4"
            className="tech-trace-3"
          />

          {/* Diagonal Telemetry Guides */}
          <line x1="300" y1="120" x2="600" y2="420" stroke="url(#techFadeGrad)" strokeWidth="0.8" strokeDasharray="6 12" />
          <line x1="1300" y1="200" x2="1600" y2="500" stroke="url(#techFadeGrad)" strokeWidth="0.8" strokeDasharray="6 12" />
          <line x1="700" y1="650" x2="1000" y2="950" stroke="url(#techFadeGrad)" strokeWidth="0.8" strokeDasharray="6 12" />

          {/* Subtle Geometric Hex & Node Targets */}
          <g className="tech-node-pulse" style={{ animationDelay: '0s' }}>
            <circle cx="460" cy="380" r="4" fill="#2c73d9" />
            <circle cx="460" cy="380" r="10" fill="none" stroke="#2c73d9" strokeWidth="0.8" />
          </g>

          <g className="tech-node-pulse" style={{ animationDelay: '2s' }}>
            <circle cx="880" cy="560" r="4" fill="#00d4ff" />
            <circle cx="880" cy="560" r="10" fill="none" stroke="#00d4ff" strokeWidth="0.8" />
          </g>

          <g className="tech-node-pulse" style={{ animationDelay: '3.5s' }}>
            <circle cx="1400" cy="520" r="4" fill="#2c73d9" />
            <circle cx="1400" cy="520" r="10" fill="none" stroke="#2c73d9" strokeWidth="0.8" />
          </g>

          <g className="tech-node-pulse" style={{ animationDelay: '1.2s' }}>
            <circle cx="260" cy="440" r="4" fill="#00d4ff" />
            <circle cx="260" cy="440" r="10" fill="none" stroke="#00d4ff" strokeWidth="0.8" />
          </g>
        </g>
      </svg>
    </div>
  );
}
