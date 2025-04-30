import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-2 py-3'>Latest</p>

            <Marquee className='' pauseOnHover={true} speed={60}>
            <p className='font-bold'>Match Highlights: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, officiis iste ad autem ducimus fugit, consequuntur hic in sint suscipit provident laudantium alias cupiditate maiores accusantium placeat, explicabo nihil deleniti.</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;