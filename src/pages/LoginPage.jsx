import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const LoginPage = () => {
    const [error, setError] = useState("");
    const {signIn}= use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);
    const handleLogin =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({email, password});
        signIn(email, password)
        .then(result=>{
            const user = result.user;
            // console.log(user)
            navigate(`${location.state? location.state : "/"}`)

        })
        .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            setError(errorCode);
            // alert(errorCode, errorMessage);
          });
        
       
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className=' text-center font-semibold text-2xl'>Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">

                        <label className="label">Email</label>
                        <input 
                        name='email'
                        type="email" 
                        className="input" 
                        placeholder="Email" 
                        required
                        />

                        <label className="label">Password</label>
                        <input 
                        name='password'
                        type="password" 
                        className="input" 
                        placeholder="Password" 
                        required
                        />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        {
                            error && <p className='text-red-400 text-xs'>{error}</p>
                        }
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-center pt-5'>Don’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link> </p>
                    </fieldset>

                </form>
            </div>
        </div>
    );
};

export default LoginPage;