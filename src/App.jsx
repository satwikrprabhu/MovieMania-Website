import { useState } from 'react'
<<<<<<< HEAD

=======
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
>>>>>>> origin/main
import Navbar from './components/Navbar'
import MovieSearch from './components/MovieSearch'
import CarouselFadeExample from './components/CarouselFadeExample'
import Upnext from './components/Upnext'
import Content from './components/Content'
import Footer from './components/Footer'
<<<<<<< HEAD


=======
import SearchPage from "./SearchPage";
import SingleMovie from "./SingleMovie";
>>>>>>> origin/main
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <MovieSearch/>
      
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
