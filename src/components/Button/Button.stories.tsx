import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { DesignTokensManifest } from '../../types/storybook';

const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outlined', 'ghost'] },
    color: { control: 'select', options: ['primary', 'secondary', 'neutral', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    state: { control: 'select', options: ['default', 'hover', 'disabled'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Used for primary calls to action, like "Submit Report" or "Generate Matrix"
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

// Used for secondary actions, like "Cancel" or "Go Back"
export const NeutralOutlined: Story = {
  args: {
    label: 'Cancel Process',
    variant: 'outlined',
    color: 'neutral',
    size: 'md',
    state: 'default',
  },
};

// Displays the disabled state during data fetching or API cross-referencing
export const DisabledState: Story = {
  args: {
    label: 'Syncing with NamUs...',
    variant: 'solid',
    color: 'primary',
    size: 'md',
    state: 'disabled',
  },
};

// Test Sky Blue secondary color
export const SecondarySkyBlue: Story = {
  args: {
    label: 'Download Evidence',
    variant: 'solid',
    color: 'secondary',
    size: 'md',
    state: 'default',
  },
};

// Test Lava Orange danger color
export const DangerLavaOrange: Story = {
  args: {
    label: 'Delete File',
    variant: 'solid',
    color: 'danger',
    size: 'md',
    state: 'default',
  },
};
