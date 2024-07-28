import React from 'react';

import { Typography } from '@mui/material';

const Home = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'auto',
            }}
        >
            <Typography sx={{ fontSize: '2rem' }}>
                Home screen in the window
            </Typography>
        </div>
    );
};

export default Home;
