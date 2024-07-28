import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

import { Grid, IconButton } from '@mui/material';
import { Box } from '@mui/system';

import Abhi from '../assets/svg/Abhi.jpeg';
import { theme } from '../theme';

const headerWrapperStyle = {
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '2.5rem',
};

const HeaderPopper = () => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate(); // Initialize the navigate function

    const handleClick = (path) => {
        navigate(path); // Use navigate to change routes
        setOpen(!open); // Optional: toggle state if needed
    };

    return (
        <Box sx={headerWrapperStyle}>
            <Grid container alignItems="center">
                <Grid item>
                    <IconButton
                        sx={{
                            cursor: 'pointer',
                            color: '#FFFFFF',
                            padding: '10px 20px',
                        }}
                        aria-label="home"
                        onClick={() => handleClick('/Home')}
                    >
                        Home
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        sx={{
                            cursor: 'pointer',
                            color: '#FFFFFF',
                            padding: '10px 20px',
                        }}
                        aria-label="about"
                        onClick={() => handleClick('/About')}
                    >
                        About
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        sx={{
                            cursor: 'pointer',
                            color: '#FFFFFF',
                            padding: '10px 20px',
                        }}
                        aria-label="projects"
                        onClick={() => handleClick('/Projects')}
                    >
                        Projects
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        sx={{
                            cursor: 'pointer',
                            color: '#FFFFFF',
                            padding: '10px 20px',
                        }}
                        aria-label="experience"
                        onClick={() => handleClick('/Experience')}
                    >
                        Experience
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        sx={{
                            cursor: 'pointer',
                            color: '#FFFFFF',
                            padding: '10px 20px',
                        }}
                        aria-label="contact"
                        onClick={() => handleClick('/Contact')}
                    >
                        Contact
                    </IconButton>
                </Grid>
                <Grid item sx={{ ml: 2 }}>
                    <Box
                        sx={{
                            height: '35px',
                            width: '35px',
                            borderRadius: '50%',
                            border: `2px solid ${theme.palette.primary.main}`,
                            backgroundImage: `url(${Abhi})`,
                            backgroundSize: 'cover',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HeaderPopper;
