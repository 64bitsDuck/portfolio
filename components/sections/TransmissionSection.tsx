import Reveal from '@/components/animations/Reveal';
import { ArrowRightIcon, DownloadIcon } from 'lucide-react';

export default function TransmissionSection() {
  return (
    <section id="transmission" className="min-h-screen relative px-6 md:px-16 py-24 md:py-32 border-t border-ink/10 flex flex-col justify-center">
      <Reveal className="flex items-baseline gap-4 md:gap-6 mb-16 flex-wrap">
        <span className="font-mono text-xs tracking-[0.3em] text-copper">VI</span>
        <div className="h-px flex-grow bg-ink/20 max-w-[100px]"></div>
        <h2 className="font-display font-medium text-2xl md:text-3xl tracking-tight">Transmission</h2>
        <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40 ml-auto">CONTACT.UPLINK</span>
      </Reveal>

      <div className="grid grid-cols-12 gap-8 md:gap-12">
        <Reveal className="col-span-12 lg:col-span-7">
          <h2 className="font-display font-medium leading-[0.9] tracking-tighter">
            <span className="block text-[14vw] md:text-[8vw]">Establish</span>
            <span className="block text-[14vw] md:text-[8vw] font-serif italic font-light text-copper">Uplink</span>
          </h2>

          <div className="mt-12 space-y-6 max-w-2xl">
            <a href="mailto:pierre.fiser@example.com" className="flex items-center justify-between border-b border-ink/20 pb-4 group interactive">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-ink/40 mb-1">EMAIL</div>
                <span className="font-display text-xl md:text-2xl group-hover:text-copper transition-colors">pierre.fiser@example.com</span>
              </div>
              <ArrowRightIcon className="w-5 h-5 text-ink/40 group-hover:text-copper transition-colors" strokeWidth={1.5} />
            </a>
            <a href="#" className="flex items-center justify-between border-b border-ink/20 pb-4 group interactive">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-ink/40 mb-1">GITHUB</div>
                <span className="font-display text-xl md:text-2xl group-hover:text-copper transition-colors">@pierrefiser</span>
              </div>
              <ArrowRightIcon className="w-5 h-5 text-ink/40 group-hover:text-copper transition-colors" strokeWidth={1.5} />
            </a>
            <a href="#" download className="flex items-center justify-between border-b border-ink/20 pb-4 group interactive">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-ink/40 mb-1">DOSSIER</div>
                <span className="font-display text-xl md:text-2xl group-hover:text-copper transition-colors">Download Resume (PDF)</span>
              </div>
              <DownloadIcon className="w-5 h-5 text-ink/40 group-hover:text-copper transition-colors" strokeWidth={1.5} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="col-span-12 lg:col-span-5 mt-12 lg:mt-0">
          <div className="border border-ink/20 p-8 space-y-6 bg-paper-bright/50">
            <div>
              <div className="font-mono text-[10px] tracking-[0.2em] text-ink/40 mb-2">AVAILABILITY</div>
              <p className="font-serif italic text-xl text-ink-soft">
                Currently open to internship opportunities and collaborative projects for Summer 2026.
              </p>
            </div>
            <div className="pt-6 border-t border-dashed border-ink/20">
              <div className="font-mono text-[10px] tracking-[0.2em] text-ink/40 mb-2">RESPONSE_TIME</div>
              <p className="font-display text-lg">Usually within 24 hours.</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-24 md:mt-32 pt-6 border-t border-ink/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40">END_OF_DOSSIER // FILE_PF_01 // VER_1.0</span>
        <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40">COMPILED_BY P. FISER</span>
      </div>
    </section>
  );
}
