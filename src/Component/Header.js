import React from 'react'
import HeaderTop from './HeaderTop'
import Navbar from './Navbar'
import Banner from './Home/Banner'

export default function Header() {
  return (
    <div>
      <HeaderTop/>
      <div className="w-100 float-left header-and-banner-con banner-overlay-img">
         <div className="container">
            <div className="overlay-img">
               

            {/* Navbar */}
            <Navbar/>
            
            </div>
         </div>
      </div>
     
    </div>
  )
}
