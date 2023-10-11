import React, { useState, useEffect } from 'react';
import ThankY_image from '../../assets/images/thankyou1.png'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function ThankYou() {
  const [jsonData, setJsonData] = useState([]); // Declare jsonData state

  useEffect(() => {
    const apiUrl = "http://localhost:8080/enquiry/";

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
        <div class='text-center '>
            <img class='thanksyyy' src={ThankY_image} width={'150px'} />
             <h1>Thank You {lastName} 😊</h1>
            <p> for sharing your details with us. Our Team shall connect with you soon.</p>
            <Link class="navbar-btn text-white mt-2" to="/">Go to Home</Link>
        </div>
    </div>
  )
}
