import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res=>res.json());

const Categories = () => {
    const categories = use(categoryPromise);
    console.log(categories)
    return (
        <div>
            <h3 className='font-bold'>All Categories ({categories.length})</h3>
            <div className='grid grid-cols-1 mt-4 gap-4 border-0'>
                {
                    categories.map(category=>
                    <NavLink key={category.id} to={`/category/${category.id}`} className={"btn bg-base-100 font-semibold text-accent border-0 hover:bg-base-200"}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;