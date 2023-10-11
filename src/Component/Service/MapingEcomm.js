import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Medical12 from '../../assets/images/Medical12.jpeg';

export default function MapingEcomm() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
   const apiUrl = 'http://localhost:8080/mapingEcommerce';

   // Make an HTTP GET request to the backend
   // Make an HTTP GET request to the backend
   axios
     .get(apiUrl)
     .then((response) => {
       setJsonData(response.data);
       console.log(response.data)
       console.log(jsonData)
     })
     .catch((error) => {
       console.error('Error fetching data:', error);
     });
 }, []);
  return (
    <div>
      <section>
        <div className="w-100 float-left py-5 quality-system-con">
          <div className="container">
            {jsonData.map((item, index) => (
              <div className="row" key={index}>
                <div className="col-lg-6 col-md-6">
                  <div className=" position-relative text-center">
                    <figure className="mb-4">
                      <img src={Medical12} alt="quality-system-img" className="img-fluid human-img" />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex align-items-center">
                  <div className="quality-system-left-con">
                    <p className='mb-2'>{item.MapingEcommerce?.section2.description1}</p>
                    <p className=''>{item.MapingEcommerce?.section2.description2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
