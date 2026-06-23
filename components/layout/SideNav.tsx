'use client';

import { useActiveSection, useScrollProgress } from '@/hooks/use-scroll-spy';

const SECTION_IDS = ['intro', 'profile', 'case-files', 'logbook', 'workbench', 'transmission'];

export default function SideNav() {
  const activeSection = useActiveSection(SECTION_IDS);
  const scrollProgress = useScrollProgress();

  const navItems = [
    { id: 'intro', label: 'I', name: 'Introduction' },
    { id: 'profile', label: 'II', name: 'Profile' },
    { id: 'case-files', label: 'III', name: 'Case Files' },
    { id: 'logbook', label: 'IV', name: 'Logbook' },
    { id: 'workbench', label: 'V', name: 'Toolbox' },
    { id: 'transmission', label: 'VI', name: 'Transmission' },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-16 md:w-24 z-50 flex flex-col py-8 border-r border-ink/10 bg-paper/80 backdrop-blur-sm" aria-label="Section navigation">
      <div className="px-4 hidden md:block">
        <span className="font-mono text-[10px] tracking-[0.3em] text-ink/40 block">FILE</span>
        <span className="font-mono text-[10px] tracking-[0.3em] text-copper block">PF_01</span>
      </div>

      <div className="flex-1 flex flex-col justify-center px-2 md:px-4 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-ink/10 -translate-x-1/2"></div>
        <div 
          className="absolute left-1/2 top-0 w-px bg-copper -translate-x-1/2 transition-all duration-500" 
          style={{ height: `${scrollProgress}%` }}
        ></div>

        <ul className="space-y-12 md:space-y-14">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative flex items-center">
                <span 
                  className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-px bg-ink/30 tick transition-all duration-300 ${isActive ? '!bg-copper !w-12' : 'w-6'}`} 
                ></span>
                <a 
                  href={`#${item.id}`} 
                  className={`side-nav-link block w-full text-center hover:opacity-100 ${isActive ? 'opacity-100 active' : 'opacity-50'}`} 
                  aria-label={item.name}
                >
                  <span className={`font-mono text-[10px] md:text-xs tracking-[0.2em] roman ${isActive ? '!text-copper' : 'text-ink/40'}`}>
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="px-4 hidden md:block">
        <span className="font-mono text-[10px] tracking-[0.3em] text-ink/40 block">VER</span>
        <span className="font-mono text-[10px] tracking-[0.3em] text-ink/60 block">1.0</span>
      </div>
    </nav>
  );
}
