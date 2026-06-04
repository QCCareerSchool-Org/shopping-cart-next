'use client';

import { InteriorDecoratingTag } from './interiorDecoratingTag';
import type { CourseGroup } from '@/domain/courseGroup';

export const courseGroups: CourseGroup[] = [
  {
    items: [
      {
        code: 'I2',
        name: 'Interior Design & Decorating',
        courseCardName: 'Interior Design & Decorating: Career Accelerator',
        disabledMessage: (
          <>
            The <span className="text-primary">Interior Design & Decorating</span> and the <span className="text-primary">Home Staging</span> courses{' '}
            have course materials in common. If you would like training in both subjects, first <span className="fw-bold"><em>deselect</em> Home Staging</span>,{' '}
            then select both <span className="text-primary">Interior Design & Decorating</span> and <span className="text-primary">Staging For Designers</span>.
          </>
        ),
        badge: <InteriorDecoratingTag />,
      },
      {
        code: 'MS',
        name: 'Staging for Designers',
        disabledMessage: (
          <><span className="text-primary">Staging for Designers</span> is an add-on to <span className="text-primary">Interior Design & Decorating</span>. To enroll in <span className="text-primary">Staging for Designers</span>, please select <span className="text-primary">Interior Design & Decorating</span> first.</>
        ),
      },
      {
        code: 'ST',
        name: 'Home Staging',
        disabledMessage: (
          <>
            <span className="text-primary">Home Staging</span> has course materials in common with <span className="text-primary">Interior Design & Decorating</span>.{' '}
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
