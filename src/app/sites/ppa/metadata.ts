import type { PPACourseCode } from '@/domain/ppaCourseCode';

export interface Metadata {
  title: string;
  description: string;
}

export const metadataMap: Record<PPACourseCode, Metadata> = {
  DM: {
    title: '',
    description: '',
  },
  GD: {
    title: '',
    description: '',
  },
  GR: {
    title: '',
    description: '',
  },
  NT: {
    title: '',
    description: '',
  },
  PG: {
    title: '',
    description: '',
  },
  PU: {
    title: '',
    description: '',
  },
  TB: {
    title: '',
    description: '',
  },
  TR: {
    title: '',
    description: '',
  },
  YK: {
    title: '',
    description: '',
  },
};
