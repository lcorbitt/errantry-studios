'use client';

import React, { useRef, useEffect, useState } from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
  placeholder?: React.ReactNode;
}

export const LazyLoad: React.FC<LazyLoadProps> = ({ children, placeholder }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`w-full h-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {isVisible ? children : (placeholder || null)}
    </div>
  );
};
