import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Home from './components/Home/Home'
import Contact from './components/Home/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Home/>
     <Footer/>
     
       
    </>
  )
}

export default App
