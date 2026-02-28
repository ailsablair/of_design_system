import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

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
