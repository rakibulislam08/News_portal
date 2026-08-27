import React from 'react';
import logo from "@/assets/logo.png";
import Image from 'next/image';

const Header = () => {
    return (
        <div className='text-center space-y-2'>
            <Image src={logo} alt="Logo" width={300} height={300} alt="Logo" className='mx-auto' />
            <p>Journalism Without Fear or Favour</p>
            <p>Date</p>
        </div>
    );
};

export default Header;