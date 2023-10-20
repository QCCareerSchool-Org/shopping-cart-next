import type { FC } from 'react';
import { Section } from '@/components/section';

type Props = {
  date: number;
};

export const Makeup20231023Promo: FC<Props> = ({ date }) => (
  <Section>
    The date is {new Date(date).toISOString()}
  </Section>
);
