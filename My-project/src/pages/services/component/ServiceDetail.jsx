import React from 'react'
import image from "../../../assets/image/friends.jpg"
import image2 from "../../../assets/image/buyerImg.jpg"
import image3 from "../../../assets/image/Logistics.jpg"
import image4 from "../../../assets/image/Forums.jpg"
import image5 from "../../../assets/image/questions.jpg"




const ServiceDetail = () => {
  return (
    <div className='services'>
        <h1 className='text-center text-3xl lg:text-5xl sm:text-4xl pt-5 text-green-700 font-bold' >Our Services</h1>
   <div className=" carts flex justify-evenly flex-wrap w-[90%] items-center ml-28 mt-10  ">
    <div className=" cart1 border h-[350px] border-white w-[360px] rounded bg-white mb-12 mt-5 cursor-pointer shadow-lg shadow-slate-900">
       <img src={image} alt="Rommates carryingout indoor farming" className='rounded w-60 ml-14 mt-5 h-52' />
       <h2 className='text-center text-2xl  pt-3 text-green-700 font-bold'>For Farmers</h2>
       <p className='text-center  pt-1 font-semibold'>Sell your farm produce directly to buyers <br /> with ease.</p>
    </div>
    <div className=" cart2 border h-[350px] border-white w-[360px] rounded bg-white mb-12 mt-5 cursor-pointer shadow-lg shadow-slate-900">
        <img src={image2} alt="Satisfied buyer with products" className='rounded w-60 ml-14 mt-5 h-52' />
        <h2 className='text-center text-2xl  pt-3 text-green-700 font-bold'>For Buyers</h2>
        <p className='text-center  pt-1 font-semibold'>Connect with trusted farmers and get <br /> fresh produce.</p>

</div>
<div className=" cart3 border h-[350px] border-white w-[360px] rounded bg-white mb-12 mt-5 cursor-pointer shadow-lg shadow-slate-900">
<img src={image3} alt="Satisfied buyer with products" className='rounded w-60 ml-14 mt-5 h-52' />
        <h2 className='text-center text-2xl  pt-3 text-green-700 font-bold'>Logistics</h2>
        <p className='text-center  pt-1 font-semibold'>We provide seamless delivery solutions <br /> for your orders.</p>

</div>
<div className=" cart4 border h-[380px] border-white w-[720px] rounded bg-white mb-12 mt-5 mr-20 cursor-pointer shadow-lg shadow-slate-900 ">
   <img src={image4}alt=""  className='h-64 w-[750px] rounded'/>
   <h2 className='text-center text-3xl  pt-3 text-green-700 font-bold'>Forums</h2>
   <p className='text-center  pt-1 font-semibold'>Meet Qualified Farmers and Get best tips of how to grow your crops in a more  <br />healthy way</p>
</div>

<div className=" cart5 border h-[400px] border-white w-[340px] rounded bg-white mb-12 mt-5 mr-3 cursor-pointer shadow-lg shadow-slate-900">
   <img src={image5}alt="Ask your questions" />
   <h2 className='text-center text-3xl  pt-3 text-green-700 font-bold'>ChatBox</h2>
   <p className='text-center  pt-1 font-semibold text-md'>Do you have any questions? Engage with our chat box an get Answers to all your questions about Agriculture</p>
</div>

   </div>
    </div>
  )
}

export default ServiceDetail
