import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Container, Card, CardMedia, Divider, Typography,  Button, CardContent, CardActions, Link } from '@mui/material';


const styles = {
    contContent: {
        display: 'flex', 
        position: 'relative',
        alignItems: 'center', 
        bgcolor: '', 
        color: '#19202D', gap: 2, 
        borderRadius: '5px',
        boxShadow: 1,
        width: {xs: '85%', sm: '90%', md: '80%', lg: '55%'}
    },
    cardBio: {
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row'}, 
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%',
        bgcolor: '',
    },
    bioImgBox: {
        flex: 6, display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row'}, 
        justifyContent: { xs: 'center', sm: 'space-between'}, 
        alignItems: 'center',
        width: '100%',
        bgcolor: "#fff"
    }
};
  
const DevBioCard = ({ biodata }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //console.log(biodata)

    return (
            biodata[0] &&
            <Container sx={ styles.contContent} disableGutters>
                
                <Card  sx={ styles.cardBio }>
                    <CardMedia
                        component="img"
                        image={biodata[0]?.logo}
                        alt="Company Logo"
                        sx={{ flex:  1, 
                        position: { xs: 'absolute', sm: 'static'},
                        top: -20,
                        borderRadius: '4px',
                        textAlign: 'center',
                        color: 'transparent',
                        height: {xs:40, sm:80 },
                        width: 52,
                        p: 1,
                        objectFit: "contain",
                        bgcolor: { xs: `${biodata[0]?.logoBackground}`, sm: ''}

                        }} />

                    <Box sx={styles.bioImgBox}>
                            
                        <CardContent sx={{ flex: { sm: 1, md: 3},
                             color: '', mt: { xs: 2, sm: 0} }}>
                            <Typography sx={{ textAlign: { xs: 'center', sm: 'left'} }}>{biodata[0]?.company}</Typography>
                            <Typography sx={{ textAlign: { xs: 'center', sm: 'left'}, color: 'gray'}}>{biodata[0]?.company === undefined ? '' : `${biodata[0]?.company.toLowerCase()}.com`}</Typography>
                        </CardContent>

                        <CardActions sx={{ width: 150 }}>
                            <Link 
                                href={biodata[0]?.website === undefined ? "" : biodata[0]?.website} 
                                target='_blank' 
                                rel="noopener"
                                color='#FFFFFF'
                                underline="none"
                                sx={{ bgcolor: '#5964E0', py: 0.5, px: 1.5, borderRadius: '3px' }}
                                 >
                                Company Site
                            </Link>
                        </CardActions>
                    </Box>
                </Card>
            </Container>
    )
}

export default DevBioCard
