import React from 'react'
import { Box, Typography } from '@mui/material'
import Post from './Post'
const Feed = () => {
  return (
    <Box  flex={4} p={2} sx={{ display:'flex',flexDirection:'column',gap:"20px"}}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  )
}

export default Feed
