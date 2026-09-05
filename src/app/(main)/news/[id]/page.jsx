import { getAllNews } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiArrowToRight } from 'react-icons/bi';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

const NewsDetailsPage = async ({ params }) => {
    // console.log(params);
    const { id } = await params;
    const news =await getAllNews(id)

    return (
        <div className='max-w-4xl mx-auto py-4'>
            <div className="card bg-base-100 shadow-sm ">
                <div className="card-body">
                    {/* <div className='flex justify-between items-center bg-red-300 p-2'>
                        <div className='flex items-center gap-3'>
                            <div >
                                <Image className='rounded-full' src={news.author?.img} alt={news.author?.name} height={40} width={40} />
                            </div>
                            <div>
                                <h2>{news.author?.name}</h2>
                                <h2>{news.author?.published_date}</h2>
                            </div>
                        </div>
                        <div className='flex  gap-3 ext-2xl'>
                            <CiShare2 />
                            <CiBookmark />
                        </div>
                    </div> */}
                    <h2 className="card-title">{news.title}</h2>
                    <figure>
                        <Image src={news.image_url} alt={news.title} height={300} width={300} className='w-full' />
                    </figure>
                    <p className=''>{news.details}</p>
                    <div className="card-actions justify-between items-center mt-5">
                        <div className='flex items-center gap-2'>
                            <h2 className='flex items-center gap-2'><IoIosStar className='text-yellow-400' />{news.rating.number}</h2>
                            <h2 className='flex items-center gap-2'><FaEye />{news.total_view}</h2>
                        </div>
                        <Link href={`/category/${news.category_id}`}>
                            <button className='btn bg-purple-400 text-white'>See Other News in this category <BiArrowToRight className='text-2xl'/></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;