import React from 'react'
import image1 from "../../../assets/image/Buyer1.jpg"
import image2 from "../../../assets/image/Buyer2.jpg"
import image3 from "../../../assets/image/Buyer3.jpg"
import image4 from "../../../assets/image/Buyer4.jpg"
import image5 from "../../../assets/image/Buyer5.jpeg"
import image6 from "../../../assets/image/Buyer6.jpg"


const TestimonailDetails = () => {
  return (
    <div>
        <div>
            <h2 className='text-center text-4xl  pt-10 text-green-700 font-bold'>What Our Users Say</h2>
        </div>
        
    <div className='  flex  justify-evenly flex-wrap h-auto pb-12'>
    
    <div className=' border w-[300px] h-[350px] ml-20 mt-10  rounded bg-white border-white'>
        <img src={image1}alt="" className='rounded h-[215px]' />
        <p className='text-center pt-2 font-semibold tracking-wide'>AggroMate has helped me sell my crops directly to buyers at fair prices!</p>
        <h4 className='text-right pt-3 pr-2 text-green-700 font-bold'>Sarah, Farmer</h4>
    </div>

  <div className='border w-[300px] h-[350px] ml-20 mt-10  rounded bg-white border-white'> 
     <img src={image2} alt=""  className='rounded h-[215px]'/>
     <p className='text-center pt-2 font-semibold tracking-wide '>I love how easy it is to connect with fresh produce sellers on <br /> AggroMate.</p>
     <h4 className='text-right pt-3 pr-2 text-green-700 font-bold'>John, Buyer</h4>
  </div>
  <div className='border w-[300px] h-[350px] ml-20 mt-10  rounded bg-white border-white'>
    <img src={image3}alt=""className='rounded h-[215px]' />
    <p className='text-center pt-2 font-semibold tracking-wide '>The logistics service is excellent! <br /> My orders are always on  <br />time.</p>
    <h4 className='text-right pt-3 pr-2 text-green-700 font-bold'>David, Buyer</h4>
  </div>
  <div className='border w-[300px] h-[350px] ml-20 mt-10  rounded bg-white border-white'> 
     <img src={image4} alt="" className='rounded h-[215px]' />
     <p className='text-center pt-2 font-semibold tracking-wide'>AggroMate Has Provided With fresh Products Which Has Hepled My Business Grow</p>
     <h4 className='text-right pt-3 pr-2 text-green-700 font-bold'>Martin, Buyer</h4>
  </div>
  <div className='border w-[300px] h-[350px] ml-20 mt-10  rounded bg-white border-white'>
     <img src={image5} alt=""  className='rounded h-[215px]'/>
     <p className='text-center pt-2 font-semibold tracking-wide'>With AggroMate I Dont Have To Worry About The Quality Of My Products. I Just Enjoy Their Logistics</p>
     <h4 className='text-right pt-3 pr-2 text-green-700 font-bold'>Ashley, Buyer</h4>
  </div>
  <div className='border w-[300px] h-[350px] ml-20 mt-10  rounded bg-white border-white'>
      <img src={image6} alt="" className='rounded h-[215px] w-[500px]' />
      <p className='text-center pt-2 font-semibold tracking-wide'>I have learnt Of Very Safe and Better ways to grow my crops and my yeild has tripled all thanks to AggroMate </p>
      <h4 className='text-right pt-3 pr-2 text-green-700 font-bold'>Jesta,Farmer</h4>
  </div>
</div>
    </div>

  )
}

export default TestimonailDetails
