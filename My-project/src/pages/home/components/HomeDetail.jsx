import React from 'react'
import {Link} from "react-router-dom"

const HomeDetail = () => {
  return (
    <div className="container">
    <div className='text-center  text-white font-bold pt-24 '>
        <h1 className='pt-56 pl-10 text-3xl lg:text-7xl sm:text-4xl'>Welcome To 
        <span className='bg-yellow-500 bg-clip-text text-transparent'>
        {" "}AggroMate
            </span></h1>
            <p className='text-xl tracking-wide pt-5 font-light'>Connecting Farmers & Buyers for a Sustainable Future</p>
              <div className="flex items-center ml-80 gap-2">

             <Link to='FarmerSignup' className='mt-20 '>
                <button className='border w-40 ml-36  h-9 rounded text-black bg-yellow-500 border-yellow-500 text-center pt-1 font-bold'>
                <a href="#" className=''>Join as a Farmer</a>
                </button>
            
             </Link>
            
             <Link to="BuyerSignup" className=''>
                <button className='border w-40  mt-20  h-9 rounded text-black bg-yellow-500 border-yellow-500 text-center pt-1 font-bold'>
                <a href="#" className=''>Join as a Buyer</a>
                </button>

                </Link>
        
             
              </div>

    </div>
   </div>
  )
}

export default HomeDetail
