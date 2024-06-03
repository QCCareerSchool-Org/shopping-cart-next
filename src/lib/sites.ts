import type { School } from '@/domain/school';

type Site = { name: School; domains: Array<string | RegExp>; path: string };

const sites: Site[] = [
  { name: 'QC Design School', domains: [ 'enroll.qcdesignschool.com', 'design.enrolltest.qccareerschool.com', 'design.nextenroll.qccareerschool.com', /^design.localhost(?::\d+)$/iu ], path: '/design' },
  { name: 'QC Event School', domains: [ 'enroll.qceventplanning.com', 'event.enrolltest.qccareerschool.com', 'event.nextenroll.qccareerschool.com', /^event.localhost(?::\d+)$/iu ], path: '/event' },
  { name: 'QC Makeup Academy', domains: [ 'enroll.qcmakeupacademy.com', 'makeup.enrolltest.qccareerschool.com', 'makeup.nextenroll.qccareerschool.com', /^makeup.localhost(?::\d+)$/iu ], path: '/makeup' },
  { name: 'QC Pet Studies', domains: [ 'enroll.qcpetstudies.com', 'pet.enrolltest.qccareerschool.com', 'pet.nextenroll.qccareerschool.com', /^pet.localhost(?::\d+)$/iu ], path: '/pet' },
  { name: 'QC Wellness Studies', domains: [ 'enroll.qcwellnessstudies.com', 'wellness.enrolltest.qccareerschool.com', 'wellness.nextenroll.qccareerschool.com', /^wellness.localhost(?::\d+)$/iu ], path: '/wellness' },
  { name: 'Winghill Writing School', domains: [ 'enroll.winghill.com', 'writing.enrolltest.qccareerschool.com', 'writing.nextenroll.qccareerschool.com', /^writing.localhost(?::\d+)$/iu ], path: '/writing' },
];

export const findSite = (hostname: string | null): Site | undefined => {
  if (!hostname) {
    return;
  }
  return sites.find(s => s.domains.some(d => {
    if (typeof d === 'string') {
      return d === hostname;
    }
    return d.test(hostname);
  }));
};
