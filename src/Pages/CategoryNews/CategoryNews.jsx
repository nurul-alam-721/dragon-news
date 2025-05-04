import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../Components/NewsCard/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

   useEffect(()=>{

    if(id == "0"){
         setCategoryNews(data);
         return;
    }
    else if(id == 1){
        const filteredNews = data.filter(news=> news.others.is_today_pick == true);
        setCategoryNews(filteredNews);
        return;
    }
    else{
        const filteredNews = data.filter(news=> news.category_id == id);
        console.log(filteredNews);
        setCategoryNews(filteredNews);
    }

   },[id, data]);

    return (
        <div>
           <h3 className='font-bold text-2xl text-center mb-2'>Total <span className='text-secondary'> {categoryNews.length} </span> news found</h3>
          <div className='grid grid-cols-1 gap-6'>
            {
                categoryNews.map(news=> <NewsCard key={news.id} news={news}></NewsCard>)
            }
          </div>
        </div>
    );
};

export default CategoryNews;