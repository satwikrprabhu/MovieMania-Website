import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import CarouselFadeExample from './components/CarouselFadeExample'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <CarouselFadeExample />
    </div>
  )
}

export default App
