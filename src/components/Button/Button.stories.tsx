import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import desktopTokens from '../../../design-tokens/Variable collection.desktop.tokens.json';

const { colour } = desktopTokens;

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
  render: (args) => (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
      <Button {...args} />
      <small style={{ opacity: 0.7 }}>
        Token: colour.primary.dusk_blue.500 · {colour.primary.dusk_blue['500'].$value}
      </small>
    </div>
  ),
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
  render: (args) => (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
      <Button {...args} />
      <small style={{ opacity: 0.7 }}>
        Token: colour.base.neutral.charcoal.500 · {colour.base.neutral.charcoal['500'].$value}
      </small>
    </div>
  ),
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
  render: (args) => (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
      <Button {...args} />
      <small style={{ opacity: 0.7 }}>
        Token: colour.primary.dusk_blue.500 · {colour.primary.dusk_blue['500'].$value} (disabled)
      </small>
    </div>
  ),
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
  render: (args) => (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
      <Button {...args} />
      <small style={{ opacity: 0.7 }}>
        Token: colour.primary.sky_blue.500 · {colour.primary.sky_blue['500'].$value}
      </small>
    </div>
  ),
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
  render: (args) => (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
      <Button {...args} />
      <small style={{ opacity: 0.7 }}>
        Token: colour.secondary.lava_orange.500 · {colour.secondary.lava_orange['500'].$value}
      </small>
    </div>
  ),
};
