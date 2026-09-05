import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideVar = () => {
    return (
        <div>
            <h2 className='font-bold text-lg'>Login With</h2>
            <div className='flex flex-col gap-2 mt-5'>
                <button className='btn text-blue-500'> <FaGoogle />login with Google</button>
                <button className='btn'> <FaGithub />login with github</button>
            </div>
        </div>
    );
};

export default RightSideVar;