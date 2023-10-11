import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function SectionAbout() {
  const [jsonData, setJsonData] = useState({});


  useEffect(() => {
    // Define the backend API endpoint URL
    const apiUrl = 'http://localhost:8080/about/';

    // Make an HTTP GET request to the backend
    axios.get(apiUrl)
      .then((response) => {
         const data = response.data;
         console.log(response.data);
         setJsonData(data[0]) 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <section>
        <div className="w-100 float-left text-xl-left text-lg-left text-center header-and-banner-con banner-overlay-img">
          <div className="container">
            <div className="generic-banner-content text-white text-center">
              <h1>{jsonData.title}</h1>
              <div className="row justify-content-center">
                <p className="text-white mb-0 mx-md-5 col-md-8">{jsonData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
