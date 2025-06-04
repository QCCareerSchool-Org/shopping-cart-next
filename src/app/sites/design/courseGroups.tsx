'use client';

import type { CourseGroup } from '@/domain/courseGroup';
import type { GeoLocation } from '@/domain/geoLocation';

const decorating = (geoLocation: GeoLocation): boolean => {
  return geoLocation.countryCode === 'CA' ||
    (geoLocation.countryCode === 'US' && geoLocation.provinceCode === 'LA') ||
    (geoLocation.countryCode === 'US' && geoLocation.provinceCode === 'NV') ||
    (geoLocation.countryCode === 'US' && geoLocation.provinceCode === 'DC');
};

export const courseGroups: CourseGroup[] = [
  {
    items: [
      {
        code: 'I2',
        name: g => (decorating(g) ? 'Interior Decorating' : 'Interior Design'),
        disabledMessage: g => (
          <>
            The <span className="text-primary">{decorating(g) ? 'Interior Decorating' : 'Interior Design'}</span> and the <span className="text-primary">Home Staging</span> courses{' '}
            have course materials in common. If you would like training in both subjects, first <span className="fw-bold"><em>deselect</em> Home Staging</span>,{' '}
            then select both <span className="text-primary">{decorating(g) ? 'Interior Decorating' : 'Interior Design'}</span> and <span className="text-primary">Staging For Designers</span>.
          </>
        ),
      },
      {
        code: 'MS',
        name: 'Staging for Designers',
        disabledMessage: g => (
          <><span className="text-primary">Staging for Designers</span> is an add-on to <span className="text-primary">{decorating(g) ? 'Interior Decorating' : 'Interior Design'}</span>. To enroll in <span className="text-primary">Staging for Designers</span>, please select <span className="text-primary">{decorating(g) ? 'Interior Decorating' : 'Interior Design'}</span> first.</>
        ),
      },
      {
        code: 'ST',
        name: 'Home Staging',
        disabledMessage: g => (
          <>
            <span className="text-primary">Home Staging</span> has course materials in common with <span className="text-primary">{decorating(g) ? 'Interior Decorating' : 'Interior Design'}</span>.{' '}
            If you would like training in both subjects, select <span className="text-primary">Staging For Designers</span> instead.
          </>
        ),
      },
      { code: 'LD', name: 'Landscape Design' },
      { code: 'PO', name: 'Professional Organizing' },
      { code: 'FS', name: 'Feng Shui' },
      { code: 'CC', name: 'Color Consultant Course' },
      { code: 'FD', name: 'Floral Design' },
      { code: 'ED', name: 'Event Decor' },
      { code: 'AP', name: 'Aging in Place' },
      { code: 'DB', name: 'Accelerate Your Design Business' },
      { code: 'VD', name: 'Virtual Design Training' },
    ],
  },
];
