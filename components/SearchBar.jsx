import React, { useState } from 'react';
import { LocationOn, Search, FilterAlt } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, Divider, Modal, TextField, Typography, Checkbox, Button, IconButton } from '@mui/material';



  
const SearchBar = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const styles = {
        modalContent: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {xs: '85%'}, 
            display: { sm: 'none'},    
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        }
    };

    return (
        <>
        <Container sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                bgcolor: '#FFFFFF', 
                color: '#19202D', gap: 2, px: 2, 
                borderRadius: '5px',
                width: {xs: '85%', sm: '80%', md: '90%', lg: '100%'} }}
                disableGutters>
                
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 2, gap: 1,
                        "& .MuiInputBase-input": {
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }  }}>
                    <Search sx={{ color: '#5964E0'}} /> 
                    <TextField size='small' variant="outlined"
                        sx={{border: 'none',"& fieldset": { border: 'none' }, }}
                        fullWidth
                        placeholder='Filter by title, companies, expertise'  />
                </Box>

                <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', flex: 1, }}>
                    <LocationOn sx={{ color: '#5964E0'}} /> 
                    <TextField size='small' variant='outlined'
                        sx={{border: 'none',"& fieldset": { border: 'none' },}}
                        placeholder='Filter by location…' />
                </Box>

                <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center',
                    justifyContent: 'space-between', gap: 2, flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <Checkbox sx={{ color: '#5964E0'}} /> 
                        <Typography sx={{ color: '#000'}} >Full Time Only</Typography> 
                    </Box>
                    <Button size='small' sx={{ bgcolor: '#5964E0', color: '#FFFFFF', textTransform: 'capitalize'}} >Search</Button>
                </Box>

                <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center',
                    justifyContent: 'space-between', flex: 1 }}>
                    <Button size="small" sx={{ color: '#6E8098'}} onClick={handleOpen}>
                        <FilterAlt /> 
                    </Button>
                    <IconButton sx={{ borderRadius: '5px', bgcolor: '#5964E0', "&:hover": { bgcolor: '#5964E0' }, color: '#FFFFFF'}} size='small' >                
                        <SearchIcon /> 
                    </IconButton>
                </Box>

                {/** Modal Form */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Container sx={ styles.modalContent }>
                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', }}>
                            <LocationOn sx={{ color: '#5964E0'}} /> 
                            <TextField size='small' variant='outlined'
                                sx={{border: 'none',"& fieldset": { border: 'none' }, }}
                                placeholder='Filter by location…' fullWidth />
                        </Box>
                        <Divider />
                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center',
                            justifyContent: 'space-between', gap: 2, }}>
                            <Box sx={{ display: 'flex', alignItems: 'center'}}>
                                <Checkbox sx={{ color: '#5964E0'}} /> 
                                <Typography sx={{ color: '#000'}} >Full Time Only</Typography> 
                            </Box>
                        </Box>
                        <Button size='small' fullWidth 
                            sx={{ bgcolor: '#5964E0', color: '#FFFFFF', 
                            textTransform: 'capitalize'}} >
                                Search
                        </Button>
                    </Container>

                </Modal>

            </Container>
        </>
    )
}

export default SearchBar
