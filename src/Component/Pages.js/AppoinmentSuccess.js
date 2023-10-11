import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ThankY_image from '../../assets/images/thankyou1.png';

export default function AppointmentSuccess() {
  const [jsonData, setJsonData] = useState([]); // Declare jsonData state

  useEffect(() => {
    const apiUrl = "http://localhost:8080/appointments/";

    // Make an HTTP GET request to the backend
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        console.log(response.data);
        setJsonData(data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Check if jsonData has elements before accessing the last one
  const lastName = jsonData.length > 0 ? jsonData[jsonData.length - 1].name : '';
  console.log(lastName)

  return (
    <div>
      <div className='text-center'>
        <img className='thanksyyy' src={ThankY_image} width={'150px'} alt="Thank You" />
        <h1 className='text-capitalize'>{`Congratulations ${lastName} Your Appointment Booked Successfully!`}</h1>
        <p>We have sent your booking information to your email address.</p>
        <Link className="navbar-btn text-white mt-2" to="/view">View Appointment</Link>
      </div>
    </div>
  );
}
