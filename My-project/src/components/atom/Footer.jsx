import React from 'react'

const Footer = () => {
  return (
   
  <div className='flex justify-between bg-green-700 h-[200px] mt-0 pt-5 text-white font-bold  w-full'>
      <div className="tracking-wide ml-12">
        <h1 className='text-2xl sm:text-3xl lg:text-2xl'>Quick Links</h1>
        <ul className='text-center mt-2 '>
                    <li><a href="#home"className='hover:text-yellow-500' >Home</a></li>
                    <li><a href="#services" className='hover:text-yellow-500'>Services</a></li>
                    <li><a href="#about" className='hover:text-yellow-500'>About</a></li>
                    <li><a href="#testimonials" className='hover:text-yellow-500'>Testimonials</a></li>
                    <li><a href="#contact" className='hover:text-yellow-500'>Contact</a></li>
                </ul>
      </div>
      <div className="tracking-wide ml-5">
        <h1 className='text-2xl sm:text-3xl lg:text-2xl'>Follow Us</h1>
        <ul className='text-center mt-2'>
                    <li><a href="#" className='hover:text-yellow-500'>Facebook</a></li>
                    <li><a href="#" className='hover:text-yellow-500'>Twitter</a></li>
                    <li><a href="#" className='hover:text-yellow-500'>Instagram</a></li>
                    <li><a href="#" className='hover:text-yellow-500'>LinkedIn</a></li>
                    <li><a href="#" className='hover:text-yellow-500'>Skype</a></li>
                </ul>
      </div>
      <div className="tracking-wide mr-12">
        <h1 className='text-2xl sm:text-3xl"'>Contact Info</h1>
        <div className="mt-2">
        <p>Email: support@aggromate.com</p>
                <p>Phone: +123 456 7890</p>
                <p>Address: 123 Green Street, Farmville</p>
        </div>
              
      </div>
    </div>
  
  
  )
}

export default Footer
