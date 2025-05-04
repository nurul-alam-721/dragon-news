import React, { Suspense } from 'react';
import Categories from '../Components/Categories/Categories';

const LeftAside = () => {
    return (
        <div>
           <Suspense fallback={
            <span className="loading loading-spinner text-info"></span>}>
                 <Categories></Categories>
           </Suspense>
        </div>
    );
};

export default LeftAside;