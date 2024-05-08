import React, { useState } from 'react'
import './Header.css'
import { nav } from '../../data/Data'
import { Link } from 'react-router-dom'

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
    <div className="toggle">
    <button onClick={() => setNavList(!navList)}>
      {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
    </button>
    </div>

    <header>
      <div className="container flex">

        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>

        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {nav.map((list, index) =>(
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}

          </ul>
        </div>

        <div className="button flex">
          <h4>
            <span>2</span> My List
          </h4>
          <button className='btn-1'>

            <i className='fa fa-sign-out'></i>
            sign in
          </button>
        </div>

      </div>
    </header>
   
    </>
  )
}

export default Header