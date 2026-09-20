import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function TopAnnouncementBar() {
  // 3 repeats with generous spacing create a seamless, continuous, stutter-free loop
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
              <span className="ann-badge">
                <Sparkles size={11} className="ann-sparkle" />
                <span>LIMITED OFFER</span>
              </span>

              <span className="ann-text">
                Cut operational costs by <strong className="ann-hl">up to 30%</strong>
              </span>

              <span className="ann-sep">•</span>

              <span className="ann-text">
                Book your <strong className="ann-hl">100% Free ERP Demo</strong> today
              </span>

              <span className="ann-sep">•</span>

              <span className="ann-text">
                No hidden implementation fees
              </span>

              <span className="ann-cta-pill">
                <span>Schedule Now</span>
                <ArrowRight size={11} className="ann-cta-arrow" />
              </span>

              <span className="ann-spacer-diamond">✦</span>
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
          overflow: hidden !important;
          z-index: 1001 !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          /* Signature deep brand navy across both light & dark themes */
          background: #0d0a27 !important;
          background: linear-gradient(90deg, #09071c 0%, #15103d 30%, #1c1752 50%, #15103d 70%, #09071c 100%) !important;
          border-bottom: 1px solid rgba(44, 115, 217, 0.32) !important;
          color: #ffffff !important;
          font-family: var(--font-sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif) !important;
          user-select: none !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        /* Contained width for clean professional alignment instead of stretching across extreme ultra-wide screen */
        .top-ann-inner-container {
          width: 100% !important;
          max-width: 1200px !important;
          height: 32px !important;
          max-height: 32px !important;
          overflow: hidden !important;
          display: flex !important;
          align-items: center !important;
          position: relative !important;
          /* Subtle fade mask on left and right edges */
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
          white-space: nowrap !important;
          animation: smoothTickerScroll 36s linear infinite !important;
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

        /* Strict single line row - completely forbids vertical wrapping */
        .top-ann-single-line {
          display: inline-flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          align-items: center !important;
          gap: 12px !important;
          padding: 0 28px !important;
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

        .ann-badge {
          display: inline-flex !important;
          align-items: center !important;
          gap: 4px !important;
          background: rgba(44, 115, 217, 0.3) !important;
          border: 1px solid rgba(56, 189, 248, 0.5) !important;
          color: #38bdf8 !important;
          font-size: 9.5px !important;
          font-weight: 700 !important;
          letter-spacing: 0.6px !important;
          padding: 1px 7px !important;
          border-radius: 4px !important;
          white-space: nowrap !important;
          flex-shrink: 0 !important;
          line-height: 1.4 !important;
        }

        .ann-sparkle {
          color: #38bdf8 !important;
        }

        .ann-text {
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
          margin: 0 4px !important;
          white-space: nowrap !important;
        }

        .ann-sep {
          color: rgba(255, 255, 255, 0.4) !important;
          font-size: 9px !important;
          display: inline-block !important;
          margin: 0 2px !important;
          white-space: nowrap !important;
          flex-shrink: 0 !important;
        }

        .ann-cta-pill {
          display: inline-flex !important;
          align-items: center !important;
          gap: 5px !important;
          background: #2c73d9 !important;
          border: 1px solid #38bdf8 !important;
          color: #ffffff !important;
          padding: 2px 10px !important;
          border-radius: 999px !important;
          font-size: 10.5px !important;
          font-weight: 700 !important;
          letter-spacing: 0.3px !important;
          line-height: 1.5 !important;
          white-space: nowrap !important;
          flex-shrink: 0 !important;
          transition: all 0.2s ease !important;
          box-shadow: 0 0 10px rgba(44, 115, 217, 0.4) !important;
        }

        .top-ann-single-line:hover .ann-cta-pill {
          background: #1d4ed8 !important;
          box-shadow: 0 0 14px rgba(44, 115, 217, 0.7) !important;
          transform: translateY(-0.5px) !important;
        }

        .ann-cta-arrow {
          transition: transform 0.2s ease !important;
        }

        .top-ann-single-line:hover .ann-cta-arrow {
          transform: translateX(2.5px) !important;
        }

        .ann-spacer-diamond {
          color: rgba(44, 115, 217, 0.7) !important;
          font-size: 11px !important;
          margin-left: 16px !important;
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
            gap: 9px !important;
            padding: 0 18px !important;
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
            gap: 7px !important;
            padding: 0 14px !important;
            height: 28px !important;
            line-height: 28px !important;
          }
          .ann-badge {
            display: none !important;
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
