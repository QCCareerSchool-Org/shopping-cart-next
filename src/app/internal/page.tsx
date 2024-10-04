import Link from 'next/link';

import { Section } from '@/components/section';
import type { PageComponent } from '@/serverComponent';

const InternalPage: PageComponent = () => (
  <Section className="pt-0">
    <h1>Internal Enrollment Form</h1>
    <p className="lead">Please choose a school</p>
    <ul>
      <li><Link href="/internal/makeup">Makeup</Link></li>
      <li><Link href="/internal/event">Event</Link></li>
      <li><Link href="/internal/design">Design</Link></li>
      <li><Link href="/internal/pet">Pet</Link></li>
      <li><Link href="/internal/wellness">Wellness</Link></li>
      <li><Link href="/internal/writing">Writing</Link></li>
    </ul>
  </Section>
);

export default InternalPage;
