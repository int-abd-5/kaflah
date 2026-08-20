import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(here, '..');
const repoRoot = path.resolve(siteRoot, '..');
const rawPostsPath = path.join(repoRoot, 'profile_data', 'posts.json');
const profilePath = path.join(repoRoot, 'profile_data', 'profile_summary.json');
const mediaRoot = path.join(repoRoot, 'profile_media');
const publicMediaRoot = path.join(siteRoot, 'public', 'media');
const generatedPath = path.join(siteRoot, 'src', 'content', 'generated.ts');

const posts = JSON.parse(fs.readFileSync(rawPostsPath, 'utf8'));
const profileRaw = JSON.parse(fs.readFileSync(profilePath, 'utf8'));
const byShortcode = new Map(posts.map((post) => [post.shortcode, post]));
const source = (shortcode) => {
  const post = byShortcode.get(shortcode);
  if (!post) throw new Error(`Missing expected shortcode: ${shortcode}`);
  return {
    sourcePlatform: 'instagram',
    sourcePostId: shortcode,
    sourceUrl: post.permalink,
    sourcePublishedAt: post.timestamp_utc,
  };
};

const copied = new Set();
const media = (prefix, limit = 6) => {
  const candidates = fs.readdirSync(mediaRoot)
    .filter((name) => name.startsWith(prefix))
    .filter((name) => /\.(jpg|jpeg|png|webp|mp4)$/i.test(name))
    .sort()
    .slice(0, limit);
  if (!candidates.length) throw new Error(`No media found for prefix: ${prefix}`);
  return candidates.map((name) => {
    const destination = path.join(publicMediaRoot, name);
    if (!copied.has(name)) {
      fs.copyFileSync(path.join(mediaRoot, name), destination);
      copied.add(name);
    }
    return `/media/${name}`;
  });
};

fs.mkdirSync(publicMediaRoot, { recursive: true });
const programs = [
  {
    id: 'sabzkal',
    name: 'SABZKAL',
    shortLabel: 'Environment',
    color: '#3f6b39',
    summary: 'Plantation drives that turn youth energy toward greener school and university spaces.',
    action: 'Explore SabzKal',
  },
  {
    id: 'qalam',
    name: 'QALAM',
    shortLabel: 'Education',
    color: '#214c9a',
    summary: 'Learning through supplies, libraries, creative activities, and practical school experiences.',
    action: 'Explore Qalam',
  },
  {
    id: 'khidmat-e-khalaq',
    name: 'KHIDMAT-E-KHALAQ',
    shortLabel: 'Community care',
    color: '#8a3d4c',
    summary: 'Hands-on community care through health, Ramadan service, and fundraising activity.',
    action: 'Explore Khidmat-e-Khalaq',
  },
];

