import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { profile, programs, projects, fieldNotes, impactFacts } from './content';
import { FeaturedWork } from './sections/FeaturedWork';
import { FieldNotes } from './sections/FieldNotes';
import { Hero } from './sections/Hero';
import { ImpactStrip } from './sections/ImpactStrip';
import { JoinMovement } from './sections/JoinMovement';
import { ThreePaths } from './sections/ThreePaths';

export default function App() {
  return (
    <div className="site-shell" id="top">
      <SiteHeader />
      <main id="main-content">
        <Hero profile={profile} programs={programs} />
        <ImpactStrip facts={impactFacts} programs={programs} />
        <ThreePaths programs={programs} projects={projects} />
        <FeaturedWork projects={projects} programs={programs} />
        <FieldNotes notes={fieldNotes} programs={programs} />
        <JoinMovement profile={profile} />
      </main>
      <SiteFooter profile={profile} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Kaflah Organisation',
        url: profile.externalUrl,
        description: 'A youth-led Pakistani organisation working through education, environment, and community care.',
        sameAs: [profile.externalUrl],
      }) }} />
    </div>
  );
}
