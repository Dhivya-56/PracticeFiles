import React from 'react'
import Navbar from './WebsiteTailwindCss/Navbar'
import Hero from './WebsiteTailwindCss/Hero'
import Analytics from './WebsiteTailwindCss/Analytics'
import Newsletter from './WebsiteTailwindCss/Newsletter'
import Cards from './WebsiteTailwindCss/Cards'

const AppWebsiteTailwind = () => {
  return (
    <div className="bg-black">
    <Navbar/>
    <Hero/>
    <Analytics/>
    <Newsletter/>
    <Cards/>
    </div>
  )
}

export default AppWebsiteTailwind
