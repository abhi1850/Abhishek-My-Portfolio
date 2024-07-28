/* eslint-disable no-unused-vars */
import React from 'react';

import Toolbar from '@mui/material/Toolbar';

import HeaderPopper from './HeaderPopper';

const toolbarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    width: '100vw',
    backgroundColor: '#0D0745',
};
const Header = () => {
    return (
        <Toolbar sx={toolbarStyle}>
            <HeaderPopper />
        </Toolbar>
    );
};

export default Header;
