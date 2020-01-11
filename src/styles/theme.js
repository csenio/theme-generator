import {theme as defaultTheme} from '@chakra-ui/core'

export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    brand: {
      50: '#fff0f4',
      100: '#FFE6ED',
      200: '#FFBFD1',
      300: '#FF99B6',
      400: '#FF4D7F',
      500: '#FF0048',
      600: '#E60041',
      700: '#99002B',
      800: '#730020',
      900: '#4D0016',
    },
  },
  fonts: {
    ...defaultTheme.fonts,
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
}
