import React ,{useState} from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar,Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'

import { Link ,NavLink } from 'react-router-dom';

import '../../style/HeaderStyle.css'

import Logo from '../../images/logo.svg'


const Header = () => {
    const [mobileOpen , setMobileOpen]=useState(false)
    
    // HANDLE MENU CLICK

    const handleDrawerToggle=()=>{
      setMobileOpen(!mobileOpen)
    }

    // MENU DRAWER
    const drwaer=(
      <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography 
       color={'goldenrod'}
       varient="h6"   
       component="div" 
        sx={{flexGrow:1, my:2}}>
        <img src={Logo} alt="logo" height={'70'} width='200'   ></img>
        </Typography>
        <Divider/>
        <ul className='mobile-navigation'>
          <li>
           <NavLink activeClassName="active"  to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/menu'}>Menu</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
        </ul>
      </Box>
    )


  return (
    <>
    <Box>
      <AppBar component={"nav"} sx={{bgcolor:"black"}}>
      <Toolbar>
      <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2 ,display:{sm:"none"}}} 
       onClick={handleDrawerToggle}>
        <MenuIcon/>
      </IconButton>
      <Typography 
       color={'goldenrod'}
       varient="h6"   
       component="div" 
        sx={{flexGrow:1}}>
        <img src={Logo} alt="logo" height={'70'} width='250'   ></img>
        </Typography>
        <Box sx={{display:{xs:"none" ,sm:"block"}}}>

        <ul className='navigation-menu'>
          <li>
            <NavLink activeClassName="active" to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/menu'}>Menu</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
        </ul>
</Box>
      </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer 
        variant='temporary' 
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{display:{xs:'block' , sm:'none'}  , 
        "& .MuiDrawer-paper":{
          boxSizing:'border-box' ,
          width:"240px" ,


        }}}
        >
          {drwaer}
        </Drawer>
      </Box>
      <Box>
       <Toolbar/>   
      </Box>
     {/* i didnt understand why toolbar automatically call menu page */}
    </Box>
    </>
    )
}

export default Header