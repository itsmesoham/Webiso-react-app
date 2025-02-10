import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Banner from './components/Banner'
import './App.css'

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <About />
    </div>
  )
}
