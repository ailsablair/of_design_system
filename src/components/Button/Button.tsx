import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style of the button */
  variant?: 'solid' | 'outlined' | 'ghost';
  /** The theme color referencing the Dusk Blue or Secondary palettes */
  color?: 'primary' | 'secondary' | 'neutral' | 'danger';
  /** The size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** The interaction state */
  state?: 'default' | 'hover' | 'disabled';
  /** Text label */
  label: string;
  /** Optional start icon (e.g., AddFilled or ArrowForward) */
  startIcon?: React.ReactNode;
  /** Optional end icon */
  endIcon?: React.ReactNode;
}

export const Button = ({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  state = 'default',
  label,
  startIcon,
  endIcon,
  className = '',
  ...props
}: ButtonProps) => {
  const baseClass = 'of-button';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${color}`,
    `${baseClass}--${size}`,
    state !== 'default' ? `${baseClass}--${state}` : '',
    className
  ].join(' ').trim();

  return (
    <button 
      type="button" 
      className={classes} 
      disabled={state === 'disabled'}
      {...props}
    >
      {startIcon && <span className="of-button__icon">{startIcon}</span>}
      <span className="of-button__label">{label}</span>
      {endIcon && <span className="of-button__icon">{endIcon}</span>}
    </button>
  );
};
