import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { Stack, Typography } from '@mui/joy';
import { ThemeProvider } from '@mui/joy/styles';
import theme from '../../theme';

const meta: Meta<typeof Icon> = {
  title: 'OutAndFound/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'neutral', 'danger', 'success'],
    },
    size: {
      control: 'select',
      options: [16, 20, 24, 32],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    name: 'Add',
    size: 24,
    color: 'primary',
  },
};

export const Gallery: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography level="h3">Sizes</Typography>
          <Icon name="Search" size={16} />
          <Icon name="Search" size={20} />
          <Icon name="Search" size={24} />
          <Icon name="Search" size={32} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography level="h3">Colors</Typography>
          <Icon name="FavoriteFilled" color="primary" />
          <Icon name="FavoriteFilled" color="secondary" />
          <Icon name="FavoriteFilled" color="danger" />
          <Icon name="FavoriteFilled" color="success" />
          <Icon name="FavoriteFilled" color="neutral" />
        </Stack>
        <Stack direction="row" spacing={4} flexWrap="wrap">
          <Stack alignItems="center" spacing={1}>
            <Icon name="User" size={32} />
            <Typography level="body-xs">User</Typography>
          </Stack>
          <Stack alignItems="center" spacing={1}>
            <Icon name="Settings" size={32} />
            <Typography level="body-xs">Settings</Typography>
          </Stack>
          <Stack alignItems="center" spacing={1}>
            <Icon name="Home" size={32} />
            <Typography level="body-xs">Home</Typography>
          </Stack>
          <Stack alignItems="center" spacing={1}>
            <Icon name="WarningFilled" size={32} color="danger" />
            <Typography level="body-xs">Warning</Typography>
          </Stack>
          <Stack alignItems="center" spacing={1}>
            <Icon name="CheckmarkFilled" size={32} color="success" />
            <Typography level="body-xs">Success</Typography>
          </Stack>
          <Stack alignItems="center" spacing={1}>
            <Icon name="InformationFilled" size={32} color="primary" />
            <Typography level="body-xs">Info</Typography>
          </Stack>
          <Stack alignItems="center" spacing={1}>
            <Icon name="Logout" size={32} />
            <Typography level="body-xs">Logout</Typography>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  ),
};
