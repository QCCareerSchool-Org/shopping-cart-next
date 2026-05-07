'use client';

import type { FC } from 'react';

import type { PromoModalContentProps } from './promoModalContent';
import { PromoModalContent } from './promoModalContent';
import { PromoModalFrame } from './promoModalFrame';

interface Props extends PromoModalContentProps {
  show: boolean;
}

export const PromoModal: FC<Props> = props => (
  <PromoModalFrame show={props.show} onHide={props.onHide}>
    <PromoModalContent {...props} />
  </PromoModalFrame>
);

export { PromoModalContent } from './promoModalContent';
export type { PromoModalContentProps } from './promoModalContent';
export { PromoModalDarkBlueBox } from './promoModalDarkBlueBox';
export { PromoModalFrame } from './promoModalFrame';
