'use client';
import React from 'react';
import { Box, Container, Grid } from "@mui/material";
import SearchBar from '@/components/SearchBar';
import DevCard from "@/components/DevCard";

export default function Home() {

  return (
      <>
      <Box sx={{ 
        position: 'fixed', mt: -3, 
        zIndex: 'modal', width: "100%"
        
        }}>
        <SearchBar />
      </Box>

      <Container sx={{
        display: 'flex', mt: 7,
        alignItems: 'center', 
        justifyContent: {xs:'center', md:'space-between'}, 
        width: {xs: '85%', sm: '80%', md: '90%', lg: '100%'},}} 
        disableGutters>

        <Grid container 
          rowSpacing={6} columnSpacing={{ xs: 3, sm: 3, md: 4, lg: 10, xl: 10 }}
          columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}
          sx={{ fontSize: 14, }} >
          
          <Grid item xs={4}>
            <DevCard />
          </Grid>

          <Grid item xs={4}>
            <DevCard />
          </Grid>

          <Grid item xs={4}>
            <DevCard />
          </Grid>

          <Grid item xs={4}>
            <DevCard />
          </Grid>

          <Grid item xs={4}>
            <DevCard />
          </Grid>
          
        </Grid>

      </Container>
    </>
  )
}
