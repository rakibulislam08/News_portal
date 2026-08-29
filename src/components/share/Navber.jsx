import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import UserAvatar from '@/assets/user.png'

const Navbar = () => {/*  */
    return (
        <div className='flex justify-between mt-10 container mx-auto'>
            <div></div>
            <ul className='flex justify-between items-center gap-2'>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about_us'}>About Us</Link>
                </li>
                <li>
                    <Link href={'/Careeer'}>Career</Link>
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