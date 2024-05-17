import React from 'react'
import Header from '../common/header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from '../home/Home'
import Footer from '../common/footer/Footer'



const Pages = () => {
  return (
    <>
    <Router>
     <Header />
    <Routes>
      <Route exact path='/' Component={Home}/>

    </Routes>
    <Footer />
    </Router>
    </>
  )
}

export default Pages






