import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        <div>
           <Navigate to='/Category/1'></Navigate>
        </div>
    );
};

export default Home;