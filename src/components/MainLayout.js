// MainLayout.js
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const [headline, setHeadline] = useState("My Portfolio");
  const [sidebarContent, setSidebarContent] = useState(['Gallery', 'Blog', 'About', 'Upload']);

  useEffect(() => {
    // ...you can add logic here to change headline and sidebarContent based on the current route (location.pathname)
  }, [location]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Adjust if needed
        
        padding: '0 20px', // Adjust if needed
      }}
    >
      <div style={{ maxWidth: '1000px', height: '750px', width: '100%' }}>
        <Header headline={headline} />
        <Grid container style={{ height: '600px' }}>
          <Grid item xs={3} style={{ height: '100%', }}>
            <Sidebar content={sidebarContent} />
          </Grid>
          <Grid item xs={9} style={{ height: '100%',  }}>
            <Content content={children} />
          </Grid>
        </Grid>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;