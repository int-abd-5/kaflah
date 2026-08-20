import type { ProfileSummary } from '../content';

export function SiteFooter({ profile }: { profile: ProfileSummary }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="wordmark wordmark-footer" href="#top"><span className="wordmark-mark" aria-hidden="true">⌁</span><span><strong>Kaflah</strong><small>Organisation</small></span></a>
          <p className="footer-note">Young people putting education, environment, and community care into motion.</p>
        </div>
        <div className="footer-links">
          <span className="eyebrow">Stay close</span>
          <a href={profile.externalUrl} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
          <a href="#join">Join the movement <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-meta">
          <span>Public field notes</span>
          <span>@{profile.username}</span>
        </div>
      </div>
    </footer>
  );
}
