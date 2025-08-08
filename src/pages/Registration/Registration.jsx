import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Registration = () => {
    const { createUser, updateUser, setUser } = use(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state || '/';

    const handleToggle = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value
        console.log(name, email, photo, password, confirmPassword)

        const isUpperCase = /[A-Z]/;
        const isLowerCase = /[a-z]/;
        const isNumber = /\d/;
        const isSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

        if (password.length < 8) {
            //  alert('Password must be at least 8 characters long')
            toast.warn("Password Must Be 8 Character", {
                position: "top-right",
            });
            return
        }

        else if (isUpperCase.test(password) === false) {
            // alert('Password Must Have Capital Letter')
            toast.warn("Password Must Have Capital Letter", {
                position: "top-right",
            });
            return
        }

        else if (isLowerCase.test(password) === false) {
            // alert('Password Must Have Small Letter')
            toast.warn("Password Must Have Small Letter", {
                position: "top-right",
            });
            return
        }

        else if (isNumber.test(password) === false) {
            // alert('Password Must Have One Number')
            toast.warn("Password Must Have One Number", {
                position: "top-right",
            });
            return;
        }

        else if (isSpecialChar.test(password) === false) {
            // alert('Password Must Have One Special Character')
            toast.warn("Password Must Have One Special Character", {
                position: "top-right",
            });
            return;
        }
        else if (password.includes(email)) {
            // alert('Password cannot contain the email address of the user')
            toast.warn("Password cannot contain the email address of the user", {
                position: "top-right",
            });
            return;
        }

        else if (password !== confirmPassword) {
            // alert('Password and Confirm Password must match')
            toast.warn("Password and Confirm Password must match", {
                position: "top-right",
            });
            return;
        }


        createUser(email, password)
            .then(userCredential => {
                // console.log(result)
                const user = userCredential.user;
                console.log(user);

                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, })
                        // alert('Registration  Successfully')
                        toast.success(`Registration  Successfully `, {
                            position: "top-right",
                        });
                        navigate(from)
                    })
                    .catch((error) => {
                        setUser(user)
                        //  alert(error)
                        toast.error(error, {
                            position: "top-right",
                        });
                    })
            })
            .catch(error => {
                //  console.log(error)
                toast.error(error.message, {
                    position: "top-right",
                });
            })
    }
    return (
        <>
            <Helmet>
                <title>BidyaNiketon | Registration</title>
            </Helmet>
            <div>
                <div className="hero-content flex-col  lg:flex-row-reverse h-[100vh]">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <p className='text-xl text-start pt-2 px-6 font-semibold'>Registration</p>
                        <div className="card-body">
                            <form
                                onSubmit={handleSubmit}
                            >

                                <label className="label">Name</label>
                                <input type="text" name='name' className="input mt-1" placeholder="Name" required />

                                <label className="label mt-2">Photo URL</label>
                                <input name='photo' type="text" className="input mt-1" placeholder="Photo URL" required />

                                <label className="label  mt-2">Email</label>
                                <input type="email" name='email' className="input mt-1" placeholder="Email" required />

                                <label className="label mt-4 ">Password</label>
                                <div className='flex justify-center items-center relative mt-2'>
                                    <input
                                        type={`${showPassword ? 'text' : 'password'}`}
                                        name='password'
                                        className="input mr-3"
                                        placeholder="Password" />

                                    <div onClick={handleToggle} className='absolute ml-[250px] cursor-pointer'>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </div>
                                </div>

                                <label className="label mt-4 ">Confirm Password</label>

                                <input type="password" name='confirmPassword' className="input mt-1" placeholder="Confirm Password" required />

                               


                                <div ><button className="btn btn-neutral mt-4 w-full">Register</button></div>

                            </form>

                            <div>
                                <p>Already registered?   Please <Link to={'/login'} className='font-semibold text-blue-500 hover:underline'>Login</Link> </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;