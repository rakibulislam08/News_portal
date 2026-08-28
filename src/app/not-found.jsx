import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col gap-4'>
            <h1 className='text-center text-3xl font-bold'>This Page Was Not Founded</h1>

         <Link href="/">
          <button className='btn bg-purple-600 text-white'>Go To Home</button>
         </Link>

        </div>
    );
};

export default NotFound;