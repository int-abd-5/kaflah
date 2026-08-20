import type { Program, Project } from '../content';
import { ProjectFeature } from '../components/ProjectFeature';
import { SectionLabel } from '../components/SectionLabel';

export function FeaturedWork({ projects, programs }: { projects: Project[]; programs: Program[] }) {
  const featured = projects.find((project) => project.slug === 'summer-internship') ?? projects[0];
  const supporting = projects.filter((project) => ['lahore-public-school-plantation-drive', 'kafalat-ghar-dental-camp', 'alif-laila-library-reading-day'].includes(project.slug));
  const program = (id: Project['programId']) => programs.find((item) => item.id === id)!;

  return (
    <section className="work-section" id="work">
      <div className="container"><div className="section-heading work-heading"><div><SectionLabel>On the ground</SectionLabel><h2 className="display">Work that<br /><em>looks like care.</em></h2></div><p>The strongest stories are the ones that stay specific: a school, a library, a sapling, a shared meal.</p></div>
        <ProjectFeature project={featured} program={program(featured.programId)} featured />
        <div className="supporting-projects">{supporting.map((project) => <ProjectFeature key={project.slug} project={project} program={program(project.programId)} />)}</div>
        <a className="work-more arrow-link" href="#stories">Browse field notes</a>
      </div>
    </section>
  );
}
