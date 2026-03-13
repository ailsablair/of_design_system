import type { Preview } from "@storybook/react";  
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

/* TODO: update import for your custom theme configurations */
import theme from '../src/theme';
import designTokensManifest from '../design-tokens/manifest.json';

const preview: Preview = {
  globals: {
    designTokens: designTokensManifest,
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story) => (
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <Story />
      </CssVarsProvider>
    ),
  ],
};

export default preview;
