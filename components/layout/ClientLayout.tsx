'use client';

import { ReactNode, useState, useEffect } from 'react';
import SideNav from '@/components/layout/SideNav';
import { MobileTopBar, DesktopIndexButton } from '@/components/layout/TopBar';
import IndexOverlay from '@/components/layout/IndexOverlay';
import { AppContext } from '@/components/layout/AppContext';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [isIndexOpen, setIsIndexOpen] = useState(false);

  useEffect(() => {
    console.log('%cDOSSIER PF_01 // SYSTEM ONLINE', 'color: #b45a1f; font-family: monospace; font-size: 14px; letter-spacing: 0.3em;');
  }, []);

  return (
    <AppContext.Provider value={{ isIndexOpen, setIsIndexOpen }}>
      {/* Side Navigation */}
      <SideNav />

      {/* Mobile Top Bar */}
      <MobileTopBar />

      {/* Index Button (Desktop) */}
      <DesktopIndexButton />

      {/* Index Overlay */}
      <IndexOverlay />

      {/* Main Content */}
      <main className="relative ml-0 md:ml-24">
        {children}
      </main>
    </AppContext.Provider>
  );
}
