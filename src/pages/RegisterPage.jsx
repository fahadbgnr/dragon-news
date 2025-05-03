import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const RegisterPage = () => {
    const [nameError, setNameError] = useState('');
    const {createUser, setUser}= use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        if(name.length <5){
            setNameError("Name Should be more then 5 character");
            return;
        }else{
            setNameError("");
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, photo, email, password});
        createUser(email, password)
        .then(result=>{
           const user = result.user;
        //    console.log(user);
        setUser(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });
        


    }
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className=' text-center font-semibold text-2xl'>Register your account</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">

                            <label className="label">Name</label>
                            <input
                                type="text"
                                name='name'
                                className="input"
                                placeholder="Name"
                                required
                            />
                            {
                                nameError && <p className='text-red-400 text-xs'>{nameError}</p>
                            }

                            <label className="label">Photo Url</label>
                            <input
                                type="text"
                                name='photo'
                                className="input"
                                placeholder="Photo Url"
                                required 
                            />

                            <label className="label">Email</label>
                            <input
                                type="email"
                                name='email'
                                className="input"
                                placeholder="Email" 
                                required
                            />

                            <label className="label">Password</label>
                            <input
                                type="password"
                                name='password'
                                className="input"
                                placeholder="Password" 
                                required
                            />

                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            <p className='font-semibold text-center pt-5'> Allready Have An Account ? <Link className='text-secondary' to='/auth/login'>Login</Link> </p>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;