import { scroller } from 'react-scroll';

const scrollProps = {
  duration: 500,
  smooth: true,
};

export const scrollToPosition = (section: 'courses' | 'shipping' | 'plan' | 'billing'): void => {
  if (section === 'courses') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    scroller.scrollTo('coursesSection', scrollProps);
  } else if (section === 'shipping') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    scroller.scrollTo('addressSection', scrollProps);
  } else if (section === 'plan') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    scroller.scrollTo('paymentSection', scrollProps);
  } else if (section === 'billing') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    scroller.scrollTo('summarySection', scrollProps);
  }
};
