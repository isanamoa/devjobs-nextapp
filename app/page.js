'use client';
import React, {useState} from 'react';
import { Box, Container, Grid } from "@mui/material";
import SearchBar from '@/components/SearchBar';
import DevCard from "@/components/DevCard";
import useDevAPI from '@/api/useDevAPI';

export default function Home() {
  const [devQuery, setDevQuery] = useState('');

  const { devData } = useDevAPI();
  //console.log(devQuery);

  const gridView = devData && devQuery === '' ? devData.map((devjob) => (
    <Grid key={devjob.id} item xs={4}>
      <DevCard newjob={devjob} />
    </Grid>
  )) : 
  devData && devData.filter((value)=>{
    return value.position.toLowerCase().includes(devQuery.toLowerCase()) ||
    value.company.toLowerCase().includes(devQuery.toLowerCase()) ||
    value.postedAt.toLowerCase().includes(devQuery.toLowerCase()) ||
    value.location.toLowerCase().includes(devQuery.toLowerCase())
  }).map((devjob) => (
    <Grid key={devjob.id} item xs={4}>
      <DevCard newjob={devjob} />
    </Grid>
  )) ;

  return (
      <>
      <Box sx={{ 
        position: 'fixed', mt: -3, 
        zIndex: 'modal', width: "100%"
        
        }}>
        <SearchBar search={setDevQuery} />
      </Box>

      <Container sx={{
        display: 'flex', mt: 7,
        alignItems: 'center', 
        justifyContent: {xs:'center', md:'space-between'}, 
        width: {xs: '85%', sm: '90%', md: '90%', lg: '100%'},}} 
        disableGutters>

        <Grid container 
          rowSpacing={6} columnSpacing={{ xs: 3, sm: 3, md: 4, lg: 10, xl: 10 }}
          columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}
          sx={{ fontSize: 14, }} >
          
          { gridView }
          
          
        </Grid>

      </Container>
    </>
  )
}
