import React from 'react'
import { Box, Container, Typography, Button } from "@mui/material";

const DetailsFooter = () => {
  return (
    <Container sx={{
        bgcolor: 'green', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: {xs:'center', md:'space-between'}, 
        width: {xs: '85%', sm: '80%', md: '80%', lg: '55%'},
        bgcolor: ''
        }} 
        disableGutters >
        
        <Box sx={{ display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row'},
            justifyContent: 'space-between',
            alignItems: {xs: '', sm: 'center'},
            gap: 2,
            width: '100%'
            }} >
            
            <Box sx={{ flex: 5, display: { xs: 'none', sm: 'block'} }} >
                <Typography variant="body1" sx={{ fontWeight: 500, my: 0.5, fontSize: 20 }} >
                    Senior Software Engineer
                </Typography>

                <Typography sx={{ fontSize: 16, mb: 1 }} color="text.secondary">
                    So Digital Inc.
                </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
                <Button fullWidth sx={{ bgcolor: '#5964E0', color: '#fff'}}>Apply Now</Button>
            </Box>
        </Box>

    </Container>
  )
}

export default DetailsFooter
