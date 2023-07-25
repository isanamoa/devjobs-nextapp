import React from 'react'
import { Box, Container, Typography, Link } from "@mui/material";

const DetailsFooter = ({ footdata }) => {
  return (
    footdata[0] &&
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
                    {footdata[0]?.position}
                </Typography>

                <Typography sx={{ fontSize: 16, mb: 1 }} color="text.secondary">
                    {footdata[0]?.company}
                </Typography>
            </Box>
            <Box sx={{ flex: 1, }}>
                <Link 
                    href={footdata[0]?.apply === undefined ? "" : footdata[0]?.apply} 
                    target='_blank' 
                    rel="noopener"
                    color='#FFFFFF'
                    underline="none"
                    sx={{  bgcolor: '#5964E0', py: 0.5, px: 1.5, borderRadius: '3px' }}
                    >
                    Apply Now
                </Link>
            </Box>
        </Box>
            
    </Container>
  )
}

export default DetailsFooter
