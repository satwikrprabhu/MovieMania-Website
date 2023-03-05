import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import CarouselFadeExample from './components/CarouselFadeExample'
import Upnext from './components/Upnext'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
