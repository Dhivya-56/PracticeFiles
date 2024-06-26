import { Typography, Box } from "@mui/material";
import React from "react";
const serviceArr=[{
    service:'Construction Services',
    image:'plsservice1.jpeg',
    explain:'Construction companies primarily offer civil construction and structural services that usually include concrete construction, earthwork, fabricating form work and also prefabricated concrete for various kind of construction work.'
},{
    service:"Remedial & Repairing Services",
    image:"plsservice(2).jpeg",
    explain:'These services are aimed at protecting or prolonging the lifespan of an existing infrastructure of a building or complex. The repairing services mainly include refurbishment, repairs, protection from corrosion or control of corrosion along with the required maintenance services.'
},{
    service:'Self Engineer Services',
    image:'plsservice3.jpeg',
    explain:'We have many numbers of Engineers who are incredibly talented in designing the structure of House according to the users requirement.The customers are able to select their own engineers themselves to design their dream house.'
}]
const Services = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          color: "#f2933f",
          fontSize: "29px",
          fontWeight: 500,
          fontFamily: "Agbalumo",
          position: "relative",
          left:0,
        }}
      >
        {" "}
        OUR SERVICES
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: 24,
          fontFamily: "Bookman Old Style",
          fontWeight: 400,
          width: 900,
          position:'relative',
          left:140,
        }}
      >
        The firm employs a dynamic team of engineers, scientists and technically
        trained employees with a broad range of experience. This allows us to
        provide first-rate multidisciplinary services.Some of our main services are,
      </Typography>
      {serviceArr.map((item)=>(
        <Box sx={{display:"flex",justifyContent:'space-around',float:'center'}}>
            <Box sx={{p:3,display:'flex',flexDirection:'column'}}>
            <Typography variant="h6" sx={{fontWeight:500,fontFamily:'Arial Rounded MT'}}>{item.service}</Typography>
<Typography variant="body1" sx={{width:400,position:'relative',left:100,p:5,fontFamily:'Cascadia Code',fontSize:20}}>{item.explain}</Typography>
            </Box>
            <Box component="img" src={item.image} sx={{p:3,width:350,height:350}}/>
            </Box>
      ))}
    </Box>
  );
};

export default Services;
