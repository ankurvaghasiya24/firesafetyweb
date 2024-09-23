import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import homeservice from '../../assets/images/home/BgImage.png'

function HomeService() {
  return (
    <Box>
        <Box sx={{backgroundImage:`url(${homeservice})`,height:"100vh"}}>
           <Container maxWidth='xl'>
                          <Box sx={{display:"flex",justifyContent:"center"}}>
                              <Typography variant={'h4'} mt={10} mb={5}  sx={{color:"red",paddingBottom:"10px",fontWeight:"800",fontFamily:"'Lato',sans-serif",borderBottom:"3px solid white",width:"250px",textAlign:"center"}}>OUR SERVICES</Typography>
                          </Box>
                          <Box sx={{display:"flex",justifyContent:"center"}}>
                              <Typography variant={'h3'} sx={{color:"white",fontWeight:"800",fontFamily:"'Lato',sans-serif",textAlign:"center"}}>We Serve The Best Service</Typography>
                          </Box>
           </Container>
        </Box>
    </Box>
  );
}

export default HomeService;
