export type ProgramId = 'sabzkal' | 'qalam' | 'khidmat-e-khalaq';

export type SourceRef = {
  sourcePlatform: 'instagram';
  sourcePostId: string;
  sourceUrl: string;
  sourcePublishedAt: string;
};

export type Program = {
  id: ProgramId;
  name: string;
  shortLabel: string;
  color: string;
  summary: string;
  action: string;
};

export type Project = {
  slug: string;
  title: string;
  programId: ProgramId;
  dateLabel: string;
  locationLabel?: string;
  summary: string;
  verifiedFacts?: string[];
  media: string[];
  sourcePosts: SourceRef[];
};

export type FieldNote = {
  slug: string;
  title: string;
  dateLabel: string;
  locationLabel?: string;
  programId: ProgramId;
  summary: string;
  media: string[];
  sourcePosts: SourceRef[];
};

export type ImpactFact = {
  value: string;
  label: string;
  source: SourceRef;
};

export type ProfileSummary = {
  username: string;
  fullName: string;
  biography: string;
  externalUrl: string;
  followers: number;
};
