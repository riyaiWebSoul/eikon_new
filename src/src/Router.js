import React, { useEffect } from 'react'
import Home from './Component/Pages.js/Home'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Service from './Component/Pages.js/ServiceMedical'
import Contact from './Component/Pages.js/Contact'
import About from './Component/Pages.js/About'
import ThankYou from './Component/Pages.js/ThankYou'
import ServiceMedical from './Component/Pages.js/ServiceMedical'
import ServiceMapingEcommerce from './Component/Pages.js/ServiceMapingEcommerce'
import AppoinmentSuccess from './Component/Pages.js/AppoinmentSuccess'
import View from './Component/Pages.js/View'

export default function Router() {
  const history = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
        <Routes>
            
                        <Route exact path='/' element={<Home/>} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/medical' element={<ServiceMedical/>} />
                        <Route path='/maping-ecommerce' element={<ServiceMapingEcommerce/>} />
                        <Route path='/Contact' element={<Contact/>} />
                        <Route path='/thank' element={<ThankYou/>} />
                        <Route path='/success' element={<AppoinmentSuccess/>} />
                        <Route path='/view' element={<View/>} />
        </Routes>

    </div>
  )
}
