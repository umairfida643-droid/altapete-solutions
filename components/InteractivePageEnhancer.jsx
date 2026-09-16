import { useEffect } from 'react';
import { useRouter } from 'next/router';

const TAX_HERO_TABS = [
  {
    counter: '01 / 07',
    tag: 'VAT',
    title: 'VAT Advisory & Compliance',
    desc: 'Full VAT lifecycle management — registration, periodic filing, input tax recovery, and strategic advisory to minimize exposure.',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14l2 2 4-4"></path><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg>',
    smallSvg: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14l2 2 4-4"></path><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg>'
  },
  {
    counter: '02 / 07',
    tag: 'TAX & ZAKAT',
    title: 'Corporate Income Tax & Zakat Advisory',
    desc: 'Comprehensive corporate income tax planning, Zakat declaration optimization, cross-border structuring, and GAZT compliance across KSA.',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>',
    smallSvg: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>'
  },
  {
    counter: '03 / 07',
    tag: 'COMPLIANCE',
    title: 'Regulatory & Statutory Compliance',
    desc: 'Proactive monitoring of evolving tax codes and regional statutory obligations to ensure complete adherence and avoid penalties.',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>',
    smallSvg: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>'
  },
  {
    counter: '04 / 07',
    tag: 'TRANSFER PRICING',
    title: 'Transfer Pricing Advisory & Documentation',
    desc: 'Master file, local file, and Country-by-Country (CbCR) documentation compliant with OECD guidelines and KSA transfer pricing bylaws.',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857"></path><path d="M9 20H4v-2a3 3 0 015.356-1.857"></path><circle cx="12" cy="8" r="4"></circle></svg>',
    smallSvg: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857"></path><path d="M9 20H4v-2a3 3 0 015.356-1.857"></path><circle cx="12" cy="8" r="4"></circle></svg>'
  },
  {
    counter: '05 / 07',
    tag: 'FATOORA',
    title: 'E-Invoicing (FATOORA) Implementation',
    desc: 'End-to-end integration for Phase 1 and Phase 2 ZATCA e-invoicing compliance with cryptographic stamp generation and live clearance.',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M2 10h20"></path></svg>',
    smallSvg: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M2 10h20"></path></svg>'
  },
  {
    counter: '06 / 07',
    tag: 'ZATCA PORTAL',
    title: 'ZATCA Registration & Compliance Management',
    desc: 'Complete onboarding on ERAD and Fatoora portals, certificate management (CSID), and ongoing compliance reporting.',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    smallSvg: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
  },
  {
    counter: '07 / 07',
    tag: 'AUDIT & DISPUTE',
    title: 'Tax Audit Support & Dispute Resolution',
    desc: 'Expert defense, audit preparation, assessment appeals, and representation before ZATCA committees and appellate tribunals.',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><path d="M14 2v6h6"></path><path d="M9 13h6M9 17h4"></path></svg>',
    smallSvg: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><path d="M14 2v6h6"></path><path d="M9 13h6M9 17h4"></path></svg>'
  }
];

