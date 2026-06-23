import Reveal from '@/components/animations/Reveal';
import { ArrowRightIcon, SendIcon } from 'lucide-react';
import Image from 'next/image';

export default function CaseFilesSection() {
  return (
    <section id="case-files" className="relative px-6 md:px-16 py-24 md:py-32 border-t border-ink/10">
      <Reveal className="flex items-baseline gap-4 md:gap-6 mb-16 flex-wrap">
        <span className="font-mono text-xs tracking-[0.3em] text-copper">III</span>
        <div className="h-px flex-grow bg-ink/20 max-w-[100px]"></div>
        <h2 className="font-display font-medium text-2xl md:text-3xl tracking-tight">Case Files</h2>
        <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40 ml-auto">PROJECTS.LOG</span>
      </Reveal>

      <div className="space-y-40 md:space-y-56">

        {/* Case File 001: LucilleOS */}
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="bg-ink p-6 md:p-8 relative overflow-hidden h-[400px] flex flex-col">
              <div className="absolute top-4 left-4 font-mono text-[10px] text-paper/40">LUCILLE_KERNEL // BOOT_SEQ</div>
              <div className="absolute top-4 right-4 font-mono text-[10px] text-copper">ACTIVE</div>
              
              <div className="font-mono text-sm text-paper/80 mt-8 space-y-2 flex-grow">
                <div><span className="text-olive">[ OK ]</span> Initialized memory map</div>
                <div><span className="text-olive">[ OK ]</span> Loaded GDT and IDT</div>
                <div><span className="text-olive">[ OK ]</span> PIC reprogrammed</div>
                <div><span className="text-olive">[ OK ]</span> Timer frequency set</div>
                <div><span className="text-copper-light">[ SYS ]</span> VFS mounted</div>
                <div><span className="text-olive">[ OK ]</span> User space initialized</div>
                <div className="text-paper">root@lucille:~$ <span className="blink">_</span></div>
              </div>

              <div className="mt-auto border-t border-paper/10 pt-4">
                <div className="text-paper/40 text-[10px] font-mono mb-2">MEMORY_MAP</div>
                <div className="flex gap-1 h-4">
                  <div className="w-1/4 bg-copper" title="Kernel"></div>
                  <div className="w-1/2 bg-olive" title="User Space"></div>
                  <div className="w-1/4 bg-paper/20" title="Free"></div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="col-span-12 lg:col-span-5">
            <span className="font-mono text-xs tracking-[0.3em] text-copper">CASE_FILE // 001</span>
            <h3 className="font-serif italic text-4xl md:text-5xl mt-2 mb-6">LucilleOS</h3>
            <div className="space-y-4 text-ink-soft text-lg">
              <p>A custom operating system built from scratch. Implements a monolithic kernel, memory management, and a custom shell.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ink/10 pt-6">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-ink/40">ROLE</div>
                <div className="font-display mt-1">Sole Developer</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-ink/40">STACK</div>
                <div className="font-display mt-1">C, C++, Assembly</div>
              </div>
            </div>
            <a href="#" className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] border-b border-ink pb-1 hover:border-copper hover:text-copper transition-colors interactive">
              VIEW REPOSITORY
              <ArrowRightIcon className="w-3 h-3" />
            </a>
          </Reveal>
        </div>

        {/* Case File 002: BeReale */}
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <Reveal className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <span className="font-mono text-xs tracking-[0.3em] text-copper">CASE_FILE // 002</span>
            <h3 className="font-serif italic text-4xl md:text-5xl mt-2 mb-6">BeReale</h3>
            <div className="space-y-4 text-ink-soft text-lg">
              <p>A hybrid social media and e-commerce platform. Users can discover posts and local ads through an interactive map-based interface.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ink/10 pt-6">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-ink/40">ROLE</div>
                <div className="font-display mt-1">Full-Stack Dev</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-ink/40">STACK</div>
                <div className="font-display mt-1">Nuxt, Vue, MySQL</div>
              </div>
            </div>
            <a href="#" className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] border-b border-ink pb-1 hover:border-copper hover:text-copper transition-colors interactive">
              VIEW REPOSITORY
              <ArrowRightIcon className="w-3 h-3" />
            </a>
          </Reveal>

          <Reveal delay={0.2} className="col-span-12 lg:col-span-7 order-1 lg:order-2">
            <div className="bg-paper-bright border border-ink/20 p-6 relative h-[400px] overflow-hidden">
              <div className="absolute inset-0 blueprint-grid opacity-40"></div>
              
              <svg viewBox="0 0 600 400" className="absolute inset-0 w-full h-full">
                <path d="M 0 200 L 600 220" stroke="#1c1b18" strokeWidth="8" strokeOpacity="0.1" />
                <path d="M 200 0 L 220 400" stroke="#1c1b18" strokeWidth="8" strokeOpacity="0.1" />
                <path d="M 400 50 L 450 400" stroke="#1c1b18" strokeWidth="6" strokeOpacity="0.1" />
                
                <g transform="translate(150, 150)">
                  <circle cx="0" cy="0" r="24" fill="#b45a1f" opacity="0.2" className="pulse-dot"/>
                  <circle cx="0" cy="0" r="8" fill="#b45a1f"/>
                </g>
                <g transform="translate(380, 280)">
                  <circle cx="0" cy="0" r="16" fill="#6b6a3a" opacity="0.2" className="pulse-dot"/>
                  <circle cx="0" cy="0" r="6" fill="#6b6a3a"/>
                </g>
              </svg>

              <div className="absolute bottom-8 right-8 bg-paper border border-ink/20 p-4 w-56 shadow-xl">
                <div className="h-24 bg-ink/10 mb-3 relative overflow-hidden">
                  <Image 
                    src="https://picsum.photos/seed/bereale/200/100.jpg" 
                    width={200} 
                    height={100}
                    className="w-full h-full object-cover" 
                    alt="BeReale preview" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="h-2 bg-ink/20 w-3/4 mb-2"></div>
                <div className="h-2 bg-ink/10 w-1/2"></div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="font-mono text-[10px] text-copper">VIEW_ITEM</span>
                  <span className="font-mono text-[10px] text-ink/40">0.2km</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Case File 003: Helia */}
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="bg-paper-bright border border-ink/20 h-[400px] flex flex-col relative overflow-hidden">
              <div className="p-4 border-b border-ink/10 flex justify-between items-center bg-paper">
                <span className="font-mono text-xs text-ink/60">HELIA_AI // SESSION</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 border border-ink/30 rounded-full"></div>
                  <div className="w-3 h-3 border border-copper rounded-full bg-copper/30"></div>
                </div>
              </div>
              
              <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                <div className="max-w-[70%] bg-ink/5 p-3 text-sm">
                  <div className="font-mono text-[10px] text-ink/40 mb-1">HELIA</div>
                  Bonjour Pierre, je vois que vous essayez de remplir ce formulaire. Puis-je vous aider ?
                </div>
                <div className="max-w-[70%] bg-copper/10 p-3 text-sm ml-auto">
                  <div className="font-mono text-[10px] text-copper mb-1">USER</div>
                  Oui, s&apos;il vous plaît. Je n&apos;arrive pas à lire le champ 3.
                </div>
                <div className="max-w-[70%] bg-ink/5 p-3 text-sm">
                  <div className="font-mono text-[10px] text-ink/40 mb-1">HELIA</div>
                  <span className="text-olive">[Analyzing screen...]</span><br/>
                  Le champ 3 demande votre numéro de sécurité sociale. Voulez-vous que je le remplisse à partir de votre profil ?
                </div>
              </div>
              
              <div className="p-4 border-t border-ink/10 flex items-center gap-2 bg-paper">
                <div className="flex-grow bg-ink/5 h-10 flex items-center px-4 text-ink/40 text-sm font-mono">Type or speak...</div>
                <button className="w-10 h-10 bg-copper rounded-full flex items-center justify-center text-paper hover:bg-copper-light transition-colors interactive">
                  <SendIcon className="w-5 h-5 -ml-0.5 mt-0.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="col-span-12 lg:col-span-5">
            <span className="font-mono text-xs tracking-[0.3em] text-copper">CASE_FILE // 003</span>
            <h3 className="font-serif italic text-4xl md:text-5xl mt-2 mb-6">Helia</h3>
            <div className="space-y-4 text-ink-soft text-lg">
              <p>An AI assistant designed to make technology accessible to the elderly and disabled. Features voice interaction, screen scanning, and automated document filling.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ink/10 pt-6">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-ink/40">ROLE</div>
                <div className="font-display mt-1">Lead Developer</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-ink/40">STACK</div>
                <div className="font-display mt-1">Python, PyTorch, React</div>
              </div>
            </div>
            <a href="#" className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] border-b border-ink pb-1 hover:border-copper hover:text-copper transition-colors interactive">
              VIEW REPOSITORY
              <ArrowRightIcon className="w-3 h-3" />
            </a>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
