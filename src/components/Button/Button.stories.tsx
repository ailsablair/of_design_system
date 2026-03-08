import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { DesignTokensManifest } from '../../types/storybook';

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 * The Button component should be used for primary actions in the application.
 */
const meta = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Primary action button for the Out&Found design system.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outlined', 'ghost'] },
    color: { control: 'select', options: ['primary', 'secondary', 'neutral', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    state: { control: 'select', options: ['default', 'hover', 'disabled'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Primary solid button, used for main calls to action.
 */
export const PrimarySolid: Story = {
  args: {
    label: 'Submit Case File',
    variant: 'solid',
    color: 'primary',
    size: 'md',
    state: 'default',
  },
  render: (args, { globals }) => {
    const designTokens = globals.designTokens as DesignTokensManifest | undefined;
    const tokenSources = designTokens
      ? [
          ...Object.values(designTokens.collections).flatMap((collection) =>
            Object.values(collection.modes).flat()
          ),
          ...Object.values(designTokens.styles ?? {}).flat(),
        ]
      : [];
    return (
      <div style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
        <Button {...args} />
        {tokenSources.length > 0 && (
          <small style={{ opacity: 0.7 }}>
            Design tokens: {tokenSources.join(', ')}
          </small>
        )}
      </div>
    );
  },
};

/**
 * Neutral outlined button for secondary actions.
 */
export const NeutralOutlined: Story = {
  args: {
    label: 'Cancel Process',
    variant: 'outlined',
    color: 'neutral',
    size: 'md',
    state: 'default',
  },
};

/**
 * Disabled state for when actions are unavailable.
 */
export const DisabledState: Story = {
  args: {
    label: 'Syncing with NamUs...',
    variant: 'solid',
    color: 'primary',
    size: 'md',
    state: 'disabled',
  },
};

/**
 * Secondary color variant using Sky Blue.
 */
export const SecondarySkyBlue: Story = {
  args: {
    label: 'Download Evidence',
    variant: 'solid',
    color: 'secondary',
    size: 'md',
    state: 'default',
  },
};

/**
 * Danger color variant using Lava Orange.
 */
export const DangerLavaOrange: Story = {
  args: {
    label: 'Delete File',
    variant: 'solid',
    color: 'danger',
    size: 'md',
    state: 'default',
  },
};
