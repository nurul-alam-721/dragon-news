import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    console.log(news);
    return (
        <div className='space-y-2 p-4 border rounded-xl border-base-200 shadow-lg'>
            <img src={news.image_url} alt="" className='w-full object-cover rounded-xl h-96'/>
            <h3>{news.title}</h3>
            <p>{news.details}</p>
            <Link className=' btn btn-secondary text-md font-semibold' to={`/category/${news.category_id}`}> <FaArrowLeft></FaArrowLeft> Back to Category</Link>
        </div>
    );
};

export default NewsDetailsCard;