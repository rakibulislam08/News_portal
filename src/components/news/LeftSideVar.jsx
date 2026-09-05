import Link from 'next/link';
import React from 'react';

const LeftSideVar = ({ categories, activeId }) => {
    return (
        <div>
            <h2 className="mb-5 text-lg text-gray-800">All categories</h2>

            <ul className="flex flex-col gap-5 ">
                {
                    categories.news_category.map((category) => (
                        <li className={`${activeId === category.category_id && "bg-purple-300 text-white"} bg-gray-300 p-2 rounded-md font-semibold
                         text-lg
                             `}
                            key={category.category_id} >
                            <Link href={`/category/${category.category_id}`} className='block'>   {category.category_name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default LeftSideVar;