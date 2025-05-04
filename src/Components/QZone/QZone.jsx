import React from 'react';
import swimmimg from './../../assets/swimming.png';
import playground from './../../assets/playground.png';
import classImg from './../../assets/class.png';

const QZone = () => {
    return (
        <div className='bg-base-200 mt-8 p-4'>
            <h3 className='text-2xl font-bold'>QZone</h3>
            <img src={swimmimg} alt="" />
            <img src={classImg} alt="" />
            <img src={playground} alt="" />
        </div>
    );
};

export default QZone;