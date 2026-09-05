import LeftSideVar from '@/components/news/LeftSideVar';
import NewsPages from '@/components/news/News';
import RightSideVar from '@/components/news/RightSideVar';
import { getCategories, getNewsCategoryId } from '@/lib/data';

const NewsPortalPages = async ({ params }) => {
    const { id } = await params;
    const categories =await getCategories()
    const news =await getNewsCategoryId(id)

    return (
        <div className="container mx-auto grid grid-cols-12 mt-10 gap-4">
            <div className="col-span-3 text-center">
                <LeftSideVar categories={categories} activeId={id} />
            </div>

            <div className="col-span-6">
                <div className="space-y-5 mt-5">
                    {news.map((item) => (
                        <NewsPages key={item._id} news={item} />
                    ))}
                </div>
            </div>

            <div className="col-span-3">
                <RightSideVar />
            </div>
        </div>
    );
};

export default NewsPortalPages;