import React from 'react'
import image from '../../../assets/image/Contact.jpg'

const ContactUsDetails = () => {
  return (
    <div>
        <div className='flex mb-10'>
            <div>
                <h1    className='text-center pt-10 text-3xl sm:text-4xl lg:text-4xl text-green-700 font-bold'>CONTACT US</h1>
                <img src={image} alt="" className='pt-5' />
            </div>
            <div className='border border-white mt-5 mr-2 w-[600px] space-y-8 pt-28 pl-28 rounded white shadow-xl shadow-slate-400 '>
              <input type="text" id='userName' placeholder='User Name'  className='border block w-[80%] h-[40px] rounded-2xl pl-5'/>
              <input type="email" id='email'  placeholder='Email' className='border block w-[80%] h-[40px] rounded-2xl pl-5'/>
              <input type="text" id='message'  placeholder='Message' className='border w-[80%] h-[100px] rounded-2xl pl-5 '/>
              <button className='block border w-[200px] h-[30px] ml-20 rounded-lg bg-green-700 text-center text-white font-bold'>Send</button>
            </div>
        </div>
      
    </div>
  )
}

export default ContactUsDetails
