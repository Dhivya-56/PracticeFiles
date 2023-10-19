import { AppBar, Avatar,Badge, Box,Menu,MenuItem, InputBase, styled,Toolbar, Typography } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import React ,{useState}from 'react'
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Notifications from '@mui/icons-material/Notifications';

const Navbar = () => {
    const[open,setOpen]=useState(false)
    const StyleToolbar=styled(Toolbar)({
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
    })
    const SearchBar=styled("div")({
     backgroundColor:'white',
     padding:'0 10px',
     borderRadius:'6px',
width:"40%"
    })
    const Icons = styled(Box)(({ theme }) => ({
        display: "none",
        alignItems: "center",
        gap: "20px",
        [theme.breakpoints.up("sm")]: {
          display: "flex",
        },
      }));
      
      const UserIcon = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        [theme.breakpoints.up("sm")]: {
          display: "none",
        },
      }));
  return (

    <AppBar position='sticky'>
       <StyleToolbar>
        <Typography variant="h4" sx={{display:{xs:'none',sm:'block'}}}>ZERODHA</Typography>
        <PetsIcon sx={{display:{xs:'block',sm:'none'}}}/>
        <SearchBar><InputBase placeholder="search.."/></SearchBar>
        <Icons>
        <Badge badgeContent={4} color="error">
     <MailIcon/>
        </Badge>
        <Badge badgeContent={4} color="error">
<Notifications  />

        </Badge>
        <Avatar src="avatar-1.png" onClick={()=>setOpen(true)}/>
       </Icons>
       <UserIcon>
       <Avatar src="avatar-1.png" onClick={()=>setOpen(true)}/>
       <Typography variant='small'>Dhivya</Typography>
       </UserIcon>
       <Menu
        id="demo-positioned-menu"
       
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </StyleToolbar> 
       
    </AppBar>

  )
}

export default Navbar
