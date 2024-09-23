import { Box, Container, Grid, Typography} from '@mui/material';
import React from 'react';
import state from '../../assets/images/home/Group 6.png'
import chart from '../../assets/images/home/chart.png'
import { flushSync } from 'react-dom';

function StatewiseClients() {
  return (
    <Box>
      <Container maxWidth='xl'>

      <Box py={10}>
          <Typography sx={{display:"flex",justifyContent:"center",color:"red",textAlign:"center",fontSize:{lg:"38px",sm:"34px",xs:"28px"},fontWeight:"900",fontFamily:"'Lato',sans-serif"}}>STATEWISE <span style={{color:"black"}}>CLIENTS</span></Typography>
          <Box sx={{display:"flex",justifyContent:"center"}}>
              <Typography sx={{borderBottom:"4px solid black",width:{xs:"270px",sm:"330px",md:"330px",lg:"370px"}}}></Typography>
          </Box>
      </Box>

                <Grid item container xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"} spacing={10} pt={5}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                          <img src={state} alt="" width={"100%"}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <img src={chart} alt="" width={"100%"}/>
                    </Grid>
                </Grid>
      </Container>
    </Box>
  );
}

export default StatewiseClients;
