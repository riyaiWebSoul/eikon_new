import React from 'react'
import Banner from '../Home/Banner'
import Testimonial from '../Home/Testimonial'
import About from '../Home/AboutHome'
import Portfolio from '../Home/Portfolio'
import Counter from '../Home/Counter'
import BookingAppointment from '../Home/BookingAppointment'
import AboutHome from '../Home/AboutHome'

export default function Home() {
  return (
    <div>
        <Banner/>
        <AboutHome/>
        <Portfolio/>
        <Counter/>
        <BookingAppointment/>
        <Testimonial/>
    </div>
  )
}
