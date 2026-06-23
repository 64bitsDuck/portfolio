'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on fine pointers (desktop)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(animateRing);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (ringRef.current) {
        if (target.closest && target.closest('a, button, .interactive, input, textarea, .hex-cell, .tech-module')) {
          ringRef.current.classList.add('hover');
        } else {
          ringRef.current.classList.remove('hover');
        }
        if (target.closest && target.closest('.dark-section')) {
          ringRef.current.classList.add('dark');
        } else {
          ringRef.current.classList.remove('dark');
        }
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    animateRing();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" id="cursorRing" />
      <div ref={dotRef} className="cursor-dot" id="cursorDot" />
    </>
  );
}
