import { createTheme } from '@mui/material/styles'

// Custom button styles
export const customButtonStyles = {
  light: {
    background: 'linear-gradient(90deg, #0e82fd 0.09%, #06aed4 70.28%)',
    border: '1px solid #0e82fd',
    borderRadius: '44px',
    width: '126px',
    height: '42px',
    color: '#fff',
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--font-size-base)',
    fontWeight: 'var(--font-weight-medium)',
    lineHeight: '150%',
    textAlign: 'center',
    textTransform: 'none',
    boxShadow: 'none',
    '&:active': {
      background: 'linear-gradient(90deg, #0859b3 0.09%, #0485a2 70.28%)',
    },
    '&:disabled': {
      background: '#e0e0e0',
      border: '1px solid #e0e0e0',
      color: '#9e9e9e',
    },
  },
  dark: {
    backgroundColor: '#012047',
    border: '1px solid #012047',
    borderRadius: '44px',
    width: '117px',
    height: '42px',
    color: '#fff',
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--font-size-base)',
    fontWeight: 'var(--font-weight-medium)',
    lineHeight: '150%',
    textAlign: 'center',
    textTransform: 'none',
    boxShadow: 'none',
    '&:active': {
      backgroundColor: '#00142d',
    },
    '&:disabled': {
      backgroundColor: '#e0e0e0',
      border: '1px solid #e0e0e0',
      color: '#9e9e9e',
    },
  },
}

// Button variants for MUI theme
export const buttonVariants = [
  {
    props: { variant: 'light' },
    style: customButtonStyles.light,
  },
  {
    props: { variant: 'dark' },
    style: customButtonStyles.dark,
  },
]

// Helper function to create button with custom styles
export const createCustomButton = (variant = 'light', customProps = {}) => {
  const baseStyle = customButtonStyles[variant] || customButtonStyles.light
  
  return {
    ...baseStyle,
    ...customProps,
  }
} 