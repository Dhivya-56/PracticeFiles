import React from 'react'

const Newsletter = () => {
  return (
    <div className="bg-black w-full text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className='lg:col-span-2'>
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want Tips & Tricks to optimize your flow?</h1>
      <p>Sign up to our newletter and stay up to date.</p>
      </div>
      <div className='my-4'>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input type="email" className='p-3 flex w-full rounded-md text-black'placeholder='Enter Email'/>
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-4 my-6'>Notify me</button>
        </div>
      
      <p>We care about the protection of your data.Read our <span className='text-[#00df9a]'>privacy policy</span>.</p>
      </div>
      </div>
    </div>
  )
}

export default Newsletter