const projects = [
  {
    slug: 'east-stars-stationery-drive',
    title: 'East Stars Stationery Drive',
    programId: 'qalam',
    dateLabel: '7 Mar 2024',
    locationLabel: 'East Stars School',
    summary: 'Stationery kits were shared with students alongside a simple reminder of why education matters.',
    media: media('2024-03-25_08-05-04_UTC'),
    sourcePosts: [source('C47gxOst2vX')],
  },
  {
    slug: 'lahore-public-school-plantation-drive',
    title: 'Lahore Public School Plantation Drive',
    programId: 'sabzkal',
    dateLabel: '13 Aug 2025',
    locationLabel: 'Lahore Public School',
    summary: 'Team Kaflah brought volunteers together to plant for a greener Pakistan.',
    media: media('2025-08-14_13-02-45_UTC'),
    sourcePosts: [source('DNVh3CesWJB'), source('DNViPFqM55t')],
  },
  {
    slug: 'kafalat-ghar-dental-camp',
    title: 'Kafalat Ghar Dental Camp',
    programId: 'khidmat-e-khalaq',
    dateLabel: '18 Oct 2025',
    locationLabel: 'Kafalat Ghar Orphanage',
    summary: 'Children received dental check-ups, oral hygiene guidance, and dental kits through a volunteer-led camp.',
    media: media('2025-10-26_12-09-08_UTC'),
    sourcePosts: [source('DQRZwOiEpbc')],
  },
  {
    slug: 'gcu-plantation-drive',
    title: 'GCU Plantation Drive',
    programId: 'sabzkal',
    dateLabel: '18 Nov 2025',
    locationLabel: 'GCU',
    summary: 'The Women Development Center, Kaflah, and Alkhidmat joined forces for a cleaner, greener Pakistan.',
    media: media('2025-11-18_20-00-24_UTC'),
    sourcePosts: [source('DRNd5d0DHwL'), source('DRRwVmXDKKS')],
  },
  {
    slug: 'kafalat-ghar-stationery-drive',
    title: 'Kafalat Ghar Stationery Drive',
    programId: 'qalam',
    dateLabel: '8 Jan 2026',
    locationLabel: 'Kafalat Ghar Orphanage',
    summary: 'Everyday stationery, colours, and colouring books gave children more room to imagine and create.',
    media: media('2026-01-12_10-19-29_UTC'),
    sourcePosts: [source('DTaDNewDMSy'), source('DTaxPOojFSg')],
  },
  {
    slug: 'alif-laila-library-reading-day',
    title: 'Alif Laila Library Reading Day',
    programId: 'qalam',
    dateLabel: '28 Jan 2026',
    locationLabel: 'Alif Laila Library',
    summary: 'Project Zavia and Kaflah used reading, drawing, and donated books to make learning feel alive.',
    media: media('2026-01-31_11-56-11_UTC'),
    sourcePosts: [source('DULJRR-CLrj'), source('DUOToorDBum')],
  },
  {
    slug: 'iftar-dastarkhuwan',
    title: 'Iftar Dastarkhuwan',
    programId: 'khidmat-e-khalaq',
    dateLabel: '3 Mar 2026',
    locationLabel: 'Johan Town',
    summary: 'A Ramadan service initiative brought people together around a shared meal and a practical act of care.',
    verifiedFacts: ['2,000+ people served'],
    media: media('2026-03-04_16-48-57_UTC'),
    sourcePosts: [source('DVeELm-DCw2'), source('DVgxyuaDG8c')],
  },
  {
    slug: 'summer-internship',
    title: 'Summer Internship',
    programId: 'qalam',
    dateLabel: '29 Jun – 2 Jul 2026',
    locationLabel: 'Government Girls Primary School Gulberg',
    summary: 'Young interns built an energetic learning environment through academic sessions, games, self-defence, and sports.',
    media: media('2026-06-29_11-24-54_UTC', 2),
    sourcePosts: [source('DZ0LJy5sBuq'), source('DaKwAJPwdEJ'), source('DaPqP3HIBVP'), source('DaSvFUKsJKr'), source('DaVg9ZBsARX'), source('DaYXSzDsxTI'), source('DakzaN-MyKb')],
  },
  {
    slug: 'project-zavia-fundraiser',
    title: 'Project Zavia Fundraiser',
    programId: 'khidmat-e-khalaq',
    dateLabel: '30 Jul 2026',
    locationLabel: 'Pink Pistachio Cafe, Gulberg',
    summary: 'Project Zavia and Kaflah turned an evening of games and community into support for social causes.',
    media: media('2026-08-02_12-45-58_UTC'),
    sourcePosts: [source('DbSwZC7I10L'), source('DbfrFigosvk'), source('DbicjDXjMQ_')],
  },
];

const projectBySlug = new Map(projects.map((project) => [project.slug, project]));
const fieldNotes = [
  ['east-stars-stationery-drive', '7 Mar 2024'],
  ['lahore-public-school-plantation-drive', '13 Aug 2025'],
  ['kafalat-ghar-dental-camp', '18 Oct 2025'],
  ['gcu-plantation-drive', '18 Nov 2025'],
  ['kafalat-ghar-stationery-drive', '8 Jan 2026'],
  ['alif-laila-library-reading-day', '28 Jan 2026'],
  ['iftar-dastarkhuwan', '3 Mar 2026'],
  ['summer-internship', '29 Jun – 2 Jul 2026'],
  ['project-zavia-fundraiser', '30 Jul 2026'],
].map(([slug, dateLabel]) => {
  const project = projectBySlug.get(slug);
  return {
    slug: project.slug,
    title: project.title,
    dateLabel,
    locationLabel: project.locationLabel,
    programId: project.programId,
    summary: project.summary,
    media: project.media.slice(0, 1),
    sourcePosts: project.sourcePosts,
  };
});

const content = `/* Generated by scripts/build-content.mjs. Do not edit by hand. */\nimport type { FieldNote, ImpactFact, ProfileSummary, Program, Project } from './types';\n\nexport const profile: ProfileSummary = ${JSON.stringify({
  username: profileRaw.username,
  fullName: profileRaw.full_name,
  biography: profileRaw.biography,
  externalUrl: profileRaw.external_url,
  followers: profileRaw.followers,
}, null, 2)};\n\nexport const programs: Program[] = ${JSON.stringify(programs, null, 2)};\nexport const projects: Project[] = ${JSON.stringify(projects, null, 2)};\nexport const fieldNotes: FieldNote[] = ${JSON.stringify(fieldNotes, null, 2)};\nexport const impactFacts: ImpactFact[] = [${JSON.stringify({
  value: '2,000+',
  label: 'people served at the Iftar Dastarkhuwan',
  source: source('DVeELm-DCw2'),
}, null, 2)}];\nexport const heroMedia = [\n  '/media/2026-03-04_16-48-57_UTC.jpg',\n  '/media/2025-08-14_13-02-45_UTC_1.webp',\n  '/media/2026-01-31_11-56-11_UTC.jpg'\n];\n`;

fs.writeFileSync(generatedPath, content);
console.log(`Generated ${projects.length} projects, ${fieldNotes.length} field notes, and copied ${copied.size} media assets.`);
