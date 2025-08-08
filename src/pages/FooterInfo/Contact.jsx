import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { toast } from 'react-toastify';

const Contact = () => {

      const [name,setName] = useState('')
     const [email,setEmail]=useState('')
     const [phone,setPhone]= useState('')
     const [address,setAddress] = useState('')
     const [message,setMessage] = useState('')


    const handleSubmit = (e) => {

        e.preventDefault()
        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
        setMessage('')


        toast.success('Submit Successfully', {
         position: "top-right",
      });


    }
  return (
    <>
      <Helmet>
        <title>BidyaNiketon | Contact </title>
      </Helmet>
       <div className='grid grid-cols-1 lg:grid-cols-2 '>


                <div>
                    <p className='my-6 font-semibold text-2xl italic'>Online Inquiry</p>

                    <form onSubmit={handleSubmit} className='col-span-1 flex flex-col gap-2 bg-red-00'>
                        <input type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                         placeholder="Name"
                          name='name'
                         className="input w-full" />
                        <input 
                        type="email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Email"
                        className="input w-full" />

                        <input 
                        type="number" 
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        placeholder="Phone" 
                        className="input w-full" />


                        <input 
                        type="text"
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                        placeholder="Address"
                        className="input w-full" />

                        <textarea 
                         type='text'
                         value={message}
                         onChange={(e)=>setMessage(e.target.value)}
                         className="textarea w-full"
                         placeholder="Message">

                         </textarea>
                        <button className='btn btn-outline bg-black text-white hover:bg-gray-600  w-full lg:w-1/2' type='submit'>Submit</button>
                    </form>
                </div>



                <div className='col-span-1'>
                    <p className='text-center my-6 font-semibold text-2xl italic'>Contact Details</p>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col justify-center items-center'>
                            <FaPhone size={28} />
                            <p>Phone Number</p>
                            <p>01923487825</p>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <IoMdMail size={28} />
                            <p>Email</p>
                            <p>info@bidyaniketon.com</p>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <IoLocation size={28} />
                            <p>Address</p>
                            <p>Gulsan-1, Navana Tower, 3rd Floor</p>
                        </div>
                    </div>
                </div>

            </div>
    </>
  );
};

export default Contact;