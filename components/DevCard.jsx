import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
//import { contextData } from '@/app/layout';
import Image from 'next/image';
import Cookies from 'js-cookie';

const DevCard = ({ newjob }) => {
    const router = useRouter();

    //const { navbarSate, setNavbarState } = useContext(contextData);

    const handleDevDetails = (jobId) => {
        router.push('/details-page');
        Cookies.set('devCookie', jobId)
        //setNavbarState(prev=>!prev);
    }

  return (
    <>
        <Box position='relative' 
            sx={{
                maxwidth: { xs: '100%', sm: 350 }
             }}>
            <Card component='button' onClick={()=>handleDevDetails(newjob.id)} 
                sx={{ width: '100%', textAlign: 'left', bg: 'transparent',
                border: 'none',"& fieldset": { border: 'none'}, cursor: 'pointer' }} >
                <Box 
                    sx={{ 
                        position: 'absolute', 
                        //zIndex: 'modal',
                        mt: -1.5, ml: 1.5, p: 1,
                        bgcolor: `${newjob.logoBackground}`, 
                        borderRadius: '7px' }} 
                >
                <Image src={newjob.logo} alt='kaha' width='15' height='10'/>

                </Box>
                   
                <CardContent sx={{ mt:2, }}>
                    <Typography sx={{ fontSize: 16 }} 
                        color="text.secondary" gutterBottom>

                        <span>{newjob.postedAt}</span> &nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                            <circle cx="2" cy="2" r="2" fill="#6E8098"/>
                        </svg> &nbsp;&nbsp;
                        <span>{newjob.contract}</span>
                    </Typography>

                    <Typography variant="h1" component="div">
                    </Typography>
                    
                    <Typography variant="body1" sx={{ fontWeight: 500, my: 1, fontSize: '1.1rem' }} >
                        {newjob.position}
                    </Typography>

                    <Typography sx={{ fontSize: 16, mb: 1.5 }} color="text.secondary">
                        {newjob.company}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography sx={{ color: '#5964E0', fontWeight: 700 }}>{newjob.location}</Typography>
                </CardContent>
            </Card>
        </Box>
    </>
  )
}

export default DevCard
