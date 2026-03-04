import type { Preview } from "@storybook/react";  
import { Global, css, ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

/* TODO: update import for your custom theme configurations */
import { lightTheme, darkTheme } from '../src/theme';
import designTokensManifest from '../design-tokens/manifest.json';


const GlobalStyles = () => (
  <Global styles={css`
    body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
  `} />
);

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

  decorators: [withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,
  })]
};

export default preview;
