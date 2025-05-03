import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {
    const {user , logOut } =use(AuthContext);
    const handleLogOut =()=>{
        console.log('User try to logout')
        logOut().then(() => {
           alert("You logged out successfully")
          }).catch((error) => {
           console.log(error);
          });
    }
    return (
        <div className='flex justify-between items-center text-accent'>
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>

            </div>
            <div className="login-btn flex gap-3">
                <img src={userIcon} alt="" />
                {
                    user ? <button onClick={handleLogOut} className='btn btn-primary px-10'>Logout</button> :(<Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>)
                }
            </div>
        </div>
    );
};

export default NavBar;