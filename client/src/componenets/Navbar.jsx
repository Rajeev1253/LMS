import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (

           <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon/>
          </IconButton>
        
          <Stack width={"100%"} direction={"row"} justifyContent={"space-between"} sx={{ml:2}}>
          <Stack direction={"row"} gap={4}>
          <Link to={"admin/addbook"} style={{textDecoration:'none'}}>

          <Typography fontSize={"20px"} textAlign={'left'} color={'white'} sx={{ flexGrow: 1 }}>
           Add Book
          </Typography>
          </Link>
          <Link to={"admin/viewbook"}  style={{textDecoration:'none'}}>

          <Typography fontSize={"20px"} textAlign={'left'} color={'white'} sx={{ flexGrow: 1 }}>
           View Books
          </Typography>
          </Link>
            
          </Stack>

          
          <Button color="inherit">Logout</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>

  )
}

export default Navbar