import React from 'react'
import Banner from '../Home/Banner'
import Testimonial from '../Home/Testimonial'
// import About from '../Home/AboutHome'
import Portfolio from '../Home/Portfolio'
import Counter from '../Home/Counter'
import BookingAppointment from '../Home/BookingAppointment'
import AboutHome from '../Home/AboutHome'
import ImageUpload from '../ImageUpload/ImageUpload'

export default function Home() {
  return (
    <div>
        <Banner/>
        <Portfolio/>
        <Counter/>
        <BookingAppointment/>
        {/* <ImageUpload/> */}
        <Testimonial/>
    </div>
  )
}
