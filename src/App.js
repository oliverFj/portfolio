// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import MainLayout from './components/MainLayout';  
import Homepage from './pages/Homepage'; 
import GalleryPage from './pages/GalleryPage';  
import BlogPage from './pages/BlogPage'; 
import AboutPage from './pages/AboutPage'; 
import Upload from './pages/Upload'; 

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </MainLayout>
    </Router>  
  );
};

export default App;