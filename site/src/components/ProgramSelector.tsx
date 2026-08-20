import type { CSSProperties } from 'react';
import type { Program, ProgramId } from '../content';

export function ProgramSelector({ programs, activeId, onChange }: { programs: Program[]; activeId: ProgramId; onChange: (id: ProgramId) => void }) {
  return (
    <div className="program-selector" role="tablist" aria-label="Kaflah programs">
      {programs.map((program, index) => (
        <button
          className={`program-tab ${activeId === program.id ? 'is-active' : ''}`}
          style={{ '--program-color': program.color } as CSSProperties}
          key={program.id}
          type="button"
          role="tab"
          aria-selected={activeId === program.id}
          onClick={() => onChange(program.id)}
        >
          <span className="program-number">0{index + 1}</span>
          <span className="program-tab-name">{program.name}</span>
          <span className="program-tab-label">{program.shortLabel}</span>
          <span className="program-tab-arrow" aria-hidden="true">↗</span>
        </button>
      ))}
    </div>
  );
}
