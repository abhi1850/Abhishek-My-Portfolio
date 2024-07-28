import React from 'react';

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

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box sx={headerWrapperStyle}>
            <Grid container alignItems="center">
                <Grid item>
                    <IconButton
                        sx={{
                            cursor: 'pointer',
                            color: '#FFFFFF', // Text color white
                            padding: '10px 20px', // Padding around the icon and text
                        }}
                        aria-label="about"
                        onClick={handleClick}
                    >
                        Home
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        sx={{
                            cursor: 'pointer',
                            color: '#FFFFFF', // Text color white
                            padding: '10px 20px', // Padding around the icon and text
                        }}
                        aria-label="about"
                        onClick={handleClick}
                    >
                        About
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        sx={{
                            cursor: 'pointer',
                            color: '#FFFFFF', // Text color white
                            padding: '10px 20px', // Padding around the icon and text
                        }}
                        aria-label="projects"
                        onClick={handleClick}
                    >
                        Projects
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        sx={{
                            cursor: 'pointer',
                            color: '#FFFFFF', // Text color white
                            padding: '10px 20px', // Padding around the icon and text
                        }}
                        aria-label="experience"
                        onClick={handleClick}
                    >
                        Experience
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        sx={{
                            cursor: 'pointer',
                            color: '#FFFFFF', // Text color white
                            padding: '10px 20px', // Padding around the icon and text
                        }}
                        aria-label="contact"
                        onClick={handleClick}
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
