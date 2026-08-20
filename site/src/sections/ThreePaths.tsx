import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import type { Program, ProgramId, Project } from '../content';
import { ImpactPaths } from '../components/ImpactPaths';
import { MediaFrame } from '../components/MediaFrame';
import { ProgramSelector } from '../components/ProgramSelector';
import { SectionLabel } from '../components/SectionLabel';

export function ThreePaths({ programs, projects }: { programs: Program[]; projects: Project[] }) {
  const [activeId, setActiveId] = useState<ProgramId>('qalam');
  const activeProgram = programs.find((program) => program.id === activeId) ?? programs[0];
  const activeProject = useMemo(() => projects.find((project) => project.programId === activeId) ?? projects[0], [activeId, projects]);

  return (
    <section className="paths-section" id="about">
      <div className="container">
        <div className="section-heading paths-heading"><div><SectionLabel>One movement, three paths</SectionLabel><h2 className="display">Different work.<br /><em>One reason.</em></h2></div><p>Switch between the paths to see how Kaflah turns young energy into practical work.</p></div>
        <ProgramSelector programs={programs} activeId={activeId} onChange={setActiveId} />
        <div className="paths-board">
          <div className="paths-explainer"><span className="paths-origin">Kaflah</span><ImpactPaths activeId={activeId} /><div className="paths-labels"><span className="label-sabzkal">SabzKal</span><span className="label-qalam">Qalam</span><span className="label-khidmat">Khidmat-e-Khalaq</span></div></div>
          <div className="path-detail" style={{ '--program-color': activeProgram.color } as CSSProperties}>
            <AnimatePresence mode="wait">
              <motion.div key={activeId} className="path-detail-inner" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .28 }}>
                <div className="path-detail-media"><MediaFrame src={activeProject.media[0]} alt={activeProject.title} /></div>
                <div className="path-detail-copy"><div className="path-detail-meta"><span style={{ color: activeProgram.color }}>{activeProgram.name}</span><span>{activeProject.dateLabel}</span></div><h3 className="display">{activeProject.title}</h3><p>{activeProgram.summary}</p><a className="arrow-link" href="#work">See the work</a></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
