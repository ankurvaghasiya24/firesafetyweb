import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import homebg from '../../assets/images/home/homebg.png'

function HomeHerosection() {
  return (
    <Box sx={{
      backgroundImage: `linear-gradient(90deg,rgba(0, 0, 0, 0.755),rgba(0, 0, 0, 0.655),rgba(0, 0, 0, 0)),url(${homebg})`,
      height: "95vh",
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      alignItems: "center"
    }}>
      <Container maxWidth='xl'>
        <Box>
          <Typography
            sx={{
              color: "red",
              fontFamily: "'Lato', sans-serif",
              fontSize: { xs: "24px", sm: "28px", md: "32px" }, 
              py: 1,
              textAlign:{xs:"center",sm:"start",md:"start"}
            }}
          >
            Protecting Anything
          </Typography>
          <Box py={1}>
            <Typography
              variant='h3'
              sx={{
                color: "white",
                fontFamily: "'Lato', sans-serif",
                fontWeight: "900",
                width:{lg:"55%",md:"85%",sm:"100%",xs:"100%"},
                textAlign:{xs:"center",sm:"start",md:"start"}
                }}
                >
              Protecting Lives with Reliable Fire Safety Solutions Worldwide
            </Typography>

          </Box>
          <Box py={1}>
            <Typography sx={{color: "#D4D0CC",fontFamily: "'Lato', sans-serif",fontSize: { xs: "18px", sm: "20px", md: "24px" },width:{lg:"40%",md:"70%",sm:"80%",xs:"100%"},textAlign:{xs:"center",sm:"start",md:"start"}}}>
                Protecting lives and property with advanced fire safety solutions, ensuring prevention, protection, and preparedness for all environments.
            </Typography>
  
          </Box>
          <Box sx={{textAlign:{xs:"center",sm:"start",md:"start"}}}>
            <Button sx={{backgroundColor: "red",color: "white",padding: { xs: "8px 20px", sm: "10px 25px" },mt: { xs: 2, sm: 3, md: 4 }}}>LEARN MORE </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HomeHerosection;
