import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import UserAvatar from '@/assets/user.png'
import NavLink from './NavLink';

const Navbar = () => {/*  */
    return (
        <div className='flex justify-between mt-10 container mx-auto'>
            <div></div>
            <ul className='flex justify-between items-center text-gray-700 gap-2'>
                <li>
                    <NavLink href={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={"/aboutUs"}>About Us</NavLink>
                </li>
                <li>
                    <NavLink href={"/career"}>Career</NavLink>
                </li>
            </ul>

            <div className='flex items-center gap-3'>
                <Image src={UserAvatar} alt="userAvatar" width={50} height={50}/>
                <button className='btn bg-gray-800 text-white'>
                    <Link href={'/login'}>Log In</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;