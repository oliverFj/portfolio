// Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const StyledSidebar = styled('div')({
  backgroundColor: 'lightblue',
  borderBottom: '2px solid black',
  borderLeft: '2px solid black',
  borderRight: '2px solid black',  
  height: '600px',
  flex: '1', // Adjusted style
});


const StyledListItem = styled(ListItem)({
  backgroundColor: 'white', // Default background color
  color: 'black', // Default text color
  borderBottom: '2px solid black',
  '&:hover': {
    backgroundColor: 'lightgray',
    color: 'blue', // Text color on hover
  },
});

const StyledList = styled(List)({
  padding: '0', // Adjusted style
  flex: '1', // Adjusted style
});


const Sidebar = ({ content }) => {
  return (
    <StyledSidebar>
      <StyledList component="nav">
        {content.map((item, index) => (
          <StyledListItem button key={index}>
            <ListItemText primary={item} />
          </StyledListItem>
        ))}
      </StyledList>
    </StyledSidebar>
  );
};

export default Sidebar;
