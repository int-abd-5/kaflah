import type { ReactNode } from 'react';

export function SectionLabel({ children, tone = 'ink' }: { children: ReactNode; tone?: 'ink' | 'light' }) {
  return <p className={`section-label section-label-${tone}`}>{children}</p>;
}
