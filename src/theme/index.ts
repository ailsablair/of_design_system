import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#f0f4fa',
          100: '#d9e2f1',
          200: '#b6c9e5',
          300: '#8ca9d7',
          400: '#6289c9',
          500: '#385998', // Dusk Blue
          600: '#2f477a',
          700: '#24365d',
          800: '#19253f',
          900: '#0e1422',
        },
        secondary: {
          50: '#f0f9fd',
          100: '#dcf1fa',
          200: '#b9e3f5',
          300: '#91d3ef',
          400: '#69c4e9',
          500: '#3388e8', // Sky Blue
          600: '#296dba',
          700: '#1f538e',
          800: '#153862',
          900: '#0b1e36',
        },
        danger: {
          50: '#fff1f0',
          100: '#ffe3e1',
          200: '#ffc7c2',
          300: '#ffa69e',
          400: '#ff8275',
          500: '#ff4500', // Lava Orange
          600: '#cc3700',
          700: '#992900',
          800: '#661b00',
          900: '#330e00',
        },
        success: {
          50: '#e6f4f3',
          100: '#c2e4e1',
          200: '#99d2cd',
          300: '#70bfb9',
          400: '#47ada5',
          500: '#008080', // Teal
          600: '#006666',
          700: '#004d4d',
          800: '#003333',
          900: '#001a1a',
        },
        neutral: {
          50: '#f7f2ed', // Linen 500 equivalent approx
          100: '#f1f1f1',
          200: '#e1e1e1',
          300: '#d1d1d1',
          400: '#5d5d5d',
          500: '#333333', // Charcoal
          600: '#2b2b2b',
          700: '#222222',
          800: '#1a1a1a',
          900: '#111111',
        },
        background: {
          body: '#f7ece1', // Linen 500
        }
      },
    },
  },
  fontFamily: {
    display: 'Barnebok, var(--joy-fontFamily-fallback)',
    body: 'Aileron, var(--joy-fontFamily-fallback)',
  },
});

export default theme;
