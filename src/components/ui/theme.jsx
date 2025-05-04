import { extendTheme } from '@chakra-ui/theme-utils'

const theme = extendTheme({
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
  colors: {
    primary: {
      500: '#EF7826',
    },
    gray: {
      100: '#f4f4f4',
      500: '#717171',
      900: '#121212',
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'primary',
      },
    },
  },
})

export default theme