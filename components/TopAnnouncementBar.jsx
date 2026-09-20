import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function TopAnnouncementBar() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // 6 identical items ensure a completely seamless -50% CSS infinite translation without visible seams
  const items = Array.from({ length: 6 });

  return (
    <div
      className={`top-announcement-bar ${isDark ? 'dark-theme' : 'light-theme'}`}
      role="region"
      aria-label="Announcement ticker"
    >
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {items.map((_, idx) => (
            <Link
              key={idx}
              href="/contact-us"
              className="marquee-item"
              tabIndex={idx === 0 ? 0 : -1}
              aria-label="Cut operational costs by up to 30% - Book your 100% Free ERP Demo today - Schedule Now"
            >
              <span className="ticker-badge">
                <Sparkles size={11} className="ticker-sparkle" />
                <span>OFFER</span>
              </span>

              <span className="ticker-phrase">
                Cut operational costs by <strong className="ticker-highlight">up to 30%</strong>
              </span>

              <span className="ticker-bullet">•</span>

              <span className="ticker-phrase">
                Book your <strong className="ticker-highlight">100% Free ERP Demo</strong> today
              </span>

              <span className="ticker-bullet">•</span>

              <span className="ticker-phrase">
                No hidden implementation fees
              </span>

              <span className="ticker-cta">
                <span>Schedule Now</span>
                <ArrowRight size={11} className="ticker-arrow" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .top-announcement-bar {
          width: 100%;
          height: 38px;
          position: relative;
          overflow: hidden;
          z-index: 1001;
          display: flex;
          align-items: center;
          font-family: var(--font-sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .dark-theme.top-announcement-bar {
          background: linear-gradient(90deg, #0e0c24 0%, #17133b 50%, #0e0c24 100%);
          border-bottom: 1px solid rgba(44, 115, 217, 0.22);
          color: #cbd5e1;
        }

        .light-theme.top-announcement-bar {
          background: linear-gradient(90deg, #f0f5ff 0%, #e3ecfc 50%, #f0f5ff 100%);
          border-bottom: 1px solid rgba(44, 115, 217, 0.18);
          color: #1e293b;
        }

        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          position: relative;
          mask-image: linear-gradient(to right, transparent 0%, black 40px, black calc(100% - 40px), transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 40px, black calc(100% - 40px), transparent 100%);
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marqueeScroll 34s linear infinite;
          will-change: transform;
        }

        /* Smooth pause on hover and keyboard focus */
        .top-announcement-bar:hover .marquee-track,
        .top-announcement-bar:focus-within .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 0 28px;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          color: inherit;
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.15px;
          transition: opacity 0.2s ease;
        }

        .marquee-item:hover {
          opacity: 0.92;
        }

        .ticker-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 7px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .dark-theme .ticker-badge {
          background: rgba(44, 115, 217, 0.25);
          color: #60a5fa;
          border: 1px solid rgba(44, 115, 217, 0.45);
        }

        .light-theme .ticker-badge {
          background: rgba(44, 115, 217, 0.12);
          color: #1d4ed8;
          border: 1px solid rgba(44, 115, 217, 0.28);
        }

        .ticker-sparkle {
          animation: sparkleSpin 4s ease-in-out infinite;
        }

        @keyframes sparkleSpin {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.9; }
          50% { transform: scale(1.25) rotate(18deg); opacity: 1; }
        }

        .ticker-phrase {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .ticker-highlight {
          font-weight: 700;
        }

        .dark-theme .ticker-highlight {
          color: #38bdf8;
        }

        .light-theme .ticker-highlight {
          color: #1d4ed8;
        }

        .ticker-bullet {
          font-size: 10px;
          opacity: 0.45;
          margin: 0 2px;
        }

        .ticker-cta {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2px;
          transition: all 0.2s ease;
          margin-left: 4px;
        }

        .dark-theme .ticker-cta {
          background: linear-gradient(135deg, rgba(44, 115, 217, 0.3), rgba(30, 26, 80, 0.6));
          border: 1px solid rgba(56, 189, 248, 0.4);
          color: #f8fafc;
          box-shadow: 0 2px 8px rgba(44, 115, 217, 0.25);
        }

        .light-theme .ticker-cta {
          background: #282460;
          border: 1px solid #1f1b4d;
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(40, 36, 96, 0.2);
        }

        .marquee-item:hover .ticker-cta {
          transform: translateY(-1px);
        }

        .dark-theme .marquee-item:hover .ticker-cta {
          background: #2c73d9;
          border-color: #38bdf8;
          color: #ffffff;
          box-shadow: 0 3px 12px rgba(44, 115, 217, 0.45);
        }

        .light-theme .marquee-item:hover .ticker-cta {
          background: #1e1b4d;
          box-shadow: 0 4px 12px rgba(40, 36, 96, 0.3);
        }

        .ticker-arrow {
          transition: transform 0.2s ease;
        }

        .marquee-item:hover .ticker-arrow {
          transform: translateX(3px);
        }

        @media (max-width: 991px) {
          .top-announcement-bar {
            height: 35px;
          }
          .marquee-item {
            font-size: 11.5px;
            padding: 0 20px;
            gap: 10px;
          }
          .ticker-cta {
            font-size: 10.5px;
            padding: 2.5px 8px;
          }
        }

        @media (max-width: 575px) {
          .top-announcement-bar {
            height: 33px;
          }
          .marquee-item {
            font-size: 11px;
            padding: 0 16px;
            gap: 8px;
          }
          .ticker-badge {
            display: none; /* Keep clean on small mobile */
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
