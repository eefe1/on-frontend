import { Typography, Grid, Card, CardContent, Box } from '@mui/material'
import { Home as HomeIcon, Business, Support } from '@mui/icons-material'

const Home = () => {


  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Welcome to Your App
      </Typography>
      
      <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 6 }}>
        This is the home page of your React application with Material-UI components.
      </Typography>
      
   
    </Box>
  )
}

export default Home 