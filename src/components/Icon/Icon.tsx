import React from 'react';
import * as CarbonIcons from '@carbon/icons-react';
import { SvgIcon, SvgIconProps } from '@mui/joy';
import { ThemeProvider } from '@mui/joy/styles';
import theme from '../../theme';

export type IconName = keyof typeof CarbonIcons;

export interface IconProps extends Omit<SvgIconProps, 'color' | 'size'> {
  /** The name of the Carbon Icon to display */
  name?: IconName;
  /** The size of the icon */
  size?: 16 | 20 | 24 | 32;
  /** Custom color from the theme or any valid CSS color */
  color?: 'primary' | 'secondary' | 'neutral' | 'danger' | 'success' | string;
  /** The icon component itself if name is not used */
  icon?: React.ElementType;
}

/**
 * A wrapper component for IBM Carbon Icons integrated with the Out&Found design system.
 */
export const Icon = ({
  name,
  size = 20,
  color = 'neutral',
  icon: IconComponent,
  sx,
  ...props
}: IconProps) => {
  // Determine which component to render
  const Component = IconComponent || (name ? (CarbonIcons[name] as React.ElementType) : null);

  if (!Component) {
    if (name) {
       console.warn(`Icon: name "${name}" not found in @carbon/icons-react`);
    }
    return null;
  }

  // Map theme colors to palette values if applicable
  const getIconColor = () => {
    if (['primary', 'secondary', 'neutral', 'danger', 'success'].includes(color)) {
      return `var(--joy-palette-${color}-500)`;
    }
    return color;
  };

  return (
    <ThemeProvider theme={theme}>
      <SvgIcon
        component={Component}
        viewBox="0 0 32 32"
        {...props}
        sx={{
          fontSize: size,
          width: size,
          height: size,
          color: getIconColor(),
          ...sx,
        }}
      />
    </ThemeProvider>
  );
};
