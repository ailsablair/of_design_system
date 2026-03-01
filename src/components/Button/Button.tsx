import React from 'react';
import { Button as JoyButton, ButtonProps as JoyButtonProps } from '@mui/joy';
import { ThemeProvider } from '@mui/joy/styles';
import theme from '../../theme';

export interface ButtonProps extends Omit<JoyButtonProps, 'variant' | 'color' | 'size'> {
  /** The visual style of the button */
  variant?: 'solid' | 'outlined' | 'ghost';
  /** The theme color referencing the Dusk Blue or Secondary palettes */
  color?: 'primary' | 'secondary' | 'neutral' | 'danger';
  /** The size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** The interaction state (maps to Joy UI states) */
  state?: 'default' | 'hover' | 'disabled';
  /** Text label */
  label: string;
}

export const Button = ({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  state = 'default',
  label,
  startDecorator,
  endDecorator,
  ...props
}: ButtonProps) => {
  // Map our custom variants to Joy UI variants
  const joyVariantMap = {
    solid: 'solid' as const,
    outlined: 'outlined' as const,
    ghost: 'plain' as const,
  };

  return (
    <ThemeProvider theme={theme}>
      <JoyButton
        variant={joyVariantMap[variant]}
        color={color}
        size={size}
        disabled={state === 'disabled'}
        startDecorator={startDecorator}
        endDecorator={endDecorator}
        {...props}
      >
        {label}
      </JoyButton>
    </ThemeProvider>
  );
};
