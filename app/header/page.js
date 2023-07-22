'use client';
import React, { useContext } from 'react'
import { DarkMode, LightMode } from '@mui/icons-material'
import { AppBar, Box, Container, Switch, Typography,  } from '@mui/material'
import { contextData } from '../layout';

const Header = () => {

    const { navbarSate } = useContext(contextData);


    return (
        <AppBar sx={{ bgcolor: '#5964E0', 
            borderRadius: { xs: 0, sm: '0px 0px 0px 70px' }, 
            height: '100px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'}}>
            
            <Container sx={{ py: 1, mb: 1, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                width: {xs: '85%', sm: '80%', md: '90%', lg: '100%'} }} 
                disableGutters>
                
                <Typography variant='h5'>devjobs</Typography>
                <Box sx={{  display: 'flex', alignItems: 'center', 
                    justifyContent: 'space-between' }}>
                    <LightMode /> <Switch /> <DarkMode />
                </Box>

            </Container>

        </AppBar>
    )
}

export default Header
