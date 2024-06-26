import React from 'react'
import Laptop from '../WebsiteTailassest/laptop.jpg'
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
<img  className='w-[500px] mx-auto my-4'src={Laptop} alt="/"/>
       <div className='flex flex-col justify-center'>
<p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Manage Data Analytics Centrally</h1>
   <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
            </p>   
            <button className="  text-[#00df9a] bg-black w-[200px] my-6 py-3 md:mx-0 font-medium rounded-md ">Get Started</button>
            </div>
            </div>
    </div>
  )
}

export default Analytics
