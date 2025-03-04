
import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  delay?: number;
  distance?: string;
  duration?: number;
  easing?: string;
  opacity?: number;
  origin?: 'top' | 'right' | 'bottom' | 'left';
  reset?: boolean;
  viewFactor?: number;
  mobile?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const defaultOptions: ScrollRevealOptions = {
      delay: 0,
      distance: '20px',
      duration: 800,
      easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      opacity: 0,
      origin: 'bottom',
      reset: false,
      viewFactor: 0.1,
      mobile: true,
    };

    const mergedOptions = { ...defaultOptions, ...options };
    let scrollObserver: IntersectionObserver;

    if (elementRef.current) {
      const element = elementRef.current;
      
      // Set initial styles
      element.style.opacity = mergedOptions.opacity?.toString() || '0';
      element.style.transform = `translate${
        mergedOptions.origin === 'left' || mergedOptions.origin === 'right' ? 'X' : 'Y'
      }(${
        mergedOptions.origin === 'left' || mergedOptions.origin === 'top'
          ? '-' + mergedOptions.distance
          : mergedOptions.distance
      })`;
      element.style.transition = `opacity ${mergedOptions.duration}ms ${mergedOptions.easing}, transform ${mergedOptions.duration}ms ${mergedOptions.easing}`;
      element.style.transitionDelay = `${mergedOptions.delay}ms`;
      
      // Create and configure IntersectionObserver
      scrollObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // When element enters viewport
              element.style.opacity = '1';
              element.style.transform = 'translate(0, 0)';
              
              if (!mergedOptions.reset) {
                scrollObserver.unobserve(element);
              }
            } else if (mergedOptions.reset) {
              // When element leaves viewport (if reset is true)
              element.style.opacity = mergedOptions.opacity?.toString() || '0';
              element.style.transform = `translate${
                mergedOptions.origin === 'left' || mergedOptions.origin === 'right' ? 'X' : 'Y'
              }(${
                mergedOptions.origin === 'left' || mergedOptions.origin === 'top'
                  ? '-' + mergedOptions.distance
                  : mergedOptions.distance
              })`;
            }
          });
        },
        {
          threshold: mergedOptions.viewFactor,
          rootMargin: '0px',
        }
      );
      
      scrollObserver.observe(element);
    }

    return () => {
      if (scrollObserver && elementRef.current) {
        scrollObserver.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return elementRef;
}
