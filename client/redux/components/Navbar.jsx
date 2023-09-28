import React from 'react';
import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import DrawerContainer from '../containers/DrawerContainer.jsx';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const StyledAppBar = styled(AppBar)(({theme}) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
}));

const Navbar = () => {
    return (
        <StyledAppBar position='sticky'>
            <StyledToolbar >
                <Typography variant='h6' color='#283618'>🎾 Love All</Typography>
                <DrawerContainer />
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default Navbar;