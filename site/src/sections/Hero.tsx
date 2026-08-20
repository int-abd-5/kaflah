import type { ProfileSummary, Program } from '../content';
import { heroMedia } from '../content';
import { MediaFrame } from '../components/MediaFrame';

export function Hero({ profile, programs }: { profile: ProfileSummary; programs: Program[] }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="display hero-title">One movement.<br /><em>Three paths.</em></h1>
          <p className="hero-intro">Kaflah is a young team building on a simple idea — that showing up for people, places, and possibilities can move a country forward.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore our work <span aria-hidden="true">↗</span></a>
            <a className="arrow-link" href="#join">Join the movement</a>
          </div>
          <div className="hero-programs" aria-label="Kaflah program themes">
            {programs.map((program) => <span key={program.id} style={{ color: program.color }}>{program.name}</span>)}
          </div>
        </div>
        <div className="hero-collage" aria-label="Kaflah community work">
          <MediaFrame src={heroMedia[0]} alt="Community members gathered around an Iftar Dastarkhuwan" className="hero-image hero-image-main" priority />
          <MediaFrame src={heroMedia[1]} alt="A young volunteer planting a sapling" className="hero-image hero-image-small" />
          <MediaFrame src={heroMedia[2]} alt="Young readers taking part in a library activity" className="hero-image hero-image-tall" />
          <div className="hero-stamp"><span>One movement</span><strong>Many ways<br />to show up.</strong></div>
        </div>
      </div>
      <div className="hero-bottom container"><span>Scroll to see the work</span><span className="hero-line" aria-hidden="true" /><span>01 / 04</span></div>
    </section>
  );
}
