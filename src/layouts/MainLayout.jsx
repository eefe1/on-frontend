import { Outlet } from 'react-router-dom'
import { AppBar, Toolbar, Container, Box, Typography } from '@mui/material'
import Navigation from '../components/Navigation'

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          backgroundColor: '#F6FAFF',
          color: '#333333',
          boxShadow: 'none'
        }}
      >
        <Toolbar>
          <Navigation />
        </Toolbar>
      </AppBar>
      
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#F6FAFF',
          borderTop: 1,
          borderColor: 'divider',
        }}
      >
        <Container>
          <Typography variant="body2" color="text.secondary" align="center">
            © 2024 Your App. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default MainLayout 