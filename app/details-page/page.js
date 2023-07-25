'use client';
import React from 'react'
import { Box, Card, CssBaseline } from "@mui/material";
import DetailsFooter from '@/components/DetailsFooter';
import DetailsMain from '@/components/DetailsMain';
import DevBioCard from '@/components/DevBioCard';
import useDevAPI from '@/api/useDevAPI';
import Cookies from 'js-cookie';

const DetailsPage = () => {

  const { devData } = useDevAPI();
  //console.log(devData);
  
  const devDetailData = devData === null ? [] : devData?.filter(job => job.id === parseInt(Cookies.get('devCookie')));
  //console.log(devDetailData);

  return (
    <>
        <Box sx={{ 
            position: 'fixed', mt: -3, 
            zIndex: 'modal', width: "100%"
            }}>
            <DevBioCard biodata={devDetailData}/>
        </Box>

        <Box sx={{
            bgcolor: '', display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            mt: { xs: 19, sm: 12}
            }} 
        >
            
        <DetailsMain maindata={devDetailData} />

        <Card sx={{
            position: '',
            width: '100%', mt: 5,
            boxShadow: 2 }}>

            <DetailsFooter footdata={devDetailData} />
        </Card>

        </Box>
    </>
    
  )
}

export default DetailsPage;
