export async function getCategories() {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();
    return data.data;
}
// categories id url 
export async function getNewsCategoryId(category_Id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_Id}`);
    const data = await res.json();
    return data.data;
}
export async function getAllNews(news_id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`);
    const data = await res.json();
    return data.data[0];
}




