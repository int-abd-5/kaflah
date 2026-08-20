import type { FieldNote, Program } from '../content';
import { MediaFrame } from '../components/MediaFrame';
import { SectionLabel } from '../components/SectionLabel';

export function FieldNotes({ notes, programs }: { notes: FieldNote[]; programs: Program[] }) {
  return (
    <section className="notes-section" id="stories"><div className="container"><div className="section-heading notes-heading"><div><SectionLabel>From the ground</SectionLabel><h2 className="display">Field notes<br /><em>worth keeping.</em></h2></div><p>A living record of the moments behind the announcements.</p></div><div className="notes-list">{notes.map((note, index) => { const program = programs.find((item) => item.id === note.programId)!; return <article className="note-row" key={note.slug}><span className="note-index">0{index + 1}</span><div className="note-date"><strong>{note.dateLabel}</strong><span>{note.locationLabel ?? 'On the ground'}</span></div><div className="note-thumb"><MediaFrame src={note.media[0]} alt={note.title} /></div><div className="note-copy"><span style={{ color: program.color }}>{program.name}</span><h3>{note.title}</h3><p>{note.summary}</p></div><span className="note-arrow" aria-hidden="true">↗</span></article> })}</div></div></section>
  );
}
