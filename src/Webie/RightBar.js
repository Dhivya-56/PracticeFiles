import React from 'react'
import { ImageList } from '@mui/material'
import { Box, List, ListItem, ListItemAvatar, ListItemText, Divider, Typography, Avatar, AvatarGroup, ImageListItem } from '@mui/material'

const ITEMDATA = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },]

const RightBar = () => {
  
  return (
    <Box  flex={4} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box sx={{ position: 'fixed',width:300 }}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="avatar-1.png" />
          <Avatar alt="Travis Howard" src="avatar-2.png" />
          <Avatar alt="Cindy Baker" src="avatar-3.png" />
          <Avatar alt="Agnes Walker" src="avatar-4.png" />
          <Avatar alt="Trevor Henderson" src="avatar-1.png" />
          <Avatar alt="Travis Howard" src="avatar-2.png" />
          <Avatar alt="Cindy Baker" src="avatar-3.png" />
          <Avatar alt="Agnes Walker" src="avatar-4.png" />
        </AvatarGroup>
        <Typography>Latest Photos</Typography>
        <ImageList sx={{ width: 450, height: 450 }} cols={3} rowHeight={164} >
          {ITEMDATA.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Box sx={{position:'relative',bottom:230}}>
          <Typography>Latest Conversation</Typography>
          <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="avatar-1.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="avatar-4.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="avatar-3.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default RightBar


