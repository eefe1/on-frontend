# Material-UI Setup Guide

This project uses Material-UI (MUI) v5 with a custom theme and modern React patterns.

## 🎨 **Installed Packages**

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto
```

- **@mui/material**: Core Material-UI components
- **@emotion/react & @emotion/styled**: CSS-in-JS styling engine
- **@mui/icons-material**: Material Design icons
- **@fontsource/roboto**: Roboto font family

## 🎯 **Theme Configuration**

### Custom Theme (`src/theme/theme.js`)
```jsx
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    background: { default: '#f5f5f5' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none' }
      }
    }
  }
})
```

### Theme Provider Setup (`src/App.jsx`)
```jsx
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { theme } from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
```

## 🏗️ **Component Architecture**

### 1. **Layout Components**
```jsx
// MainLayout.jsx
import { AppBar, Toolbar, Container, Box } from '@mui/material'

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Navigation />
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}
```

### 2. **Navigation Component**
```jsx
// Navigation.jsx
import { Button, Box, Typography } from '@mui/material'

const Navigation = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <Typography variant="h6" component={Link} to="/">
        Your App
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {navItems.map(item => (
          <Button component={Link} to={item.path}>
            {item.label}
          </Button>
        ))}
      </Box>
    </Box>
  )
}
```

### 3. **Page Components**
```jsx
// Example: Home.jsx
import { Typography, Grid, Card, CardContent } from '@mui/material'

const Home = () => {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              {/* Content */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
```

## 🎨 **Styling Patterns**

### 1. **SX Prop (Recommended)**
```jsx
<Box sx={{ 
  display: 'flex', 
  flexDirection: 'column',
  gap: 2,
  p: 3,
  backgroundColor: 'background.paper'
}}>
```

### 2. **Theme Access**
```jsx
<Box sx={{ 
  color: (theme) => theme.palette.primary.main,
  fontSize: (theme) => theme.typography.h4.fontSize
}}>
```

### 3. **Responsive Design**
```jsx
<Box sx={{ 
  fontSize: { xs: '1rem', md: '1.5rem' },
  padding: { xs: 2, md: 4 }
}}>
```

## 📱 **Responsive Grid System**

### Grid Breakpoints
- **xs**: 0px and up
- **sm**: 600px and up
- **md**: 900px and up
- **lg**: 1200px and up
- **xl**: 1536px and up

### Grid Usage
```jsx
<Grid container spacing={3}>
  <Grid item xs={12} sm={6} md={4}>
    {/* Takes full width on mobile, half on tablet, third on desktop */}
  </Grid>
</Grid>
```

## 🎯 **Common Components**

### 1. **Typography**
```jsx
<Typography variant="h1" component="h1" gutterBottom>
  Main Heading
</Typography>
<Typography variant="body1" color="text.secondary">
  Body text
</Typography>
```

### 2. **Buttons**
```jsx
<Button variant="contained" size="large" startIcon={<Send />}>
  Send Message
</Button>
<Button variant="outlined" color="secondary">
  Cancel
</Button>
```

### 3. **Cards**
```jsx
<Card sx={{ height: '100%' }}>
  <CardContent>
    <Typography variant="h5">Title</Typography>
    <Typography variant="body2">Content</Typography>
  </CardContent>
  <CardActions>
    <Button>Action</Button>
  </CardActions>
</Card>
```

### 4. **Forms**
```jsx
<TextField
  fullWidth
  label="Email"
  type="email"
  required
  variant="outlined"
/>
```

### 5. **Alerts & Notifications**
```jsx
<Snackbar open={open} autoHideDuration={6000}>
  <Alert severity="success">
    Success message
  </Alert>
</Snackbar>
```

## 🎨 **Icons**

### Icon Usage
```jsx
import { Home, Business, Support } from '@mui/icons-material'

<Home color="primary" sx={{ fontSize: 40 }} />
<Business />
<Support />
```

### Icon in Buttons
```jsx
<Button startIcon={<Send />}>
  Send
</Button>
```

## 🎯 **Best Practices**

### 1. **Component Organization**
- Use `Box` for layout containers
- Use `Container` for content width control
- Use `Grid` for responsive layouts
- Use `Paper` for elevated content areas

### 2. **Typography Hierarchy**
- `h1` - Page titles
- `h2` - Section headers
- `h3` - Subsection headers
- `h4` - Card titles
- `h5` - Small headers
- `h6` - Navigation labels
- `body1` - Main content
- `body2` - Secondary content

### 3. **Color Usage**
```jsx
// Primary colors for main actions
color="primary"

// Secondary colors for alternative actions
color="secondary"

// Text colors
color="text.primary"
color="text.secondary"

// Background colors
backgroundColor="background.paper"
backgroundColor="background.default"
```

### 4. **Spacing**
```jsx
// Use theme spacing
sx={{ p: 2 }}        // 16px
sx={{ m: 3 }}        // 24px
sx={{ gap: 1 }}      // 8px
sx={{ spacing: 4 }}  // 32px
```

## 🚀 **Performance Tips**

### 1. **Component Optimization**
```jsx
import { memo } from 'react'

const MyComponent = memo(({ data }) => {
  return <div>{data}</div>
})
```

### 2. **Lazy Loading**
```jsx
import { lazy, Suspense } from 'react'

const LazyComponent = lazy(() => import('./HeavyComponent'))

<Suspense fallback={<CircularProgress />}>
  <LazyComponent />
</Suspense>
```

### 3. **Bundle Optimization**
- Use tree shaking for icons
- Import specific components
- Use dynamic imports for large components

## 📚 **Additional Resources**

- [Material-UI Documentation](https://mui.com/)
- [Material Design Guidelines](https://material.io/design)
- [MUI Theme Customization](https://mui.com/material-ui/customization/theming/)
- [MUI Component API](https://mui.com/material-ui/api/)

## 🎨 **Customization Examples**

### Custom Component Styling
```jsx
// theme.js
components: {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: 'none',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      },
    },
  },
}
```

### Dark Mode Support
```jsx
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // ... other palette options
  },
})
```

This setup provides a solid foundation for building modern, responsive React applications with Material-UI. 