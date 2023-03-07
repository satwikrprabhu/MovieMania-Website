import React from 'react'
import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Movie from './components/Movie'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/movies' element={<Movie />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
