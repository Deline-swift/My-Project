import React from 'react'
import image1 from "../../../assets/image/AboutImg1.jpeg"
import image2 from "../../../assets/image/AboutImg2.jpg"
import image3 from "../../../assets/image/AboutImg3.jpeg"
import image4 from "../../../assets/image/AboutImg4.png"
import video from "../../../assets/image/About.mp4"

const AboutUsDetails = () => {
  return (
    <div>
      <div className=''>
      <img src={image1} alt=""  className='w-[250px] absolute top-[49%] ml-14 h-[200px] rounded-lg'/>
      <img src={image3}alt="" className='w-[250px] absolute top-[50%] ml-[26%] h-[170px] rounded-lg' />
      <img src={image2} alt=""  className='w-[250px] absolute top-[49%] ml-[48%] h-[200px] rounded-lg'/>
      <img src={image4}alt=""  className='w-[250px] absolute top-[50%] ml-[70%] h-[170px] rounded-lg'/>
    
        <div className='bg-green-700 h-[300px] '>
            <h1 className='text-center text-4xl text-orange-400 pt-12 font-bold sm:text-4xl tracking-wide'>About Us</h1>
            <p className='text-center pt-3 pb-5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Autem dolore assumenda,  <br />itaque dolores qui optio odio, tempore officia rem nihil quis modi minima  <br />velit! Cumque rem est quisquam suscipit quasi.</p>
        </div>
        <div className='bg-white border h-auto  pl-32'>
            <h2 className='pt-48 text-3xl font-bold tracking-wide text-center '>Lorem ipsum dolor sit amet consectetur adipisicing  <br />elit. Tenetur, mollitia?</h2>
            <div className='flex gap-20  tracking-wide   pt-8'>
                <div className='ml-32 w-[30%] text-justify  '>
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Saepe illum dolorem  nostrum omnis? Iste molestias, blanditiis deleniti ex sint quas obcaecati labore vitae veniam, quis quasi expedita. Assumenda, dolorem quibusdam.
                </div>
                <div className='w-[30%] text-justify'>Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Consectetur necessitatibus voluptas animi officia fuga aspernatur maiores nesciunt tempore dicta, esse accusamus, illo aperiam .</div>
            </div>
            <div className='flex gap-48 '>
            <div>
            <video autoPlay muted src={video} className='w-[400px] ml-20 mt-12 rounded-lg'></video>
            </div>
            <div>
                <h1 className='mt-12 text-3xl font-bold '>Lorem ipsum dolor sit.</h1>
                <p className='text-justify w-[40%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius soluta aut provident voluptas aperiam incidunt.</p>
            </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default AboutUsDetails
