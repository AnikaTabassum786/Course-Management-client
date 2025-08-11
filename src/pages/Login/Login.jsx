import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const { signInUser, setUser } = use(AuthContext)

  const navigate = useNavigate();
   const location = useLocation();
  // const navigate = useNavigate();
  const from = location.state || '/';

  const provider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const [showPassword, setShowPassword] = useState(false)

  const handleToggle = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password)

    signInUser(email, password)
      .then(result => {
        setUser(result.user)
        // alert('Login  Successfully')
        // console.log(user)
        toast.success(`Login  Successfully `, {
          position: "top-right",
        });
        navigate(from)
      })
      .catch(error => {
        // alert(error.code, error.message)
        // console.log(error.code,error.message)
        toast.error(error.message, {
          position: "top-right",
        });
      })

  }

  const handleGoogleLogin = () => {
    //console.log('Clicked')

    signInWithPopup(auth, provider)
      .then(result => {
        // alert('')
        //console.log(result.user)
        setUser(result.user)
        toast.success(`Login  Successfully `, {
          position: "top-right",
        });
        navigate('/')

      })
      .catch(error => {
        alert(error.message)
        //console.log(error.message)
        toast.error(error.message, {
          position: "top-right",
        });
      })
  }

  const handleGithubLogin = () => {
    console.log('Github Login')

    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user)
        // console.log('Github Login Done')
         toast.success(`Login  Successfully `, {
          position: "top-right",
        });
         navigate('/')
      })
      .catch(error => {
        // console.log(error)
        toast.error(error.message, {
          position: "top-right",
        });
      })
  }

  // const handleLogin = () => {
  //   navigate('/login')
  // }

  return (
    <>
     <Helmet>
                            <title>BidyaNiketon | Login</title>
                        </Helmet>
    <div className="hero h-[90vh] mt-16">
      <div className=" card bg-base-100 w-full max-w-sm  shadow-2xl">
        <p className='text-xl text-start pt-2 px-6 font-semibold'>Login</p>
        <div className="flex justify-center  card-body">
          <form
            onSubmit={handleSubmit}
          >
            <label className="label ">Email</label>
            <input type="email" name='email' className="input mt-1" placeholder="Email" required />
            {/* <label className="label mt-2">Password</label>
            <input type="password" name='password' className="input mt-1" placeholder="Password" required /> */}

            <label className="label mt-4 ">Password</label>
            {/* <input type="text" name='password' className="input mt-1" placeholder="Password" required /> */}
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
            <div className='mt-2'><a className="link link-hover ">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4 w-full">Login</button>
          </form>

          <button onClick={handleGoogleLogin} className="btn bg-black text-white border-[#e5e5e5]">
            <svg className='rounded-full ' aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>

          <button onClick={handleGithubLogin} className="btn bg-black text-white border-black">
            <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
            Login with GitHub
          </button>

          <div>
            <p>Don't Account? Please <Link to={'/register'} className='font-semibold text-blue-500 hover:underline'>Register</Link> </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;