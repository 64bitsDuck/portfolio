'use client';

import { useEffect, useState } from 'react';
import { useAppContext } from './AppContext';

const INDEX_ITEMS = [
  { href: '#intro', label: 'I. Introduction', desc: 'Overview' },
  { href: '#profile', label: 'II. Profile', desc: 'About' },
  { href: '#case-files', label: 'III. Case Files', desc: 'Projects' },
  { href: '#logbook', label: 'IV. Logbook', desc: 'Timeline' },
  { href: '#workbench', label: 'V. Toolbox', desc: 'Tech Stack' },
  { href: '#transmission', label: 'VI. Transmission', desc: 'Contact' },
];

export default function IndexOverlay() {
  const { isIndexOpen, setIsIndexOpen } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isIndexOpen) {
        setIsIndexOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsIndexOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isIndexOpen, setIsIndexOpen]);

  useEffect(() => {
    if (isIndexOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
      setTimeout(() => setSearchQuery(''), 200); // clear after animation
    }
  }, [isIndexOpen]);

  if (!isIndexOpen) return null;

  const filteredItems = INDEX_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-[100] index-overlay flex items-start justify-center pt-24 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsIndexOpen(false);
      }}
    >
      <div className="w-full max-w-2xl bg-paper border border-copper shadow-2xl">
        <div className="flex items-center justify-between border-b border-ink/20 px-6 py-4">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-copper" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4m0 12v4M2 12h4m12 0h4M12 8a4 4 0 100 8 4 4 0 000-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="font-mono text-xs tracking-[0.3em] text-copper">DOSSIER_INDEX</span>
          </div>
          <button 
            onClick={() => setIsIndexOpen(false)}
            className="font-mono text-xs text-ink/50 hover:text-copper transition-colors interactive" 
            aria-label="Close"
          >
            [ESC]
          </button>
        </div>
        <div className="px-6 py-4 border-b border-ink/10">
          <input 
            type="text" 
            autoFocus
            placeholder="Search index..." 
            className="w-full bg-transparent font-display text-2xl outline-none placeholder-ink/30 interactive focus-visible:outline-none focus:outline-none focus-visible:[outline:none]" 
            aria-label="Search index"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <ul className="max-h-80 overflow-y-auto">
          {filteredItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                onClick={() => setIsIndexOpen(false)}
                className="flex items-center justify-between px-6 py-3 hover:bg-copper/10 group transition-colors interactive"
              >
                <span className="font-display text-lg group-hover:text-copper transition-colors">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-ink/40">
                  {item.desc}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
