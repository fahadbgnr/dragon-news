import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import ZoneQ from './ZoneQ';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <ZoneQ></ZoneQ>
        </div>
    );
};

export default RightAside;