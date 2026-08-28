
import BreakingNews from '@/components/share/BreakingNews';
import Header from '@/components/share/Header';
import Navbar from '@/components/share/Navber';
import React from 'react';

const mainLayout = ({children}) => {
    return (
        <>
          <Header/>
          <BreakingNews/>
          <Navbar/>
          {children}

        </>
    );
};

export default mainLayout;