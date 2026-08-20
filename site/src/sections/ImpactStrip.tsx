import type { ImpactFact, Program } from '../content';
import { SectionLabel } from '../components/SectionLabel';

export function ImpactStrip({ facts, programs }: { facts: ImpactFact[]; programs: Program[] }) {
  return (
    <section className="impact-strip" id="impact">
      <div className="container impact-grid">
        <div className="impact-lead"><SectionLabel tone="light">A record of showing up</SectionLabel><p>Small actions become a movement when people keep returning to the work.</p></div>
        {facts.map((fact) => <div className="impact-item" key={fact.value}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}
        <div className="impact-item impact-programs"><strong>{programs.length}</strong><span>paths of impact</span></div>
      </div>
    </section>
  );
}
