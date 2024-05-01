import React from 'react'


import './App.css'
import './index.css'

import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Index from './layouts/Root'
import Otmlar from './pages/Otmlar'
import Home from './pages/Home'
import Yonalishlar from './pages/Yonalishlar'

import Universitetlar from './pages/Universitetlar'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import LoginForm from './components/Login'
import Notfound from './components/Not-found'
import HaqidaOtm from './pages/HaqidaOtm'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Navbar/>} >
      <Route path='/' element={<Home/>} />
          <Route path='yonalishlar' element={<Yonalishlar/>} />
             <Route path='topuniver' element={<Universitetlar/>} />
             <Route path='otmlar' element={<Otmlar/>} />
              <Route path='otmhaqida' element={<HaqidaOtm/>}/>
           
         
            
           
      </Route> 
      <Route>
         <Route path='/login' element={<LoginForm/>} />
          <Route path='*' element={<Notfound/>} />
      </Route>
    </>
  ))
const App = () => {
  return (
     <>
       <RouterProvider  router={router}/>
      
      
           </>
  )
}

export default App