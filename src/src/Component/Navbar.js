import React, { useState } from 'react'
import LOGO from '../assets/images/Logosss.png'
import pdf1 from '../assets/images/IDEATOR.pdf'
import pdf2 from '../assets/images/IDEATOR-FP (1).pdf'
import pdf3 from '../assets/images/iDEATOR-DWS.pdf'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <div>
        {/*  <!-- navbar-start --> */}
        <nav className="navbar navbar-expand-lg navbar-light">
                  <Link className="navbar-brand" to="/"><img src={LOGO}  alt="logo-img" className="img-fluid" /></Link>
                  <button className="navbar-toggler p-0 collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                  </button>                     
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ml-auto mr-auto">
                        <li className="nav-item active ">
                           <Link className="nav-link p-0 text-white" to="/">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link p-0 text-white" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item dropdown pr-lg-0">
                           <Link className="nav-link dropdown-toggle p-0 text-white"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Services
                           </Link>
                           <div className="dropdown-menu p-0" aria-labelledby="navbarDropdown">
                              <Link className="dropdown-item" to="/medical">Medical</Link>
                              <Link className="dropdown-item" to="/maping-ecommerce">Maping ecommerce</Link>
                           </div>
                         </li>

                         <li className="nav-item dropdown pr-lg-0">
                           <Link className="nav-link dropdown-toggle p-0 text-white"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Product
                           </Link>
                           <div className="dropdown-menu p-0" aria-labelledby="navbarDropdown">
                           <Link className="dropdown-item" target='_blank' to={pdf1} >iDEATOR</Link>
                              <Link className="dropdown-item" target='_blank' to={pdf2} >iDEATOR-FP</Link>
                              <Link className="dropdown-item" target='_blank'  to={pdf3}>iDEATOR-DWS</Link>
                           </div>
                         </li>
                      
                   

                         <li className="nav-item">
                           <Link className="nav-link p-0 text-white" to="/Contact" > Contact Us </Link>
                        </li>
                     </ul>
                     <Link to="tel:9654370277" target='_blank' className="navbar-btn text-white">
                     <i className="fas fa-phone-volume"></i>
                     +91 96543 70277
                     </Link>
                  </div>
               </nav>
               {/*  <!-- navbar-end --> */}
    </div>
  )
}
