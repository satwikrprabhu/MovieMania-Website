import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import CarouselFadeExample from './components/CarouselFadeExample'
import Upnext from './components/Upnext'
import Content from './components/Content'
import Footer from './components/Footer'
import SearchPage from "./SearchPage";
import SingleMovie from "./SingleMovie";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <CarouselFadeExample />
      <Upnext/>
      {/* <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="movie/:id" element={<SingleMovie />} />
    </Routes> */}
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
