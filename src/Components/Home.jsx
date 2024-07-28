import React from 'react';

import { Card, Typography } from '@mui/material';

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
            <Card
                sx={{ height: '50vh', width: '20vh', overflow: 'auto    ' }}
                elevation={5}
            >
                Hello in Card nkjsdnckdnds dsjnsdkj Hello in Card nkjsdnckdnds
                dsjnsdkj Hello in Card nkjsdnckdnds dsjnsdkj Hello in Card
                nkjsdnckdnds dsjnsdkj Hello in Card nkjsdnckdnds dsjnsdkj Hello in
                Card nkjsdnckdnds dsjnsdkj Hello in Card nkjsdnckdnds dsjnsdkj Hello
                in Card nkjsdnckdnds dsjnsdkj Hello in Card nkjsdnckdnds dsjnsdkj
                Hello in Card nkjsdnckdnds dsjnsdkj Hello in Card nkjsdnckdnds
                dsjnsdkj Hello in Card nkjsdnckdnds dsjnsdkj Hello in Card
                nkjsdnckdnds dsjnsdkj Hello in Card nkjsdnckdnds dsjnsdkj Hello in
                Card nkjsdnckdnds dsjnsdkj Hello in Card nkjsdnckdnds dsjnsdkj Hello
                in Card nkjsdnckdnds dsjnsdkj
            </Card>
        </div>
    );
};

export default Home;
