// Footer.js
import React from 'react';
import { styled } from '@mui/system';

const StyledFooter = styled('footer')({
  backgroundColor: 'lightgreen',
  padding: '16px',
  height: '50px',
});

const Footer = () => {
  return <StyledFooter>This is the footer.</StyledFooter>;
};

export default Footer;