export default function InteractivePageEnhancer() {
  const router = useRouter();

  useEffect(() => {
    const cleanups = [];
    let isDisposed = false;

    // Helper for event listeners
    const addListener = (el, event, handler) => {
      if (!el || isDisposed) return;
      el.addEventListener(event, handler);
      cleanups.push(() => el.removeEventListener(event, handler));
    };

    // =========================================================================
    // 1. TAXATION & ZAKAT HERO TABS (AND SIBLING PAGES)
    // =========================================================================
    const initTaxationHeroTabs = () => {
      // Find right column of 7 items
      const rightCol = Array.from(document.querySelectorAll('div')).find((el) => {
        if (!el.children || el.children.length !== 7) return false;
        const text = el.textContent || '';
        return text.includes('VAT Advisory') && text.includes('Corporate Income Tax');
      });

      if (!rightCol) return;

      const rightItems = Array.from(rightCol.children);
      const leftCard = rightCol.previousElementSibling;
      if (!leftCard) return;

      const titleEl = leftCard.querySelector('h3');
      const descEl = leftCard.querySelector('p');
      const counterEl = leftCard.querySelector('span[style*="monospace"]');
      const allSpans = Array.from(leftCard.querySelectorAll('span'));
      const tagEl = allSpans.find((s) => s !== counterEl && s.textContent.trim().length > 0 && s.textContent.trim().length < 25);
      const iconEl = leftCard.querySelector('div[style*="border-radius:14px"]') || leftCard.querySelector('svg')?.parentElement;
      const progressOuter = leftCard.querySelector('div[style*="height:2px"], div[style*="height: 2px"]');
      const progressBar = progressOuter ? progressOuter.firstElementChild : null;

      let activeIndex = 0;
      let timer = null;
      let isPaused = false;
      const INTERVAL_MS = 4500;

      const renderTab = (idx) => {
        if (isDisposed) return;
        const data = TAX_HERO_TABS[idx];
        if (!data) return;

        // Update left card with subtle transition
        if (titleEl) {
          titleEl.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
          titleEl.style.opacity = '0';
          titleEl.style.transform = 'translateY(4px)';
          setTimeout(() => {
            if (isDisposed) return;
            titleEl.textContent = data.title;
            titleEl.style.opacity = '1';
            titleEl.style.transform = 'translateY(0)';
          }, 150);
        }

        if (descEl) {
          descEl.style.transition = 'opacity 0.2s ease';
          descEl.style.opacity = '0';
          setTimeout(() => {
            if (isDisposed) return;
            descEl.textContent = data.desc;
            descEl.style.opacity = '1';
          }, 150);
        }

        if (counterEl) counterEl.textContent = data.counter;
        if (tagEl) tagEl.textContent = data.tag;
        if (iconEl) iconEl.innerHTML = data.iconSvg;

        // Reset and animate progress bar
        if (progressBar) {
          progressBar.style.transition = 'none';
          progressBar.style.width = '0%';
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (isDisposed || isPaused) return;
              progressBar.style.transition = `width ${INTERVAL_MS}ms linear`;
              progressBar.style.width = '100%';
            });
          });
        }

        // Update 7 right column items
        rightItems.forEach((item, i) => {
          const isActive = i === idx;
          item.style.cursor = 'pointer';
          item.style.transition = 'all 0.25s ease';

          // Active indicator bar
          let bar = item.querySelector('.hero-active-bar');
          if (isActive) {
            item.style.background = 'rgba(0, 174, 239, 0.14)';
            item.style.border = '1px solid rgba(0, 174, 239, 0.45)';
            item.style.boxShadow = '0 0 16px rgba(0, 174, 239, 0.2)';
            if (!bar) {
              bar = document.createElement('div');
              bar.className = 'hero-active-bar';
              bar.style.position = 'absolute';
              bar.style.left = '0';
              bar.style.top = '15%';
              bar.style.bottom = '15%';
              bar.style.width = '3px';
              bar.style.background = '#00AEEF';
              bar.style.borderRadius = '0 3px 3px 0';
              bar.style.boxShadow = '0 0 8px #00AEEF';
              item.style.position = 'relative';
              item.insertBefore(bar, item.firstChild);
            } else {
              bar.style.display = 'block';
            }
          } else {
            item.style.background = 'rgba(255, 255, 255, 0.02)';
            item.style.border = '1px solid rgba(0, 174, 239, 0.08)';
            item.style.boxShadow = 'none';
            if (bar) bar.style.display = 'none';
          }

          // Icon box
          const iconBox = item.querySelector('div[style*="border-radius:7px"], div[style*="width:28px"]');
          if (iconBox) {
            iconBox.style.transition = 'all 0.25s ease';
            if (isActive) {
              iconBox.style.background = 'rgba(0, 174, 239, 0.25)';
              iconBox.style.border = '1px solid rgba(0, 174, 239, 0.5)';
              iconBox.style.color = '#00AEEF';
            } else {
              iconBox.style.background = 'rgba(0, 174, 239, 0.06)';
              iconBox.style.border = '1px solid rgba(0, 174, 239, 0.15)';
              iconBox.style.color = '#3E6070';
            }
          }

          // Text span
          const span = item.querySelector('span');
          if (span) {
            span.style.transition = 'color 0.25s ease, font-weight 0.25s ease';
            if (isActive) {
              span.style.color = '#FFFFFF';
              span.style.fontWeight = '600';
            } else {
              span.style.color = '#4E7A96';
              span.style.fontWeight = '400';
            }
          }
        });
      };

      const startTimer = () => {
        if (timer) clearInterval(timer);
        timer = setInterval(() => {
          if (!isPaused && !isDisposed) {
            activeIndex = (activeIndex + 1) % TAX_HERO_TABS.length;
            renderTab(activeIndex);
          }
        }, INTERVAL_MS);
      };

      // Attach click events
      rightItems.forEach((item, idx) => {
        addListener(item, 'click', () => {
          activeIndex = idx;
          renderTab(activeIndex);
          startTimer();
        });
      });

      // Hover pause on right column and left card
      addListener(rightCol, 'mouseenter', () => {
        isPaused = true;
        if (progressBar) progressBar.style.transition = 'none';
      });
      addListener(rightCol, 'mouseleave', () => {
        isPaused = false;
        startTimer();
        renderTab(activeIndex);
      });
      addListener(leftCard, 'mouseenter', () => {
        isPaused = true;
        if (progressBar) progressBar.style.transition = 'none';
      });
      addListener(leftCard, 'mouseleave', () => {
        isPaused = false;
        startTimer();
        renderTab(activeIndex);
      });

      // Initial render & timer start
      renderTab(0);
      startTimer();

      cleanups.push(() => {
        if (timer) clearInterval(timer);
      });
    };

    // =========================================================================
    // 2. 6-PHASE TIMELINE STEPS (SALLA INTEGRATION & PROCESS PAGES)
    // =========================================================================
    const initProcessTimeline = () => {
      // Find the numbered dots container (contains 1 to 6)
      const dotsContainers = Array.from(document.querySelectorAll('div')).filter((el) => {
        if (!el.children || el.children.length < 5) return false;
        const texts = Array.from(el.children).map((c) => c.textContent.trim());
        return texts[0] === '1' && texts[1] === '2' && texts[2] === '3';
      });

      dotsContainers.forEach((dotsContainer) => {
        const dots = Array.from(dotsContainer.children);
        const totalSteps = dots.length;

        // Find sibling or parent progress bar line
        const parentTimeline = dotsContainer.parentElement;
        if (!parentTimeline) return;

        const progressBarLine = parentTimeline.querySelector('div[style*="linear-gradient"][style*="transition"], div[style*="background:linear-gradient"]');

        // Find the phase cards in the sibling row
        const row = parentTimeline.nextElementSibling || parentTimeline.parentElement.querySelector('.row');
        const cards = row ? Array.from(row.querySelectorAll('.col-lg-4, .col-md-6, .col-lg-6')) : [];

        let currentStep = 0;
        let stepTimer = null;
        let isTimelinePaused = false;
        const STEP_INTERVAL_MS = 2800;

        const updateStep = (stepIdx) => {
          if (isDisposed) return;
          currentStep = stepIdx % totalSteps;

          // Update progress bar width
          if (progressBarLine) {
            const pct = (currentStep / (totalSteps - 1)) * 100;
            progressBarLine.style.transition = 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            progressBarLine.style.width = `${pct}%`;
          }

          // Update step dots
          dots.forEach((dot, idx) => {
            dot.style.cursor = 'pointer';
            dot.style.transition = 'all 0.4s ease';
            if (idx <= currentStep) {
              dot.style.background = 'linear-gradient(135deg, #00b5a8, #059669)';
              dot.style.border = '3px solid #00b5a8';
              dot.style.transform = idx === currentStep ? 'scale(1.25)' : 'scale(1)';
              dot.style.boxShadow = idx === currentStep ? '0 0 16px rgba(0, 181, 168, 0.6)' : 'none';
              dot.style.color = '#ffffff';
            } else {
              dot.style.background = 'rgba(255, 255, 255, 0.2)';
              dot.style.border = 'none';
              dot.style.transform = 'scale(1)';
              dot.style.boxShadow = 'none';
              dot.style.color = 'rgba(255, 255, 255, 0.7)';
            }
          });

          // Update cards
          cards.forEach((col, idx) => {
            const innerCard = col.firstElementChild || col;
            innerCard.style.cursor = 'pointer';
            innerCard.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';

            if (idx === currentStep) {
              innerCard.style.background = '#00b5a822';
              innerCard.style.backdropFilter = 'blur(16px)';
              innerCard.style.border = '3px solid #00b5a8';
              innerCard.style.borderRadius = '20px';
              innerCard.style.transform = 'scale(1.04)';
              innerCard.style.boxShadow = '0 20px 45px rgba(0, 181, 168, 0.35)';
              innerCard.style.zIndex = '10';
              innerCard.style.animation = 'phaseActive 2s ease-in-out infinite';
            } else {
              innerCard.style.background = 'rgba(30, 41, 59, 0.5)';
              innerCard.style.backdropFilter = 'blur(16px)';
              innerCard.style.border = '2px solid rgba(255, 255, 255, 0.1)';
              innerCard.style.borderRadius = '20px';
              innerCard.style.transform = 'scale(1)';
              innerCard.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
              innerCard.style.zIndex = '1';
              innerCard.style.animation = 'none';
            }
          });
        };

        const startStepTimer = () => {
          if (stepTimer) clearInterval(stepTimer);
          stepTimer = setInterval(() => {
            if (!isTimelinePaused && !isDisposed) {
              currentStep = (currentStep + 1) % totalSteps;
              updateStep(currentStep);
            }
          }, STEP_INTERVAL_MS);
        };

        // Attach click listeners to dots
        dots.forEach((dot, idx) => {
          addListener(dot, 'click', () => {
            updateStep(idx);
            startStepTimer();
          });
        });

        // Attach click listeners to cards
        cards.forEach((col, idx) => {
          const innerCard = col.firstElementChild || col;
          addListener(innerCard, 'click', () => {
            updateStep(idx);
            startStepTimer();
          });
          // Pause on hover
          addListener(innerCard, 'mouseenter', () => {
            isTimelinePaused = true;
          });
          addListener(innerCard, 'mouseleave', () => {
            isTimelinePaused = false;
          });
        });

        // Pause on timeline container hover
        addListener(parentTimeline, 'mouseenter', () => {
          isTimelinePaused = true;
        });
        addListener(parentTimeline, 'mouseleave', () => {
          isTimelinePaused = false;
        });

        // Initialize
        updateStep(0);
        startStepTimer();

        cleanups.push(() => {
          if (stepTimer) clearInterval(stepTimer);
        });
      });
    };

    // =========================================================================
    // 3. CUSTOM APP DEVELOPMENT PREVIEW STAGES
    // =========================================================================
    const initCustomAppStages = () => {
      // Look for the stage buttons container on /custom-app-development
      const stageButtons = Array.from(document.querySelectorAll('div[style*="cursor:pointer"]')).filter((el) => {
        return (
          el.style.width === '50px' &&
          el.style.height === '50px' &&
          el.parentElement &&
          el.parentElement.children.length >= 4 &&
          el.parentElement.style.flexDirection === 'column'
        );
      });

      if (stageButtons.length >= 4) {
        let currentStage = 0;
        let stageTimer = null;
        let isStagePaused = false;

        const stageData = [
          { percent: '20%', cmd: 'npm run init-architecture', status: 'Architecture mapped successfully!' },
          { percent: '45%', cmd: 'npm run generate-wireframes', status: 'UI/UX Design components approved!' },
          { percent: '75%', cmd: 'npm run build', status: 'Application built successfully!' },
          { percent: '90%', cmd: 'npm test -- --coverage', status: 'All 142 unit & integration tests passed!' },
          { percent: '100%', cmd: 'npm run deploy --prod', status: 'Production deployed to AWS & Cloudflare!' }
        ];

        const container = stageButtons[0].parentElement.parentElement;
        const progressLine = container ? container.querySelector('div[style*="width:0%"], div[style*="width: 0%"], div[style*="linear-gradient(90deg, #00AEEF, #00C6FF)"]') : null;
        const percentText = container ? container.querySelector('div[style*="monospace"]') : null;

        const updateStage = (idx) => {
          if (isDisposed) return;
          currentStage = idx % stageButtons.length;
          const data = stageData[currentStage] || stageData[0];

          stageButtons.forEach((btn, i) => {
            btn.style.transition = 'all 0.3s ease';
            if (i === currentStage) {
              btn.style.background = 'linear-gradient(135deg, #00AEEF, #0088C7)';
              btn.style.border = '2px solid #00AEEF';
              btn.style.boxShadow = '0 0 16px rgba(0, 174, 239, 0.5)';
              btn.style.transform = 'scale(1.1)';
            } else {
              btn.style.background = 'rgba(0, 174, 239, 0.1)';
              btn.style.border = '2px solid rgba(0, 174, 239, 0.2)';
              btn.style.boxShadow = 'none';
              btn.style.transform = 'scale(1)';
            }
          });

          if (progressLine) {
            progressLine.style.transition = 'width 0.5s ease';
            progressLine.style.width = data.percent;
          }
        };

        const startStageTimer = () => {
          if (stageTimer) clearInterval(stageTimer);
          stageTimer = setInterval(() => {
            if (!isStagePaused && !isDisposed) {
              currentStage = (currentStage + 1) % stageButtons.length;
              updateStage(currentStage);
            }
          }, 3200);
        };

        stageButtons.forEach((btn, idx) => {
          addListener(btn, 'click', () => {
            updateStage(idx);
            startStageTimer();
          });
          addListener(btn, 'mouseenter', () => {
            isStagePaused = true;
          });
          addListener(btn, 'mouseleave', () => {
            isStagePaused = false;
          });
        });

        updateStage(0);
        startStageTimer();

        cleanups.push(() => {
          if (stageTimer) clearInterval(stageTimer);
        });
      }
    };

    // =========================================================================
    // 4. HERO PILL BADGES (Enterprise Solutions, Outsourcing, Corporate Advisory)
    // =========================================================================
    const initHeroPills = () => {
      // Find badge containers with span pills
      const pillContainers = Array.from(document.querySelectorAll('div[style*="flex-wrap:wrap"], div[style*="flex-wrap: wrap"]')).filter((el) => {
        const pills = el.querySelectorAll('span');
        return pills.length >= 3 && el.closest('.container, section, main');
      });

      pillContainers.forEach((container) => {
        const pills = Array.from(container.querySelectorAll('span'));
        pills.forEach((pill) => {
          pill.style.cursor = 'pointer';
          pill.style.transition = 'all 0.25s ease';

          addListener(pill, 'click', () => {
            // Toggle active styling
            pills.forEach((p) => {
              p.style.background = 'rgba(0, 174, 239, 0.07)';
              p.style.border = '1px solid rgba(0, 174, 239, 0.3)';
              p.style.boxShadow = 'none';
            });

            pill.style.background = 'rgba(0, 174, 239, 0.25)';
            pill.style.border = '1px solid #00AEEF';
            pill.style.boxShadow = '0 0 14px rgba(0, 174, 239, 0.35)';

            // Try to find matching card or section down page
            const pillText = pill.textContent.trim().toLowerCase();
            const headings = Array.from(document.querySelectorAll('h2, h3, h4'));
            const matchingHeading = headings.find((h) => {
              const hText = h.textContent.trim().toLowerCase();
              return hText.includes(pillText) || pillText.includes(hText);
            });

            if (matchingHeading) {
              matchingHeading.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          });
        });
      });
    };

    // =========================================================================
    // 5. FAQ ACCORDION INTERACTIVITY
    // =========================================================================
    const initFaqAccordions = () => {
      const faqBtns = Array.from(document.querySelectorAll('.faq-btn'));
      faqBtns.forEach((btn) => {
        // Set initial state
        const panelId = btn.getAttribute('aria-controls');
        const wrap = panelId ? document.getElementById(panelId) : btn.closest('.faq-item')?.querySelector('.faq-wrap');
        if (wrap) {
          const isExp = btn.getAttribute('aria-expanded') === 'true';
          wrap.style.display = isExp ? 'block' : 'none';
        }

        addListener(btn, 'click', () => {
          const isExpanded = btn.getAttribute('aria-expanded') === 'true';
          const nextState = !isExpanded;
          
          btn.setAttribute('aria-expanded', String(nextState));
          if (wrap) {
            wrap.setAttribute('aria-hidden', String(!nextState));
            wrap.style.display = nextState ? 'block' : 'none';
          }
        });
      });
    };

    // Run all initializers after a short tick for client-side DOM stabilization
    const mountTimer = setTimeout(() => {
      if (isDisposed) return;
      initTaxationHeroTabs();
      initProcessTimeline();
      initCustomAppStages();
      initHeroPills();
      initFaqAccordions();
    }, 150);

    return () => {
      isDisposed = true;
      clearTimeout(mountTimer);
      cleanups.forEach((c) => {
        try { c(); } catch (e) {}
      });
    };
  }, [router.asPath]);

  return null;
}
