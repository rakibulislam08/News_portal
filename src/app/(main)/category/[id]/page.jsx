import LeftSideVar from '@/components/news/LeftSideVar';
import NewsPages from '@/components/news/News';
import RightSideVar from '@/components/news/RightSideVar';
import React from 'react';


async function getCategories() {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();
    return data.data;
}
// categories id url 
async function getNewsCategoryId(category_Id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_Id}`);
    const data = await res.json();
    return data.data;
}


const newsPortalPages = async ({ params }) => {
    const { id } = await params;
    const categories = await getCategories();
    const news = await getNewsCategoryId(id);


    return (


        <div className="container mx-auto grid grid-cols-12 mt-10 gap-4">
            <div className="col-span-3 text-center">
                <LeftSideVar categories={categories} activeId={id} />
            </div>

            {/* all news  */}
            <div className="col-span-6">Dragon News Home
                <div className="space-y-5 mt-5">
                    {
                        news.map((news) => {

                            return <NewsPages key={news._id} news={news}></NewsPages>
                        }

                        )
                    }
                </div>

            </div>
            {/* ...not-last-of-type: */}
            <div className="col-span-3">
                <RightSideVar />
            </div>

        </div>
    );
};

export default newsPortalPages;