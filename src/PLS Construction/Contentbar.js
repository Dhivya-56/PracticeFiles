// import React from 'react'
// import { Box, Typography } from '@mui/material'

// const Contentbar = () => {
//   return (
//   <Box>
// <Box component="img" src="plsconstruction.jpg" sx={{width:1210,height:400}}/>
// <Typography variant="h5" sx={{textAlign:'center',fontFamily:'fantasy',lineSpacing:'0.2rem',fontSize:'30px',p:3}}>"We Are Not Only Constructing Your House, <br/>But Your Dreams Tooo.... "</Typography>
//   </Box>
//   )
// }

// export default Contentbar
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
'plsconstruction.jpg',
'plsconstruction1.jpg',
'plsconstruction2.jpg',
'plsconstruction3.jpg',
'plsconstruction4.jpg',
'plsconstruction5.jpg',
'plsconstruction6.jpg',
];

const Contentbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
 setTimeout(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
    }, 5000);

    // return () => {
    //   clearInterval(interval);
    // };
  }, [activeIndex]);

  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeIndex,
  };

  return (
    <Box>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} style={{ width: '100%', height: 400 }} />
          </div>
        ))}
      </Slider>
      <Typography variant="h5" sx={{ textAlign: 'center', fontFamily: 'fantasy', fontSize: '30px', p: 3 }}>
        "We Are Not Only Constructing Your House, <br/>But Your Dreams Too...."
      </Typography>
    </Box>
  );
};

export default Contentbar;
