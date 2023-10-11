import React from 'react'
import { Link } from 'react-router-dom'
import ThankY_image from '../../assets/images/thankyou1.png'

export default function AppoinmentSuccess() {
  return (
    <div>
      <div class='text-center '>
            <img class='thanksyyy' src={ThankY_image} width={'150px'} />
             <h1>Your Appoinment Booked Successfully!</h1>
            <p> We have sent your booking information to your email address.</p>
            <Link class="navbar-btn text-white mt-2" to="/view">View Appoinment</Link>
        </div>
    </div>
  )
}
