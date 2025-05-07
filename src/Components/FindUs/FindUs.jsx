import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h3 className='font-bold text-xl mt-10 mb-2'>Find Us On</h3>
            <div className="join join-vertical w-full">
                <button className="btn join-item bg-base-100 justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item bg-base-100 justify-start"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item bg-base-100 justify-start"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;