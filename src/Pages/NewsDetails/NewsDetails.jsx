import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import RightAside from '../../Layouts/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../../Components/NewsDetailsCard/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState([]);

    useEffect(()=>{
        const newsDetails = data.find(singleNews=> singleNews.id == id);
        setNews(newsDetails);
    },[data, id])
    return (
        <div>
           <header>
                <Header></Header>
           </header>
           <main className='w-11/12 mx-auto grid grid-cols-12 gap-6'>
                <section className='col-span-9'>
                    <h3 className='text-2xl font-bold '>News Details</h3>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
           </main>
        </div>
    );
};

export default NewsDetails;