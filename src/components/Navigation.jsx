import { Link, useLocation } from 'react-router-dom'
import { Button, Box, Typography } from '@mui/material'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'

const Navigation = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
      {/* Logo on the left */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
            '&:hover': {
              color: 'white',
            },
          }}
        >
          Avukatim
        </Typography>
      </Box>
      
      {/* Authentication buttons on the right */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          variant="light"
          startIcon={<LoginRoundedIcon />}
        >
          Giriş Yap
        </Button>
        <Button
          variant="dark"
          startIcon={<PersonOutlineRoundedIcon />}
        >
          Kayıt Ol
        </Button>
      </Box>
    </Box>
  )
}

export default Navigation 