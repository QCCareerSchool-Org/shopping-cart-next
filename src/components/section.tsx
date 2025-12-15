import type { CSSProperties, FC, PropsWithChildren, ReactNode } from 'react';

interface Props {
  id?: string;
  backgroundImage?: ReactNode;
  className?: string;
  style?: CSSProperties;
  noPadding?: boolean;
}

const getClassName = (noPadding: boolean, className?: string): string | undefined => {
  if (noPadding) {
    return className ? `noPadding ${className}` : 'noPadding';
  }
  return className;
};

export const Section: FC<PropsWithChildren<Props>> = ({ id, backgroundImage, className, style, noPadding = false, children }) => (
  <section id={id} className={getClassName(noPadding, className)} style={style}>
    {backgroundImage}
    <div className="container">
      {children}
    </div>
  </section>
);
