import React from 'react'
import Crousal from './Crousal'
import Testimonials from './Testimonials'
import Process from './Process'
import Articals from './Articals'
import Contact from './Contact'

const Home = () => {
  return (
    <div className='h-full'>
      <Crousal/>
      <Testimonials/>
      <Process/>
      <Articals/>
      <Contact/>
    </div>
  )
}

export default Home
