import React from 'react';
import SocialLogin from '../Components/SocialLogin/SocialLogin';
import FindUs from '../Components/FindUs/FindUs';
import QZone from '../Components/QZone/QZone';

const RightAside = () => {
    return (
        <div>
           <SocialLogin></SocialLogin>
           <FindUs></FindUs>
           <QZone></QZone>
        </div>
    );
};

export default RightAside;