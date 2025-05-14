import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor:'brown'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Blog App
          </Typography>
          <Link to={"/Blog"}><Button color="inherit" style={{color:'white'}}>BLOG</Button></Link>
          <Link to={"/Addblog"}><Button color="inherit" style={{color:'white'}}>ADDBLOG</Button></Link>
          <Link to={"/"}><Button color="inherit" style={{color:'white'}} onClick={()=>{
            sessionStorage.removeItem('logintoken');
          }} >Logout</Button></Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
