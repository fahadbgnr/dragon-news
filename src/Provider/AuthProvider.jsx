import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";



const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser ] = useState(null);
    console.log(user);

    const createUser = (email, password) =>{

        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);

        })
        return ()=>{
            unSubscribe();

        }

    },[])

    const AuthData = {
        user,
        setUser,
        createUser,
    }


    return <AuthContext value={AuthData} >{children}</AuthContext>;
};

export default AuthProvider;