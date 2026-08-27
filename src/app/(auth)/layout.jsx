import Navbar from '@/components/share/Navber';
import React, { Children } from 'react';

const authLayout = ({ Children }) => {
    return (
        <>
            <Navbar />
            {Children}
        </>
    );
};

export default authLayout;