import Reveal from '@/components/animations/Reveal';

interface LogEntry {
  year: string;
  type: string;
  title: string;
  org: string;
  desc: string;
}

const logEntries: LogEntry[] = [
  { 
    year: '2025 - 2026', 
    type: 'EXPERIENCE', 
    title: 'Software Developer (Apprentice)', 
    org: 'Texplained', 
    desc: 'Developing internal tools and contributing to embedded systems security analysis projects.' 
  },
  { 
    year: '2024 - 2026', 
    type: 'EDUCATION', 
    title: 'B.Tech Computer Science (BUT Informatique)', 
    org: 'Université Nice Côte d’Azur', 
    desc: '2nd year in progress. Specializing in software architecture and systems.' 
  },
  { 
    year: '2025', 
    type: 'EXPERIENCE', 
    title: 'Web Designer', 
    org: 'Water Guette', 
    desc: 'Created mockups and established the graphic charter for the independent media site.' 
  },
  { 
    year: '2023 - 2025', 
    type: 'EXPERIENCE', 
    title: 'Creative Collaborator', 
    org: 'CLAS du Thoronet', 
    desc: 'Wrote and edited short films, and produced 2D animations.' 
  },
  { 
    year: '2023 - 2024', 
    type: 'EDUCATION', 
    title: 'L1 Info-Math-Phys & CPGE MPSI', 
    org: 'Faculté Aix-Montperrin / Lycée Dumont Durville', 
    desc: 'Intensive foundation in mathematics, physics, and computer science.' 
  },
  { 
    year: '2020 - 2023', 
    type: 'EDUCATION', 
    title: 'French Baccalaureate (NSI & Maths)', 
    org: 'Lycée Thomas Edison', 
    desc: 'Specialties in Computer Science and Mathematics. Graduated with Honors.' 
  },
  { 
    year: '2019', 
    type: 'EXPERIENCE', 
    title: 'Observation Internship', 
    org: 'CNRS Nice', 
    desc: 'Initial exposure to professional scientific research environments.' 
  }
];

export default function LogbookSection() {
  return (
    <section id="logbook" className="relative px-6 md:px-16 py-24 md:py-32 border-t border-ink/10">
      <Reveal className="flex items-baseline gap-4 md:gap-6 mb-16 flex-wrap">
        <span className="font-mono text-xs tracking-[0.3em] text-copper">IV</span>
        <div className="h-px flex-grow bg-ink/20 max-w-[100px]"></div>
        <h2 className="font-display font-medium text-2xl md:text-3xl tracking-tight">Logbook</h2>
        <span className="font-mono text-[10px] tracking-[0.2em] text-ink/40 ml-auto">TIMELINE.LOG</span>
      </Reveal>

      <Reveal className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-ink/15 -translate-x-1/2 md:translate-x-0"></div>
        
        <div className="space-y-16">
          {logEntries.map((entry, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div 
                key={i} 
                className={`timeline-item relative pl-12 md:pl-0 ${isLeft ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2'}`}
              >
                <div className={`absolute top-0 ${isLeft ? 'right-0 md:pr-12 hidden md:block' : 'left-0 md:pl-12'}`}>
                  <span className="font-mono text-xs text-copper">{entry.year}</span>
                </div>
                
                <div className="md:hidden mb-2">
                  <span className="font-mono text-xs text-copper">{entry.year}</span>
                </div>
                
                <div className="bg-paper-bright/50 border border-ink/10 p-6 inline-block w-full">
                  <div className="font-mono text-[10px] tracking-[0.2em] text-ink/40 mb-2">{entry.type}</div>
                  <h3 className="font-display text-xl mb-1">{entry.title}</h3>
                  <div className="font-mono text-sm text-copper mb-3">{entry.org}</div>
                  <p className="text-ink-soft text-sm">{entry.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
