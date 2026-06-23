'use client';

import { useAppContext } from './AppContext';

export function MobileTopBar() {
  const { setIsIndexOpen } = useAppContext();

  return (
    <div className="md:hidden fixed top-0 left-16 right-0 h-16 z-40 bg-paper/80 backdrop-blur-sm border-b border-ink/10 flex items-center justify-between px-6">
      <span className="font-mono text-xs tracking-widest text-ink/60">P. FISER</span>
      <button 
        onClick={() => setIsIndexOpen(true)}
        className="p-2 text-ink interactive" 
        aria-label="Open index"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round"/></svg>
      </button>
    </div>
  );
}

export function DesktopIndexButton() {
  const { setIsIndexOpen } = useAppContext();

  return (
    <button 
      onClick={() => setIsIndexOpen(true)}
      className="hidden md:flex fixed bottom-8 right-8 z-40 group items-center gap-3 bg-ink text-paper px-5 py-3 hover:bg-copper transition-colors duration-300 interactive" 
      aria-label="Open Index"
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4m0 12v4M2 12h4m12 0h4M12 8a4 4 0 100 8 4 4 0 000-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <span className="font-mono text-xs tracking-[0.3em]">INDEX</span>
    </button>
  );
}
