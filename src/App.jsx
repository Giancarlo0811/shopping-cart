import { useState } from 'react'
import { Link } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './components/Home'
import Store from './components/Store'
import About from './components/About'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar />
    <Container className='mb-4'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='tienda' element={<Store/>}/>
        <Route path='sobre-nosotros' element={<About/>}/>
      </Routes>
    </Container>
    </>
  )
}

export default App
