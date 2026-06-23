'use client';

import { useEffect, useRef } from 'react';
import Reveal from '@/components/animations/Reveal';

export default function IntroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Parallax logic for Hero SVG translated directly from vanilla JS
    const heroSection = heroRef.current;
    const heroSvg = svgRef.current;
    
    if (heroSection && heroSvg && typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        heroSvg.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
      };
      
      heroSection.addEventListener('mousemove', handleMouseMove);
      return () => {
        heroSection.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section ref={heroRef} id="intro" className="min-h-screen flex flex-col justify-center relative px-6 md:px-16 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-30"></div>

      <Reveal className="flex justify-between items-start mb-16">
        <span className="font-mono text-xs tracking-[0.3em] text-copper">SECTION I // INTRODUCTION</span>
        <span className="font-mono text-xs tracking-[0.3em] text-ink/40 hidden md:block">DOSSIER_PF_01</span>
      </Reveal>

      <div className="grid grid-cols-12 gap-8 items-center relative z-10">
        <Reveal className="col-span-12 lg:col-span-8">
          <h1 className="font-display font-medium leading-[0.85] tracking-tighter">
            <span className="block text-[18vw] md:text-[12vw] lg:text-[9vw]">Pierre</span>
            <span className="block text-[18vw] md:text-[12vw] lg:text-[9vw] font-serif italic font-light text-copper">Fiser</span>
          </h1>
          <div className="mt-8 max-w-xl text-xl md:text-2xl text-ink-soft font-serif italic">
            Software developer bridging the gap between low-level systems architecture and intuitive user interfaces.
          </div>
        </Reveal>

        <Reveal delay={0.2} className="col-span-12 lg:col-span-4 relative h-[350px] md:h-[500px] hidden lg:block">
          <div className="hero-svg w-full h-full">
            <svg ref={svgRef} viewBox="0 0 400 500" className="w-full h-full" fill="none">
              <rect x="20" y="20" width="360" height="460" stroke="#1c1b18" strokeWidth="1" strokeDasharray="4 4" />
              <rect x="40" y="40" width="320" height="420" stroke="#1c1b18" strokeWidth="0.5" />
              <g stroke="#b45a1f" strokeWidth="1"><line x1="35" y1="40" x2="45" y2="40"/><line x1="40" y1="35" x2="40" y2="45"/></g>
              <g stroke="#b45a1f" strokeWidth="1"><line x1="355" y1="40" x2="365" y2="40"/><line x1="360" y1="35" x2="360" y2="45"/></g>
              <g stroke="#b45a1f" strokeWidth="1"><line x1="35" y1="460" x2="45" y2="460"/><line x1="40" y1="455" x2="40" y2="465"/></g>
              <g stroke="#b45a1f" strokeWidth="1"><line x1="355" y1="460" x2="365" y2="460"/><line x1="360" y1="455" x2="360" y2="465"/></g>

              <rect x="120" y="180" width="160" height="140" fill="#1c1b18" stroke="#b45a1f" strokeWidth="1" />
              <text x="200" y="240" fill="#e8e0cc" fontSize="14" className="font-mono" textAnchor="middle" fontWeight="500">FISER</text>
              <text x="200" y="260" fill="#b45a1f" fontSize="10" className="font-mono" textAnchor="middle">CORE_PF_01</text>
              <text x="200" y="280" fill="#8a8478" fontSize="8" className="font-mono" textAnchor="middle">REV 1.0</text>

              <g id="topPins">
                {Array.from({ length: 6 }).map((_, i) => {
                  const x = 140 + i * 30;
                  return (
                    <g key={`top-${i}`}>
                      <rect x={x} y="170" width="10" height="10" fill="#1c1b18" />
                      <line x1={x + 5} y1="170" x2={x + 5} y2="140" stroke="#1c1b18" strokeWidth="0.5" />
                    </g>
                  );
                })}
              </g>
              <g id="bottomPins">
                {Array.from({ length: 6 }).map((_, i) => {
                  const x = 140 + i * 30;
                  return (
                    <g key={`bottom-${i}`}>
                      <rect x={x} y="320" width="10" height="10" fill="#1c1b18" />
                      <line x1={x + 5} y1="330" x2={x + 5} y2="360" stroke="#1c1b18" strokeWidth="0.5" />
                    </g>
                  );
                })}
              </g>

              <path d="M 145 140 L 145 100 L 320 100" stroke="#b45a1f" strokeWidth="1" />
              <path d="M 175 140 L 175 80 L 320 80" stroke="#6b6a3a" strokeWidth="1" />
              <path d="M 205 140 L 205 120 L 320 120" stroke="#1c1b18" strokeWidth="0.5" />
              <path d="M 145 360 L 145 400 L 80 400 L 80 460" stroke="#b45a1f" strokeWidth="1" />
              <path d="M 235 360 L 235 420 L 320 420" stroke="#6b6a3a" strokeWidth="1" />

              <circle cx="320" cy="100" r="3" fill="#e8e0cc" stroke="#b45a1f" strokeWidth="1" />
              <circle cx="320" cy="80" r="3" fill="#e8e0cc" stroke="#6b6a3a" strokeWidth="1" />
              <circle cx="80" cy="400" r="3" fill="#e8e0cc" stroke="#b45a1f" strokeWidth="1" />

              <line x1="280" y1="250" x2="360" y2="250" stroke="#1c1b18" strokeWidth="0.5" strokeDasharray="2 2" />
              <text x="365" y="253" fill="#1c1b18" fontSize="8" className="font-mono">[1]</text>
              <line x1="120" y1="220" x2="40" y2="220" stroke="#1c1b18" strokeWidth="0.5" strokeDasharray="2 2" />
              <text x="10" y="223" fill="#1c1b18" fontSize="8" className="font-mono">[2]</text>

              <text x="200" y="60" fill="#1c1b18" fontSize="9" className="font-mono" textAnchor="middle" letterSpacing="2">PROCESS_PACKAGE</text>
              <text x="200" y="440" fill="#1c1b18" fontSize="9" className="font-mono" textAnchor="middle" letterSpacing="2">INTERFACE_LAYER</text>
            </svg>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3} className="mt-20 md:mt-32 grid grid-cols-12 gap-8">
        <div className="col-span-6 md:col-span-3 flex flex-col gap-1">
          <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40">STATUS</span>
          <span className="font-display text-lg flex items-center gap-2">
            <span className="w-2 h-2 bg-olive rounded-full pulse-dot"></span>
            Available
          </span>
        </div>
        <div className="col-span-6 md:col-span-3 flex flex-col gap-1">
          <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40">LOCATION</span>
          <span className="font-display text-lg">Nice, France</span>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col gap-1">
          <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40">FOCUS</span>
          <span className="font-display text-lg">Systems, Web, & AI Integration</span>
        </div>
      </Reveal>
    </section>
  );
}
