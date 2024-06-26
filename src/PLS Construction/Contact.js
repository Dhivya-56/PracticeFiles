import React from 'react'
import { Box, Typography } from '@mui/material'
const Contact = () => {
  return (
  <Box component="footer" sx={{border:'1px solid black',backgroundColor:'black'}}>
    {/* <Box component="img" src="plscontact.jpg" sx={{width:800}}/> */}
<Typography variant="h4" sx={{color:'white',m:2}}>PLS Constructions</Typography>
<Box sx={{display:'flex',gap:1}}>
<Box component="img" src='plscontact1.jpeg' sx={{display:'flex',width:30,height:30,p:0.5}}/>
 <Typography sx={{color:'white'}}>38933093-02023</Typography>
 <Box component="img" src='plscontact2.jpeg' sx={{display:'flex',width:30,height:30,p:0.5}}/>
 <Typography sx={{color:'white'}}>alaguchandru@gmail.com</Typography>
 <Box component="img" src='plscontact3.jpeg' sx={{display:'flex',width:30,height:30,p:0.5}}/>
 <Typography sx={{color:'white'}}>Alagu_chandru_Pri@Aadhini</Typography>
 </Box>
  </Box>
  )
}

export default Contact
