import React from 'react';
import Box from '@mui/material/Box';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
const MainLayout = ({ children }) => {
    return (<Box component="main">
      <Header />
      {children}
      <Footer />
    </Box>);
};
export default MainLayout;
