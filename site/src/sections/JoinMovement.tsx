import type { ProfileSummary } from '../content';
import { SectionLabel } from '../components/SectionLabel';

export function JoinMovement({ profile }: { profile: ProfileSummary }) {
  return (
    <section className="join-section" id="join"><div className="container join-panel"><div><SectionLabel>There is room for you here</SectionLabel><h2 className="display">Show up for<br /><em>the next one.</em></h2></div><div className="join-copy"><p>Volunteer, support a project, or bring Kaflah into a school, university, or community space. Start with the public field notes and find the path that feels like yours.</p><div className="join-actions"><a className="button button-dark" href={profile.externalUrl} target="_blank" rel="noreferrer">Join through Instagram <span aria-hidden="true">↗</span></a><a className="button button-outline" href="#work">See the work</a></div></div></div></section>
  );
}
