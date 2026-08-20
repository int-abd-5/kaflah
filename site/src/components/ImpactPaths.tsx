import type { ProgramId } from '../content';

export function ImpactPaths({ activeId }: { activeId: ProgramId }) {
  return (
    <svg className="impact-paths" viewBox="0 0 740 280" role="img" aria-label="Three connected paths representing Kaflah's programs">
      <path className={`path path-sabzkal ${activeId === 'sabzkal' ? 'is-active' : ''}`} d="M20 140 C140 140 138 48 276 48 S470 48 704 48" />
      <path className={`path path-qalam ${activeId === 'qalam' ? 'is-active' : ''}`} d="M20 140 C180 140 220 140 320 140 S530 140 704 140" />
      <path className={`path path-khidmat ${activeId === 'khidmat-e-khalaq' ? 'is-active' : ''}`} d="M20 140 C140 140 138 232 276 232 S470 232 704 232" />
      <circle className="path-origin" cx="20" cy="140" r="6" />
      <circle className="path-dot path-dot-sabzkal" cx="704" cy="48" r="5" />
      <circle className="path-dot path-dot-qalam" cx="704" cy="140" r="5" />
      <circle className="path-dot path-dot-khidmat" cx="704" cy="232" r="5" />
    </svg>
  );
}
