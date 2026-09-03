import LeftSideVar from "@/components/news/LeftSideVar";
import RightSideVar from "@/components/news/RightSideVar";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");

  // if (!res.ok) {
  //   throw new Error("Failed to fetch categories");
  // }

  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();
  // console.log(categories.news_category);
  

  return (
    <div className="container mx-auto grid grid-cols-12 mt-10 gap-4">
      <div className="col-span-3 text-center">
       <LeftSideVar categories={categories} activeId={null}/>
      </div>
      <div className="bg-purple-500 col-span-6">All News</div>
      <div className="col-span-3">
        <RightSideVar />
      </div>
    </div>
  );
}
