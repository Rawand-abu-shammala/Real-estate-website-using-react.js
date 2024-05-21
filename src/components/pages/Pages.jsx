import React from 'react'
import Header from '../common/header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from '../home/Home'
import Footer from '../common/footer/Footer'
import About from '../about/About'
import Pricing from '../pricing/Pricing'
import Blog from '../blog/Blog'


const Pages = () => {
  return (
    <>
    <Router>
     <Header />
    <Routes>
      <Route index path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/pricing' Component={Pricing}/>
      <Route path='/blog' Component={Blog}/>


    </Routes>
    <Footer />
    </Router>
    </>
  )
}

export default Pages






