import type { CSSProperties } from 'react';
import type { Project, Program } from '../content';
import { MediaFrame } from './MediaFrame';

export function ProjectFeature({ project, program, featured = false }: { project: Project; program: Program; featured?: boolean }) {
  return (
    <article className={`project-feature ${featured ? 'is-featured' : ''}`} style={{ '--program-color': program.color } as CSSProperties}>
      <MediaFrame src={project.media[0]} alt={project.title} className="project-media" />
      <div className="project-copy"><div className="project-meta"><span style={{ color: program.color }}>{program.name}</span><span>{project.dateLabel}</span></div><h3>{project.title}</h3>{project.locationLabel && <p className="project-location">{project.locationLabel}</p>}<p className="project-summary">{project.summary}</p>{project.verifiedFacts?.map((fact) => <strong className="project-fact" key={fact}>{fact}</strong>)}<a className="arrow-link" href="#stories">Read the field note</a></div>
    </article>
  );
}
