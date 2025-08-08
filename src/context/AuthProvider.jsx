import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './AuthContext';
import axios from 'axios';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updatedData)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current User Inside", currentUser)
            setUser(currentUser)
            console.log(currentUser?.email)

            // if (currentUser?.email) {
            //     axios.post(`https://course-management-server-mu.vercel.app/jwt`, {
            //         email: currentUser?.email
            //     })
            //         .then(res => {
            //             console.log(res.data)
            //             localStorage.setItem('token', res.data.token)
            //         })
            // }

            if (currentUser?.email) {
                const userData = { email: currentUser.email }
                axios.post('https://course-management-server-mu.vercel.app/jwt',userData,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })
                .catch(error=>console.log(error))
            }
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])

    useEffect(() => {
        if (user) {
            setLoading(false)
        }
    }, [user])



    const authInfo = {
        createUser,
        updateUser,
        user,
        setUser,
        loading,
        setLoading,
        signOutUser,
        signInUser
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;