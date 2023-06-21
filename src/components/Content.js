// Content.js
import React from 'react';
import { styled } from '@mui/system';

const StyledContent = styled('div')({
  backgroundColor: 'lightgray',
  height: '600px',
  flex: '2', // Adjusted style
});

const Content = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;