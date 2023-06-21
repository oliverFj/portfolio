// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: 'orange',
  border: '2px solid black',
  height: '50px',
  justifyContent: 'center',
  alignItems: 'left',
}));

const Header = ({ headline }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6">{headline}</Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;