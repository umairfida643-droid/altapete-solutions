import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TopAnnouncementBar() {
  // 6 identical ticker items ensure a continuous seamless -50% CSS infinite marquee
  const tickerItems = Array.from({ length: 6 });

  return (
    <div
      className="top-announcement-bar"
      role="region"
      aria-label="Announcement ticker"
    >
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {tickerItems.map((_, idx) => (
            <Link
              key={idx}
              href="/contact-us"
              className="marquee-item"
              tabIndex={idx === 0 ? 0 : -1}
              aria-label="Cut operational costs by up to 30% - Book your 100% Free ERP Demo today - Schedule Now"
            >
              <span className="ticker-phrase">
                Cut operational costs by <strong className="ticker-highlight">up to 30%</strong>
              </span>

              <span className="ticker-dot">•</span>

              <span className="ticker-phrase">
                Book your <strong className="ticker-highlight">100% Free ERP Demo</strong> today
              </span>

              <span className="ticker-dot">•</span>

              <span className="ticker-phrase">
                No hidden implementation fees
              </span>

              <span className="ticker-dot">•</span>

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
          height: 31px;
          position: relative;
          overflow: hidden;
          z-index: 1001;
          display: flex;
          align-items: center;
          /* Website's signature dark brand navy across both themes */
          background: #141133;
          background: linear-gradient(90deg, #0d0a27 0%, #191444 35%, #221c54 65%, #0d0a27 100%);
          border-bottom: 1px solid rgba(44, 115, 217, 0.28);
          color: #ffffff;
          font-family: var(--font-sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
          user-select: none;
        }

        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          position: relative;
          mask-image: linear-gradient(to right, transparent 0%, black 28px, black calc(100% - 28px), transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 28px, black calc(100% - 28px), transparent 100%);
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marqueeScroll 32s linear infinite;
          will-change: transform;
        }

        /* Pause animation smoothly on hover or keyboard focus */
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
          gap: 10px;
          padding: 0 24px;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          color: #ffffff;
          font-size: 11.5px;
          font-weight: 450;
          letter-spacing: 0.2px;
          line-height: 31px;
          transition: opacity 0.2s ease;
        }

        .marquee-item:hover {
          opacity: 0.95;
        }

        .ticker-phrase {
          display: inline-flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.92);
        }

        .ticker-highlight {
          color: #38bdf8;
          font-weight: 600;
          margin-left: 3px;
        }

        .ticker-dot {
          font-size: 9px;
          color: rgba(255, 255, 255, 0.35);
          display: inline-block;
          margin: 0 1px;
        }

        .ticker-cta {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(44, 115, 217, 0.22);
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: #ffffff;
          padding: 2px 9px;
          border-radius: 999px;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.3px;
          line-height: 1.4;
          transition: all 0.2s ease;
          margin-left: 2px;
        }

        .marquee-item:hover .ticker-cta {
          background: #2c73d9;
          border-color: #38bdf8;
          box-shadow: 0 0 10px rgba(44, 115, 217, 0.5);
          transform: translateY(-0.5px);
        }

        .ticker-arrow {
          transition: transform 0.2s ease;
        }

        .marquee-item:hover .ticker-arrow {
          transform: translateX(2.5px);
        }

        @media (max-width: 991px) {
          .top-announcement-bar {
            height: 29px;
          }
          .marquee-item {
            font-size: 11px;
            gap: 8px;
            padding: 0 18px;
            line-height: 29px;
          }
          .ticker-cta {
            font-size: 10px;
            padding: 1.5px 7px;
          }
        }

        @media (max-width: 576px) {
          .top-announcement-bar {
            height: 27px;
          }
          .marquee-item {
            font-size: 10.5px;
            gap: 6px;
            padding: 0 14px;
            line-height: 27px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation-duration: 70s;
          }
        }
      `}</style>
    </div>
  );
}
