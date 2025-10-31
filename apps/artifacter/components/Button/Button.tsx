import { useButton } from 'react-aria';
import { useRef } from 'react';
import type { AriaButtonProps } from 'react-aria';
import styles from './Button.module.scss';

export interface ButtonProps extends AriaButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'negative';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'medium',
    children,
    className = '',
    ...ariaProps
  } = props;
  
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(ariaProps, ref);
  
  const classNames = [
    styles.Button,
    styles[`Button--${variant}`],
    styles[`Button--${size}`],
    isPressed ? styles['is-pressed'] : '',
    ariaProps.isDisabled ? styles['is-disabled'] : '',
    className,
  ].filter(Boolean).join(' ');
  
  return (
    <button {...buttonProps} ref={ref} className={classNames}>
      {children}
    </button>
  );
}
