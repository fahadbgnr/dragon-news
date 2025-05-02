import React from 'react';
import swimmingImg from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playground from '../../assets/playground.png';


const ZoneQ = () => {
    return (
        <div className=' bg-base-200 p-3'>
            <h2 className='font-bold mb-5'> QZone </h2>
            <div className="gap-5 flex flex-col items-center justify-center">
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playground} alt="" />

            </div>
        </div>
    );
};

export default ZoneQ;