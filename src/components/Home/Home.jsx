import React from 'react'
import Crousal from './Crousal'
import Testimonials from './Testimonials'
import Process from './Process'
import Articals from './Articals'
import Contact from './Contact'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='h-full'>
      <Crousal/>
      {/* <Hero/> */}
      <Testimonials/>
      <Process/>
      <Articals/>
      <Contact/>
    </div>
  )
}

export default Home
