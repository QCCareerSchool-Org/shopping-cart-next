import { scroller } from 'react-scroll';

const scrollProps = {
  duration: 500,
  smooth: true,
};

export const scrollToPosition = (section: 'courses' | 'shipping' | 'plan' | 'billing'): void => {
  if (section === 'courses') {

    scroller.scrollTo('coursesSection', scrollProps);
  } else if (section === 'shipping') {

    scroller.scrollTo('addressSection', scrollProps);
  } else if (section === 'plan') {

    scroller.scrollTo('paymentSection', scrollProps);
  } else if (section === 'billing') {

    scroller.scrollTo('summarySection', scrollProps);
  }
};
