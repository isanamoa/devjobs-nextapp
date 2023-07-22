import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Card, CardContent, Typography } from "@mui/material";

import { contextData } from '@/app/layout';

const DevCard = () => {
    const router = useRouter();

    //const { navbarSate, setNavbarState } = useContext(contextData);

    const handleDevDetails = () => {
        router.push('/details-page');
        //setNavbarState(prev=>!prev);
    }

  return (
    <>
        <Box position='relative' 
            sx={{
                maxwidth: { xs: '100%', sm: 350 }
             }}>
            <Card component='button' onClick={handleDevDetails} 
                sx={{ width: '100%', textAlign: 'left' }} >
                
                <Box position='absolute' top='0px' left='15px' 
                    sx={{ mt: -2,  p: 1, bgcolor: '#E99210', 
                    fontSize: 9, borderRadius: '7px' }}>
                    Scoot
                </Box>
                <CardContent sx={{ mt:2, }}>
                    <Typography sx={{ fontSize: 16 }} 
                        color="text.secondary" gutterBottom>

                        <span>Time</span> &nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                            <circle cx="2" cy="2" r="2" fill="#6E8098"/>
                        </svg> &nbsp;&nbsp;
                        <span>Engagement Basis</span>
                    </Typography>

                    <Typography variant="h1" component="div">
                    </Typography>
                    
                    <Typography variant="body1" sx={{ fontWeight: 500, my: 1, fontSize: 20 }} >
                        Senior Software Engineer
                    </Typography>

                    <Typography sx={{ fontSize: 16, mb: 1.5 }} color="text.secondary">
                        Scoot
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography sx={{ color: '#5964E0', fontWeight: 700 }}>United Kingdom</Typography>
                </CardContent>
            </Card>
        </Box>
    </>
  )
}

export default DevCard
