import React from 'react';

const LeftSideVar = ({categories, activeId}) => {
    return (
        <div>
            <h2 className="mb-5 text-lg text-gray-800">All categories</h2>

            <ul className="flex flex-col gap-5 ">
                {
                    categories.news_category.map((category) => (
                        <li className={`${activeId === category.category_id &&"bg-purple-500 text-white" } bg-gray-300 p-2 rounded-md font-semibold
                         text-lg
                             `}
                            key={category.category_id} >
                            {category.category_name}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default LeftSideVar;