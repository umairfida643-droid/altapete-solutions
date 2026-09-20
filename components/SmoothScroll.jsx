import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Lenis from 'lenis';

export default function SmoothScroll() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#' || href === '#!') return;

      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;

      const hash = href.substring(hashIndex);
      const path = href.substring(0, hashIndex);
      const currentPath = window.location.pathname;

      if (path === '' || path === currentPath || path === currentPath.replace(/\/$/, '')) {
        const target = document.querySelector(hash) || document.getElementById(hash.replace('#', ''));
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -85, duration: 1.2 });
          if (window.history.pushState) {
            window.history.pushState(null, null, hash);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { passive: false });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [router.asPath]);

  return null;
}
