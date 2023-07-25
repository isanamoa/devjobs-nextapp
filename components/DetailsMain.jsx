import React from 'react'
import { Box, Container, Card, List, ListItem, Typography,  Link } from '@mui/material';

const DetailsMain = ({ maindata }) => {
  return (
    
    maindata[0] && 
    <Container sx={{
        bgcolor: 'green', 
        display: 'flex', 
        flexDirection: 'column',
        width: {xs: '85%', sm: '90%', md: '80%', lg: '55%'},
        bgcolor: '',
        boxShadow: 2,
        }}  
        disableGutters >

        <Card sx={{width: '100%', p: 3 }}>
            <Box sx={{ display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row'},
                justifyContent: 'space-between',
                alignItems: {xs: '', sm: 'center'},
                gap: 2,
                width: '100%'
                }} >
                
                <Box sx={{ flex: 4 }} >
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        <span>{maindata[0]?.postedAt}</span> &nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                            <circle cx="2" cy="2" r="2" fill="#6E8098"/>
                        </svg> &nbsp;&nbsp;
                        <span>{maindata[0]?.contract}</span>
                    </Typography>

                    <Typography variant="h1" component="div">
                    </Typography>
                    
                    <Typography variant="body1" sx={{ fontWeight: 500, my: 0.5, fontSize: '1.2rem' }} >
                        {maindata[0]?.position}
                    </Typography>

                    <Typography sx={{ fontSize: 16, mb: 1 }} color="text.secondary">
                        {maindata[0]?.location}
                    </Typography>
                </Box>
                <Box sx={{ flex: 1, }}>
                    <Link 
                        href={maindata[0]?.apply === undefined ? "" : maindata[0]?.apply} 
                        target='_blank' 
                        rel="noopener"
                        color='#FFFFFF'
                        underline="none"
                        sx={{ bgcolor: '#5964E0', py: 0.5, px: 1.5, borderRadius: '3px' }}
                            >
                        Apply Now
                    </Link>
                </Box>
            </Box>

            <Box sx={{ fontSize: '0.9rem', mt: 3 }}>
                <Typography variant="body1" sx={{ my: 0.5,  }} >
                    {maindata[0]?.description}
                </Typography>
                <Typography variant="h6" sx={{ mt:2, fontWeight: 700, fontSize: '1.1rem' }}>
                    {maindata[0]?.requirements && 'Requirements'}
                </Typography>
                <Typography variant="body1" sx={{ my: 0.5,  }} >
                        {maindata[0]?.requirements.contents}
                </Typography>
                <List>
                    {
                        maindata[0]?.requirements.items.map((item, index) => 
                        (<ListItem key={index}>{item}</ListItem>))
                    }
                </List>

                <Typography variant="h6" sx={{ mt:3, fontWeight: 700, fontSize: '1.1rem' }}>
                    {maindata[0]?.role && 'What You Will Do'} 
                </Typography>
                
                <Typography variant="body1" sx={{ my: 0.5,  }} >
                        {maindata[0]?.role.contents}
                </Typography>
                <List sx={{ listStyleType: 'disc' }}>
                    {
                        maindata[0]?.role.items.map((item, index) => 
                        (<ListItem key={index}>{item}</ListItem>))
                    }
                </List>
            </Box>
        </Card>

    </Container>
  )
}

export default DetailsMain
