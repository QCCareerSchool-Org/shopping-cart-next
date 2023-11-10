import type { CSSProperties, FC, PropsWithChildren } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';

type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

type Props = {
  variant: Variant;
  hideIcon?: boolean;
};

export const DynamicCourseAlert: FC<PropsWithChildren<Props>> = ({ variant, hideIcon, children }) => (
  <div className={`alert alert-${variant} mb-0`}>
    {!hideIcon && <><DynamicCourseAlertIcon variant={variant} /> </>}
    {children}
  </div>
);

type IconProps = {
  variant: Variant;
};

const iconStyle: CSSProperties = {
  position: 'relative',
  top: -1,
};

const DynamicCourseAlertIcon: FC<IconProps> = ({ variant }) => {
  if (variant === 'success') {
    return <FaCheckCircle style={iconStyle} />;
  }

  if (variant === 'warning' || variant === 'info') {
    return <FaInfoCircle style={iconStyle} />;
  }

  if (variant === 'danger') {
    return <FaExclamationCircle style={iconStyle} />;
  }
};
