import { useEffect, useRef, useState, type CSSProperties, type PropsWithChildren } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div
      ref={elementRef}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
