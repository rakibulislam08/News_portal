'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';

const NavLink = ({ href, children }) => {

    const pathname = usePathname();
    console.log(pathname, "pathname");
    const isActive = pathname === href;

    return (
        <Link href={href}  className={` ${isActive ? "border-b-2 border-purple-500": " "}`}>
            {children}
        </Link>
    );
};

export default NavLink;