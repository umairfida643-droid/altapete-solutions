import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TopAnnouncementBar() {
  // 3 identical cleanly-spaced ticker items for an infinite, smooth, stutter-free loop
  const announcements = [1, 2, 3];

  return (
    <div
      className="top-ann-bar-root"
      role="region"
      aria-label="Announcement ticker"
    >
      <div className="top-ann-inner-container">
        <div className="top-ann-scroll-track">
          {announcements.map((id) => (
            <Link
              key={id}
              href="/contact-us"
              className="top-ann-single-line"
              tabIndex={id === 1 ? 0 : -1}
              aria-label="Cut operational costs by up to 30% - Book your 100% Free ERP Demo today - No hidden implementation fees - Schedule Now"
            >
              <span className="ann-phrase">
                Cut operational costs by&nbsp;<strong className="ann-hl">up to 30%</strong>
              </span>

              <span className="ann-bullet">•</span>

              <span className="ann-phrase">
                Book your&nbsp;<strong className="ann-hl">100% Free ERP Demo</strong>&nbsp;today
              </span>

              <span className="ann-bullet">•</span>

              <span className="ann-phrase">
                No hidden implementation fees
              </span>

              <span className="ann-cta">
                <span>Schedule Now</span>
                <ArrowRight size={11} className="ann-arrow" />
              </span>

              {/* Explicit large cycle separator so Schedule Now and Cut operational costs never touch */}
              <span className="ann-cycle-bullet">•</span>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .top-ann-bar-root {
          width: 100% !important;
          height: 32px !important;
          max-height: 32px !important;
          line-height: 32px !important;
          position: relative !important;
          top: 0 !important;
          left: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
          z-index: 1001 !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          /* Signature deep brand navy across both light & dark themes */
          background: #0d0a27 !important;
          background: linear-gradient(90deg, #09071c 0%, #15103d 30%, #1c1752 50%, #15103d 70%, #09071c 100%) !important;
          border-bottom: 1px solid rgba(44, 115, 217, 0.28) !important;
          color: #ffffff !important;
          font-family: var(--font-sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif) !important;
          user-select: none !important;
        }

        .top-ann-inner-container {
          width: 100% !important;
          max-width: 1200px !important;
          height: 32px !important;
          max-height: 32px !important;
          margin: 0 auto !important;
          padding: 0 !important;
          overflow: hidden !important;
          display: flex !important;
          align-items: center !important;
          position: relative !important;
          mask-image: linear-gradient(to right, transparent 0%, black 36px, black calc(100% - 36px), transparent 100%) !important;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 36px, black calc(100% - 36px), transparent 100%) !important;
        }

        .top-ann-scroll-track {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          align-items: center !important;
          width: max-content !important;
          height: 32px !important;
          max-height: 32px !important;
          margin: 0 !important;
          padding: 0 !important;
          white-space: nowrap !important;
          animation: smoothTickerScroll 38s linear infinite !important;
          will-change: transform !important;
        }

        .top-ann-bar-root:hover .top-ann-scroll-track,
        .top-ann-bar-root:focus-within .top-ann-scroll-track {
          animation-play-state: paused !important;
        }

        @keyframes smoothTickerScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333333%, 0, 0);
          }
        }

        .top-ann-single-line {
          display: inline-flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          align-items: center !important;
          gap: 16px !important;
          padding: 0 40px 0 10px !important;
          height: 32px !important;
          max-height: 32px !important;
          line-height: 32px !important;
          white-space: nowrap !important;
          flex-shrink: 0 !important;
          text-decoration: none !important;
          cursor: pointer !important;
          color: #ffffff !important;
          font-size: 11.5px !important;
          font-weight: 500 !important;
          letter-spacing: 0.25px !important;
          transition: opacity 0.2s ease !important;
        }

        .top-ann-single-line:hover {
          opacity: 0.95 !important;
        }

        .ann-phrase {
          display: inline-flex !important;
          align-items: center !important;
          white-space: nowrap !important;
          color: #ffffff !important;
          flex-shrink: 0 !important;
          line-height: 32px !important;
        }

        .ann-hl {
          color: #38bdf8 !important;
          font-weight: 700 !important;
          margin: 0 5px !important;
          display: inline-block !important;
          white-space: nowrap !important;
        }

        .ann-bullet {
          color: rgba(255, 255, 255, 0.4) !important;
          font-size: 10px !important;
          display: inline-block !important;
          margin: 0 6px !important;
          white-space: nowrap !important;
          flex-shrink: 0 !important;
        }

        .ann-cta {
          display: inline-flex !important;
          align-items: center !important;
          gap: 5px !important;
          background: #2c73d9 !important;
          border: 1px solid #38bdf8 !important;
          color: #ffffff !important;
          padding: 2.5px 12px !important;
          border-radius: 999px !important;
          font-size: 10.5px !important;
          font-weight: 700 !important;
          letter-spacing: 0.3px !important;
          line-height: 1.4 !important;
          white-space: nowrap !important;
          flex-shrink: 0 !important;
          margin-left: 8px !important;
          margin-right: 12px !important;
          transition: all 0.2s ease !important;
          box-shadow: 0 0 10px rgba(44, 115, 217, 0.4) !important;
        }

        .top-ann-single-line:hover .ann-cta {
          background: #1d4ed8 !important;
          box-shadow: 0 0 14px rgba(44, 115, 217, 0.7) !important;
          transform: translateY(-0.5px) !important;
        }

        .ann-arrow {
          transition: transform 0.2s ease !important;
        }

        .top-ann-single-line:hover .ann-arrow {
          transform: translateX(2.5px) !important;
        }

        .ann-cycle-bullet {
          color: rgba(44, 115, 217, 0.8) !important;
          font-size: 12px !important;
          display: inline-block !important;
          margin-left: 8px !important;
          margin-right: 16px !important;
          white-space: nowrap !important;
          flex-shrink: 0 !important;
        }

        @media (max-width: 991px) {
          .top-ann-bar-root {
            height: 30px !important;
            max-height: 30px !important;
            line-height: 30px !important;
          }
          .top-ann-single-line {
            font-size: 11px !important;
            gap: 12px !important;
            padding: 0 30px 0 8px !important;
            height: 30px !important;
            line-height: 30px !important;
          }
        }

        @media (max-width: 576px) {
          .top-ann-bar-root {
            height: 28px !important;
            max-height: 28px !important;
            line-height: 28px !important;
          }
          .top-ann-single-line {
            font-size: 10.5px !important;
            gap: 10px !important;
            padding: 0 24px 0 6px !important;
            height: 28px !important;
            line-height: 28px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .top-ann-scroll-track {
            animation-duration: 90s !important;
          }
        }
      `}</style>
    </div>
  );
}
