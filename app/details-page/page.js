'use client';
import React from 'react'
import { Box, Container, Grid } from "@mui/material";
import DetailsFooter from '@/components/DetailsFooter';
import DetailsMain from '@/components/DetailsMain';
import DevBioCard from '@/components/DevBioCard';

const DetailsPage = () => {
  return (
    <>
        <Box sx={{ 
            position: 'fixed', mt: -3, 
            zIndex: 'modal', width: "100%"
            
            }}>
            <DevBioCard />
        </Box>

        <Box sx={{
            bgcolor: '', display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            mt: { xs: 19, sm: 12}
            }} 
        >
            
        <DetailsMain />

        <Box sx={{
            position: 'fixed',
            bottom: 0,
            width: '100%', mt: 5,
            boxShadow: 1 }}>

            <DetailsFooter />
        </Box>

        </Box>
    </>
    
  )
}

export default DetailsPage;
