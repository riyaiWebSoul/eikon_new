import React from 'react'
import ThankY_image from '../../assets/images/thankyou1.png'
import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <div>
        <div class='text-center '>
            <img class='thanksyyy' src={ThankY_image} width={'150px'} />
             <h1>Thank You !</h1>
            <p> for sharing your details with us. Our Team shall connect with you soon.</p>
            <Link class="navbar-btn text-white mt-2" to="/">Go to Home</Link>
        </div>
    </div>
  )
}
