import Navbar from '@/components/share/Navbar';
import React, { Children } from 'react';

const authLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default authLayout;