import { useState } from 'react'
import Navbar from './components/Navbar'
import CarouselFadeExample from './components/CarouselFadeExample'
import Upnext from './components/Upnext'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <CarouselFadeExample />
      <Upnext/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
