import React, { useState } from 'react';
import { Box, Container, Card, CardMedia, Divider, Typography,  Button, CardContent, CardActions } from '@mui/material';


const styles = {
    contContent: {
        display: 'flex', 
        position: 'relative',
        alignItems: 'center', 
        bgcolor: '#FFFFFF', 
        color: '#19202D', gap: 2, 
        borderRadius: '5px',
        width: {xs: '85%', sm: '80%', md: '80%', lg: '55%'}
    },
    cardBio: {
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row'}, 
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%',
        bgcolor: 'orange',
    },
    bioImgBox: {
        flex: 5, display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row'}, 
        justifyContent: { xs: 'center', sm: 'space-between'}, 
        alignItems: 'center',
        width: '100%',
        bgcolor: "#fff"
    }
};
  
const DevBioCard = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

    return (
        <>
            <Container sx={ styles.contContent} disableGutters>
                
                <Card  sx={ styles.cardBio }>
                    <Box sx={{ flex:  1, 
                         p: 0.5,
                        position: { xs: 'absolute', sm: 'static'},
                        top: -12,
                        borderRadius: '7px',
                        textAlign: 'center',
                        color: '#fff',
                        bgcolor: { xs: "orange", sm: ''}

                        }}>

                        Scoot
                    </Box>
                    <Box sx={styles.bioImgBox}>
                            
                        <CardContent sx={{ flex: { sm: 2, md: 3},
                             color: '', mt: { xs: 2, sm: 0} }}>
                            <Typography sx={{ textAlign: { xs: 'center', sm: 'left'} }}>Scoot</Typography>
                            <Typography sx={{ textAlign: { xs: 'center', sm: 'left'}, color: 'gray'}}>scoot.com</Typography>
                        </CardContent>

                        <CardActions sx={{ flex: 1, }}>
                            <Button>Company Site</Button>
                        </CardActions>
                    </Box>
                </Card>

            </Container>
        </>
    )
}

export default DevBioCard
