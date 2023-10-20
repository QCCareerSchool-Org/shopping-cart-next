type Site = { domains: Array<string | RegExp>; path: string };

const sites: Site[] = [
  { domains: [ 'enroll.qcmakeupacademy.com', /^makeup.localhost(?::\d+)$/iu ], path: '/makeup' },
  { domains: [ 'enroll.qceventplanning.com', /^event.localhost(?::\d+)$/iu ], path: '/event' },
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
