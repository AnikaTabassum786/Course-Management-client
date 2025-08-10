import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/logo.png'

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext)
  const navigate = useNavigate();


  const handleRegister = () => {
    navigate('/register')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('Log Out')
        // setShowinfo(false);
        // alert('Log out')
        navigate('/login')
      })
      .catch((error) => {
        console.log(error)
        // toast.error(error, {
        //   position: "top-right",
        // });
      })
  }


  const links = <>

    <li><NavLink to='/' className={({ isActive }) =>
      isActive ? "active underline" : ""
    }>Home</NavLink></li>

    

    <li><NavLink to='/add-course' className={({ isActive }) =>
      isActive ? "active underline" : ""
    }>Add Course</NavLink></li>


    <li><NavLink to='/manage-course' className={({ isActive }) =>
      isActive ? "active underline" : ""
    }>Manage Course</NavLink></li>

    <li><NavLink to='/my-enrolled-courses' className={({ isActive }) =>
      isActive ? "active underline" : ""
    }>Enrolled Courses</NavLink></li>

    <li><NavLink to='/instructors' className={({ isActive }) =>
      isActive ? "active underline" : ""
    }>Instructors</NavLink></li>
  </>
  return (
    <>
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div className='flex justify-center items-center'>

            <div> <img className='w-10 h-10' src={logo} alt="Logo" /></div>
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>

          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
     
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2">

        {
          user ?
            <>



              <div className="dropdown dropdown-end">
                <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || ''} alt="User" />
                  </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li><a onClick={handleSignOut}>Logout</a></li>
                </ul>
              </div>

            </>
            :
            <>
              <button onClick={handleLogin} className='btn'>Login</button>
              <button onClick={handleRegister} className='btn'>Registration</button>
            </>
        }


      </div>
    </div>
    
    </>
  );
};

export default Navbar;