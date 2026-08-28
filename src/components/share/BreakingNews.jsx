import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='bg-red-100 py-2 px-4 flex items-center  container mx-auto gap-4'>
            <button className='btn bg-red-600 text-white '>Latest</button>
            <Marquee speed={100} pauseOnHover={true}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellendus quisquam beatae dicta culpa id illum hic sapiente quam architecto cumque, magni harum optio omnis quasi voluptates placeat, quia modi!
            </Marquee>
        </div>
    );
};

export default BreakingNews;