import React from 'react'
import { Box, Container, Card, CardMedia, Divider, Typography,  Button, CardContent, CardActions } from '@mui/material';

const DetailsMain = () => {
  return (
    <Container sx={{
        bgcolor: 'green', 
        display: 'flex', 
        flexDirection: 'column',
        width: {xs: '85%', sm: '80%', md: '80%', lg: '55%'},
        bgcolor: '',
        boxShadow: 1,
        p: 2,
        }}  
        disableGutters >

        <Box sx={{ display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row'},
            justifyContent: 'space-between',
            alignItems: {xs: '', sm: 'center'},
            gap: 2,
            width: '100%'
            }} >
            
            <Box sx={{ flex: 4 }} >
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    <span>Time</span> &nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                        <circle cx="2" cy="2" r="2" fill="#6E8098"/>
                    </svg> &nbsp;&nbsp;
                    <span>Engagement Basis</span>
                </Typography>

                <Typography variant="h1" component="div">
                </Typography>
                
                <Typography variant="body1" sx={{ fontWeight: 500, my: 0.5, fontSize: 20 }} >
                    Senior Software Engineer
                </Typography>

                <Typography sx={{ fontSize: 16, mb: 1 }} color="text.secondary">
                    Scoot
                </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
                <Button fullWidth sx={{ bgcolor: '#5964E0', color: '#fff'}}>Apply Now</Button>
            </Box>
        </Box>

        <Box>
            Main Content
        </Box>

    </Container>
  )
}

export default DetailsMain
