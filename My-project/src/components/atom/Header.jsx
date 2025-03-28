import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <nav className="sticky flex justify-between bg-green-700 h-20 ">
    <div className="text-3xl  sm:text-4xl mt-4 font-bold">
       Aggro
       <span className='bg-yellow-600 text-transparent bg-clip-text'>Mate</span>
    </div>
    <ul className='flex tracking-wide gap-8 mt-7 text-md text-white'>
      <Link to="/"><li><a href="#" className='hover:bg-yellow-500 rounded px-2 border-yellow-500 py-2 '>Home</a></li></Link>  
        <Link to="/Services"><li><a href="#" className='hover:bg-yellow-500 rounded px-2 border-yellow-500 py-2 '>Services</a></li></Link>
       <Link to= 'AboutUs'><li><a href="#" className='hover:bg-yellow-500 rounded px-2 border-yellow-500 py-2 '>About Us</a></li></Link> 
       
       <Link to = "Testimonails"> <li><a href="#" className='hover:bg-yellow-500 rounded px-2 border-yellow-500 py-2 '>Testimonails</a></li></Link>
        <Link to="ContactUs"><li><a href="#" className='hover:bg-yellow-500 rounded px-2 border-yellow-500  py-2'>Contact Us</a></li></Link>
    </ul>
    <div className="flex">
        <button className='border w-28 h-8 mt-5 rounded '>Sign Up</button>
        <button className='border w-28 h-8 mt-5 ml-5 rounded bg-yellow-500 border-yellow-500 mr-2'>Login</button>
    </div>
</nav>
  )
}

export default Header
