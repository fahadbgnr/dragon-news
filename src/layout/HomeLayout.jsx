import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import LOading from '../pages/LOading';

const HomeLayout = () => {
    const {state} = useNavigate();
    return (
        <div>
            <header>
                <Header></Header>
                {import.meta.env.VITE_name}
                <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-5'>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                
              <aside className='col-span-3 sticky top-2 h-fit'>
                <LeftAside></LeftAside>
              </aside>
                <section className="main  col-span-6 ">
                 {state == 'loading'? <LOading/> : <Outlet></Outlet>}   
                </section>
                <aside className='col-span-3 sticky top-2 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;