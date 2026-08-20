import { useState } from 'react';

const links = [
  ['About', '#about'],
  ['Our work', '#work'],
  ['Impact', '#impact'],
  ['Stories', '#stories'],
  ['Events', '#stories'],
  ['Join us', '#join'],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#top" aria-label="Kaflah Organisation home">
          <span className="wordmark-mark" aria-hidden="true">⌁</span>
          <span><strong>Kaflah</strong><small>Organisation</small></span>
        </a>

        <nav id="primary-navigation" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#join">Get involved <span aria-hidden="true">↗</span></a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>
          <span className="sr-only">Toggle menu</span>
          <span aria-hidden="true">{open ? 'Close' : 'Menu'}</span>
        </button>
      </div>
    </header>
  );
}
