'use client';

import { useState } from 'react';
import Reveal from '@/components/animations/Reveal';
import { InfoIcon } from 'lucide-react';

interface Tech {
  id: string;
  name: string;
  cat: string;
  desc: string;
  pins: number;
}

const techs: Tech[] = [
  { id: '01', name: 'C', cat: 'SYSTEMS', desc: 'Core language for OS development (LucilleOS) and low-level logic.', pins: 4 },
  { id: '02', name: 'C++', cat: 'SYSTEMS', desc: 'Object-oriented systems programming and performance-critical apps.', pins: 4 },
  { id: '03', name: 'C#', cat: 'BACKEND', desc: 'Internal tool development at Texplained.', pins: 4 },
  { id: '04', name: '.NET', cat: 'BACKEND', desc: 'Framework for robust desktop and web tools.', pins: 4 },
  { id: '05', name: 'Python', cat: 'CORE', desc: 'Backend logic, AI integration (Helia), and automation scripts.', pins: 8 },
  { id: '06', name: 'PyTorch', cat: 'ML', desc: 'Machine learning models for Helia\'s accessibility features.', pins: 4 },
  { id: '07', name: 'Nuxt', cat: 'WEB', desc: 'Full-stack Vue framework for BeReale social platform.', pins: 4 },
  { id: '08', name: 'Vue', cat: 'WEB', desc: 'Reactive UI components for complex web applications.', pins: 4 },
  { id: '09', name: 'React', cat: 'WEB', desc: 'Building accessible interfaces and dashboards.', pins: 4 },
  { id: '10', name: 'TypeScript', cat: 'WEB', desc: 'Type-safe frontend and backend architecture.', pins: 4 },
  { id: '11', name: 'JavaScript', cat: 'WEB', desc: 'Interactive web dynamics and logic.', pins: 4 },
  { id: '12', name: 'Flutter', cat: 'MOBILE', desc: 'Cross-platform mobile application development.', pins: 4 },
  { id: '13', name: 'Dart', cat: 'MOBILE', desc: 'Logic layer for Flutter applications.', pins: 4 },
  { id: '14', name: 'MySQL', cat: 'DATA', desc: 'Relational database management for BeReale.', pins: 4 },
  { id: '15', name: 'Docker', cat: 'INFRA', desc: 'Containerized environments for consistent deployment.', pins: 4 },
  { id: '16', name: 'Git', cat: 'INFRA', desc: 'Version control and collaborative history tracking.', pins: 2 },
  { id: '17', name: 'Figma', cat: 'DESIGN', desc: 'UI/UX design, prototyping, and graphic charters.', pins: 4 },
  { id: '18', name: 'Blender', cat: 'VISUAL', desc: '3D modeling and spatial visualization.', pins: 4 },
  { id: '19', name: 'Illustrator', cat: 'DESIGN', desc: 'Vector graphics and technical schematics.', pins: 2 },
  { id: '20', name: 'Photoshop', cat: 'DESIGN', desc: 'Texture and raster image processing.', pins: 2 }
];

export default function WorkbenchSection() {
  const [activeTech, setActiveTech] = useState<Tech | null>(null);

  return (
    <section id="workbench" className="dark-section min-h-screen relative px-6 md:px-16 py-24 md:py-32 pcb-bg border-t border-ink overflow-hidden">
      <Reveal className="flex items-baseline gap-4 md:gap-6 mb-16 flex-wrap">
        <span className="font-mono text-xs tracking-[0.3em] text-copper-light">V</span>
        <div className="h-px flex-grow bg-paper/20 max-w-[100px]"></div>
        <h2 className="font-display font-medium text-2xl md:text-3xl tracking-tight text-paper">Toolbox</h2>
        <span className="font-mono text-[10px] tracking-[0.2em] text-paper/40 ml-auto">INTERACTIVE_MODULES</span>
      </Reveal>

      <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" onMouseLeave={() => setActiveTech(null)}>
        {techs.map((tech) => (
          <div 
            key={tech.id}
            className={`tech-module border border-paper/20 p-4 flex flex-col justify-between min-h-[120px] interactive ${activeTech === tech ? 'active' : ''}`}
            onMouseEnter={() => setActiveTech(tech)}
          >
            <div className="flex justify-between items-start">
              <span className="font-mono text-[9px] text-paper/40">{tech.id}</span>
              <span className="font-mono text-[9px] text-paper/40">{tech.cat}</span>
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl font-medium text-paper">{tech.name}</h3>
              <div className="mt-2 flex gap-1">
                {Array.from({ length: tech.pins }).map((_, i) => (
                  <div key={i} className="pin w-3 h-1 bg-paper/30"></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Reveal>

      <Reveal delay={0.2} className="mt-8 border border-paper/20 p-6 bg-paper/5 min-h-[120px] flex items-center">
        {activeTech ? (
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] tracking-[0.2em] text-copper-light">MODULE_ACTIVE</span>
              <span className="font-display text-2xl md:text-3xl text-paper">{activeTech.name}</span>
            </div>
            <div className="flex-grow border-l-0 md:border-l border-paper/20 pl-0 md:pl-12">
              <span className="font-mono text-[10px] tracking-[0.2em] text-paper/40">DESCRIPTION</span>
              <p className="font-serif text-lg md:text-xl italic text-paper/90 mt-1">{activeTech.desc}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 text-paper/50">
            <InfoIcon className="w-4 h-4 text-copper-light" strokeWidth={1.5} />
            <span className="font-mono text-xs tracking-[0.2em]">HOVER_OVER_MODULE_TO_INSPECT</span>
          </div>
        )}
      </Reveal>
    </section>
  );
}
