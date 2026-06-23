import Reveal from '@/components/animations/Reveal';

export default function ProfileSection() {
  return (
    <section id="profile" className="min-h-screen relative px-6 md:px-16 py-24 md:py-32 border-t border-ink/10">
      <Reveal className="flex items-baseline gap-4 md:gap-6 mb-16 flex-wrap">
        <span className="font-mono text-xs tracking-[0.3em] text-copper">II</span>
        <div className="h-px flex-grow bg-ink/20 max-w-[100px]"></div>
        <h2 className="font-display font-medium text-2xl md:text-3xl tracking-tight">Profile</h2>
        <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40 ml-auto">PROFILE.DAT</span>
      </Reveal>

      <div className="grid grid-cols-12 gap-12">
        <Reveal className="col-span-12 lg:col-span-5 flex flex-col gap-8">
          <div className="relative w-full h-[300px] border border-ink/30 overflow-hidden bg-paper-bright">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://picsum.photos/seed/pierrefiser_portrait/600/400.jpg" 
              className="w-full h-full object-cover" 
              style={{ filter: "grayscale(100%) contrast(1.1) sepia(0.2)" }} 
              alt="Pierre Fiser"
            />
            <div className="absolute top-2 left-2 font-mono text-[9px] text-paper bg-ink/60 px-2 py-1">REF: PF_01</div>
            <div className="absolute bottom-2 right-2 font-mono text-[9px] text-paper bg-ink/60 px-2 py-1">SUBJECT</div>
            
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-copper"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-copper"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-copper"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-copper"></div>
          </div>

          <div className="border border-ink/15 p-8 space-y-8 bg-paper-bright/50">
            <div>
              <div className="font-mono text-[10px] tracking-[0.2em] text-ink/40 mb-2">ROLE</div>
              <div className="font-display text-2xl">Software Developer (Apprentice)</div>
              <div className="font-mono text-sm text-copper mt-1">@ Texplained</div>
            </div>
            <div className="pt-6 border-t border-dashed border-ink/20">
              <div className="font-mono text-[10px] tracking-[0.2em] text-ink/40 mb-2">EDUCATION</div>
              <div className="font-display text-2xl">BUT Informatique</div>
              <div className="font-mono text-sm text-ink/50 mt-1">Université Nice Côte d&apos;Azur (2nd Year)</div>
            </div>
            <div className="pt-6 border-t border-dashed border-ink/20">
              <div className="font-mono text-[10px] tracking-[0.2em] text-ink/40 mb-2">METHODOLOGY</div>
              <div className="font-display text-xl">Analyze → Architect → Implement → Document</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="col-span-12 lg:col-span-7">
          <p className="font-serif text-3xl md:text-4xl italic text-ink leading-tight mb-8">
            &quot;I don&apos;t just write code; I build the systems that run it and the interfaces that make it accessible.&quot;
          </p>
          <div className="space-y-4 text-ink-soft text-lg leading-relaxed max-w-2xl">
            <p>
              I am a software developer currently pursuing a Bachelor&apos;s in Computer Science (BUT Informatique). My work spans from building full-fledged operating systems from scratch to designing intuitive web platforms and AI assistants.
            </p>
            <p>
              Currently working as an apprentice at Texplained, where I develop internal tools and contribute to embedded systems security analysis. I thrive at the intersection of hardware and software, translating complex technical constraints into seamless user experiences.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
