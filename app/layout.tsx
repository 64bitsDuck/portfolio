import type { Metadata } from 'next';
import { Space_Grotesk, Fraunces, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pierre Fiser // Systems & Interfaces',
  description: 'Portfolio of Pierre Fiser — Software Developer bridging low-level systems and intuitive interfaces.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

