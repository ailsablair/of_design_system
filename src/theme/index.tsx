import { extendTheme } from '@mui/joy/styles';
import desktopTokens from '../../design-tokens/Variable collection.desktop.tokens.json';

declare module '@mui/joy/styles' {
  interface Palette {
    secondary: Palette['primary'];
  }
  interface ColorPalettePropOverrides {
    secondary: true;
  }
}

const { colour } = desktopTokens;
const duskBlue = colour.primary.dusk_blue;
const skyBlue = colour.primary.sky_blue;
const lavaOrange = colour.secondary.lava_orange;
const teal = colour.secondary.teal;
const charcoal = colour.base.neutral.charcoal;
const grey = colour.base.neutral.grey;
const linen = colour.primary.linen;

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: duskBlue['50'].$value,   // #f0f4fa – Dusk Blue 50
          100: duskBlue['100'].$value, // #e9eef7
          200: duskBlue['200'].$value, // #c4cde0
          300: duskBlue['300'].$value, // #899bc1
          400: duskBlue['400'].$value, // #627aad
          500: duskBlue['500'].$value, // #3b5998 – Dusk Blue
          600: duskBlue['600'].$value, // #2f477a
          700: duskBlue['700'].$value, // #23355b
          800: duskBlue['800'].$value, // #18243d
          900: duskBlue['900'].$value, // #121b2e
        },
        secondary: {
          50: skyBlue['50'].$value,   // #e6f3ff – Sky Blue 50
          100: skyBlue['100'].$value, // #cbe0f5
          200: skyBlue['200'].$value, // #bad5f2
          300: skyBlue['300'].$value, // #98c1eb
          400: skyBlue['400'].$value, // #75ace5
          500: skyBlue['500'].$value, // #5397de – Sky Blue
          600: skyBlue['600'].$value, // #4279b2
          700: skyBlue['700'].$value, // #325b85
          800: skyBlue['800'].$value, // #2a4c6f
          900: skyBlue['900'].$value, // #213c59
        },
        danger: {
          50: lavaOrange['25'].$value,  // #feede6 – Lava Orange lightest
          100: lavaOrange['50'].$value, // #fbcab4
          200: lavaOrange['100'].$value, // #f8a782
          300: lavaOrange['200'].$value, // #f5844f
          400: lavaOrange['400'].$value, // #f2611d
          500: lavaOrange['500'].$value, // #f14f04 – Lava Orange
          600: lavaOrange['600'].$value, // #d94704
          700: lavaOrange['700'].$value, // #c13f03
          800: lavaOrange['800'].$value, // #a93703
          900: lavaOrange['900'].$value, // #912f02
        },
        success: {
          50: teal['25'].$value,   // #f4f8f9 – Teal lightest
          100: teal['50'].$value,  // #e8f0f4
          200: teal['100'].$value, // #d2e1e8
          300: teal['200'].$value, // #a5c3d1
          400: teal['300'].$value, // #77a5bb
          500: teal['500'].$value, // #1d698d – Teal
          600: teal['600'].$value, // #175471
          700: teal['700'].$value, // #113f55
          800: teal['800'].$value, // #0c2a38
          900: teal['900'].$value, // #06151c
        },
        neutral: {
          50: grey['grey-50'].$value,   // #f4f4f4
          100: charcoal['100'].$value,  // #d7d7d7
          200: charcoal['200'].$value,  // #aeaeae
          300: charcoal['300'].$value,  // #868686
          400: charcoal['400'].$value,  // #5d5d5d
          500: charcoal['500'].$value,  // #353535 – Charcoal
          600: '#2b2b2b',
          700: '#222222',
          800: '#1a1a1a',
          900: '#111111',
        },
        background: {
          body: linen['500'].$value, // #f7ece1 – Linen 500
        },
      },
    },
  },
  fontFamily: {
    display: 'Barnebok, var(--joy-fontFamily-fallback)',
    body: 'Aileron, var(--joy-fontFamily-fallback)',
  },
});

export const lightTheme = theme;
export const darkTheme = theme;
export default theme;
