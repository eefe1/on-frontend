import { createTheme } from '@mui/material/styles'
import { buttonVariants } from './buttons'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#dc004e',
      light: '#ff5983',
      dark: '#9a0036',
      contrastText: '#ffffff',
    },
    background: {
      default: '#E6E8EE',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: 'var(--font-family)',
    h1: {
      fontSize: 'var(--font-size-4xl)',
      fontWeight: 'var(--font-weight-bold)',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 'var(--font-size-3xl)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 1.3,
    },
    h3: {
      fontSize: 'var(--font-size-2xl)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 1.4,
    },
    h4: {
      fontSize: 'var(--font-size-xl)',
      fontWeight: 'var(--font-weight-medium)',
      lineHeight: 1.4,
    },
    h5: {
      fontSize: 'var(--font-size-lg)',
      fontWeight: 'var(--font-weight-medium)',
      lineHeight: 1.4,
    },
    h6: {
      fontSize: 'var(--font-size-base)',
      fontWeight: 'var(--font-weight-medium)',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: 'var(--font-size-base)',
      fontWeight: 'var(--font-weight-regular)',
      lineHeight: 'var(--line-height-normal)',
    },
    body2: {
      fontSize: 'var(--font-size-sm)',
      fontWeight: 'var(--font-weight-regular)',
      lineHeight: 'var(--line-height-normal)',
    },
    button: {
      fontSize: 'var(--font-size-base)',
      fontWeight: 'var(--font-weight-medium)',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 24px',
          fontWeight: 'var(--font-weight-medium)',
          fontSize: 'var(--font-size-base)',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          },
        },
      },
      variants: buttonVariants,
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
  },
}) 