import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-base-200 p-4'>
            <p className='bg-secondary text-base-100 py-2 px-3 font-semibold'>Latest</p>
            <Marquee className='font-semibold' pauseOnHover={true} speed={80}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as it happened   ! Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as it happened   !</Marquee>
        </div>
    );
};

export default LatestNews;