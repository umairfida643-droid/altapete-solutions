import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import ChatbotWidget from './ChatbotWidget';

export default function FloatingWidgets() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setShowTopBtn(window.scrollY > 250);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* ── 1. Floating WhatsApp Button (Bottom Left) ── */}
      <a
        href="https://wa.me/966568029153"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-widget"
        aria-label="Direct WhatsApp Chat: +966 56 802 9153"
        title="Direct WhatsApp Chat: +966 56 802 9153"
      >
        <div className="whatsapp-pulse-ring" />
        <div className="whatsapp-btn-body">
          <div className="whatsapp-icon-circle">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.29 3.8 2.52 1.09 2.52.73 2.97.68.46-.04 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.06-.11-.23-.17-.48-.3" />
            </svg>
          </div>
          <div className="whatsapp-text-details">
            <span className="whatsapp-text-title">Direct WhatsApp Chat</span>
            <span className="whatsapp-text-sub">+966 56 802 9153</span>
          </div>
        </div>
      </a>

      {/* ── 2. Floating Go To Top Button (Bottom Right - Positioned Higher) ── */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`floating-top-widget ${showTopBtn ? 'is-visible' : ''}`}
        aria-label="Go to top of page"
        title="Go to top"
      >
        <ArrowUp size={20} strokeWidth={2.4} />
      </button>

      {/* ── 3. Altapete Smart Virtual Assistant Chatbot (Bottom Right) ── */}
      <ChatbotWidget />

      {/* ── Scoped Styles for Floating Widgets ── */}
      <style jsx global>{`
        /* WhatsApp Floating Widget (Bottom Left) */
        .floating-whatsapp-widget {
          position: fixed;
          bottom: 24px;
          left: 24px;
          z-index: 9999;
          display: inline-flex;
          align-items: center;
          text-decoration: none !important;
          outline: none;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease;
        }

        .floating-whatsapp-widget:hover {
          transform: translateY(-3px) scale(1.02);
        }

        .floating-whatsapp-widget:active {
          transform: translateY(0) scale(0.98);
        }

        .whatsapp-pulse-ring {
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border-radius: 40px;
          border: 2px solid rgba(37, 211, 102, 0.6);
          animation: waPulse 2.4s infinite cubic-bezier(0.25, 0, 0, 1);
          pointer-events: none;
          z-index: 1;
        }

        @keyframes waPulse {
          0% { transform: scale(0.96); opacity: 0.8; }
          70% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1.18); opacity: 0; }
        }

        .whatsapp-btn-body {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          background: #25D366;
          color: #ffffff;
          padding: 6px 16px 6px 7px;
          border-radius: 40px;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
          gap: 10px;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .whatsapp-icon-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #ffffff;
        }

        .whatsapp-text-details {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }

        .whatsapp-text-title {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #ffffff;
        }

        .whatsapp-text-sub {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.2px;
          color: #ffffff;
        }

        /* Go To Top Floating Widget (Bottom Right - Positioned Above Chatbot) */
        .floating-top-widget {
          position: fixed;
          bottom: 90px;
          right: 28px;
          z-index: 9999;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid rgba(44, 115, 217, 0.35);
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          color: #00d4ff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transform: translateY(16px) scale(0.85);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          outline: none;
        }

        .floating-top-widget.is-visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .floating-top-widget:hover {
          transform: translateY(-4px) scale(1.06);
          background: #2c73d9;
          color: #ffffff;
          border-color: #2c73d9;
          box-shadow: 0 10px 25px rgba(44, 115, 217, 0.45);
        }

        .floating-top-widget:active {
          transform: translateY(0) scale(0.95);
        }

        /* Light Theme Overrides for Go To Top Widget */
        [data-theme="light"] .floating-top-widget,
        html[data-theme="light"] .floating-top-widget,
        :root:not([data-theme="dark"]) .floating-top-widget {
          background: #ffffff;
          border-color: #cbd5e1;
          color: #2c73d9;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        }

        [data-theme="light"] .floating-top-widget:hover,
        html[data-theme="light"] .floating-top-widget:hover,
        :root:not([data-theme="dark"]) .floating-top-widget:hover {
          background: #2c73d9;
          color: #ffffff;
          border-color: #2c73d9;
          box-shadow: 0 10px 25px rgba(44, 115, 217, 0.35);
        }

        /* Mobile Adjustments (Clean & Compact) */
        @media (max-width: 768px) {
          .floating-whatsapp-widget {
            bottom: 18px;
            left: 18px;
          }
          .whatsapp-btn-body {
            padding: 7px;
            border-radius: 50%;
          }
          .whatsapp-text-details {
            display: none;
          }
          .whatsapp-pulse-ring {
            border-radius: 50%;
          }
          .floating-top-widget {
            bottom: 80px;
            right: 22px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
}
